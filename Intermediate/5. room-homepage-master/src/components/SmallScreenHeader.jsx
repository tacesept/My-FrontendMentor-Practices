import HeroData from "./HeroData";
import { useState, useEffect } from "react";
import SlideBtns from "./SlideBtns";
import HeroImgRender from "./HeroImgRender";
import HeroContent from "./HeroContent";
import NavLinks from "./NavLinks";

export default function SmallScreenHeader(props) {
  const [menuOpen, setMenuOpen] = useState(false); 

  useEffect(() => {
    const closeMenu = () => setMenuOpen(false);

    if (menuOpen) {
      window.addEventListener("scroll", closeMenu, { passive: true });
      window.addEventListener("resize", closeMenu, { passive: true });
      window.addEventListener("wheel", closeMenu, { passive: true });
      window.addEventListener("touchmove", closeMenu, { passive: true });
    }

    return () => {
      window.removeEventListener("scroll", closeMenu);
      window.removeEventListener("resize", closeMenu);
      window.removeEventListener("wheel", closeMenu);
      window.removeEventListener("touchmove", closeMenu);
    };
  }, [menuOpen]);

  const handleMenuClick = (condition) => {
    if (condition) {
      setMenuOpen(!menuOpen);
    } else {
      setMenuOpen(false);
    }
  };

  const handleOverlayClick = () => {
    setMenuOpen(false);
  };

  return (
    <header className="sm-screen">
      <div
        className={`overlay ${menuOpen ? "active" : ""}`}
        onClick={handleOverlayClick}
      ></div>
      <div
        id="menu"
        className={`sm-screen__menu-popup ${menuOpen ? "active" : ""}`}
      >
        <button aria-label="close menu" onClick={() => handleMenuClick(true)}>
          <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M14.364.222l1.414 1.414L9.414 8l6.364 6.364-1.414 1.414L8 9.414l-6.364 6.364-1.414-1.414L6.586 8 .222 1.636 1.636.222 8 6.586 14.364.222z"
              fill="#000"
              fillRule="evenodd"
              opacity=".201"
            />
          </svg>
        </button>
        <NavLinks />
      </div>

      <div className="sm-screen__hero">
        <HeroImgRender {...props} />
        <div className="sm-screen__hero-header">
          <button
            aria-expanded={menuOpen}
            aria-controls="menu"
            aria-label="open menu"
            onClick={() => handleMenuClick(true)}
          >
            <img src="./images/icon-hamburger.svg" alt="hamburger menu" />
          </button>
          <a href="#">
            <img src="./images/logo.svg" alt="logo" />
          </a>
          {/* for design */}
          <div></div>
        </div>
        <SlideBtns {...props}/>
      </div>
      <HeroContent {...props} />
    </header>
  );
}
