import { localeMeta, copy, type Locale } from "@/data/i18n";
import { evidenceUi } from "@/data/evidence-ui";
import { LanguageSwitcher } from "./language-switcher";
import { ThemeSwitcher } from "./theme-switcher";

export function CaseStudyHeader({ locale, repo, slug }: { locale: Locale; repo: string; slug: string }) {
  return <header className="study-header"><div className="shell study-header-inner">
    <a href={`${localeMeta[locale].path}#inicio`} className="study-brand" aria-label={copy[locale].ui.home}><span className="brand-mark">AO</span><span>Andrés Obando</span></a>
    <div className="study-header-actions"><a href={`${localeMeta[locale].path}#proyectos`} className="back-link">← {copy[locale].ui.back}</a><a href={repo} target="_blank" rel="noreferrer">GitHub ↗</a><LanguageSwitcher locale={locale} path={`case-studies/${slug}/`} /><ThemeSwitcher light={evidenceUi[locale].light} dark={evidenceUi[locale].dark} /></div>
  </div></header>;
}
