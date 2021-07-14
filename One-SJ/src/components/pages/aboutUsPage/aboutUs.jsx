import NavigationBar from "../../reusable/navigationBar";
import OneSJHeader from "../../reusable/onesjHeader";
import AboutUsParagraph from "./aboutUsParagraph";
import MeetTheTeam from "./meetTheTeam";
import Footer from "../../reusable/footer";

import "../../../css/aboutUs.css";

const AboutUs = () => {
  return (
    <>
      <NavigationBar />
      <div className="bgGradientTop center">
        <OneSJHeader />
        <AboutUsParagraph />
      </div>
      <div
        className="bgGradientBottom center"
        style={{
          padding: "25rem 0 10rem 0",
        }}
      >
        <MeetTheTeam />
      </div>
      <Footer />
    </>
  );
};

export default AboutUs;
