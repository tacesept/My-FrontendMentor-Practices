export default function NavLinks() {
  const navText = ["home", "shop", "about", "contact"];

  return (
    <nav className="nav-links">
      <ul>
        {navText.map((text, index) => (
          <li key={index}>
            <a href="#">{text}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
