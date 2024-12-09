import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { navLinks } from "../content";
import Button from "./Button";

const NavLinks = () => {
  const container = useRef();

  useGSAP(
    () => {
      gsap.from("ul li", {
        opacity: 0,
        duration: 1,
        stagger: 0.3,
      });
    },
    { scope: container },
  );

  return (
    <nav ref={container}>
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
  );
};

export default NavLinks;
