"use client";

import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center text-center overflow-hidden bg-center pt-20 sm:pt-24"
      style={{
        backgroundImage: `url('/images/bulb.png')`,
        backgroundSize: "100%",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center -160px",
      }}
    >
      <style jsx>{`
        @media (max-width: 640px) {
          section {
            background-position: center center !important;
            background-size: 130% !important;
          }
        }
        @media (min-width: 641px) and (max-width: 768px) {
          section {
            background-position: center center !important;
            background-size: 160% !important;
          }
        }
        @media (min-width: 769px) and (max-width: 1024px) {
          section {
            background-position: center -120px !important;
            background-size: 110% !important;
          }
        }
        @media (min-width: 1025px) {
          section {
            background-position: center -160px !important;
            background-size: 100% !important;
          }
        }
      `}</style>
      {/* Darken ONLY the image */}
      <div className="absolute inset-0 bg-black/0"></div>

      {/* Soft gradient on top (not darker) */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#FFD166]/70 via-[#90B7B3]/40 to-[#FFD166]/70 pointer-events-none"></div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="relative z-10 px-4 sm:px-6 md:px-8 max-w-6xl mx-auto"
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-gray-800 mb-4 sm:mb-6 leading-tight drop-shadow-md">
          Engage Teams. Elevate Culture.{" "}
          <span className="text-gray-800 block sm:inline">Experience FunCare</span>
        </h1>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-base sm:text-lg md:text-xl text-gray-800 mb-8 sm:mb-10 px-2"
        >
          We integrate{" "}
          <span className="font-semibold text-gray-800">joy and care models</span>{" "}
          to connect teams to{" "}
          <span className="font-semibold text-gray-800">innovate, learn, and lead.</span>
        </motion.p>

        <div className="relative w-full flex justify-center items-start mt-6 sm:mt-8 md:mt-10">
          <motion.a
            whileHover={{
              scale: 1.07,
              background: "rgba(229, 155, 170, 0.45)",
              backdropFilter: "blur(8px)",
              boxShadow: "0 0 35px rgba(229, 155, 170, 0.6)",
            }}
            whileTap={{ scale: 0.96 }}
            style={{ transformOrigin: "center" }}
            href="#programs"
            className="
              px-6 py-3 sm:px-8 sm:py-4 md:px-10 md:py-5 
              text-sm sm:text-base md:text-lg font-extrabold
              rounded-xl
              text-gray-800
              border-2 border-gray-700
              transition-all duration-300
              bg-transparent
              shadow-md
              text-center
            "
          >
            Become a FunCare Institute Champion
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
}