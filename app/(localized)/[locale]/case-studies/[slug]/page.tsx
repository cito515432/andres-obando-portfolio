import { notFound } from "next/navigation";
import { caseStudies, studyBySlug } from "@/data/case-studies";
import { locales, type Locale } from "@/data/i18n";
import { CaseStudyPage } from "@/components/case-study";
import { caseStudyMetadata } from "@/data/case-study-metadata";

export function generateStaticParams() {
  return locales.filter(locale=>locale!=="es").flatMap(locale=>caseStudies.map(study=>({locale,slug:study.slug})));
}
export async function generateMetadata({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale, slug } = await params;
  const study = studyBySlug[slug];
  return study && locales.includes(locale as Locale) && locale!=="es" ? caseStudyMetadata(study, locale as Locale) : {};
}
export default async function LocalizedCaseStudy({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale, slug } = await params;
  const study = studyBySlug[slug];
  if (!study || !locales.includes(locale as Locale) || locale === "es") notFound();
  return <CaseStudyPage study={study} locale={locale as Locale} />;
}
