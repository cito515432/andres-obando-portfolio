import type { Metadata } from "next";
import { SiteRootLayout } from "@/components/site-root-layout";
import { siteMetadata } from "@/data/site-metadata";
import "@/app/globals.css";

export const metadata: Metadata = siteMetadata;

export default async function LocalizedRootLayout({
  children,
  params,
}: Readonly<{ children: React.ReactNode; params: Promise<{ locale: string }> }>) {
  const { locale } = await params;
  const lang = locale === "fr" || locale === "pt" || locale === "en" ? locale : "es";
  return <SiteRootLayout lang={lang}>{children}</SiteRootLayout>;
}
