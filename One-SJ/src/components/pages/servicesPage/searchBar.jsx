import { useContext } from "react";
import { LanguageContext } from "../../utilities/languageContext";
import { TranslationsContext } from "../../utilities/translationsContext";
import { searchServices } from "../../utilities/texts";
import InputBase from "@material-ui/core/InputBase";

const SearchBar = ({ onSearch }) => {
  // Translation section of code
  const languageContext = useContext(LanguageContext);
  const translationsContext = useContext(TranslationsContext);

  // Grab current language from language context
  const currentLanguage = languageContext.currentLanguage;
  // Grab saved translations from translations context
  const savedTranslations = translationsContext.translations;

  // All text to be displayed goes here
  let text = searchServices;

  // Grab from saved translations if not English
  if (currentLanguage !== "en") {
    text = savedTranslations[searchServices + "-" + currentLanguage];
  }

  return (
    <InputBase
      className="searchBar boxShadow"
      placeholder={text}
      onChange={(event) => {
        onSearch(event.target.value);
      }}
    />
  );
};

export default SearchBar;
