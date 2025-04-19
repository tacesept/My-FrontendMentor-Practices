import NAV_LINKS from "./NavLinks";
import SOCIALS from "./Socials";
import logo from "../assets/images/logo.svg";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrapper">
        <div className="footer__logo">
          <img src={logo} alt="Loopstudios logo" />
          <nav className="footer__logo-nav" aria-label="Main navigation">
            <ul>
              {NAV_LINKS.map(({ label, href }) => (
                <li key={label}>
                  <a href={href}>{label}</a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className="footer__social">
          <ul>
            {SOCIALS.map(({ name, icon }) => (
              <li key={name}>
                <a href="#">
                  <img src={icon} alt={name} />
                </a>
              </li>
            ))}
          </ul>
          <p>© 2021 Loopstudios. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
