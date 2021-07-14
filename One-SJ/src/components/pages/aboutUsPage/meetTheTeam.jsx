import { useContext } from "react";
import { LanguageContext } from "../../utilities/languageContext";
import { TranslationsContext } from "../../utilities/translationsContext";
import {
  meetTheTeamHeader,
  leadSoftwareDeveloper,
  softwareDeveloper,
  softwareProductManager,
  dataAndMarketing,
} from "../../utilities/texts";
import BioCard from "./bioCard";

import justin from "../../../img/justin_headshot.png";
import angela from "../../../img/angela_headshot.png";
import kun from "../../../img/kun_headshot.jpg";
import flor from "../../../img/flor_headshot.jpeg";

const MeetTheTeam = () => {
  // Translation section of code
  const languageContext = useContext(LanguageContext);
  const translationsContext = useContext(TranslationsContext);

  // Grab current language from language context
  const currentLanguage = languageContext.currentLanguage;
  // Grab saved translations from translations context
  const savedTranslations = translationsContext.translations;

  // All text to be displayed goes here
  let meetTheTeamDisplay = meetTheTeamHeader;
  let leadSoftware = leadSoftwareDeveloper;
  let software = softwareDeveloper;
  let softwareProduct = softwareProductManager;
  let data = dataAndMarketing;

  // Grab from saved translations if not English
  if (currentLanguage !== "en") {
    meetTheTeamDisplay =
      savedTranslations[meetTheTeamHeader + "-" + currentLanguage];
    leadSoftware =
      savedTranslations[leadSoftwareDeveloper + "-" + currentLanguage];
    software = savedTranslations[softwareDeveloper + "-" + currentLanguage];
    softwareProduct =
      savedTranslations[softwareProductManager + "-" + currentLanguage];
    data = savedTranslations[dataAndMarketing + "-" + currentLanguage];
  }

  return (
    <>
      <div className="meetTheTeamContainer center">
        <h3>{meetTheTeamDisplay}</h3>
        <hr />
      </div>

      <div className="bioCardsContainer center">
        <BioCard
          headshot={justin}
          name="Justin Mata"
          linkedin="https://www.linkedin.com/in/justin-mata-abb612161/"
          title={leadSoftware}
        />
        <BioCard
          headshot={angela}
          name="Angela Pham"
          linkedin="https://www.linkedin.com/in/angelapham01/"
          title={software}
        />
        <BioCard
          headshot={kun}
          name="Kunwarpreet Singh Behar"
          linkedin="https://www.linkedin.com/in/kunbehar/"
          title={softwareProduct}
        />
        <BioCard
          headshot={flor}
          name="Flor Sario"
          linkedin="https://www.linkedin.com/in/flori-sario/"
          title={data}
        />
      </div>
    </>
  );
};

export default MeetTheTeam;
