"use client";

import { useEffect } from "react";
import { linkEvent } from "@/lib/analytics-event.mjs";

type AnalyticsWindow = Window & { dataLayer?: unknown[]; gtag?: (...args: unknown[]) => void };
export function Analytics() {
  useEffect(() => {
    const id = process.env.NEXT_PUBLIC_GA_ID;
    if (!id || !/^G-[A-Z0-9]+$/.test(id)) return;
    const target = window as AnalyticsWindow;
    target.dataLayer ??= [];
    // GA expects Arguments objects, including events queued before the script loads.
    // eslint-disable-next-line prefer-rest-params -- GA consumes Arguments objects in its pre-load queue.
    target.gtag ??= function () { target.dataLayer!.push(arguments); };
    const gtag = target.gtag;
    if (!document.querySelector("script[data-portfolio-analytics]")) {
      const script = document.createElement("script");
      script.async = true;
      script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(id)}`;
      script.dataset.portfolioAnalytics = "true";
      gtag("js", new Date());
      gtag("config", id, { anonymize_ip: true });
      document.head.appendChild(script);
    }
    const trackLink = (event: Event) => {
      const link = event.target instanceof Element ? event.target.closest<HTMLAnchorElement>("a") : null;
      if (!link) return;
      const href = link.getAttribute("href") ?? "";
      const eventName = linkEvent(href, link.dataset.analytics);
      // Never send email addresses, query strings or fragment data as event parameters.
      if (eventName) gtag("event", eventName, { link_path: eventName === "email_click" ? "email" : href.split(/[?#]/)[0], ...(link.dataset.language ? { language: link.dataset.language } : {}) });
    };
    const trackTheme = (event: Event) => {
      const theme = (event as CustomEvent).detail;
      if (theme === "light" || theme === "dark") gtag("event", "theme_change", { theme });
    };
    document.addEventListener("click", trackLink);
    document.addEventListener("portfolio:theme-change", trackTheme);
    return () => {
      document.removeEventListener("click", trackLink);
      document.removeEventListener("portfolio:theme-change", trackTheme);
    };
  }, []);
  return null;
}
