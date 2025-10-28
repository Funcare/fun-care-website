"use client";
import { motion } from "framer-motion";
import FloatingShapes from "./FloatingShapes";

export default function HeroSection() {
  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center text-center overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #C49B73, #9A6D46, #7A4C91)",
        backgroundAttachment: "scroll", // smoother on scroll
        willChange: "transform", // GPU hint
      }}
    >
      <FloatingShapes />

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="relative z-10 px-6"
      >
        <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-4 leading-tight drop-shadow-md">
          Engage Teams. Elevate Culture.{" "}
          <span className="text-white/80">Experience FunCare</span>
        </h1>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-lg md:text-xl text-white/90 mb-10"
        >
          We integrate{" "}
          <span className="font-semibold text-white">joy and care models</span>{" "}
          to connect teams to{" "}
          <span className="font-semibold text-white">innovate, learn, and lead.</span>
        </motion.p>

        <motion.a
          whileHover={{
            scale: 1.1,
            boxShadow: "0 0 30px rgba(255,255,255,0.4)",
            backgroundColor: "#FFFFFF",
            color: "#512867",
          }}
          whileTap={{ scale: 0.95 }}
          href="#programs"
          className="bg-[#FAF3E0] text-violet font-semibold px-10 py-4 rounded-full text-lg shadow-lg transition-all"
        >
          Become a FunCare Institute Champion
        </motion.a>
      </motion.div>
    </section>
  );
}