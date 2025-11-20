"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function ResourcesPage() {
  return (
    <main className="min-h-screen pt-20 sm:pt-24 md:pt-28 pb-16 bg-gradient-to-br from-[#90B7B3] via-[#FFF4E3] to-[#E59BAA] text-gray-800">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">

        {/* Breadcrumb */}
        <div className="mb-6 text-xs sm:text-sm text-gray-700">
          <Link href="/" className="hover:underline">
            Home
          </Link>{" "}
          / <span className="font-semibold">Resources</span>
        </div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-extrabold mb-4"
        >
          Resources
        </motion.h1>

        {/* Placeholder text */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="text-base sm:text-lg leading-relaxed mb-8 text-gray-700"
        >
          
        </motion.p>

        {/* Coming Soon Box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white/70 border border-gray-300 rounded-xl p-6 shadow-md text-center"
        >
          <p className="text-gray-800 text-lg font-semibold">
            🚧 Resources will be updated soon.
          </p>
          <p className="text-gray-600 mt-2 text-sm">
            The team is currently preparing documentation, tools, and learning
            materials.
          </p>
        </motion.div>
      </div>
    </main>
  );
}
