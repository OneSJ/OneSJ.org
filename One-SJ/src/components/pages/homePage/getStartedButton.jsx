import { useContext } from "react";
import { LanguageContext } from "../../utilities/languageContext";
import { TranslationsContext } from "../../utilities/translationsContext";
import { getStarted } from "../../utilities/texts";
import Fab from "@material-ui/core/Fab";
import FavoriteIcon from "@material-ui/icons/Favorite";

const GetStartedButton = ({ history }) => {
  // Translation section of code
  const languageContext = useContext(LanguageContext);
  const translationsContext = useContext(TranslationsContext);

  // Grab current language from language context
  const currentLanguage = languageContext.currentLanguage;
  // Grab saved translations from translations context
  const savedTranslations = translationsContext.translations;

  // All text to be displayed goes here
  let text = getStarted;

  // Grab from saved translations if not English
  if (currentLanguage !== "en") {
    text = savedTranslations[getStarted + "-" + currentLanguage];
  }

  return (
    <Fab
      size="large"
      variant="extended"
      color="secondary"
      // Using history to direct user to different routes
      onClick={() => history.push("/services")}
    >
      <FavoriteIcon />
      {text}
    </Fab>
  );
};

export default GetStartedButton;
