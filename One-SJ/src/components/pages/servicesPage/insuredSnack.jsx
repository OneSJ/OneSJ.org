import { useState, useContext } from "react";
import { LanguageContext } from "../../utilities/languageContext";
import { TranslationsContext } from "../../utilities/translationsContext";
import { insuredSnack } from "../../utilities/texts";
import Snackbar from "@material-ui/core/Snackbar";
import SnackbarContent from "@material-ui/core/SnackbarContent";
// Slide is the animation I am using for the snacks
import Slide from "@material-ui/core/Slide";

import "../../../css/snacks.css";

// Controls the pop ups for the home page
const InsuredSnack = () => {
  const [active, setActive] = useState(true);

  // Translation section of code
  const languageContext = useContext(LanguageContext);
  const translationsContext = useContext(TranslationsContext);

  // Grab current language from language context
  const currentLanguage = languageContext.currentLanguage;
  // Grab saved translations from translations context
  const savedTranslations = translationsContext.translations;

  // All text to be displayed goes here
  let text = insuredSnack;

  // Grab fromm saved translations if not English
  if (currentLanguage !== "en") {
    text = savedTranslations[insuredSnack + "-" + currentLanguage];
  }

  return (
    <>
      <Snackbar
        className="snack"
        // Controls where snack pops up
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        autoHideDuration={15000}
        open={active}
        // Don't close snack if user clicks away
        onClose={(event, reason) => {
          if (reason === "clickaway") {
            return;
          }
          setActive(false);
        }}
        // Controls transition animations
        TransitionComponent={Slide}
      >
        <SnackbarContent
          style={{
            backgroundColor: "rgb(2,117,216)",
          }}
          message={text}
          onClick={() => {
            setActive(false);
            window.open(
              "https://www.dmhc.ca.gov/HealthCareinCalifornia/LoworNo-IncomeOptionsandTheUninsured.aspx",
              "_blank",
              "noopener,noreferrer"
            );
          }}
        />
      </Snackbar>
    </>
  );
};

export default InsuredSnack;
