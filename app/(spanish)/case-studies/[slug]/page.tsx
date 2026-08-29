import { notFound } from "next/navigation";
import { caseStudies } from "@/data/case-studies";
import { LocalizedCaseStudyFallback } from "@/components/localized-case-study-fallback";

export function generateStaticParams() { return caseStudies.map(({ slug }) => ({ slug })); }

export default async function SpanishCaseStudy({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const study = caseStudies.find((item) => item.slug === slug);
  if (!study) notFound();
  return <LocalizedCaseStudyFallback study={study} />;
}
