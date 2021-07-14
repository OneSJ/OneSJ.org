import { useContext } from "react";
import { LanguageContext } from "../../utilities/languageContext";
import { TranslationsContext } from "../../utilities/translationsContext";
import {
  aboutUsHeader1,
  aboutUsHeader2,
  aboutUsParagraph1_1,
  aboutUsParagraph1_2,
  aboutUsParagraph2,
  aboutUsHeader3,
  aboutUsParagraph3,
  aboutUsHeader4,
  aboutUsParagraph4_1,
  aboutUsParagraph4_2,
  aboutUsParagraph4_3,
  aboutUsParagraph4_4,
  aboutUsParagraph4_5,
  aboutUsParagraph4_6,
  aboutUsParagraph4_7,
  aboutUsParagraph4_8,
} from "../..//utilities/texts";

const AboutUsParagraph = () => {
  // Translation section of code
  const languageContext = useContext(LanguageContext);
  const translationsContext = useContext(TranslationsContext);

  // Grab current language from language context
  const currentLanguage = languageContext.currentLanguage;
  // Grab saved translations from translations context
  const savedTranslations = translationsContext.translations;

  // All text to be displayed goes here
  let moreInfoHeader = aboutUsHeader1;

  let whoWeAreHeader = aboutUsHeader2;
  let whoWeAreParagraph1_1 = aboutUsParagraph1_1;
  let whoWeAreParagraph1_2 = aboutUsParagraph1_2;
  let whoWeAreParagraph2 = aboutUsParagraph2;

  let aboutHeader = aboutUsHeader3;
  let aboutParagraph = aboutUsParagraph3;

  let thanksHeader = aboutUsHeader4;
  let thanksParagraph1 = aboutUsParagraph4_1;
  let thanksParagraph2 = aboutUsParagraph4_2;
  let thanksParagraph3 = aboutUsParagraph4_3;
  let thanksParagraph4 = aboutUsParagraph4_4;
  let thanksParagraph5 = aboutUsParagraph4_5;
  let thanksParagraph6 = aboutUsParagraph4_6;
  let thanksParagraph7 = aboutUsParagraph4_7;
  let thanksParagraph8 = aboutUsParagraph4_8;

  // Grab from saved translations if not English
  if (currentLanguage !== "en") {
    moreInfoHeader = savedTranslations[aboutUsHeader1 + "-" + currentLanguage];
    whoWeAreHeader = savedTranslations[aboutUsHeader2 + "-" + currentLanguage];
    whoWeAreParagraph1_1 =
      savedTranslations[aboutUsParagraph1_1 + "-" + currentLanguage];
    whoWeAreParagraph1_2 =
      savedTranslations[aboutUsParagraph1_2 + "-" + currentLanguage];
    whoWeAreParagraph2 =
      savedTranslations[aboutUsParagraph2 + "-" + currentLanguage];
    aboutHeader = savedTranslations[aboutUsHeader3 + "-" + currentLanguage];
    aboutParagraph =
      savedTranslations[aboutUsParagraph3 + "-" + currentLanguage];
    thanksHeader = savedTranslations[aboutUsHeader4 + "-" + currentLanguage];
    thanksParagraph1 =
      savedTranslations[aboutUsParagraph4_1 + "-" + currentLanguage];
    thanksParagraph2 =
      savedTranslations[aboutUsParagraph4_2 + "-" + currentLanguage];
    thanksParagraph3 =
      savedTranslations[aboutUsParagraph4_3 + "-" + currentLanguage];
    thanksParagraph4 =
      savedTranslations[aboutUsParagraph4_4 + "-" + currentLanguage];
    thanksParagraph5 =
      savedTranslations[aboutUsParagraph4_5 + "-" + currentLanguage];
    thanksParagraph6 =
      savedTranslations[aboutUsParagraph4_6 + "-" + currentLanguage];
    thanksParagraph7 =
      savedTranslations[aboutUsParagraph4_7 + "-" + currentLanguage];
    thanksParagraph8 =
      savedTranslations[aboutUsParagraph4_8 + "-" + currentLanguage];
  }

  return (
    <>
      <div className="aboutUsParagraphContainer center">
        <h3>{moreInfoHeader}</h3>
        <hr />
        <h4>{whoWeAreHeader}</h4>
        <p>
          {whoWeAreParagraph1_1}
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://www.motisanjose.org/"
          >
            MOTI
          </a>
          {whoWeAreParagraph1_2}
        </p>
        <p>{whoWeAreParagraph2}</p>

        <h4>{aboutHeader}</h4>
        <p>{aboutParagraph}</p>

        <h4>{thanksHeader}</h4>
        {/* Needed to break up the paragraph to allow for anchor use */}
        <p>
          {thanksParagraph1 + " "}
          <a
            className="aboutUs"
            rel="noopener noreferrer"
            target="_blank"
            href="https://carto.com/"
          >
            CARTO
          </a>
          {" " + thanksParagraph2 + " "}
          <a
            className="aboutUs"
            rel="noopener noreferrer"
            target="_blank"
            href="https://bayareacommunity.org/#/"
          >
            BayAreaCommunity.org
          </a>
          {" " + thanksParagraph3 + " "}
          <a
            className="aboutUs"
            rel="noopener noreferrer"
            target="_blank"
            href="https://www.unboxproject.org/community"
          >
            unBox
          </a>
          {" " + thanksParagraph4 + " "}
          <a
            className="aboutUs"
            rel="noopener noreferrer"
            target="_blank"
            href="https://www.codeforsanjose.org/"
          >
            Code for San Jose
          </a>
          {" " + thanksParagraph5 + " "}
          <a
            className="aboutUs"
            rel="noopener noreferrer"
            target="_blank"
            href="https://www.google.org/"
          >
            Google.org
          </a>
          {thanksParagraph6 + " "}
          <a
            className="aboutUs"
            rel="noopener noreferrer"
            target="_blank"
            href="https://www.sap.com/index.html"
          >
            SAP
          </a>
          {thanksParagraph7 + " "}
          <a
            className="aboutUs"
            rel="noopener noreferrer"
            target="_blank"
            href="https://www.paypal.com/us/home"
          >
            PayPal
          </a>
          {" " + thanksParagraph8}
        </p>
      </div>
    </>
  );
};

export default AboutUsParagraph;
