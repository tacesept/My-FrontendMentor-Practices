import HeroImg from "./HeroImg";
import { useState, useEffect } from "react";

export default function SmallScreenHeader() {
  const [currentImg, setCurrentImg] = useState(0);
  const [translate, setTranslate] = useState(0);
  const [animate, setAnimate] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const navText = ["home", "shop", "about", "contact"];

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

  const handleImgChange = (direction) => {
    if (direction === "right" && currentImg < HeroImg.length - 1) {
      if (animate) return;
      setCurrentImg(currentImg + 1);
      setTranslate(translate - 100);

      setAnimate(true);

      setTimeout(() => {
        setAnimate(false);
      }, 1000);
    } else if (direction === "left" && currentImg > 0) {
      if (animate) return;
      setCurrentImg(currentImg - 1);
      setTranslate(translate + 100);
      setAnimate(true);

      setTimeout(() => {
        setAnimate(false);
      }, 1000);
    }
  };

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
    <header className="sm-screen__header">
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
        <nav>
          <ul>
            {navText.map((text, index) => (
              <li key={index}>
                <a href="#">{text}</a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="sm-screen__top">
        <ul style={{ marginInline: `${translate}%` }}>
          {HeroImg.map((img, index) => (
            <li key={index}>
              <img
                src={img.srcM}
                alt={img.alt}
                className={index === currentImg ? "active" : ""}
              />
            </li>
          ))}
        </ul>
        <div className="sm-screen__top-header">
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
        <div className="sm-screen__top-buttons">
          <button
            aria-label="previous image"
            onClick={() => handleImgChange("left")}
          >
            <svg
              className="arrow-left"
              width="14"
              height="24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13 0L1 12l12 12"
                stroke="#FFF"
                fill="none"
                fillRule="evenodd"
              />
            </svg>
          </button>
          <button
            aria-label="next image"
            onClick={() => handleImgChange("right")}
          >
            <svg
              className="arrow-right"
              width="14"
              height="24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 0l12 12L1 24"
                stroke="#FFF"
                fill="none"
                fillRule="evenodd"
              />
            </svg>
          </button>
        </div>
      </div>

      <div className={`sm-screen__bottom ${animate ? "animate" : ""}`}>
        <h1>{HeroImg[currentImg].title}</h1>
        <p>{HeroImg[currentImg].description}</p>
        <button>
          <span>Shop now</span>
          <svg width="40" height="12" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M34.05 0l5.481 5.527h.008v.008L40 6l-.461.465v.063l-.062-.001L34.049 12l-.662-.668 4.765-4.805H0v-1h38.206l-4.82-4.86L34.05 0z"
              fill="#000"
              fillRule="nonzero"
            />
          </svg>
        </button>
      </div>
    </header>
  );
}
