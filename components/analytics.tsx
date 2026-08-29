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
  }, []);
  return null;
}
