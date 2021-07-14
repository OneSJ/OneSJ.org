import { useContext } from "react";
import { LanguageContext } from "../../utilities/languageContext";
import { TranslationsContext } from "../../utilities/translationsContext";
import { findServices } from "../../utilities/texts";
import Fab from "@material-ui/core/Fab";
import SearchIcon from "@material-ui/icons/Search";

const FindServicesButton = ({ history }) => {
  // Translation section of code
  const languageContext = useContext(LanguageContext);
  const translationsContext = useContext(TranslationsContext);

  // Grab current language from language context
  const currentLanguage = languageContext.currentLanguage;
  // Grab saved translations from translations context
  const savedTranslations = translationsContext.translations;

  // All text to be displayed goes here
  let text = findServices;

  // Grab from saved translations if not English
  if (currentLanguage !== "en") {
    text = savedTranslations[findServices + "-" + currentLanguage];
  }

  return (
    <Fab
      size="large"
      variant="extended"
      color="primary"
      // Using history to direct user to different routes
      onClick={() => history.push("/services")}
    >
      <SearchIcon />
      {text}
    </Fab>
  );
};

export default FindServicesButton;
