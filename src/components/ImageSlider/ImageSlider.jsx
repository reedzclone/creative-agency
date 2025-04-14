import React, { useEffect, useRef, useState } from "react";
import "./ImageSlider.scss";
import img1 from "../../assets/3d/img1.jpg";
import img2 from "../../assets/3d/img2.jpg";
import img3 from "../../assets/3d/img3.jpg";
import img4 from "../../assets/3d/img4.jpg";
import img5 from "../../assets/3d/img5.jpg";

const images = [
  {
    src: img1,
    alt: "Bar Graph Illustration",
  },
  {
    src: img2,
    alt: "Folder Illustration",
  },
  {
    src: img3,
    alt: "Laptop Search Illustration",
  },
  {
    src: img4,
    alt: "Laptop Search Illustration",
  },
  {
    src: img5,
    alt: "Laptop Search Illustration",
  },
  {
    src: img3,
    alt: "Laptop Search Illustration",
  },
  {
    src: img4,
    alt: "Laptop Search Illustration",
  },
];

const ImageSlider = () => {
  const sliderRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const slider = sliderRef.current;
    if (slider) {
      const scrollTo = slider.clientWidth * currentIndex;
      slider.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  }, [currentIndex]);

  return (
    <div className="slider-container">
      <div className="slider" ref={sliderRef}>
        {images.map((image, index) => (
          <div className="slide" key={index}>
            <img src={image.src} alt={image.alt} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
