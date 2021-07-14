import { useContext } from "react";
import { LanguageContext } from "../../utilities/languageContext";
import { TranslationsContext } from "../../utilities/translationsContext";
import {
  disclaimer,
  disclaimerParagraph1,
  disclaimerParagraph2,
  disclaimerParagraph3,
} from "../../utilities/texts";

const DisclaimerParagraph = () => {
  // Translation section of code
  const languageContext = useContext(LanguageContext);
  const translationsContext = useContext(TranslationsContext);

  // Grab current language from language context
  const currentLanguage = languageContext.currentLanguage;
  // Grab saved translations from translations context
  const savedTranslations = translationsContext.translations;

  // All text to be displayed goes here
  let disclaimerDisplay = disclaimer;
  let volunteerParagraph = disclaimerParagraph1;
  let liabilityParagraph = disclaimerParagraph2;
  let modifyParagraph = disclaimerParagraph3;

  // Grab from saved translations if not English
  if (currentLanguage !== "en") {
    disclaimerDisplay = savedTranslations[disclaimer + "-" + currentLanguage];
    volunteerParagraph =
      savedTranslations[disclaimerParagraph1 + "-" + currentLanguage];
    liabilityParagraph =
      savedTranslations[disclaimerParagraph2 + "-" + currentLanguage];
    modifyParagraph =
      savedTranslations[disclaimerParagraph3 + "-" + currentLanguage];
  }

  return (
    <>
      <div className="disclaimerParagraphContainer center">
        <h3>{disclaimerDisplay}</h3>
        <hr />
        <p>{volunteerParagraph}</p>

        <p>{liabilityParagraph}</p>

        <p>{modifyParagraph}</p>
      </div>
    </>
  );
};

export default DisclaimerParagraph;
