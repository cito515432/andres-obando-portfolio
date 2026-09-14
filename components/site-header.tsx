import { ArrowUpRight, Download } from "lucide-react";
import { copy, localeMeta, type Locale } from "@/data/i18n";
import { profile } from "@/data/portfolio";
import { evidenceUi } from "@/data/evidence-ui";
import { LanguageSwitcher } from "./language-switcher";
import { MobileNavigation } from "./mobile-navigation";
import { ThemeSwitcher } from "./theme-switcher";

const navigationKeys = [
  ["profile", "#perfil"], ["projects", "#proyectos"], ["experience", "#experiencia"],
  ["skills", "#habilidades"], ["certificates", "#certificados"], ["contact", "#contacto"],
] as const;

const mainNavigationLabel: Record<Locale, string> = {
  es: "Navegación principal",
  en: "Main navigation",
  fr: "Navigation principale",
  pt: "Navegação principal",
};

export function SiteHeader({ locale }: { locale: Locale }) {
  const c = copy[locale];
  const navigation = navigationKeys.map(([key, href]) => ({ label: c.nav[key], href }));
  return (      <header className="site-header">
        <div className="shell header-inner">
          <a className="brand" href={`${localeMeta[locale].path}#inicio`}>
            <span className="brand-mark">AO</span>
            <span className="brand-copy">
              <strong>Andrés Obando</strong>
              <small>Data Engineering · Systems Engineering</small>
            </span>
          </a>

          <nav className="desktop-nav" aria-label={mainNavigationLabel[locale]}>
            {navigation.map((item) => (
              <a key={item.href} href={item.href}>
                {item.label}
              </a>
            ))}
          </nav>

          <div className="header-language"><LanguageSwitcher locale={locale} /></div>
          <ThemeSwitcher light={evidenceUi[locale].light} dark={evidenceUi[locale].dark} />

          <a className="header-cta" href={profile.cv} download>
            <Download size={16} aria-hidden="true" />
            CV
          </a>

          <MobileNavigation openLabel={c.ui.openMenu} closeLabel={c.ui.closeMenu} navigationLabel={mainNavigationLabel[locale]}>
            {navigation.map((item) => <a key={item.href} href={item.href}>{item.label}<ArrowUpRight size={16} aria-hidden="true" /></a>)}
            <a href={profile.cv} download>{c.ui.downloadCv}<Download size={16} aria-hidden="true" /></a>
            <LanguageSwitcher locale={locale} mobile />
          </MobileNavigation>
        </div>
      </header>);
}
