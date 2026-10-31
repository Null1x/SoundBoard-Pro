(()=>{
const rnd=(a,b)=>a+Math.random()*(b-a);

document.querySelectorAll('.feature,.reveal').forEach(el=>el.addEventListener('transitionend',e=>{
  if(e.propertyName==='opacity')el.style.transitionDelay='0s';
}));
if(typeof window.setLang==='function'){
  const orig=window.setLang;
  window.setLang=function(l){orig(l);
    const b=document.getElementById('githubStarBtn');
    if(b&&b.classList.contains('starred')&&typeof setStarButtonState==='function')setStarButtonState(true);};
}

const DARK='#1a1024';

const pumpkin=lit=>{
  const eye=lit?'#fef08a':'#1c0a00', mouth=lit?'#fde047':'#1c0a00';
  const glow=lit?'<ellipse cx="60" cy="66" rx="58" ry="44" fill="#fde047" opacity=".16"/>':'';
  return `<svg viewBox="0 0 120 110">${glow}`+
    '<path d="M54 26C52 16 55 9 64 6C66 13 69 18 72 26Z" fill="#4d7c0f"/>'+
    '<path d="M66 14C76 2 90 3 98 9C88 13 78 16 68 18Z" fill="#84cc16"/>'+
    '<ellipse cx="60" cy="66" rx="52" ry="38" fill="#ea580c"/>'+
    '<ellipse cx="34" cy="66" rx="18" ry="36" fill="#f97316"/>'+
    '<ellipse cx="86" cy="66" rx="18" ry="36" fill="#f97316"/>'+
    '<ellipse cx="60" cy="66" rx="14" ry="36" fill="#fb923c" opacity=".35"/>'+
    `<path d="M28 56L44 56L36 70Z" fill="${eye}"/>`+
    `<path d="M76 56L92 56L84 70Z" fill="${eye}"/>`+
    `<path d="M56 74L64 74L60 82Z" fill="${eye}"/>`+
    `<path d="M34 86H86L80 96L74 88L68 98L60 88L52 98L46 88L40 96Z" fill="${mouth}"/></svg>`;
};

const skull=v=>{
  const C=['#f5f0e1','#f5f0e1','#f5f0e1','#e9e4f5','#d8b4fe'][v];
  let eyes;
  if(v===1) eyes=`<circle cx="34" cy="50" r="12" fill="#f97316"/><circle cx="66" cy="50" r="12" fill="#f97316"/><circle cx="34" cy="50" r="6" fill="${DARK}"/><circle cx="66" cy="50" r="6" fill="${DARK}"/><circle cx="30" cy="28" r="2.5" fill="#f97316"/><circle cx="50" cy="22" r="2.5" fill="#f97316"/><circle cx="70" cy="28" r="2.5" fill="#f97316"/>`;
  else if(v===3) eyes=`<path d="M20 40L46 50L46 62L20 56Z" fill="${DARK}"/><path d="M80 40L54 50L54 62L80 56Z" fill="${DARK}"/>`;
  else if(v===4) eyes=`<circle cx="34" cy="50" r="11" fill="${DARK}" stroke="#a855f7" stroke-width="6"/><circle cx="66" cy="50" r="11" fill="${DARK}" stroke="#a855f7" stroke-width="6"/>`;
  else eyes=`<ellipse cx="34" cy="50" rx="11" ry="12" fill="${DARK}"/><ellipse cx="66" cy="50" rx="11" ry="12" fill="${DARK}"/>`;
  const crack=v===2?`<path d="M56 8L50 26L60 36L52 52" stroke="${DARK}" stroke-width="2.5" fill="none" stroke-linecap="round"/>`:'';
  return `<svg viewBox="0 0 100 110"><path d="M50 6C24 6 12 26 12 50C12 66 20 74 28 78V92Q28 98 34 98H66Q72 98 72 92V78C80 74 88 66 88 50C88 26 76 6 50 6Z" fill="${C}"/>${eyes}<path d="M50 62L44 74H56Z" fill="${DARK}"/><path d="M36 88v8M46 88v8M54 88v8M64 88v8" stroke="${DARK}" stroke-width="3" stroke-linecap="round"/>${crack}</svg>`;
};

const spider=()=>'<svg viewBox="0 0 120 110">'+
  '<g stroke="#a78bfa" stroke-width="4" fill="none" stroke-linecap="round" stroke-linejoin="round">'+
  '<path d="M50 36L20 22L8 36M50 46L16 48L10 66M50 56L18 70L22 92"/>'+
  '<path d="M70 36L100 22L112 36M70 46L104 48L110 66M70 56L102 70L98 92"/></g>'+
  '<ellipse cx="60" cy="62" rx="20" ry="24" fill="#2e1d4d"/>'+
  '<path d="M60 52L66 62L60 72L54 62Z" fill="#f97316"/>'+
  '<circle cx="60" cy="34" r="12" fill="#2e1d4d"/>'+
  '<circle cx="55" cy="32" r="2.5" fill="#ef4444"/><circle cx="65" cy="32" r="2.5" fill="#ef4444"/></svg>';

const bat=()=>'<svg viewBox="0 0 120 60">'+
  '<path d="M60 26C46 12 30 6 4 14C14 20 16 28 18 36C30 32 42 36 52 44L60 48L68 44C78 36 90 32 102 36C104 28 106 20 116 14C90 6 74 12 60 26Z" fill="#6d4aa8"/>'+
  '<ellipse cx="60" cy="36" rx="6" ry="10" fill="#3b2566"/>'+
  '<path d="M54 30L52 20L58 26L62 26L68 20L66 30Z" fill="#3b2566"/>'+
  '<circle cx="57" cy="32" r="1.8" fill="#fde047"/><circle cx="63" cy="32" r="1.8" fill="#fde047"/></svg>';

const ghost='<svg viewBox="0 0 100 100"><path d="M24 90V46Q24 12 50 12t26 34v44l-7-8-7 8-6-8-6 8-7-8-7 8Z" fill="#f4eeff"/><ellipse cx="41" cy="42" rx="5" ry="8" fill="#241532"/><ellipse cx="59" cy="42" rx="5" ry="8" fill="#241532"/><ellipse cx="50" cy="60" rx="5" ry="7" fill="#241532"/></svg>';

const yard=`<svg viewBox="0 0 1000 160" preserveAspectRatio="xMidYMax slice">`+
  '<path d="M0 150Q250 136 500 146T1000 140V160H0Z" fill="#0b0814"/>'+
  '<path d="M40 160Q44 100 36 60M38 100Q20 84 6 80M40 80Q56 58 70 52M37 66Q28 48 18 40" fill="none" stroke="#0b0814" stroke-width="7" stroke-linecap="round"/>'+
  [[120,96,70,64],[230,110,56,50],[700,104,64,56],[860,90,78,70]].map(([x,y,w,h])=>
    `<path d="M${x} ${y+h}V${y+w/2}A${w/2} ${w/2} 0 0 1 ${x+w} ${y+w/2}V${y+h}Z" fill="#17102b"/>`).join('')+
  '<g transform="translate(732 104)" fill="#05030a"><ellipse cx="0" cy="-12" rx="13" ry="16"/><circle cx="0" cy="-34" r="10"/>'+
  '<path d="M-9 -40L-10 -54L-2 -44ZM9 -40L10 -54L2 -44Z"/><path d="M12 -4Q32 -6 28 -24" stroke="#05030a" stroke-width="4" fill="none" stroke-linecap="round"/>'+
  '<circle cx="-4" cy="-35" r="2.2" fill="#fde047"/><circle cx="4" cy="-35" r="2.2" fill="#fde047"/></g>'+
  '<g transform="translate(300 146)"><ellipse rx="22" ry="16" fill="#ea580c"/><path d="M-10 -4L-4 -4L-7 3ZM6 -4L12 -4L9 3ZM-6 6H6L3 10Z" fill="#1c0a00"/></g>'+
  '<g transform="translate(330 150)"><ellipse rx="14" ry="11" fill="#f97316"/></g>'+
  '</svg>';

const cobweb=()=>{
  const angs=[...Array(9)].map((_,i)=>i*Math.PI/16);
  const P=(r,a)=>[(r*Math.cos(a)).toFixed(1),(r*Math.sin(a)).toFixed(1)];
  let d='';
  for(const a of angs){const [x,y]=P(190,a);d+=`M0 0L${x} ${y}`;}
  for(const r of [34,68,104,140,176]){
    for(let i=0;i<angs.length-1;i++){
      const [x0,y0]=P(r,angs[i]),[x1,y1]=P(r,angs[i+1]),[qx,qy]=P(r*.84,(angs[i]+angs[i+1])/2);
      d+=`M${x0} ${y0}Q${qx} ${qy} ${x1} ${y1}`;
    }
  }
  return `<svg viewBox="0 0 190 190" fill="none" stroke="#c4b5fd" stroke-width="1" stroke-opacity=".6"><path d="${d}"/></svg>`;
};
const COB=cobweb();

const layer=document.createElement('div');
layer.id='hw-layer';layer.className='hw-deco';layer.setAttribute('aria-hidden','true');

const hang=(left,len,sw)=>`<div class="hw-hang" style="left:${left}%;--len:${len}px;--sw:${sw}s"><i></i><div class="hw-spi">${spider()}</div></div>`;

const FLOAT=[
  ['s0',3,8,74,-8,0,28,.3],
  ['s1',93,14,58,10,6,32,.24],
  ['s2',95,50,64,-6,3,30,.22],
  ['s3',2,56,50,12,9,36,.2],
  ['s4',90,80,58,-4,4,34,.24],
  ['p0',96,70,64,6,2,30,.34],
  ['s2',4,88,46,-10,11,26,.18],
  ['s4',8,30,40,8,14,38,.16],
  ['pl',88,34,54,0,1,30,.22],
  ['s0',70,4,40,6,8,40,.14]
];
const floatSvg=k=>k==='pl'?pumpkin(true):k[0]==='p'?pumpkin(false):skull(+k[1]);
const floats=FLOAT.map(([k,l,t,s,r,d,dur,o],i)=>
  `<div class="hw-fl${i>=5?' hw-fx':''}" style="left:${l}%;top:${t}%;width:${s}px;--r:${r}deg;--d:-${d}s;--t:${dur}s;opacity:${o}">${floatSvg(k)}</div>`).join('');

const bats=[[12,84,19,0,40],[28,60,26,5,-30],[46,72,22,11,60],[62,96,30,3,-50],[8,56,24,16,20]]
  .map(([y,s,t,d,dy])=>`<div class="hw-bat-f" style="--y:${y}vh;--s:${s}px;--t:${t}s;--d:${d}s;--dy:${dy}px">${bat()}</div>`).join('');

let ff='';
for(let i=0;i<22;i++){
  ff+=`<div class="hw-ff" style="left:${rnd(0,100).toFixed(1)}%;top:${rnd(10,95).toFixed(1)}%;--t:${rnd(10,20).toFixed(1)}s;--d:-${rnd(0,10).toFixed(1)}s;--p:${rnd(2,5).toFixed(1)}s;--dx:${rnd(-120,120).toFixed(0)}px;--dy:${rnd(-120,120).toFixed(0)}px"></div>`;
}
const eyeAt=(l,t,x,d)=>`<div class="hw-eye${x?' x2':''}" style="left:${l}%;top:${t}%;--t:14s;--d:-${d}s"><span></span><span></span></div>`;
const eyes=eyeAt(2.2,44,false,2)+eyeAt(96.5,58,true,9)+eyeAt(1.5,74,true,5);

layer.innerHTML=
  '<div class="hw-fog"></div>'+
  `<div class="hw-cw tl">${COB}</div><div class="hw-cw tr">${COB}</div><div class="hw-cw bl">${COB}</div><div class="hw-cw br">${COB}</div>`+
  hang(9,150,6)+hang(86,240,7.5)+
  floats+bats+ff+eyes+
  '<div class="hw-hell"></div>'+
  `<div class="hw-ghost">${ghost}</div>`;
document.body.prepend(layer);

const GN=28, step=1000/GN;
const garlandColors=['#fb923c','#a78bfa','#fde047','#f97316','#c4b5fd','#fb7185'];
let wire='M0 8', bulbsHtml='';
for(let i=0;i<GN;i++){
  const x0=i*step, x1=(i+1)*step, xm=x0+step/2;
  wire+=` Q${xm} 26 ${x1} 8`;
  const c=garlandColors[i%garlandColors.length];
  bulbsHtml+=`<div class="hw-bulb" style="left:${(xm/10).toFixed(2)}%;top:12px;--c:${c};--t:${rnd(1.2,2.8).toFixed(2)}s;--d:-${rnd(0,3).toFixed(2)}s"></div>`;
}
const garland=document.createElement('div');
garland.id='hw-garland';garland.className='hw-deco';garland.setAttribute('aria-hidden','true');
garland.innerHTML=`<svg viewBox="0 0 1000 40" preserveAspectRatio="none"><path class="wire" d="${wire}"/></svg>`+bulbsHtml;
document.body.prepend(garland);

const vig=document.createElement('div');vig.id='hw-vig';vig.className='hw-deco';vig.setAttribute('aria-hidden','true');
const flash=document.createElement('div');flash.id='hw-flash';flash.className='hw-deco';flash.setAttribute('aria-hidden','true');
document.body.append(vig,flash);

const c=document.getElementById('particles');
c.classList.add('hw-deco');
const ctx=c.getContext('2d');
let w=0,h=0,dpr=1,P=[],raf=0;
const sprite=col=>{const s=document.createElement('canvas');s.width=s.height=32;const g=s.getContext('2d'),r=g.createRadialGradient(16,16,0,16,16,16);
 r.addColorStop(0,col+'1)');r.addColorStop(.35,col+'.45)');r.addColorStop(1,col+'0)');g.fillStyle=r;g.fillRect(0,0,32,32);return s;};
const S=['rgba(255,170,70,','rgba(255,120,30,','rgba(170,140,255,','rgba(140,100,235,'].map(sprite);
const mk=init=>({x:Math.random()*w,y:init?Math.random()*h:h+20,s:6+Math.random()*12,k:S[Math.random()*4|0],
 vy:.25+Math.random()*.6,a:.3+Math.random()*.6,t:Math.random()*6.28,f:.01+Math.random()*.02,sw:.15+Math.random()*.35});
function size(){dpr=Math.min(devicePixelRatio||1,1.5);w=innerWidth;h=innerHeight;
 c.width=w*dpr;c.height=h*dpr;c.style.width=w+'px';c.style.height=h+'px';ctx.setTransform(dpr,0,0,dpr,0,0);
 P=Array.from({length:Math.min(60,Math.max(24,w/26|0))},()=>mk(true));}
function draw(){
  ctx.clearRect(0,0,w,h);
  for(const p of P){p.y-=p.vy;p.t+=p.f;p.x+=Math.sin(p.t)*p.sw;
    if(p.y<-20)Object.assign(p,mk(false));
    ctx.globalAlpha=p.a*(.6+.4*Math.sin(p.t*3));ctx.drawImage(p.k,p.x-p.s,p.y-p.s,p.s*2,p.s*2);}
  ctx.globalAlpha=1;
  raf=requestAnimationFrame(draw);
}

const hero=document.querySelector('.hero');
if(hero){
  const m=document.createElement('div');m.id='hw-moon';m.className='hw-deco';m.setAttribute('aria-hidden','true');hero.prepend(m);
  const y=document.createElement('div');y.className='hw-yard hw-deco';y.setAttribute('aria-hidden','true');y.innerHTML=yard;hero.prepend(y);
  hero.insertAdjacentHTML('beforeend',
    `<div class="hw-hp r hw-deco" aria-hidden="true">${pumpkin(false)}</div>`+
    `<div class="hw-sk hw-deco" style="left:19%;top:14%;width:64px;transform:rotate(-12deg)" aria-hidden="true">${skull(2)}</div>`+
    `<div class="hw-sk hw-deco" style="right:22%;bottom:18%;width:54px;transform:rotate(10deg);animation-delay:-2s" aria-hidden="true">${skull(4)}</div>`);
}

const shell=document.querySelector('.footer-shell');
if(shell){
  shell.insertAdjacentHTML('beforeend',
    `<div class="hw-cw tl hw-deco" style="width:120px;height:120px;opacity:.35" aria-hidden="true">${COB}</div>`+
    `<div class="hw-fsk hw-deco" aria-hidden="true">${skull(1)}</div>`);
}
document.querySelectorAll('.feature').forEach(f=>{
  f.insertAdjacentHTML('beforeend',`<div class="hw-fcw hw-deco" aria-hidden="true">${COB}</div>`);
});

size();
raf=requestAnimationFrame(draw);
document.addEventListener('visibilitychange',()=>{
  if(document.hidden){cancelAnimationFrame(raf);raf=0;}
  else if(!raf)raf=requestAnimationFrame(draw);
});
let rt;addEventListener('resize',()=>{clearTimeout(rt);rt=setTimeout(size,150);},{passive:true});
})();
