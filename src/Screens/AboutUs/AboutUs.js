import React from 'react'
import { images } from '../../Constant/index';
import './AboutUs.css';
import Footer from '../../Component/Footer/Footer'


function AboutUs() {
  return (
    <>
    <div className="app__aboutus app__bg flex__center section__padding" id="about">
    <div className="app__aboutus-overlay flex__center">
      <img src={images.G} alt="G_overlay" />
    </div>

    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about">
        <h1 className="headtext__cormorant">About Us</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">Smart Cafe is a revolutionary concept in the world of cafes. It is a cafe that uses Reactjs technology to provide an interactive and engaging experience for its customers.</p>
        <button type="button" className="custom__button">Know More</button>
      </div>

      <div className="app__aboutus-content_knife flex__center">
        <img src={images.knife} alt="about_knife" />
      </div>

      <div className="app__aboutus-content_history">
        <h1 className="headtext__cormorant">benefits</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">Smart Cafe offers a range of benefits for both customers and cafe owners. For customers, the interactive interface makes ordering and customizing their meals a fun and engaging experience. </p>
        <button type="button" className="custom__button">Know More</button>
      </div>
    </div>
  </div>
  <Footer/>
  </>
  )
}

export default AboutUs