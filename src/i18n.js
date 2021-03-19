import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import translationDE from "./translations/de/resource.json";
import translationEN from "./translations/en/resource.json";
import translationSI from "./translations/si/resource.json";

// translate config
var langSelected = localStorage.getItem("lng"); //remove token from storage
if (langSelected == null) {
  localStorage.setItem("lng", "si");
}

// the translations
const resources = {
  en: {
    translation: translationEN
  },
  si: {
    translation: translationSI
  },
  de: {
    translation: translationDE
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: langSelected == null ? "si" : langSelected,
    keySeparator: false, // we do not use keys in form messages.welcome
    interpolation: {
      escapeValue: false // react already protects from xss
    }
  });

export default i18n;
