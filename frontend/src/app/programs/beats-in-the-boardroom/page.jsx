"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function BeatsInTheBoardroomPage() {
  return (
    <main className="min-h-screen pt-28 pb-20 bg-gradient-to-br from-[#90B7B3] via-[#FFF4E3] to-[#E59BAA] text-gray-800">
      <div className="max-w-5xl mx-auto px-6">
        {/* Breadcrumb */}
        <div className="mb-6 text-sm text-gray-600">
          <Link href="/" className="hover:underline">
            Home
          </Link>{" "}
          /{" "}
          <Link href="/#programs" className="hover:underline">
            Programs
          </Link>{" "}
          / <span className="font-semibold">Beats in the Boardroom</span>
        </div>

        <section className="grid gap-10 md:grid-cols-[2fr,1.2fr] items-start">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-4xl font-extrabold mb-4"
            >
              Beats in the Boardroom
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="text-lg leading-relaxed mb-6"
            >
              Beats in the Boardroom and Beyond is an interactive workplace learning
              experience that blends music, visual art, storytelling, and other
              expressive modalities to bridge cultural divides, spark curiosity, and
              build trust across team differences.
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-lg leading-relaxed mb-6"
            >
              Rather than talking about culture only in abstract terms, participants
              experience it—through sound, image, rhythm, and story. This opens up
              new ways of listening to one another and makes space for voices that are
              often quieter in traditional meetings.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="bg-white/70 border border-gray-200 rounded-2xl p-5 shadow-sm mb-8"
            >
              <h2 className="font-semibold text-xl mb-3">
                In Beats in the Boardroom, teams will:
              </h2>
              <ul className="space-y-2 text-sm md:text-base">
                <li>• Use music and art to explore identity, culture, and values.</li>
                <li>• Build trust through shared creative experiences.</li>
                <li>• Practice deep listening and storytelling across differences.</li>
                <li>• Strengthen cultural literacy in a playful, low-stakes way.</li>
                <li>• Leave with tangible practices to keep creativity alive at work.</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between"
            >
              <div>
                <h3 className="font-semibold mb-1 text-gray-900">
                  Ideal for teams who are:
                </h3>
                <p className="text-sm md:text-base text-gray-700">
                  Ready to experiment with arts-based learning, deepen trust across
                  diverse identities, or re-energize team culture through creativity.
                </p>
              </div>

              <motion.a
                href="#contact"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 25px rgba(144,183,179,0.7)",
                }}
                whileTap={{ scale: 0.96 }}
                className="mt-3 md:mt-0 inline-flex items-center justify-center px-6 py-3 
                           rounded-xl border-2 border-gray-800 bg-white text-gray-900 
                           font-semibold shadow-md"
              >
                Talk to us about Beats in the Boardroom
              </motion.a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 25 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="bg-white/75 rounded-2xl shadow-lg border border-gray-200 p-6 flex flex-col items-center"
          >
            <Image
              src="/icons/BeatsintheBoardroom.png"
              alt="Beats in the Boardroom"
              width={130}
              height={130}
              className="mb-4 drop-shadow-md"
            />
            <p className="text-sm text-gray-700 text-center">
              A playful, arts-based lab where rhythm, story, and image help teams
              see one another—and their culture—with fresh eyes.
            </p>
          </motion.div>
        </section>
      </div>
    </main>
  );
}