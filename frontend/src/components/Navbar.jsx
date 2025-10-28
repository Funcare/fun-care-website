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
          "linear-gradient(90deg, #9A6D46, #76285A, #512867, #49637A, #8EA22D)",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 py-3 grid grid-cols-3 items-center">
        {/* Left: Logo */}
        <div className="flex justify-start items-center gap-3">
          <Image
            src={Logo}
            alt="FunCare Logo"
            width={50}
            height={50}
            className="rounded-full"
          />
          <h1 className="text-2xl font-extrabold text-white tracking-tight drop-shadow-md">
            FunCare
          </h1>
        </div>

        {/* Center: Navigation Links */}
        <ul className="hidden md:flex justify-center space-x-10 text-white font-medium">
          {["About", "Programs", "Resources", "Contact"].map((item) => (
            <motion.li key={item} whileHover={{ scale: 1.1 }}>
              <a
                href={`#${item.toLowerCase()}`}
                className="hover:text-oliveLight transition-colors relative"
              >
                {item}
              </a>
            </motion.li>
          ))}
        </ul>

        {/* Right: CTA Button */}
        <div className="flex justify-end">
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#join"
            className="hidden md:block bg-[#FAF3E0] text-violetLight font-semibold px-4 py-2 rounded-full shadow-md hover:bg-violetLight hover:text-white transition-all"
          >
            Become a Funcare Institute Champion
          </motion.a>
        </div>
      </div>
    </motion.nav>
  );
}