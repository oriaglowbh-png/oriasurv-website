(function(){
if(matchMedia('(prefers-reduced-motion: reduce)').matches)return;
const st=document.createElement('style');
st.textContent='.rv{opacity:0;transform:translateY(28px);transition:opacity .7s cubic-bezier(.22,.8,.32,1),transform .7s cubic-bezier(.22,.8,.32,1)}.rv.in{opacity:1;transform:none}';
document.head.appendChild(st);
const SEL='.g2>*,.g3>*,.g4>*,.glance>*,.lsec,[style*="auto-fill"]>*,section .wrap>*:not(.g2):not(.g3):not(.g4):not(.legal-grid):not([style*="auto-fill"])';
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{threshold:.12,rootMargin:'0px 0px -40px 0px'});
function scan(){document.querySelectorAll(SEL).forEach(el=>{if(el.dataset.rv)return;el.dataset.rv=1;
const sibs=[...el.parentElement.children].filter(s=>s.matches(SEL));const i=Math.max(0,sibs.indexOf(el));
el.style.transitionDelay=Math.min(i*90,450)+'ms';el.classList.add('rv');io.observe(el)})}
const mo=new MutationObserver(()=>{clearTimeout(mo.t);mo.t=setTimeout(scan,30)});
document.addEventListener('DOMContentLoaded',()=>{mo.observe(document.getElementById('root'),{childList:true,subtree:true});scan()});
})();
