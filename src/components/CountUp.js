'use client';
import { useEffect, useRef, useState } from 'react';

export default function CountUp({ value, duration = 1800 }) {
  const m = String(value).match(/^([\d,]+)(.*)$/);
  const target = m ? parseInt(m[1].replace(/,/g, '')) : 0;
  const suffix = m ? m[2] : '';

  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const fired = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting && !fired.current) {
          fired.current = true;
          const t0 = performance.now();
          const tick = (now) => {
            const p = Math.min((now - t0) / duration, 1);
            const ease = 1 - Math.pow(1 - p, 3);
            setCount(Math.floor(ease * target));
            if (p < 1) requestAnimationFrame(tick);
            else setCount(target);
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.5 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [target, duration]);

  const display = count >= 1000 ? count.toLocaleString('en-US') : String(count);

  return <span ref={ref}>{display}{suffix}</span>;
}
