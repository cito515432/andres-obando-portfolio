import type { Metadata } from "next";
import { profile } from "@/data/portfolio";
import { Analytics } from "@/components/analytics";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://andres-obando-portfolio-static.onrender.com"),
  title: "Andrés Obando | Data Engineering & Systems Engineering",
  description:
    "Portafolio profesional de Andrés Obando, estudiante de Ingeniería de Sistemas orientado a Data Engineering: Python, SQL, PySpark, Java, cloud, ETL y proyectos técnicos.",
  applicationName: "Andrés Obando Portfolio",
  keywords: [
    "Andrés Obando",
    "Data Engineering",
    "Ingeniería de Datos",
    "Ingeniería de Sistemas",
    "Python",
    "SQL",
    "PySpark",
    "ETL",
    "Java",
    "AWS",
    "Azure",
    "Bogotá",
    "Prácticas profesionales",
  ],
  authors: [{ name: profile.name }],
  creator: profile.name,
  category: "technology",
  robots: { index: true, follow: true },
  alternates: { canonical: "/", languages: { es: "/", en: "/en/", fr: "/fr/", pt: "/pt/" } },
  openGraph: {
    title: "Andrés Obando | Data Engineering & Systems Engineering",
    description:
      "Proyectos de datos y software, experiencia, stack técnico, hoja de vida y credenciales verificables.",
    type: "profile",
    locale: "es_CO",
    firstName: "Andrés",
    lastName: "Obando",
  },
  twitter: {
    card: "summary_large_image",
    title: "Andrés Obando | Data Engineering & Systems Engineering",
    description: "Portafolio de proyectos de datos y software, experiencia y stack técnico.",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  jobTitle: "Systems Engineering Student · Aspiring Data Engineer",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Bogotá",
    addressCountry: "CO",
  },
  email: `mailto:${profile.email}`,
  sameAs: [profile.linkedin, profile.github],
  knowsAbout: [
    "Data Engineering",
    "Python",
    "SQL",
    "PySpark",
    "ETL",
    "Java",
    "AWS",
    "Azure",
    "Databases",
  ],
};

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params?: Promise<{ locale?: string }>;
}>) {
  const routeParams = params ? await params : {};
  const htmlLang = ["en", "fr", "pt"].includes(routeParams.locale ?? "") ? routeParams.locale : "es";
  return (
    <html lang={htmlLang}>
      <body>
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.lang=location.pathname.startsWith('/fr')?'fr':location.pathname.startsWith('/pt')?'pt':location.pathname.startsWith('/en')?'en':'es';" }} />
        <Analytics />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        {children}
      </body>
    </html>
  );
}
