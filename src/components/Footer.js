import Link from 'next/link';
import Image from 'next/image';
import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react';

const domains = [
  'Embedded Systems', 'IoT Projects', 'AI / Machine Learning',
  'Robotics', 'Bio-Medical', 'Power Electronics',
  'Mechanical', 'Software Development',
];

const quickLinks = [
  { href: '/', label: 'Home' },
  { href: '/projects', label: 'Projects' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/training', label: 'Training & Courses' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/faq', label: 'FAQ' },
  { href: '/team', label: 'Our Team' },
  { href: '/blog', label: 'Blog & Resources' },
  { href: '/about', label: 'About Us' },
  { href: '/contact', label: 'Contact' },
];

const offerings = [
  'IEEE-Standard Projects', 'Full Source Code',
  'Hardware Support', 'Complete Documentation',
  'Viva Q&A Preparation', 'Internship Programs',
  'Certified Courses', 'Placement Assistance',
];

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">

      {/* ── Top CTA strip ── */}
      <div className="bg-primary-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 sm:py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-center sm:text-left">
              <p className="text-white font-bold text-base sm:text-lg">Ready to start your final year project?</p>
              <p className="text-primary-100 text-xs sm:text-sm mt-0.5">Expert guidance · Hardware support · IEEE documentation</p>
            </div>
            <div className="flex w-full sm:w-auto gap-3 flex-shrink-0">
              <a
                href="https://wa.me/917550191838?text=Hi%2C%20I%20want%20to%20enquire%20about%20final%20year%20projects%20at%20LearnMore%20Projects"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 sm:flex-none flex items-center justify-center gap-2 bg-white text-primary-700 font-semibold text-sm px-4 sm:px-5 py-2.5 rounded-xl hover:bg-primary-50 transition-colors"
              >
                <MessageCircle size={16} /> WhatsApp Us
              </a>
              <a
                href="tel:+917550191838"
                className="flex-1 sm:flex-none flex items-center justify-center gap-2 border-2 border-white text-white font-semibold text-sm px-4 sm:px-5 py-2.5 rounded-xl hover:bg-white/10 transition-colors"
              >
                <Phone size={16} /> Call Now
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ── Main grid ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">

          {/* Brand — full width on mobile, half on sm, 1/4 on lg */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="mb-4">
              <Image
                src="/logo.png"
                alt="LearnMore Projects"
                width={140}
                height={48}
                className="h-9 sm:h-10 w-auto object-contain brightness-0 invert"
              />
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-5">
              Coimbatore's leading final year project & R&D center. Empowering engineers with real-world, industry-relevant project experience since 2018.
            </p>
            <div className="space-y-2.5">
              <a href="tel:+917550191838" className="flex items-center gap-2.5 text-sm text-slate-400 hover:text-white transition-colors">
                <Phone size={14} className="text-primary-400 flex-shrink-0" />
                +91 75501 91838
              </a>
              <a href="mailto:info@learnmoreprojects.in" className="flex items-center gap-2.5 text-sm text-slate-400 hover:text-white transition-colors break-all">
                <Mail size={14} className="text-primary-400 flex-shrink-0" />
                info@learnmoreprojects.in
              </a>
              <div className="flex items-start gap-2.5 text-sm text-slate-400">
                <MapPin size={14} className="text-primary-400 flex-shrink-0 mt-0.5" />
                <span>202, Nehru St, Peranaidu Layout,<br />Ram Nagar, Coimbatore, Tamil Nadu 641009</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">Quick Links</h3>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-slate-400 hover:text-white text-sm transition-colors hover:translate-x-0.5 inline-block">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Domains */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">Project Domains</h3>
            <ul className="space-y-2.5">
              {domains.map((domain) => (
                <li key={domain}>
                  <Link href="/projects" className="text-slate-400 hover:text-white text-sm transition-colors">
                    {domain}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* What We Offer — 2-col bullet grid on mobile */}
          <div className="sm:col-span-2 lg:col-span-1">
            <h3 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">What We Offer</h3>
            <ul className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-1 gap-x-4 gap-y-2.5 text-sm text-slate-400">
              {offerings.map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary-500 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>

      {/* ── Bottom bar ── */}
      <div className="border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-5 flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left">
          <p className="text-slate-500 text-xs sm:text-sm">
            © {new Date().getFullYear()} LearnMore Projects. All rights reserved.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
            <p className="text-slate-600 text-xs sm:text-sm">
              Coimbatore's #1 Final Year Project & R&D Center
            </p>
            <span className="hidden sm:block text-slate-700 text-xs">·</span>
            <a
              href="https://thearktech.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-500 hover:text-primary-400 text-xs transition-colors"
            >
              Powered by <span className="font-semibold text-primary-400">ArkTech</span>
            </a>
          </div>
        </div>
      </div>

    </footer>
  );
}
