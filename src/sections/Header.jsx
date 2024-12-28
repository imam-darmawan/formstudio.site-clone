import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { primaryLinks } from "../data/content";
import Button from "../components/Button";

const Header = () => {
  const containerRef = useRef();

  useGSAP(
    () => {
      gsap.from("nav ul li", {
        opacity: 0,
        duration: 1,
        stagger: 0.3,
      });
    },
    { scope: containerRef },
  );

  return (
    <header
      ref={containerRef}
      className="fixed inset-x-0 top-0 z-10 mix-blend-difference"
    >
      <nav>
        <ul className="flex">
          {primaryLinks.map((link) => (
            <li key={link.label} className="flex-1 p-3">
              <Button label={link.label} url={link.url} shortened />
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
