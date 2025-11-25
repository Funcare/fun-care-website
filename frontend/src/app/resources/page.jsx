"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function ResourcesPage() {
  return (
    <main className="min-h-screen pt-24 pb-20 bg-gradient-to-br from-[#90B7B3] via-[#FFF4E3] to-[#E59BAA] text-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Breadcrumb */}
        <div className="mb-8 text-xs sm:text-sm text-gray-700">
          <Link href="/" className="hover:underline">Home</Link> /{" "}
          <span className="font-semibold">Resources</span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-extrabold mb-10">
          Resources
        </h1>

        {/* Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">

          {/* CARD 1 — REPORT */}
          <motion.div
            whileHover={{ scale: 1.03, y: -5 }}
            transition={{ duration: 0.25 }}
            className="bg-white rounded-2xl shadow-md overflow-hidden border border-gray-200"
          >
            <div className="relative h-52 bg-gray-100 w-full">
              <Image
                src="/placeholders/resource1.png"
                alt="Report Placeholder"
                fill
                className="object-cover"
              />
            </div>

            <div className="p-5">
              <p className="text-xs font-semibold tracking-wider text-gray-500">
                REPORT
              </p>

              <p className="text-[13px] mt-2 inline-block px-2 py-1 bg-gray-100 text-gray-600 rounded-md">
                Coming Soon
              </p>

              <Link
                href="#"
                className="block mt-4 font-medium text-sm text-gray-900 hover:text-[#E59BAA] transition"
              >
                View Resource →
              </Link>
            </div>
          </motion.div>

          {/* CARD 2 — WORKSHOP */}
          <motion.div
            whileHover={{ scale: 1.03, y: -5 }}
            transition={{ duration: 0.25 }}
            className="bg-white rounded-2xl shadow-md overflow-hidden border border-gray-200"
          >
            <div className="relative h-52 bg-gray-100 w-full">
              <Image
                src="/placeholders/resource2.png"
                alt="Workshop Placeholder"
                fill
                className="object-cover"
              />
            </div>

            <div className="p-5">
              <p className="text-xs font-semibold tracking-wider text-gray-500">
                WORKSHOP
              </p>

              <p className="text-[13px] mt-2 inline-block px-2 py-1 bg-gray-100 text-gray-600 rounded-md">
                Coming Soon
              </p>

              <Link
                href="#"
                className="block mt-4 font-medium text-sm text-gray-900 hover:text-[#E59BAA] transition"
              >
                View Resource →
              </Link>
            </div>
          </motion.div>

          {/* CARD 3 — GUIDE */}
          <motion.div
            whileHover={{ scale: 1.03, y: -5 }}
            transition={{ duration: 0.25 }}
            className="bg-white rounded-2xl shadow-md overflow-hidden border border-gray-200"
          >
            <div className="relative h-52 bg-gray-100 w-full">
              <Image
                src="/placeholders/resource3.png"
                alt="Guide Placeholder"
                fill
                className="object-cover"
              />
            </div>

            <div className="p-5">
              <p className="text-xs font-semibold tracking-wider text-gray-500">
                GUIDE
              </p>

              <p className="text-[13px] mt-2 inline-block px-2 py-1 bg-gray-100 text-gray-600 rounded-md">
                Coming Soon
              </p>

              <Link
                href="#"
                className="block mt-4 font-medium text-sm text-gray-900 hover:text-[#E59BAA] transition"
              >
                View Resource →
              </Link>
            </div>
          </motion.div>

        </div>
      </div>
    </main>
  );
}
