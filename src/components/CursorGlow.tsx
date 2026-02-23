import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const CursorGlow = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.closest("a") ||
        target.closest("button") ||
        target.closest("[role='button']") ||
        target.closest(".magnetic-hover")
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseover", handleMouseOver);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

  return (
    <>
      {/* Main cursor dot */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-screen"
        animate={{
          x: mousePos.x - (isHovering ? 24 : 8),
          y: mousePos.y - (isHovering ? 24 : 8),
          width: isHovering ? 48 : 16,
          height: isHovering ? 48 : 16,
        }}
        transition={{ type: "spring", stiffness: 500, damping: 28, mass: 0.5 }}
        style={{
          borderRadius: "50%",
          background: isHovering
            ? "radial-gradient(circle, hsl(150 100% 50% / 0.8), hsl(180 100% 50% / 0.4), transparent 70%)"
            : "radial-gradient(circle, hsl(150 100% 50% / 0.9), transparent 70%)",
          boxShadow: isHovering
            ? "0 0 40px 15px hsl(150 100% 50% / 0.3)"
            : "0 0 20px 5px hsl(150 100% 50% / 0.2)",
        }}
      />
      {/* Outer glow ring */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9998]"
        animate={{
          x: mousePos.x - 100,
          y: mousePos.y - 100,
          opacity: isHovering ? 0.15 : 0.08,
        }}
        transition={{ type: "spring", stiffness: 150, damping: 15, mass: 1 }}
        style={{
          width: 200,
          height: 200,
          borderRadius: "50%",
          background: "radial-gradient(circle, hsl(150 100% 50% / 0.3), transparent 70%)",
        }}
      />
    </>
  );
};

export default CursorGlow;
