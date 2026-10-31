(()=>{
const root=document.documentElement;
const reduce=matchMedia('(prefers-reduced-motion:reduce)').matches;
let on=localStorage.getItem('sbpro-hw');on=on===null?!reduce:on==='1';

document.querySelectorAll('.feature,.reveal').forEach(el=>el.addEventListener('transitionend',e=>{
  if(e.propertyName==='opacity')el.style.transitionDelay='0s';
}));
if(typeof window.setLang==='function'){
  const orig=window.setLang;
  window.setLang=function(l){orig(l);
    const b=document.getElementById('githubStarBtn');
    if(b&&b.classList.contains('starred')&&typeof setStarButtonState==='function')setStarButtonState(true);};
}

const bat='<svg viewBox="0 0 100 50"><path d="M50 18C40 6 24 2 6 12c8 2 10 8 12 14 8-4 16-2 22 4 4 2 7 4 10 6 3-2 6-4 10-6 6-6 14-8 22-4 2-6 4-12 12-14C76 2 60 6 50 18Z" fill="#150f22" stroke="#f97316" stroke-width="1.5"/></svg>';
const spider=h=>`<svg viewBox="0 0 60 120"><line x1="30" y1="0" x2="30" y2="${h}" stroke="#8b8b99" stroke-width="1.2"/><g transform="translate(0 ${h-50})"><g fill="#15151a" stroke="#f97316" stroke-width="1.4"><ellipse cx="30" cy="68" rx="10" ry="13"/><circle cx="30" cy="52" r="7"/></g><g stroke="#f97316" stroke-width="2" fill="none" stroke-linecap="round"><path d="M24 50 10 42 4 54M36 50l14-8 6 12M23 58 8 62 6 76M37 58l15 4 2 14M23 74 10 86v14M37 74l13 12v14"/></g><circle cx="27" cy="50" r="1.6" fill="#fde047"/><circle cx="33" cy="50" r="1.6" fill="#fde047"/></g></svg>`;
const ghost='<svg viewBox="0 0 100 100"><path d="M24 90V46Q24 12 50 12t26 34v44l-7-8-7 8-6-8-6 8-7-8-7 8Z" fill="#f4eeff"/><ellipse cx="41" cy="42" rx="5" ry="8" fill="#241532"/><ellipse cx="59" cy="42" rx="5" ry="8" fill="#241532"/><ellipse cx="50" cy="60" rx="5" ry="7" fill="#241532"/></svg>';

const layer=document.createElement('div');layer.id='hw-layer';layer.setAttribute('aria-hidden','true');
const bats=[[12,34,19,0,40],[28,22,26,5,-30],[46,28,22,11,60],[62,40,30,3,-50],[8,24,24,16,20]]
 .map(([y,s,t,d,dy])=>`<div class="hw-bat-f" style="--y:${y}vh;--s:${s}px;--t:${t}s;--d:${d}s;--dy:${dy}px">${bat}</div>`).join('');
layer.innerHTML=`<div class="hw-fog"></div>${bats}<div class="hw-ghost">${ghost}</div>`+
 `<div class="hw-sp l" style="--d:0s">${spider(100)}</div><div class="hw-sp r" style="--d:-2.4s">${spider(70)}</div>`;
document.body.prepend(layer);
const hero=document.querySelector('.hero');
if(hero){const m=document.createElement('div');m.id='hw-moon';m.setAttribute('aria-hidden','true');hero.prepend(m);}

const btn=document.createElement('button');btn.id='hwToggle';btn.type='button';btn.textContent='🎃';
btn.title='Halloween effects on/off';btn.setAttribute('aria-label','Halloween effects');
document.body.appendChild(btn);

const c=document.getElementById('particles'),ctx=c&&c.getContext('2d');
let w=0,h=0,dpr=1,P=[],raf=0;
const sprite=col=>{const s=document.createElement('canvas');s.width=s.height=32;const g=s.getContext('2d'),r=g.createRadialGradient(16,16,0,16,16,16);
 r.addColorStop(0,col+'1)');r.addColorStop(.35,col+'.45)');r.addColorStop(1,col+'0)');g.fillStyle=r;g.fillRect(0,0,32,32);return s;};
const S=['rgba(255,170,70,','rgba(255,120,30,','rgba(170,140,255,','rgba(140,100,235,'].map(sprite);
const mk=init=>({x:Math.random()*w,y:init?Math.random()*h:h+20,s:6+Math.random()*12,k:S[Math.random()*4|0],
 vy:.25+Math.random()*.6,a:.3+Math.random()*.6,t:Math.random()*6.28,f:.01+Math.random()*.02,sw:.15+Math.random()*.35});
function size(){if(!c)return;dpr=Math.min(devicePixelRatio||1,1.5);w=innerWidth;h=innerHeight;
 c.width=w*dpr;c.height=h*dpr;c.style.width=w+'px';c.style.height=h+'px';ctx.setTransform(dpr,0,0,dpr,0,0);
 P=Array.from({length:Math.min(70,Math.max(28,w/24|0))},()=>mk(true));}
function draw(){
  ctx.clearRect(0,0,w,h);
  for(const p of P){p.y-=p.vy;p.t+=p.f;p.x+=Math.sin(p.t)*p.sw;
    if(p.y<-20)Object.assign(p,mk(false));
    ctx.globalAlpha=p.a*(.6+.4*Math.sin(p.t*3));ctx.drawImage(p.k,p.x-p.s,p.y-p.s,p.s*2,p.s*2);}
  raf=requestAnimationFrame(draw);
}
function apply(){
  root.classList.toggle('hw-off',!on);btn.setAttribute('aria-pressed',String(on));
  localStorage.setItem('sbpro-hw',on?'1':'0');
  cancelAnimationFrame(raf);raf=0;
  if(on&&c&&!document.hidden){size();raf=requestAnimationFrame(draw);}
}
btn.addEventListener('click',()=>{on=!on;apply();});
document.addEventListener('visibilitychange',()=>{if(document.hidden){cancelAnimationFrame(raf);raf=0;}else if(on&&!raf)raf=requestAnimationFrame(draw);});
let rt;addEventListener('resize',()=>{clearTimeout(rt);rt=setTimeout(()=>{if(on&&c)size();},150);},{passive:true});
apply();
})();
