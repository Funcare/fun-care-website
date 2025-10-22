"use client";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-white/70 backdrop-blur-md z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <h1 className="text-2xl font-bold text-teal">FunCare</h1>

        <ul className="hidden md:flex space-x-8 text-gray-700 font-medium">
          <li><a href="#about" className="hover:text-coral transition-colors">About</a></li>
          <li><a href="#programs" className="hover:text-coral transition-colors">Programs</a></li>
          <li><a href="#courses" className="hover:text-coral transition-colors">Courses</a></li>
          <li><a href="#resources" className="hover:text-coral transition-colors">Resources</a></li>
          <li><a href="#contact" className="hover:text-coral transition-colors">Contact</a></li>
        </ul>

        <a
          href="#join"
          className="hidden md:block bg-teal text-white px-5 py-2 rounded-full hover:bg-coral transition-all"
        >
          Join Now
        </a>
      </div>
    </nav>
  );
}