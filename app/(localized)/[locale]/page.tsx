import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PortfolioSite } from "@/components/portfolio-site";
import { copy, locales, localeMeta, type Locale } from "@/data/i18n";

export function generateStaticParams() {
  return locales.filter((locale) => locale !== "es").map((locale) => ({ locale }));
}

export function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  return params.then(({ locale: value }) => {
    if (!locales.includes(value as Locale) || value === "es") return {};
    const locale = value as Locale;
    const c = copy[locale];
    const title = `Andrés Obando | ${locale === "fr" ? "Data Engineering & Ingénierie des systèmes" : locale === "pt" ? "Data Engineering & Engenharia de Sistemas" : "Data Engineering & Systems Engineering"}`;
    return {
      title,
      description: c.hero.lead,
      alternates: {
        canonical: localeMeta[locale].path,
        languages: { es: "/", en: "/en/", fr: "/fr/", pt: "/pt/", "x-default": "/" },
      },
      openGraph: {
        locale: locale === "fr" ? "fr_FR" : locale === "pt" ? "pt_BR" : "en_US",
        title,
        description: c.hero.lead,
        type: "profile",
        siteName: "Andrés Obando",
      },
      twitter: { card: "summary_large_image", title, description: c.hero.lead },
    };
  });
}

export default async function LocalizedHome({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: value } = await params;
  if (!locales.includes(value as Locale) || value === "es") notFound();
  return <PortfolioSite locale={value as Locale} />;
}
