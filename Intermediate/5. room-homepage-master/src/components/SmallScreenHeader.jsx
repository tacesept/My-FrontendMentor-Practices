import HeroImg from "./HeroImg";
import { useState } from "react";

export default function SmallScreenHeader() {
  const [currentImg, setCurrentImg] = useState(0);

  const handleImgChange = (index) => {
    if (index < 0) {
      index = 0;
    } else if (index >= HeroImg.length) {
      index = HeroImg.length - 1;
    }

    setCurrentImg(index);
  };

  return (
    <header className="sm-screen__header">
      <div className="sm-screen__top">
        <img
          className="img-hero"
          src={HeroImg[currentImg].srcM}
          alt={HeroImg[currentImg].alt}
        />
        <div className="sm-screen__top-header">
          <button>
            <img src="./images/icon-hamburger.svg" alt="hamburger menu" />
          </button>
          <a href="#">
            <img src="./images/logo.svg" alt="logo" />
          </a>
          {/* for design */}
          <div></div>
        </div>
        <div className="sm-screen__top-buttons">
          <button onClick={() => handleImgChange(currentImg - 1)}>
            <svg className="arrow-left" width="14" height="24" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M13 0L1 12l12 12"
                stroke="#FFF"
                fill="none"
                fill-rule="evenodd"
              />
            </svg>
          </button>
          <button onClick={() => handleImgChange(currentImg + 1)}>
            <svg className="arrow-right" width="14" height="24" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M1 0l12 12L1 24"
                stroke="#FFF"
                fill="none"
                fill-rule="evenodd"
              />
            </svg>
          </button>
        </div>
      </div>

      <div className="sm-screen__bottom">
        <h1>Discover innovative ways to decorate</h1>
        <p>
          We provide unmatched quality, comfort, and style for property owners
          across the country. Our experts combine form and function in bringing
          your vision to life. Create a room in your own style with our
          collection and make your property a reflection of you and what you
          love.
        </p>
        <button>
          <span>Shop now</span>
          <svg width="40" height="12" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M34.05 0l5.481 5.527h.008v.008L40 6l-.461.465v.063l-.062-.001L34.049 12l-.662-.668 4.765-4.805H0v-1h38.206l-4.82-4.86L34.05 0z"
              fill="#000"
              fill-rule="nonzero"
            />
          </svg>
        </button>
      </div>
    </header>
  );
}
