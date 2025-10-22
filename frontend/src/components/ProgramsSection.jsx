"use client";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import Image from "next/image"; 

const programs = [
  {
    title: "Leadership with Heart",
    desc: "Develop compassionate leaders who inspire trust and belonging.",
    color: "from-teal to-coral",
    icon: "/icons/honesty_15898919.png", 
  },
  {
    title: "Workplace Joy",
    desc: "Boost morale and creativity with wellness-focused initiatives.",
    color: "from-yellow to-peach",
    icon: "/icons/expression_15874921.png",
  },
  {
    title: "FunCare Certification",
    desc: "Become a certified FunCare workplace and build lasting culture change.",
    color: "from-coral to-teal",
    icon: "/icons/heart_16398408.png",
  },
];

export default function ProgramsSection() {
  return (
    <section id="programs" className="py-24 bg-white text-gray-800">
      <div className="max-w-7xl mx-auto px-6 text-center mb-16">
        <h2 className="text-4xl font-extrabold mb-4">Our Programs</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Explore our transformative learning experiences designed for growth, creativity, and emotional intelligence.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {programs.map((p, i) => (
          <Tilt key={i} tiltMaxAngleX={10} tiltMaxAngleY={10}>
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 200 }}
              className={`bg-gradient-to-br ${p.color} text-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all flex flex-col items-center`}
            >
              {}
              <div className="mb-4">
                <Image
                  src={p.icon}
                  alt={p.title}
                  width={80}
                  height={80}
                  className="drop-shadow-lg transition-transform duration-300 hover:scale-110"
                />
              </div>

              <h3 className="text-2xl font-bold mb-2 text-center">{p.title}</h3>
              <p className="text-center opacity-90">{p.desc}</p>
            </motion.div>
          </Tilt>
        ))}
      </div>
    </section>
  );
}