import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Mail, FileText, Cpu, Sparkles, Terminal } from 'lucide-react';
import { SITE_CONFIG } from '../../config/site';

export const Hero: React.FC = () => {
  const [activePipelineStep, setActivePipelineStep] = useState<number | null>(null);

  const pipelineNodes = [
    { label: 'VIDEO', sub: 'Input Stream', detail: 'Real-time multi-frame video extraction' },
    { label: 'POSE', sub: 'RTMPose Keypoints', detail: '17 2D skeletal coordinates' },
    { label: 'FEATURES', sub: 'Biomechanical', detail: 'Joint angles & velocity vectors' },
    { label: 'MODEL', sub: 'STR-GCN Engine', detail: 'Spatio-temporal graph CNN' },
    { label: 'INSIGHTS', sub: 'FAISS Search', detail: 'AI coaching feedback vector index' },
  ];

  return (
    <section className="relative min-h-screen pt-32 pb-20 flex flex-col justify-between overflow-hidden bg-radial-glow">
      {/* Background Subtle Grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-[#CCFF00]/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full relative z-10 my-auto">
        
        {/* Top Monospace Metadata */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap items-center gap-3 font-mono text-xs text-[#A1A1AA] mb-8"
        >
          <span className="px-2.5 py-1 bg-white/5 border border-white/10 rounded text-[#CCFF00] font-semibold flex items-center gap-1.5">
            <Terminal className="w-3.5 h-3.5" />
            <span>AI / ML RESEARCH LAB</span>
          </span>
          <span className="text-white/20">•</span>
          <span>{SITE_CONFIG.location}</span>
          <span className="text-white/20">•</span>
          <span>AMRITA VISHWA VIDYAPEETHAM</span>
          <span className="text-white/20">•</span>
          <span>CGPA: {SITE_CONFIG.education.cgpa}</span>
        </motion.div>

        {/* Hero Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Hero Typography */}
          <div className="lg:col-span-7">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-5xl sm:text-6xl md:text-7xl xl:text-8xl font-black tracking-tight leading-[0.95] mb-6 font-sans"
            >
              AI / ML <br />
              <span className="text-gradient-accent">ENGINEER</span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-lg md:text-xl text-[#A1A1AA] font-normal leading-relaxed max-w-2xl mb-8"
            >
              {SITE_CONFIG.positioning}
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="flex flex-wrap items-center gap-4"
            >
              <a
                href="#work"
                data-cursor="VIEW"
                className="px-7 py-3.5 bg-[#CCFF00] text-black font-mono font-bold text-xs tracking-wider uppercase rounded hover:bg-[#d8ff33] transition-all transform hover:-translate-y-0.5 shadow-[0_0_20px_rgba(204,255,0,0.3)] flex items-center gap-2"
              >
                <span>EXPLORE WORK</span>
                <ArrowDown className="w-4 h-4 animate-bounce" />
              </a>

              <a
                href={SITE_CONFIG.resumePath}
                target="_blank"
                rel="noopener noreferrer"
                data-cursor="DOWNLOAD"
                className="px-7 py-3.5 bg-white/5 border border-white/15 text-white font-mono font-bold text-xs tracking-wider uppercase rounded hover:bg-white/10 hover:border-white/30 transition-all flex items-center gap-2"
              >
                <FileText className="w-4 h-4 text-[#CCFF00]" />
                <span>DOWNLOAD RESUME</span>
              </a>
            </motion.div>

            {/* Social Links */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex items-center gap-6 mt-10 pt-8 border-t border-white/10"
            >
              <span className="font-mono text-xs text-white/40 uppercase tracking-widest">Connect:</span>
              <a 
                href={SITE_CONFIG.contact.github} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-[#A1A1AA] hover:text-[#CCFF00] transition-colors flex items-center gap-2 font-mono text-xs"
              >
                <Github className="w-4 h-4" />
                <span>GitHub</span>
              </a>
              <a 
                href={SITE_CONFIG.contact.linkedin} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-[#A1A1AA] hover:text-[#CCFF00] transition-colors flex items-center gap-2 font-mono text-xs"
              >
                <Linkedin className="w-4 h-4" />
                <span>LinkedIn</span>
              </a>
              <a 
                href={`mailto:${SITE_CONFIG.contact.email}`} 
                className="text-[#A1A1AA] hover:text-[#CCFF00] transition-colors flex items-center gap-2 font-mono text-xs"
              >
                <Mail className="w-4 h-4" />
                <span>Email</span>
              </a>
            </motion.div>
          </div>

          {/* Right Visual: Sri Subhash Photo + Dynamic AI Pipeline Graphic */}
          <div className="lg:col-span-5 flex flex-col items-center">
            
            {/* Sri Subhash Profile Frame */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative group mb-8"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-[#CCFF00]/40 to-blue-500/20 rounded-2xl blur-lg group-hover:opacity-100 opacity-60 transition duration-1000 group-hover:duration-200" />
              <div className="relative w-64 h-80 sm:w-72 sm:h-96 rounded-2xl overflow-hidden border border-white/20 bg-[#111111] shadow-2xl">
                <img 
                  src={SITE_CONFIG.profilePhoto} 
                  alt={SITE_CONFIG.name}
                  className="w-full h-full object-cover object-center grayscale contrast-125 hover:grayscale-0 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent opacity-80" />
                
                <div className="absolute bottom-4 left-4 right-4 p-3 bg-[#0A0A0A]/90 backdrop-blur-md rounded-lg border border-white/10">
                  <div className="flex items-center justify-between font-mono text-[11px]">
                    <span className="text-white font-bold tracking-wider">{SITE_CONFIG.name}</span>
                    <span className="text-[#CCFF00] font-semibold">B.Tech CCE</span>
                  </div>
                  <div className="text-[10px] text-[#A1A1AA] font-mono mt-0.5">
                    Amrita Vishwa Vidyapeetham
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Dynamic AI Pipeline Visual Diagram */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="w-full bg-[#111111]/80 backdrop-blur-md border border-white/10 rounded-xl p-4 shadow-xl"
            >
              <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-3">
                <div className="flex items-center gap-2 font-mono text-[11px] text-[#CCFF00] font-semibold">
                  <Cpu className="w-3.5 h-3.5" />
                  <span>AI INFERENCE PIPELINE</span>
                </div>
                <span className="font-mono text-[10px] text-white/40">LIVE GRAPH</span>
              </div>

              {/* Node Chain */}
              <div className="flex items-center justify-between gap-1 overflow-x-auto py-2">
                {pipelineNodes.map((node, index) => (
                  <React.Fragment key={node.label}>
                    <button
                      onMouseEnter={() => setActivePipelineStep(index)}
                      onMouseLeave={() => setActivePipelineStep(null)}
                      className={`flex flex-col items-center p-2 rounded transition-all min-w-[55px] font-mono ${
                        activePipelineStep === index
                          ? 'bg-[#CCFF00] text-black scale-105 shadow-[0_0_10px_rgba(204,255,0,0.4)]'
                          : 'bg-white/5 hover:bg-white/10 text-white border border-white/10'
                      }`}
                    >
                      <span className="text-[10px] font-extrabold">{node.label}</span>
                      <span className={`text-[8px] ${activePipelineStep === index ? 'text-black/70' : 'text-[#A1A1AA]'}`}>
                        {node.sub}
                      </span>
                    </button>

                    {index < pipelineNodes.length - 1 && (
                      <span className="text-[#CCFF00] font-mono text-xs animate-pulse font-bold">→</span>
                    )}
                  </React.Fragment>
                ))}
              </div>

              {/* Dynamic Step Detail Card */}
              <div className="mt-3 p-2.5 bg-black/50 rounded border border-white/5 font-mono text-[11px] text-[#A1A1AA] flex items-center justify-between">
                <span>
                  {activePipelineStep !== null 
                    ? pipelineNodes[activePipelineStep].detail 
                    : 'Hover over nodes to inspect pipeline tensor flow'}
                </span>
                <Sparkles className="w-3.5 h-3.5 text-[#CCFF00]" />
              </div>
            </motion.div>

          </div>

        </div>

      </div>

      {/* Bottom Scroll Indicator */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full flex items-center justify-between font-mono text-[11px] text-white/30 pt-8 border-t border-white/5">
        <div className="flex items-center gap-3">
          <span className="w-2 h-2 rounded-full bg-[#CCFF00] animate-ping" />
          <span>SCROLL TO EXPLORE SELECTED WORK</span>
        </div>
        <span className="hidden sm:block">PORTFOLIO v2026.1</span>
      </div>
    </section>
  );
};
