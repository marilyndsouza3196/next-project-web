"use client";
import { motion } from "framer-motion";

export function RenderedBox() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="p-4 bg-blue-400 rounded-lg shadow-md text-black text-center"
    >
      <h1>18 Squares</h1>
    </motion.div>
  );
}
