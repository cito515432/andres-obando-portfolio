import { Analytics } from "@/components/analytics";
import { structuredData } from "@/data/site-metadata";

export function SiteRootLayout({ lang, children }: { lang: string; children: React.ReactNode }) {
  return (
    <html lang={lang}>
      <body>
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
