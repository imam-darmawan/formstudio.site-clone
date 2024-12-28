import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import PropTypes from "prop-types";

const Button = ({ label, url, shortened }) => {
  const buttonRef = useRef();
  const borderRef = useRef();

  useGSAP(() => {
    const borderAnimation = gsap.to(borderRef.current, {
      "--visible": "calc(50.1% + 0px)",
      duration: 1,
      ease: "expo.inOut",
      paused: true,
    });

    const handleMouseEnter = () => borderAnimation.play();

    const handleMouseLeave = () => borderAnimation.reverse();

    buttonRef.current.addEventListener("mouseenter", handleMouseEnter);
    buttonRef.current.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      buttonRef.current.removeEventListener("mouseenter", handleMouseEnter);
      buttonRef.current.removeEventListener("mouseleave", handleMouseLeave);
    };
  });

  return (
    <a
      href={url || "#"}
      className="group relative inline-block text-nowrap rounded-full px-3 py-2 leading-none"
      ref={buttonRef}
    >
      {shortened ? (
        <>
          <span>{label.at(0)}</span>
          <span className="inline-block -translate-x-3 -tracking-[1rem] opacity-0 transition-all duration-700 group-hover:translate-x-0 group-hover:tracking-normal group-hover:opacity-100">
            {label.slice(1)}
          </span>
        </>
      ) : (
        label
      )}

      {/* Border */}
      <div
        className="absolute inset-0 rounded-full border border-white [--visible:calc(0%+8px)]"
        style={{
          mask: "linear-gradient(to right, black var(--visible), #0000 0), linear-gradient(to left, black var(--visible), #0000 0)",
        }}
        aria-hidden="true"
        ref={borderRef}
      ></div>
    </a>
  );
};

Button.propTypes = {
  label: PropTypes.string.isRequired,
  url: PropTypes.string,
  shortened: PropTypes.bool,
};

export default Button;
