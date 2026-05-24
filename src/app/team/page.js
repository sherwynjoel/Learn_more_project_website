import Link from 'next/link';
import { MessageCircle, Award, BookOpen, Cpu, Brain, Wifi, Zap, Bot, Code2, FlaskConical } from 'lucide-react';

export const metadata = {
  title: 'Our Team | LearnMore Projects — Meet the Engineers',
  description:
    'Meet the engineers behind LearnMore Projects. 10+ years of combined experience in Embedded Systems, IoT, AI/ML, Bio-Medical, and Power Electronics.',
};

const engineers = [
  {
    name: 'Mr. Rajesh Kumar',
    role: 'Founder & Lead Engineer',
    experience: '14 Years',
    specialization: 'Embedded Systems & Microcontroller Architecture',
    icon: Cpu,
    color: 'blue',
    bio: 'Former R&D Engineer at a Tier-1 automotive supplier. Designed production-grade ECU firmware for 5+ vehicle platforms. Has guided 3,000+ students to successful project submissions.',
    expertise: ['ARM Cortex-M', 'RTOS / FreeRTOS', 'CAN / LIN Protocols', 'PCB Design (KiCad)'],
    papers: 12,
    students: '3,200+',
  },
  {
    name: 'Ms. Divya Suresh',
    role: 'AI/ML Research Lead',
    experience: '9 Years',
    specialization: 'Machine Learning & Edge AI Deployment',
    icon: Brain,
    color: 'purple',
    bio: 'M.Tech in Computer Science from Anna University. Worked in computer vision at a Chennai-based AI startup before joining the center. Has published in 8 IEEE conferences.',
    expertise: ['TensorFlow / PyTorch', 'Edge Inference (TFLite)', 'Computer Vision', 'NLP & LLMs'],
    papers: 8,
    students: '1,800+',
  },
  {
    name: 'Mr. Senthil Nathan',
    role: 'IoT & Cloud Architect',
    experience: '11 Years',
    specialization: 'IoT Systems & Cloud Integration',
    icon: Wifi,
    color: 'teal',
    bio: 'Ex-Technical Lead at a Coimbatore IoT firm. Built end-to-end deployments for agriculture and industrial monitoring clients. Specializes in ESP32, AWS IoT, and Node-RED pipelines.',
    expertise: ['ESP32 / Raspberry Pi', 'MQTT / WebSockets', 'AWS IoT Core', 'Node-RED'],
    papers: 6,
    students: '2,100+',
  },
  {
    name: 'Dr. Prabhakaran M.',
    role: 'Bio-Medical Engineering Head',
    experience: '16 Years',
    specialization: 'Bio-Signal Processing & Medical Device Design',
    icon: FlaskConical,
    color: 'rose',
    bio: 'Ph.D in Bio-Medical Engineering from PSG Tech. Specialized in non-invasive sensing (NIR, ECG, SpO2). Has guided 5 patent applications for medical student innovations.',
    expertise: ['ECG / SpO2 Sensing', 'NIR Spectroscopy', 'Signal Processing (DSP)', 'Medical-Grade PCB'],
    papers: 21,
    students: '900+',
  },
  {
    name: 'Mr. Arockia Raj',
    role: 'Power Electronics Engineer',
    experience: '10 Years',
    specialization: 'Power Converters & Renewable Energy Systems',
    icon: Zap,
    color: 'yellow',
    bio: 'B.E. EEE from Coimbatore Institute of Technology with experience in solar inverter design for industrial clients. Expert in MATLAB Simulink and PSIM for simulation projects.',
    expertise: ['DC-DC Converters', 'MPPT Algorithms', 'MATLAB Simulink', 'PSIM Simulation'],
    papers: 9,
    students: '1,200+',
  },
  {
    name: 'Mr. Kiran Babu',
    role: 'Robotics & Automation Lead',
    experience: '8 Years',
    specialization: 'ROS, SLAM & Autonomous Systems',
    icon: Bot,
    color: 'orange',
    bio: 'Mechatronics graduate who has built autonomous robots for national-level hackathons. Trained in ROS Noetic, SLAM navigation, and 3D-printed chassis fabrication.',
    expertise: ['ROS Noetic / Humble', 'SLAM Navigation', 'LiDAR & IMU Fusion', 'Motor Control'],
    papers: 4,
    students: '700+',
  },
  {
    name: 'Ms. Nandhini Priya',
    role: 'Software & Full-Stack Developer',
    experience: '7 Years',
    specialization: 'Web Applications & Backend APIs',
    icon: Code2,
    color: 'indigo',
    bio: 'Worked as a software engineer at a product startup before bringing full-stack expertise to student software projects. Handles React, Node.js, database design, and cloud deployment.',
    expertise: ['React / Next.js', 'Node.js / Express', 'PostgreSQL / MongoDB', 'REST API Design'],
    papers: 3,
    students: '1,400+',
  },
];

const colorMap = {
  blue:   { bg: 'bg-blue-50',   border: 'border-blue-100',   text: 'text-blue-700',   iconBg: 'bg-blue-100',   tag: 'bg-blue-100 text-blue-700' },
  purple: { bg: 'bg-purple-50', border: 'border-purple-100', text: 'text-purple-700', iconBg: 'bg-purple-100', tag: 'bg-purple-100 text-purple-700' },
  teal:   { bg: 'bg-teal-50',   border: 'border-teal-100',   text: 'text-teal-700',   iconBg: 'bg-teal-100',   tag: 'bg-teal-100 text-teal-700' },
  rose:   { bg: 'bg-rose-50',   border: 'border-rose-100',   text: 'text-rose-700',   iconBg: 'bg-rose-100',   tag: 'bg-rose-100 text-rose-700' },
  yellow: { bg: 'bg-yellow-50', border: 'border-yellow-100', text: 'text-yellow-700', iconBg: 'bg-yellow-100', tag: 'bg-yellow-100 text-yellow-700' },
  orange: { bg: 'bg-orange-50', border: 'border-orange-100', text: 'text-orange-700', iconBg: 'bg-orange-100', tag: 'bg-orange-100 text-orange-700' },
  indigo: { bg: 'bg-indigo-50', border: 'border-indigo-100', text: 'text-indigo-700', iconBg: 'bg-indigo-100', tag: 'bg-indigo-100 text-indigo-700' },
};

const values = [
  { title: 'Students First', desc: 'Every decision is made with the student\'s submission, viva, and career in mind — not just project delivery.' },
  { title: 'Real Engineering', desc: 'We build projects using the same tools, workflows, and standards used in the industry — not shortcuts.' },
  { title: 'Honest Advice', desc: 'If your timeline is impossible or your idea is unfeasible, we tell you upfront — not after you\'ve paid.' },
  { title: 'Long-Term Support', desc: 'Our relationship does not end at delivery. We support you through viva, revisions, and re-submissions.' },
];

export default function TeamPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-gradient-to-br from-primary-950 to-primary-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-primary-300 font-semibold text-sm uppercase tracking-wider mb-3">The People Behind Your Project</p>
          <h1 className="text-4xl md:text-5xl font-black text-white mb-4">Meet Our Engineers</h1>
          <p className="text-primary-200 text-lg max-w-2xl mx-auto leading-relaxed">
            Real engineers with real industry experience. When you trust us with your final year project, these are the people who build it with you.
          </p>
        </div>
      </section>

      {/* Stats bar */}
      <section className="bg-primary-700 py-8">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { value: '7', label: 'Domain Specialists' },
              { value: '75+', label: 'Combined IEEE Papers' },
              { value: '10+', label: 'Years of Operation' },
              { value: '7,000+', label: 'Students Guided' },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="text-4xl font-black text-white">{stat.value}</p>
                <p className="text-primary-200 text-sm font-medium mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Engineer cards */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
            {engineers.map((eng) => {
              const c = colorMap[eng.color];
              return (
                <div key={eng.name} className="bg-white rounded-2xl border border-slate-100 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col">
                  <div className={`${c.bg} ${c.border} border-b p-6`}>
                    <div className="flex items-start gap-4">
                      <div className={`w-14 h-14 ${c.iconBg} rounded-2xl flex items-center justify-center flex-shrink-0`}>
                        <eng.icon size={26} className={c.text} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-black text-slate-900 text-base leading-snug">{eng.name}</h3>
                        <p className={`text-sm font-semibold ${c.text} mt-0.5`}>{eng.role}</p>
                        <div className="flex items-center gap-2 mt-2">
                          <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${c.tag}`}>{eng.experience}</span>
                          <span className="text-xs text-slate-400 font-medium">{eng.students} students</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="p-6 flex flex-col flex-1">
                    <p className="text-slate-500 text-sm leading-relaxed mb-4">{eng.bio}</p>

                    <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Expertise</p>
                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {eng.expertise.map((skill) => (
                        <span key={skill} className="bg-slate-100 text-slate-600 text-xs font-medium px-2.5 py-1 rounded-lg">
                          {skill}
                        </span>
                      ))}
                    </div>

                    <div className="mt-auto flex items-center gap-2 text-slate-400 text-xs">
                      <BookOpen size={13} />
                      <span>{eng.papers} IEEE papers published</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-title">How We Work</h2>
            <p className="section-subtitle mx-auto text-center">
              The principles that guide every project, every interaction, every delivery.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-5">
            {values.map((v) => (
              <div key={v.title} className="bg-slate-50 border border-slate-100 rounded-2xl p-6">
                <h3 className="font-bold text-slate-900 text-base mb-2">{v.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary-700">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-black text-white mb-4">Work Directly With Our Engineers</h2>
          <p className="text-primary-100 text-lg mb-8">
            Start with a free consultation. Tell us your branch, year, and deadline — we'll match you with the right engineer.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/917550191838?text=Hi%2C%20I%20want%20to%20discuss%20my%20final%20year%20project%20with%20your%20team"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-white text-primary-700 font-bold text-base px-8 py-4 rounded-2xl hover:bg-primary-50 transition-colors min-h-[52px]"
            >
              <MessageCircle size={18} />
              Start Free Consultation
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 border-2 border-white text-white font-bold text-base px-8 py-4 rounded-2xl hover:bg-white/10 transition-colors min-h-[52px]"
            >
              Send an Enquiry
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
