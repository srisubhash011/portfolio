import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Building2, Calendar, MapPin, CheckCircle2 } from 'lucide-react';
import { EXPERIENCES } from '../../data/experience';

export const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="py-24 bg-[#0D0D0E] relative border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-white/10">
          <div>
            <span className="font-mono text-xs text-[#CCFF00] font-semibold tracking-widest uppercase mb-2 block">
              // INDUSTRY RELEVANCE
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight">
              EXPERIENCE
            </h2>
          </div>
          <div className="mt-4 md:mt-0 font-mono text-xs text-[#A1A1AA]">
            SOFTWARE & API VALIDATION
          </div>
        </div>

        {/* Experience Cards List */}
        <div className="space-y-8">
          {EXPERIENCES.map((exp) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-8 bg-[#161618] border border-white/15 rounded-2xl shadow-xl hover:border-[#CCFF00]/50 transition-all duration-300"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                
                {/* Left Overview Box */}
                <div className="lg:col-span-4 space-y-4">
                  <div>
                    <span className="px-2.5 py-1 rounded bg-[#CCFF00]/10 border border-[#CCFF00]/30 font-mono text-xs font-bold text-[#CCFF00] inline-block mb-3">
                      {exp.category}
                    </span>
                    <h3 className="text-3xl font-black text-white">{exp.company}</h3>
                    <p className="text-lg font-bold text-[#CCFF00] font-mono mt-1">{exp.role}</p>
                  </div>

                  <div className="space-y-2 font-mono text-xs text-[#A1A1AA]">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-[#CCFF00]" />
                      <span>PERIOD: {exp.period}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-[#CCFF00]" />
                      <span>LOCATION: {exp.location}</span>
                    </div>
                  </div>

                  <div className="pt-2">
                    <a
                      href={exp.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-[#CCFF00] hover:text-black border border-white/10 rounded font-mono text-xs font-bold text-white transition-all"
                    >
                      <span>VISIT GLODEL</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>

                {/* Right Bullet Contributions */}
                <div className="lg:col-span-8 space-y-4 pl-0 lg:pl-6 lg:border-l border-white/10">
                  <h4 className="font-mono text-xs font-bold text-white uppercase tracking-wider">
                    // KEY CONTRIBUTIONS & DELIVERABLES:
                  </h4>
                  
                  <div className="space-y-4">
                    {exp.bullets.map((bullet, i) => (
                      <div key={i} className="flex items-start gap-3.5 p-4 bg-black/40 border border-white/5 rounded-xl">
                        <CheckCircle2 className="w-5 h-5 text-[#CCFF00] shrink-0 mt-0.5" />
                        <p className="text-sm text-[#A1A1AA] leading-relaxed">
                          {bullet}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
