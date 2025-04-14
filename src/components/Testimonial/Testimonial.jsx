import React, { useEffect, useState } from "react";
import "./Testimonial.scss";
import img1 from "../../assets/testimonial/img1.jpg";
import img2 from "../../assets/testimonial/img2.jpg";
import img3 from "../../assets/testimonial/img3.jpg";

const testimonials = [
  {
    name: "John Dou",
    title: "Expert",
    image: img3,
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    name: "Jane Smith",
    title: "Designer",
    image: img1,
    quote:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    name: "Alex Brown",
    title: "Developer",
    image: img2,
    quote:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
];

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="testimonial-container">
      <h2>Subscribe for the exclusive updates!</h2>
      <div className="testimonial-slide">
        <img
          src={testimonials[currentIndex].image}
          alt={testimonials[currentIndex].name}
          className="testimonial-img"
        />
        <p className="testimonial-quote">{testimonials[currentIndex].quote}</p>
        <div className="testimonial-author">
          <div className="quote-icon">❝❞</div>
          <h4>{testimonials[currentIndex].name}</h4>
          <span>{testimonials[currentIndex].title}</span>
        </div>
      </div>
      <div className="testimonial-dots">
        {testimonials.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentIndex ? "active" : ""}`}
            onClick={() => setCurrentIndex(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
