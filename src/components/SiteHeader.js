'use client';
import { useRef, useEffect } from 'react';
import AnnouncementBanner from './AnnouncementBanner';
import Navbar from './Navbar';

export default function SiteHeader() {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const update = () =>
      document.documentElement.style.setProperty('--header-h', el.offsetHeight + 'px');
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  return (
    <div ref={ref} className="fixed top-0 left-0 right-0 z-50">
      <AnnouncementBanner />
      <Navbar />
    </div>
  );
}
