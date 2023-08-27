import React from "react";

export const LocaleContext = React.createContext({
  locale: "en",
  locales: [],
  setLocale: () => {},
  _t: () => {},
});
