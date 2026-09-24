import React from 'react';
import { CERTIFICATIONS } from '../../data/certifications';
import { Award, ExternalLink, CheckCircle } from 'lucide-react';

export const CertificationsSection: React.FC = () => {
  return (
    <section className="py-24 bg-[#0D0D0E] relative border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-white/10">
          <div>
            <span className="font-mono text-xs text-[#CCFF00] font-semibold tracking-widest uppercase mb-2 block">
              // VERIFIED CREDENTIALS
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight">
              CERTIFICATIONS
            </h2>
          </div>
          <div className="mt-4 md:mt-0 font-mono text-xs text-[#A1A1AA]">
            6 VERIFIED INDUSTRY CERTIFICATES
          </div>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {CERTIFICATIONS.map((cert) => (
            <div
              key={cert.title}
              className="p-6 bg-[#161618] border border-white/10 rounded-xl hover:border-[#CCFF00]/40 transition-colors flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3 font-mono text-xs">
                  <span className="text-[#CCFF00] font-bold flex items-center gap-1.5">
                    <Award className="w-4 h-4" />
                    {cert.issuer}
                  </span>
                  <CheckCircle className="w-4 h-4 text-white/30" />
                </div>

                <h3 className="text-base font-bold text-white leading-snug mb-2">
                  {cert.title}
                </h3>
              </div>

              <div className="mt-6 pt-3 border-t border-white/10 flex items-center justify-between font-mono text-[11px] text-[#A1A1AA]">
                <span>STATUS: VERIFIED</span>
                {cert.certificateUrl ? (
                  <a 
                    href={cert.certificateUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-[#CCFF00] hover:underline flex items-center gap-1"
                  >
                    <span>VIEW CERTIFICATE</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                ) : (
                  <span>CREDENTIAL VERIFIED</span>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
