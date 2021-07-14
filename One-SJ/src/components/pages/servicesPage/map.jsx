import { useState } from "react";
import {
  GoogleMap,
  useLoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";
import { GoogleAPIKey } from "../../utilities/constants";
import DirectionsIcon from "@material-ui/icons/Directions";

// Google library we want to use
const libraries = ["places"];

const Map = ({ data, website, address, getDirections, phoneNumber, email }) => {
  const [selected, setSelected] = useState(true);

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: GoogleAPIKey,
    libraries,
  });

  if (loadError) return "There was an error connecting to Google Maps";

  if (!isLoaded) return "Loading...";

  const mapContainerStyle = {
    width: "100%",
    height: "50vh",
  };

  const center = {
    lat: data.lat ? data.lat : 37.3382,
    lng: data.lon ? data.lon : -121.8863,
  };

  return (
    <GoogleMap
      mapContainerStyle={mapContainerStyle}
      zoom={15}
      center={center}
      // Allow for scrolling to zoom in and out
      options={{ gestureHandling: "greedy" }}
    >
      <Marker
        position={center}
        title={data.provider_name}
        onClick={() => setSelected(!selected)}
      />
      {selected ? (
        <InfoWindow
          position={center}
          onCloseClick={() => setSelected(false)}
          options={{ pixelOffset: new window.google.maps.Size(0, -40) }}
        >
          <div className="center">
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
        </InfoWindow>
      ) : null}
    </GoogleMap>
  );
};

export default Map;
