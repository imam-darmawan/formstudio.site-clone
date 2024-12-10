import PropTypes from "prop-types";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import gsap from "gsap";

const ProjectCard = ({ title, category, image }) => {
  const imageContainer = useRef();
  const buttonContainer = useRef();

  useGSAP(() => {
    let magneticButton = () => {
      const xTo = gsap.quickTo(buttonContainer.current, "x", { duration: 0.5 });
      const yTo = gsap.quickTo(buttonContainer.current, "y", { duration: 0.5 });

      const mouseMove = (e) => {
        const { clientX, clientY } = e;
        const { width, height, left, top } =
          imageContainer.current.getBoundingClientRect();

        const x = (clientX - (left + width / 2)) / 4;
        const y = (clientY - (top + height / 2)) / 4;

        xTo(x);
        yTo(y);
      };

      const mouseLeave = () => {
        xTo(0);
        yTo(0);
      };

      imageContainer.current.addEventListener("mousemove", mouseMove);
      imageContainer.current.addEventListener("mouseleave", mouseLeave);

      return { mouseMove, mouseLeave };
    };

    magneticButton = magneticButton();

    return () => {
      imageContainer.current.removeEventListener(
        "mousemove",
        magneticButton.mouseMove,
      );
      imageContainer.current.removeEventListener(
        "mouseleave",
        magneticButton.mouseLeave,
      );
    };
  });

  return (
    <article>
      <div className="group relative" ref={imageContainer}>
        <img
          src={image}
          alt={title}
          className="aspect-[3/2] w-full object-cover"
        />
        <div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
          ref={buttonContainer}
        >
          <a
            href="#"
            className="flex h-11 scale-0 gap-1 text-xl uppercase opacity-0 transition duration-300 hover:!scale-110 group-hover:scale-100 group-hover:opacity-100 max-sm:text-lg"
          >
            <span className="flex h-full items-center rounded-full bg-black/50 px-5 backdrop-blur-sm">
              View
            </span>
            <span className="flex aspect-square h-full items-center justify-center overflow-hidden rounded-full bg-black/50 backdrop-blur-sm">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-7 w-7"
              >
                <path d="M14.5895 16.0032L5.98291 7.39664L7.39712 5.98242L16.0037 14.589V7.00324H18.0037V18.0032H7.00373V16.0032H14.5895Z"></path>
              </svg>
            </span>
          </a>
        </div>
      </div>
      <h3 className="mt-2 flex justify-between text-xs uppercase">
        <span>{title}</span>
        <span>{category}</span>
      </h3>
    </article>
  );
};

ProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default ProjectCard;
