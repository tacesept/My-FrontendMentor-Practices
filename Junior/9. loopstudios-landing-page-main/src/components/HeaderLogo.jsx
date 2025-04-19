import { useContext } from "react";
import { HeaderContext } from "./Header";
import logo from "../assets/images/logo.svg";
import hamburgerIcon from "../assets/images/icon-hamburger.svg";

function HeaderLogo() {
  const { isMobile, handleHamburgerClick, renderNavLinks } =
    useContext(HeaderContext);
  return (
    <div className="header__logo">
      <a href="/" aria-label="Home">
        <img src={logo} alt="Loopstudios logo" />
      </a>
      {isMobile ? (
        <button
          onClick={handleHamburgerClick}
          className="header__logo-hamburger"
          aria-label="Open menu"
        >
          <img src={hamburgerIcon} alt="hamburger" />
        </button>
      ) : (
        <nav className="header__logo-nav" aria-label="Main navigation">
          {renderNavLinks()}
        </nav>
      )}
    </div>
  );
}

export default HeaderLogo;
