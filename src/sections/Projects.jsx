import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

const ProjectListCover = () => {
  const coverContainer = useRef();

  useGSAP(
    () => {
      // Video animation
      gsap.from("video", {
        scrollTrigger: {
          trigger: coverContainer.current,
          start: "top bottom",
          end: "bottom bottom",
          scrub: 1,
        },
        scale: 0.5,
      });

      // Text animation
      gsap.to(gsap.utils.toArray("span"), {
        scrollTrigger: {
          trigger: coverContainer.current,
          start: "top bottom",
          end: "bottom bottom",
          scrub: 1,
        },
        x: "0",
      });
    },
    { scope: coverContainer },
  );

  return (
    <div className="h-[200vh]" ref={coverContainer}>
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

const ProjectList = () => {
  const projects = [
    {
      title: "Ethereal Echoes",
      image:
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=640",
      category: "product",
      align: "self-start",
    },
    {
      title: "Nebula's Embrace",
      image:
        "https://images.unsplash.com/photo-1633082568100-b23b295589f8?w=640",
      category: "packaging",
      align: "self-center",
    },
    {
      title: "Silent Symphony",
      image:
        "https://images.unsplash.com/photo-1727949236862-b8692b9d1dc8?w=640",
      category: "abstract",
      align: "self-end",
    },
    {
      title: "Quantum Dreams",
      image:
        "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=640",
      category: "packaging",
      align: "self-center",
    },
    {
      title: "Temporal Shift",
      image:
        "https://images.unsplash.com/photo-1635674848424-d617c1e0dc56?w=640",
      category: "typography",
      align: "self-start",
    },
    {
      title: "Digital Mirage",
      image:
        "https://images.unsplash.com/photo-1604935067269-27c7e8b36618?w=640",
      category: "interior",
      align: "self-center",
    },
    {
      title: "Lucid Nightmare",
      image:
        "https://images.unsplash.com/photo-1631477076114-9123f721b9dc?w=640",
      category: "abstract",
      align: "self-start",
    },
    {
      title: "Cosmic Ballet",
      image:
        "https://images.unsplash.com/photo-1448318440207-ef1893eb8ac0?w=640",
      category: "interior",
      align: "self-end",
    },
  ];

  const projectListContainer = useRef();

  useGSAP(
    () => {
      // Horizontal scroll animation
      const projectList = projectListContainer.current.querySelector("ul");

      const horizontalAnimation = gsap.to("ul", {
        x: () => -(projectList.scrollWidth - projectList.clientWidth),
        scrollTrigger: {
          trigger: projectListContainer.current,
          start: "top -100",
          end: "bottom bottom",
          scrub: 1,
        },
        ease: "none",
      });

      const resetHorizontalAnimation = () => {
        // Reset the horizontal animation to make scrolling consistent
        // when window size changes.

        const progress = horizontalAnimation.totalProgress();
        horizontalAnimation.progress(0);
        horizontalAnimation.invalidate();
        horizontalAnimation.totalProgress(progress);
      };

      window.addEventListener("resize", resetHorizontalAnimation);

      // Project reveal animation
      const projectListItems = gsap.utils.toArray("ul li > div").slice(0, 4);

      projectListItems.forEach((project) =>
        gsap.from(project, {
          y: "200",
          opacity: 0,
          scrollTrigger: {
            trigger: project.parentElement,
            toggleActions: "play none none reverse",
            start: "top 70%",
          },
        }),
      );

      return () => {
        window.removeEventListener("resize", resetHorizontalAnimation);
      };
    },
    { scope: projectListContainer },
  );

  return (
    <div
      className="mt-14 flex h-[500vh] flex-col items-center"
      ref={projectListContainer}
    >
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
              <div>
                <img
                  src={project.image}
                  alt={project.title}
                  className="aspect-video w-full object-cover"
                />
                <div className="mt-2 flex justify-between text-xs uppercase">
                  <span>{project.title}</span>
                  <span>{project.category}</span>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const Projects = () => {
  return (
    <div>
      <ProjectListCover />
      <ProjectList />
    </div>
  );
};

export default Projects;
