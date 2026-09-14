import { Globe2, Check, ChevronDown } from "lucide-react";
import { localeMeta, locales, copy, type Locale } from "@/data/i18n";

export function LanguageSwitcher({ locale, path = "", mobile = false, hero = false }: { locale: Locale; path?: string; mobile?: boolean; hero?: boolean }) {
  const links = locales.map((code) => {
    const item = localeMeta[code];
    const href = `${item.path}${path}`;
    return <a key={code} href={href} hrefLang={code} lang={code} data-language-base={href} data-analytics="language_select" data-language={code} aria-current={code === locale ? "page" : undefined}>
      <span aria-hidden="true">{item.flag}</span> {item.label}{code === locale && <Check size={14} aria-hidden="true" />}
    </a>;
  });
  if (hero) return <div className="hero-language-picker" aria-label={copy[locale].ui.languagePrompt}>
    <p><Globe2 size={17} aria-hidden="true" /> {copy[locale].ui.languagePrompt}</p>
    <div className="hero-language-options">{links}</div>
  </div>;
  const current = localeMeta[locale];
  return <details className={`language-switcher${mobile ? " mobile-language-switcher" : ""}`}>
    <summary aria-label={copy[locale].ui.language}><Globe2 size={16} aria-hidden="true" /><span aria-hidden="true">{current.flag}</span> {current.short}<ChevronDown size={15} aria-hidden="true" /></summary>
    <div className="language-menu">{links}</div>
  </details>;
}
