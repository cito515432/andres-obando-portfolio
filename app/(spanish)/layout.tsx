import type { Metadata } from "next";
import { SiteRootLayout } from "@/components/site-root-layout";
import { siteMetadata } from "@/data/site-metadata";
import "@/app/globals.css";

export const metadata: Metadata = siteMetadata;

export default function SpanishRootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <SiteRootLayout lang="es">{children}</SiteRootLayout>;
}
