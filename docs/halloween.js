(()=>{
const root=document.documentElement;

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
layer.id='hw-layer';layer.setAttribute('aria-hidden','true');

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

layer.innerHTML=
  '<div class="hw-fog"></div>'+
  `<div class="hw-cw tl">${COB}</div><div class="hw-cw tr">${COB}</div><div class="hw-cw bl">${COB}</div><div class="hw-cw br">${COB}</div>`+
  hang(9,150,6)+hang(86,240,7.5)+
  floats+bats+
  `<div class="hw-ghost">${ghost}</div>`;
document.body.prepend(layer);

const vig=document.createElement('div');vig.id='hw-vig';vig.setAttribute('aria-hidden','true');
const flash=document.createElement('div');flash.id='hw-flash';flash.setAttribute('aria-hidden','true');
document.body.append(vig,flash);

const hero=document.querySelector('.hero');
if(hero){
  const m=document.createElement('div');m.id='hw-moon';m.setAttribute('aria-hidden','true');hero.prepend(m);
  hero.insertAdjacentHTML('beforeend',
    `<div class="hw-hp r" aria-hidden="true">${pumpkin(false)}</div>`+
    `<div class="hw-sk" style="left:19%;top:14%;width:64px;transform:rotate(-12deg)" aria-hidden="true">${skull(2)}</div>`+
    `<div class="hw-sk" style="right:22%;bottom:18%;width:54px;transform:rotate(10deg);animation-delay:-2s" aria-hidden="true">${skull(4)}</div>`);
}

const shell=document.querySelector('.footer-shell');
if(shell){
  shell.insertAdjacentHTML('beforeend',
    `<div class="hw-cw tl" style="width:120px;height:120px;opacity:.35" aria-hidden="true">${COB}</div>`+
    `<div class="hw-fsk" aria-hidden="true">${skull(1)}</div>`);
}

document.querySelectorAll('.feature').forEach(f=>{
  f.insertAdjacentHTML('beforeend',`<div class="hw-fcw" aria-hidden="true">${COB}</div>`);
});
})();
