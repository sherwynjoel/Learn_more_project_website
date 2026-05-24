'use client';

import { MessageCircle, Phone } from 'lucide-react';

export default function FloatCTA() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-white/95 backdrop-blur-md border-t border-slate-100 shadow-2xl shadow-slate-900/15 px-4 pt-3 pb-[max(12px,env(safe-area-inset-bottom))] flex gap-3">
      <a
        href="https://wa.me/917550191838?text=Hi%2C%20I%20want%20to%20enquire%20about%20final%20year%20projects%20at%20LearnMore%20Projects"
        target="_blank"
        rel="noopener noreferrer"
        className="btn-primary flex-1 justify-center py-3 text-sm"
      >
        <MessageCircle size={16} />
        WhatsApp Us
      </a>
      <a
        href="tel:+917550191838"
        className="btn-outline flex-1 justify-center py-3 text-sm"
      >
        <Phone size={16} />
        Call Now
      </a>
    </div>
  );
}
