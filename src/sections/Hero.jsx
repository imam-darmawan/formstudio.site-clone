import { useRef } from "react";
import Button from "../components/Button";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Hero = () => {
  const heroContainer = useRef();

  useGSAP(
    () => {
      // Site title reveal animation
      const siteTitle = gsap.utils.toArray("h1 span");

      gsap.from(siteTitle, {
        scrollTrigger: {
          trigger: "h1",
          toggleActions: "restart none restart none",
        },
        y: "100%",
        duration: 1,
        stagger: 0.1,
        ease: "power3.inOut",
      });

      // Button reveal animation
      gsap.from("a", {
        scrollTrigger: {
          trigger: "a",
          toggleActions: "restart none restart none",
        },
        y: "100%",
        duration: 2,
        ease: "power3.inOut",
      });
    },
    { scope: heroContainer },
  );

  return (
    <div
      className="flex h-screen w-full flex-col items-center justify-center space-y-8"
      ref={heroContainer}
    >
      <h1 className="overflow-hidden text-nowrap text-[clamp(7rem,30cqi,14rem)] font-extrabold uppercase leading-none tracking-tighter">
        {"Form".split("").map((char) => (
          <span key={char} className="inline-block">
            {char}
          </span>
        ))}
      </h1>

      <div className="overflow-hidden">
        <Button text="Studio" />
      </div>
    </div>
  );
};

export default Hero;
