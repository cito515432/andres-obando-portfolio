import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync,existsSync } from "node:fs";
import { resolve } from "node:path";
import { JSDOM } from "jsdom";
import { loadTs } from "./load-ts.mjs";
const {caseStudies}=loadTs('data/case-studies.ts');
const {copy}=loadTs('data/i18n.ts');
const site='https://andres-obando-portfolio-static.onrender.com';
const prefixes={es:'/',en:'/en/',fr:'/fr/',pt:'/pt/'};
const localizedProjectSentinels={
  es:['Pipeline end-to-end','Profesor de programación de software'],
  en:['End-to-end pipeline','Software Programming Instructor'],
  fr:['Pipeline de bout en bout','Professeur de programmation'],
  pt:['Pipeline de ponta a ponta','Professor de programação'],
};
for (const [locale,prefix]of Object.entries(prefixes)) {
  for (const slug of ['',...caseStudies.map(s=>s.slug)]) {
    const route=prefix+(slug?'case-studies/'+slug+'/':'');
    test(`static export: ${route}`,()=>{
      const html=readFileSync(resolve('out','.'+route,'index.html'),'utf8');
      const {window}=new JSDOM(html,{url:site+route});const {document:d}=window;
      assert.equal(d.documentElement.lang,locale);
      assert.equal(d.querySelectorAll('main').length,1);assert.equal(d.querySelectorAll('h1').length,1);
      assert.equal(d.querySelector('link[rel="canonical"]').href,site+route);
      assert.ok(d.querySelector('a.skip-link[href="#contenido"]'));
      assert.ok(d.querySelector('head script:not([src])').textContent.includes('prefers-color-scheme'));
      assert.ok(d.querySelector('.theme-switcher'));
      for(const [l,p]of Object.entries(prefixes))assert.equal(d.querySelector(`link[hreflang="${l}"]`).href,site+p+(slug?'case-studies/'+slug+'/':''));
      if(slug){
        assert.equal(d.title,caseStudies.find(s=>s.slug===slug).projectName+' | Andrés Obando');
        assert.equal(d.querySelector('meta[property="og:image"]').content,site+'/images/social/'+slug+'.png');
        assert.equal(d.querySelector('meta[name="twitter:image"]').content,site+'/images/social/'+slug+'.png');
        assert.equal(d.querySelector('meta[name="twitter:card"]').content,'summary_large_image');
        assert.equal(d.querySelector('meta[property="og:url"]').content,site+route);
      } else {
        assert.equal(d.querySelectorAll('.project-card').length,4);
        assert.ok(d.body.textContent.includes(copy[locale].hero.availability));
        for(const sentinel of localizedProjectSentinels[locale])assert.ok(d.body.textContent.includes(sentinel),`${route}: missing ${locale} copy: ${sentinel}`);
        assert.equal(d.querySelectorAll('.project-evidence-preview').length,4);
      }
      for(const a of d.querySelectorAll('a[href]')){
        const u=new URL(a.href);if(u.origin!==site)continue;
        const target=resolve('out','.'+decodeURIComponent(u.pathname));
        assert.ok(existsSync(target),`${route}: missing ${u.pathname}`);
        if(u.hash){
          const targetFile=u.pathname.endsWith('/')?resolve(target,'index.html'):target;
          const targetDom=u.pathname===route?d:new JSDOM(readFileSync(targetFile,'utf8')).window.document;
          assert.ok(targetDom.getElementById(decodeURIComponent(u.hash.slice(1))),`${route}: missing anchor ${a.href}`);
        }
      }
      for(const image of d.querySelectorAll('img')){
        assert.ok(image.hasAttribute('alt'));assert.ok(image.width>0 && image.height>0);
        assert.ok(existsSync(resolve('out','.'+new URL(image.src).pathname)),image.src);
        assert.ok(!image.getAttribute('style')?.includes('filter'));
      }
      const ids=[...d.querySelectorAll('[id]')].map(e=>e.id);assert.equal(ids.length,new Set(ids).size,'duplicate IDs');
      assert.equal(d.querySelectorAll('script[data-portfolio-analytics]').length,0);
      window.close();
    });
  }
}
