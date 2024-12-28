import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import gsap from "gsap";
import ProjectCard from "../components/ProjectCard";
import { blogPosts } from "../data/content";
import PropTypes from "prop-types";

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
          trigger: "h2",
          toggleActions: "restart none none none",
        },
      });
    },
    { scope: containerRef },
  );

  return (
    <div
      className="sticky top-0 flex h-screen items-center justify-center"
      ref={containerRef}
    >
      <h2 className="overflow-hidden text-nowrap text-[clamp(6rem,30cqi,15rem)] font-extrabold leading-none">
        {"Blog".split("").map((char) => (
          <span key={char} className="inline-block">
            {char}
          </span>
        ))}
      </h2>
    </div>
  );
};

const PostCard = ({ title, readingTime, image, linkLabel, url }) => {
  const containerRef = useRef();

  useGSAP(
    () => {
      gsap.to(containerRef.current.children, {
        scale: 0.3,
        scrollTrigger: {
          trigger: containerRef.current,
          scrub: 1,
          start: "top -150",
        },
      });
    },
    { scope: containerRef },
  );

  return (
    <div
      className="sticky top-0 flex h-screen items-center justify-center"
      ref={containerRef}
    >
      <div className="max-w-[36rem]">
        <ProjectCard
          title={title}
          category={readingTime}
          image={image}
          linkLabel={linkLabel}
          url={url}
        />
      </div>
    </div>
  );
};

const Blog = () => {
  return (
    <div>
      <Cover />

      <div className="p-3">
        {blogPosts.map((post) => (
          <PostCard
            key={post.title}
            title={post.title}
            readingTime={post.readingTime}
            image={post.image}
            linkLabel="Read"
          />
        ))}
      </div>
    </div>
  );
};

PostCard.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  readingTime: PropTypes.string.isRequired,
  url: PropTypes.string,
  linkLabel: PropTypes.string.isRequired,
};

export default Blog;
