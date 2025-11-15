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
        className="absolute bottom-[-150px] left-[-120px] w-[650px] h-[650px] pointer-events-none"
        style={{
          backgroundImage: "url('/images/bulb2.png')",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          opacity: 0.40,
          transform: "rotate(40deg)",
        }}
      ></div>

      {/* Glow Overlay */}
      <div className="absolute inset-0 bg-white/10 mix-blend-overlay"></div>

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="relative z-10 max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12"
      >
        {/* Brand Info */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <Image
              src="/icons/WebsiteLogo.png"
              alt="FunCare Logo"
              width={50}
              height={50}
              className="rounded-full drop-shadow-md"
            />
            <h1
              className="text-2xl font-medium text-gray-800 tracking-tight uppercase drop-shadow-md"
              style={{ fontFamily: "'Turret Road', sans-serif" }}
            >
              Fun Care Institute.
            </h1>
          </div>

          <p className="text-gray-700 mb-4 leading-relaxed">
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
                <Icon className="w-6 h-6 text-gray-800 stroke-[1.6]" />
              </motion.a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-bold mb-4 text-gray-800">Quick Links</h3>
          <ul className="space-y-2 text-gray-700">
            {["About", "Programs", "Courses", "Resources", "Contact"].map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className="hover:text-cream transition-all"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-bold mb-4 text-gray-800">Contact Us</h3>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-center gap-3">
              <MapPin className="w-5 h-5 text-gray-800" />
              <span>Toronto, Canada</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-gray-800" />
              <a href="tel:+14164325568" className="hover:text-cream transition-all">
                +1 (416) 432‑5568
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-gray-800" />
              <a href="mailto:funcareinstitute@gmail.com" className="hover:text-cream transition-all">
                funcareinstitute@gmail.com
              </a>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="bg-white/15 backdrop-blur-md p-6 rounded-2xl shadow-lg flex flex-col justify-between w-[140%] -ml-[7%]"
        >
          <h3 className="text-lg font-bold mb-3 text-gray-800">Stay Connected</h3>
          <p className="text-gray-700 mb-4">
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
  className="flex flex-col sm:flex-row gap-4"
>
            <input
              name="email"
  type="email"
  placeholder="Your email"
              className="flex-grow px-4 py-3 rounded-md border border-gray-700 bg-transparent text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-700"
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
                px-6 py-3
                rounded-md
                border border-gray-700
                text-gray-800
                font-semibold
                bg-transparent
                transition-all duration-300
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
        className="relative z-10 max-w-7xl mx-auto px-6 mt-16 border-t border-gray-600 pt-6 flex flex-col md:flex-row items-center justify-between text-sm text-gray-700"
      >
        <p>
          © {new Date().getFullYear()}{" "}
          <span className="font-semibold text-gray-800">FUN CARE INSTITUTE</span>. All Rights Reserved.
        </p>
        <div className="flex space-x-6 mt-4 md:mt-0">
          <a href="#" className="hover:text-cream transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-cream transition-colors">Terms of Service</a>
        </div>
      </motion.div>
    </footer>
  );
}