"use client";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Facebook, Instagram, Linkedin, Youtube } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-br from-teal via-peach to-yellow text-gray-800 pt-20 pb-10 overflow-hidden">
      {/* Soft glowing overlay */}
      <div className="absolute inset-0 bg-white/30 mix-blend-overlay"></div>

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
            <h2 className="text-2xl font-extrabold text-teal">FunCare</h2>
          </div>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Empowering workplaces with <span className="text-coral font-semibold">joy, leadership,</span> and 
            <span className="text-yellow font-semibold"> heart-centered connection.</span>
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
                className="p-2 bg-white/50 rounded-full shadow-sm hover:bg-white/80 transition-all"
              >
                <Icon className="w-5 h-5 text-teal" />
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
                  className="hover:text-coral transition-colors"
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
              <MapPin className="w-5 h-5 text-coral" />
              <span>123 Wellness Ave, Toronto, ON</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-teal" />
              <a href="tel:+1234567890" className="hover:text-coral transition-colors">
                +1 (234) 567-890
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-yellow" />
              <a href="mailto:hello@funcare.com" className="hover:text-coral transition-colors">
                hello@funcare.com
              </a>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="bg-white/60 backdrop-blur-md p-6 rounded-2xl shadow-lg flex flex-col justify-between w-[140%] -ml-[7%]"
        >
          <h3 className="text-lg font-bold mb-3 text-gray-800">Stay Connected</h3>
          <p className="text-gray-700 mb-4">Join our community for tips, resources, and updates!</p>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex flex-col sm:flex-row gap-4"
          >
            <input
              type="email"
              placeholder="Your email"
              className="flex-grow px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-coral"
            />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-teal to-coral text-white font-semibold px-5 py-2 rounded-full shadow-md"
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
        className="relative z-10 max-w-7xl mx-auto px-6 mt-16 border-t border-white/50 pt-6 flex flex-col md:flex-row items-center justify-between text-sm text-gray-700"
      >
        <p>© {new Date().getFullYear()} <span className="font-semibold">FunCare Institute</span>. All Rights Reserved.</p>
        <div className="flex space-x-6 mt-4 md:mt-0">
          <a href="#" className="hover:text-coral transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-coral transition-colors">Terms of Service</a>
        </div>
      </motion.div>
    </footer>
  );
}