import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Github, ExternalLink, ArrowRight, Play, Image as ImageIcon, Layers, CheckCircle, Cpu, AlertCircle } from 'lucide-react';
import { Project } from '../../types';

interface CaseStudyModalProps {
  project: Project | null;
  onClose: () => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({ project, onClose }) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (selectedImage) {
          setSelectedImage(null);
        } else {
          onClose();
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose, selectedImage]);

  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 overflow-y-auto bg-black/90 backdrop-blur-xl flex justify-center p-4 sm:p-6 lg:p-12">
        
        {/* Backdrop click */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3 }}
          className="relative w-full max-w-5xl bg-[#0D0D0E] border border-white/15 rounded-2xl shadow-2xl overflow-hidden z-10 text-white my-auto max-h-[90vh] flex flex-col"
        >
          {/* Header Bar */}
          <div className="sticky top-0 z-30 px-6 py-4 bg-[#0D0D0E]/95 backdrop-blur-md border-b border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-3 font-mono text-xs">
              <span className="px-2.5 py-1 bg-[#CCFF00] text-black font-extrabold rounded">
                PROJECT {project.number}
              </span>
              <span className="text-[#A1A1AA] uppercase tracking-wider">{project.subCategory}</span>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-full bg-white/10 hover:bg-[#CCFF00] hover:text-black transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Modal Scrollable Body */}
          <div className="overflow-y-auto p-6 sm:p-10 space-y-12 divide-y divide-white/10">
            
            {/* 01 PROJECT IDENTIFICATION & HERO */}
            <div>
              <span className="font-mono text-xs text-[#CCFF00] uppercase tracking-widest block mb-2">
                // 01 PROJECT IDENTIFICATION
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-4 leading-tight">
                {project.title}
              </h1>
              <p className="text-lg text-[#A1A1AA] max-w-3xl leading-relaxed mb-6">
                {project.tagline}
              </p>

              {/* Action Links */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                {project.github ? (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2.5 bg-white/10 hover:bg-white/20 border border-white/20 rounded font-mono text-xs font-bold flex items-center gap-2 transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    <span>VIEW SOURCE REPOSITORY</span>
                  </a>
                ) : (
                  <span className="px-4 py-2 bg-white/5 border border-white/10 rounded font-mono text-xs text-white/50">
                    SOURCE REPOSITORY: AVAILABLE UPON REQUEST
                  </span>
                )}

                {project.demo ? (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2.5 bg-[#CCFF00] text-black hover:bg-[#d8ff33] rounded font-mono text-xs font-bold flex items-center gap-2 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>LAUNCH LIVE DEMO</span>
                  </a>
                ) : (
                  <span className="px-4 py-2 bg-[#CCFF00]/10 border border-[#CCFF00]/20 rounded font-mono text-xs text-[#CCFF00]">
                    DEMO STATUS: LOCAL TESTBED / COMING SOON
                  </span>
                )}
              </div>
            </div>

            {/* Media Highlight */}
            <div className="pt-8">
              <div className="rounded-xl overflow-hidden border border-white/15 bg-black">
                {project.video ? (
                  <video 
                    src={project.video}
                    controls
                    poster={project.heroImage}
                    className="w-full max-h-[500px] object-contain mx-auto"
                  />
                ) : (
                  <img 
                    src={project.heroImage} 
                    alt={project.title}
                    className="w-full max-h-[500px] object-contain mx-auto cursor-pointer"
                    onClick={() => setSelectedImage(project.heroImage)}
                  />
                )}
              </div>
            </div>

            {/* 02 THE PROBLEM & 03 WHAT I BUILT */}
            <div className="pt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-6 bg-white/5 border border-white/10 rounded-xl space-y-3">
                <span className="font-mono text-xs text-red-400 uppercase tracking-widest font-bold flex items-center gap-1.5">
                  <AlertCircle className="w-4 h-4" />
                  02 THE PROBLEM
                </span>
                <p className="text-sm text-[#A1A1AA] leading-relaxed">
                  {project.problem}
                </p>
              </div>

              <div className="p-6 bg-white/5 border border-white/10 rounded-xl space-y-3">
                <span className="font-mono text-xs text-[#CCFF00] uppercase tracking-widest font-bold flex items-center gap-1.5">
                  <CheckCircle className="w-4 h-4" />
                  03 WHAT I BUILT
                </span>
                <p className="text-sm text-[#A1A1AA] leading-relaxed">
                  {project.solution}
                </p>
              </div>
            </div>

            {/* PIPELINE VISUAL STEPS */}
            {project.pipelineSteps && (
              <div className="pt-10">
                <span className="font-mono text-xs text-[#CCFF00] uppercase tracking-widest block mb-4">
                  // SYSTEM DATA & EXECUTION PIPELINE
                </span>
                <div className="flex flex-wrap items-center gap-2 p-4 bg-black/60 border border-white/10 rounded-xl overflow-x-auto">
                  {project.pipelineSteps.map((step, idx) => (
                    <React.Fragment key={step}>
                      <span className="px-3 py-1.5 bg-white/5 border border-white/10 rounded font-mono text-xs font-bold text-white">
                        {step}
                      </span>
                      {idx < project.pipelineSteps!.length - 1 && (
                        <ArrowRight className="w-4 h-4 text-[#CCFF00] shrink-0" />
                      )}
                    </React.Fragment>
                  ))}
                </div>
              </div>
            )}

            {/* 04 ARCHITECTURE */}
            {project.architecture && (
              <div className="pt-10 space-y-4">
                <span className="font-mono text-xs text-[#CCFF00] uppercase tracking-widest block">
                  // 04 SYSTEM ARCHITECTURE COMPONENTS
                </span>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {project.architecture.map(arch => (
                    <div key={arch.name} className="p-4 bg-[#161618] border border-white/10 rounded-lg">
                      <h4 className="font-mono text-xs font-bold text-[#CCFF00] mb-2">{arch.name}</h4>
                      <p className="text-xs text-[#A1A1AA] leading-relaxed">{arch.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* 07 VERIFIED METRICS */}
            {project.metrics && (
              <div className="pt-10 space-y-4">
                <span className="font-mono text-xs text-[#CCFF00] uppercase tracking-widest block">
                  // 07 VERIFIED EVALUATION METRICS (FROM RESUME)
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {project.metrics.map(m => (
                    <div key={m.label} className="p-5 bg-[#CCFF00]/5 border border-[#CCFF00]/30 rounded-xl flex items-center justify-between font-mono">
                      <div>
                        <span className="text-xs text-[#A1A1AA] uppercase block">{m.label}</span>
                        <span className="text-xs text-white/50">{m.note}</span>
                      </div>
                      <span className="text-3xl font-extrabold text-[#CCFF00]">{m.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* 08 VISUAL WALKTHROUGH GALLERY */}
            {project.gallery && project.gallery.length > 0 && (
              <div className="pt-10 space-y-4">
                <span className="font-mono text-xs text-[#CCFF00] uppercase tracking-widest block">
                  // 08 VISUAL WALKTHROUGH & ASSETS
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {project.gallery.map((item, index) => (
                    <div 
                      key={index}
                      onClick={() => setSelectedImage(item.url)}
                      className="group cursor-pointer bg-black/40 border border-white/10 hover:border-[#CCFF00] rounded-lg overflow-hidden transition-all"
                    >
                      <div className="aspect-[4/3] overflow-hidden bg-black">
                        <img 
                          src={item.url} 
                          alt={item.caption}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                        />
                      </div>
                      <div className="p-3 font-mono text-[11px] text-[#A1A1AA] flex items-center justify-between">
                        <span className="truncate mr-2">{item.caption}</span>
                        <ImageIcon className="w-3.5 h-3.5 text-[#CCFF00] shrink-0" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* 11 TECH STACK */}
            <div className="pt-10 space-y-4">
              <span className="font-mono text-xs text-[#CCFF00] uppercase tracking-widest block">
                // 11 TECHNOLOGIES & LIBRARIES
              </span>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map(t => (
                  <span key={t} className="px-3 py-1.5 bg-white/10 border border-white/15 rounded font-mono text-xs text-white font-semibold">
                    {t}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-60 bg-black/95 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button 
            className="absolute top-6 right-6 p-3 bg-white/10 rounded-full text-white hover:bg-[#CCFF00] hover:text-black"
            onClick={() => setSelectedImage(null)}
          >
            <X className="w-6 h-6" />
          </button>
          <img 
            src={selectedImage} 
            alt="Expanded asset view"
            className="max-w-full max-h-[90vh] object-contain rounded-lg border border-white/20 shadow-2xl"
          />
        </div>
      )}
    </AnimatePresence>
  );
};
