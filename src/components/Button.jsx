import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import PropTypes from "prop-types";
import { useRef } from "react";

const Button = ({ label, url, shortened }) => {
  const container = useRef();

  useGSAP(() => {
    const borderAnimation = gsap.to(container.current, {
      "--parenthesis-size": "50.1% + 0px",
      paused: true,
      ease: "expo.inOut",
      duration: 0.8,
    });

    const play = () => borderAnimation.play();
    const reverse = () => borderAnimation.reverse();

    container.current.addEventListener("mouseenter", play);
    container.current.addEventListener("mouseleave", reverse);

    return () => {
      container.current.removeEventListener("mouseenter", play);
      container.current.removeEventListener("mouseleave", reverse);
    };
  });

  return (
    <a
      href={url ?? "#"}
      className="parenthesize group inline-flex h-9 items-center justify-center text-nowrap px-4 text-xl uppercase max-sm:text-lg"
      ref={container}
    >
      {shortened ? (
        <div className="flex">
          <div>{label.at(0)}</div>
          <div className="-translate-x-4 overflow-hidden -tracking-[1em] opacity-0 transition-all duration-700 group-hover:translate-x-0 group-hover:tracking-normal group-hover:opacity-100">
            {label.slice(1)}
          </div>
        </div>
      ) : (
        <div>{label}</div>
      )}
    </a>
  );
};

Button.propTypes = {
  label: PropTypes.string.isRequired,
  url: PropTypes.string,
  shortened: PropTypes.bool,
};

export default Button;
