import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { caseStudies, studyBySlug } from "@/data/case-studies";
import { copy, locales, localeMeta, type Locale } from "@/data/i18n";
import "@/app/globals.css";

export function generateStaticParams() {
  return locales.filter((locale) => locale !== "es").flatMap((locale) => caseStudies.map((study) => ({ locale, slug: study.slug })));
}

export function generateMetadata({ params }: { params: Promise<{ locale: string; slug: string }> }): Promise<Metadata> {
  return params.then(({ locale: value, slug }) => {
    const study = studyBySlug[slug];
    if (!study || !locales.includes(value as Locale) || value === "es") return {};
    const c = study.copy[value as Locale];
    return { title: `${c.title} | Andrés Obando`, description: c.summary, alternates: { canonical: `${localeMeta[value as Locale].path}case-studies/${slug}/`, languages: { es: `/case-studies/${slug}/`, en: `/en/case-studies/${slug}/`, fr: `/fr/case-studies/${slug}/`, pt: `/pt/case-studies/${slug}/` } }, openGraph: { title: c.title, description: c.summary } };
  });
}

export default async function LocalizedCaseStudy({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale: value, slug } = await params;
  const study = studyBySlug[slug];
  if (!study || !locales.includes(value as Locale) || value === "es") notFound();
  const locale = value as Locale;
  const c = study.copy[locale];
  const ui = copy[locale].ui;
  return <main className="study-page"><div className="shell study-shell"><Link className="back-link" href={`${localeMeta[locale].path}#proyectos`}>← {ui.back}</Link><p className="eyebrow">{c.label}</p><h1>{c.title}</h1><p className="study-summary">{c.summary}</p><div className={`study-diagram study-diagram-${study.kind}`} aria-label={c.architecture}>{c.architecture.split(" → ").map((part, index) => <span key={part}>{part}{index < c.architecture.split(" → ").length - 1 ? " →" : ""}</span>)}</div><div className="study-grid">{([["Context", c.context], ["Problem", c.problem], ["Objective", c.objective], ["Dataset", c.dataset], ["Technologies", c.technologies], ["Technical decisions", c.decisions], ["My contribution", c.contribution], ["Results", c.results], ["Challenges", c.challenges], ["Learnings", c.learnings], ["Limitations", c.limitations], ["Future improvements", c.future], ["Evidence", c.evidence]] as const).map(([heading, text]) => <section key={heading}><h2>{heading}</h2><p>{text}</p></section>)}</div><a className="button button-primary" href={study.repo} target="_blank" rel="noreferrer">{ui.viewCode} ↗</a></div></main>;
}
