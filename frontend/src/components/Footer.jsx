"use client";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Facebook, Instagram, Linkedin, Youtube } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer
      className="relative text-white pt-20 pb-10 overflow-hidden backdrop-blur-lg"
      style={{
        background:
          "linear-gradient(135deg, #C49B73, #9A6D46, #76285A, #512867, #49637A, #8EA22D)",
        backgroundSize: "400% 400%",
        animation: "footerRainbowFlow 20s ease infinite alternate",
      }}
    >
      {/* Gradient animation keyframes */}
      <style jsx>{`
        @keyframes footerRainbowFlow {
          0% {
            background-position: 0% 50%;
          }
          100% {
            background-position: 100% 50%;
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
            <h2 className="text-2xl font-extrabold text-white drop-shadow-md">FunCare</h2>
          </div>
          <p className="text-white/90 mb-4 leading-relaxed">
            Empowering workplaces with <span className="font-semibold">joy, leadership,</span> and 
            <span className="font-semibold"> heart-centered connection.</span>
          </p>
          <div className="flex space-x-4 mt-6">
            {[
              { Icon: Facebook, href: "#" },
              { Icon: Instagram, href: "#" },
              { Icon: Linkedin, href: "#" },
              { Icon: Youtube, href: "#" },
            ].map(({ Icon, href }, i) => (
              <motion.a
                key={i}
                href={href}
                whileHover={{ scale: 1.2, rotate: 5 }}
                className="p-2 bg-white/20 rounded-full shadow-md hover:bg-white/40 transition-all"
              >
                <Icon className="w-5 h-5 text-white" />
              </motion.a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-bold mb-4 text-white">Quick Links</h3>
          <ul className="space-y-2 text-white/80">
            {["About", "Programs", "Courses", "Resources", "Contact"].map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className="hover:text-white transition-all"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-bold mb-4 text-white">Contact Us</h3>
          <ul className="space-y-3 text-white/85">
            <li className="flex items-center gap-3">
              <MapPin className="w-5 h-5 text-white" />
              <span>123 Wellness Ave, Toronto, ON</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-white" />
              <a href="tel:+1234567890" className="hover:text-white transition-all">
                +1 (234) 567-890
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-white" />
              <a href="mailto:hello@funcare.com" className="hover:text-white transition-all">
                hello@funcare.com
              </a>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="bg-white/15 backdrop-blur-md p-6 rounded-2xl shadow-lg flex flex-col justify-between w-[140%] -ml-[7%]"
        >
          <h3 className="text-lg font-bold mb-3 text-white">Stay Connected</h3>
          <p className="text-white/85 mb-4">
            Join our community for tips, resources, and updates!
          </p>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex flex-col sm:flex-row gap-4"
          >
            <input
              type="email"
              placeholder="Your email"
              className="flex-grow px-4 py-2 rounded-full border border-white/30 bg-white/10 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 15px rgba(255,255,255,0.3)",
              }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-violet font-semibold px-5 py-2 rounded-full shadow-md hover:bg-violetLight hover:text-white transition-all"
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
        className="relative z-10 max-w-7xl mx-auto px-6 mt-16 border-t border-white/30 pt-6 flex flex-col md:flex-row items-center justify-between text-sm text-white/80"
      >
        <p>
          © {new Date().getFullYear()}{" "}
          <span className="font-semibold text-white">FunCare Institute</span>. All Rights Reserved.
        </p>
        <div className="flex space-x-6 mt-4 md:mt-0">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
        </div>
      </motion.div>
    </footer>
  );
}