import HeroImg from './HeroImg';
import { useState } from 'react';
export default function SmallScreenHeader() {
    const [currentImg, setCurrentImg] = useState(0);
    
    
    const handleImgChange = (index) => {
        setCurrentImg(index);
        if (index < 0) {
            setCurrentImg(HeroImg.length - 1);
        } else if (index >= HeroImg.length) {
            setCurrentImg(0);
        }

         
    }

  return (
    <header className="sm-screen__header">
      <div className="sm-screen__top">
        <img className="animation-fade-in" src={HeroImg[currentImg].srcM} alt={HeroImg[currentImg].alt} />
        <div>
          <img src="./images/hamburger.svg" alt="hamburger menu" />
          <img src="./images/logo.svg" alt="logo" />
        </div>
        <div>
          <button onClick={() => handleImgChange(currentImg - 1)}>
            <img src="./images/arrow-left.svg" alt="arrow left" />
          </button>
          <button onClick={() => handleImgChange(currentImg + 1)}>
            <img src="./images/arrow-right.svg" alt="arrow right" />
          </button>
        </div>
      </div>
      <div className="sm-screen__bottom"></div>
    </header>
  );
}
