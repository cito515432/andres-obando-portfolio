"use client";

import { useMemo, useState, type SVGProps } from "react";
import Image from "next/image";
import {
  ArrowDown,
  ArrowUpRight,
  Award,
  BarChart3,
  BriefcaseBusiness,
  CheckCircle2,
  Code2,
  Database,
  Download,
  ExternalLink,
  FileText,
  GraduationCap,
  Mail,
  MapPin,
  Menu,
  ShieldCheck,
  Sparkles,
  X,
} from "lucide-react";
import {
  certificates,
  experience,
  profile,
  projects,
  skillGroups,
  type Certificate,
  type Project,
} from "@/data/portfolio";
import { copy, localeMeta, type Locale } from "@/data/i18n";
import { LanguageSwitcher } from "@/components/language-switcher";

const navigationKeys = [
  ["profile", "#perfil"], ["projects", "#proyectos"], ["experience", "#experiencia"],
  ["skills", "#habilidades"], ["certificates", "#certificados"], ["contact", "#contacto"],
] as const;

type BrandIconProps = SVGProps<SVGSVGElement> & { size?: number };

function GithubIcon({ size = 24, ...props }: BrandIconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12 .7a11.3 11.3 0 0 0-3.6 22c.6.1.8-.2.8-.5v-2.1c-3.3.7-4-1.4-4-1.4-.5-1.4-1.3-1.8-1.3-1.8-1.1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1.1 1.8 2.8 1.3 3.4 1 .1-.8.4-1.3.8-1.6-2.6-.3-5.4-1.3-5.4-5.6 0-1.2.4-2.2 1.2-3-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.1 1.2A10.7 10.7 0 0 1 12 6.5c1 0 1.9.1 2.8.4 2.1-1.5 3.1-1.2 3.1-1.2.6 1.6.2 2.8.1 3.1.7.8 1.2 1.8 1.2 3 0 4.3-2.8 5.3-5.4 5.6.4.4.8 1.1.8 2.2v3.2c0 .3.2.6.8.5A11.3 11.3 0 0 0 12 .7Z" />
    </svg>
  );
}

function LinkedinIcon({ size = 24, ...props }: BrandIconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M5.3 7.9H1.7V22h3.6V7.9ZM3.5 2A2.1 2.1 0 1 0 3.5 6.2 2.1 2.1 0 0 0 3.5 2Zm9.1 5.9H9.1V22h3.5v-7c0-1.8.4-3.6 2.7-3.6 2.3 0 2.3 2.1 2.3 3.7V22h3.6v-7.7c0-3.8-.8-6.7-5.2-6.7-2.1 0-3.5 1.2-4.1 2.3h-.1v-2Z" />
    </svg>
  );
}


function ProjectMark({ kind }: { kind: Project["kind"] }) {
  const iconProps = { size: 27, strokeWidth: 1.8, "aria-hidden": true } as const;

  if (kind === "data") return <Database {...iconProps} />;
  if (kind === "security") return <ShieldCheck {...iconProps} />;
  if (kind === "analytics") return <BarChart3 {...iconProps} />;
  if (kind === "ml") return <Sparkles {...iconProps} />;
  return <Code2 {...iconProps} />;
}

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

const localizeDate = (value: string, locale: Locale) => {
  if (locale === "es") return value;
  const months: Record<Locale, Record<string, string>> = {
    es: {}, en: { "Ene.": "Jan.", "Feb.": "Feb.", "Mar.": "Mar.", "Abr.": "Apr.", "Jun.": "Jun.", "Jul.": "Jul.", "Ago.": "Aug.", "Sep.": "Sep.", "Oct.": "Oct.", "Nov.": "Nov.", "Dic.": "Dec.", actualidad: "present", horas: "hours" }, fr: { "Ene.": "janv.", "Feb.": "févr.", "Mar.": "mars", "Abr.": "avr.", "Jun.": "juin", "Jul.": "juil.", "Ago.": "août", "Sep.": "sept.", "Oct.": "oct.", "Nov.": "nov.", "Dic.": "déc.", actualidad: "aujourd’hui", horas: "heures" }, pt: { "Ene.": "jan.", "Feb.": "fev.", "Mar.": "mar.", "Abr.": "abr.", "Jun.": "jun.", "Jul.": "jul.", "Ago.": "ago.", "Sep.": "set.", "Oct.": "out.", "Nov.": "nov.", "Dic.": "dez.", actualidad: "atual", horas: "horas" },
  };
  return Object.entries(months[locale]).reduce((text, [from, to]) => text.replaceAll(from, to), value);
};

const localizeMetric = (value: string, locale: Locale) => {
  const translations: Record<Locale, Record<string, string>> = { es: {}, en: { "Proyecto inicial": "Initial project", "Progresión académica": "Academic progression" }, fr: { "Proyecto inicial": "Projet initial", "Progresión académica": "Progression académique" }, pt: { "Proyecto inicial": "Projeto inicial", "Progresión académica": "Progressão acadêmica" } };
  return translations[locale][value] ?? value;
};

const localizeSkill = (value: string, locale: Locale) => {
  const translations: Record<Locale, Record<string, string>> = { es: {}, en: { "Análisis de datos": "Data analysis", Liderazgo: "Leadership", Docencia: "Teaching", Comunicación: "Communication", "Gestión de proyectos": "Project management" }, fr: { "Análisis de datos": "Analyse de données", Liderazgo: "Leadership", Docencia: "Enseignement", Comunicación: "Communication", "Gestión de proyectos": "Gestion de projet" }, pt: { "Análisis de datos": "Análise de dados", Liderazgo: "Liderança", Docencia: "Ensino", Comunicación: "Comunicação", "Gestión de proyectos": "Gestão de projetos" } };
  return translations[locale][value] ?? value;
};

export function PortfolioSite({ locale = "es" }: { locale?: Locale }) {
  const c = copy[locale];
  const navigation = navigationKeys.map(([key, href]) => ({ label: c.nav[key], href }));
  const [activeFilter, setActiveFilter] = useState<(typeof certificateFilters)[number]>("all");
  const [menuOpen, setMenuOpen] = useState(false);
  const [showAllCertificates, setShowAllCertificates] = useState(false);

  const filteredCertificates = useMemo(
    () =>
      activeFilter === "all"
        ? certificates
        : certificates.filter((certificate) => certificate.category === activeFilter),
    [activeFilter],
  );

  const featuredProjects = projects.filter((project) => project.featured);
  const otherProjects = projects.filter((project) => !project.featured);
  const localizedMetrics: Record<string, string> = locale === "en"
    ? { "Customer Churn Data Pipeline": "1M records", "Global ISO Security": "93 controls · 5 roles", "FC Barcelona Player Performance ML": "4 models compared", "Laptop Price Statistical Analysis": "4 notebooks" }
    : locale === "fr"
      ? { "Customer Churn Data Pipeline": "1 M de lignes", "Global ISO Security": "93 contrôles · 5 rôles", "FC Barcelona Player Performance ML": "4 modèles comparés", "Laptop Price Statistical Analysis": "4 notebooks" }
      : locale === "pt"
        ? { "Customer Churn Data Pipeline": "1 mi de registros", "Global ISO Security": "93 controles · 5 papéis", "FC Barcelona Player Performance ML": "4 modelos comparados", "Laptop Price Statistical Analysis": "4 notebooks" }
        : {};
  const displayedCertificates =
    activeFilter === "all" && !showAllCertificates
      ? filteredCertificates.filter((certificate) => certificate.priority)
      : filteredCertificates;

  return (
    <main lang={locale}>
      <a className="skip-link" href="#contenido">
        {c.ui.skip}
      </a>

      <header className="site-header">
        <div className="shell header-inner">
          <a className="brand" href={`${localeMeta[locale].path}#inicio`} aria-label={c.ui.home}>
            <span className="brand-mark">AO</span>
            <span className="brand-copy">
              <strong>Andrés Obando</strong>
              <small>Data Engineering · Systems Engineering</small>
            </span>
          </a>

          <nav className="desktop-nav" aria-label={c.nav.projects}>
            {navigation.map((item) => (
              <a key={item.href} href={item.href}>
                {item.label}
              </a>
            ))}
          </nav>

          <LanguageSwitcher locale={locale} />

          <a className="header-cta" href={profile.cv} download>
            <Download size={16} aria-hidden="true" />
            CV
          </a>

          <button
            className="menu-button"
            type="button"
            aria-label={menuOpen ? c.ui.closeMenu : c.ui.openMenu}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
          </button>
        </div>

        {menuOpen && (
          <nav className="mobile-nav" aria-label={c.ui.openMenu}>
            {navigation.map((item) => (
              <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>
                {item.label}
                <ArrowUpRight size={16} aria-hidden="true" />
              </a>
            ))}
            <a href={profile.cv} download>
              {c.ui.downloadCv}
              <Download size={16} aria-hidden="true" />
            </a>
            <LanguageSwitcher locale={locale} mobile />
          </nav>
        )}
      </header>

      <div id="contenido">
        <section className="hero" id="inicio">
          <div className="hero-grid shell">
              <div className="hero-copy reveal">
              <LanguageSwitcher locale={locale} hero />
              <div className="availability">
                <span aria-hidden="true" />
                {c.hero.availability}
              </div>
              <p className="eyebrow">{c.hero.eyebrow}</p>
              <h1>
                {c.hero.title} <em>{c.hero.titleAccent}</em>
              </h1>
              <p className="hero-lead">{c.hero.lead}</p>
              <div className="hero-actions">
                <a className="button button-primary" href="#proyectos">
                  {c.ui.explore}
                  <ArrowDown size={17} aria-hidden="true" />
                </a>
                <a className="button button-secondary" href={profile.cv} download>
                  <FileText size={17} aria-hidden="true" />
                  {c.ui.downloadCv}
                </a>
              </div>
              <div className="hero-proof" aria-label={c.hero.goal}>
                <div>
                  <strong>1 M</strong>
                  <span>{c.hero.metricRecords}</span>
                </div>
                <div>
                  <strong>PySpark + AWS</strong>
                  <span>{c.hero.metricPipeline}</span>
                </div>
                <div>
                  <strong>B2</strong>
                  <span>{c.hero.metricEnglish}</span>
                </div>
              </div>
            </div>

            <div className="portrait-stage reveal reveal-delay">
              <div className="portrait-orbit" aria-hidden="true">
                <span>PYTHON</span>
                <span>SQL</span>
                <span>JAVA</span>
              </div>
              <figure className="portrait-card">
                <div className="portrait-frame">
                  <Image
                    src="/images/andres-obando.webp"
                    alt={c.ui.portraitAlt}
                    width={1254}
                    height={1254}
                    priority
                  />
                </div>
                <figcaption>
                  <span>
                    <MapPin size={15} aria-hidden="true" />
                    Bogotá, Colombia
                  </span>
                  <strong>Data Engineering · Systems</strong>
                </figcaption>
              </figure>
              <div className="floating-note note-top">
                <Sparkles size={17} aria-hidden="true" />
                Python · SQL · Cloud
              </div>
              <div className="floating-note note-bottom">
                <CheckCircle2 size={17} aria-hidden="true" />
                {c.hero.semester}
              </div>
            </div>
          </div>

          <div className="career-strip shell" aria-label={c.hero.goal}>
            <div><span>{c.hero.goal}</span><strong>Data Engineering</strong></div>
            <div><span>{c.hero.availabilityLabel}</span><strong>{c.hero.availability}</strong></div>
            <div><span>{c.hero.mode}</span><strong>{c.hero.location}</strong></div>
            <div><span>{c.hero.english}</span><strong>B2</strong></div>
          </div>
        </section>

        <section className="profile-section section" id="perfil">
          <div className="shell profile-grid">
            <div className="section-heading sticky-heading">
              <p className="eyebrow">{c.profile.eyebrow}</p>
              <h2>{c.profile.title}</h2>
            </div>
            <div className="profile-content">
              <p className="profile-intro">
                {c.profile.intro}
              </p><p>{c.profile.body}</p>
              <div className="focus-grid">
                <article>
                  <Database aria-hidden="true" />
                  <h3>{c.profile.data}</h3><p>{c.profile.dataText}</p>
                </article>
                <article>
                  <Code2 aria-hidden="true" />
                  <h3>{c.profile.software}</h3><p>{c.profile.softwareText}</p>
                </article>
                <article>
                  <ShieldCheck aria-hidden="true" />
                  <h3>{c.profile.systems}</h3><p>{c.profile.systemsText}</p>
                </article>
              </div>
            </div>
          </div>
        </section>

        <section className="projects-section section" id="proyectos">
          <div className="shell">
            <div className="section-heading wide-heading">
              <div>
                <p className="eyebrow">{c.projects.eyebrow}</p>
                <h2>{c.projects.title}</h2>
              </div>
              <a className="text-link" href={profile.github} target="_blank" rel="noreferrer">
                {c.ui.githubProfile}
                <ArrowUpRight size={17} aria-hidden="true" />
              </a>
            </div>

            <div className="projects-grid">
              {featuredProjects.map((project, index) => { const pc = c.projectCopy[project.name] ?? { description: project.description, focus: project.focus, proof: project.proof, metric: project.metric }; const metric = localizedMetrics[project.name] ?? pc.metric ?? project.metric; return (
                <article className={`project-card ${index < 2 ? "project-card-large" : ""}`} key={project.name}>
                  <div className={`project-visual project-visual-${project.kind}`}>
                    <div className="project-visual-icon"><ProjectMark kind={project.kind} /></div>
                    <span>{pc.focus}</span><strong>{metric}</strong>
                  </div>
                  <div className="project-topline">
                    <span>{c.projects.project} {String(index + 1).padStart(2, "0")}</span>
                    <span>{pc.focus}</span>
                  </div>
                  <div className="project-copy">
                    <h3>{project.name}</h3>
                    <p>{pc.description}</p>
                    <div className="project-proof">
                      <CheckCircle2 size={16} aria-hidden="true" />
                      <span>{pc.proof}</span>
                    </div>
                  </div>
                  <div className="project-footer">
                    <ul aria-label={`${c.projects.ariaTech} ${project.name}`}>
                      {project.technologies.map((technology) => (
                        <li key={technology}>{technology}</li>
                      ))}
                    </ul>
                    <a href={project.url} target="_blank" rel="noreferrer" aria-label={`${c.projects.ariaGithub}: ${project.name}`}>
                      <GithubIcon size={18} aria-hidden="true" />
                      {c.ui.viewCode}
                      <ArrowUpRight size={16} aria-hidden="true" />
                    </a>
                  </div>
                  <a className="study-link" href={`${localeMeta[locale].path}case-studies/${project.name === "Customer Churn Data Pipeline" ? "customer-churn-data-pipeline" : project.name === "Global ISO Security" ? "global-iso-security" : project.name === "FC Barcelona Player Performance ML" ? "fc-barcelona-player-performance-ml" : project.name === "Laptop Price Statistical Analysis" ? "laptop-price-statistical-analysis" : ""}`}>
                    {c.ui.study}<ArrowUpRight size={16} aria-hidden="true" />
                  </a>
                </article>
              ); })}
            </div>

            <div className="other-projects">
              <p>{c.projects.also}</p>
              {otherProjects.map((project) => (
                <a href={project.url} target="_blank" rel="noreferrer" key={project.name}>
                  <span>
                    <strong>{project.name}</strong>
                    <small>{localizeMetric(project.metric, locale)}</small>
                  </span>
                  <ArrowUpRight aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="experience-section section" id="experiencia">
          <div className="shell experience-layout">
            <div className="section-heading sticky-heading">
              <p className="eyebrow">{c.experience.eyebrow}</p>
              <h2>{c.experience.title}</h2><p>{c.experience.intro}</p>
            </div>

            <div>
              <div className="subsection-title">
                <BriefcaseBusiness aria-hidden="true" />
                <h3>{c.experience.work}</h3>
              </div>
              <div className="timeline">
                {experience.map((item) => (
                  <article key={`${item.company}-${item.role}`}>
                    <time>{localizeDate(item.period, locale)}</time>
                    <div>
                      <h4>{c.experienceCopy[item.company]?.role ?? item.role}</h4>
                      <p className="company">{item.company}</p>
                      <p>{c.experienceCopy[item.company]?.description ?? item.description}</p>
                    </div>
                  </article>
                ))}
              </div>

              <div className="education-card">
                <div className="education-icon">
                  <GraduationCap aria-hidden="true" />
                </div>
                <div>
                  <p className="eyebrow">{c.experience.education}</p>
                  <h3>{c.experience.degree}</h3>
                  <p>{c.experience.university}</p>
                  <span>{c.experience.semester}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="shell skills-board" id="habilidades">
            <div className="skills-intro">
              <p className="eyebrow">{c.experience.skillsEyebrow}</p>
              <h3>{c.experience.skillsTitle}</h3>
              <p>{c.experience.skillsText}</p>
            </div>
            {skillGroups.map((group) => (
              <div className="skill-group" key={group.title}>
                <h4>{c.skillGroups[group.title] ?? group.title}</h4>
                <ul>
                  {group.skills.map((skill) => (
                    <li key={skill}>{localizeSkill(skill, locale)}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="certificates-section section" id="certificados">
          <div className="shell">
            <div className="section-heading wide-heading certificates-heading">
              <div>
                <p className="eyebrow">{c.certificates.eyebrow}</p>
                <h2>{c.certificates.title}</h2>
                <p>{c.certificates.intro}</p>
              </div>
              <Award className="heading-icon" aria-hidden="true" />
            </div>

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
          </div>
        </section>

        <section className="contact-section section" id="contacto">
          <div className="shell contact-card">
            <div>
              <p className="eyebrow">{c.contact.eyebrow}</p>
              <h2>{c.contact.title}</h2><p>{c.contact.text}</p>
            </div>
            <div className="contact-actions">
              <a className="contact-email" href={`mailto:${profile.email}`}>
                <Mail aria-hidden="true" />
                <span>
                  <small>{c.contact.email}</small>
                  {profile.email}
                </span>
                <ArrowUpRight aria-hidden="true" />
              </a>
              <div className="social-links">
                <a href={profile.linkedin} target="_blank" rel="noreferrer">
                  <LinkedinIcon aria-hidden="true" />
                  LinkedIn
                </a>
                <a href={profile.github} target="_blank" rel="noreferrer">
                  <GithubIcon aria-hidden="true" />
                  GitHub
                </a>
                <a href={profile.cv} download>
                  <Download aria-hidden="true" />
                  {c.contact.download}
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>

      <footer>
        <div className="shell footer-inner">
          <span>© {new Date().getFullYear()} Andrés Obando</span>
          <span>{c.footer.role}</span>
          <a href={`${localeMeta[locale].path}#inicio`}>{c.footer.top}</a>
        </div>
      </footer>
    </main>
  );
}
