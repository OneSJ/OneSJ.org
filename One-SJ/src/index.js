import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
// Keep css in this order so everything renders correctly
import "bootstrap/dist/css/bootstrap.css";
import "react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css";
import "./css/index.css";
import App from "./App";

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
