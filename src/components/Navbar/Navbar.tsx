import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, FileText, ArrowUpRight } from 'lucide-react';
import { SITE_CONFIG } from '../../config/site';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'WORK', href: '#work' },
    { label: 'APPROACH', href: '#approach' },
    { label: 'EXPERIENCE', href: '#experience' },
    { label: 'STACK', href: '#stack' },
    { label: 'RESEARCH', href: '#research' },
    { label: 'CONTACT', href: '#contact' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled 
          ? 'bg-[#0A0A0A]/90 backdrop-blur-md py-3.5 border-b border-white/10 shadow-2xl' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        
        {/* Brand / Logo */}
        <a 
          href="#" 
          className="group flex items-center gap-3 font-mono text-sm tracking-wider font-bold text-white hover:text-[#CCFF00] transition-colors"
        >
          <span className="w-2.5 h-2.5 rounded-full bg-[#CCFF00] group-hover:scale-125 transition-transform" />
          <span>{SITE_CONFIG.name}</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8 font-mono text-xs tracking-widest text-[#A1A1AA]">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="hover:text-white transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#CCFF00] hover:after:w-full after:transition-all after:duration-300"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Right Action & Status */}
        <div className="hidden lg:flex items-center gap-6">
          {/* Status Indicator */}
          {SITE_CONFIG.status.availableForOpportunities && (
            <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[11px] font-mono text-[#A1A1AA]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#CCFF00] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#CCFF00]"></span>
              </span>
              <span>{SITE_CONFIG.status.label}</span>
            </div>
          )}

          {/* Resume CTA */}
          <a
            href={SITE_CONFIG.resumePath}
            target="_blank"
            rel="noopener noreferrer"
            data-cursor="RESUME"
            className="flex items-center gap-1.5 px-4 py-2 text-xs font-mono font-semibold tracking-wider text-black bg-[#CCFF00] hover:bg-[#d8ff33] rounded transition-all transform hover:-translate-y-0.5 shadow-[0_0_15px_rgba(204,255,0,0.2)]"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>RESUME</span>
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle Navigation Menu"
          className="lg:hidden p-2 text-white/80 hover:text-[#CCFF00] transition-colors"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="lg:hidden fixed inset-x-0 top-[60px] bg-[#0A0A0A]/98 backdrop-blur-xl border-b border-white/10 px-6 py-8 shadow-2xl"
          >
            <div className="flex flex-col gap-6 font-mono text-sm tracking-widest text-[#A1A1AA]">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="hover:text-[#CCFF00] transition-colors py-2 border-b border-white/5 flex items-center justify-between"
                >
                  <span>{item.label}</span>
                  <ArrowUpRight className="w-4 h-4 opacity-50" />
                </a>
              ))}
              
              <div className="pt-4 flex flex-col gap-4">
                <div className="flex items-center gap-2 px-3 py-2 rounded bg-white/5 border border-white/10 text-xs font-mono text-[#A1A1AA]">
                  <span className="w-2 h-2 rounded-full bg-[#CCFF00]" />
                  <span>{SITE_CONFIG.status.label}</span>
                </div>

                <a
                  href={SITE_CONFIG.resumePath}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-3 text-xs font-mono font-bold text-black bg-[#CCFF00] rounded"
                >
                  <FileText className="w-4 h-4" />
                  <span>DOWNLOAD RESUME</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
