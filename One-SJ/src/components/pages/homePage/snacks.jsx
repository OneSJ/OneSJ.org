import { useState, useEffect, useContext } from "react";
import { LanguageContext } from "../../utilities/languageContext";
import { TranslationsContext } from "../../utilities/translationsContext";
import { emergencySnack, scrollSnack } from "../../utilities/texts";
import Snackbar from "@material-ui/core/Snackbar";
import SnackbarContent from "@material-ui/core/SnackbarContent";
// Slide is the animation I am using for the snacks
import Slide from "@material-ui/core/Slide";

import "../../../css/snacks.css";

// Controls the pop ups for the home page
const Snacks = ({ topRef, emergencyRef }) => {
  const [emergency, setEmergency] = useState(true);
  const [scrollTop, setScrollTop] = useState(false);

  // Handles the scrolling dimensions for when scroll to top snack should pop up
  const handleScroll = () => {
    const bottom =
      Math.ceil(window.innerHeight + window.scrollY) >=
      document.documentElement.scrollHeight - 500;
    if (bottom) {
      setScrollTop(true);
      setEmergency(false);
    } else if (!scrollTop) {
      setScrollTop(false);
    }
  };

  // Calls handleScroll whenever user scrolls on home page
  useEffect(() => {
    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Translation section of code
  const languageContext = useContext(LanguageContext);
  const translationsContext = useContext(TranslationsContext);

  // Grab current language from language context
  const currentLanguage = languageContext.currentLanguage;
  // Grab saved translations from translations context
  const savedTranslations = translationsContext.translations;

  // All text to be displayed goes here
  let emergencyText = emergencySnack;
  let scrollText = scrollSnack;

  // Grab from saved translations if not English
  if (currentLanguage !== "en") {
    emergencyText = savedTranslations[emergencySnack + "-" + currentLanguage];
    scrollText = savedTranslations[scrollSnack + "-" + currentLanguage];
  }

  return (
    <>
      <Snackbar
        className="snack"
        // Controls where snack pops up
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        autoHideDuration={15000}
        open={emergency}
        // Don't close snack if user clicks away
        onClose={(event, reason) => {
          if (reason === "clickaway") {
            return;
          }
          setEmergency(false);
        }}
        // Controls transition animations
        TransitionComponent={Slide}
      >
        <SnackbarContent
          style={{
            backgroundColor: "rgb(196, 30, 58)",
          }}
          message={emergencyText}
          onClick={() => {
            if (emergencyRef.current) {
              emergencyRef.current.scrollIntoView();
            }
          }}
        />
      </Snackbar>
      <Snackbar
        className="snack"
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        open={scrollTop}
        TransitionComponent={Slide}
        onClose={(event, reason) => {
          if (reason === "clickaway") {
            return;
          }
          setScrollTop(false);
        }}
      >
        <SnackbarContent
          message={scrollText}
          onClick={() => {
            if (topRef.current) {
              topRef.current.scrollIntoView();
            }
          }}
        />
      </Snackbar>
    </>
  );
};

export default Snacks;
