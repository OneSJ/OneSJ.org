import { useContext } from "react";
import { LanguageContext } from "../utilities/languageContext";
import { TranslationsContext } from "../utilities/translationsContext";
import { translateTexts, getDataAndCategories } from "../utilities/constants";
import {
  home,
  services,
  aboutUs,
  disclaimer,
  feedback,
  allTexts,
} from "../utilities/texts";
import { NavDropdown, Navbar, Nav } from "react-bootstrap";
import LanguageIcon from "@material-ui/icons/Language";
import { useLocation } from "react-router-dom";

import "../../css/navigationBar.css";

const NavigationBar = () => {
  // Translation section of code
  const languageContext = useContext(LanguageContext);
  const translationsContext = useContext(TranslationsContext);

  // Grab current language from language context
  const currentLanguage = languageContext.currentLanguage;
  // Used for displaying correct full language name
  const fullLanguageName = sessionStorage.getItem("fullLanguageName");
  // Grab saved translations from translations context
  const savedTranslations = translationsContext.translations;

  // All text to be displayed goes here
  let homeDisplay = home;
  let servicesDisplay = services;
  let aboutUsDisplay = aboutUs;
  let disclaimerDisplay = disclaimer;
  let feedbackDisplay = feedback;

  // Grab from saved translations if not English
  if (currentLanguage !== "en") {
    homeDisplay = savedTranslations[home + "-" + currentLanguage];
    servicesDisplay = savedTranslations[services + "-" + currentLanguage];
    aboutUsDisplay = savedTranslations[aboutUs + "-" + currentLanguage];
    disclaimerDisplay = savedTranslations[disclaimer + "-" + currentLanguage];
    feedbackDisplay = savedTranslations[feedback + "-" + currentLanguage];
  }

  // Handler for language changing
  const handleLanguageChange = (newLanguage) => {
    /* ------------------------ IF NEW LANGUAGE IS NOT ENGLISH, PREPARE FOR POSSIBILITY OF TRANSLATING ------------------------ */
    if (newLanguage !== "en") {
      // Set full language name before beginning
      if (newLanguage === "es")
        sessionStorage.setItem("fullLanguageName", "Español");
      if (newLanguage === "vi")
        sessionStorage.setItem("fullLanguageName", "Tiếng Việt");

      /* ------------------------ IF FIRST TEXT IS NOT ALREADY TRANSLATED, BEGIN TRANSLATING ------------------------ */
      if (!(allTexts[0] + "-" + newLanguage in savedTranslations)) {
        const sessionData = sessionStorage.getItem("data");
        const sessionCategories = sessionStorage.getItem("categories");

        // Only need to translate notes from data and category names from categories
        let notes = [];
        let categoryNames = [];

        // Check if services have already been stored in session storage
        if (sessionData === null || sessionCategories === null) {
          /* ------------------------ IF NOT IN SESSION STORAGE, GRAB DATA AND CATEGORIES FROM API AND TRANSLATE ------------------------ */
          getDataAndCategories()
            .then((servicesResponse) => {
              // Storing data and categories in session storage
              sessionStorage.setItem(
                "data",
                JSON.stringify(servicesResponse[0])
              );
              sessionStorage.setItem(
                "categories",
                JSON.stringify(servicesResponse[1])
              );

              // Only need to translate the notes from the services
              notes = servicesResponse[0].map((service) => service.notes);
              // Only need to translate category names
              categoryNames = servicesResponse[1].map(
                (category) => category.name
              );

              // Send all translation requests
              return Promise.all([
                translateTexts(notes, newLanguage),
                translateTexts(categoryNames, newLanguage),
                translateTexts(allTexts, newLanguage),
              ]);
            })
            .then((responses) => {
              // Store translated notes
              const translatedNotes = responses[0];
              for (let i = 0; i < notes.length; i++) {
                savedTranslations[notes[i] + "-" + newLanguage] =
                  translatedNotes[i].translatedText;
              }
              // Store translated category names
              const translatedCategoryNames = responses[1];
              for (let i = 0; i < categoryNames.length; i++) {
                savedTranslations[categoryNames[i] + "-" + newLanguage] =
                  translatedCategoryNames[i].translatedText;
              }
              // Store all translated texts
              const translatedTexts = responses[2];
              for (let i = 0; i < allTexts.length; i++) {
                savedTranslations[allTexts[i] + "-" + newLanguage] =
                  translatedTexts[i].translatedText;
              }

              // Store all the new translations into translationsContext and session storage
              translationsContext.setTranslations(savedTranslations);
              sessionStorage.setItem(
                "translations",
                JSON.stringify(savedTranslations)
              );

              // Setting the new language in the language context and local storage
              // This is what triggers the rerender to update the languages
              sessionStorage.setItem("currentLanguage", newLanguage);
              languageContext.setLanguage(newLanguage);
            });
        } else {
          /* ------------------------ IF ALREADY IN SESSION STORAGE, GRAB FROM THERE AND BEGIN TRANSLATING ------------------------ */
          // Only need to translate the notes from the services
          notes = JSON.parse(sessionData).map((service) => service.notes);
          // Only need to translate category names
          categoryNames = JSON.parse(sessionCategories).map(
            (category) => category.name
          );

          // Send all translation requests
          Promise.all([
            translateTexts(notes, newLanguage),
            translateTexts(categoryNames, newLanguage),
            translateTexts(allTexts, newLanguage),
          ]).then((responses) => {
            // Store translated notes
            const translatedNotes = responses[0];
            for (let i = 0; i < notes.length; i++) {
              savedTranslations[notes[i] + "-" + newLanguage] =
                translatedNotes[i].translatedText;
            }
            // Store translated category names
            const translatedCategoryNames = responses[1];
            for (let i = 0; i < categoryNames.length; i++) {
              savedTranslations[categoryNames[i] + "-" + newLanguage] =
                translatedCategoryNames[i].translatedText;
            }
            // Store all translated texts
            const translatedTexts = responses[2];
            for (let i = 0; i < allTexts.length; i++) {
              savedTranslations[allTexts[i] + "-" + newLanguage] =
                translatedTexts[i].translatedText;
            }

            // Store all the new translations into translationsContext and session storage
            translationsContext.setTranslations(savedTranslations);
            sessionStorage.setItem(
              "translations",
              JSON.stringify(savedTranslations)
            );

            // Setting the new language in the language context and local storage
            // This is what triggers the rerender to update the languages
            sessionStorage.setItem("currentLanguage", newLanguage);
            languageContext.setLanguage(newLanguage);
          });
        }
      } else {
        /* ------------------------ IF ALREADY TRANSLATED, NO NEED TO TRANSLATE ANYTHING. JUST SET THE NEW LANGUAGE ------------------------ */
        // Setting the new language in the language context and local storage
        sessionStorage.setItem("currentLanguage", newLanguage);
        languageContext.setLanguage(newLanguage);
      }
    } else {
      /* ------------------------ IF NEW LANGUAGE IS ENGLISH, NO NEED TO TRANSLATE ANYTHING. JUST SET THE NEW LANGUAGE ------------------------ */
      sessionStorage.setItem("fullLanguageName", "English");
      // Setting the new language in the language context and local storage
      sessionStorage.setItem("currentLanguage", newLanguage);
      languageContext.setLanguage(newLanguage);
    }
  };

  // Used for determing the current path so we can display the correct active location
  const location = useLocation();
  return (
    <Navbar className="navigationBar" fixed="top" expand="md">
      <Navbar.Brand className="textShadow" href="/">
        OneSJ
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="bar" />
      <Navbar.Collapse id="bar" className="mr-auto order-2">
        <Nav className="mr-auto">
          <Nav.Link href="/" active={location.pathname === "/"}>
            {homeDisplay}
          </Nav.Link>
          <Nav.Link href="/services" active={location.pathname === "/services"}>
            {servicesDisplay}
          </Nav.Link>
          <Nav.Link href="/about-us" active={location.pathname === "/about-us"}>
            {aboutUsDisplay}
          </Nav.Link>
          <Nav.Link
            href="/disclaimer"
            active={location.pathname === "/disclaimer"}
          >
            {disclaimerDisplay}
          </Nav.Link>
          <Nav.Link href="/feedback" active={location.pathname === "/feedback"}>
            {feedbackDisplay}
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
      {/* Classes here are used to keep the Internationalization icon on right side */}
      <Nav className="ml-auto order-1">
        <NavDropdown
          onSelect={(eventKey) => {
            handleLanguageChange(eventKey);
          }}
          title={
            <>
              <LanguageIcon
                style={{
                  marginRight: ".25rem",
                  marginBottom: "2px",
                  fontSize: "1.25rem",
                }}
              />
              {fullLanguageName}
            </>
          }
          id="dropdown"
          alignRight
        >
          <NavDropdown.Item eventKey="en" active={currentLanguage === "en"}>
            English
          </NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item eventKey="es" active={currentLanguage === "es"}>
            Español
          </NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item eventKey="vi" active={currentLanguage === "vi"}>
            Tiếng Việt
          </NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Navbar>
  );
};

export default NavigationBar;
