"use client";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-700 flex items-center justify-between px-6 md:px-16 py-6 md:py-8 ${
          isScrolled ? "bg-black/20 backdrop-blur-xl border-b border-white/5 py-5 md:py-6" : "bg-transparent"
        }`}
      >
        {/* Logo - Updated to THE DASH MEDIA */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="relative z-50 cursor-pointer flex items-center gap-4"
        >
          <span className="text-xl md:text-2xl font-black tracking-tighter uppercase text-white mix-blend-difference">
            THE DASH MEDIA
          </span>
        </motion.div>

        {/* Menu Toggle */}
        <motion.button
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className={`relative z-50 flex items-center justify-center gap-3 group transition-all duration-300`}
        >
          <span className={`text-xs md:text-sm font-bold uppercase tracking-[0.3em] transition-all duration-500 ${isMenuOpen ? 'text-white' : 'text-white/70 group-hover:text-white'}`}>
            {isMenuOpen ? "Close" : "Menu"}
          </span>
          <div className="flex flex-col gap-1.5 w-6">
            <motion.span 
              animate={{ rotate: isMenuOpen ? 45 : 0, y: isMenuOpen ? 4 : 0 }}
              className="h-0.5 w-full bg-white rounded-full transition-colors" 
            />
            <motion.span 
              animate={{ opacity: isMenuOpen ? 0 : 1, x: isMenuOpen ? 10 : 0 }}
              className="h-0.5 w-full bg-white rounded-full transition-colors" 
            />
            <motion.span 
              animate={{ rotate: isMenuOpen ? -45 : 0, y: isMenuOpen ? -4 : 0 }}
              className="h-0.5 w-full bg-white rounded-full transition-colors" 
            />
          </div>
        </motion.button>
      </header>

      {/* Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="fixed inset-0 z-40 bg-[#050505] text-white flex flex-col items-center justify-center px-8"
          >
            <nav className="flex flex-col items-center gap-8 md:gap-12">
              {["About", "Work", "Services", "Impact", "Careers", "Contact"].map((item, i) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ 
                    opacity: hoveredIndex !== null && hoveredIndex === i ? 0.3 : 1,
                    y: 0,
                    filter: hoveredIndex !== null && hoveredIndex === i ? "blur(0px)" : "drop-shadow(0 0 15px rgba(255,255,255,0.4))"
                  }}
                  transition={{ 
                    delay: 0.1 + i * 0.05, 
                    duration: 0.4,
                    opacity: { duration: 0.3 }
                  }}
                  onMouseEnter={() => setHoveredIndex(i)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  className="text-4xl md:text-6xl font-bold tracking-tight transition-all duration-300 uppercase"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </motion.a>
              ))}
            </nav>

            {/* Bottom Info - Updated to THE DASH MEDIA */}
            <div className="absolute bottom-12 flex flex-col items-center gap-4 text-xs font-mono uppercase tracking-[0.4em] text-gray-500">
               <span>New York / London / San Francisco</span>
               <span className="opacity-50">© 2026 THE DASH MEDIA</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
