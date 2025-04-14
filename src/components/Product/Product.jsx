import React from "react";
import "./Product.scss";
import img1 from "../../assets/images/img1.jpg";
import img2 from "../../assets/images/img2.jpg";

const Product = () => {
  return (
    <div className="product">
      <div className="product__left">
        <h5>Who We Are</h5>
        <h1>
          We provide best <br />
          <span>digital•services</span>
        </h1>
        <p>
          Dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
          aspernatur aut odit aut fugit sed quia.
        </p>
        <button>Discover Now</button>
      </div>
      <div className="product__right">
        <div className="product__images">
          <div className="image-wrapper">
            <img src={img1} alt="Creative work" className="image-main" />
            <img src={img2} alt="Creative work" className="image-overlap" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
