import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Button from "../components/Button";

const Hero = () => {
  const containerRef = useRef();

  useGSAP(
    () => {
      gsap.from("h1 span", {
        y: "100%",
        duration: 1,
        stagger: 0.1,
        ease: "power3.inOut",
        scrollTrigger: {
          trigger: "h1",
          toggleActions: "play none restart none",
        },
      });

      gsap.from("a", {
        y: "100%",
        duration: 2,
        ease: "power3.inOut",
        scrollTrigger: {
          trigger: "a",
          toggleActions: "play none restart none",
        },
      });
    },
    { scope: containerRef },
  );

  return (
    <div
      className="flex h-screen w-full flex-col items-center justify-center gap-8"
      ref={containerRef}
    >
      <h1 className="overflow-hidden text-nowrap text-[clamp(6rem,30cqi,15rem)] font-extrabold leading-none">
        {"Form".split("").map((char) => (
          <span key={char} className="inline-block">
            {char}
          </span>
        ))}
      </h1>

      <div className="overflow-hidden">
        <Button label="Studio" url="#studio" />
      </div>
    </div>
  );
};

export default Hero;
