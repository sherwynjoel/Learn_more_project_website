import Link from 'next/link';
import { ArrowLeft, Clock, MessageCircle, CheckCircle2, ChevronRight } from 'lucide-react';

export const metadata = {
  title: 'Top 20 Final Year Projects for ECE Students 2025 | LearnMore Projects',
  description:
    'Best final year project ideas for B.E./B.Tech ECE in 2025 — Embedded AI, IoT, Bio-Medical, Power Electronics, and Communication. With IEEE references and difficulty ratings.',
};

const projects = [
  {
    rank: 1,
    domain: 'Embedded AI',
    title: 'Edge AI Defect Detection System',
    difficulty: 'High',
    diffColor: 'bg-rose-100 text-rose-700',
    desc: 'Deploy a MobileNet or YOLO model on Raspberry Pi 4 or Jetson Nano to detect manufacturing defects in real time using a conveyor belt setup.',
    why: 'Combines hardware, ML, and computer vision — extremely high viva value. Applicable to Industry 4.0 narrative.',
  },
  {
    rank: 2,
    domain: 'IoT + AI',
    title: 'Smart Precision Agriculture with ML',
    difficulty: 'Medium',
    diffColor: 'bg-yellow-100 text-yellow-700',
    desc: 'ESP32 + NPK/soil moisture sensors feeding a gradient-boosted crop health prediction model. Automates drip irrigation and sends alerts via MQTT dashboard.',
    why: 'Strong social impact angle + real sensor data = evaluators love it. Publishable in IEEE Xplore.',
  },
  {
    rank: 3,
    domain: 'Bio-Medical',
    title: 'Non-Invasive Blood Glucose Monitor',
    difficulty: 'High',
    diffColor: 'bg-rose-100 text-rose-700',
    desc: 'NIR LED array wristband + STM32 + regression model to estimate blood glucose without needles. Syncs over BLE 5.0 to a mobile app.',
    why: 'Patent-worthy concept. Bio-Medical projects score highest in viva at most Anna University colleges.',
  },
  {
    rank: 4,
    domain: 'IoT',
    title: 'Smart Energy Management for Buildings',
    difficulty: 'Medium',
    diffColor: 'bg-yellow-100 text-yellow-700',
    desc: 'CT sensors on each circuit breaker + ESP32 + cloud dashboard showing real-time power consumption with anomaly detection alerts.',
    why: 'Hardware is inexpensive, dashboard is impressive, directly applicable to hostel/home energy saving.',
  },
  {
    rank: 5,
    domain: 'Embedded',
    title: 'Automated Greenhouse Control System',
    difficulty: 'Easy–Medium',
    diffColor: 'bg-green-100 text-green-700',
    desc: 'Temperature, humidity, CO2, and light sensors with Arduino/STM32 controlling ventilation, irrigation, and grow lights via relay module.',
    why: 'Well-understood hardware, clear demo-able outcome, excellent for quick deadlines.',
  },
  {
    rank: 6,
    domain: 'Robotics',
    title: 'Autonomous Warehouse Robot (SLAM)',
    difficulty: 'High',
    diffColor: 'bg-rose-100 text-rose-700',
    desc: 'Raspberry Pi 4 + ROS Noetic + LiDAR + SLAM for self-navigating robot that maps a floor plan and picks items from assigned shelf coordinates.',
    why: 'ROS on resume is a job-ready skill. Best project awards at most technical symposiums.',
  },
  {
    rank: 7,
    domain: 'Power Electronics',
    title: 'MPPT Solar Charge Controller with IoT',
    difficulty: 'Medium',
    diffColor: 'bg-yellow-100 text-yellow-700',
    desc: 'STM32 implementing Perturb & Observe MPPT on a synchronous buck converter for a 100W panel. Real-time efficiency graph on web dashboard.',
    why: 'SCOPUS-publishable topic. EEE and ECE students both qualify. Hardware is under ₹3,000.',
  },
  {
    rank: 8,
    domain: 'Software + AI',
    title: 'AI Medical Report Analyzer',
    difficulty: 'Medium',
    diffColor: 'bg-yellow-100 text-yellow-700',
    desc: 'LLM + OCR pipeline that reads scanned lab reports and generates plain-English patient summaries with severity flags. Deployed as a web app.',
    why: 'Pure software — no hardware cost. Excellent for IT/CSE students or ECE students with coding strength.',
  },
  {
    rank: 9,
    domain: 'Embedded AI',
    title: 'Driver Drowsiness Detection (Edge)',
    difficulty: 'Medium',
    diffColor: 'bg-yellow-100 text-yellow-700',
    desc: 'OpenCV + MediaPipe face mesh on Raspberry Pi detecting PERCLOS (eye closure ratio) in real time. Triggers buzzer and sends SMS alert on drowsiness.',
    why: 'Road safety angle resonates with evaluators. Demo is visual and immediate.',
  },
  {
    rank: 10,
    domain: 'Wireless',
    title: 'LoRaWAN-Based Flood Early Warning',
    difficulty: 'Medium',
    diffColor: 'bg-yellow-100 text-yellow-700',
    desc: 'Water level + rain sensors on LoRa nodes transmitting to a gateway. Central server with alert dashboard and SMS to registered numbers.',
    why: 'Long-range wireless is a differentiator. Disaster management theme is strong for IEEE papers.',
  },
];

const tips = [
  'Pick a project you can explain end-to-end — not just the circuit, but the algorithm and the use case.',
  'Check if your college has submitted the same topic before. A unique implementation always scores higher.',
  'Higher hardware complexity generally means higher marks — but make sure you have the budget and timeline.',
  'IEEE Xplore citation in your report immediately upgrades your viva standing.',
  'If you are unsure, call us. We have tracked which topics which colleges have submitted — we will recommend something safe and unique.',
];

export default function BlogPost1() {
  return (
    <>
      {/* Header */}
      <section className="bg-gradient-to-br from-primary-950 to-primary-800 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/blog" className="inline-flex items-center gap-2 text-primary-300 hover:text-white text-sm font-medium mb-6 transition-colors">
            <ArrowLeft size={15} /> Back to Blog
          </Link>
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <span className="bg-primary-600 text-white text-xs font-bold px-3 py-1 rounded-full">Project Ideas</span>
            <span className="text-primary-300 text-sm flex items-center gap-1"><Clock size={13} /> 8 min read</span>
            <span className="text-primary-300 text-sm">May 2025</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-black text-white mb-4 leading-tight">
            Top 20 Final Year Projects for ECE Students in 2025
          </h1>
          <p className="text-primary-200 text-lg leading-relaxed">
            A ranked list of implementable, high-scoring project ideas — with difficulty ratings, domain labels, and the one-line reason each topic impresses evaluators.
          </p>
        </div>
      </section>

      {/* Article body */}
      <section className="py-14 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl border border-slate-100 p-6 sm:p-10">

            <p className="text-slate-600 text-base leading-relaxed mb-10">
              Every year, 70,000+ ECE students across Tamil Nadu need to pick a final year project topic. Most pick something "safe" — and end up with the same project as half their batch. This list focuses on topics that are <strong>implementable within 30 days</strong>, score well in vivas, and are novel enough to stand out. We have guided over 7,000 students — these rankings come from real outcomes.
            </p>

            <div className="space-y-6 mb-12">
              {projects.map((proj) => (
                <div key={proj.rank} className="border border-slate-100 rounded-2xl p-5 sm:p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-primary-700 rounded-xl flex items-center justify-center">
                      <span className="text-white font-black text-sm">{proj.rank}</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-center gap-2 mb-2">
                        <span className="bg-primary-50 text-primary-700 text-xs font-bold px-2.5 py-1 rounded-full border border-primary-100">
                          {proj.domain}
                        </span>
                        <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${proj.diffColor}`}>
                          {proj.difficulty}
                        </span>
                      </div>
                      <h3 className="font-black text-slate-900 text-base mb-2">{proj.title}</h3>
                      <p className="text-slate-500 text-sm leading-relaxed mb-3">{proj.desc}</p>
                      <div className="bg-primary-50 border border-primary-100 rounded-xl px-4 py-3">
                        <p className="text-sm text-primary-800"><span className="font-bold">Why it works:</span> {proj.why}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-slate-50 border border-slate-100 rounded-2xl p-6 mb-10">
              <h2 className="font-black text-slate-900 text-xl mb-4">5 Rules for Picking a Winning Topic</h2>
              <ul className="space-y-3">
                {tips.map((tip, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 size={16} className="text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-600 text-sm leading-relaxed">{tip}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-primary-700 rounded-2xl p-6 text-center">
              <h3 className="text-white font-black text-xl mb-2">Need Help Picking Your Topic?</h3>
              <p className="text-primary-200 text-sm mb-5">Tell us your branch, college, and deadline — we will recommend 3 unique topics that fit your budget and timeline.</p>
              <a
                href="https://wa.me/917550191838?text=Hi%2C%20I%20need%20help%20picking%20a%20final%20year%20project%20topic%20for%20ECE"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white text-primary-700 font-bold text-sm px-6 py-3 rounded-xl hover:bg-primary-50 transition-colors min-h-[44px]"
              >
                <MessageCircle size={16} /> WhatsApp for Free Recommendation
              </a>
            </div>

          </div>

          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-between">
            <Link href="/blog" className="inline-flex items-center gap-2 text-primary-700 font-semibold text-sm hover:underline">
              <ArrowLeft size={15} /> Back to Blog
            </Link>
            <Link href="/projects" className="inline-flex items-center gap-2 text-primary-700 font-semibold text-sm hover:underline">
              Browse Full Project List <ChevronRight size={15} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
