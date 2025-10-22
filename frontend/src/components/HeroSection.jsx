"use client";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center relative overflow-hidden bg-gradient-to-br from-peach to-cream">
      <div className="absolute inset-0 -z-10 bg-[url('/images/abstract-blobs.svg')] opacity-10 bg-cover bg-center"></div>

      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-5xl md:text-6xl font-extrabold text-gray-800 mb-6"
      >
        Workplace Joy. <span className="text-coral">Leadership with Heart.</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="max-w-2xl text-lg text-gray-600 mb-8"
      >
        Discover the programs and tools that make your workplace a space of wellness, creativity, and connection.
      </motion.p>

      <motion.a
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        href="#programs"
        className="bg-teal text-white px-8 py-3 rounded-full text-lg font-semibold shadow-md hover:bg-coral transition-all"
      >
        Become a FunCare Company Champion
      </motion.a>
    </section>
  );
}