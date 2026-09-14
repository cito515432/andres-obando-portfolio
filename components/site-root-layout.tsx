/* eslint-disable @next/next/no-head-element -- Shared App Router root document; next/head is for the Pages Router. */
import { themeBootstrap } from "@/lib/theme-bootstrap.mjs";
import { NavigationInteractions } from "@/components/navigation-interactions";
import { Analytics } from "@/components/analytics";
import { structuredData } from "@/data/site-metadata";

export function SiteRootLayout({ lang, children }: { lang: string; children: React.ReactNode }) {
  return (
    <html lang={lang} suppressHydrationWarning>
      <head><script dangerouslySetInnerHTML={{ __html: themeBootstrap }} /></head>
      <body>
        <Analytics />
        <NavigationInteractions />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        {children}
      </body>
    </html>
  );
}
