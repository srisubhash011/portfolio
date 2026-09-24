import React, { useState } from 'react';
import { CustomCursor } from './components/Cursor/CustomCursor';
import { Navbar } from './components/Navbar/Navbar';
import { Hero } from './components/Hero/Hero';
import { About } from './components/About/About';
import { AISystemMap } from './components/Signature/AISystemMap';
import { ProjectsSection } from './components/Projects/ProjectsSection';
import { HowIBuild } from './components/HowIBuild/HowIBuild';
import { ExperienceSection } from './components/Experience/ExperienceSection';
import { SkillsSection } from './components/Skills/SkillsSection';
import { AchievementsSection } from './components/Achievements/AchievementsSection';
import { PublicationsSection } from './components/Publications/PublicationsSection';
import { CertificationsSection } from './components/Certifications/CertificationsSection';
import { ContactSection } from './components/Contact/ContactSection';
import { Footer } from './components/Footer/Footer';
import { CaseStudyModal } from './components/CaseStudyModal/CaseStudyModal';
import { Project } from './types';

export function App() {
  const [activeCaseStudy, setActiveCaseStudy] = useState<Project | null>(null);

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-[#F5F5F5] font-sans antialiased selection:bg-[#CCFF00] selection:text-black">
      {/* Interactive Custom Cursor */}
      <CustomCursor />

      {/* Main Navbar */}
      <Navbar />

      {/* Hero Section */}
      <main>
        <Hero />
        
        {/* Positioning & Approach */}
        <About />

        {/* Portfolio Signature Feature: AI System Map */}
        <AISystemMap />

        {/* Selected Projects */}
        <ProjectsSection onOpenCaseStudy={(proj) => setActiveCaseStudy(proj)} />

        {/* Methodology: From Idea to System */}
        <HowIBuild />

        {/* Industry Experience */}
        <ExperienceSection />

        {/* Technical Capabilities Matrix */}
        <SkillsSection />

        {/* Leadership & Competitive Coding */}
        <AchievementsSection />

        {/* Academic Research */}
        <PublicationsSection />

        {/* Industry Certifications */}
        <CertificationsSection />

        {/* High Impact Contact */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Detailed Case Study Modal */}
      <CaseStudyModal 
        project={activeCaseStudy}
        onClose={() => setActiveCaseStudy(null)}
      />
    </div>
  );
}

export default App;
