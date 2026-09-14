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

const selectedPriorityOrder = [
  "Fundamentos profesionales del análisis de datos",
  "Bases de datos: generalidades y sistemas de gestión",
  "Business Intelligence Foundation",
  "EF SET English Certificate · B2",
  "Desarrollo de aplicaciones con interfaz gráfica: Java",
  "Google: Inteligencia Artificial y productividad",
];

const certificateTitleTranslations: Record<string, Partial<Record<Locale, string>>> = {
  "Google: Inteligencia Artificial y productividad": {
    en: "Google: Artificial Intelligence and Productivity",
    fr: "Google : Intelligence artificielle et productivité",
    pt: "Google: Inteligência Artificial e produtividade",
  },
  "Desarrollo de aplicaciones con interfaz gráfica: Java": {
    en: "GUI Application Development: Java",
    fr: "Développement d’applications avec interface graphique : Java",
    pt: "Desenvolvimento de aplicações com interface gráfica: Java",
  },
  "Fundamentos profesionales del análisis de datos": {
    en: "Professional Foundations of Data Analysis",
    fr: "Fondements professionnels de l’analyse de données",
    pt: "Fundamentos profissionais da análise de dados",
  },
  "Business Intelligence Foundation": {
    en: "Business Intelligence Foundation",
    fr: "Fondamentaux de la Business Intelligence",
    pt: "Fundamentos de Business Intelligence",
  },
  "EF SET English Certificate · B2": {
    en: "EF SET English Certificate · B2",
    fr: "Certificat d’anglais EF SET · B2",
    pt: "Certificado de inglês EF SET · B2",
  },
  "Apropiación de los conceptos en ciberseguridad": {
    en: "Understanding Cybersecurity Concepts",
    fr: "Fondamentaux des concepts de cybersécurité",
    pt: "Conceitos de cibersegurança",
  },
  "Scrum Foundation Professional Certificate": {
    en: "Scrum Foundation Professional Certificate",
    fr: "Certification professionnelle Scrum Foundation",
    pt: "Certificação profissional Scrum Foundation",
  },
  "Bases de datos: generalidades y sistemas de gestión": {
    en: "Databases: Fundamentals and Management Systems",
    fr: "Bases de données : notions générales et systèmes de gestion",
    pt: "Bancos de dados: fundamentos e sistemas de gerenciamento",
  },
  "Manejo de herramientas Microsoft Office 2016: Excel": {
    en: "Microsoft Office 2016 Tools: Excel",
    fr: "Outils Microsoft Office 2016 : Excel",
    pt: "Ferramentas do Microsoft Office 2016: Excel",
  },
  "Economía del comportamiento para mejores políticas públicas": {
    en: "Behavioral Economics for Better Public Policy",
    fr: "Économie comportementale pour de meilleures politiques publiques",
    pt: "Economia comportamental para melhores políticas públicas",
  },
  "Automatización de procesos de campaña": {
    en: "Campaign Process Automation",
    fr: "Automatisation des processus de campagne",
    pt: "Automação de processos de campanha",
  },
  "Seguridad de la marca en Facebook": {
    en: "Brand Safety on Facebook",
    fr: "Sécurité de la marque sur Facebook",
    pt: "Segurança da marca no Facebook",
  },
  "Administrador de monetización": {
    en: "Monetization Manager",
    fr: "Gestionnaire de monétisation",
    pt: "Gerenciador de monetização",
  },
  "Protege el contenido con Rights Manager": {
    en: "Protect Content with Rights Manager",
    fr: "Protéger le contenu avec Rights Manager",
    pt: "Proteja o conteúdo com o Rights Manager",
  },
  "Oportunidades de negocio": {
    en: "Business Opportunities",
    fr: "Opportunités commerciales",
    pt: "Oportunidades de negócios",
  },
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
      ? [...filteredCertificates.filter((certificate) => certificate.priority)].sort((a, b) => {
          const aRank = selectedPriorityOrder.indexOf(a.title);
          const bRank = selectedPriorityOrder.indexOf(b.title);
          return (aRank === -1 ? Number.MAX_SAFE_INTEGER : aRank) - (bRank === -1 ? Number.MAX_SAFE_INTEGER : bRank);
        })
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
              {displayedCertificates.map((certificate) => {
                const translatedTitle = locale === "es" ? undefined : certificateTitleTranslations[certificate.title]?.[locale];
                return (
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
                    {translatedTitle && <small lang={locale} style={{ display: "block", marginTop: ".35rem", color: "var(--ink-soft)", lineHeight: 1.45 }}>{translatedTitle}</small>}
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
              ); })}
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
