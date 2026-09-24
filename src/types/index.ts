export interface Project {
  id: string;
  number: string;
  title: string;
  slug: string;
  category: 'AI / ML' | 'Computer Vision' | 'Data Analytics' | 'Full Stack' | 'Blockchain';
  subCategory: string;
  year: string;
  status: 'ongoing' | 'completed';
  featured: boolean;
  tagline: string;
  resumeDescription: string;
  technologies: string[];
  
  // Detailed Case Study Fields
  problem: string;
  solution: string;
  pipelineSteps?: string[];
  architecture?: {
    name: string;
    description: string;
  }[];
  keyDecisions?: string[];
  metrics?: { label: string; value: string; note: string }[];
  challenges?: string[];
  learnings?: string[];
  
  // Media Assets
  heroImage: string;
  video?: string;
  gallery: {
    url: string;
    caption: string;
    type: 'image' | 'video' | 'diagram' | 'chart';
  }[];

  // Links
  github: string | null;
  demo: string | null;
}

export interface ExperienceItem {
  company: string;
  role: string;
  location: string;
  period: string;
  website: string;
  category: string;
  bullets: string[];
}

export interface SkillGroup {
  category: string;
  skills: {
    name: string;
    projectsUsed: string[]; // project slugs or names
  }[];
}

export interface Achievement {
  title: string;
  role: string;
  description: string;
  stats?: { number: string; label: string };
  year?: string;
}

export interface Publication {
  title: string;
  publisher: string;
  status: string;
  doi?: string;
  url?: string;
  paperPdf?: string;
}

export interface Certification {
  title: string;
  issuer: string;
  date?: string;
  certificateUrl?: string;
}
