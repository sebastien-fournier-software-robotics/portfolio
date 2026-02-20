import React, { createContext, useState, useContext, useCallback, useMemo, useRef, useEffect } from "react";
import translations from "./translations";

const LanguageContext = createContext();

/**
 * Duration (ms) for the exit half of the animation.
 * The enter half mirrors this via a CSS transition.
 */
const EXIT_MS = 200;

/** Section ids used in the app (must match section element ids). */
const SECTION_IDS = ["home", "about", "skills", "experiences", "project", "education", "contact"];

/**
 * Tolerance (px): if scroll is just above a section top (e.g. after a previous restore),
 * still treat as that section so the 2nd toggle works.
 */
const SECTION_TOP_TOLERANCE = 8;

/**
 * Returns the section containing the current scroll position, plus offset from that section's top.
 * So we can restore "same place" when content height changes (e.g. FR vs EN).
 * Uses a small tolerance above section top so repeated toggles (e.g. on Formations) stay correct.
 */
function getScrollRestoreState() {
  const scrollY = window.scrollY;
  for (const id of SECTION_IDS) {
    const el = document.getElementById(id);
    if (!el) continue;
    const top = el.getBoundingClientRect().top + window.scrollY;
    const bottom = top + el.offsetHeight;
    if (scrollY >= top - SECTION_TOP_TOLERANCE && scrollY < bottom) {
      const offsetInSection = Math.max(0, scrollY - top);
      return { sectionId: id, offsetInSection };
    }
  }
  return { scrollY };
}

export function LanguageProvider({ navbar, children }) {
  const [language, setLanguage] = useState("fr");
  /** "idle" | "exit" | "enter" */
  const [phase, setPhase] = useState("idle");
  const timerRef = useRef(null);
  /** { sectionId, offsetInSection } | { scrollY } to restore after language toggle. */
  const scrollRestoreRef = useRef(null);

  const toggleLanguage = useCallback(() => {
    /* Prevent double-toggling while an animation is in flight. */
    if (timerRef.current) return;

    scrollRestoreRef.current = getScrollRestoreState();

    /* Phase 1 — slide + fade old content out */
    setPhase("exit");

    timerRef.current = setTimeout(() => {
      /* Phase 2 — swap language, then immediately set the "enter" pose
         so the wrapper starts at the opposite offset. */
      setLanguage((prev) => (prev === "en" ? "fr" : "en"));
      setPhase("enter");

      /* Phase 3 — next frame: remove the class so CSS transitions
         the wrapper smoothly back to its resting position. */
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setPhase("idle");
          timerRef.current = null;
        });
      });
    }, EXIT_MS);
  }, []);

  /* Restore scroll after phase returns to "idle" (DOM has been updated with new language). */
  useEffect(() => {
    if (phase !== "idle" || scrollRestoreRef.current === null) return;
    const saved = scrollRestoreRef.current;
    scrollRestoreRef.current = null;

    const restore = () => {
      if ("sectionId" in saved) {
        const el = document.getElementById(saved.sectionId);
        if (el) {
          const sectionTop = el.getBoundingClientRect().top + window.scrollY;
          window.scrollTo(0, sectionTop + saved.offsetInSection);
          return;
        }
      }
      window.scrollTo(0, saved.scrollY);
    };

    requestAnimationFrame(() => {
      requestAnimationFrame(restore);
    });
  }, [phase]);

  /**
   * Translation helper — resolves a dot-separated key from the
   * centralised translations dictionary and returns the value
   * matching the current language.
   *
   * Usage:  t("home.greeting")        → "Hello There!" | "Bonjour !"
   *         t("typewriter.strings")    → [...array for current lang...]
   *
   * If the resolved value is an object with `en` / `fr` keys,
   * the current language's value is returned automatically.
   * Otherwise the raw value is returned (useful for arrays/JSX
   * already keyed by language at the leaf level).
   */
  const t = useCallback(
    (key) => {
      const keys = key.split(".");
      let value = translations;
      for (const k of keys) {
        value = value?.[k];
      }
      // If the leaf is a { en, fr } object, pick the right language
      if (value && typeof value === "object" && language in value) {
        return value[language];
      }
      return value;
    },
    [language],
  );

  const ctx = useMemo(
    () => ({ language, toggleLanguage, t, phase }),
    [language, toggleLanguage, t, phase],
  );

  return (
    <LanguageContext.Provider value={ctx}>
      {navbar}
      <div className={`lang-transition ${phase !== "idle" ? `lang-${phase}` : ""}`}>
        {children}
      </div>
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}

export default LanguageContext;
