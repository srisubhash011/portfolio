import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, FileText, Phone, MapPin, ArrowUpRight } from 'lucide-react';
import { SITE_CONFIG } from '../../config/site';

export const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-28 bg-[#0A0A0A] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Main CTA Box */}
        <div className="p-10 md:p-16 bg-gradient-to-br from-[#111113] to-[#161618] border border-white/15 rounded-3xl shadow-2xl relative">
          
          <div className="max-w-3xl">
            <span className="font-mono text-xs text-[#CCFF00] font-semibold tracking-widest uppercase mb-4 block">
              // GET IN TOUCH
            </span>

            <h2 className="text-5xl sm:text-6xl md:text-7xl font-black text-white tracking-tight leading-[0.95] mb-6">
              LET'S BUILD <br />
              <span className="text-gradient-accent">SOMETHING.</span>
            </h2>

            <p className="text-lg text-[#A1A1AA] leading-relaxed mb-10">
              Interested in AI, ML, software engineering, or intelligent applications? Reach out for full-time opportunities, research collaborations, or engineering discussions.
            </p>

            {/* Main Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-12">
              <a
                href={`mailto:${SITE_CONFIG.contact.email}`}
                data-cursor="EMAIL"
                className="px-8 py-4 bg-[#CCFF00] text-black font-mono font-bold text-sm tracking-wider uppercase rounded-lg hover:bg-[#d8ff33] transition-all transform hover:-translate-y-0.5 shadow-[0_0_25px_rgba(204,255,0,0.3)] flex items-center gap-3"
              >
                <Mail className="w-5 h-5" />
                <span>EMAIL ME</span>
              </a>

              <a
                href={SITE_CONFIG.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                data-cursor="LINKEDIN"
                className="px-6 py-4 bg-white/5 border border-white/15 hover:border-white/30 text-white font-mono font-bold text-sm tracking-wider uppercase rounded-lg hover:bg-white/10 transition-all flex items-center gap-2"
              >
                <Linkedin className="w-5 h-5 text-[#CCFF00]" />
                <span>LINKEDIN</span>
                <ArrowUpRight className="w-4 h-4 opacity-50" />
              </a>

              <a
                href={SITE_CONFIG.contact.github}
                target="_blank"
                rel="noopener noreferrer"
                data-cursor="GITHUB"
                className="px-6 py-4 bg-white/5 border border-white/15 hover:border-white/30 text-white font-mono font-bold text-sm tracking-wider uppercase rounded-lg hover:bg-white/10 transition-all flex items-center gap-2"
              >
                <Github className="w-5 h-5 text-[#CCFF00]" />
                <span>GITHUB</span>
                <ArrowUpRight className="w-4 h-4 opacity-50" />
              </a>
            </div>

            {/* Direct Contact Metadata */}
            <div className="pt-8 border-t border-white/10 grid grid-cols-1 sm:grid-cols-3 gap-6 font-mono text-xs text-[#A1A1AA]">
              <div>
                <span className="text-white/40 block mb-1 uppercase">EMAIL DIRECT</span>
                <a href={`mailto:${SITE_CONFIG.contact.email}`} className="text-white font-bold hover:text-[#CCFF00] transition-colors">
                  {SITE_CONFIG.contact.email}
                </a>
              </div>

              <div>
                <span className="text-white/40 block mb-1 uppercase">LOCATION</span>
                <span className="text-white font-bold flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-[#CCFF00]" />
                  {SITE_CONFIG.contact.location}
                </span>
              </div>

              <div>
                <span className="text-white/40 block mb-1 uppercase">PHONE CONTACT</span>
                <a href={`tel:${SITE_CONFIG.contact.phone}`} className="text-white font-bold hover:text-[#CCFF00] transition-colors flex items-center gap-1">
                  <Phone className="w-3.5 h-3.5 text-[#CCFF00]" />
                  {SITE_CONFIG.contact.phone}
                </a>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
