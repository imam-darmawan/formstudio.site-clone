import PropTypes from "prop-types";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Magnetic = ({ children }) => {
  const containerRef = useRef();
  const childrenRef = useRef();

  useGSAP(() => {
    const xTo = gsap.quickTo(childrenRef.current, "x", { duration: 0.3 });
    const yTo = gsap.quickTo(childrenRef.current, "y", { duration: 0.3 });

    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const { top, left, width, height } =
        containerRef.current.getBoundingClientRect();

      const x = (clientX - (left + width / 2)) / 3;
      const y = (clientY - (top + height / 2)) / 3;

      xTo(x);
      yTo(y);
    };

    const handleMouseLeave = () => {
      xTo(0);
      yTo(0);
    };

    containerRef.current.addEventListener("mousemove", handleMouseMove);
    containerRef.current.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      containerRef.current.removeEventListener("mousemove", handleMouseMove);
      containerRef.current.removeEventListener("mouseleave", handleMouseLeave);
    };
  });

  return (
    <div
      className="flex h-full w-full items-center justify-center"
      ref={containerRef}
    >
      <div ref={childrenRef}>{children}</div>
    </div>
  );
};

Magnetic.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Magnetic;
