import type { MetadataRoute } from "next";
import { caseStudies } from "@/data/case-studies";

export const dynamic = "force-static";

const base = "https://andres-obando-portfolio-static.onrender.com";
export default function sitemap(): MetadataRoute.Sitemap {
  const home = ["", "en/", "fr/", "pt/"].map((path) => ({ url: `${base}/${path}`, changeFrequency: "monthly" as const, priority: path === "" ? 1 : .8 }));
  const studies = ["", "en/", "fr/", "pt/"].flatMap((prefix) => caseStudies.map((study) => ({ url: `${base}/${prefix}case-studies/${study.slug}/`, changeFrequency: "yearly" as const, priority: .6 })));
  return [...home, ...studies];
}
