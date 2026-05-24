'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X, Phone } from 'lucide-react';

const links = [
  { href: '/',          label: 'Home' },
  { href: '/projects',  label: 'Projects' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/training',  label: 'Training' },
  { href: '/pricing',   label: 'Pricing' },
  { href: '/blog',      label: 'Blog' },
  { href: '/about',     label: 'About' },
  { href: '/contact',   label: 'Contact' },
];

export default function Navbar() {
  const [isOpen,   setIsOpen]   = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => { setIsOpen(false); }, [pathname]);

  return (
    <nav
      className={`w-full transition-all duration-500 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-xl shadow-lg shadow-slate-900/5 border-b border-slate-100/80'
          : 'bg-white/80 backdrop-blur-md'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <Image
              src="/logo.png"
              alt="LearnMore Projects"
              width={150}
              height={50}
              className="h-10 w-auto object-contain"
              priority
            />
          </Link>

          {/* Desktop nav links */}
          <div className="hidden md:flex items-center gap-0.5">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  (link.href === '/' ? pathname === '/' : pathname === link.href)
                    ? 'text-primary-700 bg-primary-50'
                    : 'text-slate-600 hover:text-primary-700 hover:bg-slate-50'
                }`}
              >
                {link.label}
                {(link.href === '/' ? pathname === '/' : pathname === link.href) && (
                  <span className="absolute bottom-1 left-4 right-4 h-0.5 bg-gradient-to-r from-primary-700 to-primary-400 rounded-full" />
                )}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="tel:+917550191838"
              className="flex items-center gap-1.5 text-slate-500 hover:text-primary-700 text-sm font-medium transition-colors"
            >
              <Phone size={13} />
              +91 75501 91838
            </a>
            <a
              href="https://wa.me/917550191838?text=Hi%2C%20I%20want%20to%20enquire%20about%20final%20year%20projects%20at%20LearnMore%20Projects"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-sm py-2 px-5"
            >
              Enquire Now →
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg text-slate-600 hover:text-primary-700 hover:bg-slate-50 transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile menu */}
        <div className={`md:hidden overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 pb-4' : 'max-h-0'}`}>
          <div className="border-t border-slate-100 pt-3 space-y-1">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`block px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                  (link.href === '/' ? pathname === '/' : pathname === link.href)
                    ? 'bg-primary-50 text-primary-700'
                    : 'text-slate-600 hover:bg-slate-50 hover:text-primary-700'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-2 space-y-2">
              <a href="tel:+917550191838" className="flex items-center gap-2 px-4 py-2.5 text-slate-600 text-sm font-medium">
                <Phone size={14} /> +91 75501 91838
              </a>
              <a
                href="https://wa.me/917550191838?text=Hi%2C%20I%20want%20to%20enquire%20about%20final%20year%20projects%20at%20LearnMore%20Projects"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary w-full justify-center text-sm py-2.5"
              >
                Enquire Now →
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
