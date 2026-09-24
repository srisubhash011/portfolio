import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Cpu, Eye, Database, Activity, GitCommit, Sparkles, CheckCircle2 } from 'lucide-react';
import { PROJECTS } from '../../data/projects';

export const AISystemMap: React.FC = () => {
  const [selectedStageIndex, setSelectedStageIndex] = useState<number>(0);

  const stages = [
    {
      id: 'input',
      title: '01 INPUT STAGE',
      shortName: 'INPUT',
      icon: Eye,
      description: 'Ingestion of multi-modal signals including high-speed video feeds, claim imagery, tabular logs, and user payloads.',
      examples: [
        { label: 'Cricket Video Streams', project: 'AI Cricket Sports Analysis' },
        { label: 'Vehicle Damage Images', project: 'AI Insurance Fraud Detection' },
        { label: '180K+ Supply Logs', project: 'Supply Chain Dashboard' },
        { label: 'FIR Registration Form', project: 'Blockchain FIR' }
      ]
    },
    {
      id: 'data',
      title: '02 DATA & STORAGE',
      shortName: 'DATA',
      icon: Database,
      description: 'High-efficiency processing using OpenCV frame extraction, DuckDB columnar SQL execution, and MySQL/EVM schemas.',
      examples: [
        { label: 'Skeletal Frame Sequences', project: 'AI Cricket Sports Analysis' },
        { label: 'ROI Bounding Boxes', project: 'AI Insurance Fraud Detection' },
        { label: 'In-Process DuckDB SQL', project: 'Supply Chain Dashboard' },
        { label: 'Solidity EVM State', project: 'Blockchain FIR' }
      ]
    },
    {
      id: 'features',
      title: '03 FEATURE ENGINEERING',
      shortName: 'FEATURES',
      icon: Activity,
      description: 'Extraction of spatial-temporal joint graphs, multi-scale FPN damage representations, and aggregate metrics.',
      examples: [
        { label: 'STR Biomechanical Vectors', project: 'AI Cricket Sports Analysis' },
        { label: 'ResNet-50 Pyramid Features', project: 'AI Insurance Fraud Detection' },
        { label: '12 Dimension Metrics', project: 'Supply Chain Dashboard' }
      ]
    },
    {
      id: 'model',
      title: '04 ML & DEEP LEARNING',
      shortName: 'MODEL',
      icon: Cpu,
      description: 'Spatio-Temporal Graph CNNs (STR-GCN), Faster R-CNN object detectors, and Random Forest risk classifiers.',
      examples: [
        { label: 'STR-GCN Action Net', project: 'AI Cricket Sports Analysis' },
        { label: 'Faster R-CNN + ResNet-50', project: 'AI Insurance Fraud Detection' },
        { label: 'Random Forest Risk Engine', project: 'AI Insurance Fraud Detection' }
      ]
    },
    {
      id: 'system',
      title: '05 SYSTEM INTEGRATION',
      shortName: 'SYSTEM',
      icon: GitCommit,
      description: 'FAISS vector similarity retrieval, Java REST API microservices, Streamlit data portals, and Ethereum Smart Contracts.',
      examples: [
        { label: 'FAISS Similarity Engine', project: 'AI Cricket Sports Analysis' },
        { label: 'Streamlit Dashboard Portal', project: 'Supply Chain Dashboard' },
        { label: 'Java Spring REST API', project: 'Ticket Booking System' },
        { label: 'Ethereum Smart Contract', project: 'Blockchain FIR' }
      ]
    },
    {
      id: 'insight',
      title: '06 INSIGHT & OUTPUT',
      shortName: 'INSIGHT',
      icon: Sparkles,
      description: 'Delivering automated coaching feedback, fraud risk evaluations, real-time analytics charts, and tamper-proof legal logs.',
      examples: [
        { label: 'Automated Coaching Report', project: 'AI Cricket Sports Analysis' },
        { label: '98% Acc Damage & Fraud Score', project: 'AI Insurance Fraud Detection' },
        { label: 'Executive Analytics View', project: 'Supply Chain Dashboard' },
        { label: 'Immutable FIR Blockchain Record', project: 'Blockchain FIR' }
      ]
    }
  ];

  const currentStage = stages[selectedStageIndex];
  const IconComponent = currentStage.icon;

  return (
    <section className="py-24 bg-[#0D0D0E] border-y border-white/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#CCFF00]/10 border border-[#CCFF00]/30 font-mono text-xs text-[#CCFF00] font-semibold uppercase mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>PORTFOLIO SIGNATURE FEATURE</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-white tracking-tight mb-4">
            INTERACTIVE AI SYSTEM MAP
          </h2>
          <p className="text-base text-[#A1A1AA] leading-relaxed">
            Click across the 6 pipeline stages to inspect how raw inputs flow through algorithms, neural models, and system components into real-world insights.
          </p>
        </div>

        {/* Node Pipeline Buttons */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-10">
          {stages.map((stage, idx) => {
            const StageIcon = stage.icon;
            const isSelected = selectedStageIndex === idx;

            return (
              <button
                key={stage.id}
                onClick={() => setSelectedStageIndex(idx)}
                className={`p-4 rounded-xl border text-left font-mono transition-all duration-300 flex flex-col justify-between h-28 ${
                  isSelected
                    ? 'bg-[#CCFF00] text-black border-[#CCFF00] shadow-[0_0_25px_rgba(204,255,0,0.3)] scale-105 z-10'
                    : 'bg-[#161618] text-white border-white/10 hover:border-white/30 hover:bg-white/5'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className={`text-[10px] font-bold ${isSelected ? 'text-black/60' : 'text-[#CCFF00]'}`}>
                    STAGE 0{idx + 1}
                  </span>
                  <StageIcon className="w-4 h-4" />
                </div>

                <div>
                  <span className="text-sm font-extrabold block leading-none">{stage.shortName}</span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Stage Detail Panel */}
        <motion.div
          key={currentStage.id}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="p-8 bg-[#161618] border border-white/15 rounded-2xl shadow-2xl"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            <div className="lg:col-span-5 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#CCFF00]/10 border border-[#CCFF00]/40 flex items-center justify-center text-[#CCFF00]">
                  <IconComponent className="w-5 h-5" />
                </div>
                <h3 className="text-2xl font-black text-white font-mono">{currentStage.title}</h3>
              </div>

              <p className="text-base text-[#A1A1AA] leading-relaxed">
                {currentStage.description}
              </p>
            </div>

            <div className="lg:col-span-7 space-y-3">
              <span className="font-mono text-xs text-[#CCFF00] font-bold tracking-wider uppercase block mb-1">
                // SYSTEM IMPLEMENTATIONS IN PORTFOLIO PROJECTS:
              </span>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {currentStage.examples.map((ex, i) => (
                  <div key={i} className="p-3.5 bg-black/60 border border-white/10 rounded-lg font-mono">
                    <span className="text-xs text-white font-bold block mb-1">{ex.label}</span>
                    <span className="text-[11px] text-[#A1A1AA] flex items-center gap-1.5">
                      <CheckCircle2 className="w-3 h-3 text-[#CCFF00]" />
                      {ex.project}
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
};
