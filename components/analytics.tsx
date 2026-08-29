"use client";

import { useEffect } from "react";

export function Analytics() {
  useEffect(() => {
    const id = process.env.NEXT_PUBLIC_GA_ID;
    if (!id || document.querySelector(`script[data-ga-id="${id}"]`)) return;
    const script = document.createElement("script");
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(id)}`;
    script.dataset.gaId = id;
    document.head.appendChild(script);
    const dataLayer = ((window as Window & { dataLayer?: unknown[] }).dataLayer ??= []);
    const gtag = (...args: unknown[]) => dataLayer.push(args);
    gtag("js", new Date());
    gtag("config", id, { anonymize_ip: true });
    const trackLink = (event: Event) => {
      const link = (event.target as HTMLElement).closest("a");
      const href = link?.getAttribute("href") ?? "";
      const eventName = href.includes("github.com") ? "github_click" : href.includes("linkedin.com") ? "linkedin_click" : href.includes("/documents/cv/") ? "cv_download" : href.includes("/case-studies/") ? "case_study_open" : /^\/(en|fr|pt)\/?(?:#|$)/.test(href) || href === "/" ? "language_select" : "";
      if (eventName) gtag("event", eventName, { link_url: href });
    };
    document.addEventListener("click", trackLink);
    return () => document.removeEventListener("click", trackLink);
  }, []);
  return null;
}
