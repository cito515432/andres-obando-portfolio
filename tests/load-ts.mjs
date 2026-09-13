import ts from "typescript";
import { readFileSync, existsSync } from "node:fs";
import { resolve } from "node:path";
import { createRequire } from "node:module";
const nodeRequire = createRequire(import.meta.url);
const cache = new Map();
export function loadTs(relative) {
  let path = resolve(relative);
  if (!existsSync(path)) path += existsSync(path + ".tsx") ? ".tsx" : ".ts";
  if (cache.has(path)) return cache.get(path);
  const output = ts.transpileModule(readFileSync(path,"utf8"), {compilerOptions:{module:ts.ModuleKind.CommonJS,jsx:ts.JsxEmit.ReactJSX,target:ts.ScriptTarget.ES2022,esModuleInterop:true}}).outputText;
  const loaded = {exports:{}};
  const require = name => name.startsWith("@/") ? name.endsWith(".mjs") ? nodeRequire(resolve(name.slice(2))) : loadTs(name.slice(2)) : nodeRequire(name);
  new Function("require","module","exports",output)(require,loaded,loaded.exports);
  cache.set(path,loaded.exports);
  return loaded.exports;
}
