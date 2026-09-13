"use client";

import { useEffect } from "react";

export function NavigationInteractions() {
  useEffect(() => {
    const syncHash = () => document.querySelectorAll<HTMLAnchorElement>("a[data-language-base]").forEach((link) => {
      link.href = `${link.dataset.languageBase}${window.location.hash}`;
    });
    const closeOutside = (event: Event) => {
      if (!(event.target instanceof Node)) return;
      for (const details of document.querySelectorAll<HTMLDetailsElement>("details.language-switcher[open]")) {
        if (!details.contains(event.target)) details.open = false;
      }
    };
    const onKey = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;
      const details = document.activeElement?.closest<HTMLDetailsElement>("details.language-switcher[open]");
      if (details) { details.open = false; details.querySelector("summary")?.focus(); }
    };
    syncHash();
    window.addEventListener("hashchange", syncHash);
    document.addEventListener("pointerdown", closeOutside);
    document.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("hashchange", syncHash);
      document.removeEventListener("pointerdown", closeOutside);
      document.removeEventListener("keydown", onKey);
    };
  }, []);
  return null;
}
