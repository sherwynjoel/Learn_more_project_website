import Link from 'next/link';
import {
  ArrowRight, MessageCircle, Phone, CheckCircle2,
  Cpu, Wifi, Brain, Bot, HeartPulse, Zap, Wrench, Code2,
  Award, Users, BookOpen, Shield, Star, ChevronRight, Quote,
  TrendingUp, FlaskConical, FileCheck2, Microscope, Download,
} from 'lucide-react';
import Reveal from '@/components/Reveal';
import CountUp from '@/components/CountUp';
import ProjectQuiz from '@/components/ProjectQuiz';

const techStack = [
  'Arduino', 'Raspberry Pi', 'STM32', 'ESP32', 'TensorFlow Lite',
  'OpenCV', 'MATLAB Simulink', 'AWS IoT', 'Python', 'React.js',
  'Node.js', 'ROS Noetic', 'MQTT', 'Firebase', 'PyTorch',
  'Scikit-learn', 'PSIM', 'KiCad', 'SolidWorks', 'AutoCAD',
  'LangChain', 'Docker', 'FreeRTOS', 'Keras', 'BLE 5.0',
];

const domains = [
  { icon: Cpu,        title: 'Embedded Systems',     count: '500+', desc: 'Arduino, ARM, PIC, ATMEL, Raspberry Pi, STM32 — microcontroller projects with real hardware.', color: 'bg-primary-50 text-primary-700 border-primary-100', iconBg: 'bg-primary-100', iconColor: 'text-primary-700', glow: 'hover:shadow-primary-100/80', href: '/domains/embedded-systems' },
  { icon: Wifi,       title: 'IoT Projects',          count: '400+', desc: 'Smart home, agriculture, industrial automation, and cloud-connected sensor systems.',          color: 'bg-primary-50 text-primary-700 border-primary-100', iconBg: 'bg-primary-100', iconColor: 'text-primary-700', glow: 'hover:shadow-primary-100/80', href: '/domains/iot-projects' },
  { icon: Brain,      title: 'AI / Machine Learning', count: '350+', desc: 'Deep learning, computer vision, NLP, and edge AI deployed on embedded hardware.',             color: 'bg-primary-50 text-primary-700 border-primary-100', iconBg: 'bg-primary-100', iconColor: 'text-primary-700', glow: 'hover:shadow-primary-100/80', href: '/domains/ai-ml' },
  { icon: Bot,        title: 'Robotics',              count: '200+', desc: 'Autonomous robots, industrial arms, line followers, and drone-based systems.',                 color: 'bg-primary-50 text-primary-700 border-primary-100', iconBg: 'bg-primary-100', iconColor: 'text-primary-700', glow: 'hover:shadow-primary-100/80', href: '/domains/robotics' },
  { icon: HeartPulse, title: 'Bio-Medical',           count: '150+', desc: 'Patient monitoring, medical imaging, wearable health devices, and diagnostic tools.',         color: 'bg-primary-50 text-primary-700 border-primary-100', iconBg: 'bg-primary-100', iconColor: 'text-primary-700', glow: 'hover:shadow-primary-100/80', badge: 'Unique to Us', href: '/domains/bio-medical' },
  { icon: Zap,        title: 'Power Electronics',     count: '250+', desc: 'Solar inverters, motor drives, EV charging, smart grid, and energy harvesting.',             color: 'bg-primary-50 text-primary-700 border-primary-100', iconBg: 'bg-primary-100', iconColor: 'text-primary-700', glow: 'hover:shadow-primary-100/80', href: '/domains/power-electronics' },
  { icon: Wrench,     title: 'Mechanical',            count: '180+', desc: 'CAD/CAM design, fabrication, mechatronics, and automobile projects.',                         color: 'bg-primary-50 text-primary-700 border-primary-100', iconBg: 'bg-primary-100', iconColor: 'text-primary-700', glow: 'hover:shadow-primary-100/80', href: '/domains/mechanical' },
  { icon: Code2,      title: 'Software Development',  count: '300+', desc: 'Web apps, mobile apps, data science, Python, Java, and full-stack projects.',                 color: 'bg-primary-50 text-primary-700 border-primary-100', iconBg: 'bg-primary-100', iconColor: 'text-primary-700', glow: 'hover:shadow-primary-100/80', href: '/domains/software-development' },
];

const whyUs = [
  { icon: Award,      title: 'IEEE-Standard Projects',       desc: 'Every project follows IEEE paper methodology. We source the latest base papers and build on them with new innovations.' },
  { icon: Cpu,        title: 'Complete Hardware Kit',        desc: "We don't just give you code — we provide the actual hardware components, PCB, and working prototype." },
  { icon: BookOpen,   title: 'Full Documentation',           desc: 'Synopsys, reports, PPT, viva Q&A, source code, and circuit diagrams — everything you need to defend your project.' },
  { icon: HeartPulse, title: 'Bio-Medical Specialization',   desc: 'The only center in Coimbatore offering dedicated Bio-Medical engineering projects. Unique edge for BME students.' },
  { icon: Brain,      title: 'Embedded AI Expertise',        desc: 'We deploy AI/ML models on microcontrollers — edge inference on Arduino, Raspberry Pi, and STM32 platforms.' },
  { icon: Shield,     title: 'R&D Support for Institutions', desc: 'Beyond student projects — we partner with colleges and companies for research, prototyping, and product development.' },
];

const featuredProjects = [
  {
    domain: 'IoT + AI', domainColor: 'bg-primary-100 text-primary-700',
    title: 'Smart Precision Agriculture System',
    desc: 'Soil moisture, NPK, and temperature sensors feeding an ML model that predicts crop health and auto-irrigates via IoT relays.',
    tech: ['Raspberry Pi', 'TensorFlow Lite', 'AWS IoT', 'MQTT'],
    outcome: 'Published in IEEE Xplore — student placed at Tata Consultancy Services.',
    accentColor: 'from-primary-900 to-primary-700',
  },
  {
    domain: 'Embedded AI', domainColor: 'bg-primary-100 text-primary-700',
    title: 'Edge AI Defect Detection System',
    desc: 'Real-time visual inspection on a conveyor belt using a CNN deployed on Raspberry Pi — no cloud dependency, 94% accuracy.',
    tech: ['Raspberry Pi 4', 'OpenCV', 'TensorFlow Lite', 'Python'],
    outcome: 'Finalist at Smart India Hackathon 2024.',
    badge: 'Featured',
    accentColor: 'from-primary-700 to-primary-500',
  },
  {
    domain: 'Bio-Medical', domainColor: 'bg-primary-100 text-primary-700',
    title: 'Non-Invasive Glucose Monitor',
    desc: 'Near-infrared spectroscopy + ML to estimate blood glucose without needle pricks. Wearable wristband prototype.',
    tech: ['STM32', 'NIR Sensors', 'Python', 'BLE 5.0'],
    outcome: 'Patent filed. Student joined a Bangalore medtech startup.',
    accentColor: 'from-primary-500 to-blue-400',
  },
];

const testimonials = [
  {
    name: 'Priya S.', college: 'PSG College of Technology', branch: 'B.E. ECE', rating: 5,
    text: 'LearnMore was the only center where the team actually understood what Embedded AI means. They built our project from scratch with full hardware, explained every component, and helped us publish in IEEE. Got placed at Bosch.',
    highlight: 'Got placed at Bosch',
  },
  {
    name: 'Karthik R.', college: 'Coimbatore Institute of Technology', branch: 'B.Tech IT', rating: 5,
    text: "The documentation support is unmatched. I had my viva in 3 days and they stayed back to help me prepare Q&A for every circuit and code block. I cleared with distinction.",
    highlight: 'Cleared with distinction',
  },
  {
    name: 'Meena T.', college: 'Anna University Regional Campus', branch: 'M.E. Embedded Systems', rating: 5,
    text: 'I specifically needed a Bio-Medical project for my M.E. thesis. No other center in Coimbatore had the expertise. LearnMore not only built it but helped me file for a patent. Incredible support.',
    highlight: 'Patent filed',
  },
];

const stats = [
  { value: '7,000+',  label: 'Students Supported', icon: Users },
  { value: '5,000+', label: 'Projects Delivered',  icon: FlaskConical },
  { value: '8+',      label: 'Domains Covered',     icon: Cpu },
  { value: '10+',     label: 'Years of Excellence', icon: Award },
];

const steps = [
  { step: '01', title: 'Choose Domain',   desc: 'Pick your technology area. We suggest the best topics for your branch and grade.' },
  { step: '02', title: 'Topic Finalized', desc: 'We source the latest IEEE paper and customize the project to your requirement.' },
  { step: '03', title: 'Build & Learn',   desc: 'Hardware, code, and simulation done together with your active involvement.' },
  { step: '04', title: 'Submit & Defend', desc: 'Complete docs, viva Q&A, PPT — you walk in fully prepared.' },
];

const sopStages = [
  { num: '01', title: 'Requirement Analysis',   desc: 'We study your branch, year, institution guidelines, and domain interest before suggesting a single topic. No generic fits.', color: 'border-blue-500/30 bg-blue-500/5', numColor: 'text-blue-400', icon: Microscope },
  { num: '02', title: 'IEEE Paper Curation',    desc: "We source the latest IEEE base paper matched to your topic and walk you through the methodology so you fully understand what you're building.", color: 'border-purple-500/30 bg-purple-500/5', numColor: 'text-purple-400', icon: BookOpen },
  { num: '03', title: 'Design Review',          desc: 'Senior engineers review the full circuit schematic, algorithm design, and system architecture before a single component is purchased or a line of code is written.', color: 'border-teal-500/30 bg-teal-500/5', numColor: 'text-teal-400', icon: FileCheck2 },
  { num: '04', title: 'Prototype Development',  desc: 'Hardware assembly, firmware coding, software integration, and simulation — all done in parallel with your active involvement at every step.', color: 'border-orange-500/30 bg-orange-500/5', numColor: 'text-orange-400', icon: Cpu },
  { num: '05', title: 'Quality Verification',   desc: "Every prototype is tested against IEEE benchmarks and real-world conditions. We don't hand over anything that doesn't work exactly as the paper describes.", color: 'border-green-500/30 bg-green-500/5', numColor: 'text-green-400', icon: TrendingUp },
  { num: '06', title: 'Documentation & Handover', desc: 'Full project report, circuit diagrams, source code, PPT slides, and viva Q&A — everything packaged and explained so you walk into your defence prepared.', color: 'border-rose-500/30 bg-rose-500/5', numColor: 'text-rose-400', icon: Award },
];

export default function HomePage() {
  return (
    <>
      {/* ─── HERO ─── */}
      <section className="relative overflow-hidden hero-gradient min-h-[92vh] flex items-center">

        {/* Blueprint grid overlay */}
        <div className="absolute inset-0 hero-grid opacity-60 pointer-events-none" />

        {/* Gradient orbs */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-1/4  right-[6%]  w-[480px] h-[480px] bg-primary-300/15 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-[4%]  w-[360px] h-[360px] bg-blue-200/20  rounded-full blur-3xl" />
          <div className="absolute top-[10%] left-[30%] w-[260px] h-[260px] bg-indigo-200/10 rounded-full blur-2xl" />
        </div>

        {/* Decorative spinning ring */}
        <div className="absolute top-16 right-[12%] hidden lg:block pointer-events-none">
          <div className="w-56 h-56 rounded-full border border-primary-200/30 animate-spin-slow" />
          <div className="absolute inset-6 rounded-full border border-primary-300/20 animate-spin-slow" style={{ animationDirection: 'reverse', animationDuration: '18s' }} />
          <div className="absolute inset-12 rounded-full border border-primary-400/15" />
          <div className="absolute inset-[88px] w-6 h-6 bg-primary-500/20 rounded-full border border-primary-400/40" />
        </div>

        <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-14 sm:pt-14 sm:pb-20 lg:pt-20 lg:pb-28">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">

            {/* Left */}
            <div>
              <div className="animate-fade-in inline-flex items-center gap-2 bg-white border border-primary-100 text-primary-700 text-xs sm:text-sm font-semibold px-3 sm:px-4 py-1.5 sm:py-2 rounded-full shadow-sm shadow-primary-100/60 mb-5 sm:mb-7">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-500 opacity-70" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-primary-500" />
                </span>
                Coimbatore's Premier Project Center
              </div>

              <h1 className="animate-fade-in-d1 text-4xl sm:text-5xl lg:text-[4.25rem] font-black text-slate-900 leading-[1.08] tracking-tight">
                Build Projects<br />
                <span className="gradient-text">That Get You Hired.</span>
              </h1>

              <p className="animate-fade-in-d2 mt-5 text-base sm:text-lg text-slate-500 leading-relaxed max-w-lg">
                Coimbatore's leading final year project & R&D center. IEEE-standard projects with complete hardware, code, and documentation for{' '}
                <strong className="text-slate-700 font-semibold">Embedded, IoT, AI/ML, Robotics, Bio-Medical</strong> and beyond.
              </p>

              <div className="animate-fade-in-d2 mt-7 sm:mt-9 flex flex-col sm:flex-row gap-3">
                <a
                  href="https://wa.me/917550191838?text=Hi%2C%20I%20want%20to%20enquire%20about%20final%20year%20projects%20at%20LearnMore%20Projects"
                  target="_blank" rel="noopener noreferrer"
                  className="btn-primary text-base animate-glow-ring"
                >
                  <MessageCircle size={18} /> WhatsApp Enquiry
                </a>
                <Link href="/projects" className="btn-outline text-base">
                  Explore Projects <ArrowRight size={18} />
                </Link>
              </div>

              <div className="animate-fade-in-d3 mt-8 flex flex-wrap gap-2.5">
                {[
                  { label: 'IEEE-standard',     cls: 'bg-green-50  border-green-100  text-green-700'  },
                  { label: 'Full hardware kit', cls: 'bg-blue-50   border-blue-100   text-blue-700'   },
                  { label: 'Viva support',      cls: 'bg-purple-50 border-purple-100 text-purple-700' },
                ].map((t) => (
                  <span key={t.label} className={`inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full border ${t.cls}`}>
                    <CheckCircle2 size={12} /> {t.label}
                  </span>
                ))}
              </div>

              {/* Mobile-only quick stats strip */}
              <div className="animate-fade-in-d3 mt-8 grid grid-cols-2 gap-3 lg:hidden">
                {[
                  { value: '7,000+',  label: 'Students Supported', color: 'text-primary-700' },
                  { value: '5,000+', label: 'Projects Delivered',  color: 'text-teal-700'   },
                  { value: '10+',     label: 'Years of Excellence', color: 'text-purple-700'  },
                  { value: '95%+',    label: 'Success Rate',        color: 'text-green-700'   },
                ].map((s) => (
                  <div key={s.label} className="glass-light rounded-2xl p-4 text-center">
                    <p className={`text-2xl font-black ${s.color}`}>{s.value}</p>
                    <p className="text-slate-500 text-xs font-medium mt-0.5">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right visual */}
            <div className="relative hidden lg:flex justify-center">
              <div className="animate-fade-in-d1 relative w-full max-w-md glass-light rounded-3xl p-7 shadow-2xl shadow-primary-200/40">

                {/* Corner decoration */}
                <div className="absolute -top-3 -right-3 w-16 h-16 bg-gradient-to-br from-primary-600 to-blue-400 rounded-2xl opacity-10" />

                <div className="animate-float absolute -top-5 -left-8 glass-light rounded-2xl shadow-xl px-4 py-3 flex items-center gap-3">
                  <div className="w-9 h-9 bg-green-100 rounded-xl flex items-center justify-center">
                    <Users size={16} className="text-green-600" />
                  </div>
                  <div>
                    <p className="text-lg font-black text-slate-900 leading-none">7,000+</p>
                    <p className="text-xs text-slate-500 font-medium mt-0.5">Students Helped</p>
                  </div>
                </div>

                <div className="animate-float-b absolute -bottom-5 -right-8 glass-light rounded-2xl shadow-xl px-4 py-3 flex items-center gap-3">
                  <div className="w-9 h-9 bg-primary-100 rounded-xl flex items-center justify-center">
                    <Award size={16} className="text-primary-600" />
                  </div>
                  <div>
                    <p className="text-lg font-black text-slate-900 leading-none">5,000+</p>
                    <p className="text-xs text-slate-500 font-medium mt-0.5">Projects Delivered</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 mb-3">
                  {domains.slice(0, 4).map((d) => (
                    <div key={d.title} className={`rounded-2xl border p-4 hover:scale-[1.04] transition-transform duration-200 cursor-default ${d.color}`}>
                      <d.icon size={20} className={`mb-2 ${d.iconColor} opacity-80`} />
                      <p className="font-bold text-sm leading-tight">{d.title}</p>
                      <p className="text-xs opacity-60 font-medium mt-0.5">{d.count} topics</p>
                    </div>
                  ))}
                </div>

                <div className="bg-gradient-to-r from-primary-50 to-blue-50 rounded-2xl border border-primary-100/70 p-4 flex items-center gap-3">
                  <div className="w-8 h-8 bg-primary-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <TrendingUp size={14} className="text-primary-700" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 font-medium">Latest achievement</p>
                    <p className="text-sm font-bold text-slate-800">IEEE Paper Published — Batch 2024</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ─── TECH MARQUEE ─── */}
      <div className="bg-slate-950 border-y border-slate-800 py-3.5 overflow-hidden select-none">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...techStack, ...techStack].map((tech, i) => (
            <span key={i} className="inline-flex items-center gap-2.5 px-5 text-slate-400 text-sm font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-primary-500 animate-pulse-dot flex-shrink-0" style={{ animationDelay: `${i * 0.1}s` }} />
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* ─── COLLEGE MARQUEE ─── */}
      <div className="bg-white border-b border-slate-100 py-3 overflow-hidden select-none">
        <p className="text-center text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">Trusted by students from</p>
        <div className="flex animate-marquee whitespace-nowrap" style={{ animationDirection: 'reverse', animationDuration: '35s' }}>
          {[
            'PSG College of Technology', 'Coimbatore Institute of Technology',
            'Kongu Engineering College', 'Sri Ramakrishna Engineering College',
            'KPR Institute of Engineering', 'Amrita School of Engineering',
            'GRG College of Arts & Science', 'SKCET', 'Dr. NGP Institute of Technology',
            'Rathinam College of Engineering', 'Anna University Regional Campus',
            'SNS College of Engineering', 'Hindusthan College of Engineering',
            'PSG College of Technology', 'Coimbatore Institute of Technology',
            'Kongu Engineering College', 'Sri Ramakrishna Engineering College',
            'KPR Institute of Engineering', 'Amrita School of Engineering',
            'GRG College of Arts & Science', 'SKCET', 'Dr. NGP Institute of Technology',
            'Rathinam College of Engineering', 'Anna University Regional Campus',
            'SNS College of Engineering', 'Hindusthan College of Engineering',
          ].map((college, i) => (
            <span key={i} className="inline-flex items-center gap-3 px-6 text-slate-500 text-xs font-medium">
              <span className="w-1 h-1 rounded-full bg-primary-300 flex-shrink-0" />
              {college}
            </span>
          ))}
        </div>
      </div>

      {/* ─── STATS BAR ─── */}
      <section style={{ background: 'linear-gradient(135deg,#1e3a8a 0%,#1d4ed8 55%,#2563eb 100%)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            {stats.map((stat, i) => (
              <Reveal key={stat.label} from="up" delay={i * 80}>
                <div className="glass rounded-2xl p-5 sm:p-6 text-center group cursor-default transition-all duration-300">
                  <div className="w-10 h-10 mx-auto mb-3 bg-white/10 rounded-xl flex items-center justify-center group-hover:bg-white/20 transition-colors">
                    <stat.icon size={18} className="text-primary-200" />
                  </div>
                  <p className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
                    <CountUp value={stat.value} />
                  </p>
                  <div className="h-0.5 w-6 bg-primary-400/60 mx-auto my-2 group-hover:w-14 transition-all duration-300 rounded-full" />
                  <p className="text-primary-200 text-xs sm:text-sm font-medium">{stat.label}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── DOMAINS ─── */}
      <section className="py-14 md:py-20 relative overflow-hidden hero-gradient">
        <div className="absolute inset-0 hero-grid opacity-40 pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal from="up" className="text-center mb-10 md:mb-14">
            <span className="section-label">What We Build</span>
            <h2 className="section-title">8 Engineering Domains</h2>
            <p className="section-subtitle mx-auto text-center">
              From microcontrollers to AI — every major discipline for B.E., B.Tech, M.E., M.Tech, MCA, BCA, and Ph.D students.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {domains.map((domain, i) => (
              <Reveal key={domain.title} from="up" delay={i * 60}>
                <Link
                  href={domain.href}
                  className={`group relative glass-light rounded-2xl p-6 overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl ${domain.glow} block h-full`}
                >
                  <div className="absolute top-0 left-0 right-0 h-1 opacity-90" style={{ background: 'linear-gradient(90deg,#1e3a8a,#2563eb)' }} />
                  {domain.badge && (
                    <span className="absolute top-4 right-4 bg-rose-500 text-white text-xs font-bold px-2.5 py-1 rounded-full shadow">
                      {domain.badge}
                    </span>
                  )}
                  <div className={`w-12 h-12 ${domain.iconBg} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300`}>
                    <domain.icon size={22} className={domain.iconColor} />
                  </div>
                  <p className="font-bold text-slate-900 text-base mb-1">{domain.title}</p>
                  <p className={`text-2xl font-black mb-2 ${domain.iconColor}`}>{domain.count}</p>
                  <p className="text-slate-500 text-sm leading-relaxed">{domain.desc}</p>
                  <div className={`mt-4 flex items-center gap-1 text-xs font-semibold ${domain.iconColor} group-hover:gap-2 transition-all duration-200`}>
                    View topics <ChevronRight size={13} />
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>

          <Reveal from="up" delay={200} className="text-center mt-12">
            <Link href="/projects" className="btn-primary">
              Browse All Project Topics <ArrowRight size={17} />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ─── PROJECT QUIZ ─── */}
      <section className="py-14 md:py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal from="up" className="text-center mb-10">
            <span className="section-label">Find Your Match</span>
            <h2 className="section-title">Not Sure What to Build?</h2>
            <p className="section-subtitle mx-auto text-center">
              Answer 4 quick questions and we will match you to the right domain, topic, and package for your situation.
            </p>
          </Reveal>
          <Reveal from="up" delay={80}>
            <ProjectQuiz />
          </Reveal>
        </div>
      </section>

      {/* ─── WHY LEARNMORE ─── */}
      <section className="py-14 md:py-20 relative overflow-hidden" style={{ background: 'radial-gradient(ellipse 70% 60% at 90% 50%, rgba(59,130,246,0.07) 0%, transparent 65%), radial-gradient(ellipse 50% 50% at 10% 30%, rgba(99,102,241,0.05) 0%, transparent 65%), #ffffff' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <Reveal from="left">
              <span className="section-label">Why Choose Us</span>
              <h2 className="section-title">
                More Than a Project Center —<br />
                <span className="gradient-text">We Are Your R&D Partner.</span>
              </h2>
              <p className="mt-5 text-slate-500 text-lg leading-relaxed">
                Every competitor hands you a project. We help you understand, build, and defend it. Our R&D engineers work alongside you from idea to working prototype.
              </p>
              <div className="mt-8 space-y-3.5">
                {[
                  'Free project consultation — no hidden charges',
                  'IEEE base paper sourced and explained to you',
                  'Hardware components delivered to your doorstep',
                  'WhatsApp support throughout the project cycle',
                ].map((point) => (
                  <div key={point} className="flex items-start gap-3">
                    <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle2 size={12} className="text-green-600" />
                    </div>
                    <p className="text-slate-600 text-sm font-medium">{point}</p>
                  </div>
                ))}
              </div>
              <div className="mt-10">
                <Link href="/about" className="btn-outline">Learn About Us <ArrowRight size={17} /></Link>
              </div>
            </Reveal>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {whyUs.map((item, i) => (
                <Reveal key={item.title} from="right" delay={i * 70}>
                  <div className="glass-light rounded-2xl p-6 group h-full transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                    <div className="w-11 h-11 bg-primary-100 group-hover:bg-primary-200 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-all duration-300">
                      <item.icon size={18} className="text-primary-700" />
                    </div>
                    <h3 className="font-bold text-slate-900 text-sm mb-2">{item.title}</h3>
                    <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── SOP / METHODOLOGY ─── */}
      <section className="py-14 md:py-20 bg-slate-950 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-700/50 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-700/50 to-transparent" />
          <div className="absolute -top-40 right-0   w-96 h-96 bg-primary-900/20 rounded-full blur-3xl" />
          <div className="absolute -bottom-40 left-0 w-80 h-80 bg-blue-900/20  rounded-full blur-3xl" />
          {/* Grid overlay */}
          <div className="absolute inset-0 hero-grid opacity-20" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal from="up" className="text-center mb-12 md:mb-16">
            <span className="inline-block bg-white/10 text-primary-300 font-semibold text-xs uppercase tracking-widest px-4 py-1.5 rounded-full border border-white/10 mb-4">
              Our Methodology
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight">
              Every Project. One Standard.
            </h2>
            <p className="mt-4 text-slate-400 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
              We follow a strict 6-stage Standard Operating Procedure for every project — no shortcuts, no exceptions.
              That's why our success rate is high and every deliverable is industry-grade.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
            {sopStages.map((stage, i) => (
              <Reveal key={stage.num} from="up" delay={i * 80}>
                <div className={`relative rounded-2xl border p-6 ${stage.color} backdrop-blur-md group hover:scale-[1.02] hover:shadow-2xl hover:shadow-black/30 transition-all duration-300 h-full`}>
                  <div className="flex items-start justify-between mb-4">
                    <span className={`text-4xl font-black ${stage.numColor} opacity-25 leading-none`}>{stage.num}</span>
                    <div className={`w-9 h-9 rounded-xl flex items-center justify-center bg-white/10`}>
                      <stage.icon size={16} className={stage.numColor} />
                    </div>
                  </div>
                  <h3 className="text-white font-bold text-base mb-2">{stage.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{stage.desc}</p>
                  {/* Bottom accent line */}
                  <div className={`absolute bottom-0 left-6 right-6 h-px bg-gradient-to-r from-transparent ${stage.numColor.replace('text-', 'via-')}/30 to-transparent`} />
                </div>
              </Reveal>
            ))}
          </div>

          {/* Success bar */}
          <Reveal from="up" delay={100} className="mt-10 md:mt-14">
            <div className="glass rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
              <div className="text-center sm:text-left">
                <div className="flex items-center gap-3 justify-center sm:justify-start mb-2">
                  <div className="w-10 h-10 bg-green-500/20 rounded-xl flex items-center justify-center">
                    <TrendingUp size={18} className="text-green-400" />
                  </div>
                  <p className="text-2xl sm:text-3xl font-black text-white">95%+ Project Success Rate</p>
                </div>
                <p className="text-slate-400 text-sm">Across 5,000+ projects delivered since 2018 — measured by viva clearance, submission acceptance, and student satisfaction.</p>
              </div>
              <a
                href="https://wa.me/917550191838?text=Hi%2C%20I%20want%20to%20enquire%20about%20final%20year%20projects%20at%20LearnMore%20Projects"
                target="_blank" rel="noopener noreferrer"
                className="btn-primary flex-shrink-0 w-full sm:w-auto justify-center"
              >
                <MessageCircle size={17} /> Start With Our SOP
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ─── FEATURED PROJECTS ─── */}
      <section className="py-14 md:py-20 relative overflow-hidden hero-gradient">
        <div className="absolute inset-0 hero-grid opacity-30 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal from="up" className="text-center mb-10 md:mb-14">
            <span className="section-label">Student Work</span>
            <h2 className="section-title">Featured Projects</h2>
            <p className="section-subtitle mx-auto text-center">
              Real projects built by our students — with hardware, IEEE papers, and real-world outcomes.
            </p>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-6">
            {featuredProjects.map((project, i) => (
              <Reveal key={project.title} from="up" delay={i * 100}>
                <div className="relative glass-light rounded-3xl overflow-hidden hover:shadow-2xl hover:shadow-primary-100/60 hover:-translate-y-2 transition-all duration-300 flex flex-col h-full">
                  {project.badge && (
                    <div className="absolute top-[88px] right-4 z-10 glass-light text-primary-700 text-xs font-bold px-3 py-1 rounded-full shadow">
                      {project.badge}
                    </div>
                  )}
                  {/* Gradient header with domain icon */}
                  <div className={`h-24 flex items-end justify-between p-5 bg-gradient-to-br ${project.accentColor}`}>
                    <span className={`text-xs font-bold px-3 py-1 rounded-full ${project.domainColor}`}>
                      {project.domain}
                    </span>
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <h3 className="font-bold text-slate-900 text-base leading-snug mb-3">{project.title}</h3>
                    <p className="text-slate-500 text-sm leading-relaxed mb-4 flex-1">{project.desc}</p>
                    <div className="flex flex-wrap gap-2 mb-5">
                      {project.tech.map((t) => (
                        <span key={t} className="bg-slate-100 text-slate-600 text-xs font-medium px-2.5 py-1 rounded-lg">{t}</span>
                      ))}
                    </div>
                    <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl border border-green-100 p-4">
                      <p className="text-xs text-green-600 font-bold uppercase tracking-wider mb-1">Student Outcome</p>
                      <p className="text-sm text-slate-700 font-medium leading-snug">{project.outcome}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal from="up" delay={150} className="text-center mt-12">
            <Link href="/portfolio" className="btn-primary">
              View Full Portfolio <ArrowRight size={17} />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ─── PROCESS ─── */}
      <section className="py-14 md:py-20 relative overflow-hidden" style={{ background: 'radial-gradient(ellipse 80% 70% at 50% 100%, rgba(29,78,216,0.07) 0%, transparent 65%), #ffffff' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal from="up" className="text-center mb-10 md:mb-14">
            <span className="section-label">How It Works</span>
            <h2 className="section-title">From Enquiry to Submission</h2>
          </Reveal>

          <div className="relative">
            <div className="hidden md:block absolute top-8 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-transparent via-primary-200 to-transparent" />
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
              {steps.map((s, i) => (
                <Reveal key={s.step} from="up" delay={i * 90}>
                  <div className="flex flex-col items-center text-center group">
                    <div
                      className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-xl md:rounded-2xl flex items-center justify-center font-black text-lg sm:text-xl md:text-2xl text-white mb-4 md:mb-5 z-10 transition-all duration-300 group-hover:-translate-y-2 group-hover:shadow-2xl group-hover:shadow-primary-700/30"
                      style={{ background: 'linear-gradient(135deg,#1e3a8a 0%,#2563eb 100%)' }}
                    >
                      {s.step}
                    </div>
                    <h3 className="font-bold text-slate-900 text-sm mb-2">{s.title}</h3>
                    <p className="text-slate-500 text-sm leading-relaxed">{s.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>


      {/* ─── TESTIMONIALS ─── */}
      <section className="py-14 md:py-20 relative overflow-hidden" style={{ background: 'linear-gradient(135deg,#0f172a 0%,#1e1b4b 55%,#172554 100%)' }}>
        <div className="absolute inset-0 hero-grid opacity-10 pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal from="up" className="text-center mb-10 md:mb-14">
            <span className="inline-block bg-white/10 text-primary-300 font-semibold text-xs uppercase tracking-widest px-4 py-1.5 rounded-full border border-white/10 mb-4">
              Student Reviews
            </span>
            <h2 className="section-title text-white">What Our Students Say</h2>
          </Reveal>

          {/* Swipe hint — mobile only */}
          <p className="md:hidden text-center text-xs text-slate-500 mb-3 flex items-center justify-center gap-1.5">
            <span>←</span> Swipe to see more <span>→</span>
          </p>

          {/* Scrollable on mobile */}
          <div id="testimonial-scroll" className="flex md:grid md:grid-cols-3 gap-5 overflow-x-auto md:overflow-visible pb-4 md:pb-0 snap-x md:snap-none scroll-px-4 -mx-4 px-4 md:mx-0 md:px-0">
            {testimonials.map((t, i) => (
              <Reveal key={t.name} from="up" delay={i * 90} className="flex-shrink-0 w-[85vw] sm:w-[70vw] md:w-auto snap-start">
                <div className="relative glass rounded-2xl p-6 hover:shadow-2xl hover:shadow-black/40 transition-all duration-300 h-full flex flex-col">
                  <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-primary-400/40 to-transparent" />

                  <Quote size={24} className="text-primary-400/50 mb-4 flex-shrink-0" />
                  <div className="flex gap-0.5 mb-3">
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <Star key={i} size={12} className="text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>

                  <p className="text-slate-300 text-sm leading-relaxed mb-4 flex-1">"{t.text}"</p>

                  {/* Highlight badge */}
                  <div className="bg-primary-900/50 border border-primary-700/30 rounded-lg px-3 py-1.5 mb-5 inline-flex items-center gap-1.5 self-start">
                    <TrendingUp size={11} className="text-primary-400" />
                    <span className="text-primary-300 text-xs font-semibold">{t.highlight}</span>
                  </div>

                  <div className="flex items-center gap-3 pt-4 border-t border-white/10 mt-auto">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0" style={{ background: 'linear-gradient(135deg,#1d4ed8,#3b82f6)' }}>
                      {t.name.charAt(0)}
                    </div>
                    <div>
                      <p className="text-white font-semibold text-sm">{t.name}</p>
                      <p className="text-slate-400 text-xs">{t.branch} · {t.college}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
          {/* Dot indicators — mobile only */}
          <div className="flex md:hidden justify-center gap-2 mt-4">
            {testimonials.map((_, i) => (
              <span key={i} className={`rounded-full transition-all duration-300 ${i === 0 ? 'w-5 h-1.5 bg-primary-400' : 'w-1.5 h-1.5 bg-white/30'}`} />
            ))}
          </div>
        </div>
      </section>

      {/* ─── LEAD MAGNET ─── */}
      <section className="py-14 md:py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal from="up">
            <div className="relative overflow-hidden rounded-3xl border border-primary-100 bg-gradient-to-br from-primary-50 to-blue-50">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary-200/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
              <div className="relative grid md:grid-cols-2 gap-8 items-center p-8 sm:p-12">
                <div>
                  <span className="inline-block bg-primary-700 text-white text-xs font-bold px-3 py-1 rounded-full mb-4">Free Resource</span>
                  <h2 className="text-3xl font-black text-slate-900 mb-3 leading-tight">
                    Get the Free<br />
                    <span className="gradient-text">Final Year Project Guide</span>
                  </h2>
                  <p className="text-slate-500 text-base leading-relaxed mb-5">
                    A 20-page PDF covering how to pick a topic, write your synopsis, structure your report, and clear your viva — written by engineers who have guided 7,000+ students.
                  </p>
                  <div className="space-y-2.5 mb-6">
                    {[
                      'How to pick an IEEE base paper',
                      'Synopsis template (2-page format)',
                      '30 most common viva questions + answers',
                      'Checklist for your project report',
                    ].map((point) => (
                      <div key={point} className="flex items-center gap-2.5">
                        <CheckCircle2 size={15} className="text-green-500 flex-shrink-0" />
                        <span className="text-slate-600 text-sm">{point}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-white rounded-2xl border border-slate-100 shadow-lg p-6 sm:p-8">
                  <div className="w-14 h-14 bg-primary-100 rounded-2xl flex items-center justify-center mb-4">
                    <Download size={24} className="text-primary-700" />
                  </div>
                  <h3 className="font-black text-slate-900 text-lg mb-1">Download Free PDF</h3>
                  <p className="text-slate-400 text-sm mb-5">Send us a message on WhatsApp — we will reply with the PDF instantly.</p>
                  <a
                    href="https://wa.me/917550191838?text=Hi%2C%20I%20want%20the%20free%20Final%20Year%20Project%20Guide%20PDF"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 bg-primary-700 hover:bg-primary-800 text-white font-bold text-sm px-5 py-3.5 rounded-xl transition-colors min-h-[48px]"
                  >
                    <MessageCircle size={16} />
                    Get Free PDF on WhatsApp
                  </a>
                  <p className="text-xs text-slate-400 text-center mt-3">No spam. No subscription. Just the PDF.</p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ─── FINAL CTA ─── */}
      <section className="relative py-16 md:py-24 bg-white overflow-hidden">
        <div className="absolute inset-0 hero-gradient opacity-70" />
        <div className="absolute inset-0 hero-grid opacity-30" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-200 to-transparent" />

        <Reveal from="scale" className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="section-label">Get Started</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight mb-4">
            Start Your Final Year Project <span className="gradient-text">Today</span>
          </h2>
          <p className="text-slate-500 text-base sm:text-lg mb-8 sm:mb-10 leading-relaxed">
            Get a free project consultation. Tell us your branch, year, and interest —{' '}
            we'll suggest the best topic and guide you through every step.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <a
              href="https://wa.me/917550191838?text=Hi%2C%20I%20want%20to%20enquire%20about%20final%20year%20projects%20at%20LearnMore%20Projects"
              target="_blank" rel="noopener noreferrer"
              className="btn-primary text-base w-full sm:w-auto justify-center px-8 py-3.5 sm:px-10 sm:py-4"
            >
              <MessageCircle size={18} /> WhatsApp for Free Consultation
            </a>
            <Link href="/contact" className="btn-outline text-base w-full sm:w-auto justify-center px-8 py-3.5 sm:px-10 sm:py-4">
              <Phone size={18} /> Call / Email Us
            </Link>
          </div>

          <p className="mt-6 text-slate-400 text-sm">Available Mon–Sat, 9 AM – 7 PM · Response within 30 minutes</p>
        </Reveal>
      </section>
    </>
  );
}
