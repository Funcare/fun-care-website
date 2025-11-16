"use client";
import Image from "next/image";
import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";
import Tilt from "react-parallax-tilt";
import { useRef, useState } from "react";
import FloatingShapes from "./FloatingShapes";

export default function AboutSection() {
  const ref = useRef(null);
  const videoRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.4, 0.8, 1], [0, 1, 1, 0]);

  const pulse = {
    scale: [1, 1.05, 1],
    opacity: [0.3, 0.6, 0.3],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut",
    },
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
    videoRef.current?.pause();
  };
  const handleMouseLeave = () => {
    setIsHovered(false);
    videoRef.current?.play();
  };

  return (
    <section
      id="about"
      ref={ref}
      className="relative py-12 sm:py-16 md:py-20 lg:py-24 overflow-hidden text-gray-800"
      style={{
        backgroundImage: "url('/images/bulb2.png'), linear-gradient(120deg, #90B7B3, #FFF4E3, #90B7B3)",
        backgroundSize: "50%, 200% 200%",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "-45% center, 0% 50%",
        animation: "gradientFlow 18s ease infinite alternate",
      }}
    >
      <div className="absolute inset-0 bg-white/50 pointer-events-none"></div>
      <style jsx>{`
        @keyframes gradientFlow {
          0% {
            background-position: -45% center, 0% 50%;
          }
          100% {
            background-position: -45% center, 100% 50%;
          }
        }
        @media (max-width: 640px) {
          section {
            background-size: 140%, 200% 200% !important;
            background-position: center -40px, 0% 50% !important;
          }
          @keyframes gradientFlow {
            0% {
              background-position: center -40px, 0% 50%;
            }
            100% {
              background-position: center -40px, 100% 50%;
            }
          }
        }
        @media (min-width: 641px) and (max-width: 768px) {
          section {
            background-size: 120%, 200% 200% !important;
            background-position: center center, 0% 50% !important;
          }
          @keyframes gradientFlow {
            0% {
              background-position: center center, 0% 50%;
            }
            100% {
              background-position: center center, 100% 50%;
            }
          }
        }
        @media (min-width: 769px) and (max-width: 1024px) {
          section {
            background-size: 60%, 200% 200% !important;
            background-position: -40% center, 0% 50% !important;
          }
          @keyframes gradientFlow {
            0% {
              background-position: -40% center, 0% 50%;
            }
            100% {
              background-position: -40% center, 100% 50%;
            }
          }
        }
        @media (min-width: 1025px) {
          section {
            background-size: 50%, 200% 200% !important;
            background-position: -45% center, 0% 50% !important;
          }
        }
      `}</style>

      {/* Floating Decorative Shapes */}
      <FloatingShapes />

      {/* Soft Pulse Accent Behind Title */}
      <motion.div
        className="absolute top-20 sm:top-32 md:top-40 left-1/2 -translate-x-1/2 w-48 h-48 sm:w-64 sm:h-64 md:w-72 md:h-72 bg-coral/30 rounded-full blur-3xl"
        animate={pulse}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-8 grid md:grid-cols-2 gap-8 sm:gap-12 md:gap-16 items-center">
        {/* Left: Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-800 mb-6 sm:mb-8 relative z-10">
            About <span className="text-gray-800">FunCare</span>
          </h2>

          {[
            <>
              In today’s fast-paced workplace, burnout, disconnection and cultural divides
              diminish creativity, trust and performance.{" "}
              <span className="relative group cursor-pointer text-gray-700 font-semibold">
                FUNCARE
                <span className="absolute left-0 bottom-0 w-0 group-hover:w-full h-0.5 bg-gray-500 transition-all duration-300"></span>
              </span>{" "}
              is the antidote to friction and fatigue in the workplace.
            </>,
            <>
              We bring{" "}
              <span className="relative group cursor-pointer text-gray-700 font-semibold">
                play-based learning
                <span className="absolute left-0 bottom-0 w-0 group-hover:w-full h-0.5 bg-gray-500 transition-all duration-300"></span>
              </span>
              ,{" "}
              <span className="relative group cursor-pointer text-gray-700 font-semibold">
                creative expression
                <span className="absolute left-0 bottom-0 w-0 group-hover:w-full h-0.5 bg-gray-500 transition-all duration-300"></span>
              </span>{" "}
              and{" "}
              <span className="relative group cursor-pointer text-gray-700 font-semibold">
                collective care
                <span className="absolute left-0 bottom-0 w-0 group-hover:w-full h-0.5 bg-gray-500 transition-all duration-300"></span>
              </span>{" "}
              into the rhythm of work to renew wellbeing and engagement.
            </>,
            <>
              When people feel connected and cared for, performance follows. Grounded in research on{" "}
              <span className="relative group cursor-pointer text-gray-700 font-semibold">
                joy pedagogy
                <span className="absolute left-0 bottom-0 w-0 group-hover:w-full h-0.5 bg-gray-500 transition-all duration-300"></span>
              </span>
              ,{" "}
              <span className="relative group cursor-pointer text-gray-700 font-semibold">
                co-creation
                <span className="absolute left-0 bottom-0 w-0 group-hover:w-full h-0.5 bg-gray-500 transition-all duration-300"></span>
              </span>{" "}
              and{" "}
              <span className="relative group cursor-pointer text-gray-700 font-semibold">
                organizational wellbeing
                <span className="absolute left-0 bottom-0 w-0 group-hover:w-full h-0.5 bg-gray-500 transition-all duration-300"></span>
              </span>
              , FUNCARE programs help individuals and teams build cultures of engagement, creativity and care—boosting employee satisfaction, innovation and productivity.
            </>,
          ].map((text, i) => (
            <motion.p
              key={i}
              className="text-base sm:text-lg text-gray-700 leading-relaxed mb-4 sm:mb-5"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2, duration: 0.7 }}
              viewport={{ once: true }}
            >
              {text}
            </motion.p>
          ))}

          {/* CTA Button */}
          <motion.a
            whileHover={{
              scale: 1.07,
              background: "rgba(229, 155, 170, 0.45)",
              backdropFilter: "blur(8px)",
              boxShadow: "0 0 35px rgba(229, 155, 170, 0.6)",
            }}
            href="#programs"
            className="
              px-6 py-2 sm:px-8 sm:py-2 
              text-base sm:text-lg font-extrabold
              rounded-xl
              text-gray-800
              border-2 border-gray-700
              transition-all duration-300
              bg-transparent
              shadow-md
              mt-4
              inline-block
            "
          >
            Explore Our Programs
          </motion.a>

          {/* Did You Know Card */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-8 sm:mt-10 p-4 sm:p-6 bg-white/80 backdrop-blur-md rounded-xl shadow-md border border-teal/10"
          >
            <div className="flex items-start gap-3 sm:gap-4">
              <Image
                src="/icons/idea-icon.png"
                alt="Idea Icon"
                width={32}
                height={32}
                className="drop-shadow-md sm:w-9 sm:h-9 flex-shrink-0"
              />
              <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                <span className="font-semibold">Did you know?</span> FunCare's programs are rooted in
                research on <span className="text-gray-700 font-semibold">joy pedagogy</span> and{" "}
                <span className="text-gray-700 font-semibold">collective wellbeing</span> — bridging the
                gap between creativity and care at work.
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* Right: Parallax Video */}
        <Tilt
          tiltMaxAngleX={10}
          tiltMaxAngleY={10}
          glareEnable={true}
          glareColor="#ffffff"
          glareMaxOpacity={0.3}
          transitionSpeed={2500}
        >
          <motion.div
            style={{ y, opacity }}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="relative bg-white rounded-2xl shadow-xl overflow-hidden"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <video
              ref={videoRef}
              src="/videos/funcare-collaboration.mp4"
              muted
              loop
              autoPlay
              playsInline
              className="object-cover w-full h-[280px] sm:h-[350px] md:h-[420px] lg:h-[580px]"
            />

            {/* Hover overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: isHovered ? 0.3 : 0 }}
              className="absolute inset-0 bg-teal/40 backdrop-blur-sm transition-all duration-300"
            />
          </motion.div>
        </Tilt>
      </div>

      {/* Motion trail line */}
      <motion.div
        className="absolute bottom-10 left-0 right-0 h-px bg-gradient-to-r from-transparent via-coral/50 to-transparent"
        style={{ scaleX: useSpring(useMotionValue(1), { stiffness: 50, damping: 20 }) }}
        animate={{ opacity: [0.3, 0.8, 0.3] }}
        transition={{ duration: 3, repeat: Infinity }}
      />
    </section>
  );
} 