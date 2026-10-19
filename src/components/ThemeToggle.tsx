"use client";

import { useEffect, useLayoutEffect } from "react";
import { Moon, Sun } from "lucide-react";

const STORAGE_KEY = "theme";

type Theme = "light" | "dark";

const useIsomorphicLayoutEffect =
  typeof window === "undefined" ? useEffect : useLayoutEffect;

function getPreferredTheme(): Theme {
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored === "light" || stored === "dark") {
      return stored;
    }
  } catch {
    // localStorage can be unavailable (private mode, blocked storage).
  }

  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

function applyTheme(theme: Theme) {
  document.documentElement.setAttribute("data-theme", theme);
}

export default function ThemeToggle() {
  // Re-apply the source of truth after React's dev-only Strict Mode remount.
  useIsomorphicLayoutEffect(() => {
    applyTheme(getPreferredTheme());
  }, []);

  useEffect(() => {
    const media = window.matchMedia("(prefers-color-scheme: dark)");

    const onChange = (event: MediaQueryListEvent) => {
      try {
        if (window.localStorage.getItem(STORAGE_KEY)) {
          return;
        }
      } catch {
        // Fall through and follow the system preference.
      }

      applyTheme(event.matches ? "dark" : "light");
    };

    media.addEventListener("change", onChange);
    return () => media.removeEventListener("change", onChange);
  }, []);

  function toggleTheme() {
    const current =
      document.documentElement.getAttribute("data-theme") === "dark"
        ? "dark"
        : "light";
    const next: Theme = current === "dark" ? "light" : "dark";

    applyTheme(next);

    try {
      window.localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // The attribute still updates even if persistence is blocked.
    }
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label="Toggle color theme"
      title="Toggle color theme"
      className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border bg-surface/60 text-muted transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/50 hover:text-accent"
    >
      <Moon size={17} className="dark:hidden" />
      <Sun size={17} className="hidden dark:block" />
    </button>
  );
}
