import type { Metadata } from "next";
import type { CaseStudy } from "./case-studies";
import { localeMeta, locales, type Locale } from "./i18n";

const base = "https://andres-obando-portfolio-static.onrender.com";
const ogLocales = { es: "es_CO", en: "en_US", fr: "fr_FR", pt: "pt_BR" };
export function caseStudyMetadata(study: CaseStudy, locale: Locale): Metadata {
  const title = `${study.projectName} | Andrés Obando`;
  const description = study.copy[locale].summary;
  const url = `${base}${localeMeta[locale].path}case-studies/${study.slug}/`;
  const image = { url: `${base}/images/social/${study.slug}.png`, width: 1200, height: 630, alt: `${study.projectName} · Andrés Obando` };
  return {
    title, description,
    alternates: { canonical: url, languages: { ...Object.fromEntries(locales.map(l=>[l,`${base}${localeMeta[l].path}case-studies/${study.slug}/`])), "x-default": `${base}/case-studies/${study.slug}/` } },
    openGraph: { title, description, url, type: "website", siteName: "Andrés Obando", locale: ogLocales[locale], alternateLocale: locales.filter(l=>l!==locale).map(l=>ogLocales[l]), images: [image] },
    twitter: { card: "summary_large_image", title, description, images: [image] },
  };
}
