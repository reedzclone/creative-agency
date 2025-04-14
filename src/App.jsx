import React from "react";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import "./App.css";
import ServiceHero from "./components/ServiceHero/ServiceHero";
import StatsCounter from "./components/StatsCounter/StatsCounter";
import CreativeSection from "./components/CreativeSection/CreativeSection";
import ImageSlider from "./components/ImageSlider/ImageSlider";
import Testimonial from "./components/Testimonial/Testimonial";
import Product from "./components/Product/Product";
import Logo from "./components/Logo/Logo";
import Blog from "./components/Blog/Blog";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <ServiceHero />
      <StatsCounter />
      <CreativeSection />
      <ImageSlider />
      <Testimonial />
      <Product />
      <Logo />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;
