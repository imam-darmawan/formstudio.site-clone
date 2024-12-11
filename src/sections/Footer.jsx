import Button from "../components/Button";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Footer = () => {
  const socialLinks = [
    { label: "Email", url: "#" },
    { label: "Framer", url: "#" },
    { label: "Twitter", url: "#" },
    { label: "Buy Me", url: "#" },
  ];

  const secondaryLinks = [
    { label: "Design by Favorit X Frame", url: "#" },
    { label: "Exclusive for the brand identity", url: "#" },
    { label: "Be our Framer a(ff)ilite", url: "#" },
    { label: "More minimal templates", url: "#" },
  ];

  const container = useRef();

  useGSAP(
    () => {
      // Brand name reveal animation
      gsap.from("small span", {
        scrollTrigger: {
          trigger: "small",
          toggleActions: "restart none restart none",
        },
        y: "100%",
        duration: 1,
        stagger: 0.1,
        ease: "power3.inOut",
      });
    },
    { scope: container },
  );

  return (
    <footer>
      <div className="h-screen">
        <video
          src="https://framerusercontent.com/assets/sagu9WJMRc7UvZaZc4N2cUQ68Z4.mp4"
          poster="https://framerusercontent.com/images/wliymflpHJV7DvV0MbCsghDF6e4.jpg"
          autoPlay
          muted
          loop
          playsInline
          className="h-full w-full object-cover"
        ></video>
      </div>
      <div className="mt-10">
        <ul className="grid grid-cols-4 gap-6">
          {socialLinks.map((link) => (
            <li key={link.label} className="text-center max-sm:col-span-2">
              <Button label={link.label} />
            </li>
          ))}
        </ul>

        <div className="mt-14 text-center" ref={container}>
          <small className="inline-block overflow-hidden text-nowrap text-[clamp(7rem,30cqi,14rem)] font-extrabold uppercase leading-none tracking-tighter">
            {"Form".split("").map((char) => (
              <span key={char} className="inline-block">
                {char}
              </span>
            ))}
          </small>
        </div>

        <ul className="grid grid-cols-4 text-xs uppercase max-sm:text-center">
          {secondaryLinks.map((link) => (
            <li key={link.label} className="p-6 max-sm:col-span-2">
              <a href={link.url} className="inline-block max-w-40">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
