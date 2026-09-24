import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Terminal } from 'lucide-react';

export const HowIBuild: React.FC = () => {
  const steps = [
    { num: '01', title: 'UNDERSTAND', desc: 'Domain analysis & biomechanical / data requirements formulation.' },
    { num: '02', title: 'DATA', desc: 'Preprocessing, pose extraction, cleaning & SQL query optimization.' },
    { num: '03', title: 'MODEL', desc: 'Neural network selection (STR-GCN, Faster R-CNN, ResNet-50).' },
    { num: '04', title: 'ENGINEER', desc: 'Feature engineering, similarity indexing (FAISS), statistical modeling.' },
    { num: '05', title: 'INTEGRATE', desc: 'Full-stack application integration (React, Java APIs, Streamlit).' },
    { num: '06', title: 'EVALUATE', desc: 'Rigorous accuracy, ROC-AUC, latency & transaction benchmarking.' },
    { num: '07', title: 'ITERATE', desc: 'Refining biomechanical feedback & system responsiveness.' }
  ];

  return (
    <section className="py-24 bg-[#0A0A0A] relative border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Header */}
        <div className="mb-16">
          <span className="font-mono text-xs text-[#CCFF00] uppercase font-bold tracking-widest block mb-2">
            // METHODOLOGY
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight mb-4">
            FROM IDEA → SYSTEM
          </h2>
          <p className="text-base text-[#A1A1AA] max-w-2xl leading-relaxed">
            From extracting meaningful signals from raw data to integrating models into usable software, my projects focus on connecting machine learning with practical engineering.
          </p>
        </div>

        {/* Horizontal Pipeline Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-7 gap-4">
          {steps.map((step, idx) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="p-5 bg-[#111113] border border-white/10 rounded-xl hover:border-[#CCFF00] transition-colors flex flex-col justify-between"
            >
              <div>
                <span className="font-mono text-xs font-bold text-[#CCFF00] block mb-2">
                  {step.num}
                </span>
                <h3 className="font-mono text-sm font-extrabold text-white mb-2">
                  {step.title}
                </h3>
              </div>
              <p className="text-xs text-[#A1A1AA] leading-relaxed mt-4">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
