import Image from "next/image";
import { ArrowUpRight, FileCode2, Database } from "lucide-react";
import { localeMeta, type Locale } from "@/data/i18n";
import { evidenceUi } from "@/data/evidence-ui";
import { projectEvidence, type EvidenceImage } from "@/data/project-evidence";

export function ModelEvidence({ locale }: { locale: Locale }) {
  const ui = evidenceUi[locale];
  return <div className="model-evidence">
    <div className="model-input"><Database size={18} aria-hidden="true" /><span>CSV · MySQL</span><span>{ui.features}</span></div>
    <ul className="model-comparison">{["Logistic Regression", "Decision Tree", "Random Forest", "XGBoost"].map(model => <li key={model}>{model}</li>)}</ul>
    <div className="model-output"><FileCode2 size={18} aria-hidden="true" /> Streamlit <span>app_streamlit.py</span></div>
  </div>;
}

export function ProjectEvidencePreview({ slug, locale, metric }: { slug: string; locale: Locale; metric: string }) {
  const evidence = projectEvidence[slug];
  const item = evidence.images.find(image => image.src.endsWith(evidence.preview ?? "__none__"));
  const ui = evidenceUi[locale];
  const visibleType = item ? ui[item.kind] : ui.code;
  return <a className="project-evidence-preview" href={`${localeMeta[locale].path}case-studies/${slug}/#evidence`} data-analytics="project_evidence_open" data-project={slug} aria-label={`${visibleType} · ${metric} · ${ui.evidence}: ${slug.replaceAll("-", " ")}`}>
    <div className="evidence-preview-canvas">
      {item ? <Image src={item.src.endsWith('global-iso-soa-preview.webp') ? '/images/projects/global-iso-soa-preview-720.webp' : item.src} width={item.width} height={item.height} alt={item.caption[locale]} loading="lazy" decoding="async" /> : <ModelEvidence locale={locale} />}
    </div>
    <div className="evidence-preview-caption"><span>{visibleType}</span><ArrowUpRight size={17} aria-hidden="true" /></div>
    <strong className="evidence-preview-metric">{metric}</strong>
  </a>;
}

export function EvidenceFigure({ item, locale }: { item: EvidenceImage; locale: Locale }) {
  const ui = evidenceUi[locale];
  return <figure className="evidence-figure">
    <a className="evidence-image-link" href={item.src} target="_blank" rel="noreferrer" data-analytics="project_evidence_open" aria-label={`${ui.original}: ${item.caption[locale]}`}>
      <Image src={item.src} alt={item.caption[locale]} width={item.width} height={item.height} loading="lazy" decoding="async" />
    </a>
    <figcaption><span className="evidence-type">{ui[item.kind]}</span><p>{item.caption[locale]}</p>
      {item.sourceLang === "es" && locale !== "es" && <small>{ui.sourceLanguage}</small>}
      <div className="evidence-links"><a href={item.src} target="_blank" rel="noreferrer" data-analytics="project_evidence_open">{ui.original} ↗</a><a href={item.source.url} target="_blank" rel="noreferrer">{ui.source} ↗</a></div>
    </figcaption>
  </figure>;
}
