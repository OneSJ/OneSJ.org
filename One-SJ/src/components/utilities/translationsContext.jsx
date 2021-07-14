import { createContext } from "react";

// Context used for storing already translated text
// Starts off empty and populates as user switches locales during session
export const TranslationsContext = createContext({
  translations: {},
  setTranslations: () => {},
});
