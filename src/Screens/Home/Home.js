import React from "react";
import { images } from "../../Constant/index";
import { SubHeading } from "../../Component/SubHeading/SubHeading";
import "../Home/Home.css";
import { NavLink } from "react-router-dom";
import Footer from "../../Component/Footer/Footer";
import Chef from "../../Component/Chef/Chef";
import Gallery from "../../Component/Gallery/Gallery";

function Home() {
  return (
    <>
      <div className="app__header app__wrapper section__padding" id="home">
        <div className="app__wrapper_info">
          <SubHeading title="Chase the new flavour" />
          <h1 className="app__header-h1">The Key To Fine Dining</h1>
          <p className="p__opensans" style={{ margin: "2rem 0"  }}>
           <h2>Your heart feels little emotion when your stomach feels no food{" "}</h2>
          </p>
          <NavLink to="/menu" className="custom__button">
            Explore Menu
          </NavLink>
        </div>

        <div className="app__wrapper_img">
          <img src={images.welcome} alt="header_img" />
        </div>
      </div>
      <Chef/>
      <Gallery/>
      <Footer />
    </>
  );
}

export default Home;
