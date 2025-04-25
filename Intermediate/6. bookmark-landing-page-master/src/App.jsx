import Header from "./layouts/Header";
import Main from "./layouts/Main";
import Footer from "./layouts/Footer";
import { useState, useEffect } from "react";
import Menu from "./components/Menu";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  console.log(menuOpen);

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

  const handleMenuOpen = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="max-w-screen-xl mx-auto">
      {menuOpen && <Menu />}
      <Header handleMenuOpen={handleMenuOpen} menuOpen={menuOpen} />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
