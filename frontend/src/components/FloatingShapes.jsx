"use client";
import { motion } from "framer-motion";

export default function FloatingShapes() {
  return (
    <>
      <motion.div
        className="absolute top-20 left-10 w-96 h-96 bg-teal/30 rounded-full mix-blend-multiply blur-3xl"
        animate={{
          y: [0, 30, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{ repeat: Infinity, duration: 6 }}
      />
      <motion.div
        className="absolute bottom-20 right-20 w-80 h-80 bg-coral/40 rounded-full mix-blend-multiply blur-3xl"
        animate={{
          y: [0, -40, 0],
          scale: [1, 1.05, 1],
        }}
        transition={{ repeat: Infinity, duration: 8 }}
      />
      <motion.div
        className="absolute top-1/2 left-1/3 w-72 h-72 bg-yellow/30 rounded-full mix-blend-multiply blur-3xl"
        animate={{
          x: [0, 50, 0],
          y: [0, 20, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{ repeat: Infinity, duration: 7 }}
      />
    </>
  );
}