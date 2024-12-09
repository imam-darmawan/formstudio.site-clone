import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../content";

const Cover = () => {
  const container = useRef();

  useGSAP(
    () => {
      // Video animation
      gsap.from("video", {
        scrollTrigger: {
          trigger: container.current,
          start: "top bottom",
          end: "bottom bottom",
          scrub: 1,
        },
        scale: 0.5,
      });

      // Text animation
      gsap.to("span", {
        scrollTrigger: {
          trigger: container.current,
          start: "top bottom",
          end: "bottom bottom",
          scrub: 1,
        },
        x: "0",
      });
    },
    { scope: container },
  );

  return (
    <div className="h-[200vh]" ref={container}>
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        <div
          className="absolute left-1/2 top-1/2 z-10 flex -translate-x-1/2 -translate-y-1/2 text-[clamp(3.5rem,14cqi,9rem)] font-extrabold uppercase tracking-tighter mix-blend-difference"
          aria-hidden="true"
        >
          <span className="-translate-x-[80vw]">Show</span>
          <span className="translate-x-[80vw]">case</span>
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
  const container = useRef();

  useGSAP(
    () => {
      let horizontalScroll = () => {
        const scrollable = container.current.querySelector("ul");

        const animation = gsap.to("ul", {
          x: () => -(scrollable.scrollWidth - scrollable.clientWidth),
          ease: "none",
          scrollTrigger: {
            trigger: container.current,
            start: "top -100",
            end: "bottom bottom",
            scrub: 1,
          },
        });

        const reset = () => {
          const progress = animation.totalProgress();
          animation.progress(0);
          animation.invalidate();
          animation.totalProgress(progress);
        };

        window.addEventListener("resize", reset);

        return reset;
      };

      horizontalScroll = horizontalScroll();

      const projectsRevealAnimation = () => {
        const projectCards = gsap.utils.toArray("ul li > *").slice(0, 4);

        projectCards.forEach((card) => {
          gsap.from(card, {
            y: "200",
            opacity: 0,
            scrollTrigger: {
              trigger: card.parentElement,
              toggleActions: "play none none reverse",
              start: "top 70%",
            },
          });
        });
      };

      projectsRevealAnimation();

      return () => {
        window.removeEventListener("resize", horizontalScroll.reset);
      };
    },
    { scope: container },
  );

  return (
    <div className="mt-14 flex h-[500vh] flex-col items-center" ref={container}>
      <h2 className="parenthesize inline-flex h-9 items-center px-4 text-xl uppercase max-sm:text-lg">
        Projects
      </h2>

      <div className="sticky top-0 h-screen w-full overflow-hidden">
        <ul className="relative top-1/2 flex h-[90%] -translate-y-[46%]">
          {projects.map((project) => (
            <li
              className={`${project.align} w-1/4 flex-shrink-0 p-3 max-lg:w-1/2 max-sm:w-full`}
              key={project.title}
            >
              <ProjectCard
                title={project.title}
                category={project.category}
                image={project.image}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const ProjectList = () => {
  return (
    <div>
      <Cover />
      <List />
    </div>
  );
};

export default ProjectList;
