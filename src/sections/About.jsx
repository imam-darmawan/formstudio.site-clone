import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const About = () => {
  const container = useRef();

  useGSAP(
    () => {
      gsap.from("p", {
        opacity: 0,
        scrollTrigger: {
          trigger: "p",
          scrub: 1,
          start: "top 90%",
          end: "bottom 70%",
        },
      });
    },
    { scope: container },
  );

  return (
    <div
      className="flex min-h-screen w-full items-center justify-center p-10"
      ref={container}
    >
      <p className="max-w-xl text-center text-xl uppercase max-sm:text-lg">
        Welcome to Form Studio &ndash; where brands discover their rhythm,
        creativity comes alive, and ideas know how to have a good time.
        We&apos;re the studio that fearlessly bends the rules and champions the
        elegance of simplicity. Renowned brands choose us because we maintain
        the brand language and still push boundaries.
      </p>
    </div>
  );
};

export default About;
