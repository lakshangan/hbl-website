import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Terminal } from 'lucide-react';

export const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-black/80 backdrop-blur-lg border-b border-purple-500/20' : ''
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <Terminal className="w-6 h-6 text-purple-500" />
            <span className="font-bold text-xl">HACK_BEYOND</span>
          </div>
          
          <nav className="hidden md:flex items-center gap-8">
            {['About', 'Timeline', 'Prizes', 'Team'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-gray-300 hover:text-purple-400 transition-colors"
              >
                {item}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </motion.header>
  );
};