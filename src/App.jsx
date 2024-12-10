import Background from "./components/Background";
import NavLinks from "./components/NavLinks";
import Hero from "./sections/Hero";
import About from "./sections/About";
import ProjectList from "./sections/ProjectList";
import Blog from "./sections/Blog";

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
        <ProjectList />
        <Blog />
      </main>
    </>
  );
};

export default App;
