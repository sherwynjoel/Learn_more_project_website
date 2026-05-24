'use client';
import { useEffect, useRef } from 'react';

export default function CursorGlow() {
  const glowRef = useRef(null);

  useEffect(() => {
    const el = glowRef.current;
    if (!el) return;
    const onMove = (e) => {
      el.style.left = `${e.clientX - 200}px`;
      el.style.top  = `${e.clientY - 200}px`;
    };
    window.addEventListener('mousemove', onMove, { passive: true });
    return () => window.removeEventListener('mousemove', onMove);
  }, []);

  return (
    <div
      ref={glowRef}
      aria-hidden="true"
      className="pointer-events-none fixed hidden md:block z-0"
      style={{
        width: 400,
        height: 400,
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(29,78,216,0.07) 0%, transparent 70%)',
        transition: 'left 0.12s ease-out, top 0.12s ease-out',
        left: -400,
        top: -400,
      }}
    />
  );
}
