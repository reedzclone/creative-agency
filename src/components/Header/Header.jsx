import React, { useState, useEffect } from "react";
import "./Header.scss";
import { Search } from "@mui/icons-material";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeNavItem, setActiveNavItem] = useState("Home");

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setScrolled(true); // When user scrolls down
    } else {
      setScrolled(false); // When user scrolls up
    }
  };

  const handleNavItemClick = (item) => {
    setActiveNavItem(item);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll); // Clean up on unmount
    };
  }, []);

  return (
    <header className={`header ${scrolled ? "scrolled" : ""}`}>
      <div className="left-side">
        <nav className="header__nav">
          <ul className="header__nav-list">
            <li
              className={`header_logo ${
                activeNavItem === "Home" ? "active" : ""
              }`}
              onClick={() => handleNavItemClick("Home")}
            >
              Smart SEC
            </li>
            <li
              className={`header__nav-item ${
                activeNavItem === "Home" ? "active" : ""
              }`}
              onClick={() => handleNavItemClick("Home")}
            >
              Home
            </li>
            <li
              className={`header__nav-item ${
                activeNavItem === "Pages" ? "active" : ""
              }`}
              onClick={() => handleNavItemClick("Pages")}
            >
              Pages
            </li>
            <li
              className={`header__nav-item ${
                activeNavItem === "Portfolio" ? "active" : ""
              }`}
              onClick={() => handleNavItemClick("Portfolio")}
            >
              Portfolio
            </li>
            <li
              className={`header__nav-item ${
                activeNavItem === "Blog" ? "active" : ""
              }`}
              onClick={() => handleNavItemClick("Blog")}
            >
              Blog
            </li>
            <li
              className={`header__nav-item ${
                activeNavItem === "Contact" ? "active" : ""
              }`}
              onClick={() => handleNavItemClick("Contact")}
            >
              Contact
            </li>
            <li className="header__nav-item">
              <Search />
            </li>
          </ul>
        </nav>
      </div>
      <div className="right-side">
        <nav className="header__nav">
          <ul className="header__nav-list">
            <li className="header__nav-item active">1 800 458 56 97</li>
            <button className="nav-btn">let's talk</button>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
