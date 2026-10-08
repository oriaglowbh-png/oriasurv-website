(function(){
const KEY='oria-lang',ATTRS=['placeholder','alt','aria-label','title'],SKIP={SCRIPT:1,STYLE:1,NOSCRIPT:1,TEXTAREA:1};
let lang='en';try{lang=localStorage.getItem(KEY)||'en'}catch(e){}
let mo,enTitle=null;
const norm=s=>s.replace(/\s+/g,' ').trim();
const D=()=>window.ORIA_AR||{};
function tr(en){if(en==null)return null;const k=norm(en);if(!k)return null;const v=D()[k];if(v==null)return null;const m=en.match(/^(\s*)[\s\S]*?(\s*)$/);return m[1]+v+m[2]}
const skip=el=>!el||(el.closest&&el.closest('[data-noi18n]'));
function doText(n){const p=n.parentElement;if(!p||SKIP[p.tagName]||skip(p))return;const cur=n.nodeValue;
if(n.__ar===undefined||cur!==n.__ar)n.__en=cur;
if(lang==='ar'){const t=tr(n.__en);if(t!=null){if(cur!==t)n.nodeValue=t;n.__ar=t}else n.__ar=undefined}
else{if(cur!==n.__en)n.nodeValue=n.__en;n.__ar=undefined}}
function doAttrs(el){if(!el.getAttribute||skip(el))return;for(const a of ATTRS){if(!el.hasAttribute(a))continue;const cur=el.getAttribute(a);el.__enA=el.__enA||{};el.__arA=el.__arA||{};
if(el.__arA[a]===undefined||cur!==el.__arA[a])el.__enA[a]=cur;
if(lang==='ar'){const t=tr(el.__enA[a]);if(t!=null){if(cur!==t)el.setAttribute(a,t);el.__arA[a]=t}else el.__arA[a]=undefined}
else{if(cur!==el.__enA[a])el.setAttribute(a,el.__enA[a]);el.__arA[a]=undefined}}}
function walk(root){if(root.nodeType===3)return doText(root);if(root.nodeType!==1)return;doAttrs(root);
const w=document.createTreeWalker(root,NodeFilter.SHOW_ELEMENT|NodeFilter.SHOW_TEXT);let n;while(n=w.nextNode()){n.nodeType===3?doText(n):doAttrs(n)}}
function title(){if(enTitle===null||(document.title!==tr(enTitle)&&document.title!==enTitle))enTitle=document.title;const t=lang==='ar'?tr(enTitle):enTitle;if(t&&document.title!==t)document.title=t}
function run(root){walk(root);title();if(mo)mo.takeRecords()}
function setDoc(){const h=document.documentElement;h.lang=lang;h.dir=lang==='ar'?'rtl':'ltr'}
setDoc();
window.OriaI18n={get lang(){return lang},set(l){lang=l;try{localStorage.setItem(KEY,l)}catch(e){}setDoc();if(document.body)run(document.body);dispatchEvent(new CustomEvent('oria-lang',{detail:l}))}};
document.addEventListener('DOMContentLoaded',()=>{
mo=new MutationObserver(rs=>{for(const r of rs){if(r.type==='characterData')doText(r.target);else if(r.type==='attributes')doAttrs(r.target);else r.addedNodes.forEach(walk)}title();mo.takeRecords()});
mo.observe(document.body,{subtree:true,childList:true,characterData:true,attributes:true,attributeFilter:ATTRS});
new MutationObserver(title).observe(document.querySelector('title')||document.head,{childList:true,subtree:true,characterData:true});
run(document.body)});
})();
