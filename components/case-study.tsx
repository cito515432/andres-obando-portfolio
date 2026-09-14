import { globalIsoResults } from "@/data/global-iso-results";
import type { CaseStudy } from "@/data/case-studies";
import { copy, type Locale } from "@/data/i18n";
import { caseStudyHighlights } from "@/data/case-study-highlights";
import { evidenceUi } from "@/data/evidence-ui";
import { projectEvidence } from "@/data/project-evidence";
import { CaseStudyHeader } from "./case-study-header";
import { EvidenceFigure, ModelEvidence } from "./project-evidence";

export function CaseStudyPage({ study, locale }: { study: CaseStudy; locale: Locale }) {
  const c = study.copy[locale];
  const ui = copy[locale].ui;
  const e = evidenceUi[locale];
  const evidence = projectEvidence[study.slug];
  const architectureImage = evidence.images.find(image => image.kind === "diagram");
  const gallery = evidence.images.filter(image => image !== architectureImage);
  const detailKeys = ["context", "objective", "dataset", "technologies", "challenges", "learnings", "future"] as const;
  return <>
    <a className="skip-link" href="#contenido">{ui.skip}</a>
    <CaseStudyHeader locale={locale} repo={study.repo} slug={study.slug} />
    <main id="contenido" lang={locale} className="study-page" tabIndex={-1}>
      <div className="shell study-shell">
        <p className="eyebrow">{c.label}</p>
        <h1>{study.projectName}</h1>
        <p className="study-deck">{c.title}</p>
        <p className="study-summary">{c.summary}</p>
        <div className="study-highlights"><span>{e.academic}</span>{caseStudyHighlights[study.slug][locale].map(item => <span key={item}>{item}</span>)}</div>
        <nav className="study-nav" aria-label={ui.study}>
          {[['overview',e.overview],['architecture',e.architecture],['results',e.results],['evidence',e.evidence]].map(([id,label])=><a key={id} href={`#${id}`}>{label}</a>)}
        </nav>
        <div id="overview" className="study-overview">
          <section><h2>{ui.caseStudyLabels.problem}</h2><p>{c.problem}</p></section>
          <section className="study-contribution"><h2>{ui.caseStudyLabels.contribution}</h2><p>{c.contribution}</p></section>
        </div>
        <section id="architecture" className="study-section">
          <h2>{e.architecture}</h2><p>{c.architecture}</p>
          {architectureImage && <EvidenceFigure item={architectureImage} locale={locale} />}
          {study.kind === "ml" && <><ModelEvidence locale={locale} /><p className="study-note">{e.barcelonaNote}</p></>}
          <div className="study-decision"><h3>{ui.caseStudyLabels.decisions}</h3><p>{c.decisions}</p></div>
        </section>
        <section id="results" className="study-section study-results">
          <h2>{e.results}</h2>
          {study.kind === "security" ? <table className="study-result-table"><caption className="sr-only">{e.results} · Global ISO Security</caption><thead><tr><th scope="col">{e.metric}</th><th scope="col">{e.value}</th><th scope="col">{e.scope}</th></tr></thead><tbody>{globalIsoResults[locale].map(([metric,value,scope])=><tr key={metric}><th scope="row">{metric}</th><td>{value}</td><td>{scope}</td></tr>)}</tbody></table> : <p>{c.results}</p>}
          <div className="study-limits"><h3>{ui.caseStudyLabels.limitations}</h3><p>{c.limitations}</p></div>
        </section>
        <section id="evidence" className="study-section">
          <h2>{e.evidence}</h2>
          <div className={`evidence-gallery${study.kind === "analytics" ? " evidence-gallery-pair" : ""}`}>
            {gallery.map(item=><EvidenceFigure key={item.src} item={item} locale={locale} />)}
          </div>
          {architectureImage && !gallery.length && <a className="text-link" href={architectureImage.src} target="_blank" rel="noreferrer" data-analytics="project_evidence_open">{e.original} · {e.architecture} ↗</a>}
          <p className="study-note">{c.evidence}</p>
          <ul className="evidence-sources" aria-label={e.verified}>{evidence.sources.map(source=><li key={source.url}><a href={source.url} target="_blank" rel="noreferrer">{source.label} ↗</a></li>)}</ul>
        </section>
        <details className="study-details"><summary>{e.details}</summary><div className="study-grid">
          {detailKeys.map(key=><section key={key}><h2>{ui.caseStudyLabels[key]}</h2><p>{c[key]}</p></section>)}
        </div></details>
        <a className="button button-primary" href={study.repo} target="_blank" rel="noreferrer">{ui.viewCode} ↗</a>
      </div>
    </main>
  </>;
}
