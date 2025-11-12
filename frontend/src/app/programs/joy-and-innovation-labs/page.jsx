"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function JoyAndInnovationLabsPage() {
  return (
    <section
      className="relative min-h-screen flex flex-col justify-center text-center overflow-hidden font-body"
      style={{
        background: "linear-gradient(135deg, #F1E8E1, #FFF9F5)",
        backgroundAttachment: "scroll",
      }}
    >
      {/* Hero Section */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="flex flex-col items-center"
        >
          <Image
            src="/icons/Joy&InnovationLabs.png"
            alt="Joy & Innovation Labs"
            width={120}
            height={120}
            className="drop-shadow-lg mb-6"
          />

          <h1 className="text-5xl font-extrabold mb-4 text-[#E17349] font-heading">
            Joy & Innovation Labs
          </h1>
          <p className="max-w-2xl text-center text-[#545454] text-lg leading-relaxed font-body">
            Monthly play-based learning sessions that unlock creativity,
            experimentation, and collaboration — turning fun into a driver for innovation.
          </p>
        </motion.div>
      </div>

      {/* Content Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="bg-white text-[#545454] rounded-t-3xl shadow-xl max-w-6xl mx-auto px-8 py-16 relative z-20"
      >
        <h2 className="text-3xl font-bold mb-6 text-center text-[#E17349] font-heading">
          About the Program
        </h2>
        <p className="text-lg leading-relaxed mb-8 text-center">
          Joy & Innovation Labs are monthly, play-based learning sessions where
          employees use the science and practice of play to unlock creativity,
          experimentation, and collaboration in solving real workplace challenges.
        </p>

        <p className="text-lg leading-relaxed mb-12 text-center">
          Through hands-on activities, gamified problem-solving, and imaginative
          scenarios, participants learn to break habitual thinking patterns and
          explore new possibilities. Supported by frameworks like Design
          Thinking and Agile Collaboration, these labs channel the energy of play
          into structured innovation that delivers tangible business results.
        </p>

        {/* Key Learning Outcomes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center mt-10">
          {[
            {
              title: "Spark Creativity",
              desc: "Use playful experimentation to uncover new ways of thinking and solving problems.",
            },
            {
              title: "Build Collaboration",
              desc: "Strengthen team dynamics and collective creativity through shared playful experiences.",
            },
            {
              title: "Drive Innovation",
              desc: "Apply structured play to real-world business challenges using proven innovation frameworks.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="p-6 bg-[#FFF9F5] rounded-xl shadow-md border border-[#FFDCA8]/60"
            >
              <h3 className="text-xl font-semibold text-[#E17349] mb-3 font-heading">
                {item.title}
              </h3>
              <p className="text-[#545454] text-sm leading-relaxed font-body">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <Link
            href="/contact"
            className="inline-block bg-[#FFBD59] text-white font-semibold px-8 py-3 rounded-full shadow-md hover:bg-[#E17349] transition-all font-body"
          >
            Join a Lab
          </Link>
        </div>
      </motion.div>
    </section>
  );
}