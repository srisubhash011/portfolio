import React from 'react';
import { motion } from 'framer-motion';
import { Layers, Network, Terminal, CheckCircle2 } from 'lucide-react';
import { SITE_CONFIG } from '../../config/site';

export const About: React.FC = () => {
  const pillars = [
    {
      title: 'Computer Vision & Deep Learning',
      desc: 'Skeletal keypoint estimation, pose dynamics, object detection (Faster R-CNN, ResNet-50 FPN), and spatio-temporal graph networks (STR-GCN).'
    },
    {
      title: 'Intelligent Applications & Analytics',
      desc: 'Connecting ML outputs to high-throughput analytics engines (DuckDB, PyTorch, FAISS) and interactive executive dashboards (Streamlit, Plotly).'
    },
    {
      title: 'Full Stack & Software Engineering',
      desc: 'Building production-grade full-stack architectures (React.js, Java REST APIs, SQL, Ethereum Smart Contracts) with strict API validation.'
    }
  ];

  return (
    <section id="approach" className="py-24 bg-[#0D0D0E] border-y border-white/10 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-white/10">
          <div>
            <span className="font-mono text-xs text-[#CCFF00] font-semibold tracking-widest uppercase mb-2 block">
              // ENGINEERING PHILOSOPHY
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight">
              ABOUT / APPROACH
            </h2>
          </div>
          <div className="mt-4 md:mt-0 font-mono text-xs text-[#A1A1AA]">
            01 / PHILOSOPHY & CAPABILITIES
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Main Statement */}
          <div className="lg:col-span-6 space-y-6">
            <h3 className="text-2xl md:text-3xl font-bold text-white leading-snug">
              Connecting machine learning models with usable software systems — instead of leaving AI in isolated notebooks.
            </h3>
            
            <p className="text-[#A1A1AA] leading-relaxed text-base">
              I am a Computer and Communication Engineering student at Amrita Vishwa Vidyapeetham (CGPA 8.3) building end-to-end intelligent systems. My technical work bridges the gap between deep learning research models and production software engineering.
            </p>

            <p className="text-[#A1A1AA] leading-relaxed text-base">
              Whether extracting fine-grained biomechanical features from video feeds using pose estimation or deploying transactional backend APIs for full-stack web applications, I focus on system reliability, speed, and real-world execution.
            </p>

            <div className="pt-4 grid grid-cols-2 gap-4 font-mono text-xs text-[#F5F5F5]">
              <div className="p-4 bg-white/5 border border-white/10 rounded">
                <span className="text-[#CCFF00] font-bold text-lg block mb-1">8.3 CGPA</span>
                <span className="text-[#A1A1AA]">B.Tech in Computer & Comm Eng</span>
              </div>
              <div className="p-4 bg-white/5 border border-white/10 rounded">
                <span className="text-[#CCFF00] font-bold text-lg block mb-1">5+ SYSTEMS</span>
                <span className="text-[#A1A1AA]">AI, Vision, Analytics & Full-Stack</span>
              </div>
            </div>
          </div>

          {/* Pillars Column */}
          <div className="lg:col-span-6 space-y-4">
            {pillars.map((pillar, idx) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className="p-6 bg-[#161618] border border-white/10 rounded-xl hover:border-[#CCFF00]/50 transition-all duration-300 group"
              >
                <div className="flex items-start gap-4">
                  <span className="w-8 h-8 rounded bg-[#CCFF00]/10 border border-[#CCFF00]/30 text-[#CCFF00] flex items-center justify-center font-mono text-xs font-bold shrink-0 mt-1 group-hover:bg-[#CCFF00] group-hover:text-black transition-colors">
                    0{idx + 1}
                  </span>
                  <div>
                    <h4 className="text-lg font-bold text-white mb-2 group-hover:text-[#CCFF00] transition-colors">
                      {pillar.title}
                    </h4>
                    <p className="text-sm text-[#A1A1AA] leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
