import { useState, useContext } from "react";
import { LanguageContext } from "../../utilities/languageContext";
import { TranslationsContext } from "../../utilities/translationsContext";
import {
  mentalHealth,
  website,
  address,
  getDirections,
  phoneNumber,
  email,
  close,
} from "../../utilities/texts";
import Card from "react-bootstrap/Card";
import ModalData from "./modalData";

// Component that renders cards based on the data given too it
const CardData = ({ data }) => {
  // Translation section of code
  const languageContext = useContext(LanguageContext);
  const translationsContext = useContext(TranslationsContext);

  // Grab current language from language context
  const currentLanguage = languageContext.currentLanguage;
  // Grab saved translations from translations context
  const savedTranslations = translationsContext.translations;

  // All text to be displayed goes here
  let mentalHealthHeader = mentalHealth;
  let text = data.notes;
  // Strictly for passing to Modal and Map, limiting number of imports
  let websiteDisplay = website;
  let addressDisplay = address;
  let getDirectionsDisplay = getDirections;
  let phoneNumberDisplay = phoneNumber;
  let emailDisplay = email;
  let closeDisplay = close;

  // Grab from saved translations if not English
  if (currentLanguage !== "en") {
    mentalHealthHeader =
      savedTranslations[mentalHealth + "-" + currentLanguage];
    text = savedTranslations[data.notes + "-" + currentLanguage];
    websiteDisplay = savedTranslations[website + "-" + currentLanguage];
    addressDisplay = savedTranslations[address + "-" + currentLanguage];
    getDirectionsDisplay =
      savedTranslations[getDirections + "-" + currentLanguage];
    phoneNumberDisplay = savedTranslations[phoneNumber + "-" + currentLanguage];
    emailDisplay = savedTranslations[email + "-" + currentLanguage];
    closeDisplay = savedTranslations[close + "-" + currentLanguage];
  }

  const [hovered, setHovered] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleModalClose = () => {
    setShowModal(false);
  };

  return (
    <>
      {/* Renders the modal only when the card is clicked */}
      <ModalData
        data={data}
        website={websiteDisplay}
        address={addressDisplay}
        getDirections={getDirectionsDisplay}
        phoneNumber={phoneNumberDisplay}
        email={emailDisplay}
        close={closeDisplay}
        setShow={showModal}
        onClose={handleModalClose}
      />
      <Card
        className="data boxShadow"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onClick={() => setShowModal(true)}
        border={hovered ? "primary" : ""}
      >
        <Card.Header className="textShadow">{mentalHealthHeader}</Card.Header>
        <Card.Body className="center">
          <Card.Title>{data.provider_name}</Card.Title>
          <Card.Text>{text}</Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};

export default CardData;
