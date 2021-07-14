import { useContext } from "react";
import { LanguageContext } from "../../utilities/languageContext";
import { TranslationsContext } from "../../utilities/translationsContext";
import { servicesPerPage } from "../../utilities/texts";
import Form from "react-bootstrap/Form";
import RangeSlider from "react-bootstrap-range-slider";

// SFC for rendering the page size range slider
const PageSizeHandler = ({ pageSize, onPageSizeChange }) => {
  // Translation section of code
  const languageContext = useContext(LanguageContext);
  const translationsContext = useContext(TranslationsContext);

  // Grab current language from language context
  const currentLanguage = languageContext.currentLanguage;
  // Grab saved translations from translations context
  const savedTranslations = translationsContext.translations;

  // All text to be displayed goes here
  let text = servicesPerPage;

  // Grab from saved translations if not English
  if (currentLanguage !== "en") {
    text = savedTranslations[servicesPerPage + "-" + currentLanguage];
  }

  return (
    <Form className="pageSizeHandler">
      {/* Row and Columns used to make label appear on the left hand side */}
      <Form.Group>
        <Form.Label>
          {text + " "}
          <b style={{ color: "rgb(0, 127, 127)", fontSize: "1.25rem" }}>
            {pageSize}
          </b>
        </Form.Label>
        <RangeSlider
          min={10}
          max={25}
          value={pageSize}
          onChange={(e) => onPageSizeChange(e.target.value)}
        />
      </Form.Group>
    </Form>
  );
};

export default PageSizeHandler;
