"use client";

import { useEffect, useRef } from "react";
import { Sun, Moon } from "lucide-react";

export function ThemeSwitcher({ light, dark }: { light: string; dark: string }) {
  const button = useRef<HTMLButtonElement>(null);
  const manual = useRef<string | null>(null);
  useEffect(() => {
    const label = () => button.current?.setAttribute("aria-label", document.documentElement.dataset.theme === "dark" ? light : dark);
    label();
    const observer = new MutationObserver(label);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });
    const media = window.matchMedia("(prefers-color-scheme: dark)");
    const sync = () => {
      let saved: string | null = null;
      try { saved = localStorage.getItem("portfolio-theme"); } catch { /* Storage can be unavailable. */ }
      document.documentElement.dataset.theme = saved === "light" || saved === "dark"
        ? saved : manual.current ?? (media.matches ? "dark" : "light");
    };
    const onStorage = (event: StorageEvent) => {
      if (event.key === "portfolio-theme" || event.key === null) { manual.current = null; sync(); }
    };
    media.addEventListener("change", sync);
    window.addEventListener("storage", onStorage);
    return () => {
      observer.disconnect();
      media.removeEventListener("change", sync);
      window.removeEventListener("storage", onStorage);
    };
  }, [light, dark]);

  const toggle = () => {
    const theme = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
    manual.current = theme;
    document.documentElement.dataset.theme = theme;
    try { localStorage.setItem("portfolio-theme", theme); } catch { /* Theme still works for this page. */ }
    document.dispatchEvent(new CustomEvent("portfolio:theme-change", { detail: theme }));
  };

  // CSS chooses the action label before hydration, using the same root token as the page.
  return <button ref={button} aria-label={`${light} / ${dark}`} className="theme-switcher" type="button" onClick={toggle}>
    <span className="theme-action-dark"><Moon size={18} aria-hidden="true" /><span className="sr-only">{dark}</span><span className="theme-tooltip" aria-hidden="true">{dark}</span></span>
    <span className="theme-action-light"><Sun size={18} aria-hidden="true" /><span className="sr-only">{light}</span><span className="theme-tooltip" aria-hidden="true">{light}</span></span>
  </button>;
}
