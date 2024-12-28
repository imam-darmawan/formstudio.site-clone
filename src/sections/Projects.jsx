import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import gsap from "gsap";
import Button from "../components/Button";
import { projects } from "../data/content";
import ProjectCard from "../components/ProjectCard";

const Cover = () => {
  const containerRef = useRef();

  useGSAP(
    () => {
      gsap.to("h2 span", {
        x: 0,
        scrollTrigger: {
          trigger: containerRef.current,
          scrub: 1,
          end: "bottom bottom",
        },
      });

      gsap.from("video", {
        scale: 0.5,
        scrollTrigger: {
          trigger: containerRef.current,
          scrub: 1,
          end: "bottom bottom",
        },
      });
    },
    { scope: containerRef },
  );

  return (
    <div className="h-[200vh] w-full" ref={containerRef}>
      <div className="sticky top-0 h-screen w-full">
        <div className="absolute inset-0 z-10 flex items-center justify-center overflow-hidden mix-blend-difference">
          <h2 className="text-[clamp(3rem,15cqi,9rem)] font-extrabold">
            <span className="inline-block -translate-x-[55vw]">Show</span>
            <span className="inline-block translate-x-[55vw]">case</span>
          </h2>
        </div>

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
  );
};

const List = () => {
  const containerRef = useRef();
  const listRef = useRef();

  useGSAP(() => {
    const horizontalScrollAnimation = gsap.to(listRef.current, {
      x: () => -(listRef.current.scrollWidth - listRef.current.clientWidth),
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        scrub: 1,
        start: "top -200",
        end: "bottom bottom",
      },
    });

    const resetHorizontalScrollAnimation = () => {
      const progress = horizontalScrollAnimation.progress();

      horizontalScrollAnimation.progress(0);
      horizontalScrollAnimation.invalidate();
      horizontalScrollAnimation.totalProgress(progress);
    };

    window.addEventListener("resize", resetHorizontalScrollAnimation);

    // Project card reveal animation
    const projectCards = [...listRef.current.children].slice(0, 4);

    projectCards.forEach((card) =>
      gsap.from(card, {
        y: 200,
        opacity: 0,
        scrollTrigger: {
          trigger: card,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }),
    );

    return () => {
      window.removeEventListener("resize", resetHorizontalScrollAnimation);
    };
  });

  return (
    <div className="mt-12 h-[500vh]" ref={containerRef}>
      <div className="text-center">
        <Button label="Projects" />
      </div>

      <div className="sticky top-0 overflow-hidden">
        <div className="flex h-screen pt-12" ref={listRef}>
          {projects.map((project) => (
            <div
              key={project.title}
              className="w-full shrink-0 p-3 sm:w-1/2 lg:w-1/4"
              style={{ alignSelf: project.align }}
            >
              <ProjectCard
                title={project.title}
                image={project.image}
                category={project.category}
                linkLabel="View"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  return (
    <div>
      <Cover />
      <List />
    </div>
  );
};

export default Projects;
