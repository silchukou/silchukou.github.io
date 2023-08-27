import { useEffect, useMemo, useState } from "react";

export default function useI18n() {
  const locales = ["en", "by"];
  const [locale, _setLocale] = useState(locales[0]);

  useEffect(() => {
    const storedLocale = localStorage.getItem("locale");

    if (
      storedLocale &&
      locales.includes(storedLocale) &&
      storedLocale !== locale
    ) {
      setLocale(storedLocale);
    }
  }, [locale]);

  const _t = useMemo(() => {
    return (key) => {
      const namespace = key.split(":")[0];
      const translation = key.split(":")[1];

      const translations = require(`src/data/locales/${locale}/${namespace}.json`);

      return translations[translation].replace(/\\n/g, "<br />");
    };
  });

  const setLocale = (locale) => {
    localStorage.setItem("locale", locale);
    _setLocale(locale);
  };

  const i18n = useMemo(() => {
    return {
      locale,
      setLocale,
      locales,
      _t,
    };
  }, [locale, _t]);

  return i18n;
}
