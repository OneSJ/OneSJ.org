import { useContext } from "react";
import { LanguageContext } from "../../utilities/languageContext";
import { TranslationsContext } from "../../utilities/translationsContext";
import {
  emergencyBannerHeader,
  emergencyBannerParagraph,
  call,
} from "../../utilities/texts";

const EmergencyBanner = () => {
  // Translation section of code
  const languageContext = useContext(LanguageContext);
  const translationsContext = useContext(TranslationsContext);

  // Grab current language from language context
  const currentLanguage = languageContext.currentLanguage;
  // Grab saved translations from translations context
  const savedTranslations = translationsContext.translations;

  // All text to be displayed goes here
  let header = emergencyBannerHeader;
  let paragraph = emergencyBannerParagraph;
  let callDisplay = call;

  // Grab from saved translations if not English
  if (currentLanguage !== "en") {
    header = savedTranslations[emergencyBannerHeader + "-" + currentLanguage];
    paragraph =
      savedTranslations[emergencyBannerParagraph + "-" + currentLanguage];
    callDisplay = savedTranslations[call + "-" + currentLanguage];
  }

  return (
    <>
      <p
        style={{
          width: "75%",
          color: "white",
          margin: "1rem",
        }}
      >
        <i>
          <b>{header}</b>
          <br />
          {paragraph}
        </i>
      </p>
      <a
        rel="noopener noreferrer"
        href="tel:18002738255"
        style={{
          font: "2rem montserrat",
          fontWeight: "bold",
        }}
      >
        {callDisplay}
      </a>
    </>
  );
};

export default EmergencyBanner;
