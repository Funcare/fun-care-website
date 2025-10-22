"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import FloatingShapes from "./FloatingShapes";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center overflow-hidden bg-gradient-to-br from-peach via-yellow to-teal">
      <FloatingShapes />

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 px-6"
      >
        <Image
          src="/icons/WebsiteLogo.png"
          alt="FunCare Logo"
          width={120}
          height={120}
          className="mx-auto mb-6 drop-shadow-lg animate-pulse"
        />

        <h1 className="text-5xl md:text-7xl font-extrabold text-gray-800 mb-4 leading-tight drop-shadow-md">
          Workplace Joy. <span className="text-coral">Leadership with Heart.</span>
        </h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="max-w-3xl mx-auto text-lg md:text-xl text-gray-700 mb-10"
        >
          FunCare empowers organizations to cultivate <span className="text-teal font-semibold">well-being, creativity,</span> 
          and <span className="text-yellow font-semibold">joyful leadership</span> at every level.
        </motion.p>

        <motion.a
          whileHover={{
            scale: 1.1,
            boxShadow: "0 0 25px rgba(255,209,102,0.5)",
            backgroundPosition: "100% 0",
          }}
          whileTap={{ scale: 0.95 }}
          href="#programs"
          className="bg-gradient-to-r from-yellow via-coral to-teal bg-[length:200%_auto] animate-gradientFlow text-white px-10 py-4 rounded-full text-lg font-semibold shadow-lg transition-all"
        >
          Become a FunCare Company Champion
        </motion.a>
      </motion.div>
    </section>
  );
}