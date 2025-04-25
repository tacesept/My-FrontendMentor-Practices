import Hero from "../sections/Hero";
import Features from "../sections/Features";
import Download from "../sections/Download";
import Questions from "../sections/Questions";
import Contact from "../sections/Contact";

export default function Main() {
  return (
    <main className="mt-20 md:mt-27">
      <Hero /> 
      <Features />
      <Download />
      <Questions />
      <Contact />
    </main>
  );
}