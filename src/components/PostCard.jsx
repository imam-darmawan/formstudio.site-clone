import PropTypes from "prop-types";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const PostCard = ({ title, readingTime, image }) => {
  const imageContainer = useRef();
  const buttonContainer = useRef();

  useGSAP(() => {
    const xTo = gsap.quickTo(buttonContainer.current, "x", { duration: 0.5 });
    const yTo = gsap.quickTo(buttonContainer.current, "y", { duration: 0.5 });

    const mouseMove = (e) => {
      const { clientX, clientY } = e;
      const { top, left, width, height } =
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

    return () => {
      imageContainer.current.removeEventListener("mousemove", mouseMove);
      imageContainer.current.removeEventListener("mouseleave", mouseLeave);
    };
  });

  return (
    <article className="w-[36rem]">
      <a href="#">
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
            {/* Words like 'Read' and 'Reod' are causing 
          unexpected animations when using the 18px font size. To fix this, 
          we need to set the font size to 17px manually. I'm not sure if this is 
          a GSAP or React issue." */}
            <div
              href="#"
              className="flex h-11 scale-0 gap-1 text-xl uppercase opacity-0 transition duration-300 hover:!scale-110 group-hover:scale-100 group-hover:opacity-100 max-sm:text-[1.063rem] max-sm:text-lg"
            >
              <span className="flex h-full items-center rounded-full bg-black/50 px-5 backdrop-blur-sm">
                Read
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
            </div>
          </div>
        </div>
        <div className="mt-4 flex justify-between gap-10 text-xs uppercase">
          <h3 className="max-w-96">{title}</h3>
          <span className="text-nowrap">{readingTime}</span>
        </div>
      </a>
    </article>
  );
};

PostCard.propTypes = {
  title: PropTypes.string.isRequired,
  readingTime: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default PostCard;
