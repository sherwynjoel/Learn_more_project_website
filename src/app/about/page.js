import Link from 'next/link';
import {
  MessageCircle, ArrowRight, CheckCircle2, Target, Eye,
  Award, Users, BookOpen, Shield, Cpu, HeartPulse, Brain,
} from 'lucide-react';

export const metadata = {
  title: 'About Us | LearnMore Projects — Best Project Center Coimbatore',
  description:
    "About LearnMore Projects — Coimbatore's best final year project & R&D center. 10+ years, 7000+ students, 5000+ projects across 8 engineering domains. Located in Ramnagar, serving Gandhipuram, RS Puram, Peelamedu, and all of Coimbatore.",
  keywords:
    'about learnmore projects, best project center coimbatore, final year project center history coimbatore, R&D center coimbatore, project guidance coimbatore, project center ramnagar coimbatore, engineering project center tamil nadu',
};

const values = [
  {
    icon: Award,
    title: 'Quality Over Quantity',
    desc: 'We\'d rather take fewer students and do each project properly than rush through hundreds. Every prototype we build is functional.',
  },
  {
    icon: BookOpen,
    title: 'Education First',
    desc: 'We explain every circuit, every algorithm, and every design decision. Students leave knowing their project inside out.',
  },
  {
    icon: Shield,
    title: 'No Technical Hiding',
    desc: 'We give you full source code, full schematics, full documentation. We never lock students out of their own project.',
  },
  {
    icon: Users,
    title: 'Long-Term Relationship',
    desc: 'We support students during viva, after submission, and even for their career. Our WhatsApp groups stay active for years.',
  },
];

const milestones = [
  { year: '2018', event: 'LearnMore Projects founded in Coimbatore with 3 engineers.' },
  { year: '2019', event: 'First 100 students served. Launched IoT and Embedded workshops.' },
  { year: '2020', event: 'Moved to online support during COVID. Helped 200+ students complete remote projects.' },
  { year: '2021', event: 'Introduced Bio-Medical projects — first center in Coimbatore to do so.' },
  { year: '2022', event: 'Launched Edge AI specialization. First IEEE paper published by our student batch.' },
  { year: '2023', event: 'Crossed 1,000 students milestone. Started institutional R&D partnerships.' },
  { year: '2024', event: '3 patents filed. Launched certified course programs. Expanded to 8 domain verticals.' },
];

const differentiators = [
  {
    us: 'Explain every component and algorithm to you',
    them: 'Just hand over files and send you away',
  },
  {
    us: 'Provide actual hardware components and prototype',
    them: 'Simulation only — no real hardware',
  },
  {
    us: 'Bio-Medical & Embedded AI specialization',
    them: 'Only generic Embedded / IoT projects',
  },
  {
    us: 'WhatsApp support throughout the entire project',
    them: 'Available only in-center during business hours',
  },
  {
    us: 'Viva Q&A preparation + presentation coaching',
    them: 'Documentation dropped off, student on their own',
  },
  {
    us: 'Institutional R&D and research paper guidance',
    them: 'Only undergraduate projects',
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-gradient-to-br from-primary-950 to-primary-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-primary-300 font-semibold text-sm uppercase tracking-wider mb-3">Who We Are</p>
          <h1 className="text-4xl md:text-5xl font-black text-white mb-4">About LearnMore Projects</h1>
          <p className="text-primary-200 text-lg max-w-2xl mx-auto leading-relaxed">
            We started as three engineers who believed students deserved better than cookie-cutter projects. Ten years later, we've helped 7,000+ engineers build careers.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-primary-50 border border-primary-100 rounded-3xl p-8">
              <div className="w-12 h-12 bg-primary-100 rounded-2xl flex items-center justify-center mb-5">
                <Target size={22} className="text-primary-700" />
              </div>
              <h2 className="text-2xl font-black text-slate-900 mb-4">Our Mission</h2>
              <p className="text-slate-600 text-base leading-relaxed">
                To empower every engineering student with hands-on, industry-relevant project experience that bridges the gap between textbook theory and real-world engineering practice — so they graduate job-ready, not just degree-ready.
              </p>
            </div>
            <div className="bg-slate-900 rounded-3xl p-8">
              <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center mb-5">
                <Eye size={22} className="text-white" />
              </div>
              <h2 className="text-2xl font-black text-white mb-4">Our Vision</h2>
              <p className="text-slate-300 text-base leading-relaxed">
                To become India's most trusted final year project and R&D center — known not for the number of projects we deliver, but for the quality of engineers we produce and the careers we help launch.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-14 bg-primary-700">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { value: '7,000+',  label: 'Students Supported' },
              { value: '5,000+', label: 'Projects Delivered' },
              { value: '40+',     label: 'IEEE Papers Published' },
              { value: '10+',     label: 'Years of Excellence' },
            ].map((s) => (
              <div key={s.label}>
                <p className="text-4xl font-black text-white">{s.value}</p>
                <p className="text-primary-200 text-sm font-medium mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-title">What We Stand For</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => (
              <div key={v.title} className="card text-center">
                <div className="w-12 h-12 bg-primary-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <v.icon size={20} className="text-primary-700" />
                </div>
                <h3 className="font-bold text-slate-900 text-base mb-2">{v.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LearnMore vs Others */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-title">
              LearnMore vs. Others
            </h2>
            <p className="section-subtitle mx-auto text-center">
              Why students who've been to other centers come back to us.
            </p>
          </div>

          <div className="rounded-3xl border border-slate-200 overflow-hidden">
            <div className="grid grid-cols-2 bg-slate-900">
              <div className="p-5 text-center">
                <p className="text-white font-bold text-sm">LearnMore Projects</p>
              </div>
              <div className="p-5 text-center border-l border-slate-700">
                <p className="text-slate-400 font-bold text-sm">Other Centers</p>
              </div>
            </div>
            {differentiators.map((d, i) => (
              <div key={i} className={`grid grid-cols-2 ${i % 2 === 0 ? 'bg-white' : 'bg-slate-50'}`}>
                <div className="p-5 flex items-start gap-3 border-b border-slate-100">
                  <CheckCircle2 size={16} className="text-green-500 mt-0.5 flex-shrink-0" />
                  <p className="text-slate-700 text-sm font-medium">{d.us}</p>
                </div>
                <div className="p-5 flex items-start gap-3 border-b border-slate-100 border-l border-slate-200">
                  <span className="w-4 h-4 rounded-full border-2 border-slate-300 mt-0.5 flex-shrink-0" />
                  <p className="text-slate-400 text-sm">{d.them}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-title">Our Journey</h2>
          </div>
          <div className="relative">
            <div className="absolute left-16 top-0 bottom-0 w-0.5 bg-primary-100" />
            <div className="space-y-6">
              {milestones.map((m) => (
                <div key={m.year} className="flex items-start gap-6">
                  <div className="w-14 flex-shrink-0 text-right">
                    <span className="text-primary-700 font-black text-sm">{m.year}</span>
                  </div>
                  <div className="relative">
                    <div className="absolute -left-3 top-1.5 w-3 h-3 bg-primary-700 rounded-full border-2 border-white shadow" />
                  </div>
                  <div className="bg-white rounded-2xl border border-slate-100 px-5 py-4 flex-1 ml-2">
                    <p className="text-slate-700 text-sm leading-relaxed">{m.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary-700">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-black text-white mb-4">Work With Us</h2>
          <p className="text-primary-100 text-lg mb-8">
            Whether you're a student, institution, or company — let's build something great together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/917550191838?text=Hi%2C%20I%20want%20to%20enquire%20about%20LearnMore%20Projects"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-primary-700 font-bold text-base px-8 py-4 rounded-2xl hover:bg-primary-50 transition-colors"
            >
              <MessageCircle size={18} />
              WhatsApp Us
            </a>
            <Link href="/contact" className="inline-flex items-center gap-2 border-2 border-white text-white font-bold text-base px-8 py-4 rounded-2xl hover:bg-white/10 transition-colors">
              Get In Touch
              <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
