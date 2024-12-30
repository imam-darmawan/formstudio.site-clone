import { useEffect, useRef } from "react";

const CustomCursor = () => {
  const cursorRef = useRef();

  const isTouchDevice = () => {
    return (
      "ontouchstart" in window ||
      navigator.maxTouchPoints > 0 ||
      navigator.msMaxTouchPoints > 0
    );
  };

  useEffect(() => {
    if (isTouchDevice()) return;

    const mousePosition = {
      curr: { x: 0, y: 0 },
      prev: { x: 0, y: 0 },
    };
    let currentScale = 1;
    let cursorAnimationId;

    const lerp = (start, end, t) => start * (1 - t) + end * t;

    const cursorAnimation = () => {
      // Current mouse position
      const x = mousePosition.curr.x;
      const y = mousePosition.curr.y;

      // Scale cursor by velocity
      const dx = x - mousePosition.prev.x;
      const dy = y - mousePosition.prev.y;
      const velocity = Math.hypot(dx, dy);
      const targetScale = Math.max(0.5, 1 - velocity * 0.05);
      currentScale = lerp(currentScale, targetScale, 0.1);

      cursorRef.current.style.transform = `translate(${x}px, ${y}px) scale(${currentScale})`;

      mousePosition.prev = { ...mousePosition.curr };

      cursorAnimationId = requestAnimationFrame(cursorAnimation);
    };

    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const { width, height } = cursorRef.current.getBoundingClientRect();

      const x = clientX - width / 2;
      const y = clientY - height / 2;

      // Update the current mouse position for use in cursorAnimation
      mousePosition.curr = { x, y };

      cursorRef.current.style.display = "block";
    };

    const handleMouseLeave = () => (cursorRef.current.style.display = "none");

    cursorAnimationId = requestAnimationFrame(cursorAnimation);
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      cancelAnimationFrame(cursorAnimationId);
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    !isTouchDevice() && (
      <div
        className="pointer-events-none fixed z-10 hidden h-6 w-6 rounded-full bg-white mix-blend-difference"
        ref={cursorRef}
        aria-hidden="true"
      ></div>
    )
  );
};

export default CustomCursor;
