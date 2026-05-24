'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronRight, Home } from 'lucide-react';

const labels = {
  projects:  'Projects',
  portfolio: 'Portfolio',
  training:  'Training & Courses',
  pricing:   'Pricing',
  faq:       'FAQ',
  team:      'Our Team',
  blog:      'Blog & Resources',
  about:     'About Us',
  contact:   'Contact',
  domains:   'Domains',
  'top-final-year-projects-ece-2025':    'Top ECE Projects 2025',
  'how-to-clear-final-year-viva':        'How to Clear Viva',
  'embedded-vs-iot-final-year-project':  'Embedded vs IoT',
  'embedded-systems':    'Embedded Systems',
  'iot-projects':        'IoT Projects',
  'ai-ml':               'AI / ML',
  'bio-medical':         'Bio-Medical',
  'power-electronics':   'Power Electronics',
  'robotics':            'Robotics',
  'software-development':'Software Development',
  'mechanical':          'Mechanical',
};

export default function Breadcrumbs() {
  const pathname = usePathname();
  if (pathname === '/') return null;

  const segments = pathname.split('/').filter(Boolean);

  return (
    <nav aria-label="Breadcrumb" className="bg-slate-50 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2.5 flex items-center gap-1.5 text-sm">
        <Link
          href="/"
          className="flex items-center gap-1 text-slate-400 hover:text-primary-700 transition-colors min-h-[44px] sm:min-h-0 py-2 sm:py-0"
        >
          <Home size={13} />
          <span>Home</span>
        </Link>
        {segments.map((seg) => (
          <div key={seg} className="flex items-center gap-1.5">
            <ChevronRight size={13} className="text-slate-300 flex-shrink-0" />
            <span className="text-slate-700 font-medium capitalize">
              {labels[seg] ?? seg}
            </span>
          </div>
        ))}
      </div>
    </nav>
  );
}
