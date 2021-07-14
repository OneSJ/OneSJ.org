import { useContext } from "react";
import { LanguageContext } from "../utilities/languageContext";
import { TranslationsContext } from "../utilities/translationsContext";
import { privacy, disclaimer, feedback, copyright } from "../utilities/texts";
import { Navbar } from "react-bootstrap";

import logo from "../../img/logo.png";

import "../../css/footer.css";

const Footer = () => {
  // Translation section of code
  const languageContext = useContext(LanguageContext);
  const translationsContext = useContext(TranslationsContext);

  // Grab current language from language context
  const currentLanguage = languageContext.currentLanguage;
  // Grab saved translations from translations context
  const savedTranslations = translationsContext.translations;

  // All text to be displayed goes here
  let privacyDisplay = privacy;
  let disclaimerDisplay = disclaimer;
  let feedbackDisplay = feedback;
  let copyrightDisplay = copyright;

  // Grab from saved translations if not English
  if (currentLanguage !== "en") {
    privacyDisplay = savedTranslations[privacy + "-" + currentLanguage];
    disclaimerDisplay = savedTranslations[disclaimer + "-" + currentLanguage];
    feedbackDisplay = savedTranslations[feedback + "-" + currentLanguage];
    copyrightDisplay = savedTranslations[copyright + "-" + currentLanguage];
  }

  return (
    <Navbar className="footerContainer boxShadow center">
      <div className="footerBrandContainer center">
        <img className="footer boxShadow" src={logo} />
        <h3>OneSJ</h3>
      </div>
      <hr className="footer" />
      <div className="footerLinksContainer center">
        <a href="/privacy-statement">{privacyDisplay}</a>
        <a href="/disclaimer">{disclaimerDisplay}</a>
        <a href="/feedback">{feedbackDisplay}</a>
      </div>
      <span className="footer">{copyrightDisplay}</span>
    </Navbar>
  );
};

export default Footer;
