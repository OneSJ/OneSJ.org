import { CardDeck } from "react-bootstrap";
import CardData from "./cardData";

// SFC for rendering all the data
const DataDisplay = ({ data }) => {
  return (
    <CardDeck>
      {/* Create a card for each service provided */}
      {data.map((data) => (
        <CardData key={data.cartodb_id} data={data} />
      ))}
    </CardDeck>
  );
};

export default DataDisplay;
