// Vercel serverless function for SoundBoard Pro GitHub Stars.
// Required environment variables:
//   GITHUB_CLIENT_ID
//   GITHUB_CLIENT_SECRET
//   GITHUB_CALLBACK_URL   e.g. https://your-domain.example/api/github?action=callback
//   GITHUB_REPO           e.g. Null1x/SoundBoard-Pro
//   SESSION_SECRET        long random string
//
// GitHub App permissions required:
//   User permissions -> Starring: Read and write
//   Repository permissions -> Metadata: Read-only

import crypto from 'node:crypto';

const API_VERSION = '2026-03-10';

function send(res, status, body, headers = {}) {
  res.statusCode = status;
  res.setHeader('Content-Type', 'application/json; charset=utf-8');
  res.setHeader('Cache-Control', 'no-store');
  for (const [key, value] of Object.entries(headers)) res.setHeader(key, value);
  res.end(JSON.stringify(body));
}

function getCookies(req) {
  const raw = req.headers.cookie || '';
  const out = {};
  for (const piece of raw.split(';')) {
    const i = piece.indexOf('=');
    if (i === -1) continue;
    const k = piece.slice(0, i).trim();
    const v = piece.slice(i + 1).trim();
    try { out[k] = decodeURIComponent(v); } catch { out[k] = v; }
  }
  return out;
}

function cookie(name, value, options = {}) {
  const attrs = [`${name}=${encodeURIComponent(value)}`, 'Path=/'];
  if (options.maxAge != null) attrs.push(`Max-Age=${options.maxAge}`);
  if (options.httpOnly !== false) attrs.push('HttpOnly');
  attrs.push(`SameSite=${options.sameSite || 'Lax'}`);
  if (process.env.NODE_ENV === 'production') attrs.push('Secure');
  return attrs.join('; ');
}

function clearCookie(name) {
  return cookie(name, '', { maxAge: 0 });
}

function key() {
  return crypto.createHash('sha256').update(process.env.SESSION_SECRET || 'change-me').digest();
}

function encryptToken(token) {
  const iv = crypto.randomBytes(12);
  const cipher = crypto.createCipheriv('aes-256-gcm', key(), iv);
  const encrypted = Buffer.concat([cipher.update(token, 'utf8'), cipher.final()]);
  const tag = cipher.getAuthTag();
  return Buffer.concat([iv, tag, encrypted]).toString('base64url');
}

function decryptToken(value) {
  try {
    const buf = Buffer.from(value, 'base64url');
    if (buf.length < 28) return null;
    const iv = buf.subarray(0, 12);
    const tag = buf.subarray(12, 28);
    const encrypted = buf.subarray(28);
    const decipher = crypto.createDecipheriv('aes-256-gcm', key(), iv);
    decipher.setAuthTag(tag);
    return Buffer.concat([decipher.update(encrypted), decipher.final()]).toString('utf8');
  } catch {
    return null;
  }
}

function appOrigin(req) {
  const proto = req.headers['x-forwarded-proto'] || 'https';
  const host = req.headers['x-forwarded-host'] || req.headers.host;
  return `${proto}://${host}`;
}

function envOrFail() {
  const required = ['GITHUB_CLIENT_ID', 'GITHUB_CLIENT_SECRET', 'GITHUB_CALLBACK_URL', 'GITHUB_REPO', 'SESSION_SECRET'];
  const missing = required.filter((name) => !process.env[name]);
  if (missing.length) throw new Error(`Missing environment variables: ${missing.join(', ')}`);
}

async function githubFetch(path, options = {}) {
  return fetch(`https://api.github.com${path}`, {
    ...options,
    headers: {
      Accept: 'application/vnd.github+json',
      'X-GitHub-Api-Version': API_VERSION,
      ...(options.headers || {})
    }
  });
}

function redirect(res, location, cookies = []) {
  res.statusCode = 302;
  res.setHeader('Location', location);
  if (cookies.length) res.setHeader('Set-Cookie', cookies);
  res.end();
}

export default async function handler(req, res) {
  try {
    envOrFail();

    const url = new URL(req.url, appOrigin(req));
    const action = url.searchParams.get('action') || 'count';
    const repo = process.env.GITHUB_REPO;
    const [owner, name] = repo.split('/');

    if (!owner || !name) return send(res, 500, { error: 'Invalid GITHUB_REPO' });

    if (action === 'login') {
      const state = crypto.randomBytes(32).toString('hex');
      const authorize = new URL('https://github.com/login/oauth/authorize');
      authorize.searchParams.set('client_id', process.env.GITHUB_CLIENT_ID);
      authorize.searchParams.set('redirect_uri', process.env.GITHUB_CALLBACK_URL);
      authorize.searchParams.set('state', state);
      redirect(res, authorize.toString(), [cookie('sb_github_state', state, { maxAge: 600 })]);
      return;
    }

    if (action === 'callback') {
      const code = url.searchParams.get('code');
      const state = url.searchParams.get('state');
      const cookies = getCookies(req);
      if (!code || !state || !cookies.sb_github_state || state !== cookies.sb_github_state) {
        return send(res, 400, { error: 'Invalid OAuth state' });
      }

      const form = new URLSearchParams({
        client_id: process.env.GITHUB_CLIENT_ID,
        client_secret: process.env.GITHUB_CLIENT_SECRET,
        code,
        redirect_uri: process.env.GITHUB_CALLBACK_URL
      });

      const tokenResponse = await fetch('https://github.com/login/oauth/access_token', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: form.toString()
      });
      const token = await tokenResponse.json();
      if (!tokenResponse.ok || !token.access_token) {
        return send(res, 502, { error: 'GitHub OAuth token exchange failed' });
      }

      // Star immediately after authorization so the user experiences the button as one action.
      const starResponse = await githubFetch(`/user/starred/${encodeURIComponent(owner)}/${encodeURIComponent(name)}`, {
        method: 'PUT',
        headers: { 'Content-Length': '0' },
        body: ''
      });
      if (![204, 304].includes(starResponse.status)) {
        return send(res, 502, { error: `GitHub star request failed (${starResponse.status})` });
      }

      const session = encryptToken(token.access_token);
      redirect(res, `${appOrigin(req)}/?github=starred`, [
        cookie('sb_github_token', session, { maxAge: 86400 }),
        clearCookie('sb_github_state')
      ]);
      return;
    }

    if (action === 'count') {
      const r = await githubFetch(`/repos/${encodeURIComponent(owner)}/${encodeURIComponent(name)}`);
      const data = await r.json();
      if (!r.ok) return send(res, r.status, { error: 'Could not read repository' });
      return send(res, 200, { stars: Number(data.stargazers_count) || 0 });
    }

    if (action === 'status' || action === 'star') {
      const cookies = getCookies(req);
      const token = cookies.sb_github_token ? decryptToken(cookies.sb_github_token) : null;
      if (!token) return send(res, 401, { authenticated: false, starred: false });

      const authHeaders = { Authorization: `Bearer ${token}` };
      const check = await githubFetch(`/user/starred/${encodeURIComponent(owner)}/${encodeURIComponent(name)}`, {
        headers: authHeaders
      });

      if (check.status === 401) {
        res.setHeader('Set-Cookie', clearCookie('sb_github_token'));
        return send(res, 401, { authenticated: false, starred: false });
      }

      if (check.status === 204 || check.status === 304) {
        return send(res, 200, { authenticated: true, starred: true });
      }

      if (action === 'status') return send(res, 200, { authenticated: true, starred: false });

      const star = await githubFetch(`/user/starred/${encodeURIComponent(owner)}/${encodeURIComponent(name)}`, {
        method: 'PUT',
        headers: { ...authHeaders, 'Content-Length': '0' },
        body: ''
      });
      if (![204, 304].includes(star.status)) {
        const text = await star.text();
        return send(res, 502, { error: `GitHub star request failed (${star.status})`, detail: text.slice(0, 300) });
      }
      return send(res, 200, { authenticated: true, starred: true });
    }

    return send(res, 404, { error: 'Unknown action' });
  } catch (error) {
    console.error(error);
    return send(res, 500, { error: 'GitHub integration is not configured correctly' });
  }
}
