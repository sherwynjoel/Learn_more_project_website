'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import {
  Cpu, Wifi, Brain, Bot, HeartPulse, Zap, Wrench, Code2,
  MessageCircle, ChevronRight, Sparkles,
} from 'lucide-react';
import TopicsSearch from './TopicsSearch';
import { allTopics } from './topicsData';

const domains = [
  {
    icon: Cpu,
    title: 'Embedded Systems',
    count: '500+',
    color: 'blue',
    platforms: ['Arduino UNO/MEGA', 'ARM Cortex M3/M4', 'PIC Microcontrollers', 'ATMEL AVR', 'STM32', 'ESP32/ESP8266', 'Raspberry Pi', 'BeagleBone'],
    sampleTopics: [
      'Smart Home Automation with Voice Control',
      'Wearable Fall Detection System for Elderly',
      'RFID-Based Attendance Management System',
      'Automated Plant Watering Using Soil Sensors',
      'CAN Bus Vehicle Diagnostics System',
      'Real-Time Object Tracking with Servo Motors',
    ],
    desc: 'Design and develop microcontroller-based systems with real hardware, firmware, and sensor integration. Covers bare-metal programming through RTOS-based designs.',
  },
  {
    icon: Wifi,
    title: 'IoT Projects',
    count: '400+',
    color: 'teal',
    platforms: ['ESP32', 'Raspberry Pi', 'Arduino IoT Cloud', 'AWS IoT Core', 'Azure IoT Hub', 'MQTT Protocol', 'Node-RED', 'ThingSpeak'],
    sampleTopics: [
      'Smart Precision Agriculture with ML Predictions',
      'Industrial Machine Health Monitoring',
      'Smart Grid Energy Management System',
      'GPS-Based Vehicle Tracking with Geofencing',
      'Air Quality Monitoring Dashboard',
      'IoT-Based Cold Chain Logistics Tracker',
    ],
    desc: 'Build internet-connected devices that collect, transmit, and act on real-world data. From smart home to industrial IoT deployments.',
  },
  {
    icon: Brain,
    title: 'AI / Machine Learning',
    count: '350+',
    color: 'purple',
    platforms: ['Python', 'TensorFlow', 'PyTorch', 'OpenCV', 'Scikit-learn', 'Keras', 'Raspberry Pi (Edge AI)', 'Google Colab'],
    sampleTopics: [
      'Edge AI Defect Detection on Production Lines',
      'Driver Drowsiness Detection using CNN',
      'NLP-Based Resume Screening System',
      'Facial Recognition Attendance System',
      'Crop Disease Prediction using Deep Learning',
      'Sentiment Analysis of Social Media Data',
    ],
    desc: 'Develop intelligent systems using machine learning, deep learning, and computer vision. Includes edge AI deployments on embedded hardware.',
  },
  {
    icon: Bot,
    title: 'Robotics',
    count: '200+',
    color: 'orange',
    platforms: ['Arduino', 'Raspberry Pi', 'ROS', 'L298N Motor Driver', 'Servo Motors', '3D Printed Chassis', 'Ultrasonic Sensors', 'Vision Systems'],
    sampleTopics: [
      'Autonomous Line-Following Robot with PID',
      'Robotic Arm for Pick-and-Place (5-DOF)',
      'Swarm Robotics Communication System',
      'Obstacle-Avoidance Differential Drive Robot',
      'Snake Robot for Search and Rescue',
      'Drone-Based Parcel Delivery Prototype',
    ],
    desc: 'Design and build autonomous and semi-autonomous robotic systems — from industrial arms to mobile robots and drone platforms.',
  },
  {
    icon: HeartPulse,
    title: 'Bio-Medical Engineering',
    count: '150+',
    color: 'rose',
    badge: 'Unique Specialization',
    platforms: ['STM32', 'Arduino', 'Raspberry Pi', 'AD8232 (ECG)', 'MAX30100 (SpO2)', 'BLE 5.0', 'NIR Sensors', 'MATLAB'],
    sampleTopics: [
      'Non-Invasive Blood Glucose Monitor (NIR)',
      'Portable 12-Lead ECG with Arrhythmia Detection',
      'Smart Prosthetic Hand with EMG Control',
      'Fall Detection Alert for ICU Patients',
      'Wearable SpO2 & Heart Rate Monitor',
      'AI-Powered Retinal Disease Screening',
    ],
    desc: 'The only Coimbatore center with dedicated Bio-Medical expertise. Projects for BME, ECE, and CSE students targeting the healthcare sector.',
  },
  {
    icon: Zap,
    title: 'Power Electronics',
    count: '250+',
    color: 'yellow',
    platforms: ['MATLAB Simulink', 'PSIM', 'TI LaunchPad', 'IGBT/MOSFET Drivers', 'Solar Panels', 'DC-DC Converters', 'Motor Drives', 'PLC'],
    sampleTopics: [
      'MPPT Solar Charge Controller Design',
      'EV Battery Management System (BMS)',
      'Bidirectional DC-DC Converter for Microgrids',
      'Variable Frequency Drive for Induction Motor',
      'Smart Street Lighting with Dimming Control',
      'Wireless Power Transfer System (WPT)',
    ],
    desc: 'Simulate and implement energy conversion circuits, motor drives, renewable energy systems, and smart grid components.',
  },
  {
    icon: Wrench,
    title: 'Mechanical Projects',
    count: '180+',
    color: 'slate',
    platforms: ['SolidWorks', 'CATIA V5', 'AutoCAD', 'ANSYS', 'PRO-E', 'CNC Machining', '3D Printing', 'Fabrication Lab'],
    sampleTopics: [
      'Design & Analysis of Composite Leaf Spring',
      'Regenerative Braking System for Two-Wheelers',
      'Automated Guided Vehicle (AGV) Design',
      'Exoskeleton Arm for Rehabilitation',
      'Solar-Powered Water Desalination Unit',
      'Hydraulic Scissor Lift Mechanism',
    ],
    desc: 'Full design-to-fabrication pipeline using CAD tools. Projects include structural analysis, prototyping, and manufacturing.',
  },
  {
    icon: Code2,
    title: 'Software Development',
    count: '300+',
    color: 'indigo',
    platforms: ['Python (Django/Flask)', 'React / Next.js', 'Node.js', 'Java Spring Boot', 'Android (Kotlin)', 'Flutter', 'MySQL / MongoDB', 'Firebase'],
    sampleTopics: [
      'Blockchain-Based Academic Certificate Verification',
      'AI Chatbot for Hospital Patient Intake',
      'Real-Time Collaborative Code Editor',
      'E-Learning Platform with Progress Tracking',
      'Smart Traffic Management with Computer Vision',
      'Mental Health Monitoring Mobile App',
    ],
    desc: 'Web, mobile, and cloud applications. Data science pipelines, cybersecurity tools, and enterprise software projects.',
  },
];

const colorMap = {
  blue:   { bg: 'bg-blue-50',   border: 'border-blue-100',   text: 'text-blue-700',   iconBg: 'bg-blue-100',   badge: 'bg-blue-700',   tab: 'bg-blue-600 text-white',   tabIdle: 'text-blue-700 bg-blue-50 border border-blue-100' },
  teal:   { bg: 'bg-teal-50',   border: 'border-teal-100',   text: 'text-teal-700',   iconBg: 'bg-teal-100',   badge: 'bg-teal-700',   tab: 'bg-teal-600 text-white',   tabIdle: 'text-teal-700 bg-teal-50 border border-teal-100' },
  purple: { bg: 'bg-purple-50', border: 'border-purple-100', text: 'text-purple-700', iconBg: 'bg-purple-100', badge: 'bg-purple-700', tab: 'bg-purple-600 text-white', tabIdle: 'text-purple-700 bg-purple-50 border border-purple-100' },
  orange: { bg: 'bg-orange-50', border: 'border-orange-100', text: 'text-orange-700', iconBg: 'bg-orange-100', badge: 'bg-orange-700', tab: 'bg-orange-600 text-white', tabIdle: 'text-orange-700 bg-orange-50 border border-orange-100' },
  rose:   { bg: 'bg-rose-50',   border: 'border-rose-100',   text: 'text-rose-700',   iconBg: 'bg-rose-100',   badge: 'bg-rose-700',   tab: 'bg-rose-600 text-white',   tabIdle: 'text-rose-700 bg-rose-50 border border-rose-100' },
  yellow: { bg: 'bg-yellow-50', border: 'border-yellow-100', text: 'text-yellow-700', iconBg: 'bg-yellow-100', badge: 'bg-yellow-700', tab: 'bg-yellow-600 text-white', tabIdle: 'text-yellow-700 bg-yellow-50 border border-yellow-100' },
  slate:  { bg: 'bg-slate-50',  border: 'border-slate-200',  text: 'text-slate-700',  iconBg: 'bg-slate-200',  badge: 'bg-slate-700',  tab: 'bg-slate-600 text-white',  tabIdle: 'text-slate-700 bg-slate-50 border border-slate-200' },
  indigo: { bg: 'bg-indigo-50', border: 'border-indigo-100', text: 'text-indigo-700', iconBg: 'bg-indigo-100', badge: 'bg-indigo-700', tab: 'bg-indigo-600 text-white', tabIdle: 'text-indigo-700 bg-indigo-50 border border-indigo-100' },
};

const difficultyColor = {
  Easy:   'text-green-700 bg-green-50 border border-green-200',
  Medium: 'text-amber-700 bg-amber-50 border border-amber-200',
  Hard:   'text-rose-700 bg-rose-50 border border-rose-200',
};

export default function ProjectsPage() {
  const [active, setActive] = useState('All');
  const [adminProjects, setAdminProjects] = useState([]);
  const [domainOverrides, setDomainOverrides] = useState([]);

  useEffect(() => {
    const base = process.env.NODE_ENV === 'development' ? '/api/content' : '/api.php';
    fetch(`${base}?type=projects`).then(r => r.ok ? r.json() : []).then(data => setAdminProjects(Array.isArray(data) ? data : [])).catch(() => {});
    fetch(`${base}?type=domains`).then(r => r.ok ? r.json() : []).then(data => setDomainOverrides(Array.isArray(data) ? data : [])).catch(() => {});
  }, []);

  const overrideMap = Object.fromEntries(domainOverrides.map(o => [o.id, o]));

  const effectiveDomains = domains
    .filter(d => !overrideMap[d.title]?.hidden)
    .map(d => {
      const ov = overrideMap[d.title];
      if (!ov) return d;
      return {
        ...d,
        count:        ov.count        || d.count,
        desc:         ov.desc         || d.desc,
        platforms:    ov.platforms    ? ov.platforms.split(',').map(p => p.trim()).filter(Boolean) : d.platforms,
        sampleTopics: ov.sampleTopics ? ov.sampleTopics.split('\n').map(t => t.trim()).filter(Boolean).slice(0, 6) : d.sampleTopics,
      };
    });

  const filtered = active === 'All' ? effectiveDomains : effectiveDomains.filter((d) => d.title === active);

  return (
    <>
      {/* Header */}
      <section className="bg-gradient-to-br from-primary-950 to-primary-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-primary-300 font-semibold text-sm uppercase tracking-wider mb-3">What We Build</p>
          <h1 className="text-4xl md:text-5xl font-black text-white mb-4">Final Year Projects</h1>
          <p className="text-primary-200 text-lg max-w-2xl mx-auto leading-relaxed">
            5,000+ project topics across 8 engineering domains. Every project includes IEEE paper, source code, hardware, and complete documentation.
          </p>
        </div>
      </section>

      {/* Admin-added projects */}
      {adminProjects.length > 0 && (
        <section className="py-10 bg-primary-50 border-b border-primary-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-2 mb-6">
              <Sparkles size={18} className="text-primary-700" />
              <h2 className="font-black text-slate-900 text-lg">New Project Topics</h2>
              <span className="text-xs font-bold text-primary-700 bg-primary-100 px-2 py-0.5 rounded-full">{adminProjects.length} added</span>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {adminProjects.map(proj => (
                <div key={proj.id} className="bg-white rounded-2xl border border-primary-100 p-5">
                  <div className="flex items-center gap-2 mb-3 flex-wrap">
                    <span className="text-xs font-semibold text-primary-700 bg-primary-50 px-2 py-0.5 rounded-full border border-primary-100">{proj.domain}</span>
                    {proj.difficulty && <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${difficultyColor[proj.difficulty] || 'text-slate-600 bg-slate-100'}`}>{proj.difficulty}</span>}
                    {proj.duration && <span className="text-xs text-slate-400">{proj.duration}</span>}
                  </div>
                  <p className="font-bold text-slate-900 text-sm leading-snug mb-2">{proj.title}</p>
                  {proj.description && <p className="text-slate-500 text-xs leading-relaxed mb-3">{proj.description}</p>}
                  {proj.tech && (
                    <div className="flex flex-wrap gap-1">
                      {proj.tech.split(',').map(t => t.trim()).filter(Boolean).map(t => (
                        <span key={t} className="text-xs bg-slate-100 text-slate-600 px-2 py-0.5 rounded-full">{t}</span>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── Filter grid ── */}
      <div className="bg-white border-b border-slate-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-wrap gap-2 justify-center">
            <button
              onClick={() => setActive('All')}
              className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-200 min-h-[40px] ${
                active === 'All'
                  ? 'bg-primary-700 text-white shadow-md shadow-primary-700/30'
                  : 'text-slate-600 bg-slate-100 hover:bg-slate-200'
              }`}
            >
              All Domains
            </button>
            {effectiveDomains.map((d) => {
              const c = colorMap[d.color];
              const isActive = active === d.title;
              return (
                <button
                  key={d.title}
                  onClick={() => setActive(d.title)}
                  className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-200 min-h-[40px] ${
                    isActive ? `${c.tab} shadow-md` : `${c.tabIdle} hover:opacity-80`
                  }`}
                >
                  <d.icon size={14} />
                  {d.title}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Domain sections */}
      <section className="py-10 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          {filtered.map((domain) => {
            const c = colorMap[domain.color];
            return (
              <div
                key={domain.title}
                id={domain.title.toLowerCase().replace(/[^a-z]/g, '-')}
                className={`rounded-3xl border ${c.border} ${c.bg} p-6 sm:p-8 scroll-mt-28 animate-page-in`}
              >
                <div className="flex flex-col md:flex-row gap-8">
                  {/* Left */}
                  <div className="md:w-80 flex-shrink-0">
                    <div className="flex items-center gap-4 mb-4">
                      <div className={`w-14 h-14 ${c.iconBg} rounded-2xl flex items-center justify-center`}>
                        <domain.icon size={26} className={c.text} />
                      </div>
                      <div>
                        <div className="flex items-center gap-2 flex-wrap">
                          <h2 className={`text-xl font-black ${c.text}`}>{domain.title}</h2>
                          {domain.badge && (
                            <span className={`${c.badge} text-white text-xs font-bold px-2.5 py-0.5 rounded-full`}>
                              {domain.badge}
                            </span>
                          )}
                        </div>
                        <p className="text-slate-500 text-sm font-medium">{domain.count} project topics</p>
                      </div>
                    </div>
                    <p className="text-slate-600 text-sm leading-relaxed mb-5">{domain.desc}</p>
                    <div>
                      <p className={`text-xs font-bold uppercase tracking-wider ${c.text} mb-3`}>Technologies & Platforms</p>
                      <div className="flex flex-wrap gap-2">
                        {domain.platforms.map((p) => (
                          <span key={p} className="bg-white text-slate-600 text-xs font-medium px-2.5 py-1 rounded-lg border border-slate-200">
                            {p}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Right */}
                  <div className="flex-1">
                    <p className={`text-xs font-bold uppercase tracking-wider ${c.text} mb-4`}>Sample Project Topics</p>
                    <div className="grid sm:grid-cols-2 gap-3">
                      {domain.sampleTopics.map((topic) => (
                        <div key={topic} className="bg-white rounded-xl border border-white/80 p-4 flex items-start gap-3 min-h-[44px]">
                          <ChevronRight size={14} className={`${c.text} mt-0.5 flex-shrink-0`} />
                          <p className="text-slate-700 text-sm leading-snug font-medium">{topic}</p>
                        </div>
                      ))}
                    </div>
                    <div className="mt-5">
                      <a
                        href="https://wa.me/917550191838?text=Hi%2C%20I%20want%20to%20enquire%20about%20final%20year%20projects%20at%20LearnMore%20Projects"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary text-sm py-2.5 px-5 min-h-[44px]"
                      >
                        <MessageCircle size={15} />
                        Enquire for {domain.title}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <TopicsSearch topics={allTopics} />

      {/* Bottom CTA */}
      <section className="py-16 bg-primary-700">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-black text-white mb-4">Can't Find Your Topic?</h2>
          <p className="text-primary-100 text-lg mb-8">
            Tell us your branch and requirement — we'll suggest the perfect project and customize it for you.
          </p>
          <a
            href="https://wa.me/917550191838?text=Hi%2C%20I%20want%20a%20custom%20final%20year%20project%20at%20LearnMore%20Projects"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-primary-700 font-bold text-base px-8 py-4 rounded-2xl hover:bg-primary-50 transition-colors min-h-[44px]"
          >
            <MessageCircle size={20} />
            Get a Custom Project Suggestion
          </a>
        </div>
      </section>
    </>
  );
}
