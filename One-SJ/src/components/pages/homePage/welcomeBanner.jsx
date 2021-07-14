import { useContext } from "react";
import { LanguageContext } from "../../utilities/languageContext";
import { TranslationsContext } from "../../utilities/translationsContext";
import { welcomeBannerHeader, welcomeBannerText } from "../../utilities/texts";
import MoreInfoButton from "./moreInfoButton";
import GetStartedButton from "./getStartedButton";
import { useHistory } from "react-router-dom";

const WelcomeBanner = () => {
  // Translation section of code
  const languageContext = useContext(LanguageContext);
  const translationsContext = useContext(TranslationsContext);

  // Grab current language from language context
  const currentLanguage = languageContext.currentLanguage;
  // Grab saved translations from translations context
  const savedTranslations = translationsContext.translations;

  // All text to be displayed goes here
  let header = welcomeBannerHeader;
  let paragraph = welcomeBannerText;

  // Grab from saved translations if not English
  if (currentLanguage !== "en") {
    header = savedTranslations[welcomeBannerHeader + "-" + currentLanguage];
    paragraph = savedTranslations[welcomeBannerText + "-" + currentLanguage];
  }

  return (
    <div className="center" style={{ margin: "1rem" }}>
      <div className="welcomeBanner infoBox center">
        <h3 className="textShadow">{header}</h3>
        <hr />
        <p>{paragraph}</p>
        <div className="welcomeBannerButtonsContainer center">
          <MoreInfoButton />
          <GetStartedButton history={useHistory()} />
        </div>
      </div>
    </div>
  );
};

export default WelcomeBanner;
