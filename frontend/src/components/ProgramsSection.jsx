"use client";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import Image from "next/image";
import Link from "next/link";

const programs = [
  {
    title: "Culture Shift Cafés",
    desc: `Culture Shift Cafés are recurring, interactive sessions where leaders engage directly with the cultural frictions that can slow progress and strain team dynamics, including cross-cultural misunderstandings, multigenerational workstyle gaps, the remote–in-office divide, and departmental silos. Through facilitated knowledge exchange and experiential learning, leaders build cultural intelligence and create actionable strategies that improve communication, bridge workstyle gaps, and resolve conflicts. Each session equips leaders to unite teams around shared goals, boost employee engagement, and deliver stronger organizational outcomes.`,
    color: "bg-olive",
    icon: "/icons/CultureShiftCafes.png",
    link: "/programs/culture-shift-cafes",
  },
  {
    title: "Beats in the Boardroom",
    desc: `Beats in the Boardroom and Beyond is an interactive workplace learning experience that blends music, visual art, storytelling, and other expressive modalities to bridge cultural divides, spark curiosity, and build trust across team differences. Through exploring cultural teachings and traditions in creative and participatory ways, participants gain the competencies and skills to strengthen cultural literacy, enhancing their ability to understand, interpret, and work effectively across different cultural contexts.`,
    color: "bg-plum",
    icon: "/icons/BeatsintheBoardroom.png",
    link: "/programs/beats-in-the-boardroom",
  },
  {
    title: "Joy & Innovation Labs",
    desc: `Joy & Innovation Labs are monthly, play-based learning sessions where employees use the science and practice of play to unlock creativity, experimentation, and collaboration in solving real workplace challenges. Through hands-on activities, gamified problem-solving, and imaginative scenarios, participants learn to break habitual thinking patterns and explore new possibilities. Supported by frameworks like Design Thinking and Agile Collaboration, the labs channel the energy of play into structured innovation that delivers tangible business results.`,
    color: "bg-bronze",
    icon: "/icons/Joy&InnovationLabs.png",
    link: "/programs/joy-and-innovation-labs",
  },
  {
    title: "Courses",
    desc: `Explore our expanding library of FunCare courses designed to deepen learning and sustain cultural transformation. From microlearning modules to immersive certification programs, our courses empower individuals and teams to build joy, trust, and innovation into everyday work life.`,
    color: "bg-violet",
    icon: "/icons/courses.png",
    link: "/courses",
  },
];

export default function ProgramsSection() {
  return (
    <section
      id="programs"
      className="py-24 relative overflow-hidden text-violet"
      style={{
        background: "linear-gradient(120deg, #B3C865, #A45A84, #7991A5)",
        backgroundSize: "200% 200%",
        animation: "gradientShift 18s ease infinite alternate",
      }}
    >
      {/* gradient animation */}
      <style jsx>{`
        @keyframes gradientShift {
          0% {
            background-position: 0% 50%;
          }
          100% {
            background-position: 100% 50%;
          }
        }
      `}</style>

      {/* header */}
      <div className="max-w-7xl mx-auto px-6 text-center mb-16">
        <h2 className="text-4xl font-extrabold mb-4 text-violet drop-shadow-sm">
          Our Programs
        </h2>
        <p className="text-violet/90 max-w-2xl mx-auto">
          Explore our transformative learning experiences designed to spark
          creativity, empathy, and innovation.
        </p>
      </div>

      {/* 2×2 grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
        {programs.map((p, i) => (
          <Tilt key={i} tiltMaxAngleX={8} tiltMaxAngleY={8}>
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 180 }}
              className={`${p.color} text-white p-8 rounded-2xl shadow-lg hover:shadow-2xl flex flex-col justify-between transition-all`}
            >
              <div>
                <div className="flex justify-center mb-4">
                  <Image
                    src={p.icon}
                    alt={p.title}
                    width={80}
                    height={80}
                    className="drop-shadow-lg transition-transform duration-300 hover:scale-110"
                  />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-center">
                  {p.title}
                </h3>
                <p className="text-sm opacity-90 leading-relaxed text-center">
                  {p.desc}
                </p>
              </div>

              <div className="mt-6 flex justify-center">
                <Link
                  href={p.link}
                  className="mt-auto inline-block bg-white text-violet font-semibold px-5 py-2 rounded-full hover:bg-violetLight hover:text-white transition"
                >
                  Learn More
                </Link>
              </div>
            </motion.div>
          </Tilt>
        ))}
      </div>
    </section>
  );
}