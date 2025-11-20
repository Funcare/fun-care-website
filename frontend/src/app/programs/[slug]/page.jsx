"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { fetchProgramBySlug } from "../../../utils/api";

export default function ProgramPage() {
  const params = useParams();
  const slug = params?.slug;
  const [program, setProgram] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadProgram = async () => {
      if (!slug) return;
      
      try {
        setLoading(true);
        const data = await fetchProgramBySlug(slug);
        if (data) {
          setProgram(data);
        } else {
          setError("Program not found");
        }
      } catch (err) {
        setError("Failed to load program");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    loadProgram();
  }, [slug]);

  if (loading) {
    return (
      <main className="min-h-screen pt-20 sm:pt-24 md:pt-28 pb-12 sm:pb-16 md:pb-20 bg-gradient-to-br from-[#F3C6A4] via-[#FFF4E3] to-[#F3C6A4] text-gray-800 flex items-center justify-center">
        <div className="text-center">
          <p className="text-lg">Loading program...</p>
        </div>
      </main>
    );
  }

  if (error || !program) {
    return (
      <main className="min-h-screen pt-20 sm:pt-24 md:pt-28 pb-12 sm:pb-16 md:pb-20 bg-gradient-to-br from-[#F3C6A4] via-[#FFF4E3] to-[#F3C6A4] text-gray-800 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Program Not Found</h1>
          <Link href="/" className="text-blue-600 hover:underline">
            Return to Home
          </Link>
        </div>
      </main>
    );
  }

  // Get gradient colors or use default
  const gradientColors = program.gradientColors && program.gradientColors.length >= 3
    ? program.gradientColors
    : ["#F3C6A4", "#FFF4E3", "#F3C6A4"];

  return (
    <main
      className="min-h-screen pt-20 sm:pt-24 md:pt-28 pb-12 sm:pb-16 md:pb-20 text-gray-800"
      style={{
        background: `linear-gradient(120deg, ${gradientColors[0]}, ${gradientColors[1]}, ${gradientColors[2]})`,
      }}
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Breadcrumb */}
        <div className="mb-4 sm:mb-6 text-xs sm:text-sm text-gray-600">
          <Link href="/" className="hover:underline">
            Home
          </Link>{" "}
          /{" "}
          <Link href="/#programs" className="hover:underline">
            Programs
          </Link>{" "}
          / <span className="font-semibold">{program.title}</span>
        </div>

        {/* Header */}
        <section className="grid gap-6 sm:gap-8 md:gap-10 md:grid-cols-[2fr,1.2fr] items-start">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-3 sm:mb-4"
            >
              {program.title}
            </motion.h1>

            {/* Render paragraphs from content */}
            {program.content?.paragraphs && program.content.paragraphs.length > 0 ? (
              program.content.paragraphs.map((paragraph, index) => (
                <motion.p
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.1 * (index + 1), duration: 0.6 }}
                  className="text-base sm:text-lg leading-relaxed mb-4 sm:mb-6"
                >
                  {paragraph}
                </motion.p>
              ))
            ) : (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.1, duration: 0.6 }}
                className="text-base sm:text-lg leading-relaxed mb-4 sm:mb-6"
              >
                {program.description}
              </motion.p>
            )}

            {/* Bullet Points */}
            {program.content?.bulletPoints && program.content.bulletPoints.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="bg-white/70 border border-gray-200 rounded-xl sm:rounded-2xl p-4 sm:p-5 shadow-sm mb-6 sm:mb-8"
              >
                <h2 className="font-semibold text-lg sm:text-xl mb-2 sm:mb-3">
                  In {program.title}, teams will:
                </h2>
                <ul className="space-y-2 text-sm sm:text-base">
                  {program.content.bulletPoints.map((point, index) => (
                    <li key={index}>• {point}</li>
                  ))}
                </ul>
              </motion.div>
            )}

            {/* Ideal for + CTA */}
            {(program.content?.idealFor || program.content?.ctaText) && (
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between"
              >
                {program.content.idealFor && (
                  <div>
                    <h3 className="font-semibold mb-1 text-gray-900 text-sm sm:text-base">
                      {program.content.idealFor.title || "Ideal for teams who are:"}
                    </h3>
                    <p className="text-xs sm:text-sm md:text-base text-gray-700">
                      {program.content.idealFor.description}
                    </p>
                  </div>
                )}

                {program.content.ctaText && (
                  <motion.a
                    href="#contact"
                    whileHover={{
                      scale: 1.05,
                      boxShadow: "0 0 25px rgba(229,155,170,0.6)",
                    }}
                    whileTap={{ scale: 0.96 }}
                    className="mt-3 md:mt-0 inline-flex items-center justify-center px-5 py-2.5 sm:px-6 sm:py-3 
                               rounded-xl border-2 border-gray-800 bg-white text-gray-900 
                               font-semibold shadow-md text-sm sm:text-base whitespace-nowrap"
                  >
                    {program.content.ctaText}
                  </motion.a>
                )}
              </motion.div>
            )}
          </div>

          {/* Side visual */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="bg-white/70 rounded-xl sm:rounded-2xl shadow-lg border border-gray-200 p-4 sm:p-6 flex flex-col items-center mt-6 md:mt-0"
          >
            <Image
              src={program.icon}
              alt={program.title}
              width={100}
              height={100}
              className="mb-3 sm:mb-4 drop-shadow-md sm:w-32 sm:h-32"
            />
            {program.content?.sideDescription && (
              <p className="text-xs sm:text-sm text-gray-700 text-center">
                {program.content.sideDescription}
              </p>
            )}
          </motion.div>
        </section>
      </div>
    </main>
  );
}

