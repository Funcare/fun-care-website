"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function CoursesPage() {
  return (
    <main className="min-h-screen pt-28 pb-20 bg-gradient-to-br from-[#E59BAA] via-[#FFF4E3] to-[#90B7B3] text-gray-800 flex items-center">
      <div className="max-w-3xl mx-auto px-6 text-center">

        {/* Breadcrumb */}
        <div className="mb-6 text-sm text-gray-600">
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
          className="text-4xl font-extrabold mb-4"
        >
          Courses — Coming Soon
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="text-lg leading-relaxed text-gray-700 mb-8"
        >
          We’re building a growing library of joyful, creative, 
          and heart-centered learning experiences to support individuals, 
          educators, and organizational leaders.  
          <br />  
          <br />
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
          className="inline-block px-8 py-3 rounded-xl 
                     border-2 border-gray-800 bg-white text-gray-900 
                     font-semibold shadow-md transition"
        >
          Notify Me When Courses Launch
        </motion.a>
      </div>
    </main>
  );
}