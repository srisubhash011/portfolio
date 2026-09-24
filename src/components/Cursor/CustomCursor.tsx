import React, { useEffect, useState } from 'react';

export const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [cursorText, setCursorText] = useState('');
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    // Check touch device or reduced motion
    if ('ontouchstart' in window || navigator.maxTouchPoints > 0) {
      setIsTouchDevice(true);
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const interactiveEl = target.closest('a, button, [data-cursor]');
      
      if (interactiveEl) {
        setIsHovered(true);
        const text = interactiveEl.getAttribute('data-cursor') || '';
        setCursorText(text);
      } else {
        setIsHovered(false);
        setCursorText('');
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  if (isTouchDevice) return null;

  return (
    <>
      {/* Primary Dot */}
      <div 
        className="aria-hidden:true pointer-events-none fixed z-50 transition-transform duration-75 ease-out -translate-x-1/2 -translate-y-1/2 hidden md:block"
        style={{ 
          left: `${position.x}px`, 
          top: `${position.y}px` 
        }}
      >
        <div className={`rounded-full transition-all duration-300 flex items-center justify-center font-mono text-[10px] font-bold tracking-wider uppercase text-black ${
          isHovered 
            ? 'w-16 h-16 bg-[#CCFF00] shadow-[0_0_20px_rgba(204,255,0,0.4)] scale-110' 
            : 'w-3 h-3 bg-[#CCFF00]'
        }`}>
          {cursorText && <span>{cursorText}</span>}
        </div>
      </div>
    </>
  );
};
