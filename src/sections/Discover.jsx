import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import Button from "../components/Button";

const Cover = () => {
  const containerRef = useRef();

  useGSAP(
    () => {
      gsap.from("h2 span", {
        y: "100%",
        duration: 1,
        stagger: 0.1,
        ease: "power3.inOut",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top -50",
          toggleActions: "play none none reverse",
        },
      });
    },
    { scope: containerRef },
  );

  return (
    <div className="h-[200vh]" ref={containerRef}>
      <div className="sticky top-0 flex h-screen items-center justify-center overflow-hidden">
        <h2 className="overflow-hidden text-nowrap text-[clamp(6rem,30cqi,15rem)] font-extrabold leading-none">
          {"TBI".split("").map((char) => (
            <span key={char} className="inline-block">
              {char}
            </span>
          ))}
        </h2>
      </div>
    </div>
  );
};

const CTA = () => {
  const containerRef = useRef();

  useGSAP(
    () => {
      gsap.to("p span", {
        x: 0,
        scrollTrigger: {
          trigger: containerRef.current,
          scrub: 1,
          end: "bottom 80%",
        },
      });
    },
    { scope: containerRef },
  );

  return (
    <div
      className="flex h-[70vh] flex-col items-center justify-center gap-12 overflow-hidden p-6"
      ref={containerRef}
    >
      <p className="flex flex-col items-center text-center">
        <span className="-translate-x-[50vw]">
          This site was designed by Favorit x Frame
        </span>
        <span className="translate-x-[50vw]">
          exclusive for The Brand Identity.
        </span>
      </p>

      <div className="[&_a_div]:border-black">
        <Button label="Discover" />
      </div>
    </div>
  );
};

const CircleBackground = () => {
  const containerRef = useRef();
  const circleRef = useRef();

  useGSAP(() => {
    gsap.from(circleRef.current, {
      scale: 0,
      scrollTrigger: {
        trigger: containerRef.current,
        scrub: 1,
        start: "top top",
        end: "+=74% bottom",
      },
    });
  });

  return (
    <div
      className="absolute inset-0 -z-20 min-h-screen"
      aria-hidden="true"
      ref={containerRef}
    >
      <div className="sticky top-0 flex h-screen items-center justify-center overflow-hidden">
        <div
          className="absolute aspect-square w-[240vh] rounded-full bg-white"
          ref={circleRef}
        ></div>
      </div>
    </div>
  );
};

const Discover = () => {
  return (
    <div className="relative text-black">
      <CircleBackground />
      <Cover />
      <CTA />
    </div>
  );
};

export default Discover;
