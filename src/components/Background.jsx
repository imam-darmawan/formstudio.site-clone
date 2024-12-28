import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Background = () => {
  const containerRef = useRef();

  useGSAP(
    () => {
      gsap.from("div", {
        y: "100%",
        duration: 2,
        stagger: 0.5,
        opacity: 1,
        ease: "power4.out",
      });
    },
    { scope: containerRef },
  );

  return (
    <div
      className="fixed inset-0 -z-10 flex justify-evenly mix-blend-difference"
      ref={containerRef}
      aria-hidden="true"
    >
      {Array(3)
        .fill()
        .map((v, i) => (
          <div key={i} className="h-full w-px bg-white opacity-20"></div>
        ))}
    </div>
  );
};

export default Background;
