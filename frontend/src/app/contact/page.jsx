"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function ContactPage() {
  return (
    <main className="min-h-screen pt-20 sm:pt-24 md:pt-28 pb-16 bg-gradient-to-br from-[#90B7B3] via-[#FFF4E3] to-[#E59BAA] text-gray-800">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">

        {/* Breadcrumb */}
        <div className="mb-6 text-xs sm:text-sm text-gray-700">
          <Link href="/" className="hover:underline">Home</Link> /{" "}
          <span className="font-semibold">Contact</span>
        </div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-extrabold mb-4"
        >
          Contact Us
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="text-base sm:text-lg leading-relaxed mb-8 text-gray-700"
        >
          We're here to support you. Connect with us for questions, partnerships,
          or collaboration opportunities.
        </motion.p>

        {/* Contact Form */}
        <div className="bg-white/80 border border-gray-200 rounded-xl p-6 shadow-sm mb-10">
          <h2 className="text-xl font-semibold mb-4">Send us a message</h2>

          <form className="grid gap-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 border rounded-lg bg-gray-50"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 border rounded-lg bg-gray-50"
            />
            <textarea
              rows="4"
              placeholder="Your Message"
              className="w-full p-3 border rounded-lg bg-gray-50"
            ></textarea>

            <button className="px-6 py-3 rounded-lg bg-[#E59BAA] text-white font-semibold hover:bg-[#d78799] transition">
              Send Message
            </button>
          </form>
        </div>

        {/* Social Media Section */}
        <div className="bg-white/80 border border-gray-200 rounded-xl p-6 shadow-sm">
          <h2 className="text-xl font-semibold mb-4">Social Media</h2>

          <ul className="space-y-3 text-gray-700">
            <li>🎵 TikTok: <span className="font-semibold">@funcareinstitute</span></li>
            <li>📸 Instagram: <span className="font-semibold">@funcareinstitute</span></li>
            <li>🐦 Twitter: <span className="font-semibold">@funcareinst</span></li>
            <li>📧 Email: <span className="font-semibold">funcareinstitute@gmail.com</span></li>
          </ul>
        </div>
      </div>
    </main>
  );
}
