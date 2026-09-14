import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
const css=readFileSync('app/globals.css','utf8');
const tokens=block=>Object.fromEntries([...block.matchAll(/(--[\w-]+):\s*(#[a-f0-9]{6});/gi)].map(m=>[m[1],m[2]]));
const light=tokens(css.match(/:root\s*\{([^}]+)\}/)[1]);
const dark={...light,...tokens(css.match(/:root\[data-theme="dark"\]\s*\{([^}]+)\}/)[1])};
const luminance=hex=>hex.slice(1).match(/../g).map(c=>parseInt(c,16)/255).map(c=>c<=.04045?c/12.92:((c+.055)/1.055)**2.4).reduce((a,c,i)=>a+c*[.2126,.7152,.0722][i],0);
const ratio=(a,b)=>{const [lo,hi]=[luminance(a),luminance(b)].sort((a,b)=>a-b);return (hi+.05)/(lo+.05);};
for(const [theme,t]of [['light',light],['dark',dark]]){
 test(`${theme}: text, controls and focus token contrast`,()=>{
  const pairs=[['--ink','--paper'],['--ink-soft','--paper-light'],['--ink','--surface'],['--link','--paper-light'],['--coral-text','--paper-light'],['--on-accent','--accent-bg'],['--on-accent','--accent-hover'],['--on-dark','--contact-bg'],['--on-dark-muted','--panel-bg']];
  for(const [fg,bg]of pairs)assert.ok(ratio(t[fg],t[bg])>=4.5,`${fg}/${bg} ${ratio(t[fg],t[bg])}`);
  for(const fg of ['--control-border','--focus'])assert.ok(ratio(t[fg],t['--paper-light'])>=3);
  assert.ok(ratio(t['--coral'],t['--paper'])>=3,'large hero accent');
  assert.ok(ratio('#f5e4dd',t['--contact-bg'])>=4.5,'contact supporting text');
 });
}
