'use client';
import { useEffect, useRef } from 'react';

export default function Reveal({ children, className = '', delay = 0, from = 'up' }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setTimeout(() => el.classList.add('in-view'), delay);
          obs.unobserve(el);
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [delay]);

  return (
    <div ref={ref} className={`reveal-${from} ${className}`}>
      {children}
    </div>
  );
}
