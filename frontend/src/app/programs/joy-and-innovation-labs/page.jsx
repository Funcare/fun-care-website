"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function JoyInnovationLabsPage() {
  return (
    <main className="min-h-screen pt-28 pb-20 bg-gradient-to-br from-[#FFF4E3] via-[#F3C6A4] to-[#FFD166] text-gray-800">
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
          / <span className="font-semibold">Joy & Innovation Labs</span>
        </div>

        <section className="grid gap-10 md:grid-cols-[2fr,1.2fr] items-start">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-4xl font-extrabold mb-4"
            >
              Joy & Innovation Labs
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="text-lg leading-relaxed mb-6"
            >
              Joy & Innovation Labs are monthly, play-based learning sessions where
              employees use the science and practice of play to unlock creativity,
              experimentation, and collaboration in solving real workplace challenges.
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-lg leading-relaxed mb-6"
            >
              Through hands-on activities, gamified problem-solving, and imaginative
              scenarios, participants learn to break habitual thinking patterns and
              explore new possibilities. Supported by frameworks like design thinking
              and agile collaboration, the labs channel the energy of play into
              structured innovation that delivers tangible business results.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="bg-white/70 border border-gray-200 rounded-2xl p-5 shadow-sm mb-8"
            >
              <h2 className="font-semibold text-xl mb-3">
                In Joy & Innovation Labs, teams will:
              </h2>
              <ul className="space-y-2 text-sm md:text-base">
                <li>• Work on real challenges through playful, creative lenses.</li>
                <li>• Experiment with rapid prototyping and low-risk testing.</li>
                <li>• Strengthen collaboration and cross-functional problem-solving.</li>
                <li>• Learn simple tools to keep innovation alive between sessions.</li>
                <li>• Connect joyfully, even when working on complex issues.</li>
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
                  Seeking fresh thinking, wanting to reduce burnout while still
                  delivering results, or building a culture where experimentation is
                  welcomed—not punished.
                </p>
              </div>

              <motion.a
                href="#contact"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 25px rgba(243,198,164,0.7)",
                }}
                whileTap={{ scale: 0.96 }}
                className="mt-3 md:mt-0 inline-flex items-center justify-center px-6 py-3 
                           rounded-xl border-2 border-gray-800 bg-white text-gray-900 
                           font-semibold shadow-md"
              >
                Talk to us about Joy & Innovation Labs
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
              src="/icons/Joy&InnovationLabs.png"
              alt="Joy & Innovation Labs"
              width={130}
              height={130}
              className="mb-4 drop-shadow-md"
            />
            <p className="text-sm text-gray-700 text-center">
              A structured, playful space where teams turn curiosity into concrete
              ideas and experiments.
            </p>
          </motion.div>
        </section>
      </div>
    </main>
  );
}