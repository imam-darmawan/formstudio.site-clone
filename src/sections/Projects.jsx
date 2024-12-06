import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

const Projects = () => {
  const videoContainer = useRef();

  useGSAP(
    () => {
      gsap.from("video", {
        scrollTrigger: {
          trigger: videoContainer.current,
          start: "top bottom",
          end: "bottom bottom",
          scrub: 1,
        },
        scale: 0.5,
      });

      gsap.to(gsap.utils.toArray("h2 span"), {
        scrollTrigger: {
          trigger: videoContainer.current,
          start: "top bottom",
          end: "bottom bottom",
          scrub: 1,
        },
        x: "0",
      });
    },
    { scope: videoContainer },
  );

  return (
    <div>
      <div className="h-[200vh]" ref={videoContainer}>
        <div className="sticky top-0 h-screen w-full">
          <h2 className="absolute left-1/2 top-1/2 z-10 flex -translate-x-1/2 -translate-y-1/2 text-[12rem]">
            <span className="-translate-x-[50vw]">SHOW</span>
            <span className="translate-x-[50vw]">CASE</span>
          </h2>
          <video
            src="https://framerusercontent.com/assets/BcIElVBzSD9P1ht5PhehnVyzTA.mp4"
            poster="https://framerusercontent.com/images/pv8GFuzq3eVNuiCHSbKRwmEK02E.jpg"
            autoPlay
            muted
            loop
            playsInline
            className="h-full w-full object-cover"
          ></video>
        </div>
      </div>
    </div>
  );
};

export default Projects;
