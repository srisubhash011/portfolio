import React, { useState } from 'react';
import { PROJECTS } from '../../data/projects';
import { ProjectCard } from '../ProjectCard/ProjectCard';
import { Project } from '../../types';
import { Filter, Sparkles } from 'lucide-react';

interface ProjectsSectionProps {
  onOpenCaseStudy: (project: Project) => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ onOpenCaseStudy }) => {
  const [activeFilter, setActiveFilter] = useState<string>('ALL');

  const categories = ['ALL', 'Computer Vision', 'Data Analytics', 'Full Stack', 'Blockchain'];

  const filteredProjects = activeFilter === 'ALL'
    ? PROJECTS
    : PROJECTS.filter(p => p.category.toLowerCase() === activeFilter.toLowerCase());

  return (
    <section id="work" className="py-24 bg-[#0A0A0A] relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-white/10">
          <div>
            <div className="flex items-center gap-2 font-mono text-xs text-[#CCFF00] font-semibold tracking-widest uppercase mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>SELECTED ENGINEERING CASE STUDIES</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tight">
              FEATURED WORK
            </h2>
          </div>
          
          {/* Category Filter Buttons */}
          <div className="mt-6 md:mt-0 flex flex-wrap items-center gap-2">
            <span className="font-mono text-xs text-[#A1A1AA] mr-2 flex items-center gap-1">
              <Filter className="w-3 h-3 text-[#CCFF00]" />
              FILTER:
            </span>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-3 py-1.5 rounded font-mono text-xs transition-all ${
                  activeFilter === cat
                    ? 'bg-[#CCFF00] text-black font-bold shadow-[0_0_10px_rgba(204,255,0,0.3)]'
                    : 'bg-white/5 hover:bg-white/10 text-[#A1A1AA] border border-white/10'
                }`}
              >
                {cat.toUpperCase()}
              </button>
            ))}
          </div>
        </div>

        {/* Editorial Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {filteredProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              onOpenCaseStudy={onOpenCaseStudy}
              isFeatured={index === 0}
            />
          ))}
        </div>

      </div>
    </section>
  );
};
