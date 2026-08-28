export type Project = {
  name: string;
  description: string;
  url: string;
  technologies: string[];
  metric: string;
  focus: string;
  proof: string;
  kind: "data" | "security" | "ml" | "analytics" | "software";
  featured?: boolean;
};

export type CertificateDocument = {
  label: string;
  url: string;
};

export type Certificate = {
  title: string;
  issuer: string;
  date: string;
  category: "Datos" | "Desarrollo" | "Gestión" | "Idiomas" | "Otros";
  image: string;
  documents: CertificateDocument[];
  priority?: boolean;
};

export const profile = {
  name: "Andrés Felipe Obando Barriga",
  shortName: "Andrés Obando",
  role: "Ingeniería de Datos · Ingeniería de Sistemas",
  city: "Bogotá, Colombia",
  email: "andresobba@gmail.com",
  github: "https://github.com/cito515432",
  linkedin: "https://www.linkedin.com/in/andres-obando-08095b203",
  cv: "/documents/cv/cv-andres-obando-publico.pdf",
};

export const projects: Project[] = [
  {
    name: "Customer Churn Data Pipeline",
    description:
      "Pipeline end-to-end para limpieza, transformación, análisis y modelado de churn con PySpark y servicios de datos de AWS.",
    url: "https://github.com/cito515432/customer-churn-data-pipeline",
    technologies: ["PySpark", "AWS", "ETL", "Machine Learning"],
    metric: "1 M de registros",
    focus: "Data Engineering",
    proof: "Procesamiento distribuido, transformación y modelado sobre un conjunto de datos de gran volumen.",
    kind: "data",
    featured: true,
  },
  {
    name: "Global ISO Security",
    description:
      "Plataforma web multiempresa para gestionar la SoA de ISO/IEC 27001, riesgos, evidencias, auditoría y formación con un motor RPM explicable.",
    url: "https://github.com/cito515432/global-iso-security",
    technologies: ["Java", "Spring Boot", "MySQL", "Docker", "ISO 27001"],
    metric: "93 controles · 5 roles",
    focus: "Systems Engineering",
    proof: "Arquitectura funcional con gestión de controles, riesgos, evidencias y flujos diferenciados por rol.",
    kind: "security",
    featured: true,
  },
  {
    name: "FC Barcelona Player Performance ML",
    description:
      "Clasificación del aporte ofensivo de jugadores con métricas xG/xAG, comparación de modelos y una aplicación interactiva en Streamlit.",
    url: "https://github.com/cito515432/fc-barcelona-player-performance-ml",
    technologies: ["Python", "scikit-learn", "XGBoost", "Streamlit"],
    metric: "4 modelos comparados",
    focus: "Machine Learning",
    proof: "Comparación de modelos predictivos y presentación interactiva de resultados para facilitar su interpretación.",
    kind: "ml",
    featured: true,
  },
  {
    name: "Laptop Price Statistical Analysis",
    description:
      "Análisis estadístico de precios y características técnicas mediante visualización, regresión, probabilidad e inferencia.",
    url: "https://github.com/cito515432/laptop-price-statistical-analysis",
    technologies: ["Python", "pandas", "Statistics", "Jupyter"],
    metric: "4 notebooks",
    focus: "Data Analytics",
    proof: "Exploración, visualización y modelado estadístico documentados en notebooks reproducibles.",
    kind: "analytics",
    featured: true,
  },
  {
    name: "Contact Manager Java Web",
    description:
      "Aplicación Java/JSP para administrar usuarios y contactos con persistencia MySQL y flujos basados en roles.",
    url: "https://github.com/cito515432/contact-manager-java-web",
    technologies: ["Java", "JSP", "MySQL", "JDBC"],
    metric: "CRUD · Roles",
    focus: "Web Development",
    proof: "Persistencia relacional, control de acceso y operaciones CRUD.",
    kind: "software",
  },
  {
    name: "Cinema Management System",
    description:
      "Prototipo de gestión de cine con interfaces Swing, diseño orientado a objetos, JDBC y documentación técnica.",
    url: "https://github.com/cito515432/cinema-management-system-java",
    technologies: ["Java", "Swing", "MySQL", "OOP"],
    metric: "3 fases de desarrollo",
    focus: "Software Engineering",
    proof: "Diseño orientado a objetos, interfaz de escritorio y persistencia de datos.",
    kind: "software",
  },
  {
    name: "Python Pong Game",
    description:
      "Juego Pong para dos jugadores desarrollado con Python Turtle, colisiones, puntaje y controles de teclado.",
    url: "https://github.com/cito515432/python-pong-game",
    technologies: ["Python", "Turtle"],
    metric: "Proyecto inicial",
    focus: "Programming Fundamentals",
    proof: "Lógica, eventos, colisiones y control de estado.",
    kind: "software",
  },
  {
    name: "Java Swing Academic Exercises",
    description:
      "Ejercicios académicos de cálculo, lógica condicional e interacción mediante interfaces Swing.",
    url: "https://github.com/cito515432/java-swing-academic-exercises",
    technologies: ["Java", "Swing", "OOP"],
    metric: "Progresión académica",
    focus: "Programming Fundamentals",
    proof: "Fundamentos de lógica, POO y desarrollo de interfaces.",
    kind: "software",
  },
];

export const experience = [
  {
    period: "Mar. 2026 — actualidad",
    role: "Profesor de programación de software",
    company: "Kodland · Remoto",
    description:
      "Enseñanza de fundamentos de programación y desarrollo con Python, Roblox Studio y Unity; acompañamiento de proyectos prácticos y aprendizaje adaptado.",
  },
  {
    period: "Feb. 2026 — actualidad",
    role: "Founder & Lead Programming Instructor",
    company: "Tech Lingua Academia · Remoto",
    description:
      "Liderazgo de un proyecto educativo de inglés y programación, incluyendo planeación, contenidos, clases y operación independiente.",
  },
  {
    period: "Ene. 2025 — jun. 2025",
    role: "Apoyo en implementación de bases de datos",
    company: "S&O Bookstore S.A.S · Azure · Remoto",
    description:
      "Apoyo en creación e implementación de una base de datos local y en Azure, documentación técnica y aplicación de fundamentos de datos.",
  },
  {
    period: "Ene. 2021 — feb. 2021",
    role: "Teleoperador en cobranzas y servicio al cliente",
    company: "Teleperformance Colombia · Bogotá",
    description:
      "Atención de clientes, verificación y seguimiento de casos, negociación y coordinación con otras áreas.",
  },
];

export const skillGroups = [
  {
    title: "Datos",
    skills: ["Python", "SQL", "PySpark", "ETL", "pandas", "Análisis de datos", "Business Intelligence"],
  },
  {
    title: "Software",
    skills: ["Java", "Spring Boot", "JSP", "Java Swing", "OOP", "Git", "APIs REST"],
  },
  {
    title: "Plataformas",
    skills: ["AWS", "Azure", "MySQL", "Docker", "Streamlit", "Jupyter", "Excel"],
  },
  {
    title: "Trabajo",
    skills: ["Scrum", "Liderazgo", "Docencia", "Comunicación", "Gestión de proyectos"],
  },
];

export const certificates: Certificate[] = [
  {
    title: "Google: Inteligencia Artificial y productividad",
    priority: true,
    issuer: "Google · Santander Open Academy",
    date: "Jul. 2025",
    category: "Datos",
    image: "/images/certificates/ia-google.jpg",
    documents: [
      { label: "Ver certificado", url: "/documents/certificates/inteligencia-artificial-productividad-google.pdf" },
    ],
  },
  {
    title: "Desarrollo de aplicaciones con interfaz gráfica: Java",
    priority: true,
    issuer: "SENA",
    date: "May. 2025 · 40 horas",
    category: "Desarrollo",
    image: "/images/certificates/java.jpg",
    documents: [
      { label: "Certificado", url: "/documents/certificates/java-interfaz-grafica-certificado-sena.pdf" },
      { label: "Diploma", url: "/documents/certificates/java-interfaz-grafica-diploma-sena.pdf" },
    ],
  },
  {
    title: "Fundamentos profesionales del análisis de datos",
    priority: true,
    issuer: "Microsoft · LinkedIn Learning",
    date: "Jul. 2024 · 11 h 28 min",
    category: "Datos",
    image: "/images/certificates/analisis-datos.jpg",
    documents: [
      { label: "Ver certificado", url: "/documents/certificates/analisis-datos-microsoft-linkedin.pdf" },
    ],
  },
  {
    title: "Business Intelligence Foundation",
    priority: true,
    issuer: "CertiProf",
    date: "Jul. 2024",
    category: "Datos",
    image: "/images/certificates/business-intelligence.jpg",
    documents: [
      { label: "Ver certificado", url: "/documents/certificates/business-intelligence-foundation-certiprof.pdf" },
    ],
  },
  {
    title: "EF SET English Certificate · B2",
    priority: true,
    issuer: "EF SET",
    date: "Jul. 2024",
    category: "Idiomas",
    image: "/images/certificates/ingles-b2.jpg",
    documents: [
      { label: "Ver certificado", url: "/documents/certificates/ingles-b2-ef-set.pdf" },
    ],
  },
  {
    title: "Apropiación de los conceptos en ciberseguridad",
    issuer: "SENA",
    date: "Ago. 2023 · 48 horas",
    category: "Desarrollo",
    image: "/images/certificates/ciberseguridad.jpg",
    documents: [
      { label: "Certificado", url: "/documents/certificates/ciberseguridad-certificado-sena.pdf" },
      { label: "Diploma", url: "/documents/certificates/ciberseguridad-diploma-sena.pdf" },
    ],
  },
  {
    title: "Scrum Foundation Professional Certificate",
    issuer: "CertiProf",
    date: "Sep. 2022",
    category: "Gestión",
    image: "/images/certificates/scrum.jpg",
    documents: [
      { label: "Ver certificado", url: "/documents/certificates/scrum-foundation-certiprof.pdf" },
    ],
  },
  {
    title: "Bases de datos: generalidades y sistemas de gestión",
    priority: true,
    issuer: "SENA",
    date: "Jul. 2022 · 40 horas",
    category: "Datos",
    image: "/images/certificates/bases-datos.jpg",
    documents: [
      { label: "Certificado", url: "/documents/certificates/bases-datos-certificado-sena.pdf" },
      { label: "Diploma", url: "/documents/certificates/bases-datos-diploma-sena.pdf" },
    ],
  },
  {
    title: "Manejo de herramientas Microsoft Office 2016: Excel",
    issuer: "SENA",
    date: "Dic. 2020 · 40 horas",
    category: "Datos",
    image: "/images/certificates/excel.jpg",
    documents: [
      { label: "Certificado", url: "/documents/certificates/excel-certificado-sena.pdf" },
      { label: "Diploma", url: "/documents/certificates/excel-diploma-sena.pdf" },
    ],
  },
  {
    title: "Economía del comportamiento para mejores políticas públicas",
    issuer: "BID · INDES",
    date: "Oct. 2020 · 16 horas",
    category: "Gestión",
    image: "/images/certificates/economia.jpg",
    documents: [
      { label: "Ver certificado", url: "/documents/certificates/economia-comportamiento-bid.pdf" },
    ],
  },
  {
    title: "Automatización de procesos de campaña",
    issuer: "Meta Blueprint",
    date: "Jul. 2024",
    category: "Gestión",
    image: "/images/certificates/meta-automatizacion.jpg",
    documents: [
      { label: "Ver certificado", url: "/documents/certificates/meta-automatizacion-procesos.pdf" },
    ],
  },
  {
    title: "Seguridad de la marca en Facebook",
    issuer: "Meta Blueprint",
    date: "Jul. 2024",
    category: "Gestión",
    image: "/images/certificates/meta-seguridad.jpg",
    documents: [
      { label: "Ver certificado", url: "/documents/certificates/meta-seguridad-marca.pdf" },
    ],
  },
  {
    title: "Administrador de monetización",
    issuer: "Meta Blueprint",
    date: "Jul. 2024",
    category: "Gestión",
    image: "/images/certificates/meta-monetizacion.jpg",
    documents: [
      { label: "Ver certificado", url: "/documents/certificates/meta-monetizacion.pdf" },
    ],
  },
  {
    title: "Protege el contenido con Rights Manager",
    issuer: "Meta Blueprint",
    date: "Jul. 2024",
    category: "Gestión",
    image: "/images/certificates/meta-rights-manager.jpg",
    documents: [
      { label: "Ver certificado", url: "/documents/certificates/meta-rights-manager.pdf" },
    ],
  },
  {
    title: "Oportunidades de negocio",
    issuer: "SENA",
    date: "Nov. 2020 · 40 horas",
    category: "Otros",
    image: "/images/certificates/oportunidades-negocio.jpg",
    documents: [
      { label: "Certificado", url: "/documents/certificates/oportunidades-negocio-certificado-sena.pdf" },
      { label: "Diploma", url: "/documents/certificates/oportunidades-negocio-diploma-sena.pdf" },
    ],
  },
];
