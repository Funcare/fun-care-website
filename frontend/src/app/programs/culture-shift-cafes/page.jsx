"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function CultureShiftCafesPage() {
  return (
    <main
      className="min-h-screen pt-28 pb-20 bg-gradient-to-br from-[#F3C6A4] via-[#FFF4E3] to-[#F3C6A4] text-gray-800"
    >
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
          / <span className="font-semibold">Culture Shift Cafés</span>
        </div>

        {/* Header */}
        <section className="grid gap-10 md:grid-cols-[2fr,1.2fr] items-start">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-4xl font-extrabold mb-4"
            >
              Culture Shift Cafés
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="text-lg leading-relaxed mb-6"
            >
              Culture Shift Cafés are recurring, interactive sessions where leaders
              engage directly with the cultural frictions that can slow progress and
              strain team dynamics—cross-cultural misunderstandings, multigenerational
              workstyle gaps, remote–in-office divides, and departmental silos.
              Through facilitated knowledge exchange and experiential learning,
              leaders build cultural intelligence and create actionable strategies
              that improve communication and resolve conflict.
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-lg leading-relaxed mb-6"
            >
              Each Café is designed as a brave, joyful space where people can name
              tension without blame, listen across difference, and practice new ways
              of relating. Over time, these conversations help teams move from
              friction and fatigue toward shared purpose, trust, and belonging.
            </motion.p>

            {/* Bullets */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="bg-white/70 border border-gray-200 rounded-2xl p-5 shadow-sm mb-8"
            >
              <h2 className="font-semibold text-xl mb-3">
                In Culture Shift Cafés, teams will:
              </h2>
              <ul className="space-y-2 text-sm md:text-base">
                <li>• Surface real cultural frictions in a facilitated, supportive way.</li>
                <li>• Build shared language around culture, identity, and belonging.</li>
                <li>• Practice communication strategies that reduce misunderstandings.</li>
                <li>• Explore multigenerational and hybrid workstyle differences.</li>
                <li>• Co-create small, tangible shifts to strengthen everyday culture.</li>
              </ul>
            </motion.div>

            {/* Ideal for + CTA */}
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
                  Navigating cross-cultural friction, rapid growth, restructuring,
                  or seeking to deepen equity, inclusion, and belonging.
                </p>
              </div>

              <motion.a
                href="#contact"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 25px rgba(229,155,170,0.6)",
                }}
                whileTap={{ scale: 0.96 }}
                className="mt-3 md:mt-0 inline-flex items-center justify-center px-6 py-3 
                           rounded-xl border-2 border-gray-800 bg-white text-gray-900 
                           font-semibold shadow-md"
              >
                Talk to us about Culture Shift Cafés
              </motion.a>
            </motion.div>
          </div>

          {/* Side visual */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="bg-white/70 rounded-2xl shadow-lg border border-gray-200 p-6 flex flex-col items-center"
          >
            <Image
              src="/icons/CultureShiftCafes.png"
              alt="Culture Shift Cafés"
              width={120}
              height={120}
              className="mb-4 drop-shadow-md"
            />
            <p className="text-sm text-gray-700 text-center">
              A recurring space for courageous, joyful dialogue about culture, identity,
              and how we work together.
            </p>
          </motion.div>
        </section>
      </div>
    </main>
  );
}