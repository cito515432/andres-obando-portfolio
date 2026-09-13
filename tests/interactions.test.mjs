import test from "node:test";
import assert from "node:assert/strict";
import vm from "node:vm";
import { JSDOM } from "jsdom";
import { themeBootstrap } from "../lib/theme-bootstrap.mjs";
import { linkEvent } from "../lib/analytics-event.mjs";
import { loadTs } from "./load-ts.mjs";

for (const dark of [false,true]) for (const saved of [null,"invalid","light","dark"]) {
  test(`before-paint preference: system=${dark?'dark':'light'}, saved=${saved}`,()=>{
    const root={dataset:{}};
    vm.runInNewContext(themeBootstrap,{document:{documentElement:root},localStorage:{getItem:()=>saved},matchMedia:()=>({matches:dark})});
    assert.equal(root.dataset.theme,saved==='light'||saved==='dark'?saved:dark?'dark':'light');
  });
}
test('blocked storage still respects the system before paint',()=>{
  const root={dataset:{}};
  vm.runInNewContext(themeBootstrap,{document:{documentElement:root},localStorage:{getItem:()=>{throw Error('Storage unavailable');}},matchMedia:()=>({matches:true})});
  assert.equal(root.dataset.theme,'dark');
});

test('event routing preserves language and evidence events on case-study links',()=>{
  assert.equal(linkEvent('/en/case-studies/global-iso-security/','language_select'),'language_select');
  assert.equal(linkEvent('/case-studies/global-iso-security/#evidence','project_evidence_open'),'project_evidence_open');
  for (const [href,event]of [['mailto:example@example.com','email_click'],['https://github.com/cito515432','github_click'],['https://www.linkedin.com/in/example','linkedin_click'],['/documents/cv/cv.pdf','cv_download'],['/case-studies/global-iso-security/','case_study_open'],['/#inicio','']]) assert.equal(linkEvent(href),event);
});

test('interactive components work with real DOM events (no browser rendering)',async t=>{
  const dom=new JSDOM('<html data-theme="light"><body><div id="app"></div></body></html>',{url:'https://portfolio.test/'});
  for(const key of ['window','document','HTMLElement','HTMLAnchorElement','Node','Element','MutationObserver','CustomEvent','StorageEvent','localStorage']) globalThis[key]=dom.window[key];
  globalThis.IS_REACT_ACT_ENVIRONMENT=true;
  let systemDark=false;
  const listeners=new Map();
  window.matchMedia=query=>({get matches(){return query.includes('prefers-color-scheme')?systemDark:false;},addEventListener:(_,fn)=>listeners.set(query,fn),removeEventListener:()=>listeners.delete(query)});
  const React=await import('react');const {createRoot}=await import('react-dom/client');
  const {ThemeSwitcher}=loadTs('components/theme-switcher.tsx');
  const {MobileNavigation}=loadTs('components/mobile-navigation.tsx');
  const {CertificateGallery}=loadTs('components/certificate-gallery.tsx');
  const {NavigationInteractions}=loadTs('components/navigation-interactions.tsx');
  const {Analytics}=loadTs('components/analytics.tsx');
  const {copy}=loadTs('data/i18n.ts');const {certificates}=loadTs('data/portfolio.ts');
  const root=createRoot(document.getElementById('app'));
  const click=element=>React.act(()=>element.dispatchEvent(new window.MouseEvent('click',{bubbles:true})));
  await t.test('manual theme persists and overrides later system changes',async()=>{
    await React.act(()=>root.render(React.createElement(ThemeSwitcher,{light:'Light',dark:'Dark'})));
    const button=document.querySelector('button');
    assert.equal(button.getAttribute('aria-label'),'Dark');
    await click(button);
    assert.equal(document.documentElement.dataset.theme,'dark');
    assert.equal(localStorage.getItem('portfolio-theme'),'dark');
    assert.equal(button.getAttribute('aria-label'),'Light');
    systemDark=false;await React.act(()=>listeners.get('(prefers-color-scheme: dark)')());
    assert.equal(document.documentElement.dataset.theme,'dark');
    localStorage.removeItem('portfolio-theme');systemDark=true;
    await React.act(()=>window.dispatchEvent(new window.StorageEvent('storage',{key:'portfolio-theme'})));
    assert.equal(document.documentElement.dataset.theme,'dark');
    systemDark=false;await React.act(()=>listeners.get('(prefers-color-scheme: dark)')());
    assert.equal(document.documentElement.dataset.theme,'light');
  });
  await t.test('mobile menu handles opening, Escape, focus return and anchor selection',async()=>{
    await React.act(()=>root.render(React.createElement(MobileNavigation,{openLabel:'Open',closeLabel:'Close'},React.createElement('a',{href:'#profile'},'Profile'))));
    const button=document.querySelector('button');const menu=document.querySelector('nav');
    assert.equal(menu.hidden,true);await click(button);assert.equal(menu.hidden,false);assert.equal(button.getAttribute('aria-expanded'),'true');
    await React.act(()=>document.dispatchEvent(new window.KeyboardEvent('keydown',{key:'Escape',bubbles:true})));
    assert.equal(menu.hidden,true);assert.equal(document.activeElement,button);
    await click(button);await click(menu.querySelector('a'));assert.equal(menu.hidden,true);
  });
  await t.test('credential filters and full selection retain all document links',async()=>{
    await React.act(()=>root.render(React.createElement(CertificateGallery,{locale:'es',certificates,labels:copy.es.certificates,showSelection:copy.es.ui.showSelection})));
    assert.equal(document.querySelectorAll('.certificate-card').length,certificates.filter(c=>c.priority).length);
    await click(document.querySelector('.certificate-more button'));assert.equal(document.querySelectorAll('.certificate-card').length,15);
    await click([...document.querySelectorAll('.certificate-filters button')].find(b=>b.textContent==='Idiomas'));
    assert.equal(document.querySelectorAll('.certificate-card').length,1);
    assert.match(document.querySelector('.certificate-links a').getAttribute('href'),/ingles-b2/);
  });
  await t.test('language changes retain the case and latest hash; Escape restores focus',async()=>{
    await React.act(()=>root.render(React.createElement(React.Fragment,null,React.createElement(NavigationInteractions),React.createElement('details',{className:'language-switcher',open:true},React.createElement('summary',null,'Language'),React.createElement('a',{'data-language-base':'/fr/case-studies/global-iso-security/',href:'/fr/case-studies/global-iso-security/'},'Français')))));
    window.history.replaceState(null,'','/case-studies/global-iso-security/#evidence');
    await React.act(()=>window.dispatchEvent(new window.HashChangeEvent('hashchange')));
    const a=document.querySelector('a');assert.equal(a.getAttribute('href'),'/fr/case-studies/global-iso-security/#evidence');
    a.focus();await React.act(()=>document.dispatchEvent(new window.KeyboardEvent('keydown',{key:'Escape',bubbles:true})));
    assert.equal(document.querySelector('details').open,false);assert.equal(document.activeElement.tagName,'SUMMARY');
  });
  await t.test('analytics is inert without configuration',async()=>{
    delete process.env.NEXT_PUBLIC_GA_ID;
    await React.act(()=>root.render(React.createElement(Analytics)));
    assert.equal(document.querySelectorAll('script[data-portfolio-analytics]').length,0);
    assert.equal(window.dataLayer,undefined);
  });
  await React.act(()=>root.unmount());dom.window.close();
});
