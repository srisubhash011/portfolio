import React from 'react';
import { SITE_CONFIG } from '../../config/site';

export const Footer: React.FC = () => {
  return (
    <footer className="py-12 bg-[#0A0A0A] border-t border-white/10 font-mono text-xs text-[#A1A1AA]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-6">
        
        <div>
          <span className="font-bold text-white block">{SITE_CONFIG.name}</span>
          <span className="text-white/50 text-[11px]">{SITE_CONFIG.role} • {SITE_CONFIG.secondaryRole}</span>
        </div>

        <div className="flex items-center gap-6 text-xs">
          <a href={SITE_CONFIG.contact.github} target="_blank" rel="noopener noreferrer" className="hover:text-[#CCFF00] transition-colors">
            GitHub
          </a>
          <a href={SITE_CONFIG.contact.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-[#CCFF00] transition-colors">
            LinkedIn
          </a>
          <a href={`mailto:${SITE_CONFIG.contact.email}`} className="hover:text-[#CCFF00] transition-colors">
            Email
          </a>
        </div>

        <div className="text-right text-white/40 text-[11px]">
          <div>© {new Date().getFullYear()} {SITE_CONFIG.name}. All rights reserved.</div>
          <div>Built with React, TypeScript & Tailwind CSS</div>
        </div>

      </div>
    </footer>
  );
};
