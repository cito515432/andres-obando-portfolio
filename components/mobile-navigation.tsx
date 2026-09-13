"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { Menu, X } from "lucide-react";

export function MobileNavigation({ openLabel, closeLabel, children }: { openLabel: string; closeLabel: string; children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const button = useRef<HTMLButtonElement>(null);
  const panel = useRef<HTMLElement>(null);
  useEffect(() => {
    if (!open) return;
    const closeOutside = (event: PointerEvent) => {
      if (event.target instanceof Node && !panel.current?.contains(event.target) && !button.current?.contains(event.target)) setOpen(false);
    };
    const escape = (event: KeyboardEvent) => {
      if (event.key === "Escape") { setOpen(false); button.current?.focus(); }
    };
    const media = window.matchMedia("(min-width: 1181px)");
    const desktop = () => { if (media.matches) setOpen(false); };
    document.addEventListener("pointerdown", closeOutside);
    document.addEventListener("keydown", escape);
    media.addEventListener("change", desktop);
    return () => {
      document.removeEventListener("pointerdown", closeOutside);
      document.removeEventListener("keydown", escape);
      media.removeEventListener("change", desktop);
    };
  }, [open]);
  return <div className="mobile-navigation">
    <button ref={button} className="menu-button" type="button" aria-label={open ? closeLabel : openLabel} aria-expanded={open} aria-controls="mobile-menu" onClick={() => setOpen(!open)}>{open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}</button>
    <nav ref={panel} id="mobile-menu" className="mobile-nav" aria-label={openLabel} hidden={!open} onClick={(event) => {
      if (event.target instanceof Element && event.target.closest("a")) { setOpen(false); button.current?.focus(); }
    }}>{children}</nav>
  </div>;
}
