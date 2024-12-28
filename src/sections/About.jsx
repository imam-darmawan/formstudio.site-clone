import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const About = () => {
  const aboutRef = useRef();

  useGSAP(() => {
    gsap.from(aboutRef.current, {
      opacity: 0,
      ease: "none",
      scrollTrigger: {
        trigger: aboutRef.current,
        scrub: 1,
        end: "bottom 70%",
      },
    });
  });

  return (
    <div className="flex h-screen w-full items-center justify-center p-6">
      <p className="max-w-xl text-center" ref={aboutRef}>
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
