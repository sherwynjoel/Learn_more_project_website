import Link from 'next/link';
import { MessageCircle, ArrowRight, ExternalLink } from 'lucide-react';

export const metadata = {
  title: 'Portfolio | LearnMore Projects — Student Project Showcase',
  description:
    'Real final year projects built at LearnMore Projects — IEEE papers, hardware prototypes, and student success stories.',
};

const projects = [
  {
    domain: 'Embedded AI',
    domainColor: 'bg-purple-100 text-purple-700',
    title: 'Edge AI Quality Control System',
    student: 'Arjun M.',
    college: 'PSG College of Technology',
    branch: 'B.E. ECE · 2024',
    desc: 'A real-time visual defect detection system deployed on Raspberry Pi 4, inspecting PCBs at 15 frames/second on a conveyor belt. MobileNetV2 model quantized to TFLite with 94.3% accuracy — no cloud dependency.',
    tech: ['Raspberry Pi 4', 'TensorFlow Lite', 'OpenCV', 'Python', 'Custom CNN', 'Servo Gate'],
    outcome: 'Finalist, Smart India Hackathon 2024. Offered internship at ISRO VSSC.',
    highlights: ['IEEE paper published', 'Hardware prototype', 'Patent filed'],
  },
  {
    domain: 'Bio-Medical',
    domainColor: 'bg-rose-100 text-rose-700',
    title: 'Non-Invasive Blood Glucose Monitor',
    student: 'Meena T.',
    college: 'Anna University Regional Campus',
    branch: 'M.E. Embedded Systems · 2024',
    desc: 'Wearable wristband using near-infrared spectroscopy and a trained regression model to estimate blood glucose non-invasively. STM32-based with BLE 5.0 for phone app sync.',
    tech: ['STM32F4', 'NIR LED Array', 'BLE 5.0', 'Python (TFLite)', 'Custom PCB', 'Android App'],
    outcome: 'Patent Application No. XXX/2024 filed. Student joined a Bangalore medtech startup.',
    highlights: ['Patent filed', 'IEEE paper', 'Hardware demo'],
  },
  {
    domain: 'IoT + AI',
    domainColor: 'bg-teal-100 text-teal-700',
    title: 'Smart Precision Agriculture System',
    student: 'Priya S.',
    college: 'PSG College of Technology',
    branch: 'B.E. ECE · 2023',
    desc: 'Multi-sensor IoT node (NPK, soil moisture, temperature, humidity) feeding a gradient boosted ML model that predicts crop health and controls drip irrigation via relay. Dashboard on ThingSpeak.',
    tech: ['ESP32', 'NPK Sensor', 'TensorFlow', 'AWS IoT', 'MQTT', 'ThingSpeak', 'Node-RED'],
    outcome: 'Published in IEEE Xplore. Placed at Tata Consultancy Services, Chennai.',
    highlights: ['IEEE published', 'Working prototype', 'Cloud deployed'],
  },
  {
    domain: 'Robotics',
    domainColor: 'bg-orange-100 text-orange-700',
    title: 'Autonomous Warehouse Robot',
    student: 'Karthik R.',
    college: 'Coimbatore Institute of Technology',
    branch: 'B.Tech Mechatronics · 2024',
    desc: 'A self-navigating mobile robot using SLAM (Simultaneous Localization and Mapping) on Raspberry Pi with ROS Noetic. Maps warehouse floor plans, picks assigned shelves, and returns to dock.',
    tech: ['Raspberry Pi 4', 'ROS Noetic', 'LiDAR', 'L298N Motor Driver', '3D Printed Chassis', 'Python'],
    outcome: 'Best Project Award — CIT Technical Symposium 2024. Internship at Bosch Coimbatore.',
    highlights: ['Best project award', 'Full hardware', 'ROS-based'],
  },
  {
    domain: 'Power Electronics',
    domainColor: 'bg-yellow-100 text-yellow-700',
    title: 'MPPT Solar Charge Controller with IoT Monitoring',
    student: 'Suresh K.',
    college: 'GRG College of Engineering',
    branch: 'B.E. EEE · 2023',
    desc: 'Implemented Perturb & Observe MPPT algorithm on STM32 driving a synchronous buck converter for a 100W solar panel. Real-time efficiency logging via MQTT to a web dashboard.',
    tech: ['STM32', 'Synchronous Buck Converter', 'MATLAB Simulink', 'ESP8266', 'MQTT', 'React Dashboard'],
    outcome: 'Published in SCOPUS-indexed journal. Placed at Havells India Ltd.',
    highlights: ['SCOPUS indexed', 'Custom PCB', 'IoT dashboard'],
  },
  {
    domain: 'Software + AI',
    domainColor: 'bg-indigo-100 text-indigo-700',
    title: 'AI-Powered Medical Report Analyzer',
    student: 'Kavitha S.',
    college: 'Kongu Engineering College',
    branch: 'B.Tech IT · 2024',
    desc: 'LLM-powered web app that ingests scanned lab reports (PDF/image), extracts structured data via OCR, and generates patient-friendly plain-English summaries with severity flags using GPT-4 API.',
    tech: ['Python', 'FastAPI', 'Tesseract OCR', 'LangChain', 'GPT-4 API', 'React', 'PostgreSQL'],
    outcome: 'Deployed on AWS. Used by 3 independent clinics in Coimbatore for trials.',
    highlights: ['Live deployment', 'IEEE paper', 'Real-world use'],
  },
];

const outcomes = [
  { value: '10,000+', label: 'Projects Completed' },
  { value: '95%', label: 'Viva Pass Rate' },
  { value: '40+', label: 'IEEE Papers Published' },
  { value: '3', label: 'Patents Filed' },
];

export default function PortfolioPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-gradient-to-br from-slate-900 to-slate-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-primary-300 font-semibold text-sm uppercase tracking-wider mb-3">Student Work</p>
          <h1 className="text-4xl md:text-5xl font-black text-white mb-4">Project Portfolio</h1>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto leading-relaxed">
            Real projects. Real hardware. Real outcomes. Every project here was built with full engineering support from our team.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-primary-700 py-10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {outcomes.map((o) => (
              <div key={o.label}>
                <p className="text-4xl font-black text-white">{o.value}</p>
                <p className="text-primary-200 text-sm font-medium mt-1">{o.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects grid */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
            {projects.map((project) => (
              <div
                key={project.title}
                className="bg-white rounded-2xl border border-slate-100 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col"
              >
                <div className="h-1.5 bg-gradient-to-r from-primary-600 to-primary-400" />
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-start justify-between gap-3 mb-4">
                    <span className={`inline-block text-xs font-bold px-3 py-1 rounded-full ${project.domainColor}`}>
                      {project.domain}
                    </span>
                    <div className="flex gap-1.5 flex-shrink-0">
                      {project.highlights.map((h) => (
                        <span key={h} className="bg-slate-100 text-slate-500 text-xs px-2 py-0.5 rounded-full hidden lg:block">
                          {h}
                        </span>
                      ))}
                    </div>
                  </div>

                  <h3 className="font-black text-slate-900 text-base leading-snug mb-2">{project.title}</h3>

                  <div className="mb-4">
                    <p className="text-sm font-semibold text-primary-700">{project.student}</p>
                    <p className="text-xs text-slate-400">{project.branch} · {project.college}</p>
                  </div>

                  <p className="text-slate-500 text-sm leading-relaxed mb-4 flex-1">{project.desc}</p>

                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.tech.map((t) => (
                      <span key={t} className="bg-primary-50 text-primary-700 text-xs font-medium px-2.5 py-1 rounded-lg border border-primary-100">
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="border-t border-slate-100 pt-4">
                    <p className="text-xs text-slate-400 font-semibold uppercase tracking-wider mb-1">Outcome</p>
                    <p className="text-sm text-slate-700 font-medium leading-snug">{project.outcome}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial block */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-black text-slate-900 mb-6">
            Want Your Project Featured Here?
          </h2>
          <p className="text-slate-500 text-lg mb-8 leading-relaxed">
            Join 7,000+ students who built industry-grade projects with LearnMore. Every great project starts with a free consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/917550191838?text=Hi%2C%20I%20want%20to%20start%20my%20final%20year%20project%20at%20LearnMore%20Projects"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-base px-8 py-4"
            >
              <MessageCircle size={18} />
              Start Your Project
            </a>
            <Link href="/projects" className="btn-outline text-base px-8 py-4">
              Browse Topics
              <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
