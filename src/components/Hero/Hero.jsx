import React from "react";
import "./Hero.scss";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero__content">
        <h1 className="hero__title">Turning Creative Ideas into Success</h1>
        <p className="hero__subtitle">
          Connecteur adipiscing elit, sed do eiusmod tempor incididunt dolore
          magna aliqua quis nostrud exerci.
        </p>
        <button className="hero__cta">Discover Now</button>
      </div>
    </section>
  );
};

export default Hero;
