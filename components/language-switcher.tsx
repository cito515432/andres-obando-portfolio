"use client";

import { Globe2, Check, ChevronDown } from "lucide-react";
import { usePathname } from "next/navigation";
import { localeMeta, locales, copy, type Locale } from "@/data/i18n";

function localizedHref(pathname: string, hash: string, target: Locale) {
  const withoutLocale = pathname.replace(/^\/(en|fr|pt)(?=\/|$)/, "") || "/";
  const prefix = localeMeta[target].path === "/" ? "" : localeMeta[target].path.slice(0, -1);
  return `${prefix}${withoutLocale === "/" ? "/" : withoutLocale}${hash}`;
}

export function LanguageSwitcher({ locale, mobile = false, hero = false }: { locale: Locale; mobile?: boolean; hero?: boolean }) {
  const pathname = usePathname();
  const hash = typeof window === "undefined" ? "" : window.location.hash;
  const current = localeMeta[locale];
  if (hero) return <div className="hero-language-picker" aria-label={copy[locale].ui.languagePrompt}>
    <p><Globe2 size={17} aria-hidden="true" /> {copy[locale].ui.languagePrompt}</p>
    <div className="hero-language-options">
      {locales.map((code) => { const item = localeMeta[code]; return <a key={code} href={localizedHref(pathname, hash, code)} aria-current={code === locale ? "page" : undefined}><span aria-hidden="true">{item.flag}</span> {item.label}{code === locale && <Check size={14} aria-hidden="true" />}</a>; })}
    </div>
  </div>;
  return (
    <details className={`language-switcher${mobile ? " mobile-language-switcher" : ""}`}>
      <summary aria-label={copy[locale].ui.language}>
        <Globe2 size={16} aria-hidden="true" /> <span>{current.flag}</span> {current.short} <ChevronDown size={15} aria-hidden="true" />
      </summary>
      <div className="language-menu">
        {locales.map((code) => {
          const item = localeMeta[code];
          return <a key={code} href={localizedHref(pathname, hash, code)} aria-current={code === locale ? "page" : undefined}>
            <span aria-hidden="true">{item.flag}</span> {item.label}{code === locale && <Check size={15} aria-label="" />}
          </a>;
        })}
      </div>
    </details>
  );
}
