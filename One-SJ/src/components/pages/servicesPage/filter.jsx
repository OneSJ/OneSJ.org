import { useContext } from "react";
import { LanguageContext } from "../../utilities/languageContext";
import { TranslationsContext } from "../../utilities/translationsContext";
import { categories as categoriesDisplay } from "../../utilities/texts";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

// SFC for rendering all the checkboxes for the filter
const Filter = ({ categories, onFilter }) => {
  // Translation section of code
  const languageContext = useContext(LanguageContext);
  const translationsContext = useContext(TranslationsContext);

  // All text to be displayed goes here
  let categoriesHeader = categoriesDisplay;
  let allCategories = categories;

  // Grab current language from language context
  const currentLanguage = languageContext.currentLanguage;
  // Grab saved translations from translations context
  const savedTranslations = translationsContext.translations;

  // Grab fromm saved translations if not English
  if (currentLanguage !== "en") {
    // Grab categories from session storage
    const sessionCategories = JSON.parse(sessionStorage.getItem("categories"));
    allCategories = sessionCategories;

    categoriesHeader =
      savedTranslations[categoriesDisplay + "-" + currentLanguage];
    for (let i = 0; i < allCategories.length; i++) {
      allCategories[i].name =
        savedTranslations[sessionCategories[i].name + "-" + currentLanguage];
    }
  }

  return (
    <>
      <h4 className="services">{categoriesHeader}</h4>
      <FormGroup className="filter">
        {/* Create a checkbox for each category provided */}
        {allCategories.map((category) => (
          <FormControlLabel
            className="categoryLabel"
            control={
              <Checkbox
                name={category.property_name}
                size="small"
                onChange={(e) => onFilter(e.target.name)}
              />
            }
            label={category.name}
            key={category.property_name}
          />
        ))}
      </FormGroup>
    </>
  );
};

export default Filter;
