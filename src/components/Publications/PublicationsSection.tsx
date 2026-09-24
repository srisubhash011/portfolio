import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, ExternalLink, FileCheck } from 'lucide-react';
import { PUBLICATIONS } from '../../data/publications';

export const PublicationsSection: React.FC = () => {
  return (
    <section id="research" className="py-24 bg-[#0A0A0A] relative border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-white/10">
          <div>
            <span className="font-mono text-xs text-[#CCFF00] font-semibold tracking-widest uppercase mb-2 block">
              // ACADEMIC CONTRIBUTIONS
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight">
              RESEARCH / PUBLICATIONS
            </h2>
          </div>
          <div className="mt-4 md:mt-0 font-mono text-xs text-[#A1A1AA]">
            SPRINGER & IEEE PROCEEDINGS
          </div>
        </div>

        {/* Publications Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PUBLICATIONS.map((pub, idx) => (
            <motion.div
              key={pub.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="p-8 bg-[#111113] border border-white/15 rounded-2xl flex flex-col justify-between hover:border-[#CCFF00]/50 transition-all duration-300"
            >
              <div>
                <div className="flex items-center justify-between gap-4 mb-4">
                  <span className="px-3 py-1 bg-[#CCFF00]/10 border border-[#CCFF00]/30 rounded font-mono text-xs font-bold text-[#CCFF00] flex items-center gap-1.5">
                    <FileCheck className="w-3.5 h-3.5" />
                    {pub.status}
                  </span>
                  <span className="font-mono text-xs text-[#A1A1AA]">
                    {pub.publisher}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-white leading-tight mb-4">
                  {pub.title}
                </h3>

                <p className="text-xs font-mono text-[#A1A1AA] leading-relaxed">
                  Published in peer-reviewed conference proceedings ({pub.publisher}).
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-white/10 flex items-center justify-between font-mono text-xs text-white/50">
                <span>CONFERENCE PROCEEDINGS</span>
                {pub.url ? (
                  <a href={pub.url} target="_blank" rel="noopener noreferrer" className="text-[#CCFF00] hover:underline flex items-center gap-1">
                    <span>READ PAPER</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                ) : (
                  <span>PROCEEDINGS INDEXED</span>
                )}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
