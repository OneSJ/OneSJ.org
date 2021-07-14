import Modal from "react-bootstrap/Modal";
import Map from "./map";
import Button from "react-bootstrap/Button";
import DirectionsIcon from "@material-ui/icons/Directions";

// SFC for rendering the modal when a card is clicked. This will show a more in depth description of each service
const ModalData = ({
  data,
  website,
  address,
  getDirections,
  phoneNumber,
  email,
  close,
  setShow,
  onClose,
}) => {
  return (
    <Modal show={setShow} onHide={() => onClose()} size="lg" centered>
      <Modal.Header closeButton>
        <Modal.Title className="textShadow">{data.provider_name}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Map
          data={data}
          website={website}
          address={address}
          getDirections={getDirections}
          phoneNumber={phoneNumber}
          email={email}
        />
        <div className="center" style={{ marginTop: "1rem" }}>
          <h5>
            {website + " "}
            <a
              className="data"
              rel="noopener noreferrer"
              target="_blank"
              href={data.web_link}
            >
              {data.provider_name}
            </a>
          </h5>
          <h5>{address + " " + data.address + ", " + data.zip}</h5>
          <h5>
            <a
              className="data"
              rel="noopener noreferrer"
              target="_blank"
              href={
                "https://www.google.com/maps/dir//" +
                data.address.replace(/ /g, "+")
              }
            >
              {getDirections} <DirectionsIcon />
            </a>
          </h5>
          <h5>{phoneNumber + " " + data.contact}</h5>
          <h5>{email + " " + data.email}</h5>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button className="modalFooterCloseButton" onClick={() => onClose()}>
          {close}
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalData;
