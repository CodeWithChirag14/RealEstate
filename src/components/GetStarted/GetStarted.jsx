import React from "react";
import "./GetStarted.css";

const GetStarted = () => {
  return (
    <section className="g-wrapper" id="getstarted">
      <div className="paddings innerWidth g-container">
        <div className="flexColCenter innerContainer">
          <span className="primaryText">
            Get Started with Chirag's Real Estate
          </span>
          <span className="secondaryText">
            Subscribe and find super attractive price quotes
            <br />
            Find your residence soon
          </span>
          <button className="button">
            <a href="mailto:chiragnankani15@gmail.com">Get Started</a>
          </button>
        </div>
      </div>
    </section>
  );
};

export default GetStarted;
