import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

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

  const navLinkList = useRef();
  const aboutText = useRef();

  useGSAP(() => {
    // Nav links reveal animation
    const navLinkListItems = navLinkList.current.children;

    gsap.from(navLinkListItems, {
      opacity: 0,
      duration: 1,
      stagger: 0.3,
    });

    // About text reveal animation
    gsap.from(aboutText.current, {
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: aboutText.current,
        toggleActions: "restart none restart none",
      },
    });
  });

  return (
    <>
      <Background />

      <header className="fixed inset-x-0 top-0 z-50 mix-blend-difference">
        <nav>
          <ul
            className="grid"
            style={{ gridTemplateColumns: `repeat(${navLinks.length}, 1fr)` }}
            ref={navLinkList}
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
          <p
            className="max-w-xl text-center text-xl uppercase max-sm:text-lg"
            ref={aboutText}
          >
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
