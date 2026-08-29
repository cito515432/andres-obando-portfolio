import Link from "next/link";
import { localeMeta, copy, type Locale } from "@/data/i18n";
import { LanguageSwitcher } from "@/components/language-switcher";

export function CaseStudyHeader({ locale, repo }: { locale: Locale; repo: string }) {
  return <header className="study-header"><div className="shell study-header-inner">
    <Link href={`${localeMeta[locale].path}#inicio`} className="study-brand">AO <span>Andrés Obando</span></Link>
    <div className="study-header-actions"><Link href={`${localeMeta[locale].path}#proyectos`} className="back-link">← {copy[locale].ui.back}</Link><a href={repo} target="_blank" rel="noreferrer">GitHub ↗</a><LanguageSwitcher locale={locale} /></div>
  </div></header>;
}
