"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { navLinks, profile } from "@/data/profile";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open
          ? "border-b border-border/70 bg-background/70 shadow-[0_18px_50px_-30px_var(--glow)] backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav className="mx-auto flex w-full max-w-5xl items-center justify-between px-6 py-4">
        <a
          href="#top"
          className="font-mono text-lg font-bold tracking-tight text-foreground"
        >
          <span className="text-brand">{"<"}</span>
          {profile.firstName}
          <span className="text-brand">{" />"}</span>
        </a>

        <ul className="hidden items-center gap-7 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="group relative text-sm text-muted transition-colors hover:text-foreground"
              >
                {link.label}
                <span className="absolute -bottom-1.5 left-0 h-px w-0 bg-brand transition-all duration-300 group-hover:w-full" />
              </a>
            </li>
          ))}
          <li>
            <ThemeToggle />
          </li>
          <li>
            <a
              href={profile.resumeUrl}
              download
              className="inline-flex items-center rounded-full bg-brand px-4 py-1.5 text-sm font-semibold text-accent-contrast shadow-[0_14px_30px_-16px_var(--glow)] transition-all duration-300 hover:-translate-y-0.5 hover:opacity-95"
            >
              Resume
            </a>
          </li>
        </ul>

        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
          className="text-foreground md:hidden"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {open && (
        <div
          id="mobile-menu"
          className="border-t border-border/70 bg-background/95 px-6 pb-6 backdrop-blur-xl md:hidden"
        >
          <ul className="flex flex-col gap-4 pt-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="text-base text-muted transition-colors hover:text-accent"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-6 flex items-center justify-between gap-4">
            <a
              href={profile.resumeUrl}
              download
              className="inline-flex items-center rounded-full bg-brand px-5 py-2.5 text-sm font-semibold text-accent-contrast shadow-[0_14px_30px_-16px_var(--glow)]"
            >
              Download Resume
            </a>
            <ThemeToggle />
          </div>
        </div>
      )}
    </header>
  );
}
