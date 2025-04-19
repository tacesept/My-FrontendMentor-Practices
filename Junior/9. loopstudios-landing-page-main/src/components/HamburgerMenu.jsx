
import { useContext } from "react";
import { HeaderContext } from "./Header";

function HamburgerMenu() {
  const { renderNavLinks, handleHamburgerClick } = useContext(HeaderContext);
  return (
    <div className="header__hamburger-menu-container">
      <div className="header__hamburger-menu">
        <a href="/" aria-label="Home">
          <img src="/src/assets/images/logo.svg" alt="Loopstudios logo" />
        </a>
        <button onClick={handleHamburgerClick} aria-label="Close menu">
          <img src="/src/assets/images/icon-close.svg" alt="Close menu" />
        </button>
      </div>
      <nav
        className="header__hamburger-menu-nav"
        aria-label="Mobile navigation"
      >
        {renderNavLinks()}
      </nav>
    </div>
  );
}

export default HamburgerMenu;
