"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { relative } from "path";

export default function ParallaxExample() {
  const { scrollY } = useScroll();

  // Move background slower for parallax effect
  const y1 = useTransform(scrollY, [0, 500], [0, -100]);
  const y2 = useTransform(scrollY, [0, 500], [0, 50]);

  return (
    <div style={{ height: "200vh", overflow: "hidden" , position:"relative"}}>
      {/* Background layer */}
      <motion.div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100vh",
          backgroundImage: "url('https://picsum.photos/1920/1080?1')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          y: y1,
          zIndex: -1,
        }}
      />

      {/* Foreground text */}
      <motion.h1
        style={{
          position: "relative",
          marginTop: "50vh",
          textAlign: "center",
          fontSize: "4rem",
          y: y2,
        }}
      >
        18 Squares
      </motion.h1>
    </div>
  );
}
