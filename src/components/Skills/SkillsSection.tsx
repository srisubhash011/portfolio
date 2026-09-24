import React, { useState } from 'react';
import { SKILL_GROUPS } from '../../data/skills';
import { Cpu, Code2, Database, Terminal, Layers, Info } from 'lucide-react';

export const SkillsSection: React.FC = () => {
  const [hoveredSkill, setHoveredSkill] = useState<{ name: string; projects: string[] } | null>(null);

  return (
    <section id="stack" className="py-24 bg-[#0A0A0A] relative border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-white/10">
          <div>
            <span className="font-mono text-xs text-[#CCFF00] font-semibold tracking-widest uppercase mb-2 block">
              // TECHNICAL STACK & CAPABILITIES
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight">
              TECHNICAL MATRIX
            </h2>
          </div>
          <div className="mt-4 md:mt-0 font-mono text-xs text-[#A1A1AA]">
            HOVER SKILLS TO SEE PROJECT MAPPINGS
          </div>
        </div>

        {/* Hover Info Tooltip Bar */}
        <div className="mb-10 p-4 bg-[#161618] border border-white/15 rounded-xl flex items-center justify-between min-h-[64px] font-mono text-xs">
          {hoveredSkill ? (
            <div className="flex flex-wrap items-center gap-3">
              <span className="text-[#CCFF00] font-bold text-sm">{hoveredSkill.name}</span>
              <span className="text-white/30">→</span>
              <span className="text-[#A1A1AA]">USED IN:</span>
              {hoveredSkill.projects.map(p => (
                <span key={p} className="px-2.5 py-1 bg-[#CCFF00]/10 border border-[#CCFF00]/30 text-[#CCFF00] rounded font-semibold">
                  {p}
                </span>
              ))}
            </div>
          ) : (
            <div className="flex items-center gap-2 text-[#A1A1AA]">
              <Info className="w-4 h-4 text-[#CCFF00]" />
              <span>Hover over any skill chip below to inspect its practical project implementation context.</span>
            </div>
          )}
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SKILL_GROUPS.map((group) => (
            <div 
              key={group.category}
              className="p-6 bg-[#111113] border border-white/10 rounded-xl hover:border-white/20 transition-all"
            >
              <h3 className="font-mono text-xs font-bold text-[#CCFF00] tracking-wider uppercase mb-4 pb-2 border-b border-white/10 flex items-center gap-2">
                <Terminal className="w-3.5 h-3.5" />
                {group.category}
              </h3>

              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <button
                    key={skill.name}
                    onMouseEnter={() => setHoveredSkill({ name: skill.name, projects: skill.projectsUsed })}
                    onMouseLeave={() => setHoveredSkill(null)}
                    className="px-3 py-1.5 bg-white/5 hover:bg-[#CCFF00] hover:text-black border border-white/10 hover:border-[#CCFF00] rounded font-mono text-xs text-[#A1A1AA] hover:font-bold transition-all duration-200"
                  >
                    {skill.name}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
