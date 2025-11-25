"use client";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Facebook, Instagram, Linkedin, Youtube, Twitter } from "lucide-react";
import Image from "next/image";

const TikTokIcon = (props) => (
  <svg
    {...props}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M21 7.5c-3.2 0-5.8-2.6-5.8-5.8h-3.4v14.2a2.9 2.9 0 1 1-2.9-2.9c.5 0 1 .1 1.4.3V9.7c-.5-.1-1-.1-1.4-.1a6.6 6.6 0 1 0 6.6 6.6V7.7c1.2 1 2.8 1.6 4.5 1.6V7.5z" />
  </svg>
);

export default function Footer() {
  return (
    <footer
      className="relative text-white pt-20 pb-10 overflow-hidden backdrop-blur-lg"
      style={{
        background: "linear-gradient(90deg, #FFF4E3, #E59BAA, #FFF4E3)",
        backgroundSize: "100% 100%",
      }}
    >

      <div
        className="bulb-bg-footer absolute pointer-events-none"
        style={{
          backgroundImage: "url('/images/bulb2.png')",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          opacity: 0.40,
          transform: "rotate(40deg)",
        }}
      ></div>
      <style jsx>{`
        .bulb-bg-footer {
          bottom: -150px;
          left: -120px;
          width: 650px;
          height: 650px;
        }
        @media (max-width: 640px) {
          .bulb-bg-footer {
            bottom: 400px;
            left: 20px;
            width: 400px;
            height: 400px;
          }
        }
        @media (min-width: 641px) and (max-width: 768px) {
          .bulb-bg-footer {
            bottom: 10px;
            left: -60px;
            width: 500px;
            height: 500px;
          }
        }
        @media (min-width: 769px) {
          .bulb-bg-footer {
            bottom: -150px;
            left: -120px;
            width: 650px;
            height: 650px;
          }
        }
      `}</style>

      {/* Glow Overlay */}
      <div className="absolute inset-0 bg-white/10 mix-blend-overlay"></div>

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12"
      >
        {/* Brand Info */}
        <div>
          <div className="flex items-center gap-2 sm:gap-3 mb-4">
            <Image
              src="/icons/WebsiteLogo.png"
              alt="FunCare Logo"
              width={50}
              height={50}
              className="rounded-full drop-shadow-md"
            />
            <h1
              className="text-xl sm:text-2xl font-medium text-gray-800 tracking-tight uppercase drop-shadow-md"
              style={{ fontFamily: "'Turret Road', sans-serif" }}
            >
              Fun Care Institute.
            </h1>
          </div>

          <p className="text-gray-700 mb-4 leading-relaxed text-sm sm:text-base">
            Engage Teams. Elevate Culture. Experience FunCare
          </p>
          <div className="flex space-x-4 mt-6">
            {[
              { Icon: TikTokIcon, href: "https://www.tiktok.com/@funcareinstitute" },
              { Icon: Instagram, href: "https://instagram.com/funcareinstitute" },
              { Icon: Twitter, href: "https://twitter.com/funcareinst" },
            ].map(({ Icon, href }, i) => (
              <motion.a
                key={i}
                href={href}
                initial={{ scale: 1, rotate: 0 }}
                animate={{ scale: 1, rotate: 0 }}
                whileHover={{ scale: 1.15, rotate: 3 }}
                whileTap={{ scale: 0.95 }}
                className="p-2 bg-white/20 rounded-full shadow-md hover:bg-white/40 transition-all"
              >
                <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-gray-800 stroke-[1.6]" />
              </motion.a>
            ))}
          </div>
        </div>
        
        {/* Quick Links */}
<div>
  <h3 className="text-base sm:text-lg font-bold mb-4 text-gray-800">Quick Links</h3>
  <ul className="space-y-2 text-gray-700 text-sm sm:text-base">

    <li>
      <a href="#about" className="hover:text-cream transition-all">About</a>
    </li>

    <li>
      <a href="#programs" className="hover:text-cream transition-all">Programs</a>
    </li>

    <li>
      <a href="/courses" className="hover:text-cream transition-all">Courses</a>
    </li>

    <li>
      <a href="/resources" className="hover:text-cream transition-all">Resources</a>
    </li>

    <li>
      <a href="/contact" className="hover:text-cream transition-all">Contact</a>
    </li>

  </ul>
</div>


        {/* Contact */}
        <div>
          <h3 className="text-base sm:text-lg font-bold mb-4 text-gray-800">Contact Us</h3>
          <ul className="space-y-3 text-gray-700 text-sm sm:text-base">
            <li className="flex items-center gap-3">
              <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-gray-800 flex-shrink-0" />
              <span>Toronto, Canada</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-gray-800 flex-shrink-0" />
              <a href="mailto:funcareinstitute@gmail.com" className="hover:text-cream transition-all break-all">
                funcareinstitute@gmail.com
              </a>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="bg-white/15 backdrop-blur-md p-4 sm:p-6 rounded-2xl shadow-lg flex flex-col justify-between sm:col-span-2 lg:col-span-1 overflow-hidden"
        >
          <h3 className="text-base sm:text-lg font-bold mb-3 text-gray-800">Stay Connected</h3>
          <p className="text-gray-700 mb-4 text-sm sm:text-base">
            Join our community for tips, resources, and updates!
          </p>
          <form
            onSubmit={async (e) => {
              e.preventDefault();
              const email = e.target.email.value;

              const res = await fetch("http://localhost:5001/api/subscribe", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email }),
              });

              const data = await res.json();
              alert(data.message);
              e.target.reset();
            }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 min-w-0"
          >
            <input
              name="email"
              type="email"
              placeholder="Your email"
              className="flex-1 min-w-0 px-3 sm:px-4 py-2 sm:py-3 rounded-md border border-gray-700 bg-transparent text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-700 text-sm sm:text-base"
            />
            <motion.button
              whileHover={{
                scale: 1.07,
                background: "rgba(229,155,170,0.45)",
                backdropFilter: "blur(6px)",
                boxShadow: "0 0 25px rgba(229,155,170,0.6)",
              }}
              whileTap={{ scale: 0.96 }}
              className="
                px-4 sm:px-5 py-2 sm:py-3
                rounded-md
                border border-gray-700
                text-gray-800
                font-semibold
                bg-transparent
                transition-all duration-300
                text-sm sm:text-base
                whitespace-nowrap
                flex-shrink-0
              "
            >
              Subscribe
            </motion.button>
          </form>
        </motion.div>
      </motion.div>

      {/* Bottom Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 1 }}
        viewport={{ once: true }}
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 mt-12 sm:mt-16 border-t border-gray-600 pt-6 flex flex-col sm:flex-row items-center justify-between text-xs sm:text-sm text-gray-700 gap-4"
      >
        <p className="text-center sm:text-left">
          © {new Date().getFullYear()}{" "}
          <span className="font-semibold text-gray-800">FUN CARE INSTITUTE</span>. All Rights Reserved.
        </p>
        <div className="flex space-x-4 sm:space-x-6">
          <a href="#" className="hover:text-cream transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-cream transition-colors">Terms of Service</a>
          <a href="/admin/login" className="hover:text-cream transition-colors">Admin</a>
        </div>
      </motion.div>
    </footer>
  );
}