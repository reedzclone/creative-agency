import React from "react";
import "./Logo.scss";

const brands = ["Codan", "Orca", "Minagod", "Arquivar", "Skybyte", "Branix"];

const Logo = () => {
  return (
    <div className="logo-scroller">
      <div className="logo-track">
        {[...brands, ...brands].map((name, index) => (
          <h1 key={index} className="logo-text">
            {name}
          </h1>
        ))}
      </div>
    </div>
  );
};

export default Logo;
