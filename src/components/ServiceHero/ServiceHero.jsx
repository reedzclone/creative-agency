// components/CreativeAgency/CreativeAgency.jsx
import React from "react";
import "./ServiceHero.scss";

import image1 from "../../assets/images/service-img-1.jpg";
import image2 from "../../assets/images/service-img-2.jpg";

const ServiceHero = () => {
  return (
    <section className="services">
      <div className="services__container">
        {/* Left Section - Images */}
        <div className="services__images">
          <div className="image-wrapper">
            <img src={image1} alt="Creative work" className="image-main" />
            <img src={image2} alt="Creative work" className="image-overlap" />
          </div>
        </div>

        {/* Right Section - Content */}
        <div className="services__content">
          <span className="content-subtitle">CREATIVE AGENCY</span>
          <h2 className="content-title">We help your business grow</h2>
          <p className="content-description">
            Dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
            aspernatur aut odit aut fugit, sed quia.
          </p>

          <div className="content-features">
            <div className="feature-item">
              <h3 className="feature-title">Creative design</h3>
              <p className="feature-text">
                Natus error sit voluptatem accus antium doloremque.
              </p>
            </div>

            <div className="feature-item">
              <h3 className="feature-title">Endless possibilities</h3>
              <p className="feature-text">
                Sit voluptatem accus antium doloremque laudan.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceHero;
