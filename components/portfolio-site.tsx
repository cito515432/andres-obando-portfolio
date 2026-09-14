import type { SVGProps } from "react";
import Image from "next/image";
import {
  ArrowDown,
  ArrowUpRight,
  Award,
  BriefcaseBusiness,
  CheckCircle2,
  Code2,
  Database,
  Download,
  FileText,
  GraduationCap,
  Mail,
  MapPin,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import {
  certificates,
  experience,
  profile,
  projects,
  skillGroups,
} from "@/data/portfolio";
import { copy, localeMeta, type Locale } from "@/data/i18n";
import { SiteHeader } from "@/components/site-header";
import { CertificateGallery } from "@/components/certificate-gallery";
import { ProjectEvidencePreview } from "@/components/project-evidence";
import { localizeDate, localizeMetric, localizeSkill } from "@/data/format";
import { skillEvidence } from "@/data/project-evidence";
import { evidenceUi } from "@/data/evidence-ui";
import { LanguageSwitcher } from "@/components/language-switcher";

type BrandIconProps = SVGProps<SVGSVGElement> & { size?: number };

const shortAvailability: Record<Locale, string> = {
  es: "Nov. 2026",
  en: "Nov. 2026",
  fr: "nov. 2026",
  pt: "nov. 2026",
};

const recordMetricLabel: Record<Locale, string> = {
  es: "registros · pipeline PySpark",
  en: "records · PySpark pipeline",
  fr: "lignes · pipeline PySpark",
  pt: "registros · pipeline PySpark",
};

const customerChurnTechnologies = ["PySpark", "S3", "EMR Serverless", "Glue", "Athena"];

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

export function PortfolioSite({ locale = "es" }: { locale?: Locale }) {
  const c = copy[locale];
  const featuredProjects = projects.filter((project) => project.featured);
  const otherProjects = projects.filter((project) => !project.featured);
  const localizedMetrics: Record<string, string> = locale === "en"
    ? { "Customer Churn Data Pipeline": "1M records", "Global ISO Security": "93 controls · 5 roles", "FC Barcelona Player Performance ML": "4 models compared", "Laptop Price Statistical Analysis": "4 notebooks" }
    : locale === "fr"
      ? { "Customer Churn Data Pipeline": "1 M de lignes", "Global ISO Security": "93 contrôles · 5 rôles", "FC Barcelona Player Performance ML": "4 modèles comparés", "Laptop Price Statistical Analysis": "4 notebooks" }
      : locale === "pt"
        ? { "Customer Churn Data Pipeline": "1 mi de registros", "Global ISO Security": "93 controles · 5 papéis", "FC Barcelona Player Performance ML": "4 modelos comparados", "Laptop Price Statistical Analysis": "4 notebooks" }
        : {};
  const contactText = locale === "es"
    ? "Disponible para práctica profesional desde noviembre de 2026. Mi objetivo principal es Data Engineering; también considero Sistemas, Backend, Cloud / Data y Data Analytics según el alcance del rol, incluyendo equipos internacionales. Bogotá, modalidad híbrida o remota e inglés B2. Conversemos."
    : c.contact.text;

  return (
    <>
      <a className="skip-link" href="#contenido">
        {c.ui.skip}
      </a>

      <SiteHeader locale={locale} />

      <main id="contenido" lang={locale} tabIndex={-1}>
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
                  <span>{recordMetricLabel[locale]}</span>
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
                <span>PYSPARK</span>
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
            <div><span>{c.hero.availabilityLabel}</span><strong>{shortAvailability[locale]}</strong></div>
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
              {featuredProjects.map((project, index) => {
                const pc = c.projectCopy[project.name] ?? { description: project.description, focus: project.focus, proof: project.proof, metric: project.metric };
                const metric = localizedMetrics[project.name] ?? pc.metric ?? project.metric;
                const technologies = project.name === "Customer Churn Data Pipeline" ? customerChurnTechnologies : project.technologies;
                return (
                <article className={`project-card ${index < 2 ? "project-card-large" : ""}`} key={project.name}>
                  <ProjectEvidencePreview slug={project.url.split("/").pop()!} locale={locale} metric={metric} />
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
                      {technologies.map((technology) => (
                        <li key={technology}>{technology}</li>
                      ))}
                    </ul>
                    <a href={project.url} target="_blank" rel="noreferrer" aria-label={`${c.projects.ariaGithub}: ${project.name}`}>
                      <GithubIcon size={18} aria-hidden="true" />
                      {c.ui.viewCode}
                      <ArrowUpRight size={16} aria-hidden="true" />
                    </a>
                  </div>
                  <a className="study-link" href={`${localeMeta[locale].path}case-studies/${project.url.split("/").pop()}/`}>
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
                      <p className="company">{item.company.replace("Remoto", evidenceUi[locale].remote)}</p>
                      <p>{c.experienceCopy[item.company]?.description ?? item.description}</p>
                      <p className="experience-contribution"><strong>{c.ui.caseStudyLabels.contribution}: </strong>{c.experienceCopy[item.company]?.contribution}</p>
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
              <p>{c.experience.skillsText}</p><p>{evidenceUi[locale].skillsHelp}</p>
            </div>
            {skillGroups.map((group) => (
              <div className="skill-group" key={group.title}>
                <h4>{c.skillGroups[group.title] ?? group.title}</h4>
                <ul>
                  {group.skills.map((skill) => (
                    <li key={skill}>{skillEvidence[skill] ? <a href={`${localeMeta[locale].path}case-studies/${skillEvidence[skill].slug}/#evidence`} title={`${localizeSkill(skill, locale)} · ${skillEvidence[skill].project}`} aria-label={`${localizeSkill(skill, locale)} · ${evidenceUi[locale].usedIn} ${skillEvidence[skill].project}`}>{localizeSkill(skill, locale)}<ArrowUpRight size={12} aria-hidden="true" /></a> : localizeSkill(skill, locale)}</li>
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

            <CertificateGallery locale={locale} certificates={certificates} labels={c.certificates} showSelection={c.ui.showSelection} />
          </div>
        </section>

        <section className="contact-section section" id="contacto">
          <div className="shell contact-card">
            <div>
              <p className="eyebrow">{c.contact.eyebrow}</p>
              <h2>{c.contact.title}</h2><p>{contactText}</p>
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
      </main>

      <footer>
        <div className="shell footer-inner">
          <span>© {new Date().getFullYear()} Andrés Obando</span>
          <span>{c.footer.role}</span>
          <a href={`${localeMeta[locale].path}#inicio`}>{c.footer.top}</a>
        </div>
      </footer>
    </>
  );
}
