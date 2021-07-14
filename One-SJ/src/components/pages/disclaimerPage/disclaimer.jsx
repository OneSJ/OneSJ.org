import NavigationBar from "../../reusable/navigationBar";
import OneSJHeader from "../../reusable/onesjHeader";
import DisclaimerParagraph from "./disclaimerParagraph";
import Footer from "../../reusable/footer";

import "../../../css/disclaimer.css";

const Disclaimer = () => {
  return (
    <>
      <NavigationBar />
      <div className="center bgGradientTop">
        <OneSJHeader />
        <DisclaimerParagraph />
      </div>
      <Footer />
    </>
  );
};

export default Disclaimer;
