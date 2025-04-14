import React from "react";
import "./CreativeSection.scss";

const CreativeSection = () => {
  return (
    <section className="creative-section">
      <div className="left">
        <p className="tagline">Creative Solutions</p>
        <h1 className="title">
          We make unique &<br />
          memorable brands
        </h1>
      </div>

      <div className="right">
        <p className="description">
          At vero eos et accusamus et iusto odio dignissimos ducimus qui
          blanditiis praesentium voluptatum deleniti atque lorem in voluptate
          velit iusto odio dignissimos duci esse.
        </p>
        <p className="description">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae.
        </p>
        <a href="#" className="read-more">
          Read More
        </a>
      </div>
    </section>
  );
};

export default CreativeSection;
