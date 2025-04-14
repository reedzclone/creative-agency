import React from "react";
import "./Footer.scss";

const Footer = () => {
  return (
    <>
      <div className="footer__curve">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#0b0f1a"
            fillOpacity="1"
            d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,250.7C1248,256,1344,288,1392,304L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>

      <footer className="footer">
        <div className="footer__content">
          <div className="footer__section">
            <h4>Office</h4>
            <p>
              Germany —<br />
              785 15h Street, Office 478
              <br />
              Berlin, De 81566
            </p>
            <p>
              <a href="mailto:info@email.com">info@email.com</a>
            </p>
            <p className="footer__phone">+1 840 841 25 69</p>
          </div>

          <div className="footer__section">
            <h4>Links</h4>
            <ul>
              <li>Home</li>
              <li>Services</li>
              <li>About Us</li>
              <li>Our Team</li>
              <li>Contacts</li>
            </ul>
          </div>

          <div className="footer__section">
            <h4>Socials</h4>
            <ul>
              <li>Facebook</li>
              <li>Twitter</li>
              <li>Dribbble</li>
              <li>Instagram</li>
            </ul>
          </div>

          <div className="footer__section">
            <h4>Newsletter</h4>
          </div>
        </div>

        <div className="footer__bottom">
          AxiomThemes © 2025. All Rights Reserved.
        </div>
      </footer>
    </>
  );
};

export default Footer;
