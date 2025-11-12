"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function CoursesPage() {
  return (
    <section
      className="relative min-h-screen flex flex-col justify-center text-center overflow-hidden font-body"
      style={{
        background: "linear-gradient(135deg, #F1E8E1, #FFF9F5)",
        backgroundAttachment: "scroll",
      }}
    >
      {/* Hero Section */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="flex flex-col items-center"
        >
          <Image
            src="/icons/courses.png"
            alt="FunCare Courses"
            width={120}
            height={120}
            className="drop-shadow-lg mb-6"
          />

          <h1 className="text-5xl font-extrabold mb-4 text-[#E17349] font-heading">
            FunCare Institute Courses
          </h1>
          <p className="max-w-2xl text-center text-[#545454] text-lg leading-relaxed font-body">
            Coming Soon
          </p>
        </motion.div>
      </div>

      {/* Optional decorative glow */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0.2, 0.4, 0.2] }}
        transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
      >
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-[#FFDCA8]/40 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[#FFBD59]/25 rounded-full blur-3xl" />
      </motion.div>
    </section>
  );
}