import type { CaseStudy } from "@/data/case-studies";
import { caseStudyFieldKeys, copy } from "@/data/i18n";
import { CaseStudyHeader } from "@/components/case-study-header";
import { caseStudyHighlights } from "@/data/case-study-highlights";

export function LocalizedCaseStudyFallback({ study }: { study: CaseStudy }) {
  const c = study.copy.es; const ui = copy.es.ui;
  return <><CaseStudyHeader locale="es" repo={study.repo} /><main lang="es" className="study-page"><div className="shell study-shell"><p className="eyebrow">{c.label}</p><h1>{c.title}</h1><p className="study-summary">{c.summary}</p><div className="study-highlights" aria-label={ui.caseStudyLabels.results}>{caseStudyHighlights[study.slug].es.map((item) => <span key={item}>{item}</span>)}</div><div className={`study-diagram study-diagram-${study.kind}`} aria-label={c.architecture}>{c.architecture.split(" → ").map((part, index) => <span key={part}>{part}{index < c.architecture.split(" → ").length - 1 ? " →" : ""}</span>)}</div><div className="study-grid">{caseStudyFieldKeys.map((key) => <section className={key === "contribution" ? "study-contribution" : undefined} key={key}><h2>{ui.caseStudyLabels[key]}</h2><p>{c[key]}</p></section>)}</div><a className="button button-primary" href={study.repo} target="_blank" rel="noreferrer">{ui.viewCode} ↗</a></div></main></>;
}
