function LegalPage({doc}){const D=window.LEGAL[doc];const H='index.html';const [v,setV]=React.useState(false);const [act,setAct]=React.useState(0);
const ids=D.sections.map((s,i)=>'s'+(i+1));
React.useEffect(()=>{document.title=D.nav+' — Oria Surv';const on=()=>{let k=0;ids.forEach((id,i)=>{const el=document.getElementById(id);if(el&&el.getBoundingClientRect().top<160)k=i});setAct(k)};window.addEventListener('scroll',on,{passive:true});on();return()=>window.removeEventListener('scroll',on)},[]);
const go=(i)=>{const el=document.getElementById(ids[i]);if(el)window.scrollTo({top:el.getBoundingClientRect().top+window.scrollY-96,behavior:'smooth'})};
return <><SiteHeader base={H} onVendor={()=>setV(true)}/>
<section style={{background:'var(--page-50)',borderBottom:'1px solid var(--border-subtle)'}}><div className="wrap" style={{padding:'48px 24px 40px',display:'flex',flexDirection:'column',gap:24}}>
<nav style={{display:'flex',alignItems:'center',gap:8,font:'500 14px var(--font-ui)',color:'var(--text-muted)'}}><a href={H}>Home</a><Icon name="chevron-right" size={14}/><span>Legal</span><Icon name="chevron-right" size={14}/><span style={{color:'var(--text-strong)'}}>{D.nav}</span></nav>
<div style={{maxWidth:760}}><SectionHeading eyebrow="Legal" title={D.title} accent={D.accent} size="l" lede={D.lede}/></div>
<div style={{display:'flex',flexWrap:'wrap',gap:10,alignItems:'center',justifyContent:'space-between'}}>
<div style={{display:'flex',flexWrap:'wrap',gap:8}}><Badge tone="tint" style={{height:32,fontSize:13,padding:'0 14px'}}>{'Effective '+D.effective}</Badge><Badge tone="tint" style={{height:32,fontSize:13,padding:'0 14px'}}>{'Last Updated '+D.updated}</Badge></div>
<div className="legal-switch">{Object.entries(window.LEGAL).map(([k,o])=><a key={k} href={o.file} className={k===doc?'on':''}>{o.nav}</a>)}</div></div></div></section>
<section><div className="wrap legal-grid" style={{padding:'56px 24px 80px'}}>
<aside className="toc"><div style={{font:'600 13px var(--font-ui)',letterSpacing:'.06em',textTransform:'uppercase',color:'var(--text-muted)',margin:'0 0 12px 14px'}}>On This Page</div>
{D.sections.map((s,i)=><button key={i} onClick={()=>go(i)} className={i===act?'on':''}><span>{String(i+1).padStart(2,'0')}</span>{s.t}</button>)}
<div className="toc-help"><Icon name="headset" size={20} color="var(--brand-primary)"/><div style={{font:'600 15px var(--font-ui)',color:'var(--text-strong)'}}>Need help?</div><div style={{font:'400 14px/1.5 var(--font-body)',color:'var(--text-muted)'}}>Our support team is here for you.</div><a href="mailto:support@oriasurv.com" style={{font:'600 14px var(--font-ui)'}}>support@oriasurv.com</a></div></aside>
<article style={{minWidth:0,display:'flex',flexDirection:'column',gap:20}}>
{D.glance&&<><div className="g4 glance">{D.glance.map(([v,l,ic])=><div key={l}><span className="ico-tile" style={{width:40,height:40,borderRadius:12}}><Icon name={ic} size={20}/></span><div style={{font:'700 30px/1 var(--font-display)',letterSpacing:'-.02em',color:'var(--brand-primary)'}}>{v}</div><div style={{font:'400 14px/1.45 var(--font-body)',color:'var(--text-muted)'}}>{l}</div></div>)}</div>
<p className="lp" style={{margin:'4px 0 0'}}>{D.intro}</p></>}
{D.sections.map((s,i)=><section key={i} id={ids[i]} className="lsec">
<div style={{display:'flex',gap:14,alignItems:'center'}}><span className="num">{String(i+1).padStart(2,'0')}</span><h2 style={{margin:0,font:'600 22px/1.3 var(--font-ui)',color:'var(--text-strong)'}}>{s.t}</h2></div>
{s.p&&s.p.map((t,k)=><p key={k} className="lp">{t}</p>)}
{s.l&&<ul className="ll">{s.l.map(t=><li key={t}><span className={'chk'+(s.neg?' neg':'')}><Icon name={s.neg?'x':'check'} size={14}/></span>{t}</li>)}</ul>}
{s.a&&s.a.map((t,k)=><p key={k} className="lp">{t}</p>)}
{s.contact&&<><p className="lp">{s.contact}</p><div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(220px,1fr))',gap:12}}>{[['mail','Email','support@oriasurv.com','mailto:support@oriasurv.com'],['phone','Phone','+973 36623664','tel:+97336623664'],['map-pin','Address','Manama, Kingdom of Bahrain']].map(([ic,l,val,h])=><a key={l} href={h||undefined} className="ccard"><span className="ico-tile" style={{width:40,height:40,borderRadius:12}}><Icon name={ic} size={20}/></span><span style={{minWidth:0,overflowWrap:'anywhere'}}><span style={{display:'block',font:'500 13px var(--font-ui)',color:'var(--text-muted)'}}>{l}</span><span style={{display:'block',font:'600 15px var(--font-ui)',color:'var(--text-strong)'}}>{val}</span></span></a>)}</div>
<p className="lp" style={{fontSize:14}}><strong style={{color:'var(--text-strong)'}}>Effective Date:</strong> {D.closing} <strong style={{color:'var(--text-strong)'}}>Last Updated:</strong> {D.updated}</p></>}
</section>)}
</article></div></section>
<AppCTA/><SiteFooter base={H}/><VendorDialog open={v} onClose={()=>setV(false)}/></>}
window.LegalPage=LegalPage;
