"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function CoursesPage() {
  return (
    <main className="min-h-screen pt-20 sm:pt-24 md:pt-28 pb-12 sm:pb-16 md:pb-20 bg-gradient-to-br from-[#E59BAA] via-[#FFF4E3] to-[#90B7B3] text-gray-800 flex items-center">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">

        {/* Breadcrumb */}
        <div className="mb-4 sm:mb-6 text-xs sm:text-sm text-gray-600">
          <Link href="/" className="hover:underline">
            Home
          </Link>{" "}
          / <span className="font-semibold">Courses</span>
        </div>

        {/* Coming Soon */}
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-3 sm:mb-4"
        >
          Courses — Coming Soon
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="text-base sm:text-lg leading-relaxed text-gray-700 mb-6 sm:mb-8 px-2"
        >
          We're building a growing library of joyful, creative, 
          and heart-centered learning experiences to support individuals, 
          educators, and organizational leaders.  
          <br className="hidden sm:block" />  
          <br className="hidden sm:block" />
          FunCare Courses will include microlearning, immersive workshops, 
          and certification pathways — all rooted in joy, belonging, and 
          transformational pedagogy.
        </motion.p>

        {/* Notify CTA */}
        <motion.a
          href="#contact"
          whileHover={{
            scale: 1.06,
            boxShadow: "0 0 25px rgba(229,155,170,0.6)",
          }}
          whileTap={{ scale: 0.96 }}
          className="inline-block px-6 py-2.5 sm:px-8 sm:py-3 rounded-xl 
                     border-2 border-gray-800 bg-white text-gray-900 
                     font-semibold shadow-md transition text-sm sm:text-base"
        >
          Notify Me When Courses Launch
        </motion.a>
      </div>
    </main>
  );
}