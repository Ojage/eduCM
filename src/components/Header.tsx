import React, { useState, useEffect } from "react";
import { MapPin, Search } from "lucide-react";
import { motion, } from "framer-motion";
import logo_cm from "../asseets/images/logo_cm.jpg";
interface HeaderProps {
  onSearchFocus: () => void;
}

const Header: React.FC<HeaderProps> = ({ onSearchFocus }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const AnimatedStar = () => (
    <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none">
      <svg
        className="animate-spin w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12"
        viewBox="0 0 24 24"
        style={{
          animationDuration: "6s",
          animationTimingFunction: "linear",
          animationIterationCount: "infinite",
        }}
      >
        <path
          d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
          className="drop-shadow-lg animate-color"
          fill="#F59E0B"
        />
      </svg>

      {/* CSS for smooth color transition */}
      <style>{`
      @keyframes colorPulse {
        0%, 100% { fill: #B45309; }   /* dark yellow */
        50% { fill: #FDE047; }        /* bright yellow */
      }
      .animate-color {
        animation: colorPulse 2s ease-in-out infinite;
      }
    `}</style>
    </div>
  );


  const HexagonalPatterns = () => (
    <div className="absolute right-0 top-0 bottom-0 w-32 overflow-hidden pointer-events-none opacity-20">
      <div className="relative w-full h-full">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-float"
            style={{
              top: `${i * 20}%`,
              right: `${Math.sin(i) * 20}px`,
              animationDelay: `${i * 0.5}s`,
            }}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="stroke-yellow-300"
              fill="none"
              strokeWidth={1.5}
            >
              <path d="M17.5 3.5L22 12l-4.5 8.5h-11L2 12l4.5-8.5h11z" />
            </svg>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <header className="sticky top-0 z-50 w-full">
      <motion.div
        animate={{
          paddingTop: scrolled ? "0.5rem" : "2rem",
          paddingBottom: scrolled ? "0.5rem" : "2rem",
          background:
            scrolled
              ? "linear-gradient(to right, #166534, #991B1B, #B45309)"
              : "linear-gradient(to right, #15803D, #B91C1C, #EA580C)",
        }}
        transition={{ duration: 0.5 }}
        className="relative text-white backdrop-blur-md shadow-md overflow-hidden"
      >
        {!scrolled && <AnimatedStar />}
        <HexagonalPatterns />

        <div className="container mx-auto px-4 relative z-10">
          {/* Top Bar */}
          <div className="flex items-center justify-between mb-4 transition-all duration-500">
            {/* Logo + Branding */}
            <div className="flex items-center space-x-3">
              <img src={logo_cm} alt="Logo" className="h-10 w-10 rounded-full" />
              <div>
                <h1 className="text-2xl font-extrabold tracking-wide">
                  edu<span className="text-yellow-300">CM</span>
                </h1>
                <motion.p
                  initial={{ opacity: 1, height: "auto" }}
                  animate={{
                    opacity: scrolled ? 0 : 1,
                    height: scrolled ? 0 : "auto",
                  }}
                  transition={{ duration: 0.4 }}
                  className="text-yellow-100 text-sm overflow-hidden"
                >
                  Cameroon Schools Directory
                </motion.p>
              </div>
            </div>

            {/* Location */}
            <motion.div
              className="hidden md:flex items-center space-x-2 text-yellow-100"
              animate={{ opacity: scrolled ? 0 : 1 }}
              transition={{ duration: 0.4 }}
            >
              <MapPin className="h-5 w-5" />
              <span className="text-sm font-medium">Republic of Cameroon</span>
            </motion.div>
          </div>

          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 1 }}
            animate={{
              opacity: scrolled ? 0 : 1,
              height: scrolled ? 0 : "auto",
            }}
            transition={{ duration: 0.4 }}
            className="max-w-2xl mb-4 overflow-hidden"
          >
            <h2 className="text-xl font-semibold mb-2">
              Find Schools Across All Education Levels
            </h2>
            <p className="text-yellow-100 text-sm mb-4">
              From nursery to university – discover the perfect educational
              institution for your journey
            </p>
          </motion.div>

          {/* Search Button */}
          <motion.div
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
          >
            <button
              onClick={onSearchFocus}
              className="w-full md:w-auto bg-white/20 hover:bg-white/30 backdrop-blur-sm border border-white/30 rounded-lg px-4 py-3 flex items-center space-x-2 transition-all duration-200 hover:scale-105 hover:shadow-lg"
            >
              <Search className="h-5 w-5 text-yellow-200" />
              <span className="text-sm">
                Search schools, programs, locations...
              </span>
            </button>
          </motion.div>
        </div>
      </motion.div>

      {/* Custom CSS for floating animation */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        .animate-float { animation: float 6s ease-in-out infinite; }
      `}</style>
    </header>
  );
};

export default Header;
