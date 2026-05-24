import Link from 'next/link';
import { Home, ArrowRight, MessageCircle } from 'lucide-react';

export const metadata = { title: '404 — Page Not Found | LearnMore Projects' };

const quickLinks = [
  { href: '/projects',  label: 'Browse Projects' },
  { href: '/portfolio', label: 'View Portfolio' },
  { href: '/training',  label: 'Training & Courses' },
  { href: '/contact',   label: 'Contact Us' },
];

export default function NotFound() {
  return (
    <section className="min-h-[80vh] flex items-center justify-center relative overflow-hidden hero-gradient">
      <div className="absolute inset-0 hero-grid opacity-40 pointer-events-none" />

      {/* Blur orbs */}
      <div className="absolute top-1/4 right-[10%] w-80 h-80 bg-primary-300/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-[5%]  w-60 h-60 bg-blue-200/20  rounded-full blur-3xl pointer-events-none" />

      <div className="relative text-center px-4 sm:px-8 max-w-2xl mx-auto">
        {/* Giant 404 */}
        <p
          className="text-[8rem] sm:text-[11rem] font-black leading-none tracking-tighter select-none"
          style={{
            background: 'linear-gradient(135deg,#1e3a8a 0%,#3b82f6 60%,#93c5fd 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
        >
          404
        </p>

        <h1 className="text-2xl sm:text-3xl font-black text-slate-900 mt-2 mb-3">
          Page Not Found
        </h1>
        <p className="text-slate-500 text-base sm:text-lg leading-relaxed mb-8">
          The page you're looking for doesn't exist or has been moved.
          Let's get you back to building something great.
        </p>

        {/* Primary actions */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center mb-10">
          <Link href="/" className="btn-primary text-base justify-center">
            <Home size={17} /> Back to Home
          </Link>
          <a
            href="https://wa.me/917550191838?text=Hi%2C%20I%20need%20help%20finding%20something%20on%20the%20LearnMore%20Projects%20website"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline text-base justify-center"
          >
            <MessageCircle size={17} /> WhatsApp Us
          </a>
        </div>

        {/* Quick links */}
        <div className="border-t border-slate-200 pt-8">
          <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-4">
            Or jump to
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {quickLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="glass-light rounded-xl px-4 py-2 text-sm font-medium text-slate-700 hover:text-primary-700 transition-colors flex items-center gap-1.5 group"
              >
                {link.label}
                <ArrowRight size={13} className="opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
