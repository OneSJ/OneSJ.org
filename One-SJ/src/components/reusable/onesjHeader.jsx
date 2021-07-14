import { useContext } from "react";
import { LanguageContext } from "../utilities/languageContext";
import { TranslationsContext } from "../utilities/translationsContext";
import { oneSJText } from "../utilities/texts";

const OneSJHeader = () => {
  // Translation section of code
  const languageContext = useContext(LanguageContext);
  const translationsContext = useContext(TranslationsContext);

  // Grab current language from language context
  const currentLanguage = languageContext.currentLanguage;
  // Grab saved translations from translations context
  const savedTranslations = translationsContext.translations;

  // All text to be displayed goes here
  let text = oneSJText;

  // Grab from saved translations if not English
  if (currentLanguage !== "en") {
    text = savedTranslations[oneSJText + "-" + currentLanguage];
  }

  return (
    <div className="center" style={{ marginTop: "5rem" }}>
      <h1>ONESJ</h1>
      <span
        style={{
          color: "rgb(255, 236, 69)",
          font: "1.5rem montserrat",
          textAlign: "center",
          cursor: "default",
        }}
      >
        {text}
      </span>
    </div>
  );
};

export default OneSJHeader;
