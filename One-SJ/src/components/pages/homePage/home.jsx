import { createRef } from "react";
import Snacks from "./snacks";
import NavigationBar from "../../reusable/navigationBar";
import OneSJHeader from "../../reusable/onesjHeader";
import WelcomeBanner from "./welcomeBanner";
import MoreInfoBanner from "./moreInfoBanner";
import EmergencyBanner from "./emergencyBanner";
import Footer from "../../reusable/footer";

import sanjose from "../../../img/SanJose.jfif";

import "../../../css/home.css";

const Home = () => {
  // Creating refs for Snacks so they can scroll to correct part of page when clicked
  let top = createRef();
  let emergency = createRef();
  return (
    <>
      {/* Snacks are the pop ups that appear on the home page */}
      <Snacks topRef={top} emergencyRef={emergency} />
      <NavigationBar />
      <div className="center bgGradientTop" ref={top}>
        <OneSJHeader />
        <WelcomeBanner />
      </div>
      <div className="center bgGradientBottom">
        <MoreInfoBanner />
      </div>
      <div
        style={{
          // Creating a dimming effect for the background
          background: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${sanjose})`,
          backgroundSize: "cover",
          height: "85vh",
        }}
      >
        <div
          className="center"
          ref={emergency}
          style={{
            paddingTop: "3%",
          }}
        >
          <EmergencyBanner />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
