// Components
import Background from "./components/Background";
import Button from "./components/Button";

// Sections
import Hero from "./sections/Hero";

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

      <header className="absolute inset-x-0">
        <nav>
          <ul
            className="grid"
            style={{ gridTemplateColumns: `repeat(${navLinks.length}, 1fr)` }}
          >
            {navLinks.map((link) => (
              <li key={link.title} className="m-3">
                <Button text={link.title} shorten />
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <main>
        <Hero />

        <div className="w-full h-screen flex items-center justify-center p-12">
          <p className="text-xl md:text-2xl uppercase max-w-xl text-center">
            Welcome to Form Studio &ndash; where brands discover their rhythm,
            creativity comes alive, and ideas know how to have a good time.
            We&apos;re the studio that fearlessly bends the rules and champions
            the elegance of simplicity. Renowned brands choose us because we
            maintain the brand language and still push boundaries.
          </p>
        </div>
      </main>
    </>
  );
};

export default App;
