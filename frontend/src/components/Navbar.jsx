"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Logo from "/public/icons/WebsiteLogo.png";

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
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "shadow-lg border-b-2 border-white/40"
          : "border-b border-transparent"
      }`}
      style={{
        background:
          "linear-gradient(90deg, #FFF4E3, #E59BAA, #FFF4E3)",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
        {/* Left: Logo + Name */}
        <div className="flex items-center gap-3">
          <Image
            src={Logo}
            alt="FunCare Logo"
            width={80}
            height={80}
            className="rounded-full"
          />
          <h1
  className="text-2xl font-medium text-gray-800 tracking-tight uppercase"
  style={{ fontFamily: "'Turret Road', sans-serif" }}
>
  Fun Care Institute.
</h1>
        </div>

        {/* Right: Navigation Links */}
        <ul className="hidden md:flex space-x-10 text-gray-800 font-medium">
          {["About", "Programs", "Resources", "Contact"].map((item) => (
            <motion.li key={item} whileHover={{ scale: 1.1 }}>
              <a
                href={`#${item.toLowerCase()}`}
                className="hover:text-[#E59BAA] transition-colors relative"
              >
                {item}
              </a>
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.nav>
  );
}