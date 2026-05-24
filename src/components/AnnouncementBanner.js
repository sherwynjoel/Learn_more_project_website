'use client';
import { useState } from 'react';
import Link from 'next/link';
import { X, Megaphone } from 'lucide-react';

export default function AnnouncementBanner() {
  const [dismissed, setDismissed] = useState(false);
  if (dismissed) return null;

  return (
    <div className="relative z-50 bg-gradient-to-r from-primary-800 via-primary-700 to-primary-800 text-white text-sm py-2.5 px-4">
      <div className="max-w-7xl mx-auto flex items-center justify-center gap-2.5 pr-8">
        <Megaphone size={14} className="text-primary-200 flex-shrink-0" />
        <p className="text-center text-xs sm:text-sm">
          <span className="font-semibold">New batch starting July 2026</span>
          <span className="text-primary-200 mx-2 hidden sm:inline">—</span>
          <Link href="/training" className="underline underline-offset-2 hover:text-white transition-colors font-medium hidden sm:inline">
            Enroll in Embedded, IoT & AI courses →
          </Link>
          <Link href="/training" className="underline underline-offset-2 hover:text-white transition-colors font-medium sm:hidden">
            Enroll Now →
          </Link>
        </p>
      </div>
      <button
        onClick={() => setDismissed(true)}
        aria-label="Dismiss"
        className="absolute right-3 top-1/2 -translate-y-1/2 p-1.5 rounded-lg hover:bg-white/10 transition-colors"
      >
        <X size={14} />
      </button>
    </div>
  );
}
