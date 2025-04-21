import { useState, useEffect } from "react";
import SmallScreenHeader from "./components/SmallScreenHeader";
import LargeScreenHeader from "./components/LargeScreenHeader";
import Main from "./components/Main";
import HeroImg from "./components/HeroImg";

function App() {
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 768);
  const [currentImg, setCurrentImg] = useState(0);
  const [translate, setTranslate] = useState(0);
  const [animate, setAnimate] = useState(false);
  const heroLength = HeroImg.length;

  const headerProps = {
    currentImg,
    setCurrentImg,
    translate,
    setTranslate,
    animate,
    setAnimate,
    heroLength,
  };

  const HeaderComponent = isSmallScreen ? SmallScreenHeader : LargeScreenHeader;

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <HeaderComponent {...headerProps} />
      <Main />
    </>
  );
}

export default App;
