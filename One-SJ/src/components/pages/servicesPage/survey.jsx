import { useState, useEffect, useContext } from "react";
import { LanguageContext } from "../../utilities/languageContext";
import { TranslationsContext } from "../../utilities/translationsContext";
import {
  halfRating,
  oneRating,
  oneHalfRating,
  twoRating,
  twoHalfRating,
  threeRating,
  threeHalfRating,
  fourRating,
  fourHalfRating,
  fiveRating,
  surveyTitle,
  surveyRating,
  ableToFindQuestion,
  ableToFindAnswer1,
  ableToFindAnswer2,
  ableToFindAnswer3,
  wouldRecommendQuestion,
  wouldRecommendAnswer1,
  wouldRecommendAnswer2,
  surveyTextArea,
  submitButton,
} from "../../utilities/texts";
import Rating from "@material-ui/lab/Rating";
import {
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
} from "@material-ui/core";
import { Modal, Form } from "react-bootstrap";
import Fab from "@material-ui/core/Fab";
import SendIcon from "@material-ui/icons/Send";
import { submitSurvey } from "../../utilities/constants";

import "../../../css/survey.css";

// SFC for rendering the modal when a card is clicked. This will show a more in depth description of each service
const Survey = () => {
  const [show, setShow] = useState(false);
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(-1);
  const [ableToFind, setAbleToFind] = useState("");
  const [wouldRecommend, setWouldRecommend] = useState("");
  const [freeResponse, setFreeResponse] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => setShow(true), 60000);
    return () => clearTimeout(timer);
  }, []);

  // Translation section of code
  const languageContext = useContext(LanguageContext);
  const translationsContext = useContext(TranslationsContext);

  // Grab current language from language context
  const currentLanguage = languageContext.currentLanguage;
  // Grab saved translations from translations context
  const savedTranslations = translationsContext.translations;

  // All text to be displayed goes here
  let labels = {
    0.5: halfRating,
    1: oneRating,
    1.5: oneHalfRating,
    2: twoRating,
    2.5: twoHalfRating,
    3: threeRating,
    3.5: threeHalfRating,
    4: fourRating,
    4.5: fourHalfRating,
    5: fiveRating,
  };
  let title = surveyTitle;
  let howWouldRate = surveyRating;
  let wereAbleToFind = ableToFindQuestion;
  let wereAbleToFindAnswer1 = ableToFindAnswer1;
  let wereAbleToFindAnswer2 = ableToFindAnswer2;
  let wereAbleToFindAnswer3 = ableToFindAnswer3;
  let wouldYouRecommend = wouldRecommendQuestion;
  let wouldYouRecommendAnswer1 = wouldRecommendAnswer1;
  let wouldYouRecommendAnswer2 = wouldRecommendAnswer2;
  let textArea = surveyTextArea;
  let submit = submitButton;

  // Grab from saved translations if not English
  if (currentLanguage !== "en") {
    labels[0.5] = savedTranslations[labels[0.5] + "-" + currentLanguage];
    labels[1] = savedTranslations[labels[1] + "-" + currentLanguage];
    labels[1.5] = savedTranslations[labels[1.5] + "-" + currentLanguage];
    labels[2] = savedTranslations[labels[2] + "-" + currentLanguage];
    labels[2.5] = savedTranslations[labels[2.5] + "-" + currentLanguage];
    labels[3] = savedTranslations[labels[3] + "-" + currentLanguage];
    labels[3.5] = savedTranslations[labels[3.5] + "-" + currentLanguage];
    labels[4] = savedTranslations[labels[4] + "-" + currentLanguage];
    labels[4.5] = savedTranslations[labels[4.5] + "-" + currentLanguage];
    labels[5] = savedTranslations[labels[5] + "-" + currentLanguage];
    title = savedTranslations[title + "-" + currentLanguage];
    howWouldRate = savedTranslations[howWouldRate + "-" + currentLanguage];
    wereAbleToFind = savedTranslations[wereAbleToFind + "-" + currentLanguage];
    wereAbleToFindAnswer1 =
      savedTranslations[wereAbleToFindAnswer1 + "-" + currentLanguage];
    wereAbleToFindAnswer2 =
      savedTranslations[wereAbleToFindAnswer2 + "-" + currentLanguage];
    wereAbleToFindAnswer3 =
      savedTranslations[wereAbleToFindAnswer3 + "-" + currentLanguage];
    wouldYouRecommend =
      savedTranslations[wouldYouRecommend + "-" + currentLanguage];
    wouldYouRecommendAnswer1 =
      savedTranslations[wouldYouRecommendAnswer1 + "-" + currentLanguage];
    wouldYouRecommendAnswer2 =
      savedTranslations[wouldYouRecommendAnswer2 + "-" + currentLanguage];
    textArea = savedTranslations[textArea + "-" + currentLanguage];
    submit = savedTranslations[submit + "-" + currentLanguage];
  }

  return (
    <Modal show={show} onHide={() => setShow(false)} size="md" centered>
      <Modal.Header closeButton>
        <Modal.Title className="textShadow">{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body className="surveyModal">
        <div className="center">
          <h4>{howWouldRate}</h4>
          <Rating
            name="rating"
            size="large"
            value={rating}
            precision={0.5}
            onChange={(event, value) => setRating(value)}
            onChangeActive={(event, value) => setHover(value)}
          />
          {rating !== null && (
            <p className="rating">{labels[hover !== -1 ? hover : rating]}</p>
          )}
          <FormControl component="fieldset">
            <FormLabel className="surveyLabel" component="legend">
              {wereAbleToFind}
            </FormLabel>
            <RadioGroup
              className="surveyRadio"
              aria-label="able_to_find"
              name="able_to_find"
              value={ableToFind}
              onChange={(event, value) => setAbleToFind(value)}
            >
              <FormControlLabel
                value="I didn''t find any services right for me"
                control={<Radio />}
                label={wereAbleToFindAnswer1}
              />
              <FormControlLabel
                value="I found a few good results, but I couldn''t tell which one I should choose"
                control={<Radio />}
                label={wereAbleToFindAnswer2}
              />
              <FormControlLabel
                value="I found exactly what I needed"
                control={<Radio />}
                label={wereAbleToFindAnswer3}
              />
            </RadioGroup>
          </FormControl>
          <FormControl component="fieldset">
            <FormLabel className="surveyLabel" component="legend">
              {wouldYouRecommend}
            </FormLabel>
            <RadioGroup
              className="surveyRadio"
              aria-label="would_recommend"
              name="would_recommend"
              value={wouldRecommend}
              onChange={(event, value) => setWouldRecommend(value)}
            >
              <FormControlLabel
                value="Yes"
                control={<Radio />}
                label={wouldYouRecommendAnswer1}
              />
              <FormControlLabel
                value="No"
                control={<Radio />}
                label={wouldYouRecommendAnswer2}
              />
            </RadioGroup>
          </FormControl>
          {rating < 4.5 && rating > 0 && (
            <Form.Control
              className="surveyTextArea"
              as="textarea"
              placeholder={textArea}
              maxLength={250}
              onChange={(event) => setFreeResponse(event.target.value)}
            />
          )}
        </div>
        <Fab
          className="submitButton"
          size="large"
          variant="extended"
          color="primary"
          disabled={rating && ableToFind && wouldRecommend ? false : true}
          onClick={() => {
            localStorage.setItem("surveyCompleted", "true");
            submitSurvey(rating, ableToFind, wouldRecommend, freeResponse);
            setShow(false);
          }}
        >
          {submit}
          <SendIcon className="submitButtonIcon" />
        </Fab>
      </Modal.Body>
    </Modal>
  );
};

export default Survey;
