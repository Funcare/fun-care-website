"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Logo from "/public/icons/WebsiteLogo.png"; // ensure logo is in public folder


export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 w-full z-50 backdrop-blur-md transition-all duration-500 ${
        scrolled
          ? "bg-white/80 shadow-lg border-b-2 border-yellow"
          : "bg-white/40 border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Image src={Logo} alt="FunCare Logo" width={50} height={50} className="rounded-full" />
          <h1 className="text-2xl font-extrabold text-teal tracking-tight">FunCare</h1>
        </div>

        <ul className="hidden md:flex space-x-8 text-gray-700 font-medium">
          {["About", "Programs", "Courses", "Resources", "Contact"].map((item) => (
            <motion.li key={item} whileHover={{ scale: 1.1 }}>
              <a href={`#${item.toLowerCase()}`} className="hover:text-coral transition-colors relative">
                {item}
              </a>
            </motion.li>
          ))}
        </ul>

        <motion.a
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          href="#join"
          className="hidden md:block bg-gradient-to-r from-yellow to-coral text-white px-6 py-2 rounded-full shadow-md font-semibold transition-all"
        >
          Join Now
        </motion.a>
      </div>
    </motion.nav>
  );
}