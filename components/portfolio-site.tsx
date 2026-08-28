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

const navigation = [
  { label: "Perfil", href: "#perfil" },
  { label: "Proyectos", href: "#proyectos" },
  { label: "Experiencia", href: "#experiencia" },
  { label: "Habilidades", href: "#habilidades" },
  { label: "Certificados", href: "#certificados" },
  { label: "Contacto", href: "#contacto" },
];

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

const certificateFilters: Array<"Todos" | Certificate["category"]> = [
  "Todos",
  "Datos",
  "Desarrollo",
  "Gestión",
  "Idiomas",
  "Otros",
];

export function PortfolioSite() {
  const [activeFilter, setActiveFilter] = useState<(typeof certificateFilters)[number]>("Todos");
  const [menuOpen, setMenuOpen] = useState(false);
  const [showAllCertificates, setShowAllCertificates] = useState(false);

  const filteredCertificates = useMemo(
    () =>
      activeFilter === "Todos"
        ? certificates
        : certificates.filter((certificate) => certificate.category === activeFilter),
    [activeFilter],
  );

  const featuredProjects = projects.filter((project) => project.featured);
  const otherProjects = projects.filter((project) => !project.featured);
  const displayedCertificates =
    activeFilter === "Todos" && !showAllCertificates
      ? filteredCertificates.filter((certificate) => certificate.priority)
      : filteredCertificates;

  return (
    <main>
      <a className="skip-link" href="#contenido">
        Saltar al contenido
      </a>

      <header className="site-header">
        <div className="shell header-inner">
          <a className="brand" href="#inicio" aria-label="Ir al inicio">
            <span className="brand-mark">AO</span>
            <span className="brand-copy">
              <strong>Andrés Obando</strong>
              <small>Data Engineering · Systems Engineering</small>
            </span>
          </a>

          <nav className="desktop-nav" aria-label="Navegación principal">
            {navigation.map((item) => (
              <a key={item.href} href={item.href}>
                {item.label}
              </a>
            ))}
          </nav>

          <a className="header-cta" href={profile.cv} download>
            <Download size={16} aria-hidden="true" />
            CV
          </a>

          <button
            className="menu-button"
            type="button"
            aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
          </button>
        </div>

        {menuOpen && (
          <nav className="mobile-nav" aria-label="Navegación móvil">
            {navigation.map((item) => (
              <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>
                {item.label}
                <ArrowUpRight size={16} aria-hidden="true" />
              </a>
            ))}
            <a href={profile.cv} download>
              Descargar CV
              <Download size={16} aria-hidden="true" />
            </a>
          </nav>
        )}
      </header>

      <div id="contenido">
        <section className="hero" id="inicio">
          <div className="hero-grid shell">
            <div className="hero-copy reveal">
              <div className="availability">
                <span aria-hidden="true" />
                Disponible para práctica profesional · Nov. 2026
              </div>
              <p className="eyebrow">Ingeniería de Datos · Sistemas · Bogotá</p>
              <h1>
                Construyo soluciones de datos <em>claras, útiles y mantenibles.</em>
              </h1>
              <p className="hero-lead">
                Estudiante de 9.º semestre de Ingeniería de Sistemas orientado a Data Engineering.
                Trabajo con Python, SQL, PySpark, Java y tecnologías cloud para transformar datos,
                automatizar procesos y construir software con criterio técnico.
              </p>
              <div className="hero-actions">
                <a className="button button-primary" href="#proyectos">
                  Explorar proyectos
                  <ArrowDown size={17} aria-hidden="true" />
                </a>
                <a className="button button-secondary" href={profile.cv} download>
                  <FileText size={17} aria-hidden="true" />
                  Descargar hoja de vida
                </a>
              </div>
              <div className="hero-proof" aria-label="Resumen profesional">
                <div>
                  <strong>8</strong>
                  <span>proyectos públicos</span>
                </div>
                <div>
                  <strong>15</strong>
                  <span>credenciales</span>
                </div>
                <div>
                  <strong>B2</strong>
                  <span>nivel de inglés</span>
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
                    src="/images/andres-obando.png"
                    alt="Retrato profesional de Andrés Obando"
                    width={480}
                    height={480}
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
                9.º semestre
              </div>
            </div>
          </div>

          <div className="career-strip shell" aria-label="Resumen para reclutadores">
            <div><span>Objetivo</span><strong>Data Engineering</strong></div>
            <div><span>Disponibilidad</span><strong>Noviembre 2026</strong></div>
            <div><span>Modalidad</span><strong>Bogotá · Híbrido / remoto</strong></div>
            <div><span>Inglés</span><strong>B2 certificado</strong></div>
          </div>
        </section>

        <section className="profile-section section" id="perfil">
          <div className="shell profile-grid">
            <div className="section-heading sticky-heading">
              <p className="eyebrow">01 · Perfil</p>
              <h2>Datos primero. Sistemas para hacerlo bien.</h2>
            </div>
            <div className="profile-content">
              <p className="profile-intro">
                Me interesa convertir datos y requisitos complejos en soluciones que un equipo pueda
                entender, probar y mantener. Mi formación en Sistemas me da una visión amplia: datos,
                software, infraestructura y seguridad como partes del mismo problema.
              </p>
              <p>
                Combino proyectos de ingeniería de datos y desarrollo con experiencia enseñando
                programación. La docencia ha fortalecido una habilidad que valoro especialmente:
                explicar decisiones técnicas con claridad, documentar procesos y colaborar con personas
                de distintos niveles de experiencia.
              </p>
              <div className="focus-grid">
                <article>
                  <Database aria-hidden="true" />
                  <h3>Datos</h3>
                  <p>ETL, PySpark, SQL, análisis, visualización y modelos de machine learning.</p>
                </article>
                <article>
                  <Code2 aria-hidden="true" />
                  <h3>Software</h3>
                  <p>Java, Python, aplicaciones web y de escritorio, APIs y diseño orientado a objetos.</p>
                </article>
                <article>
                  <ShieldCheck aria-hidden="true" />
                  <h3>Sistemas</h3>
                  <p>Nube, bases de datos, seguridad de la información y documentación técnica.</p>
                </article>
              </div>
            </div>
          </div>
        </section>

        <section className="projects-section section" id="proyectos">
          <div className="shell">
            <div className="section-heading wide-heading">
              <div>
                <p className="eyebrow">02 · Proyectos seleccionados</p>
                <h2>Trabajo que muestra cómo pienso y construyo.</h2>
              </div>
              <a className="text-link" href={profile.github} target="_blank" rel="noreferrer">
                Ver perfil completo en GitHub
                <ArrowUpRight size={17} aria-hidden="true" />
              </a>
            </div>

            <div className="projects-grid">
              {featuredProjects.map((project, index) => (
                <article className={`project-card ${index < 2 ? "project-card-large" : ""}`} key={project.name}>
                  <div className={`project-visual project-visual-${project.kind}`}>
                    <div className="project-visual-icon"><ProjectMark kind={project.kind} /></div>
                    <span>{project.focus}</span>
                    <strong>{project.metric}</strong>
                  </div>
                  <div className="project-topline">
                    <span>Proyecto {String(index + 1).padStart(2, "0")}</span>
                    <span>{project.focus}</span>
                  </div>
                  <div className="project-copy">
                    <h3>{project.name}</h3>
                    <p>{project.description}</p>
                    <div className="project-proof">
                      <CheckCircle2 size={16} aria-hidden="true" />
                      <span>{project.proof}</span>
                    </div>
                  </div>
                  <div className="project-footer">
                    <ul aria-label={`Tecnologías de ${project.name}`}>
                      {project.technologies.map((technology) => (
                        <li key={technology}>{technology}</li>
                      ))}
                    </ul>
                    <a href={project.url} target="_blank" rel="noreferrer" aria-label={`Abrir ${project.name} en GitHub`}>
                      <GithubIcon size={18} aria-hidden="true" />
                      Ver código
                      <ArrowUpRight size={16} aria-hidden="true" />
                    </a>
                  </div>
                </article>
              ))}
            </div>

            <div className="other-projects">
              <p>También en GitHub</p>
              {otherProjects.map((project) => (
                <a href={project.url} target="_blank" rel="noreferrer" key={project.name}>
                  <span>
                    <strong>{project.name}</strong>
                    <small>{project.metric}</small>
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
              <p className="eyebrow">03 · Trayectoria</p>
              <h2>Experiencia, formación y herramientas.</h2>
              <p>
                Una trayectoria en construcción, con experiencia real enseñando, documentando y
                resolviendo problemas.
              </p>
            </div>

            <div>
              <div className="subsection-title">
                <BriefcaseBusiness aria-hidden="true" />
                <h3>Experiencia laboral</h3>
              </div>
              <div className="timeline">
                {experience.map((item) => (
                  <article key={`${item.company}-${item.role}`}>
                    <time>{item.period}</time>
                    <div>
                      <h4>{item.role}</h4>
                      <p className="company">{item.company}</p>
                      <p>{item.description}</p>
                    </div>
                  </article>
                ))}
              </div>

              <div className="education-card">
                <div className="education-icon">
                  <GraduationCap aria-hidden="true" />
                </div>
                <div>
                  <p className="eyebrow">Formación principal</p>
                  <h3>Ingeniería de Sistemas</h3>
                  <p>Universidad de San Buenaventura, Bogotá</p>
                  <span>Ago. 2022 — abr. 2027 · Noveno semestre</span>
                </div>
              </div>
            </div>
          </div>

          <div className="shell skills-board" id="habilidades">
            <div className="skills-intro">
              <p className="eyebrow">Caja de herramientas</p>
              <h3>Stack con evidencia.</h3>
              <p>Herramientas que aparecen en proyectos, formación o experiencia práctica; no una lista de palabras clave.</p>
            </div>
            {skillGroups.map((group) => (
              <div className="skill-group" key={group.title}>
                <h4>{group.title}</h4>
                <ul>
                  {group.skills.map((skill) => (
                    <li key={skill}>{skill}</li>
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
                <p className="eyebrow">04 · Aprendizaje continuo</p>
                <h2>Certificados y credenciales verificables.</h2>
                <p>Una selección relevante para datos, desarrollo, cloud, metodologías e idiomas.</p>
              </div>
              <Award className="heading-icon" aria-hidden="true" />
            </div>

            <div className="certificate-filters" role="group" aria-label="Filtrar certificados">
              {certificateFilters.map((filter) => (
                <button
                  type="button"
                  key={filter}
                  className={activeFilter === filter ? "active" : ""}
                  onClick={() => setActiveFilter(filter)}
                  aria-pressed={activeFilter === filter}
                >
                  {filter}
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
                    aria-label={`Ampliar certificado: ${certificate.title}`}
                  >
                    <Image
                      src={certificate.image}
                      alt=""
                      width={720}
                      height={540}
                    />
                    <span>
                      <ExternalLink size={17} aria-hidden="true" />
                      Ampliar
                    </span>
                  </a>
                  <div className="certificate-copy">
                    <div className="certificate-meta">
                      <span>{certificate.category}</span>
                      <time>{certificate.date}</time>
                    </div>
                    <h3>{certificate.title}</h3>
                    <p>{certificate.issuer}</p>
                    <div className="certificate-links">
                      {certificate.documents.map((document) => (
                        <a href={document.url} download key={document.url}>
                          <FileText size={15} aria-hidden="true" />
                          {document.label}
                        </a>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {activeFilter === "Todos" && certificates.length > displayedCertificates.length && (
              <div className="certificate-more">
                <p>Mostrando las credenciales más relevantes para tu objetivo profesional.</p>
                <button type="button" className="button button-secondary" onClick={() => setShowAllCertificates(true)}>
                  Ver las {certificates.length} credenciales
                  <ArrowDown size={16} aria-hidden="true" />
                </button>
              </div>
            )}
            {activeFilter === "Todos" && showAllCertificates && (
              <div className="certificate-more">
                <p>Vista completa de credenciales.</p>
                <button type="button" className="button button-secondary" onClick={() => setShowAllCertificates(false)}>
                  Mostrar selección principal
                </button>
              </div>
            )}
          </div>
        </section>

        <section className="contact-section section" id="contacto">
          <div className="shell contact-card">
            <div>
              <p className="eyebrow">05 · Contacto</p>
              <h2>Busco un equipo donde los datos tengan impacto real.</h2>
              <p>
                Estoy disponible para práctica profesional desde noviembre de 2026, con interés
                principal en Ingeniería de Datos y apertura a roles de Sistemas o desarrollo backend.
                Si mi perfil encaja con tu equipo, conversemos.
              </p>
            </div>
            <div className="contact-actions">
              <a className="contact-email" href={`mailto:${profile.email}`}>
                <Mail aria-hidden="true" />
                <span>
                  <small>Correo</small>
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
                  Descargar CV
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>

      <footer>
        <div className="shell footer-inner">
          <span>© {new Date().getFullYear()} Andrés Obando</span>
          <span>Data Engineering · Systems Engineering · Bogotá</span>
          <a href="#inicio">Volver arriba ↑</a>
        </div>
      </footer>
    </main>
  );
}
