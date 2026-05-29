'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ChevronDown, MessageCircle } from 'lucide-react';

const categories = [
  {
    label: 'About the Project',
    faqs: [
      {
        q: 'Will I get caught for buying a final year project?',
        a: 'No. We build projects based on published IEEE research papers — the same methodology your college expects. You understand every component, can explain every design decision, and the project is unique to your batch. Thousands of students have used centers like ours and cleared their submissions without any issues.',
      },
      {
        q: 'How do I explain the project in my viva if I didn\'t build it myself?',
        a: 'This is the most common concern — and we handle it directly. We spend 2–3 sessions walking you through every part of the project: what each component does, why you chose it, and how the circuit/code works. By viva day, you genuinely understand the project. We also give you a Q&A sheet with 30–50 likely questions and model answers written in your own voice, not technical jargon.',
      },
      {
        q: 'Do you come to my college for submission or viva?',
        a: 'We do not attend vivas — but we prepare you so thoroughly that you won\'t need us there. Our viva Q&A preparation covers 30–50 likely questions with full answers. We also do a mock viva session with you before your actual date.',
      },
      {
        q: 'Will the project actually work? What if it fails during demo?',
        a: 'Every project we deliver is tested and working before handover. We test under real conditions and document test results. If something fails after delivery due to a hardware defect, we support repair or replacement at no extra cost.',
      },
      {
        q: 'Is the project unique? Will my classmate get the same project?',
        a: 'We track which topics we have given to which college and batch. We will not give the same project to two students from the same batch at the same college. Your project will have a unique implementation even if the base domain is similar.',
      },
      {
        q: 'Can 4 members of my batch share one project and split the cost?',
        a: 'Yes — most final year projects are team-based (2–4 members). We build the project as a single deliverable for your team. Each member gets separate viva preparation so everyone can present confidently. The cost is per project, not per student.',
      },
      {
        q: 'Can I make changes to the project after delivery?',
        a: 'Yes — minor modifications and bug fixes are covered under our support period (1–6 months depending on your package). Major scope changes may have an additional cost, which we discuss transparently upfront.',
      },
      {
        q: 'What if my college has a plagiarism check for the project report?',
        a: 'All project reports we write are original — not copy-pasted from the internet. We write them based on your specific implementation and reference the IEEE paper correctly. Reports consistently pass Turnitin and Urkund checks. We have never had a plagiarism rejection.',
      },
    ],
  },
  {
    label: 'Pricing & Payment',
    faqs: [
      {
        q: 'Can I pay in instalments?',
        a: '50% at topic finalization and 50% on delivery. We accept UPI (GPay, PhonePe, Paytm), bank transfer, and cash. No extra charges for UPI payments.',
      },
      {
        q: 'Why do prices vary? What determines the final cost?',
        a: 'The main variables are hardware complexity (sensor count, custom PCB vs. off-shelf), domain (Bio-Medical hardware is more expensive than a software project), and whether you need IEEE publication guidance. We give you a fixed quote before you commit — no surprises at delivery.',
      },
      {
        q: 'What is the difference between your standard and premium packages?',
        a: 'Standard includes: working hardware/software, full project report, synopsis, PPT, circuit diagrams, source code, and 30+ viva Q&A. Premium adds: IEEE paper draft ready for submission, journal selection guidance, publication fee assistance, and extended 6-month support. Both packages include mock viva preparation.',
      },
      {
        q: 'Do you give discounts for groups or referrals?',
        a: 'Yes. If you refer a friend who takes a project, you get a discount on your next project or purchase. Contact us for current referral offers.',
      },
      {
        q: 'Can I get a receipt or invoice for my payment?',
        a: 'Yes, we provide a proper invoice for all payments. If your institution or parents require a formal billing document, just let us know at the time of payment.',
      },
      {
        q: 'What if I am not satisfied with the delivery?',
        a: 'We work with you until you are satisfied. If there is a legitimate issue with the deliverables, we fix it. We have a 95%+ satisfaction rate because we set expectations clearly upfront.',
      },
    ],
  },
  {
    label: 'Process & Timeline',
    faqs: [
      {
        q: 'How long does it take to complete a project?',
        a: 'Standard delivery is 25–30 days from topic finalization. If your submission deadline is urgent, we have delivered complete projects in 10–15 days — contact us early and we will assess feasibility.',
      },
      {
        q: 'My submission is next week. Can you help?',
        a: 'Possibly — it depends on the project complexity and what you already have. WhatsApp us immediately with your deadline. We have emergency slots and can tell you honestly whether we can help within your timeline.',
      },
      {
        q: 'Do I need to visit your center or is it online?',
        a: 'Both options are available. Students in Coimbatore can visit our center at Ram Nagar for hands-on sessions. Students from other cities can do everything over WhatsApp, video call, and courier delivery for hardware.',
      },
      {
        q: 'How does hardware delivery work if I\'m outside Coimbatore?',
        a: 'We ship the completed hardware via courier (typically Speed Post or DTDC) across Tamil Nadu and all of India. Delivery takes 2–4 days after dispatch. We pack everything securely and insure high-value components. We share tracking details and are available on call when you unbox and test it.',
      },
      {
        q: 'What documentation do I get with my project?',
        a: 'Standard package includes: full project report (40–60 pages), synopsis, PowerPoint presentation, circuit/block diagrams, complete source code with comments, and 30+ viva Q&A. Premium adds IEEE paper draft and publication guidance.',
      },
      {
        q: 'Do I own the hardware after delivery? Can I keep it?',
        a: 'Yes — the hardware, components, and code are 100% yours after delivery. You can keep it, demo it at interviews, or use it for further research. We do not ask for it back.',
      },
    ],
  },
  {
    label: 'Domains & Technology',
    faqs: [
      {
        q: 'Do you support all engineering branches?',
        a: 'Yes — B.E./B.Tech (ECE, EEE, CSE, IT, Mechanical, Mechatronics, BME), M.E./M.Tech (Embedded, VLSI, Power Electronics, CSE), MCA, BCA, and Ph.D scholars. We also support diploma-level projects.',
      },
      {
        q: 'Can I suggest my own project idea?',
        a: 'Absolutely. Many students come with a concept from a research paper or industry application. We evaluate feasibility, suggest improvements, and build it. Custom projects are our specialty.',
      },
      {
        q: 'My college specified a particular software or microcontroller. Can you work with it?',
        a: 'Yes. If your department has specified a tool (e.g., MATLAB, Keil, Proteus, Arduino, Raspberry Pi) or a particular technology, tell us upfront and we will build accordingly. We work with all commonly used academic tools and platforms.',
      },
      {
        q: 'Do you do simulation-only projects or real hardware?',
        a: 'We strongly recommend hardware projects — they score better in vivas and stand out for placements. We do MATLAB Simulink, PSIM, and software simulations as well, typically for Power Electronics projects where physical hardware is impractical.',
      },
      {
        q: 'Can I use this project to apply for placements or internships?',
        a: 'Absolutely — a well-documented, working hardware project is one of the strongest things you can show in a technical interview. We help you frame the project clearly on your resume: problem statement, technologies used, outcome. Several students have landed placements at companies like Bosch, Wipro, and L&T specifically because of their project.',
      },
      {
        q: 'What makes your Bio-Medical projects special?',
        a: 'We are the only center in Coimbatore with dedicated expertise in Bio-Medical engineering projects. We source specialized sensors (NIR, ECG, SpO2, EMG), design medical-grade signal processing circuits, and have guided multiple students to patent filing for their Bio-Medical innovations.',
      },
    ],
  },
  {
    label: 'IEEE Paper & Publication',
    faqs: [
      {
        q: 'Do you help with writing and publishing an IEEE paper?',
        a: 'Yes — our premium package includes a full IEEE-format paper draft based on your project. We help you select the right journal or conference (Scopus-indexed, SCI, or IEEE Xplore), format the paper correctly, and guide you through the submission process. We have helped 200+ students get published.',
      },
      {
        q: 'Is an IEEE paper mandatory for final year submission?',
        a: 'It depends on your college and degree level. For M.E./M.Tech and some autonomous B.E. institutions, a journal publication is mandatory or earns bonus marks. For most B.E. students it is optional but highly recommended — it adds significant weight during placements and higher studies applications.',
      },
      {
        q: 'How long does it take to get an IEEE paper published?',
        a: 'Conference papers (IEEE, Springer) typically take 4–8 weeks from submission to acceptance. Journal publications (Scopus, SCI) take 2–6 months. We help you pick the right target based on your deadline. If your submission date is close, we guide you toward faster-turnaround conferences.',
      },
      {
        q: 'What is the publication fee and who pays it?',
        a: 'Most reputed journals charge a publication fee (typically ₹5,000–₹20,000 depending on the journal). This is separate from our service fee. We are transparent about these costs upfront. We can also suggest free-to-publish IEEE conference options where the fee is waived for student authors.',
      },
    ],
  },
];

function FaqItem({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-slate-100 rounded-2xl overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-start justify-between gap-4 px-6 py-5 text-left hover:bg-slate-50 transition-colors min-h-[56px]"
      >
        <span className="font-semibold text-slate-900 text-sm leading-snug">{q}</span>
        <ChevronDown
          size={18}
          className={`text-primary-600 flex-shrink-0 mt-0.5 transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
        />
      </button>
      {open && (
        <div className="px-6 pb-5 bg-white">
          <div className="h-px bg-slate-100 mb-4" />
          <p className="text-slate-600 text-sm leading-relaxed">{a}</p>
        </div>
      )}
    </div>
  );
}

export default function FaqPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-gradient-to-br from-primary-950 to-primary-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-primary-300 font-semibold text-sm uppercase tracking-wider mb-3">Got Questions?</p>
          <h1 className="text-4xl md:text-5xl font-black text-white mb-4">Frequently Asked Questions</h1>
          <p className="text-primary-200 text-lg max-w-2xl mx-auto">
            Everything students ask before they decide. If your question is not here, WhatsApp us — we reply in 30 minutes.
          </p>
        </div>
      </section>

      <section className="py-14 md:py-20 bg-slate-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {categories.map((cat) => (
            <div key={cat.label}>
              <h2 className="text-lg font-black text-slate-900 mb-5 flex items-center gap-3">
                <span className="w-1 h-6 bg-primary-600 rounded-full inline-block" />
                {cat.label}
              </h2>
              <div className="space-y-3 bg-white rounded-3xl border border-slate-100 p-4">
                {cat.faqs.map((faq) => (
                  <FaqItem key={faq.q} q={faq.q} a={faq.a} />
                ))}
              </div>
            </div>
          ))}

          {/* Still not answered */}
          <div className="bg-primary-700 rounded-3xl p-8 text-center">
            <h3 className="text-white font-black text-xl mb-3">Still have a question?</h3>
            <p className="text-primary-200 text-sm mb-6">Our team is available Mon–Sat, 9 AM – 7 PM. We reply within 30 minutes.</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="https://wa.me/917550191838?text=Hi%2C%20I%20have%20a%20question%20about%20final%20year%20projects%20at%20LearnMore%20Projects"
                target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-white text-primary-700 font-bold text-sm px-6 py-3 rounded-xl hover:bg-primary-50 transition-colors min-h-[48px]"
              >
                <MessageCircle size={16} /> Ask on WhatsApp
              </a>
              <Link href="/contact" className="inline-flex items-center justify-center gap-2 border-2 border-white text-white font-bold text-sm px-6 py-3 rounded-xl hover:bg-white/10 transition-colors min-h-[48px]">
                Contact Form
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
