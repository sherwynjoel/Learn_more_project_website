import Link from 'next/link';
import {
  MessageCircle, ArrowRight, Clock, Users, Award, CheckCircle2,
  Cpu, Wifi, Brain, Bot, Code2, Zap,
} from 'lucide-react';

export const metadata = {
  title: 'Training & Courses | LearnMore Projects Coimbatore',
  description:
    'Hands-on technical training in Embedded Systems, IoT, AI/ML, Robotics, and more. Internship programs, certified courses, and placement support.',
};

const courses = [
  {
    icon: Cpu,
    title: 'Embedded Systems & RTOS',
    duration: '45 Days',
    type: 'Offline / Online',
    level: 'Beginner → Advanced',
    color: 'blue',
    syllabus: [
      'C Programming for Embedded Systems',
      'AVR / ARM Microcontroller Architecture',
      'Peripheral Interfacing (UART, SPI, I2C, ADC)',
      'Real-Time OS Concepts (FreeRTOS)',
      'PCB Design Basics (KiCad)',
      'Project: Smart Sensor Node from Scratch',
    ],
    outcome: 'Industry-recognized certificate + working project kit',
  },
  {
    icon: Wifi,
    title: 'IoT Development',
    duration: '30 Days',
    type: 'Offline / Online',
    level: 'Beginner → Intermediate',
    color: 'teal',
    syllabus: [
      'ESP32 / Raspberry Pi Setup & GPIO',
      'MQTT, HTTP, WebSockets Protocols',
      'Cloud Platforms (AWS IoT, Firebase)',
      'Node-RED Dashboard Design',
      'Security in IoT Devices',
      'Project: Smart Home Automation System',
    ],
    outcome: 'Certificate + live IoT project deployed to cloud',
  },
  {
    icon: Brain,
    title: 'AI / ML with Edge Deployment',
    duration: '60 Days',
    type: 'Offline / Online',
    level: 'Intermediate → Advanced',
    color: 'purple',
    syllabus: [
      'Python for Data Science (NumPy, Pandas)',
      'Machine Learning with Scikit-learn',
      'Deep Learning with TensorFlow / Keras',
      'Computer Vision with OpenCV',
      'Model Quantization & TFLite Deployment',
      'Project: Edge AI System on Raspberry Pi',
    ],
    outcome: 'Certificate + IEEE-publishable project output',
  },
  {
    icon: Bot,
    title: 'Robotics & Automation',
    duration: '45 Days',
    type: 'Offline',
    level: 'Beginner → Advanced',
    color: 'orange',
    syllabus: [
      'Motor Control & Driver Circuits',
      'Sensor Fusion (Ultrasonic, IR, IMU)',
      'PID Controller Implementation',
      'Introduction to ROS (Robot Operating System)',
      'Kinematics & Trajectory Planning',
      'Project: Autonomous Navigation Robot',
    ],
    outcome: 'Certificate + working autonomous robot',
  },
  {
    icon: Code2,
    title: 'Full-Stack Web Development',
    duration: '60 Days',
    type: 'Online / Hybrid',
    level: 'Beginner → Job-Ready',
    color: 'indigo',
    syllabus: [
      'HTML5, CSS3, JavaScript (ES6+)',
      'React.js & Next.js Framework',
      'Node.js & Express.js Backend',
      'MongoDB & PostgreSQL Databases',
      'REST APIs & Authentication (JWT)',
      'Project: Full SaaS Application Deployment',
    ],
    outcome: 'Portfolio-ready project + placement support',
  },
  {
    icon: Zap,
    title: 'Power Electronics & MATLAB',
    duration: '30 Days',
    type: 'Offline / Online',
    level: 'Intermediate',
    color: 'yellow',
    syllabus: [
      'MATLAB Simulink Fundamentals',
      'DC-DC Converter Simulation & Design',
      'MPPT Algorithms for Solar Systems',
      'Motor Drives (BLDC, Induction)',
      'Power Quality Analysis',
      'Project: Solar Inverter Simulation & Hardware',
    ],
    outcome: 'Certificate + SCOPUS-indexable paper guidance',
  },
];

const colorMap = {
  blue: { bg: 'bg-blue-50', border: 'border-blue-100', text: 'text-blue-700', iconBg: 'bg-blue-100', btn: 'bg-blue-700 hover:bg-blue-800' },
  teal: { bg: 'bg-teal-50', border: 'border-teal-100', text: 'text-teal-700', iconBg: 'bg-teal-100', btn: 'bg-teal-700 hover:bg-teal-800' },
  purple: { bg: 'bg-purple-50', border: 'border-purple-100', text: 'text-purple-700', iconBg: 'bg-purple-100', btn: 'bg-purple-700 hover:bg-purple-800' },
  orange: { bg: 'bg-orange-50', border: 'border-orange-100', text: 'text-orange-700', iconBg: 'bg-orange-100', btn: 'bg-orange-700 hover:bg-orange-800' },
  indigo: { bg: 'bg-indigo-50', border: 'border-indigo-100', text: 'text-indigo-700', iconBg: 'bg-indigo-100', btn: 'bg-indigo-700 hover:bg-indigo-800' },
  yellow: { bg: 'bg-yellow-50', border: 'border-yellow-100', text: 'text-yellow-700', iconBg: 'bg-yellow-100', btn: 'bg-yellow-700 hover:bg-yellow-800' },
};

const internships = [
  {
    title: 'Embedded Systems Internship',
    duration: '1 Month / 3 Months',
    desc: 'Work on real client projects involving microcontrollers, sensors, and hardware. Get exposure to professional PCB design and firmware development workflows.',
    skills: ['C/C++ Firmware', 'PCB Design', 'RTOS', 'Sensor Integration'],
  },
  {
    title: 'IoT & Cloud Internship',
    duration: '1 Month / 3 Months',
    desc: 'Build live IoT deployments using cloud platforms. Work with real sensor data pipelines, dashboards, and edge computing setups.',
    skills: ['AWS IoT', 'Node-RED', 'MQTT', 'Dashboard Design'],
  },
  {
    title: 'AI / ML Research Internship',
    duration: '3 Months',
    desc: 'Contribute to live R&D projects in computer vision and embedded ML. Guidance for IEEE paper publication included.',
    skills: ['Python', 'TensorFlow', 'Computer Vision', 'Research Writing'],
  },
  {
    title: 'Full-Stack Development Internship',
    duration: '2 Months / 3 Months',
    desc: 'Build features for real web products. Exposure to full development lifecycle — design, build, test, deploy.',
    skills: ['React', 'Node.js', 'REST APIs', 'Databases'],
  },
];

export default function TrainingPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-gradient-to-br from-primary-950 to-primary-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-primary-300 font-semibold text-sm uppercase tracking-wider mb-3">Skill Development</p>
          <h1 className="text-4xl md:text-5xl font-black text-white mb-4">Training & Courses</h1>
          <p className="text-primary-200 text-lg max-w-2xl mx-auto leading-relaxed">
            Industry-relevant hands-on training by MNC professionals. Build real projects, earn certificates, get placed.
          </p>
        </div>
      </section>

      {/* Why train with us */}
      <section className="py-14 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: Users, title: 'MNC Trainers', desc: 'Instructors with real industry experience at top companies.' },
              { icon: Cpu, title: 'Fully Hands-On', desc: 'No slides-only lectures — every session involves building something.' },
              { icon: Clock, title: 'Flexible Timings', desc: 'Morning, evening, and weekend batches to fit your schedule.' },
              { icon: Award, title: 'Placement Support', desc: 'Resume building, mock interviews, and recruiter referrals.' },
            ].map((item) => (
              <div key={item.title} className="flex items-start gap-4 p-5 rounded-2xl bg-slate-50 border border-slate-100">
                <div className="w-10 h-10 bg-primary-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <item.icon size={18} className="text-primary-700" />
                </div>
                <div>
                  <p className="font-bold text-slate-900 text-sm mb-1">{item.title}</p>
                  <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Courses */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-title">Certified Courses</h2>
            <p className="section-subtitle mx-auto text-center">
              From beginner to industry-ready. Every course ends with a working project and a recognized certificate.
            </p>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
            {courses.map((course) => {
              const c = colorMap[course.color];
              return (
                <div key={course.title} className={`bg-white rounded-2xl border ${c.border} overflow-hidden hover:shadow-lg transition-all duration-300 flex flex-col`}>
                  <div className={`${c.bg} p-6 border-b ${c.border}`}>
                    <div className={`w-12 h-12 ${c.iconBg} rounded-xl flex items-center justify-center mb-4`}>
                      <course.icon size={22} className={c.text} />
                    </div>
                    <h3 className="font-black text-slate-900 text-lg mb-3">{course.title}</h3>
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-white text-slate-600 text-xs font-medium px-3 py-1 rounded-full border border-slate-200">
                        <Clock size={11} className="inline mr-1" />{course.duration}
                      </span>
                      <span className="bg-white text-slate-600 text-xs font-medium px-3 py-1 rounded-full border border-slate-200">
                        {course.type}
                      </span>
                      <span className={`${c.bg} ${c.text} text-xs font-medium px-3 py-1 rounded-full border ${c.border}`}>
                        {course.level}
                      </span>
                    </div>
                  </div>

                  <div className="p-6 flex flex-col flex-1">
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">Syllabus Highlights</p>
                    <ul className="space-y-2 flex-1">
                      {course.syllabus.map((item) => (
                        <li key={item} className="flex items-start gap-2.5">
                          <CheckCircle2 size={13} className="text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-slate-600 text-sm">{item}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-5 pt-5 border-t border-slate-100">
                      <p className="text-xs text-slate-400 font-semibold uppercase tracking-wider mb-1">Upon Completion</p>
                      <p className="text-sm text-slate-700 font-medium mb-4">{course.outcome}</p>
                      <a
                        href="https://wa.me/917550191838?text=Hi%2C%20I%20want%20to%20enroll%20in%20a%20course%20at%20LearnMore%20Projects"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`${c.btn} text-white text-sm font-semibold px-5 py-2.5 rounded-xl transition-colors flex items-center gap-2 justify-center`}
                      >
                        <MessageCircle size={14} />
                        Enroll Now
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Internships */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-primary-600 font-semibold text-sm uppercase tracking-wider mb-2">Real-World Experience</p>
            <h2 className="section-title">Internship Programs</h2>
            <p className="section-subtitle mx-auto text-center">
              Work on live projects. Build a portfolio that impresses recruiters.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {internships.map((internship) => (
              <div key={internship.title} className="card hover:border-primary-200">
                <div className="flex items-start justify-between gap-4 mb-4">
                  <h3 className="font-bold text-slate-900 text-base">{internship.title}</h3>
                  <span className="bg-primary-50 text-primary-700 text-xs font-bold px-3 py-1.5 rounded-full border border-primary-100 flex-shrink-0">
                    {internship.duration}
                  </span>
                </div>
                <p className="text-slate-500 text-sm leading-relaxed mb-4">{internship.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {internship.skills.map((skill) => (
                    <span key={skill} className="bg-slate-100 text-slate-600 text-xs font-medium px-2.5 py-1 rounded-lg">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <a
              href="https://wa.me/917550191838?text=Hi%2C%20I%20want%20to%20apply%20for%20an%20internship%20at%20LearnMore%20Projects"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-base px-8 py-4"
            >
              <MessageCircle size={18} />
              Apply for Internship
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
