import Link from 'next/link';
import { ArrowLeft, Clock, MessageCircle, CheckCircle2, ChevronRight, AlertCircle } from 'lucide-react';

export const metadata = {
  title: 'How to Clear Final Year Viva Without Panicking | LearnMore Projects Coimbatore',
  description:
    'The 30 most common final year viva questions with model answers — tested by 7000+ students. Tips for hardware (Embedded, IoT) and software projects. Viva preparation guide by LearnMore Projects, Coimbatore.',
  keywords:
    'how to clear final year viva, final year viva questions answers, viva preparation tips, viva questions embedded systems, viva questions IoT project, project viva guide, how to answer viva questions, engineering viva preparation coimbatore',
};

const sections = [
  {
    title: 'About Your Project',
    questions: [
      {
        q: 'Explain your project in one sentence.',
        a: 'State: what it does, what it uses, and who benefits. Example: "This system detects defects in PCBs in real time using a MobileNet model deployed on Raspberry Pi 4, eliminating manual quality inspection."',
      },
      {
        q: 'What is the objective of your project?',
        a: 'List 3–4 specific, measurable objectives. Not "to build an IoT system" but "to monitor soil NPK levels and automate irrigation with <5% false trigger rate."',
      },
      {
        q: 'What problem does your project solve?',
        a: 'Frame it as: current problem + your solution + impact. "Current glucose monitoring is invasive — our NIR-based system eliminates needle pricks, improving patient compliance."',
      },
      {
        q: 'What is the scope of your project?',
        a: 'Scope = what is included + what is not. "The scope includes real-time sensor data acquisition, edge inference, and cloud logging. It does not include mobile app development."',
      },
    ],
  },
  {
    title: 'Technical Questions',
    questions: [
      {
        q: 'Why did you choose this microcontroller / processor?',
        a: 'Compare it to one alternative. "We chose STM32F4 over Arduino Mega because it has a hardware FPU for signal processing, 168 MHz clock speed, and multiple SPI/I2C peripherals natively."',
      },
      {
        q: 'What is the communication protocol you used and why?',
        a: 'Name the protocol, explain its advantages in context. "We used MQTT over HTTP because MQTT is lightweight (2-byte header), supports publish-subscribe for multiple subscribers, and works well on low-bandwidth networks."',
      },
      {
        q: 'What is the accuracy of your model / system?',
        a: 'Give a number — then explain how you measured it. "Our model achieved 94.3% accuracy on a 500-image test set. We used an 80/10/10 train/val/test split."',
      },
      {
        q: 'How did you test the project?',
        a: 'Mention unit testing, integration testing, and the conditions under which you tested. "We tested each sensor module individually, then ran full-system tests under 3 lighting conditions and 5 temperature settings."',
      },
    ],
  },
  {
    title: 'IEEE Paper Questions',
    questions: [
      {
        q: 'What is the base paper for your project?',
        a: 'State the title, authors, journal, and year. "Our base paper is \'Edge-AI Based Defect Detection System Using MobileNetV2\' by Zhang et al., IEEE Access, 2023."',
      },
      {
        q: 'How is your implementation different from the base paper?',
        a: 'Your differentiation is crucial. "The paper used a GPU server; we deployed the quantized model on Raspberry Pi 4 using TFLite — achieving 15 FPS on-device with no cloud dependency."',
      },
      {
        q: 'What are the limitations of your project?',
        a: 'Be honest and specific. "The model struggles with specular reflections on metallic surfaces and requires controlled lighting. A future improvement would include polarized illumination."',
      },
      {
        q: 'What future work can be done on this?',
        a: 'Suggest 2–3 concrete improvements. "Future work includes adding a 6-DOF robotic arm for auto-reject, expanding the dataset to 5,000+ images, and testing on NVIDIA Jetson for faster inference."',
      },
    ],
  },
  {
    title: 'Panic Questions',
    questions: [
      {
        q: 'Did you build this yourself?',
        a: '"Yes — our team worked on this project from topic selection to final testing. I handled [your specific part], and I can walk you through any part of the implementation."',
      },
      {
        q: 'Why is this output wrong / inconsistent?',
        a: 'Never say "I don\'t know." Say: "That could be due to [sensor noise / lighting variation / model drift]. In our tests, we observed this under [specific condition] and mitigated it by [approach]."',
      },
      {
        q: 'What is the cost of your project?',
        a: 'Know your BOM. Break it down: "Hardware: ₹4,200 (sensors ₹1,800, MCU ₹1,200, PCB ₹1,200). Software: open source. Total: ₹4,200."',
      },
      {
        q: 'Can this be commercialized?',
        a: '"Yes — with minor modifications. The target market is [manufacturing / agriculture / healthcare]. We estimated a unit cost of ₹X at 1,000-unit production scale, making it viable for SMEs."',
      },
    ],
  },
];

const rules = [
  'Know your block diagram cold — draw it on the whiteboard if asked.',
  'Understand every component in your circuit. "I don\'t know what this does" is an instant mark deduction.',
  'Prepare a 2-minute project summary. Practice it until it sounds natural.',
  'Do at least one mock viva with a friend who has no idea what your project does.',
  'Bring your test results — actual numbers, not "it worked fine."',
  'If the demo fails: stay calm, explain what it does when working, and describe the likely failure mode professionally.',
];

export default function BlogPost2() {
  return (
    <>
      {/* Header */}
      <section className="bg-gradient-to-br from-primary-950 to-primary-800 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/blog" className="inline-flex items-center gap-2 text-primary-300 hover:text-white text-sm font-medium mb-6 transition-colors">
            <ArrowLeft size={15} /> Back to Blog
          </Link>
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <span className="bg-green-600 text-white text-xs font-bold px-3 py-1 rounded-full">Viva Prep</span>
            <span className="text-primary-300 text-sm flex items-center gap-1"><Clock size={13} /> 6 min read</span>
            <span className="text-primary-300 text-sm">April 2025</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-black text-white mb-4 leading-tight">
            How to Clear Your Final Year Viva Without Panicking
          </h1>
          <p className="text-primary-200 text-lg leading-relaxed">
            The 30 questions every evaluator asks — and how to answer them confidently. Tested across 7,000+ vivas at Anna University-affiliated colleges.
          </p>
        </div>
      </section>

      <section className="py-14 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl border border-slate-100 p-6 sm:p-10">

            <div className="bg-amber-50 border border-amber-200 rounded-2xl p-5 mb-10 flex gap-3">
              <AlertCircle size={18} className="text-amber-600 flex-shrink-0 mt-0.5" />
              <p className="text-amber-800 text-sm leading-relaxed">
                <strong>The truth about vivas:</strong> Evaluators are not trying to fail you. They are checking that you understand what you submitted. If you know your project well enough to explain every component, protocol, and result, you will pass — even if the demo glitches.
              </p>
            </div>

            {/* The 6 rules */}
            <div className="mb-10">
              <h2 className="font-black text-slate-900 text-xl mb-5">6 Rules Before Your Viva</h2>
              <ul className="space-y-3">
                {rules.map((rule, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 size={16} className="text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-600 text-sm leading-relaxed">{rule}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Q&A sections */}
            <div className="space-y-10">
              {sections.map((section) => (
                <div key={section.title}>
                  <h2 className="font-black text-slate-900 text-xl mb-5 flex items-center gap-3">
                    <span className="w-1 h-6 bg-primary-600 rounded-full inline-block" />
                    {section.title}
                  </h2>
                  <div className="space-y-4">
                    {section.questions.map((qa, i) => (
                      <div key={i} className="border border-slate-100 rounded-2xl p-5">
                        <p className="font-bold text-slate-900 text-sm mb-2">Q: {qa.q}</p>
                        <p className="text-slate-500 text-sm leading-relaxed"><span className="font-semibold text-slate-700">A:</span> {qa.a}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 bg-primary-700 rounded-2xl p-6 text-center">
              <h3 className="text-white font-black text-xl mb-2">We Prepare You for Every Question</h3>
              <p className="text-primary-200 text-sm mb-5">
                Our Standard and Premium packages include 30+ viva Q&A specific to your project and a mock viva session before your actual date.
              </p>
              <a
                href="https://wa.me/917550191838?text=Hi%2C%20I%20need%20viva%20preparation%20support%20for%20my%20final%20year%20project"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white text-primary-700 font-bold text-sm px-6 py-3 rounded-xl hover:bg-primary-50 transition-colors min-h-[44px]"
              >
                <MessageCircle size={16} /> Get Viva Preparation Support
              </a>
            </div>

          </div>

          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-between">
            <Link href="/blog" className="inline-flex items-center gap-2 text-primary-700 font-semibold text-sm hover:underline">
              <ArrowLeft size={15} /> Back to Blog
            </Link>
            <Link href="/pricing" className="inline-flex items-center gap-2 text-primary-700 font-semibold text-sm hover:underline">
              View Package Details <ChevronRight size={15} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
