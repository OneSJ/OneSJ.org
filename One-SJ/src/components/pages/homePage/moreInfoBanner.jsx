import { useContext } from "react";
import { LanguageContext } from "../../utilities/languageContext";
import { TranslationsContext } from "../../utilities/translationsContext";
import {
  moreInfoBannerHeader1,
  moreInfoBannerParagraph1,
  moreInfoBannerHeader2,
  moreInfoBannerParagraph2,
} from "../../utilities/texts";
import FindServicesButton from "./findServicesButton";
import { useHistory } from "react-router-dom";

import logo from "../../../img/logo.png";
import head from "../../../img/headsilhouette.svg";

const MoreInfoBanner = () => {
  // Translation section of code
  const languageContext = useContext(LanguageContext);
  const translationsContext = useContext(TranslationsContext);

  // Grab current language from language context
  const currentLanguage = languageContext.currentLanguage;
  // Grab saved translations from translations context
  const savedTranslations = translationsContext.translations;

  // All text to be displayed goes here
  let header1 = moreInfoBannerHeader1;
  let paragraph1 = moreInfoBannerParagraph1;
  let header2 = moreInfoBannerHeader2;
  let paragraph2 = moreInfoBannerParagraph2;

  // Grab from saved translations if not English
  if (currentLanguage !== "en") {
    header1 = savedTranslations[moreInfoBannerHeader1 + "-" + currentLanguage];
    paragraph1 =
      savedTranslations[moreInfoBannerParagraph1 + "-" + currentLanguage];
    header2 = savedTranslations[moreInfoBannerHeader2 + "-" + currentLanguage];
    paragraph2 =
      savedTranslations[moreInfoBannerParagraph2 + "-" + currentLanguage];
  }

  return (
    <div className="informationBanner center">
      <div id="more-info" className="infoBox center">
        <h3>{header1}</h3>
        <hr />
        <p>{paragraph1}</p>
        <FindServicesButton history={useHistory()} />
      </div>
      <img
        className="home boxShadow"
        src={logo}
        style={{
          borderRadius: "25px",
        }}
      />
      <div className="infoBox center">
        <h3>{header2}</h3>
        <hr />
        <p>{paragraph2}</p>
      </div>
      <img className="home" src={head} />
    </div>
  );
};

export default MoreInfoBanner;
