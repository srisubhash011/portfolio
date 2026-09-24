import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Play, CheckCircle2, Layers } from 'lucide-react';
import { Project } from '../../types';

interface ProjectCardProps {
  project: Project;
  onOpenCaseStudy: (project: Project) => void;
  isFeatured?: boolean;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onOpenCaseStudy, isFeatured = false }) => {
  return (
    <motion.article 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6 }}
      onClick={() => onOpenCaseStudy(project)}
      data-cursor="VIEW"
      className="group cursor-pointer bg-[#111113] border border-white/10 hover:border-[#CCFF00]/50 rounded-2xl overflow-hidden transition-all duration-500 shadow-xl hover:shadow-[0_0_30px_rgba(204,255,0,0.15)] flex flex-col justify-between"
    >
      <div>
        {/* Media Container */}
        <div className="relative aspect-[16/9] w-full overflow-hidden bg-black/60 border-b border-white/10">
          
          {/* Status Badge */}
          <div className="absolute top-4 left-4 z-20 flex items-center gap-2 px-3 py-1 bg-black/80 backdrop-blur-md rounded border border-white/15 text-[10px] font-mono tracking-wider">
            <span className="text-[#CCFF00] font-bold">PROJECT {project.number}</span>
            <span className="text-white/30">•</span>
            <span className="text-[#A1A1AA] uppercase">{project.category}</span>
          </div>

          {project.video ? (
            <div className="relative w-full h-full">
              <video 
                src={project.video}
                poster={project.heroImage}
                muted
                loop
                playsInline
                autoPlay
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out brightness-90 group-hover:brightness-100"
              />
              <div className="absolute top-4 right-4 z-20 w-8 h-8 rounded-full bg-black/70 border border-white/20 flex items-center justify-center text-[#CCFF00]">
                <Play className="w-3.5 h-3.5 fill-[#CCFF00]" />
              </div>
            </div>
          ) : (
            <img 
              src={project.heroImage} 
              alt={project.title}
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out brightness-90 group-hover:brightness-100"
            />
          )}

          {/* Accent Overlay on Hover */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#111113] via-transparent to-transparent opacity-80" />
        </div>

        {/* Text Details */}
        <div className="p-6 sm:p-8">
          
          {/* Header Row */}
          <div className="flex items-center justify-between gap-4 mb-3 font-mono text-xs text-[#A1A1AA]">
            <span className="text-[#CCFF00] font-semibold">{project.year}</span>
            <span className="px-2 py-0.5 rounded bg-white/5 border border-white/10 text-[10px] uppercase">
              {project.status === 'ongoing' ? '● CURRENT FOCUS' : '✓ COMPLETED'}
            </span>
          </div>

          {/* Title */}
          <h3 className="text-2xl sm:text-3xl font-extrabold text-white group-hover:text-[#CCFF00] transition-colors leading-tight mb-3">
            {project.title}
          </h3>

          {/* Resume Description */}
          <p className="text-sm text-[#A1A1AA] leading-relaxed line-clamp-3 mb-6 font-normal">
            {project.resumeDescription}
          </p>

          {/* Metrics snippet if available */}
          {project.metrics && project.metrics.length > 0 && (
            <div className="mb-6 p-3 bg-white/5 border border-white/10 rounded-lg flex items-center gap-6 font-mono">
              {project.metrics.map(m => (
                <div key={m.label}>
                  <span className="text-xs text-[#A1A1AA] block uppercase">{m.label}</span>
                  <span className="text-base font-bold text-[#CCFF00]">{m.value}</span>
                </div>
              ))}
            </div>
          )}

          {/* Technology Badges */}
          <div className="flex flex-wrap gap-1.5 mb-6">
            {project.technologies.map(tech => (
              <span 
                key={tech}
                className="px-2.5 py-1 bg-white/5 hover:bg-white/10 border border-white/10 rounded font-mono text-[11px] text-[#A1A1AA]"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Bottom Bar */}
      <div className="px-6 sm:px-8 py-4 border-t border-white/10 bg-black/40 flex items-center justify-between font-mono text-xs text-white group-hover:text-[#CCFF00] transition-colors">
        <span className="font-bold tracking-wider uppercase">VIEW CASE STUDY</span>
        <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
      </div>
    </motion.article>
  );
};
