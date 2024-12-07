// Components
import Background from "./components/Background";
import Button from "./components/Button";

// Sections
import Hero from "./sections/Hero";
import Projects from "./sections/Projects";

const App = () => {
  const navLinks = [
    { title: "Form" },
    { title: "Projects" },
    { title: "Blog" },
    { title: "Studio" },
  ];

  return (
    <>
      <Background />

      <header className="fixed inset-x-0 top-0 z-50 mix-blend-difference">
        <nav>
          <ul
            className="grid"
            style={{ gridTemplateColumns: `repeat(${navLinks.length}, 1fr)` }}
          >
            {navLinks.map((link) => (
              <li key={link.title} className="m-3">
                <Button text={link.title} shortened />
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <main>
        <Hero />

        <div className="flex min-h-[60vh] w-full items-center justify-center p-10">
          <p className="max-w-xl text-center text-xl uppercase max-sm:text-lg">
            Welcome to Form Studio &ndash; where brands discover their rhythm,
            creativity comes alive, and ideas know how to have a good time.
            We&apos;re the studio that fearlessly bends the rules and champions
            the elegance of simplicity. Renowned brands choose us because we
            maintain the brand language and still push boundaries.
          </p>
        </div>

        <Projects />
      </main>
    </>
  );
};

export default App;
