import React, { createContext, useState, useContext, useCallback, useMemo } from "react";
import translations from "../translations";

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState("fr");

  const toggleLanguage = useCallback(() => {
    setLanguage((prev) => (prev === "en" ? "fr" : "en"));
  }, []);

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
    () => ({ language, toggleLanguage, t }),
    [language, toggleLanguage, t],
  );

  return (
    <LanguageContext.Provider value={ctx}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}

export default LanguageContext;
