import React from "react";
import "./Hero.css";
import { HiLocationMarker } from "react-icons/hi";
import CountUp from "react-countup";

import { motion, spring } from "framer-motion";

const Hero = () => {
  return (
    <section className="hero-wrapper">
      <div className="paddings innerWidth flexCenter hero-container">
        {/* left side */}
        <div className="flexColStart hero-left">
          <div className="hero-title">
            <div className="orange-circle"></div>
            <motion.h1
              initial={{ y: "2rem", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: 2,
                type: "spring",
              }}
            >
              Unlock Your
              <br />
              Dream Home <br />
              with Us!"
            </motion.h1>
          </div>
          <div className="flexColStart hero-des">
            <span className="secondaryText">
              Find a variety of properties that suit you very easily
            </span>
            <span className="secondaryText">
              Forget all difficulties in finding a residence for you
            </span>
          </div>

          <div className="flexCenter search-bar">
            <HiLocationMarker color="var(--blue)" size={25}></HiLocationMarker>
            <input type="text" />
            <button className="button">Search</button>
          </div>

          <div className="flexCenter stats">
            <div className="flexColCenter stat">
              <span>
                <CountUp start={8800} end={9000} duration={4}></CountUp>
                <span>+</span>
              </span>
              <span className="secondaryText">Premium Products</span>
            </div>
            <div className="flexColCenter stat">
              <span>
                <CountUp start={1950} end={2000} duration={4}></CountUp>
                <span>+</span>
              </span>
              <span className="secondaryText">Happy Customers</span>
            </div>
            <div className="flexColCenter stat">
              <span>
                <CountUp end={28}></CountUp>
                <span>+</span>
              </span>
              <span className="secondaryText">Award Winning</span>
            </div>
          </div>
        </div>

        {/* right side */}

        <div className="hero-right">
          <motion.div
            className="image-container"
            initial={{ x: "2rem", opacity: 0 }}
            animate={{ x: "0", opacity: 1 }}
            transition={{ duration: 2, type: "spring" }}
          >
            <img src="heoimg.webp" alt="heroimg" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;