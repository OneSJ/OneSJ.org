import { useContext } from "react";
import { LanguageContext } from "../../utilities/languageContext";
import { TranslationsContext } from "../../utilities/translationsContext";
import { showing, outOf, lowCaseServices } from "../../utilities/texts";

const ServicesShown = ({ currentPage, pageSize, total }) => {
  // Translation section of code
  const languageContext = useContext(LanguageContext);
  const translationsContext = useContext(TranslationsContext);

  // Grab current language from language context
  const currentLanguage = languageContext.currentLanguage;
  // Grab saved translations from translations context
  const savedTranslations = translationsContext.translations;

  // All text to be displayed goes here
  const lowest = total !== 0 ? currentPage * pageSize - (pageSize - 1) : 0;
  const highest =
    currentPage * pageSize > total ? total : currentPage * pageSize;
  let showingDisplay = showing;
  let outOfDisplay = outOf;
  let services = lowCaseServices;

  // Grab from saved translations if not Engish
  if (currentLanguage !== "en") {
    showingDisplay = savedTranslations[showing + "-" + currentLanguage];
    outOfDisplay = savedTranslations[outOf + "-" + currentLanguage];
    services = savedTranslations[lowCaseServices + "-" + currentLanguage];
  }

  const text =
    showingDisplay +
    " " +
    lowest +
    " - " +
    highest +
    " " +
    outOfDisplay +
    " " +
    total +
    " " +
    services;

  return <span className="servicesShown">{text}</span>;
};

export default ServicesShown;
