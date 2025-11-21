"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import Logo from "/public/icons/WebsiteLogo.png";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "About", href: "#about" },
    { name: "Programs", href: "#programs" },
    { name: "Resources", href: "/resources" },  // ✔ SAYFAYA GİDER
    { name: "Contact", href: "/contact" }       // ✔ SAYFAYA GİDER
  ];

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
        background: "linear-gradient(90deg, #FFF4E3, #E59BAA, #FFF4E3)"
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <Image
            src={Logo}
            alt="FunCare Logo"
            width={60}
            height={60}
            className="rounded-full"
          />
          <h1 className="text-xl font-medium text-gray-800 uppercase">
            Fun Care Institute.
          </h1>
        </div>

        {/* Desktop Nav */}
        <ul className="hidden md:flex space-x-8 text-gray-800 font-medium">
          {navItems.map((item) => (
            <motion.li key={item.name} whileHover={{ scale: 1.1 }}>
              <a href={item.href} className="hover:text-[#E59BAA] transition">
                {item.name}
              </a>
            </motion.li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-gray-800"
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-white/40"
          >
            <ul className="px-4 py-4 space-y-4 text-gray-800 font-medium">
              {navItems.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block py-2 hover:text-[#E59BAA] text-lg"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
