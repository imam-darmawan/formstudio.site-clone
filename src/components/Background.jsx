import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

const Background = () => {
  const backgroundContainer = useRef();

  useGSAP(
    () => {
      const separators = gsap.utils.toArray("div");

      gsap.from(separators, {
        y: "100%",
        duration: 2,
        stagger: 0.5,
        opacity: 1,
        ease: "power4.out",
      });
    },
    { scope: backgroundContainer },
  );

  return (
    <div
      className="fixed -z-50 flex h-full w-full justify-evenly overflow-hidden"
      aria-hidden="true"
      ref={backgroundContainer}
    >
      {Array(3)
        .fill()
        .map((val, idx) => {
          return (
            <div key={idx} className="h-full w-px bg-white opacity-10"></div>
          );
        })}
    </div>
  );
};

export default Background;
