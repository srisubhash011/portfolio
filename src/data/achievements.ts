import { Achievement } from '../types';

export const ACHIEVEMENTS: Achievement[] = [
  {
    title: 'CAMHI Club Leadership',
    role: 'President — CAMHI Club',
    description: 'Organized and executed a national-level 36-hour hackathon bringing together over 200+ active student developer participants.',
    stats: { number: '36h', label: '200+ PARTICIPANTS' }
  },
  {
    title: 'BIS Club Leadership',
    role: 'President — BIS Club',
    description: 'Led technical workshops, hackathons, and student-focused software engineering initiatives across campus.',
    stats: { number: 'PRESIDENT', label: 'STUDENT INITIATIVES' }
  },
  {
    title: 'Competitive Coding Champion',
    role: 'Winner — Coders of Blackpearl',
    description: 'Secured 1st place in real-time competitive coding competition testing algorithmic efficiency and problem solving speed.',
    stats: { number: '1ST PLACE', label: 'COMPETITIVE CODING' }
  }
];
