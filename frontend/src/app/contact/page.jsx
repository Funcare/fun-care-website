"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function ContactPage() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Şimdilik sadece fake submit
    alert("Thank you for reaching out! We'll get back to you soon.");
  };

  return (
    <main className="min-h-screen pt-20 sm:pt-24 md:pt-28 pb-16 bg-gradient-to-br from-[#90B7B3] via-[#FFF4E3] to-[#E59BAA] text-gray-800">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">

        {/* Breadcrumb */}
        <div className="mb-6 text-xs sm:text-sm text-gray-700">
          <Link href="/" className="hover:underline">
            Home
          </Link>{" "}
          / <span className="font-semibold">Contact</span>
        </div>

        {/* Başlık + açıklama */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <h1 className="text-3xl sm:text-4xl font-extrabold mb-3">
            Contact Us
          </h1>
          <p className="text-base sm:text-lg leading-relaxed text-gray-700">
            We're here to support you. Connect with us for questions,
            collaborations, or to learn more about Fun Care Institute.
          </p>
        </motion.div>

        {/* 2 kolon: solda info + social, sağda form */}
        <section className="grid gap-6 md:gap-8 md:grid-cols-[1.1fr,1.3fr] items-start">
          {/* Sol taraf: iletişim bilgileri + sosyal medya */}
          <div className="space-y-5">
            {/* Email kutusu */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white/75 border border-gray-200 rounded-2xl p-4 sm:p-5 shadow-sm"
            >
              <h2 className="font-semibold text-lg sm:text-xl text-gray-900 mb-2">
                Contact Details
              </h2>
              <p className="text-sm sm:text-base text-gray-700 mb-1">
                Email:
              </p>
              <a
                href="mailto:funcareinstitute@gmail.com"
                className="text-sm sm:text-base text-blue-600 hover:underline break-all"
              >
                funcareinstitute@gmail.com
              </a>
            </motion.div>

            {/* Sosyal medya kartı */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white/75 border border-gray-200 rounded-2xl p-4 sm:p-5 shadow-sm"
            >
              <h2 className="font-semibold text-lg sm:text-xl text-gray-900 mb-3">
                Social Media
              </h2>

              <div className="space-y-3 text-sm sm:text-base">
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2">
                    <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#E59BAA]/20 text-xs">
                      🎵
                    </span>
                    <span className="font-medium text-gray-800">TikTok</span>
                  </div>
                  <span className="text-gray-700">@funcareinstitute</span>
                </div>

                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2">
                    <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#E59BAA]/20 text-xs">
                      📸
                    </span>
                    <span className="font-medium text-gray-800">Instagram</span>
                  </div>
                  <span className="text-gray-700">@funcareinstitute</span>
                </div>

                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2">
                    <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#E59BAA]/20 text-xs">
                      🐦
                    </span>
                    <span className="font-medium text-gray-800">Twitter</span>
                  </div>
                  <span className="text-gray-700">@funcareinst</span>
                </div>
              </div>

              <p className="mt-4 text-xs sm:text-sm text-gray-500">
                Follow us for updates on programs, courses, and community events.
              </p>
            </motion.div>
          </div>

          {/* Sağ taraf: Form */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="bg-white/80 border border-gray-200 rounded-2xl p-5 sm:p-6 shadow-md"
          >
            <h2 className="font-semibold text-xl text-gray-900 mb-4">
              Send us a message
            </h2>
            <p className="text-sm sm:text-base text-gray-600 mb-5">
              Share your questions, ideas, or needs and we’ll get back to you.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-800 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  required
                  className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-[#E59BAA] focus:border-[#E59BAA] bg-white/90"
                  placeholder="Your full name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-800 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  required
                  className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-[#E59BAA] focus:border-[#E59BAA] bg-white/90"
                  placeholder="you@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-800 mb-1">
                  Message
                </label>
                <textarea
                  rows={4}
                  required
                  className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-[#E59BAA] focus:border-[#E59BAA] bg-white/90 resize-none"
                  placeholder="How can we help?"
                />
              </div>

              <div className="pt-2">
                <motion.button
                  whileHover={{
                    scale: 1.03,
                    boxShadow: "0 0 25px rgba(144,183,179,0.6)",
                  }}
                  whileTap={{ scale: 0.96 }}
                  type="submit"
                  className="w-full sm:w-auto px-6 py-2.5 rounded-xl border-2 border-gray-800 bg-white text-gray-900 font-semibold text-sm sm:text-base shadow-md"
                >
                  Send Message
                </motion.button>
              </div>
            </form>
          </motion.div>
        </section>
      </div>
    </main>
  );
}
