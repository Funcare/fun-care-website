"use client";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import Image from "next/image";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative py-24 bg-gradient-to-br from-cream via-yellow/20 to-peach/40 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        {/* Left: Text */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-6">
            About <span className="text-coral">FunCare</span>
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            At FunCare, we believe joy and connection are the foundation of
            great leadership. Our mission is to create workplaces that inspire
            <span className="text-teal font-semibold"> empathy, creativity,</span> and
            <span className="text-yellow font-semibold"> purpose-driven growth.</span>
          </p>
          <motion.a
            whileHover={{ scale: 1.05 }}
            href="#programs"
            className="inline-block bg-gradient-to-r from-teal to-coral text-white px-8 py-3 rounded-full font-semibold shadow-md"
          >
            Explore Our Programs
          </motion.a>
        </motion.div>

        {/* Right: 3D Image Card */}
        <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10} glareEnable={true} glareColor="#ffffff" glareMaxOpacity={0.3}>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-xl overflow-hidden"
          >
            <Image
              src="/images/team-collaboration.jpg"
              alt="FunCare Team Collaboration"
              width={600}
              height={400}
              className="object-cover w-full h-full"
            />
          </motion.div>
        </Tilt>
      </div>
    </section>
  );
}