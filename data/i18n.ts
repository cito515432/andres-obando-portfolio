export type Locale = "es" | "en" | "fr" | "pt";

export const locales: Locale[] = ["es", "en", "fr", "pt"];

export const localeMeta: Record<
  Locale,
  { label: string; short: string; flag: string; path: string }
> = {
  es: { label: "Español", short: "ES", flag: "🇨🇴", path: "/" },
  en: { label: "English", short: "EN", flag: "🇬🇧", path: "/en/" },
  fr: { label: "Français", short: "FR", flag: "🇫🇷", path: "/fr/" },
  pt: { label: "Português", short: "PT", flag: "🇧🇷", path: "/pt/" },
};

type ProjectCopy = {
  description: string;
  focus: string;
  proof: string;
  metric?: string;
};
type ExperienceCopy = {
  role: string;
  description: string;
  contribution: string;
};

export type Copy = {
  languageName: string;
  nav: {
    profile: string;
    projects: string;
    experience: string;
    skills: string;
    certificates: string;
    contact: string;
  };
  ui: {
    skip: string;
    home: string;
    openMenu: string;
    closeMenu: string;
    downloadCv: string;
    explore: string;
    viewCode: string;
    study: string;
    githubProfile: string;
    expand: string;
    showAll: string;
    showSelection: string;
    back: string;
    external: string;
    selectedEvidence: string;
    fullEvidence: string;
    language: string;
    languagePrompt: string;
    portraitAlt: string;
    caseStudyLabels: Record<string, string>;
  };
  hero: {
    availability: string;
    eyebrow: string;
    title: string;
    titleAccent: string;
    lead: string;
    projects: string;
    publicProjects: string;
    credentials: string;
    english: string;
    goal: string;
    availabilityLabel: string;
    mode: string;
    location: string;
    caption: string;
    semester: string;
    metricRecords: string;
    metricPipeline: string;
    metricEnglish: string;
  };
  profile: {
    eyebrow: string;
    title: string;
    intro: string;
    body: string;
    data: string;
    dataText: string;
    software: string;
    softwareText: string;
    systems: string;
    systemsText: string;
  };
  projects: {
    eyebrow: string;
    title: string;
    also: string;
    project: string;
    ariaTech: string;
    ariaGithub: string;
  };
  experience: {
    eyebrow: string;
    title: string;
    intro: string;
    work: string;
    education: string;
    degree: string;
    university: string;
    semester: string;
    skillsEyebrow: string;
    skillsTitle: string;
    skillsText: string;
  };
  certificates: {
    eyebrow: string;
    title: string;
    intro: string;
    filter: string;
    enlarge: string;
    selected: string;
    all: string;
    full: string;
  };
  contact: {
    eyebrow: string;
    title: string;
    text: string;
    email: string;
    download: string;
  };
  footer: { top: string; role: string };
  projectCopy: Record<string, ProjectCopy>;
  experienceCopy: Record<string, ExperienceCopy>;
  skillGroups: Record<string, string>;
};

export const copy: Record<Locale, Copy> = {
  es: {
    languageName: "Español",
    nav: {
      profile: "Perfil",
      projects: "Proyectos",
      experience: "Experiencia",
      skills: "Habilidades",
      certificates: "Certificados",
      contact: "Contacto",
    },
    ui: {
      skip: "Saltar al contenido",
      home: "Ir al inicio",
      openMenu: "Abrir menú",
      closeMenu: "Cerrar menú",
      downloadCv: "Descargar CV",
      explore: "Explorar proyectos",
      viewCode: "Ver código",
      study: "Ver caso de estudio",
      githubProfile: "Ver perfil completo en GitHub",
      expand: "Ampliar",
      showAll: "Ver todas las credenciales",
      showSelection: "Mostrar selección principal",
      back: "Volver a proyectos",
      external: "Abrir enlace externo",
      selectedEvidence:
        "Mostrando las credenciales más relevantes para tu objetivo profesional.",
      fullEvidence: "Vista completa de credenciales.",
      language: "Idioma",
      languagePrompt: "Selecciona tu idioma",
      portraitAlt: "Retrato profesional de Andrés Obando",
      caseStudyLabels: {
        context: "Contexto",
        problem: "Problema",
        objective: "Objetivo",
        dataset: "Dataset",
        technologies: "Tecnologías",
        decisions: "Decisiones técnicas",
        contribution: "Mi contribución",
        results: "Resultados",
        challenges: "Retos",
        learnings: "Aprendizajes",
        limitations: "Limitaciones",
        future: "Mejoras futuras",
        evidence: "Evidencia",
      },
    },
    hero: {
      availability: "Disponible para práctica profesional · Nov. 2026",
      eyebrow: "Ingeniería de Datos · Sistemas · Bogotá",
      title: "Construyo soluciones de datos",
      titleAccent: "claras, útiles y mantenibles.",
      lead: "Estudiante de 9.º semestre de Ingeniería de Sistemas orientado a Data Engineering. Trabajo con Python, SQL, PySpark, Java y tecnologías cloud para transformar datos, automatizar procesos y construir software con criterio técnico.",
      projects: "Explorar proyectos",
      publicProjects: "proyectos públicos",
      credentials: "credenciales",
      english: "nivel de inglés",
      goal: "Objetivo",
      availabilityLabel: "Disponibilidad",
      mode: "Modalidad",
      location: "Bogotá · Híbrido / remoto",
      caption: "Data Engineering · Systems",
      semester: "9.º semestre",
      metricRecords: "registros procesados",
      metricPipeline: "pipeline de datos",
      metricEnglish: "inglés certificado",
    },
    profile: {
      eyebrow: "01 · Perfil",
      title: "Datos primero. Sistemas para hacerlo bien.",
      intro:
        "Me interesa convertir datos y requisitos complejos en soluciones que un equipo pueda entender, probar y mantener. Mi formación en Sistemas me da una visión amplia: datos, software, infraestructura y seguridad como partes del mismo problema.",
      body: "Combino proyectos de ingeniería de datos y desarrollo con experiencia enseñando programación. La docencia ha fortalecido una habilidad que valoro especialmente: explicar decisiones técnicas con claridad, documentar procesos y colaborar con personas de distintos niveles de experiencia.",
      data: "Datos",
      dataText:
        "ETL, PySpark, SQL, análisis, visualización y modelos de machine learning.",
      software: "Software",
      softwareText:
        "Java, Python, aplicaciones web y de escritorio, APIs y diseño orientado a objetos.",
      systems: "Sistemas",
      systemsText:
        "Nube, bases de datos, seguridad de la información y documentación técnica.",
    },
    projects: {
      eyebrow: "02 · Proyectos seleccionados",
      title: "Trabajo que muestra cómo pienso y construyo.",
      also: "También en GitHub",
      project: "Proyecto",
      ariaTech: "Tecnologías de",
      ariaGithub: "Abrir en GitHub",
    },
    experience: {
      eyebrow: "03 · Trayectoria",
      title: "Experiencia, formación y herramientas.",
      intro:
        "Una trayectoria en construcción, con experiencia real enseñando, documentando y resolviendo problemas.",
      work: "Experiencia laboral",
      education: "Formación principal",
      degree: "Ingeniería de Sistemas",
      university: "Universidad de San Buenaventura, Bogotá",
      semester: "Ago. 2022 — abr. 2027 · Noveno semestre",
      skillsEyebrow: "Caja de herramientas",
      skillsTitle: "Stack con evidencia.",
      skillsText:
        "Herramientas utilizadas en proyectos, formación y experiencia. Cada enlace permite revisar una aplicación concreta.",
    },
    certificates: {
      eyebrow: "04 · Aprendizaje continuo",
      title: "Certificados y credenciales verificables.",
      intro:
        "Una selección relevante para datos, desarrollo, cloud, metodologías e idiomas.",
      filter: "Filtrar certificados",
      enlarge: "Ampliar",
      selected:
        "Mostrando las credenciales más relevantes para tu objetivo profesional.",
      all: "Ver las credenciales",
      full: "Vista completa de credenciales.",
    },
    contact: {
      eyebrow: "05 · Contacto",
      title: "Busco un equipo donde los datos tengan impacto real.",
      text: "Disponible para práctica profesional desde noviembre de 2026. Mi objetivo principal es Data Engineering; también considero Sistemas, Backend, Cloud / Data y Data Analytics según el alcance del rol. Bogotá, modalidad híbrida o remota e inglés B2. Conversemos.",
      email: "Correo",
      download: "Descargar CV",
    },
    footer: {
      top: "Volver arriba ↑",
      role: "Data Engineering · Systems Engineering · Bogotá",
    },
    projectCopy: {
      "Customer Churn Data Pipeline": {
        description:
          "Pipeline end-to-end para limpieza, transformación, análisis y modelado de churn con PySpark y servicios de datos de AWS.",
        focus: "Data Engineering",
        proof:
          "Procesamiento distribuido, transformación y modelado sobre un conjunto de datos de gran volumen.",
        metric: "1 M de registros",
      },
      "Global ISO Security": {
        description:
          "Plataforma multiempresa de SoA, riesgos, evidencias, auditoría y formación con Spring Boot, TiDB Cloud y RPM híbrido: reglas deterministas, segunda estimación ML y revisión humana.",
        focus: "Systems Engineering",
        proof:
          "93 controles y 5 roles; arquitectura y capturas reales con datos sintéticos. Validación experimental con límites explícitos.",
        metric: "93 controles · 5 roles",
      },
      "FC Barcelona Player Performance ML": {
        description:
          "Clasificación del aporte ofensivo de jugadores con métricas xG/xAG, comparación de modelos y una aplicación interactiva en Streamlit.",
        focus: "Machine Learning",
        proof:
          "Código de cuatro clasificadores y aplicación Streamlit; requiere MySQL y configuración. Sin métricas finales estables.",
        metric: "4 modelos comparados",
      },
      "Laptop Price Statistical Analysis": {
        description:
          "Análisis estadístico de precios y características técnicas mediante visualización, regresión, probabilidad e inferencia.",
        focus: "Data Analytics",
        proof:
          "Cuatro notebooks y gráficos originales conservados. La ejecución completa requiere un dataset no incluido.",
        metric: "4 notebooks",
      },
      "Contact Manager Java Web": {
        description:
          "Aplicación Java/JSP para administrar usuarios y contactos con persistencia MySQL y flujos basados en roles.",
        focus: "Web Development",
        proof: "Persistencia relacional, control de acceso y operaciones CRUD.",
        metric: "CRUD · Roles",
      },
      "Cinema Management System": {
        description:
          "Prototipo de gestión de cine con interfaces Swing, diseño orientado a objetos, JDBC y documentación técnica.",
        focus: "Software Engineering",
        proof:
          "Diseño orientado a objetos, interfaz de escritorio y persistencia de datos.",
        metric: "3 fases de desarrollo",
      },
      "Python Pong Game": {
        description:
          "Juego Pong para dos jugadores desarrollado con Python Turtle, colisiones, puntaje y controles de teclado.",
        focus: "Programming Fundamentals",
        proof: "Lógica, eventos, colisiones y control de estado.",
        metric: "Proyecto inicial",
      },
      "Java Swing Academic Exercises": {
        description:
          "Ejercicios académicos de cálculo, lógica condicional e interacción mediante interfaces Swing.",
        focus: "Programming Fundamentals",
        proof: "Fundamentos de lógica, POO y desarrollo de interfaces.",
        metric: "Progresión académica",
      },
    },
    experienceCopy: {
      "Kodland · Remoto": {
        role: "Profesor de programación de software",
        description:
          "Enseño fundamentos de programación con Python, Roblox Studio y Unity.",
        contribution:
          "Acompaño proyectos prácticos y adapto las explicaciones al nivel de cada estudiante.",
      },
      "Tech Lingua Academia · Remoto": {
        role: "Fundador y profesor principal de programación",
        description:
          "Dirijo el proyecto educativo de inglés y programación de Tech Lingua.",
        contribution:
          "Organizo contenidos, planeación de clases y operación de la academia.",
      },
      "S&O Bookstore S.A.S · Azure · Remoto": {
        role: "Apoyo en implementación de bases de datos",
        description:
          "Apoyé la creación e implementación de una base de datos local y en Azure.",
        contribution:
          "Elaboré documentación técnica para apoyar el trabajo con los datos.",
      },
      "Teleperformance Colombia · Bogotá": {
        role: "Teleoperador en cobranzas y servicio al cliente",
        description:
          "Atendí clientes y realicé verificación y seguimiento de casos.",
        contribution:
          "Apoyé la negociación y la coordinación con otras áreas mediante comunicación clara.",
      },
    },
    skillGroups: {
      Datos: "Datos",
      Software: "Software",
      Plataformas: "Plataformas",
      Trabajo: "Trabajo",
    },
  },
  en: {
    languageName: "English",
    nav: {
      profile: "Profile",
      projects: "Projects",
      experience: "Experience",
      skills: "Skills",
      certificates: "Credentials",
      contact: "Contact",
    },
    ui: {
      skip: "Skip to content",
      home: "Go to home",
      openMenu: "Open menu",
      closeMenu: "Close menu",
      downloadCv: "Download CV",
      explore: "Explore projects",
      viewCode: "View code",
      study: "View case study",
      githubProfile: "View full GitHub profile",
      expand: "Open larger view",
      showAll: "View all credentials",
      showSelection: "Show selected credentials",
      back: "Back to projects",
      external: "Open external link",
      selectedEvidence:
        "Showing the credentials most relevant to the target role.",
      fullEvidence: "Full credentials view.",
      language: "Language",
      languagePrompt: "Choose your language",
      portraitAlt: "Professional portrait of Andrés Obando",
      caseStudyLabels: {
        context: "Context",
        problem: "Problem",
        objective: "Objective",
        dataset: "Dataset",
        technologies: "Technologies",
        decisions: "Technical decisions",
        contribution: "My contribution",
        results: "Results",
        challenges: "Challenges",
        learnings: "Learnings",
        limitations: "Limitations",
        future: "Future improvements",
        evidence: "Evidence",
      },
    },
    hero: {
      availability: "Available for internship · Nov. 2026",
      eyebrow: "Data Engineering · Systems · Bogotá",
      title: "I build data solutions",
      titleAccent: "clear, useful and maintainable.",
      lead: "Ninth-semester Systems Engineering student focused on Data Engineering. I work with Python, SQL, PySpark, Java and cloud technologies to transform data, automate processes and build software with sound technical judgment.",
      projects: "Explore projects",
      publicProjects: "public projects",
      credentials: "credentials",
      english: "English level",
      goal: "Target role",
      availabilityLabel: "Availability",
      mode: "Work mode",
      location: "Bogotá · Hybrid / remote",
      caption: "Data Engineering · Systems",
      semester: "Ninth semester",
      metricRecords: "records processed",
      metricPipeline: "data pipeline",
      metricEnglish: "certified English",
    },
    profile: {
      eyebrow: "01 · Profile",
      title: "Data first. Systems to build it right.",
      intro:
        "I turn complex data and requirements into solutions that teams can understand, test and maintain. My Systems Engineering background gives me a broad view: data, software, infrastructure and security as parts of the same problem.",
      body: "I combine data engineering and software projects with programming instruction experience. Teaching has strengthened a skill I value: explaining technical decisions clearly, documenting processes and collaborating across experience levels.",
      data: "Data",
      dataText:
        "ETL, PySpark, SQL, analysis, visualization and machine learning models.",
      software: "Software",
      softwareText:
        "Java, Python, web and desktop applications, APIs and object-oriented design.",
      systems: "Systems",
      systemsText:
        "Cloud, databases, information security and technical documentation.",
    },
    projects: {
      eyebrow: "02 · Selected projects",
      title: "Work that shows how I think and build.",
      also: "Also on GitHub",
      project: "Project",
      ariaTech: "Technologies for",
      ariaGithub: "Open on GitHub",
    },
    experience: {
      eyebrow: "03 · Background",
      title: "Experience, education and tools.",
      intro:
        "A growing track record with hands-on experience teaching, documenting and solving problems.",
      work: "Work experience",
      education: "Education",
      degree: "Systems Engineering",
      university: "Universidad de San Buenaventura, Bogotá",
      semester: "Aug. 2022 — Apr. 2027 · Ninth semester",
      skillsEyebrow: "Toolbox",
      skillsTitle: "A stack with evidence.",
      skillsText:
        "Tools used in projects, education and practical experience. Each link shows a concrete application.",
    },
    certificates: {
      eyebrow: "04 · Continuous learning",
      title: "Verifiable credentials.",
      intro:
        "A relevant selection across data, software, cloud, methods and languages.",
      filter: "Filter credentials",
      enlarge: "Open larger view",
      selected: "Showing the credentials most relevant to the target role.",
      all: "View all credentials",
      full: "Full credentials view.",
    },
    contact: {
      eyebrow: "05 · Contact",
      title: "I am looking for a team where data creates real impact.",
      text: "Available for an internship from November 2026, primarily in Data Engineering. Also open to Systems Engineering, Backend, Cloud / Data and relevant Data Analytics roles, including international teams and internship programs. Based in Bogotá; hybrid or remote. English B2. Let’s talk.",
      email: "Email",
      download: "Download CV",
    },
    footer: {
      top: "Back to top ↑",
      role: "Data Engineering · Systems Engineering · Bogotá",
    },
    projectCopy: {
      "Customer Churn Data Pipeline": {
        description:
          "End-to-end pipeline for churn data cleaning, transformation, analysis and modeling with PySpark and AWS data services.",
        focus: "Data Engineering",
        proof:
          "Distributed processing, transformations and modeling over the documented dataset.",
        metric: "1M records",
      },
      "Global ISO Security": {
        description:
          "Multi-tenant SoA, risk, evidence, audit and training platform built with Spring Boot, TiDB Cloud and a hybrid RPM: deterministic rules, a second ML estimate and human review.",
        focus: "Systems Engineering",
        proof:
          "93 controls and 5 roles; documented architecture and real screenshots with synthetic data. Experimental limits are explicit.",
        metric: "93 controls · 5 roles",
      },
      "FC Barcelona Player Performance ML": {
        description:
          "Classification of players’ offensive contribution using xG/xAG, model comparison and code for a Streamlit application.",
        focus: "Machine Learning",
        proof:
          "Code for four classifiers and a Streamlit app; requires MySQL and configuration. No stable final metrics.",
        metric: "4 models compared",
      },
      "Laptop Price Statistical Analysis": {
        description:
          "Statistical analysis of laptop prices and technical characteristics through exploration, visualization, regression, probability and inference.",
        focus: "Data Analytics",
        proof:
          "Four notebooks and saved original charts. Full execution requires a dataset that is not included.",
        metric: "4 notebooks",
      },
      "Contact Manager Java Web": {
        description:
          "Java/JSP application for managing users and contacts with MySQL persistence and role-based workflows.",
        focus: "Web Development",
        proof: "Relational persistence, access control and CRUD operations.",
        metric: "CRUD · Roles",
      },
      "Cinema Management System": {
        description:
          "Cinema-management prototype with Swing interfaces, object-oriented design, JDBC and technical documentation.",
        focus: "Software Engineering",
        proof:
          "Object-oriented design, desktop interface and data persistence.",
        metric: "3 development phases",
      },
      "Python Pong Game": {
        description:
          "Two-player Pong game built with Python Turtle, collisions, scoring and keyboard controls.",
        focus: "Programming Fundamentals",
        proof: "Logic, events, collisions and state control.",
        metric: "Initial project",
      },
      "Java Swing Academic Exercises": {
        description:
          "Academic exercises covering calculations, conditional logic and interaction through Swing interfaces.",
        focus: "Programming Fundamentals",
        proof: "Programming logic, OOP and interface-development fundamentals.",
        metric: "Academic progression",
      },
    },
    experienceCopy: {
      "Kodland · Remoto": {
        role: "Software Programming Instructor",
        description:
          "I teach programming fundamentals with Python, Roblox Studio and Unity.",
        contribution:
          "I guide practical projects and adapt explanations to each student’s level.",
      },
      "Tech Lingua Academia · Remoto": {
        role: "Founder and Lead Programming Instructor",
        description:
          "I lead Tech Lingua’s English and programming education project.",
        contribution:
          "I organize content, lesson planning and academy operations.",
      },
      "S&O Bookstore S.A.S · Azure · Remoto": {
        role: "Database Implementation Support",
        description:
          "I supported the creation and implementation of a local and Azure database.",
        contribution:
          "I prepared technical documentation to support work with the data.",
      },
      "Teleperformance Colombia · Bogotá": {
        role: "Collections and Customer Service Representative",
        description:
          "I assisted customers and performed case verification and follow-up.",
        contribution:
          "I supported negotiation and cross-team coordination through clear communication.",
      },
    },
    skillGroups: {
      Datos: "Data",
      Software: "Software",
      Plataformas: "Platforms",
      Trabajo: "Ways of working",
    },
  },
  fr: {
    languageName: "Français",
    nav: {
      profile: "Profil",
      projects: "Projets",
      experience: "Expérience",
      skills: "Compétences",
      certificates: "Certificats",
      contact: "Contact",
    },
    ui: {
      skip: "Aller au contenu",
      home: "Aller à l’accueil",
      openMenu: "Ouvrir le menu",
      closeMenu: "Fermer le menu",
      downloadCv: "Télécharger le CV",
      explore: "Découvrir les projets",
      viewCode: "Voir le code",
      study: "Voir l’étude de cas",
      githubProfile: "Voir le profil GitHub",
      expand: "Agrandir",
      showAll: "Voir tous les certificats",
      showSelection: "Voir la sélection principale",
      back: "Retour aux projets",
      external: "Ouvrir le lien externe",
      selectedEvidence:
        "Sélection de certificats pertinents pour le poste visé.",
      fullEvidence: "Collection complète de certificats.",
      language: "Langue",
      languagePrompt: "Choisissez votre langue",
      portraitAlt: "Portrait professionnel d’Andrés Obando",
      caseStudyLabels: {
        context: "Contexte",
        problem: "Problème",
        objective: "Objectif",
        dataset: "Jeu de données",
        technologies: "Technologies",
        decisions: "Décisions techniques",
        contribution: "Ma contribution",
        results: "Résultats",
        challenges: "Défis",
        learnings: "Enseignements",
        limitations: "Limites",
        future: "Améliorations futures",
        evidence: "Preuves",
      },
    },
    hero: {
      availability: "Disponible pour un stage · nov. 2026",
      eyebrow: "Data Engineering · Systèmes · Bogotá",
      title: "Je construis des solutions data",
      titleAccent: "claires, utiles et maintenables.",
      lead: "Étudiant en neuvième semestre d’ingénierie des systèmes, orienté Data Engineering. Je travaille avec Python, SQL, PySpark, Java et les technologies cloud pour transformer les données, automatiser les processus et construire des logiciels avec rigueur technique.",
      projects: "Découvrir les projets",
      publicProjects: "projets publics",
      credentials: "certificats",
      english: "niveau d’anglais",
      goal: "Objectif",
      availabilityLabel: "Disponibilité",
      mode: "Modalité",
      location: "Bogotá · Hybride / à distance",
      caption: "Data Engineering · Systèmes",
      semester: "Neuvième semestre",
      metricRecords: "lignes traitées",
      metricPipeline: "pipeline de données",
      metricEnglish: "anglais certifié",
    },
    profile: {
      eyebrow: "01 · Profil",
      title: "Les données d’abord. Des systèmes bien construits.",
      intro:
        "Je transforme des données et des exigences complexes en solutions qu’une équipe peut comprendre, tester et maintenir. Ma formation en systèmes me donne une vision globale des données, du logiciel, de l’infrastructure et de la sécurité.",
      body: "Je combine des projets de data engineering et de développement avec une expérience d’enseignement de la programmation. La pédagogie a renforcé ma capacité à expliquer les choix techniques, documenter les processus et collaborer avec différents niveaux d’expérience.",
      data: "Données",
      dataText:
        "ETL, PySpark, SQL, analyse, visualisation et modèles de machine learning.",
      software: "Logiciel",
      softwareText:
        "Java, Python, applications web et desktop, API et conception orientée objet.",
      systems: "Systèmes",
      systemsText:
        "Cloud, bases de données, sécurité de l’information et documentation technique.",
    },
    projects: {
      eyebrow: "02 · Projets sélectionnés",
      title:
        "Des réalisations qui montrent ma façon de penser et de construire.",
      also: "Aussi sur GitHub",
      project: "Projet",
      ariaTech: "Technologies de",
      ariaGithub: "Ouvrir sur GitHub",
    },
    experience: {
      eyebrow: "03 · Parcours",
      title: "Expérience, formation et outils.",
      intro:
        "Un parcours en construction, avec une expérience concrète de l’enseignement, de la documentation et de la résolution de problèmes.",
      work: "Expérience professionnelle",
      education: "Formation",
      degree: "Ingénierie des systèmes",
      university: "Universidad de San Buenaventura, Bogotá",
      semester: "Août 2022 — avr. 2027 · Neuvième semestre",
      skillsEyebrow: "Boîte à outils",
      skillsTitle: "Une stack démontrée.",
      skillsText:
        "Outils utilisés dans mes projets, ma formation et mon expérience. Chaque lien permet d’en vérifier une application concrète.",
    },
    certificates: {
      eyebrow: "04 · Formation continue",
      title: "Certificats vérifiables.",
      intro:
        "Une sélection pertinente en données, développement, cloud, méthodes et langues.",
      filter: "Filtrer les certificats",
      enlarge: "Agrandir",
      selected: "Sélection de certificats pertinents pour le poste visé.",
      all: "Voir tous les certificats",
      full: "Collection complète de certificats.",
    },
    contact: {
      eyebrow: "05 · Contact",
      title: "Je cherche une équipe où les données ont un impact réel.",
      text: "Disponible pour un stage dès novembre 2026, principalement en Data Engineering. Ouvert aussi aux rôles systèmes, backend, Cloud / Data et Data Analytics selon les missions, ainsi qu’aux équipes internationales. Basé à Bogotá ; hybride ou à distance. Anglais B2.",
      email: "E-mail",
      download: "Télécharger le CV",
    },
    footer: {
      top: "Retour en haut ↑",
      role: "Data Engineering · Ingénierie des systèmes · Bogotá",
    },
    projectCopy: {
      "Customer Churn Data Pipeline": {
        description:
          "Pipeline de bout en bout pour nettoyer, transformer, analyser et modéliser le churn avec PySpark et les services de données AWS.",
        focus: "Data Engineering",
        proof:
          "Traitement distribué, transformations et modélisation sur le jeu de données documenté.",
        metric: "1 M de lignes",
      },
      "Global ISO Security": {
        description:
          "Plateforme multi-entreprise de SoA, risques, preuves, audit et formation avec Spring Boot, TiDB Cloud et un RPM hybride : règles déterministes, seconde estimation ML et validation humaine.",
        focus: "Systems Engineering",
        proof:
          "93 contrôles et 5 rôles ; architecture documentée et captures réelles avec données synthétiques. Limites expérimentales explicites.",
        metric: "93 contrôles · 5 rôles",
      },
      "FC Barcelona Player Performance ML": {
        description:
          "Classification de la contribution offensive des joueurs avec xG/xAG, comparaison de modèles et code d’une application Streamlit.",
        focus: "Machine Learning",
        proof:
          "Code de quatre classifieurs et d’une application Streamlit ; MySQL et configuration requis. Pas de métriques finales stables.",
        metric: "4 modèles comparés",
      },
      "Laptop Price Statistical Analysis": {
        description:
          "Analyse statistique des prix et caractéristiques techniques : exploration, visualisation, régression, probabilité et inférence.",
        focus: "Data Analytics",
        proof:
          "Quatre notebooks et graphiques originaux enregistrés. L’exécution complète exige un jeu de données non inclus.",
        metric: "4 notebooks",
      },
      "Contact Manager Java Web": {
        description:
          "Application Java/JSP pour gérer utilisateurs et contacts avec persistance MySQL et flux selon les rôles.",
        focus: "Web Development",
        proof:
          "Persistance relationnelle, contrôle d’accès et opérations CRUD.",
        metric: "CRUD · Rôles",
      },
      "Cinema Management System": {
        description:
          "Prototype de gestion de cinéma avec interfaces Swing, conception orientée objet, JDBC et documentation technique.",
        focus: "Software Engineering",
        proof:
          "Conception orientée objet, interface desktop et persistance des données.",
        metric: "3 phases de développement",
      },
      "Python Pong Game": {
        description:
          "Jeu Pong à deux joueurs développé avec Python Turtle, collisions, score et commandes clavier.",
        focus: "Programming Fundamentals",
        proof: "Logique, événements, collisions et gestion de l’état.",
        metric: "Projet initial",
      },
      "Java Swing Academic Exercises": {
        description:
          "Exercices académiques de calcul, logique conditionnelle et interaction avec des interfaces Swing.",
        focus: "Programming Fundamentals",
        proof: "Fondamentaux de logique, POO et développement d’interfaces.",
        metric: "Progression académique",
      },
    },
    experienceCopy: {
      "Kodland · Remoto": {
        role: "Professeur de programmation",
        description:
          "J’enseigne les fondamentaux de la programmation avec Python, Roblox Studio et Unity.",
        contribution:
          "J’accompagne des projets pratiques et j’adapte les explications au niveau de chaque élève.",
      },
      "Tech Lingua Academia · Remoto": {
        role: "Fondateur et professeur principal de programmation",
        description:
          "Je dirige le projet éducatif d’anglais et de programmation de Tech Lingua.",
        contribution:
          "J’organise les contenus, la préparation des cours et le fonctionnement de l’académie.",
      },
      "S&O Bookstore S.A.S · Azure · Remoto": {
        role: "Appui à la mise en œuvre de bases de données",
        description:
          "J’ai participé à la création et à la mise en œuvre d’une base de données locale et sur Azure.",
        contribution:
          "J’ai préparé la documentation technique pour faciliter le travail avec les données.",
      },
      "Teleperformance Colombia · Bogotá": {
        role: "Conseiller en recouvrement et service client",
        description:
          "J’ai accompagné les clients et assuré la vérification et le suivi des dossiers.",
        contribution:
          "J’ai facilité la négociation et la coordination avec d’autres équipes grâce à une communication claire.",
      },
    },
    skillGroups: {
      Datos: "Données",
      Software: "Logiciel",
      Plataformas: "Plateformes",
      Trabajo: "Collaboration",
    },
  },
  pt: {
    languageName: "Português",
    nav: {
      profile: "Perfil",
      projects: "Projetos",
      experience: "Experiência",
      skills: "Competências",
      certificates: "Certificados",
      contact: "Contato",
    },
    ui: {
      skip: "Ir para o conteúdo",
      home: "Ir para o início",
      openMenu: "Abrir menu",
      closeMenu: "Fechar menu",
      downloadCv: "Baixar CV",
      explore: "Explorar projetos",
      viewCode: "Ver código",
      study: "Ver estudo de caso",
      githubProfile: "Ver perfil completo no GitHub",
      expand: "Ampliar",
      showAll: "Ver todos os certificados",
      showSelection: "Mostrar seleção principal",
      back: "Voltar aos projetos",
      external: "Abrir link externo",
      selectedEvidence:
        "Seleção de certificados relevantes para o objetivo profissional.",
      fullEvidence: "Coleção completa de certificados.",
      language: "Idioma",
      languagePrompt: "Escolha seu idioma",
      portraitAlt: "Retrato profissional de Andrés Obando",
      caseStudyLabels: {
        context: "Contexto",
        problem: "Problema",
        objective: "Objetivo",
        dataset: "Dataset",
        technologies: "Tecnologias",
        decisions: "Decisões técnicas",
        contribution: "Minha contribuição",
        results: "Resultados",
        challenges: "Desafios",
        learnings: "Aprendizados",
        limitations: "Limitações",
        future: "Melhorias futuras",
        evidence: "Evidências",
      },
    },
    hero: {
      availability: "Disponível para estágio · nov. 2026",
      eyebrow: "Data Engineering · Sistemas · Bogotá",
      title: "Construo soluções de dados",
      titleAccent: "claras, úteis e fáceis de manter.",
      lead: "Estudante do nono semestre de Engenharia de Sistemas, orientado a Data Engineering. Trabalho com Python, SQL, PySpark, Java e tecnologias cloud para transformar dados, automatizar processos e criar software com critério técnico.",
      projects: "Explorar projetos",
      publicProjects: "projetos públicos",
      credentials: "credenciais",
      english: "nível de inglês",
      goal: "Objetivo",
      availabilityLabel: "Disponibilidade",
      mode: "Modalidade",
      location: "Bogotá · Híbrido / remoto",
      caption: "Data Engineering · Sistemas",
      semester: "Nono semestre",
      metricRecords: "registros processados",
      metricPipeline: "pipeline de dados",
      metricEnglish: "inglês certificado",
    },
    profile: {
      eyebrow: "01 · Perfil",
      title: "Dados primeiro. Sistemas para fazer bem.",
      intro:
        "Transformo dados e requisitos complexos em soluções que uma equipe pode entender, testar e manter. Minha formação em Sistemas oferece uma visão ampla de dados, software, infraestrutura e segurança.",
      body: "Combino projetos de engenharia de dados e desenvolvimento com experiência ensinando programação. A docência fortaleceu minha capacidade de explicar decisões técnicas, documentar processos e colaborar com diferentes níveis de experiência.",
      data: "Dados",
      dataText:
        "ETL, PySpark, SQL, análise, visualização e modelos de machine learning.",
      software: "Software",
      softwareText:
        "Java, Python, aplicações web e desktop, APIs e orientação a objetos.",
      systems: "Sistemas",
      systemsText:
        "Nuvem, bancos de dados, segurança da informação e documentação técnica.",
    },
    projects: {
      eyebrow: "02 · Projetos selecionados",
      title: "Trabalho que mostra como penso e construo.",
      also: "Também no GitHub",
      project: "Projeto",
      ariaTech: "Tecnologias de",
      ariaGithub: "Abrir no GitHub",
    },
    experience: {
      eyebrow: "03 · Trajetória",
      title: "Experiência, formação e ferramentas.",
      intro:
        "Uma trajetória em construção, com experiência real ensinando, documentando e resolvendo problemas.",
      work: "Experiência profissional",
      education: "Formação",
      degree: "Engenharia de Sistemas",
      university: "Universidad de San Buenaventura, Bogotá",
      semester: "Ago. 2022 — abr. 2027 · Nono semestre",
      skillsEyebrow: "Caixa de ferramentas",
      skillsTitle: "Stack com evidências.",
      skillsText:
        "Ferramentas usadas em projetos, formação e experiência. Cada link mostra uma aplicação concreta.",
    },
    certificates: {
      eyebrow: "04 · Aprendizado contínuo",
      title: "Certificados verificáveis.",
      intro:
        "Uma seleção relevante em dados, desenvolvimento, cloud, métodos e idiomas.",
      filter: "Filtrar certificados",
      enlarge: "Ampliar",
      selected:
        "Seleção de certificados relevantes para o objetivo profissional.",
      all: "Ver todos os certificados",
      full: "Coleção completa de certificados.",
    },
    contact: {
      eyebrow: "05 · Contato",
      title: "Procuro uma equipe onde os dados gerem impacto real.",
      text: "Disponível para estágio a partir de novembro de 2026, com foco em Data Engineering. Também considero Sistemas, Backend, Cloud / Data e Data Analytics conforme o escopo, incluindo equipes internacionais. Bogotá; híbrido ou remoto. Inglês B2. Vamos conversar.",
      email: "E-mail",
      download: "Baixar CV",
    },
    footer: {
      top: "Voltar ao topo ↑",
      role: "Data Engineering · Engenharia de Sistemas · Bogotá",
    },
    projectCopy: {
      "Customer Churn Data Pipeline": {
        description:
          "Pipeline de ponta a ponta para limpeza, transformação, análise e modelagem de churn com PySpark e serviços de dados da AWS.",
        focus: "Data Engineering",
        proof:
          "Processamento distribuído, transformações e modelagem no conjunto de dados documentado.",
        metric: "1 mi de registros",
      },
      "Global ISO Security": {
        description:
          "Plataforma multiempresa de SoA, riscos, evidências, auditoria e formação com Spring Boot, TiDB Cloud e RPM híbrido: regras determinísticas, segunda estimativa ML e revisão humana.",
        focus: "Systems Engineering",
        proof:
          "93 controles e 5 papéis; arquitetura documentada e capturas reais com dados sintéticos. Limitações experimentais explícitas.",
        metric: "93 controles · 5 papéis",
      },
      "FC Barcelona Player Performance ML": {
        description:
          "Classificação da contribuição ofensiva dos jogadores com xG/xAG, comparação de modelos e código de uma aplicação Streamlit.",
        focus: "Machine Learning",
        proof:
          "Código de quatro classificadores e aplicação Streamlit; requer MySQL e configuração. Sem métricas finais estáveis.",
        metric: "4 modelos comparados",
      },
      "Laptop Price Statistical Analysis": {
        description:
          "Análise estatística de preços e características técnicas: exploração, visualização, regressão, probabilidade e inferência.",
        focus: "Data Analytics",
        proof:
          "Quatro notebooks e gráficos originais salvos. A execução completa requer um dataset não incluído.",
        metric: "4 notebooks",
      },
      "Contact Manager Java Web": {
        description:
          "Aplicação Java/JSP para administrar usuários e contatos com persistência MySQL e fluxos baseados em papéis.",
        focus: "Web Development",
        proof: "Persistência relacional, controle de acesso e operações CRUD.",
        metric: "CRUD · Papéis",
      },
      "Cinema Management System": {
        description:
          "Protótipo de gestão de cinema com interfaces Swing, orientação a objetos, JDBC e documentação técnica.",
        focus: "Software Engineering",
        proof:
          "Orientação a objetos, interface desktop e persistência de dados.",
        metric: "3 fases de desenvolvimento",
      },
      "Python Pong Game": {
        description:
          "Jogo Pong para duas pessoas desenvolvido com Python Turtle, colisões, pontuação e controles de teclado.",
        focus: "Programming Fundamentals",
        proof: "Lógica, eventos, colisões e controle de estado.",
        metric: "Projeto inicial",
      },
      "Java Swing Academic Exercises": {
        description:
          "Exercícios acadêmicos de cálculo, lógica condicional e interação por meio de interfaces Swing.",
        focus: "Programming Fundamentals",
        proof: "Fundamentos de lógica, POO e desenvolvimento de interfaces.",
        metric: "Progressão acadêmica",
      },
    },
    experienceCopy: {
      "Kodland · Remoto": {
        role: "Professor de programação",
        description:
          "Ensino fundamentos de programação com Python, Roblox Studio e Unity.",
        contribution:
          "Acompanho projetos práticos e adapto as explicações ao nível de cada estudante.",
      },
      "Tech Lingua Academia · Remoto": {
        role: "Fundador e professor principal de programação",
        description:
          "Lidero o projeto educacional de inglês e programação da Tech Lingua.",
        contribution:
          "Organizo conteúdos, planejamento das aulas e operação da academia.",
      },
      "S&O Bookstore S.A.S · Azure · Remoto": {
        role: "Apoio na implementação de bancos de dados",
        description:
          "Apoiei a criação e implementação de um banco de dados local e no Azure.",
        contribution:
          "Preparei documentação técnica para apoiar o trabalho com os dados.",
      },
      "Teleperformance Colombia · Bogotá": {
        role: "Atendente de cobrança e serviço ao cliente",
        description:
          "Atendi clientes e realizei verificações e acompanhamento de casos.",
        contribution:
          "Apoiei a negociação e a coordenação com outras áreas por meio de comunicação clara.",
      },
    },
    skillGroups: {
      Datos: "Dados",
      Software: "Software",
      Plataformas: "Plataformas",
      Trabajo: "Colaboração",
    },
  },
};
