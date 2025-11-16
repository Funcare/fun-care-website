"use client";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import Image from "next/image";
import Link from "next/link";

const programs = [
  {
    title: "Culture Shift Cafés",
    desc: `Culture Shift Cafés are recurring, interactive sessions where leaders engage directly with the cultural frictions that can slow progress and strain team dynamics, including cross-cultural misunderstandings, multigenerational workstyle gaps, the remote–in-office divide, and departmental silos. Through facilitated knowledge exchange and experiential learning, leaders build cultural intelligence and create actionable strategies that improve communication, bridge workstyle gaps, and resolve conflicts. Each session equips leaders to unite teams around shared goals, boost employee engagement, and deliver stronger organizational outcomes.`,
    color: "bg-coral",
    icon: "/icons/CultureShiftCafes.png",
    link: "/programs/culture-shift-cafes",
  },
  {
    title: "Beats in the Boardroom",
    desc: `Beats in the Boardroom and Beyond is an interactive workplace learning experience that blends music, visual art, storytelling, and other expressive modalities to bridge cultural divides, spark curiosity, and build trust across team differences. Through exploring cultural teachings and traditions in creative and participatory ways, participants gain the competencies and skills to strengthen cultural literacy, enhancing their ability to understand, interpret, and work effectively across different cultural contexts.`,
    color: "bg-teal",
    icon: "/icons/BeatsintheBoardroom.png",
    link: "/programs/beats-in-the-boardroom",
  },
  {
    title: "Joy & Innovation Labs",
    desc: `Joy & Innovation Labs are monthly, play-based learning sessions where employees use the science and practice of play to unlock creativity, experimentation, and collaboration in solving real workplace challenges. Through hands-on activities, gamified problem-solving, and imaginative scenarios, participants learn to break habitual thinking patterns and explore new possibilities. Supported by frameworks like Design Thinking and Agile Collaboration, the labs channel the energy of play into structured innovation that delivers tangible business results.`,
    color: "bg-peach",
    icon: "/icons/Joy&InnovationLabs.png",
    link: "/programs/joy-and-innovation-labs",
  },
  {
    title: "Courses",
    desc: `Explore our expanding library of FunCare courses designed to deepen learning and sustain cultural transformation. From microlearning modules to immersive certification programs, our courses empower individuals and teams to build joy, trust, and innovation into everyday work life.`,
    color: "bg-yellow",
    icon: "/icons/courses.png",
    link: "/courses",
  },
];

export default function ProgramsSection() {
  return (
    <section
      id="programs"
      className="py-12 sm:py-16 md:py-20 lg:py-24 relative overflow-hidden text-gray-800"
      style={{
        background: "linear-gradient(120deg, #F3C6A4, #FFF4E3, #F3C6A4)",
        backgroundSize: "200% 200%",
        animation: "gradientShift 18s ease infinite alternate",
      }}
    >
      <div
        className="bulb-bg-programs absolute pointer-events-none"
        style={{
          backgroundImage: "url('/images/bulb2.png')",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          opacity: 0.50,
        }}
      ></div>
      <style jsx>{`
        @keyframes gradientShift {
          0% {
            background-position: 0% 50%;
          }
          100% {
            background-position: 100% 50%;
          }
        }
        .bulb-bg-programs {
          top: 25%;
          right: -300px;
          width: 900px;
          height: 900px;
          transform: translateY(-50%) rotate(180deg);
        }
        @media (max-width: 640px) {
          .bulb-bg-programs {
            top: 25%;
            right: -150px;
            width: 400px;
            height: 400px;
            transform: translateY(-50%) rotate(180deg);
          }
        }
        @media (min-width: 641px) and (max-width: 768px) {
          .bulb-bg-programs {
            top: 25%;
            right: -200px;
            width: 600px;
            height: 600px;
            transform: translateY(-50%) rotate(180deg);
          }
        }
        @media (min-width: 769px) {
          .bulb-bg-programs {
            top: 25%;
            right: -300px;
            width: 900px;
            height: 900px;
            transform: translateY(-50%) rotate(180deg);
          }
        }
      `}</style>

      {/* header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center mb-10 sm:mb-12 md:mb-16">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-3 sm:mb-4 text-gray-800 drop-shadow-sm">
          Our Programs
        </h2>
        <p className="text-gray-700 max-w-2xl mx-auto text-sm sm:text-base md:text-lg px-4">
          Explore our transformative learning experiences designed to spark
          creativity, empathy, and innovation.
        </p>
      </div>

      {/* 2×2 grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-10 max-w-5xl mx-auto px-4 sm:px-6">
        {programs.map((p, i) => (
          <Tilt key={i} tiltMaxAngleX={8} tiltMaxAngleY={8}>
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 180 }}
              className={`${p.color} p-5 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl shadow-lg hover:shadow-2xl flex flex-col justify-between transition-all`}
            >
              <div>
                <div className="flex justify-center mb-3 sm:mb-4">
                  <Image
                    src={p.icon}
                    alt={p.title}
                    width={60}
                    height={60}
                    className="drop-shadow-lg transition-transform duration-300 hover:scale-110 sm:w-20 sm:h-20"
                  />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3 text-center text-gray-800">
                  {p.title}
                </h3>
                <p className="text-xs sm:text-sm opacity-90 leading-relaxed text-center text-gray-700">
                  {p.desc}
                </p>
              </div>

              <div className="mt-4 sm:mt-6 flex justify-center">
                <motion.a
                  href={p.link}
                  whileHover={{
                    scale: 1.07,
                    background: "rgba(229, 155, 170, 0.45)",
                    backdropFilter: "blur(8px)",
                    boxShadow: "0 0 35px rgba(229, 155, 170, 0.6)",
                  }}
                  whileTap={{ scale: 0.96 }}
                  className="
                    mt-auto inline-block
                    bg-transparent
                    text-gray-800 font-semibold
                    px-5 py-2 sm:px-6 sm:py-3
                    rounded-md
                    border border-gray-700
                    transition-all duration-300
                    text-sm sm:text-base
                  "
                >
                  Learn More
                </motion.a>
              </div>
            </motion.div>
          </Tilt>
        ))}
      </div>
    </section>
  );
}