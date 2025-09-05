import React, { useState, useEffect } from "react";
import { School, MapPin, Search } from "lucide-react";
import { motion } from "framer-motion";

interface HeaderProps {
  onSearchFocus: () => void;
}

const Header: React.FC<HeaderProps> = ({ onSearchFocus }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`sticky top-0 z-50 backdrop-blur-md transition-all duration-300 ${
        scrolled
          ? "bg-gradient-to-r from-green-800 via-red-800 to-yellow-700 py-3 shadow-md"
          : "bg-gradient-to-r from-green-700 via-red-700 to-yellow-600 py-6"
      } text-white`}
    >
      <div className="container mx-auto px-4">
        {/* Top Bar */}
        <div className="flex items-center justify-between mb-4">
          {/* Logo + Branding */}
          <motion.div
            initial={{ x: -40, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="flex items-center space-x-3"
          >
            <div className="bg-white/20 p-2 rounded-lg shadow-md">
              <School className="h-8 w-8" />
            </div>
            <div>
              <h1 className="text-2xl font-extrabold tracking-wide">
                edu<span className="text-yellow-300">CM</span>
              </h1>
              {!scrolled && (
                <p className="text-yellow-100 text-sm">
                  Cameroon Schools Directory
                </p>
              )}
            </div>
          </motion.div>

          {/* Location */}
          <motion.div
            initial={{ x: 40, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="hidden md:flex items-center space-x-2 text-yellow-100"
          >
            <MapPin className="h-5 w-5" />
            <span className="text-sm font-medium">Republic of Cameroon</span>
          </motion.div>
        </div>

        {/* Hero Section - disappears when scrolled */}
        {!scrolled && (
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="max-w-2xl"
          >
            <h2 className="text-xl font-semibold mb-2">
              Find Schools Across All Education Levels
            </h2>
            <p className="text-yellow-100 text-sm mb-4">
              From nursery to university – discover the perfect educational
              institution for your journey
            </p>
          </motion.div>
        )}

        {/* Search Button - always visible */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <button
            onClick={onSearchFocus}
            className="w-full md:w-auto bg-white/20 hover:bg-white/30 backdrop-blur-sm border border-white/30 rounded-lg px-4 py-3 flex items-center space-x-2 transition-all duration-200"
          >
            <Search className="h-5 w-5 text-yellow-200" />
            <span className="text-sm">
              Search schools, programs, locations...
            </span>
          </button>
        </motion.div>
      </div>
    </motion.header>
  );
};

export default Header;
