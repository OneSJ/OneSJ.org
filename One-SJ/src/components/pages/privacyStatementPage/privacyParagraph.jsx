import { useContext } from "react";
import { LanguageContext } from "../../utilities/languageContext";
import { TranslationsContext } from "../../utilities/translationsContext";
import {
  privacyHeader1,
  privacyParagraph1,
  privacyHeader2,
  privacyParagraph2,
  privacyHeader3,
  privacyParagraph3,
  privacyHeader4,
  privacyParagraph4,
  privacyBullet1,
  privacyBullet2,
  privacyBullet3,
  privacyBullet4,
  privacyBullet5,
  privacyHeader5,
  privacyParagraph5,
  privacyParagraph6,
  privacyHeader6,
  privacyParagraph7,
  privacyHeader7,
  privacyParagraph8,
  privacyParagraph9,
} from "../../utilities/texts";

const PrivacyParagraph = () => {
  // Translation section of code
  const languageContext = useContext(LanguageContext);
  const translationsContext = useContext(TranslationsContext);

  // Grab current language from language context
  const currentLanguage = languageContext.currentLanguage;
  // Grab saved translations from translations context
  const savedTranslations = translationsContext.translations;

  // All text to be displayed goes here
  let privacyHeader = privacyHeader1;
  let privacyParagraph = privacyParagraph1;

  let consentHeader = privacyHeader2;
  let consentParagraph = privacyParagraph2;

  let informationHeader = privacyHeader3;
  let informationParagraph = privacyParagraph3;

  let howWeUseInfoHeader = privacyHeader4;
  let howWeUseInfoParagraph = privacyParagraph4;
  let howWeUseInfoItem1 = privacyBullet1;
  let howWeUseInfoItem2 = privacyBullet2;
  let howWeUseInfoItem3 = privacyBullet3;
  let howWeUseInfoItem4 = privacyBullet4;
  let howWeUseInfoItem5 = privacyBullet5;

  let thirdPartyHeader = privacyHeader5;
  let thirdPartyParagraph1 = privacyParagraph5;
  let thirdPartyParagraph2 = privacyParagraph6;

  let logHeader = privacyHeader6;
  let logParagraph = privacyParagraph7;

  let minorInfoHeader = privacyHeader7;
  let minorInfoParagraph1 = privacyParagraph8;
  let minorInfoParagraph2 = privacyParagraph9;

  // Grab from saved translations if not English
  if (currentLanguage !== "en") {
    privacyHeader = savedTranslations[privacyHeader1 + "-" + currentLanguage];
    privacyParagraph =
      savedTranslations[privacyParagraph1 + "-" + currentLanguage];

    consentHeader = savedTranslations[privacyHeader2 + "-" + currentLanguage];
    consentParagraph =
      savedTranslations[privacyParagraph2 + "-" + currentLanguage];

    informationHeader =
      savedTranslations[privacyHeader3 + "-" + currentLanguage];
    informationParagraph =
      savedTranslations[privacyParagraph3 + "-" + currentLanguage];

    howWeUseInfoHeader =
      savedTranslations[privacyHeader4 + "-" + currentLanguage];
    howWeUseInfoParagraph =
      savedTranslations[privacyParagraph4 + "-" + currentLanguage];
    howWeUseInfoItem1 =
      savedTranslations[privacyBullet1 + "-" + currentLanguage];
    howWeUseInfoItem2 =
      savedTranslations[privacyBullet2 + "-" + currentLanguage];
    howWeUseInfoItem3 =
      savedTranslations[privacyBullet3 + "-" + currentLanguage];
    howWeUseInfoItem4 =
      savedTranslations[privacyBullet4 + "-" + currentLanguage];
    howWeUseInfoItem5 =
      savedTranslations[privacyBullet5 + "-" + currentLanguage];

    thirdPartyHeader =
      savedTranslations[privacyHeader5 + "-" + currentLanguage];
    thirdPartyParagraph1 =
      savedTranslations[privacyParagraph5 + "-" + currentLanguage];
    thirdPartyParagraph2 =
      savedTranslations[privacyParagraph6 + "-" + currentLanguage];

    logHeader = savedTranslations[privacyHeader6 + "-" + currentLanguage];
    logParagraph = savedTranslations[privacyParagraph7 + "-" + currentLanguage];

    minorInfoHeader = savedTranslations[privacyHeader7 + "-" + currentLanguage];
    minorInfoParagraph1 =
      savedTranslations[privacyParagraph8 + "-" + currentLanguage];
    minorInfoParagraph2 =
      savedTranslations[privacyParagraph9 + "-" + currentLanguage];
  }

  return (
    <>
      <div className="privacyContainer center">
        <h3>{privacyHeader}</h3>
        <hr />
        <p>{privacyParagraph}</p>

        <h4>{consentHeader}</h4>
        <p>{consentParagraph}</p>

        <h4>{informationHeader}</h4>
        <p>{informationParagraph}</p>

        <h4>{howWeUseInfoHeader}</h4>
        <p>
          {howWeUseInfoParagraph}
          <ul>
            <li>{howWeUseInfoItem1}</li>
            <li>{howWeUseInfoItem2}</li>
            <li>{howWeUseInfoItem3}</li>
            <li>{howWeUseInfoItem4}</li>
            <li>{howWeUseInfoItem5}</li>
          </ul>
        </p>

        <h4>{thirdPartyHeader}</h4>
        <p>{thirdPartyParagraph1}</p>
        <p>{thirdPartyParagraph2}</p>

        <h4>{logHeader}</h4>
        <p>{logParagraph}</p>

        <h4>{minorInfoHeader}</h4>
        <p>{minorInfoParagraph1}</p>
        <p>{minorInfoParagraph2}</p>
      </div>
    </>
  );
};

export default PrivacyParagraph;
