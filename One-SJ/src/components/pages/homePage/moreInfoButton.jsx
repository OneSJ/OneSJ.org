import { useContext } from "react";
import { LanguageContext } from "../../utilities/languageContext";
import { TranslationsContext } from "../../utilities/translationsContext";
import { moreInfo } from "../../utilities/texts";
import Fab from "@material-ui/core/Fab";
import InfoIcon from "@material-ui/icons/Info";

const MoreInfoButton = () => {
  // Translation section of code
  const languageContext = useContext(LanguageContext);
  const translationsContext = useContext(TranslationsContext);

  // Grab current language from language context
  const currentLanguage = languageContext.currentLanguage;
  // Grab saved translations from translations context
  const savedTranslations = translationsContext.translations;

  // All text to be displayed goes here
  let text = moreInfo;

  // Grab from saved translations if not English
  if (currentLanguage !== "en") {
    text = savedTranslations[moreInfo + "-" + currentLanguage];
  }

  return (
    <Fab size="large" variant="extended" color="primary" href="/#more-info">
      <InfoIcon />
      {text}
    </Fab>
  );
};

export default MoreInfoButton;
