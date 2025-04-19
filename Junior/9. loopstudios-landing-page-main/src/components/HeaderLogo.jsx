import { useContext } from "react";
import { HeaderContext } from "./Header";

function HeaderLogo() {
  const { isMobile, handleHamburgerClick, renderNavLinks } =
    useContext(HeaderContext);
  return (
    <div className="header__logo">
      <a href="/" aria-label="Home">
        <img src="/src/assets/images/logo.svg" alt="Loopstudios logo" />
      </a>
      {isMobile ? (
        <button
          onClick={handleHamburgerClick}
          className="header__logo-hamburger"
          aria-label="Open menu"
        >
          <img src="/src/assets/images/icon-hamburger.svg" alt="hamburger" />
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
