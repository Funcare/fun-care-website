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

  // Parallax motion for video
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.4, 0.8, 1], [0, 1, 1, 0]);

  // Pulse animation for the accent blur circle
  const pulse = {
    scale: [1, 1.05, 1],
    opacity: [0.3, 0.6, 0.3],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut",
    },
  };

  // Hover play/pause for video
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
      className="relative py-24 overflow-hidden text-violet"
      style={{
        background: "linear-gradient(120deg, #B3C865, #8EA22D)",
        backgroundSize: "200% 200%",
        animation: "gradientFlow 18s ease infinite alternate",
      }}
    >
      <style jsx>{`
        @keyframes gradientFlow {
          0% {
            background-position: 0% 50%;
          }
          100% {
            background-position: 100% 50%;
          }
        }
      `}</style>

      {/* Floating Decorative Shapes */}
      <FloatingShapes />

      {/* Soft Pulse Accent Behind Title */}
      <motion.div
        className="absolute top-40 left-1/2 -translate-x-1/2 w-72 h-72 bg-plum/30 rounded-full blur-3xl"
        animate={pulse}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        {/* Left: Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-violet mb-8 relative z-10">
            About <span className="text-plum">FunCare</span>
          </h2>

          {[
            <>
              In today’s fast-paced workplace, burnout, disconnection and cultural divides
              diminish creativity, trust and performance.{" "}
              <span className="relative group cursor-pointer text-plum font-semibold">
                FUNCARE
                <span className="absolute left-0 bottom-0 w-0 group-hover:w-full h-0.5 bg-bronze transition-all duration-300"></span>
              </span>{" "}
              is the antidote to friction and fatigue in the workplace.
            </>,
            <>
              We bring{" "}
              <span className="relative group cursor-pointer text-bronze font-semibold">
                play-based learning
                <span className="absolute left-0 bottom-0 w-0 group-hover:w-full h-0.5 bg-plum transition-all duration-300"></span>
              </span>
              ,{" "}
              <span className="relative group cursor-pointer text-plum font-semibold">
                creative expression
                <span className="absolute left-0 bottom-0 w-0 group-hover:w-full h-0.5 bg-bronze transition-all duration-300"></span>
              </span>{" "}
              and{" "}
              <span className="relative group cursor-pointer text-bronze font-semibold">
                collective care
                <span className="absolute left-0 bottom-0 w-0 group-hover:w-full h-0.5 bg-plum transition-all duration-300"></span>
              </span>{" "}
              into the rhythm of work to renew wellbeing and engagement.
            </>,
            <>
              When people feel connected and cared for, performance follows. Grounded in research on{" "}
              <span className="relative group cursor-pointer text-plum font-semibold">
                joy pedagogy
                <span className="absolute left-0 bottom-0 w-0 group-hover:w-full h-0.5 bg-bronze transition-all duration-300"></span>
              </span>
              ,{" "}
              <span className="relative group cursor-pointer text-bronze font-semibold">
                co-creation
                <span className="absolute left-0 bottom-0 w-0 group-hover:w-full h-0.5 bg-plum transition-all duration-300"></span>
              </span>{" "}
              and{" "}
              <span className="relative group cursor-pointer text-plum font-semibold">
                organizational wellbeing
                <span className="absolute left-0 bottom-0 w-0 group-hover:w-full h-0.5 bg-bronze transition-all duration-300"></span>
              </span>
              , FUNCARE programs help individuals and teams build cultures of engagement, creativity and care—boosting employee satisfaction, innovation and productivity.
            </>,
          ].map((text, i) => (
            <motion.p
              key={i}
              className="text-lg text-violet leading-relaxed mb-5"
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
            whileHover={{ scale: 1.05 }}
            href="#programs"
            className="inline-block bg-violet text-white px-8 py-3 rounded-full font-semibold shadow-md hover:bg-violetLight transition-colors mt-4"
          >
            Explore Our Programs
          </motion.a>

          {/* Did You Know Card */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-10 p-6 bg-white/80 backdrop-blur-md rounded-xl shadow-md border border-violet/10"
          >
            <div className="flex items-start gap-4">
              <Image
                src="/icons/idea-icon.png"
                alt="Idea Icon"
                width={36}
                height={36}
                className="drop-shadow-md"
              />
              <p className="text-violet text-base leading-relaxed">
                <span className="font-semibold">Did you know?</span> FunCare’s programs are rooted in
                research on <span className="text-plum font-semibold">joy pedagogy</span> and{" "}
                <span className="text-bronze font-semibold">collective wellbeing</span> — bridging the
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
              className="object-cover w-full h-[420px] md:h-[580px]"
            />

            {/* Hover overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: isHovered ? 0.3 : 0 }}
              className="absolute inset-0 bg-violet/40 backdrop-blur-sm transition-all duration-300"
            />
          </motion.div>
        </Tilt>
      </div>

      {/* Motion trail line */}
      <motion.div
        className="absolute bottom-10 left-0 right-0 h-px bg-gradient-to-r from-transparent via-plum/50 to-transparent"
        style={{ scaleX: useSpring(useMotionValue(1), { stiffness: 50, damping: 20 }) }}
        animate={{ opacity: [0.3, 0.8, 0.3] }}
        transition={{ duration: 3, repeat: Infinity }}
      />
    </section>
  );
}