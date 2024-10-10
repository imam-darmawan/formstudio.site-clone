import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import PropTypes from "prop-types";

const Button = ({ text, url, shorten }) => {
  const borderMask = {
    invisible: "100%",
    visible: "8px",
    get mask() {
      return `
        linear-gradient(to left, #ffffff00 calc(${this.invisible} - ${this.visible}), black 0),
        linear-gradient(to right, #ffffff00 calc(${this.invisible} - ${this.visible}), black 0)
      `;
    },
  };

  const borderRef = useRef();
  const buttonRef = useRef();

  useGSAP(() => {
    const borderAnimation = gsap.to(borderMask, {
      invisible: "50%",
      ease: "circ.inOut",
      duration: 0.8,
      paused: true,
      onUpdate: () => {
        borderRef.current.style.mask = borderMask.mask;
      },
    });

    buttonRef.current.addEventListener("mouseenter", () =>
      borderAnimation.play()
    );
    buttonRef.current.addEventListener("mouseleave", () =>
      borderAnimation.reverse()
    );
  });

  return (
    <a
      href={url ?? "#"}
      className="group relative inline-flex items-center justify-center px-3 h-9 uppercase text-xl text-nowrap md:px-4 md:h-10 md:text-2xl"
      ref={buttonRef}
    >
      {shorten ? (
        <>
          <span>{text.at(0)}</span>
          <div className="overflow-hidden -tracking-[1em] -translate-x-4 opacity-0 group-hover:tracking-normal group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-700">
            {text.slice(1)}
          </div>
        </>
      ) : (
        text
      )}
      <div
        className="absolute border inset-0 rounded-full"
        style={{ mask: borderMask.mask }}
        ref={borderRef}
      ></div>
    </a>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  url: PropTypes.string,
  shorten: PropTypes.bool,
};

export default Button;
