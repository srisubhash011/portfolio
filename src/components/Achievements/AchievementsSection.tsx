import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Users, Award, Zap } from 'lucide-react';
import { ACHIEVEMENTS } from '../../data/achievements';

export const AchievementsSection: React.FC = () => {
  return (
    <section className="py-24 bg-[#0D0D0E] relative border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-white/10">
          <div>
            <span className="font-mono text-xs text-[#CCFF00] font-semibold tracking-widest uppercase mb-2 block">
              // LEADERSHIP & RECOGNITION
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight">
              BEYOND CODE
            </h2>
          </div>
          <div className="mt-4 md:mt-0 font-mono text-xs text-[#A1A1AA]">
            LEADERSHIP, COMPETITIONS & HACKATHONS
          </div>
        </div>

        {/* Editorial Blocks Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {ACHIEVEMENTS.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="p-8 bg-[#161618] border border-white/15 rounded-2xl flex flex-col justify-between hover:border-[#CCFF00]/50 transition-all duration-300 group"
            >
              <div>
                {item.stats && (
                  <div className="mb-6 p-4 bg-black/50 border border-white/10 rounded-xl font-mono">
                    <span className="text-4xl font-black text-[#CCFF00] block mb-1 group-hover:scale-105 transition-transform origin-left">
                      {item.stats.number}
                    </span>
                    <span className="text-[11px] text-[#A1A1AA] uppercase font-bold tracking-wider">
                      {item.stats.label}
                    </span>
                  </div>
                )}

                <h3 className="text-2xl font-extrabold text-white mb-2 group-hover:text-[#CCFF00] transition-colors">
                  {item.title}
                </h3>
                <p className="font-mono text-xs text-[#CCFF00] font-semibold mb-4">
                  {item.role}
                </p>
                <p className="text-sm text-[#A1A1AA] leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
