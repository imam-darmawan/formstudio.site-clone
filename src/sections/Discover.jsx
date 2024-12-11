import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import Button from "../components/Button";

const Cover = () => {
  const container = useRef();
  const background = useRef();

  useGSAP(
    () => {
      gsap.from("h2 span", {
        scrollTrigger: {
          trigger: container.current,
          toggleActions: "restart none restart none",
          start: "top top",
        },
        y: "100%",
        duration: 1,
        stagger: 0.1,
        ease: "power3.inOut",
      });

      gsap.from(background.current, {
        scale: 0,
        scrollTrigger: {
          trigger: container.current,
          scrub: 1,
          start: "top top",
          end: "bottom bottom",
        },
      });
    },
    { scope: container },
  );

  return (
    <div ref={container} className="relative h-[200vh]">
      <div className="sticky top-0 flex h-screen items-center justify-center overflow-hidden">
        <h2 className="relative z-10 overflow-hidden text-nowrap text-[clamp(7rem,30cqi,14rem)] font-extrabold uppercase leading-none tracking-tighter text-black">
          {"Tbi".split("").map((char) => (
            <span key={char} className="inline-block">
              {char}
            </span>
          ))}
        </h2>
        <div
          className="absolute h-[240vh] w-[240vh] rounded-full bg-white"
          ref={background}
        ></div>
      </div>
    </div>
  );
};

const Content = () => {
  const container = useRef();

  useGSAP(
    () => {
      const texts = gsap.utils.toArray("p span");

      texts.forEach((text) => {
        gsap.to(text, {
          x: 0,
          scrollTrigger: {
            trigger: container.current,
            start: "top bottom",
            end: "bottom 80%",
            scrub: 1,
          },
        });
      });
    },
    { scope: container },
  );

  return (
    <div
      className="flex h-[70vh] flex-col items-center justify-center gap-12 overflow-hidden bg-white p-3 text-black [&_a]:after:!border-black"
      ref={container}
    >
      <p className="flex flex-col items-center justify-center text-center text-xl uppercase max-sm:text-lg">
        <span className="-translate-x-[50vw]">
          This site was designed by Favorit x Frame
        </span>
        <span className="translate-x-[50vw]">
          exclusive for The Brand Identity.
        </span>
      </p>
      <Button label="Discover" />
    </div>
  );
};

const Discover = () => {
  return (
    <div className="relative -z-[99]">
      <Cover />
      <Content />
    </div>
  );
};

export default Discover;
