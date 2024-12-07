import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import PropTypes from "prop-types";
import { useRef } from "react";

const Button = ({ text, url, shortened }) => {
  const { contextSafe } = useGSAP();

  const border = useRef();

  const borderMask = {
    position: "0%",
    get mask() {
      return `
        linear-gradient(to right, black calc(${this.position} + 8px), #0000 0),
        linear-gradient(to left, black calc(${this.position} + 8px), #0000 0)
    `;
    },
  };

  const borderAnimation = gsap.to(borderMask, {
    position: "50.1% - 8px",
    paused: true,
    ease: "expo.inOut",
    duration: 0.8,
    onUpdate: () => {
      border.current.style.mask = borderMask.mask;
    },
  });

  return (
    <a
      href={url ?? "#"}
      className="group relative inline-flex h-9 items-center justify-center text-nowrap px-4 text-xl uppercase max-sm:text-lg"
      onMouseEnter={contextSafe(() => borderAnimation.play())}
      onMouseLeave={contextSafe(() => borderAnimation.reverse())}
    >
      {/* Text */}
      {shortened ? (
        <div className="flex">
          <div>{text.at(0)}</div>
          <div className="-translate-x-4 overflow-hidden -tracking-[1em] opacity-0 transition-all duration-700 group-hover:translate-x-0 group-hover:tracking-normal group-hover:opacity-100">
            {text.slice(1)}
          </div>
        </div>
      ) : (
        <div>{text}</div>
      )}

      {/* Border */}
      <div
        className="absolute inset-0 rounded-full border border-white"
        style={{ mask: borderMask.mask }}
        ref={border}
      ></div>
    </a>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  url: PropTypes.string,
  shortened: PropTypes.bool,
};

export default Button;
