import { useState } from "react";
import { LanguageContext } from "./components/utilities/languageContext";
import { TranslationsContext } from "./components/utilities/translationsContext";
import ScrollToTop from "./components/utilities/scrollToTop";
import { Switch, Route } from "react-router-dom";
import Home from "./components/pages/homePage/home";
import Services from "./components/pages/servicesPage/services";
import AboutUs from "./components/pages/aboutUsPage/aboutUs";
import Disclaimer from "./components/pages/disclaimerPage/disclaimer";
import Feedback from "./components/pages/feedbackPage/feedback";
import Privacy from "./components/pages/privacyStatementPage/privacy";

import "./css/app.css";

const App = () => {
  // Set default language to English
  if (sessionStorage.getItem("currentLanguage") === null) {
    sessionStorage.setItem("currentLanguage", "en");
    sessionStorage.setItem("fullLanguageName", "English");
  }

  const [state, setState] = useState({
    currentLanguage: sessionStorage.getItem("currentLanguage"),
    // Repopulate translations if there are any in session storage
    translations: sessionStorage.getItem("translations")
      ? JSON.parse(sessionStorage.getItem("translations"))
      : {},
  });

  return (
    <>
      {/* Context used for rerendering app when current language changes */}
      <LanguageContext.Provider
        value={{
          currentLanguage: state.currentLanguage,
          setLanguage: (newLanguage) => {
            setState({ ...state, currentLanguage: newLanguage });
          },
        }}
      >
        {/* Context used for storing text that has already been translated */}
        <TranslationsContext.Provider
          value={{
            translations: state.translations,
            setTranslations: (newTranslations) => {
              setState({ ...state, translations: newTranslations });
            },
          }}
        >
          {/* Script for automatically scrolling to top on any page navigation */}
          <ScrollToTop>
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/services" component={Services} />
              <Route path="/about-us" component={AboutUs} />
              <Route path="/disclaimer" component={Disclaimer} />
              <Route path="/feedback" component={Feedback} />
              <Route path="/privacy-statement" component={Privacy} />
            </Switch>
          </ScrollToTop>
        </TranslationsContext.Provider>
      </LanguageContext.Provider>
    </>
  );
};

export default App;
