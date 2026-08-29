import Link from "next/link";
import type { CaseStudy } from "@/data/case-studies";
import { copy } from "@/data/i18n";

export function LocalizedCaseStudyFallback({ study }: { study: CaseStudy }) {
  const c = study.copy.es; const ui = copy.es.ui;
  const fields = [["Contexto", c.context], ["Problema", c.problem], ["Objetivo", c.objective], ["Dataset", c.dataset], ["Tecnologías", c.technologies], ["Decisiones técnicas", c.decisions], ["Mi contribución", c.contribution], ["Resultados", c.results], ["Retos", c.challenges], ["Aprendizajes", c.learnings], ["Limitaciones", c.limitations], ["Mejoras futuras", c.future], ["Evidencia", c.evidence]];
  return <main className="study-page"><div className="shell study-shell"><Link className="back-link" href="/#proyectos">← {ui.back}</Link><p className="eyebrow">{c.label}</p><h1>{c.title}</h1><p className="study-summary">{c.summary}</p><div className={`study-diagram study-diagram-${study.kind}`}>{c.architecture.split(" → ").map((part, index) => <span key={part}>{part}{index < c.architecture.split(" → ").length - 1 ? " →" : ""}</span>)}</div><div className="study-grid">{fields.map(([heading, text]) => <section key={heading}><h2>{heading}</h2><p>{text}</p></section>)}</div><a className="button button-primary" href={study.repo} target="_blank" rel="noreferrer">{ui.viewCode} ↗</a></div></main>;
}
