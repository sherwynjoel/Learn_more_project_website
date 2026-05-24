'use client';
import { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Back to top"
      className={`fixed bottom-24 md:bottom-8 right-4 z-50 w-11 h-11 rounded-xl flex items-center justify-center shadow-lg transition-all duration-300 ${
        visible
          ? 'opacity-100 translate-y-0 pointer-events-auto'
          : 'opacity-0 translate-y-4 pointer-events-none'
      }`}
      style={{ background: 'linear-gradient(135deg,#1e3a8a 0%,#2563eb 100%)' }}
    >
      <ArrowUp size={18} className="text-white" />
    </button>
  );
}
