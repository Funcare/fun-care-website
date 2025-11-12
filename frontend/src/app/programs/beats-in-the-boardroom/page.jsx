"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function BeatsInTheBoardroomPage() {
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
            src="/icons/BeatsintheBoardroom.png"
            alt="Beats in the Boardroom and Beyond"
            width={120}
            height={120}
            className="drop-shadow-lg mb-6"
          />

          <h1 className="text-5xl font-extrabold mb-4 text-[#E17349] font-heading">
            Beats in the Boardroom and Beyond
          </h1>
          <p className="max-w-2xl text-center text-[#545454] text-lg leading-relaxed font-body">
            An interactive workplace learning experience that blends music,
            art, and storytelling to bridge cultural divides, spark curiosity,
            and build trust across differences.
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
          Beats in the Boardroom and Beyond is an interactive workplace learning
          experience that blends music, visual art, storytelling, and other
          expressive modalities to bridge cultural divides, spark curiosity,
          and build trust across team differences.
        </p>

        <p className="text-lg leading-relaxed mb-12 text-center">
          By exploring cultural teachings and traditions in creative and
          participatory ways, participants gain competencies and skills to
          strengthen cultural literacy — enhancing their ability to understand,
          interpret, and work effectively across different cultural contexts.
        </p>

        {/* Key Learning Outcomes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center mt-10">
          {[
            {
              title: "Creative Connection",
              desc: "Use music and art as bridges to empathy, understanding, and shared purpose.",
            },
            {
              title: "Cultural Literacy",
              desc: "Build awareness of diverse traditions and perspectives through experiential learning.",
            },
            {
              title: "Team Harmony",
              desc: "Strengthen trust, belonging, and collaboration across diverse teams.",
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
            Connect to Learn More
          </Link>
        </div>
      </motion.div>
    </section>
  );
}