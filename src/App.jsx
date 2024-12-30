import Background from "./components/Background";
import CustomCursor from "./components/CustomCursor";
import Header from "./sections/Header";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Blog from "./sections/Blog";
import Discover from "./sections/Discover";
import Footer from "./sections/Footer";

const App = () => {
  return (
    <div>
      <CustomCursor />
      <Background />

      <Header />

      <main>
        <Hero />
        <About />
        <Projects />
        <Blog />
        <Discover />
      </main>

      <Footer />
    </div>
  );
};

export default App;
