import { useContext } from "react";
import { LanguageContext } from "../../utilities/languageContext";
import { TranslationsContext } from "../../utilities/translationsContext";
import {
  feedbackHeader1,
  feedbackParagraph1,
  form,
  feedbackParagraph2,
} from "../../utilities/texts";

const FeedbackParagraph = () => {
  // Translation section of code
  const languageContext = useContext(LanguageContext);
  const translationsContext = useContext(TranslationsContext);

  // Grab current language from language context
  const currentLanguage = languageContext.currentLanguage;
  // Grab saved translations from translations context
  const savedTranslations = translationsContext.translations;

  // All text to be displayed goes here
  let contactUsHeader = feedbackHeader1;
  let questionsParagraph = feedbackParagraph1;
  let formDisplay = form;
  let contactUsParagraph = feedbackParagraph2;

  // Grab from saved translations if not English
  if (currentLanguage !== "en") {
    contactUsHeader =
      savedTranslations[feedbackHeader1 + "-" + currentLanguage];
    questionsParagraph =
      savedTranslations[feedbackParagraph1 + "-" + currentLanguage];
    formDisplay = savedTranslations[form + "-" + currentLanguage];
    contactUsParagraph =
      savedTranslations[feedbackParagraph2 + "-" + currentLanguage];
  }

  return (
    <>
      <div className="feedbackParagraphContainer center">
        <h3>{contactUsHeader}</h3>
        <hr />
        <p>
          {questionsParagraph + " "}
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://forms.gle/hMTFsPH2cuj8mKmr5"
          >
            <b>{formDisplay} </b>
          </a>
        </p>

        <p>{contactUsParagraph}</p>
      </div>
    </>
  );
};

export default FeedbackParagraph;
