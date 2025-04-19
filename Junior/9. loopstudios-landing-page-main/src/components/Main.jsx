import { useState, useEffect } from "react";
import Cards from "./Cards";

export default function Main() {
  const [isMobile, setIsMobile] = useState(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <main className="main">
      <section className="interactive-section">
        <img src="/src/assets/images/mobile/image-interactive.jpg" alt="VR" />
        <div className="text-container">
          <h2>The leader in interactive VR</h2>
          <p>
            Founded in 2011, Loopstudios has been producing world-class virtual
            reality projects for some of the best companies around the globe.
            Our award-winning creations have transformed businesses through
            digital experiences that bind to their brand.
          </p>
        </div>
      </section>

      <section className="creations-section">
        <div className="creations-header">
          <h2>Our creations</h2>
          {!isMobile && <button>See all</button>}
        </div>
        <div className="creations-cards-container">
          {Cards.map((card, index) => (
            <a
              href="#"
              className="creation-card"
              key={index}
              style={{ backgroundImage: `url(${isMobile ? card.image : card.desktopImage})` }}
            >
              <h3>{card.title}</h3>
            </a>
          ))}
        </div>
      </section>
    </main>
  );
}
