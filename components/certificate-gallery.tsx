"use client";
import { useMemo, useState } from "react";
import Image from "next/image";
import { ArrowDown, ExternalLink, FileText } from "lucide-react";
import type { Certificate } from "@/data/portfolio";
import type { Copy, Locale } from "@/data/i18n";
import { localizeDate } from "@/data/format";

const certificateFilters: Array<"all" | Certificate["category"]> = [
  "all",
  "Datos",
  "Desarrollo",
  "Gestión",
  "Idiomas",
  "Otros",
];

const certificateFilterLabels: Record<Locale, Record<typeof certificateFilters[number], string>> = {
  es: { all: "Todos", Datos: "Datos", Desarrollo: "Desarrollo", Gestión: "Gestión", Idiomas: "Idiomas", Otros: "Otros" },
  en: { all: "All", Datos: "Data", Desarrollo: "Development", Gestión: "Management", Idiomas: "Languages", Otros: "Other" },
  fr: { all: "Tous", Datos: "Données", Desarrollo: "Développement", Gestión: "Gestion", Idiomas: "Langues", Otros: "Autres" },
  pt: { all: "Todos", Datos: "Dados", Desarrollo: "Desenvolvimento", Gestión: "Gestão", Idiomas: "Idiomas", Otros: "Outros" },
};


export function CertificateGallery({ locale, certificates, labels, showSelection }: { locale: Locale; certificates: Certificate[]; labels: Copy["certificates"]; showSelection: string }) {
  const c = { certificates: labels, ui: { showSelection } };
  const [activeFilter, setActiveFilter] = useState<(typeof certificateFilters)[number]>("all");
  const [showAllCertificates, setShowAllCertificates] = useState(false);

  const filteredCertificates = useMemo(
    () =>
      activeFilter === "all"
        ? certificates
        : certificates.filter((certificate) => certificate.category === activeFilter),
    [activeFilter, certificates],
  );

  const displayedCertificates =
    activeFilter === "all" && !showAllCertificates
      ? filteredCertificates.filter((certificate) => certificate.priority)
      : filteredCertificates;

  return <>
            <div className="certificate-filters" role="group" aria-label={c.certificates.filter}>
              {certificateFilters.map((filter) => (
                <button
                  type="button"
                  key={filter}
                  className={activeFilter === filter ? "active" : ""}
                  onClick={() => setActiveFilter(filter)}
                  aria-pressed={activeFilter === filter}
                >
                  {certificateFilterLabels[locale][filter]}
                </button>
              ))}
            </div>

            <div className="certificates-grid" aria-live="polite">
              {displayedCertificates.map((certificate) => (
                <article className="certificate-card" key={certificate.title}>
                  <a
                    className="certificate-preview"
                    href={certificate.image.replace(
                      "/images/certificates/",
                      "/images/certificates-full/",
                    )}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`${c.certificates.enlarge}: ${certificate.title}`}
                  >
                    <Image
                      src={certificate.image}
                      alt=""
                      width={720}
                      height={540}
                    />
                    <span>
                      <ExternalLink size={17} aria-hidden="true" />
                      {c.certificates.enlarge}
                    </span>
                  </a>
                  <div className="certificate-copy">
                    <div className="certificate-meta">
                      <span>{certificateFilterLabels[locale][certificate.category]}</span>
                    <time>{localizeDate(certificate.date, locale)}</time>
                    </div>
                    <h3>{certificate.title}</h3>
                    <p>{certificate.issuer}</p>
                    <div className="certificate-links">
                      {certificate.documents.map((document) => (
                        <a href={document.url} download key={document.url}>
                          <FileText size={15} aria-hidden="true" />
                          {locale === "en" ? (document.label === "Ver certificado" ? "View certificate" : document.label === "Certificado" ? "Certificate" : "Diploma") : locale === "fr" ? (document.label === "Ver certificado" ? "Voir le certificat" : document.label === "Certificado" ? "Certificat" : "Diplôme") : locale === "pt" ? (document.label === "Ver certificado" ? "Ver certificado" : document.label === "Certificado" ? "Certificado" : "Diploma") : document.label}
                        </a>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {activeFilter === "all" && certificates.length > displayedCertificates.length && (
              <div className="certificate-more">
                <p>{c.certificates.selected}</p>
                <button type="button" className="button button-secondary" onClick={() => setShowAllCertificates(true)}>
                  {c.certificates.all} ({certificates.length})
                  <ArrowDown size={16} aria-hidden="true" />
                </button>
              </div>
            )}
            {activeFilter === "all" && showAllCertificates && (
              <div className="certificate-more">
                <p>{c.certificates.full}</p>
                <button type="button" className="button button-secondary" onClick={() => setShowAllCertificates(false)}>
                  {c.ui.showSelection}
                </button>
              </div>
            )}
  </>;
}
