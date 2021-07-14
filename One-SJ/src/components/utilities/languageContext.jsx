import { createContext } from "react";

// Context used for storing the current language
// Serves no other purpose other than rerendering app when current language changes
export const LanguageContext = createContext({
  currentLanguage: "en",
  setLanguage: () => {},
});
