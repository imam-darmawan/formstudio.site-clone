import Background from "./components/Background";
import NavLinks from "./components/NavLinks";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Blog from "./sections/Blog";
import Discover from "./sections/Discover";
import Footer from "./sections/Footer";

const App = () => {
  return (
    <>
      <Background />

      <header className="fixed inset-x-0 top-0 z-50 mix-blend-difference">
        <NavLinks />
      </header>

      <main>
        <Hero />
        <About />
        <Projects />
        <Blog />
        <Discover />
      </main>

      <Footer />
    </>
  );
};

export default App;
