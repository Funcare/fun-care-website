"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function ContactPage() {
  return (
    <main className="min-h-screen pt-24 pb-20 bg-gradient-to-br from-[#90B7B3] via-[#FFF4E3] to-[#E59BAA] text-gray-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">

        {/* Breadcrumb */}
        <div className="mb-6 text-xs sm:text-sm text-gray-700">
          <Link href="/" className="hover:underline">Home</Link> /{" "}
          <span className="font-semibold">Contact</span>
        </div>

        {/* Header */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-extrabold mb-6"
        >
          Contact Us
        </motion.h1>

        {/* Form Section */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white/80 border border-gray-200 rounded-2xl p-6 shadow-lg mb-12"
        >
          <h2 className="text-xl font-semibold mb-4">Send Us a Message</h2>

          <form action="/api/sendEmail" method="POST" className="space-y-4">
            <input
              type="text"
              name="name"
              required
              placeholder="Your Name"
              className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#90B7B3]"
            />

            <input
              type="email"
              name="email"
              required
              placeholder="Your Email"
              className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#90B7B3]"
            />

            <textarea
              name="message"
              required
              rows="5"
              placeholder="Your Message..."
              className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#90B7B3]"
            />

            <button
              type="submit"
              className="w-full py-3 rounded-lg bg-[#90B7B3] hover:bg-[#7DA6A1] text-white font-semibold transition shadow-md"
            >
              Send Message
            </button>
          </form>
        </motion.div>

        {/* Social Media Section */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white/80 border border-gray-200 rounded-2xl p-6 shadow-lg"
        >
          <h2 className="text-xl font-semibold mb-4">Stay Connected With FunCare</h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">

            {/* TikTok */}
            <a
              href="https://tiktok.com/@funcareinstitute"
              target="_blank"
              className="flex flex-col items-center hover:scale-105 transition"
            >
              <Image
                src="/icons/tiktok.png"
                width={55}
                height={55}
                alt="TikTok"
                className="drop-shadow-md"
              />
              <span className="mt-2 text-gray-700 font-medium">@funcareinstitute</span>
            </a>

            {/* Instagram */}
            <a
              href="https://instagram.com/funcareinstitute"
              target="_blank"
              className="flex flex-col items-center hover:scale-105 transition"
            >
              <Image
                src="/icons/instagram.png"
                width={55}
                height={55}
                alt="Instagram"
                className="drop-shadow-md"
              />
              <span className="mt-2 text-gray-700 font-medium">@funcareinstitute</span>
            </a>

            {/* Twitter */}
            <a
              href="https://twitter.com/funcareinst"
              target="_blank"
              className="flex flex-col items-center hover:scale-105 transition"
            >
              <Image
                src="/icons/twitter.png"
                width={55}
                height={55}
                alt="Twitter"
                className="drop-shadow-md"
              />
              <span className="mt-2 text-gray-700 font-medium">@funcareinst</span>
            </a>

          </div>
        </motion.div>
      </div>
    </main>
  );
}
