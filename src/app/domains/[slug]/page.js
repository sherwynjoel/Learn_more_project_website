import Link from 'next/link';
import { notFound } from 'next/navigation';
import { MessageCircle, CheckCircle2, ArrowLeft, ArrowRight, Cpu, Wifi, Brain, Bot, Zap, FlaskConical, Code2, Wrench } from 'lucide-react';

const domainData = {
  'embedded-systems': {
    icon: Cpu,
    color: 'blue',
    title: 'Embedded Systems Projects',
    subtitle: 'Microcontrollers · Firmware · PCB Design · RTOS',
    intro: 'Embedded Systems projects involve programming microcontrollers (ARM, AVR, STM32, Arduino, PIC) to interact with the physical world through sensors, actuators, and communication interfaces. These projects are the most technically in-depth — and the most valued by recruiters in automotive, consumer electronics, and defence sectors.',
    whyStrong: [
      'Highest viva depth — evaluators from ECE backgrounds love hardware questions',
      'Core skill for automotive (CAN, LIN), medical (STM32, DSP), and aerospace roles',
      'Unique implementation per student — no two wiring setups are alike',
      'ARM Cortex-M on resume immediately differentiates you in placements',
    ],
    topics: [
      { title: 'Smart Health Monitor (ECG + SpO2)', tech: ['STM32', 'AD8232', 'MAX30102', 'SPI TFT'] },
      { title: 'Automated Greenhouse Controller', tech: ['Arduino Mega', 'DHT22', 'Soil Sensor', 'Relay'] },
      { title: 'Real-Time Obstacle Avoidance Robot', tech: ['ATmega328', 'Ultrasonic', 'L298N', 'Servo'] },
      { title: 'Digital MPPT Solar Tracker', tech: ['STM32F4', 'Buck Converter', 'Current Sensor'] },
      { title: 'CAN Bus Vehicle Data Logger', tech: ['STM32', 'MCP2515', 'SD Card', 'OLED'] },
      { title: 'Smart Door Lock with RFID & BLE', tech: ['ESP32', 'RC522 RFID', 'Solenoid', 'BLE'] },
    ],
    toolchain: ['ARM Keil / STM32CubeIDE', 'Arduino IDE / PlatformIO', 'KiCad (PCB Design)', 'Logic Analyzer / Oscilloscope', 'FreeRTOS', 'UART / SPI / I2C / CAN'],
    ideal: 'B.E./B.Tech ECE, EEE, Mechatronics, BME. Excellent for M.E. Embedded Systems students.',
    metadata: {
      title: 'Embedded Systems Final Year Projects Coimbatore | LearnMore Projects',
      description: 'IEEE-standard Embedded Systems final year projects in Coimbatore — STM32, Arduino, ARM Cortex-M, RTOS, PCB design. Full hardware support and documentation.',
    },
  },
  'iot-projects': {
    icon: Wifi,
    color: 'teal',
    title: 'IoT Final Year Projects',
    subtitle: 'ESP32 · Cloud · MQTT · Real-Time Dashboards',
    intro: 'Internet of Things (IoT) projects connect physical sensors and actuators to cloud platforms, enabling remote monitoring, control, and intelligent automation. IoT is the fastest-growing domain in final year projects — combining embedded hardware, wireless communication, cloud APIs, and web dashboards.',
    whyStrong: [
      'Live cloud dashboard impresses evaluators more than any other domain',
      'Hot IEEE Xplore category — high publication acceptance rate',
      'Relevant to agriculture, smart cities, industrial monitoring, and healthcare',
      'Bridges hardware and software — valued by both IT and ECE recruiters',
    ],
    topics: [
      { title: 'Smart Precision Agriculture System', tech: ['ESP32', 'NPK Sensor', 'AWS IoT', 'Node-RED'] },
      { title: 'Industrial Equipment Predictive Maintenance', tech: ['ESP32', 'Vibration Sensor', 'ML Model', 'Firebase'] },
      { title: 'Smart Energy Monitoring Dashboard', tech: ['ESP32', 'PZEM-004T', 'MQTT', 'Grafana'] },
      { title: 'LoRaWAN Flood Early Warning System', tech: ['RA-02 LoRa', 'Water Level Sensor', 'TTN Gateway'] },
      { title: 'Cold Chain Logistics Tracker', tech: ['ESP32', 'DS18B20', '4G', 'Google Maps API'] },
      { title: 'Smart Parking Management', tech: ['ESP32', 'IR Sensors', 'OLED', 'Web Dashboard'] },
    ],
    toolchain: ['ESP32 / Raspberry Pi', 'MQTT / HTTP / WebSockets', 'AWS IoT Core / Firebase', 'Node-RED / Grafana', 'Arduino IDE / MicroPython', 'React / Vue Dashboard'],
    ideal: 'B.E./B.Tech ECE, EEE, CSE, IT. M.E. Embedded Systems. Excellent for SIH participants.',
    metadata: {
      title: 'IoT Final Year Projects Coimbatore | LearnMore Projects',
      description: 'IEEE-standard IoT final year projects with cloud dashboards in Coimbatore — ESP32, AWS IoT, MQTT, Node-RED. Full hardware and documentation support.',
    },
  },
  'ai-ml': {
    icon: Brain,
    color: 'purple',
    title: 'AI / ML Final Year Projects',
    subtitle: 'Machine Learning · Computer Vision · Edge AI · NLP',
    intro: 'Artificial Intelligence and Machine Learning projects apply statistical models and neural networks to solve real-world problems. At LearnMore, we go beyond simulation — we deploy models on edge hardware (Raspberry Pi, Jetson Nano) for maximum viva impact and real-world relevance.',
    whyStrong: [
      'Highest placement value of any domain right now — every company wants AI skills',
      'Edge AI deployment (on-device inference) is a rare, sought-after capability',
      'Publishable in top IEEE conferences like ICCCI, ICSCA, and INDICON',
      'Computer vision projects create the most impressive live demos',
    ],
    topics: [
      { title: 'Edge AI Defect Detection on Conveyor Belt', tech: ['Raspberry Pi 4', 'TFLite', 'OpenCV', 'MobileNetV2'] },
      { title: 'Driver Drowsiness Detection System', tech: ['Raspberry Pi', 'MediaPipe', 'OpenCV', 'Buzzer'] },
      { title: 'AI Medical Report Analyzer (LLM)', tech: ['Python', 'GPT-4 API', 'Tesseract OCR', 'FastAPI'] },
      { title: 'Crop Disease Detection Using CNN', tech: ['Python', 'TensorFlow', 'Raspberry Pi', 'Camera'] },
      { title: 'NLP-Based Student Feedback Analyzer', tech: ['Python', 'BERT', 'Transformers', 'Django'] },
      { title: 'Gesture-Controlled Smart Home', tech: ['MediaPipe', 'Raspberry Pi', 'MQTT', 'Relay'] },
    ],
    toolchain: ['Python 3.x', 'TensorFlow / PyTorch / Keras', 'OpenCV / MediaPipe', 'TensorFlow Lite (Edge)', 'Scikit-learn', 'FastAPI / Flask / Django'],
    ideal: 'B.E./B.Tech CSE, IT, ECE. M.E. CSE / Embedded. Ph.D scholars. SIH and hackathon participants.',
    metadata: {
      title: 'AI ML Final Year Projects Coimbatore | LearnMore Projects',
      description: 'IEEE-standard AI/ML and computer vision final year projects in Coimbatore — edge deployment on Raspberry Pi, TensorFlow Lite, OpenCV. Full support and documentation.',
    },
  },
  'bio-medical': {
    icon: FlaskConical,
    color: 'rose',
    title: 'Bio-Medical Engineering Projects',
    subtitle: 'ECG · SpO2 · NIR · Medical-Grade Signal Processing',
    intro: 'Bio-Medical projects apply electronics and AI to healthcare challenges — from wearable diagnostics to medical imaging. We are the only project center in Coimbatore with dedicated Bio-Medical expertise, specialized sensors, and a track record of patent filings in this domain.',
    whyStrong: [
      'Highest viva marks in most BME and ECE programs at Anna University',
      'Patent-worthy concepts — we have guided 5 patent filings in this domain',
      'Specialized sensors not available elsewhere in Coimbatore (NIR, EMG, EEG)',
      'Growing market — medtech is one of the fastest-hiring sectors in India',
    ],
    topics: [
      { title: 'Non-Invasive Blood Glucose Monitor (NIR)', tech: ['STM32F4', 'NIR LED Array', 'BLE 5.0', 'Custom PCB'] },
      { title: 'Wearable ECG + Arrhythmia Detection', tech: ['AD8232', 'STM32', 'ML Classifier', 'OLED'] },
      { title: 'Portable SpO2 + SpCO Monitor', tech: ['MAX30100', 'Arduino', 'BLE', 'Android App'] },
      { title: 'EMG-Based Prosthetic Hand Control', tech: ['MyoWare EMG', 'STM32', 'Servo', 'Custom PCB'] },
      { title: 'EEG Brain-Computer Interface (BCI)', tech: ['ADS1299', 'STM32', 'Python ML', 'UART'] },
      { title: 'Smart Fall Detection for Elderly', tech: ['MPU6050', 'ESP32', 'GSM', 'Cloud Alert'] },
    ],
    toolchain: ['STM32 / ARM Cortex-M', 'Specialized Medical Sensors (NIR, ECG, SpO2, EMG)', 'MATLAB Signal Processing Toolbox', 'Custom PCB (KiCad)', 'Python / TensorFlow for ML classification', 'BLE / Bluetooth for wireless sync'],
    ideal: 'B.E./B.Tech ECE, BME. M.E. Embedded / Bio-Medical. Ph.D scholars in medical electronics.',
    metadata: {
      title: 'Bio-Medical Final Year Projects Coimbatore | LearnMore Projects',
      description: 'IEEE-standard Bio-Medical engineering final year projects in Coimbatore — ECG, SpO2, NIR sensing, medical signal processing. Patent filing guidance available.',
    },
  },
  'power-electronics': {
    icon: Zap,
    color: 'yellow',
    title: 'Power Electronics Projects',
    subtitle: 'DC-DC Converters · MPPT · Motor Drives · MATLAB Simulink',
    intro: 'Power Electronics projects design and control circuits that manage electrical power — from solar charge controllers and motor drives to grid-tied inverters. These projects use MATLAB Simulink for simulation and real hardware for validation, meeting IEEE publication standards.',
    whyStrong: [
      'Strong SCOPUS and SCI journal publication potential',
      'Directly applicable to renewable energy, EV, and smart grid industries',
      'Simulation-first approach reduces hardware risk for tight deadlines',
      'High demand for power electronics engineers at companies like Siemens, ABB, Havells',
    ],
    topics: [
      { title: 'MPPT Solar Charge Controller with IoT', tech: ['STM32', 'Buck Converter', 'ESP8266', 'MQTT'] },
      { title: 'Bidirectional DC-DC Converter for EV', tech: ['STM32', 'Half-Bridge MOSFET', 'MATLAB'] },
      { title: 'BLDC Motor Speed Control with FOC', tech: ['STM32F4', 'DRV8302', 'Encoder', 'MATLAB'] },
      { title: 'Single-Phase Grid-Tied Inverter', tech: ['PSIM', 'STM32', 'Full-Bridge IGBT', 'LCL Filter'] },
      { title: 'Active Power Factor Correction (PFC)', tech: ['STM32', 'Boost Converter', 'Current Sensor'] },
      { title: 'Wireless Power Transfer (WPT) System', tech: ['LCC Compensation', 'STM32', 'Coil Design'] },
    ],
    toolchain: ['MATLAB Simulink', 'PSIM', 'STM32CubeIDE', 'KiCad (PCB)', 'PLECS', 'Oscilloscope + Power Analyzer'],
    ideal: 'B.E./B.Tech EEE, ECE. M.E. Power Electronics / Power Systems. Ph.D scholars in energy conversion.',
    metadata: {
      title: 'Power Electronics Final Year Projects Coimbatore | LearnMore Projects',
      description: 'IEEE-standard Power Electronics final year projects in Coimbatore — MPPT, DC-DC converters, motor drives, MATLAB Simulink. SCOPUS publication guidance.',
    },
  },
  'robotics': {
    icon: Bot,
    color: 'orange',
    title: 'Robotics & Automation Projects',
    subtitle: 'ROS · SLAM · Autonomous Navigation · Mechatronics',
    intro: 'Robotics projects integrate mechanical design, electronics, and intelligent software to create autonomous systems. From warehouse robots to surgical assistants, robotics projects consistently win Best Project awards at technical symposiums.',
    whyStrong: [
      'Best Project Award contender at virtually every technical symposium',
      'ROS experience on resume is extremely rare and highly valued by recruiters',
      'Autonomous navigation (SLAM) is a cutting-edge topic with IEEE publication potential',
      'Applicable to logistics, agriculture, defence, and healthcare automation',
    ],
    topics: [
      { title: 'Autonomous Warehouse Robot (SLAM)', tech: ['Raspberry Pi 4', 'ROS Noetic', 'LiDAR', '3D Print'] },
      { title: 'Pick-and-Place Robot with Vision', tech: ['Raspberry Pi', 'OpenCV', '6-DOF Arm', 'Servo'] },
      { title: 'Swarm Robot Line Follower', tech: ['Arduino', 'IR Array', 'Bluetooth Coordination'] },
      { title: 'Agriculture Weed-Pulling Robot', tech: ['Raspberry Pi', 'Camera', 'Servo', 'GPS'] },
      { title: 'Underwater ROV for Inspection', tech: ['Raspberry Pi', 'Brushless Motors', 'Camera', 'Ethernet'] },
      { title: 'Humanoid Hand for Teleoperation', tech: ['Servo Array', 'Flex Sensors', 'Arduino', 'BLE'] },
    ],
    toolchain: ['ROS Noetic / ROS 2 Humble', 'Python / C++ (ROS Nodes)', 'SLAM (Cartographer / GMapping)', 'Gazebo Simulation', 'OpenCV', '3D Printing + CNC Fabrication'],
    ideal: 'B.Tech Mechatronics, B.E. ECE, EEE. M.E. Robotics / Mechatronics. SIH and hackathon participants.',
    metadata: {
      title: 'Robotics Final Year Projects Coimbatore | LearnMore Projects',
      description: 'IEEE-standard Robotics and Automation final year projects in Coimbatore — ROS, SLAM, autonomous navigation. Award-winning hardware projects with full support.',
    },
  },
  'software-development': {
    icon: Code2,
    color: 'indigo',
    title: 'Software Development Projects',
    subtitle: 'Web Apps · Mobile · AI Backends · Full-Stack',
    intro: 'Software projects build complete digital products — from SaaS web apps to mobile applications and AI-powered backends. These projects are ideal for CSE, IT, and MCA students targeting software engineering roles at product companies.',
    whyStrong: [
      'Portfolio-ready output — deploy to AWS/Vercel and share the link during interviews',
      'Full-stack or AI-powered apps impress both academic and industry evaluators',
      'Fastest time to working demo — no hardware procurement delays',
      'Directly applicable to placement interviews at TCS, Infosys, Zoho, startups',
    ],
    topics: [
      { title: 'AI Medical Report Analyzer (LLM + OCR)', tech: ['Python', 'GPT-4 API', 'React', 'PostgreSQL'] },
      { title: 'Real-Time Collaborative Code Editor', tech: ['Next.js', 'Socket.IO', 'MongoDB', 'Docker'] },
      { title: 'Automated Attendance with Face Recognition', tech: ['Python', 'DeepFace', 'Django', 'React'] },
      { title: 'Student Performance Prediction (ML)', tech: ['Python', 'Scikit-learn', 'Flask', 'React'] },
      { title: 'E-Commerce with AI Recommendations', tech: ['Next.js', 'Node.js', 'PostgreSQL', 'ML API'] },
      { title: 'Smart Exam Proctoring System', tech: ['Python', 'OpenCV', 'WebRTC', 'Django'] },
    ],
    toolchain: ['React / Next.js (Frontend)', 'Node.js / Django / FastAPI (Backend)', 'PostgreSQL / MongoDB (Database)', 'AWS / Vercel (Deployment)', 'Python + ML Libraries', 'Docker / GitHub Actions'],
    ideal: 'B.E./B.Tech CSE, IT. BCA, MCA. M.E. CSE. Students targeting software engineering placements.',
    metadata: {
      title: 'Software Development Final Year Projects Coimbatore | LearnMore Projects',
      description: 'IEEE-standard Software Development final year projects in Coimbatore — full-stack web, AI backends, mobile apps. Deployed, documented, and demo-ready.',
    },
  },
  'mechanical': {
    icon: Wrench,
    color: 'slate',
    title: 'Mechanical Engineering Projects',
    subtitle: 'CAD/CAM · FEA · Automation · Manufacturing',
    intro: 'Mechanical projects range from traditional design-and-fabricate (CAD + physical prototype) to modern mechatronics systems that integrate electronics with mechanical structures. We support CATIA, SolidWorks, and ANSYS FEA projects alongside hardware automation builds.',
    whyStrong: [
      'Physical fabricated prototypes have the highest visual impact in presentations',
      'FEA/CFD simulation projects are publishable in SCOPUS journals',
      'Mechatronics combination (Mech + Electronics) creates the most unique outcomes',
      'Applicable to automotive, manufacturing, and aerospace industries',
    ],
    topics: [
      { title: 'Automatic Waste Segregation Machine', tech: ['Sensors', 'Arduino', 'Servo', 'Fabrication'] },
      { title: 'Hydraulic Exoskeleton Arm', tech: ['Pneumatics', 'Sensors', 'SolidWorks', 'Fabrication'] },
      { title: 'FEA Analysis of Automotive Suspension', tech: ['ANSYS', 'SolidWorks', 'Material Testing'] },
      { title: 'Solar Parabolic Dish Concentrator', tech: ['SolidWorks', 'Fabrication', 'Thermocouple'] },
      { title: 'Automated Pick and Place (Pneumatic)', tech: ['PLC', 'Pneumatics', 'Conveyor', 'HMI'] },
      { title: 'CFD Analysis of Heat Exchanger', tech: ['ANSYS Fluent', 'SolidWorks', 'MATLAB'] },
    ],
    toolchain: ['CATIA V5 / SolidWorks', 'ANSYS (Structural + Fluent)', 'AutoCAD', 'MATLAB / Simulink', 'PLC Programming (Siemens / Allen-Bradley)', 'Fabrication + CNC'],
    ideal: 'B.E./B.Tech Mechanical, Mechatronics, Manufacturing. M.E. CAD/CAM, Production, Thermal.',
    metadata: {
      title: 'Mechanical Final Year Projects Coimbatore | LearnMore Projects',
      description: 'IEEE-standard Mechanical Engineering final year projects in Coimbatore — CAD/CAM, FEA, ANSYS, SolidWorks, fabrication. Full design and documentation support.',
    },
  },
};

const colorMap = {
  blue:   { bg: 'bg-blue-50',   border: 'border-blue-100',   text: 'text-blue-700',   iconBg: 'bg-blue-100',   tag: 'bg-blue-100 text-blue-700',   btn: 'bg-blue-700 hover:bg-blue-800' },
  teal:   { bg: 'bg-teal-50',   border: 'border-teal-100',   text: 'text-teal-700',   iconBg: 'bg-teal-100',   tag: 'bg-teal-100 text-teal-700',   btn: 'bg-teal-700 hover:bg-teal-800' },
  purple: { bg: 'bg-purple-50', border: 'border-purple-100', text: 'text-purple-700', iconBg: 'bg-purple-100', tag: 'bg-purple-100 text-purple-700', btn: 'bg-purple-700 hover:bg-purple-800' },
  rose:   { bg: 'bg-rose-50',   border: 'border-rose-100',   text: 'text-rose-700',   iconBg: 'bg-rose-100',   tag: 'bg-rose-100 text-rose-700',   btn: 'bg-rose-700 hover:bg-rose-800' },
  yellow: { bg: 'bg-yellow-50', border: 'border-yellow-100', text: 'text-yellow-700', iconBg: 'bg-yellow-100', tag: 'bg-yellow-100 text-yellow-700', btn: 'bg-yellow-700 hover:bg-yellow-800' },
  orange: { bg: 'bg-orange-50', border: 'border-orange-100', text: 'text-orange-700', iconBg: 'bg-orange-100', tag: 'bg-orange-100 text-orange-700', btn: 'bg-orange-700 hover:bg-orange-800' },
  indigo: { bg: 'bg-indigo-50', border: 'border-indigo-100', text: 'text-indigo-700', iconBg: 'bg-indigo-100', tag: 'bg-indigo-100 text-indigo-700', btn: 'bg-indigo-700 hover:bg-indigo-800' },
  slate:  { bg: 'bg-slate-50',  border: 'border-slate-200',  text: 'text-slate-700',  iconBg: 'bg-slate-200',  tag: 'bg-slate-200 text-slate-700',  btn: 'bg-slate-700 hover:bg-slate-800' },
};

export async function generateStaticParams() {
  return Object.keys(domainData).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const domain = domainData[params.slug];
  if (!domain) return {};
  return domain.metadata;
}

export default function DomainPage({ params }) {
  const domain = domainData[params.slug];
  if (!domain) notFound();

  const c = colorMap[domain.color];
  const Icon = domain.icon;

  return (
    <>
      {/* Header */}
      <section className="bg-gradient-to-br from-primary-950 to-primary-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/projects" className="inline-flex items-center gap-2 text-primary-300 hover:text-white text-sm font-medium mb-6 transition-colors">
            <ArrowLeft size={15} /> Back to All Projects
          </Link>
          <div className="flex items-start gap-5">
            <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center flex-shrink-0 backdrop-blur-sm">
              <Icon size={28} className="text-white" />
            </div>
            <div>
              <p className="text-primary-300 font-semibold text-sm uppercase tracking-wider mb-2">{domain.subtitle}</p>
              <h1 className="text-3xl md:text-4xl font-black text-white mb-3">{domain.title}</h1>
              <p className="text-primary-200 text-lg max-w-3xl leading-relaxed">{domain.intro}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why this domain */}
      <section className="py-12 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-black text-slate-900 text-xl mb-5">Why This Domain Scores Well</h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {domain.whyStrong.map((reason) => (
              <div key={reason} className="flex items-start gap-3 bg-slate-50 border border-slate-100 rounded-xl px-4 py-3">
                <CheckCircle2 size={16} className="text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-slate-700 text-sm leading-relaxed">{reason}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sample topics */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title mb-10">Sample Project Topics</h2>
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5">
            {domain.topics.map((topic) => (
              <div key={topic.title} className={`bg-white rounded-2xl border ${c.border} p-5 hover:shadow-lg transition-all duration-300`}>
                <h3 className="font-bold text-slate-900 text-sm leading-snug mb-3">{topic.title}</h3>
                <div className="flex flex-wrap gap-1.5">
                  {topic.tech.map((t) => (
                    <span key={t} className={`text-xs font-medium px-2.5 py-1 rounded-lg border ${c.tag} ${c.border}`}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <p className="text-slate-400 text-sm mt-6 text-center">
            These are sample topics. We customize every project to your college requirements and batch uniqueness.
          </p>
        </div>
      </section>

      {/* Toolchain + Ideal for */}
      <section className="py-14 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="font-black text-slate-900 text-xl mb-5">Tools & Technologies</h2>
              <div className="flex flex-wrap gap-2">
                {domain.toolchain.map((tool) => (
                  <span key={tool} className="bg-primary-50 text-primary-700 text-sm font-medium px-3 py-1.5 rounded-lg border border-primary-100">
                    {tool}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h2 className="font-black text-slate-900 text-xl mb-5">Who Should Pick This?</h2>
              <div className="bg-slate-50 border border-slate-100 rounded-2xl p-5">
                <p className="text-slate-600 text-sm leading-relaxed">{domain.ideal}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary-700">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-black text-white mb-4">Start Your {domain.title.split(' ')[0]} Project</h2>
          <p className="text-primary-100 text-lg mb-8">
            Tell us your college, branch, and deadline. We will recommend 3 unique topics and give you a fixed quote in 30 minutes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`https://wa.me/917550191838?text=Hi%2C%20I%27m%20interested%20in%20a%20${encodeURIComponent(domain.title)}%20at%20LearnMore%20Projects`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-white text-primary-700 font-bold text-base px-8 py-4 rounded-2xl hover:bg-primary-50 transition-colors min-h-[52px]"
            >
              <MessageCircle size={18} />
              WhatsApp for Free Consultation
            </a>
            <Link
              href="/pricing"
              className="inline-flex items-center justify-center gap-2 border-2 border-white text-white font-bold text-base px-8 py-4 rounded-2xl hover:bg-white/10 transition-colors min-h-[52px]"
            >
              View Pricing <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
