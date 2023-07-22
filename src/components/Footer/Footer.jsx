import React from "react";
import './Footer.css'
const Footer = () => {
  return (
    <section className="f-wrapper">
      <div className="paddings innerWidth flexCenter f-container">
        {/* {left-side} */}
        <div className="flexColStart f-left">
        <div className="orange-circle2" ></div>
          <img src="realestatelogo1.png" alt="logo1" width={250} />

          <span className="secondaryText s1">
            Our vison is to make all people <br />
            the best place to live for them
          </span>
        </div>

        {/* right-side */}

        <div className="flexColStart f-right">
          <span className="primaryText">Information</span>
          <span className="secondaryText">Pimpri, Pune 41107, INDIA</span>

          <div className="flexCenter f1-menu">
            <span>Properties</span>
            <span>Services</span>
            <span>Product</span>
            <span>About Us</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
