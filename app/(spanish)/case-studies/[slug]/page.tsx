import { notFound } from "next/navigation";
import { caseStudies, studyBySlug } from "@/data/case-studies";
import { CaseStudyPage } from "@/components/case-study";
import { caseStudyMetadata } from "@/data/case-study-metadata";

export function generateStaticParams() { return caseStudies.map(({ slug }) => ({ slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const study = studyBySlug[slug];
  return study ? caseStudyMetadata(study, "es") : {};
}
export default async function SpanishCaseStudy({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const study = studyBySlug[slug];
  if (!study) notFound();
  return <CaseStudyPage study={study} locale="es" />;
}
