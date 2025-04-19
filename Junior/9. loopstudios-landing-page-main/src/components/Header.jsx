import { useState, useEffect, createContext } from "react";
import HamburgerMenu from "./HamburgerMenu";
import HeaderLogo from "./HeaderLogo";
const HeaderContext = createContext();

export { HeaderContext };

export default function Header() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);
  const NAV_LINKS = [
    { label: "About", href: "/" },
    { label: "Careers", href: "/" },
    { label: "Events", href: "/" },
    { label: "Products", href: "/" },
    { label: "Support", href: "/" },
  ];

  const renderNavLinks = () => (
    <ul>
      {NAV_LINKS.map(({ label, href }) => (
        <li key={label}>
          <a href={href}>{label}</a>
        </li>
      ))}
    </ul>
  );

  useEffect(() => {
    const handleResize = () => {
      const newIsMobile = window.innerWidth < 768;
      setIsMobile(newIsMobile);
      if (!newIsMobile) {
        setIsHamburgerOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (isMobile && isHamburgerOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isMobile, isHamburgerOpen]);

  const handleHamburgerClick = () => {
    setIsHamburgerOpen((prev) => !prev);
  };

  return (
    <HeaderContext.Provider
      value={{ renderNavLinks, handleHamburgerClick, isMobile }}
    >
      <header className="header">
        <HeaderLogo />
        <div className="header__hero-container">
          <h1 className="header__hero">Immersive experiences that deliver</h1>
        </div>
        {isHamburgerOpen && isMobile && <HamburgerMenu />}
      </header>
    </HeaderContext.Provider>
  );
}
