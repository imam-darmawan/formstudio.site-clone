import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import { blogPosts } from "../content";
import PostCard from "../components/PostCard";

const Cover = () => {
  const container = useRef();

  useGSAP(
    () => {
      gsap.from("h2 span", {
        scrollTrigger: {
          trigger: "h2",
          toggleActions: "restart none none none",
        },
        y: "100%",
        duration: 1,
        stagger: 0.1,
        ease: "power3.inOut",
      });
    },
    { scope: container },
  );

  return (
    <div
      className="sticky top-0 flex h-screen items-center justify-center"
      ref={container}
    >
      <h2 className="overflow-hidden text-nowrap text-[clamp(7rem,30cqi,14rem)] font-extrabold uppercase leading-none tracking-tighter">
        {"Blog".split("").map((char) => (
          <span key={char} className="inline-block">
            {char}
          </span>
        ))}
      </h2>
    </div>
  );
};

const PostList = () => {
  const container = useRef();

  useGSAP(
    () => {
      const postCards = gsap.utils.toArray("article");

      postCards.forEach((card) => {
        gsap.to(card, {
          scale: 0.5,
          scrollTrigger: {
            trigger: card.parentElement,
            scrub: 1,
            start: "top top",
          },
        });
      });
    },
    { scope: container },
  );

  return (
    <ul ref={container}>
      {blogPosts.map((post) => (
        <li
          key={post.title}
          className="sticky top-0 flex h-screen items-center justify-center"
        >
          <PostCard
            title={post.title}
            readingTime={post.readingTime}
            image={post.image}
          />
        </li>
      ))}
    </ul>
  );
};

const Blog = () => {
  return (
    <div className="p-3">
      <Cover />
      <PostList />
    </div>
  );
};

export default Blog;
