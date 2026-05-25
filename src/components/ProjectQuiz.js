'use client';

import { useState } from 'react';
import { MessageCircle, ChevronRight, RotateCcw, CheckCircle2, Sparkles, ChevronLeft, ClipboardList } from 'lucide-react';

const steps = [
  {
    id: 'degree',
    question: 'What is your course / qualification?',
    options: [
      { label: 'Engineering (B.E. / B.Tech)', value: 'engineering' },
      { label: 'Arts & Science (B.Sc. / M.Sc. / MCA)', value: 'arts' },
      { label: 'Diploma', value: 'diploma' },
      { label: 'Post Graduate (M.E. / M.Tech)', value: 'me' },
      { label: 'Research (Ph.D)', value: 'phd' },
    ],
  },
  {
    id: 'branch',
    question: 'What is your branch / department?',
    options: [
      { label: 'ECE / EEE / EIE / E&I', value: 'ece' },
      { label: 'CSE / IT / AI & DS', value: 'cse' },
      { label: 'Mechanical / Mechatronics', value: 'mech' },
      { label: 'Bio-Medical Engineering', value: 'bme' },
      { label: 'M.Sc. / B.Sc. / MCA', value: 'science' },
    ],
  },
  {
    id: 'timeline',
    question: 'How much time do you have?',
    options: [
      { label: 'Emergency — under 1 week', value: 'urgent' },
      { label: '15 to 20 days', value: 'standard' },
      { label: '30+ days', value: 'relaxed' },
      { label: 'Not sure yet', value: 'unknown' },
    ],
  },
  {
    id: 'budget',
    question: 'What is your approximate budget?',
    options: [
      { label: 'Under ₹3,000', value: 'low' },
      { label: '₹5,000 – ₹10,000', value: 'mid' },
      { label: '₹8,000 – ₹12,000', value: 'high' },
      { label: 'Flexible — best quality', value: 'premium' },
    ],
  },
  {
    id: 'goal',
    question: 'What is your primary goal?',
    options: [
      { label: 'Pass exam — submit report & project', value: 'submit' },
      { label: 'Score high marks', value: 'score' },
      { label: 'Publish IEEE paper', value: 'publish' },
      { label: 'Get placed in an IT / Core company', value: 'placement' },
    ],
  },
];

const stepLabels = {
  degree: 'Course',
  branch: 'Branch',
  timeline: 'Timeline',
  budget: 'Budget',
  goal: 'Goal',
};

function getOptionLabel(stepId, value) {
  const step = steps.find((s) => s.id === stepId);
  if (!step) return value;
  const opt = step.options.find((o) => o.value === value);
  return opt ? opt.label : value;
}

function getRecommendation(answers) {
  const { degree, branch, timeline, budget, goal } = answers;

  if (branch === 'bme') {
    return {
      domain: 'Bio-Medical Engineering',
      topic: 'Non-Invasive Patient Monitoring System',
      reason: 'Bio-Medical projects are our specialty and the rarest in Coimbatore — they consistently score the highest marks in vivas and have strong patent potential.',
      domainSlug: 'bio-medical',
    };
  }

  if (branch === 'mech') {
    return {
      domain: 'Mechanical / Mechatronics',
      topic: 'Automated Conveyor System with PLC',
      reason: 'Mechatronics projects combining electronics and mechanical design win Best Project awards at most technical symposiums.',
      domainSlug: 'mechanical',
    };
  }

  if (branch === 'science') {
    if (goal === 'publish' || goal === 'placement') {
      return {
        domain: 'AI / Machine Learning',
        topic: 'AI-Powered Data Analytics Application',
        reason: 'AI/ML projects are ideal for M.Sc. and MCA students — high value for publications and IT placements.',
        domainSlug: 'ai-ml',
      };
    }
    return {
      domain: 'Software Development',
      topic: 'Full-Stack Web Application with Real-World Use Case',
      reason: 'A deployed, portfolio-ready full-stack project is the most effective way to demonstrate software skills to recruiters.',
      domainSlug: 'software-development',
    };
  }

  if (branch === 'cse') {
    if (goal === 'publish' || goal === 'placement') {
      return {
        domain: 'AI / Machine Learning',
        topic: 'AI-Powered Smart Application with ML Backend',
        reason: 'AI/ML is the #1 skill companies are hiring for right now. An ML-backed project on your resume immediately differentiates you.',
        domainSlug: 'ai-ml',
      };
    }
    return {
      domain: 'Software Development',
      topic: 'Full-Stack Application with Real-World Use Case',
      reason: 'A deployed, portfolio-ready full-stack project is the most effective way to demonstrate software skills to recruiters.',
      domainSlug: 'software-development',
    };
  }

  // ECE / EEE
  if (goal === 'publish' || goal === 'placement') {
    return {
      domain: 'Embedded AI',
      topic: 'Edge AI System on Raspberry Pi',
      reason: 'Edge AI combines embedded hardware and ML — the most sought-after combination for ECE placements at companies like Bosch, ISRO, and Qualcomm.',
      domainSlug: 'ai-ml',
    };
  }

  if (timeline === 'urgent') {
    return {
      domain: 'IoT Projects',
      topic: 'Smart Monitoring System with Cloud Dashboard',
      reason: 'IoT projects can be delivered in 10–15 days for urgent deadlines. A live cloud dashboard makes an immediate impression in demos.',
      domainSlug: 'iot-projects',
    };
  }

  return {
    domain: 'Embedded Systems',
    topic: 'Sensor-Based Automated Control System',
    reason: 'Embedded Systems projects have the deepest hardware foundation — perfect for ECE students targeting core engineering roles.',
    domainSlug: 'embedded-systems',
  };
}

function buildWhatsAppMessage(answers, result) {
  const lines = [
    'Hi, I took the Project Recommendation Quiz at LearnMore Projects and here are my details:',
    '',
    `📚 Course: ${getOptionLabel('degree', answers.degree)}`,
    `🏫 Branch: ${getOptionLabel('branch', answers.branch)}`,
    `⏱ Timeline: ${getOptionLabel('timeline', answers.timeline)}`,
    `💰 Budget: ${getOptionLabel('budget', answers.budget)}`,
    `🎯 Goal: ${getOptionLabel('goal', answers.goal)}`,
    '',
    `✅ Recommended Domain: ${result.domain}`,
    `📌 Suggested Topic: ${result.topic}`,
    '',
    'Can we discuss this recommendation?',
  ];
  return encodeURIComponent(lines.join('\n'));
}

export default function ProjectQuiz() {
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState({});
  const [result, setResult] = useState(null);
  const [showVerify, setShowVerify] = useState(false);

  const handleSelect = (value) => {
    const step = steps[current];
    const newAnswers = { ...answers, [step.id]: value };
    setAnswers(newAnswers);

    if (current < steps.length - 1) {
      setCurrent(current + 1);
    } else {
      // All questions answered — show verification screen
      const rec = getRecommendation(newAnswers);
      setResult(rec);
      setShowVerify(true);
    }
  };

  const handleBack = () => {
    if (showVerify) {
      setShowVerify(false);
      return;
    }
    if (current > 0) {
      setCurrent(current - 1);
    }
  };

  const reset = () => {
    setCurrent(0);
    setAnswers({});
    setResult(null);
    setShowVerify(false);
  };

  return (
    <div className="bg-white rounded-3xl border border-slate-100 shadow-xl shadow-primary-100/20 overflow-hidden max-w-2xl mx-auto">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary-700 to-primary-600 px-6 py-5 flex items-center gap-3">
        <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center">
          <Sparkles size={18} className="text-white" />
        </div>
        <div>
          <p className="text-white font-black text-base">Project Recommendation Quiz</p>
          <p className="text-primary-200 text-xs">5 quick questions — get your personalized domain match</p>
        </div>
      </div>

      <div className="p-6 sm:p-8">
        {showVerify && result ? (
          /* ── VERIFICATION / SUMMARY SCREEN ── */
          <div className="animate-page-in">
            <div className="flex items-center gap-2 mb-5">
              <ClipboardList size={20} className="text-primary-600" />
              <p className="font-bold text-slate-900 text-base">Review Your Answers</p>
            </div>

            {/* Answers summary */}
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 mb-5 space-y-3">
              {steps.map((step) => (
                <div key={step.id} className="flex items-start justify-between gap-4">
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-wider w-20 flex-shrink-0 pt-0.5">
                    {stepLabels[step.id]}
                  </span>
                  <span className="text-sm font-semibold text-slate-800 text-right">
                    {getOptionLabel(step.id, answers[step.id])}
                  </span>
                </div>
              ))}
            </div>

            {/* Recommendation */}
            <div className="bg-primary-50 border border-primary-100 rounded-2xl p-5 mb-5">
              <p className="text-xs font-bold text-primary-600 uppercase tracking-wider mb-2">Our Recommendation</p>
              <p className="font-black text-slate-900 text-lg mb-1">{result.domain}</p>
              <p className="text-sm font-semibold text-primary-700 mb-3">📌 {result.topic}</p>
              <p className="text-slate-500 text-sm leading-relaxed">{result.reason}</p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 mb-5">
              <a
                href={`https://wa.me/917550191838?text=${buildWhatsAppMessage(answers, result)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 bg-primary-700 hover:bg-primary-800 text-white font-bold text-sm px-5 py-3 rounded-xl transition-colors min-h-[44px]"
              >
                <MessageCircle size={15} />
                Discuss This on WhatsApp
              </a>
              <button
                onClick={reset}
                className="inline-flex items-center justify-center gap-2 border border-slate-200 text-slate-600 font-medium text-sm px-5 py-3 rounded-xl hover:bg-slate-50 transition-colors min-h-[44px]"
              >
                <RotateCcw size={14} />
                Retake Quiz
              </button>
            </div>

            <p className="text-xs text-slate-400 text-center">
              This is an automated recommendation. WhatsApp us for a personalized consultation based on your exact college and deadline.
            </p>
          </div>
        ) : (
          /* ── QUESTION SCREEN ── */
          <div className="animate-page-in">
            {/* Progress bar */}
            <div className="flex gap-1.5 mb-6">
              {steps.map((_, i) => (
                <div
                  key={i}
                  className={`h-1.5 flex-1 rounded-full transition-all duration-300 ${i <= current ? 'bg-primary-600' : 'bg-slate-100'}`}
                />
              ))}
            </div>

            <div className="flex items-center justify-between mb-6">
              <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                Question {current + 1} of {steps.length}
              </p>
              {current > 0 && (
                <button
                  onClick={handleBack}
                  className="inline-flex items-center gap-1 text-xs font-semibold text-slate-500 hover:text-primary-700 transition-colors"
                >
                  <ChevronLeft size={14} /> Back
                </button>
              )}
            </div>

            <h3 className="font-black text-slate-900 text-xl mb-6">{steps[current].question}</h3>

            <div className="space-y-3">
              {steps[current].options.map((opt) => (
                <button
                  key={opt.value}
                  onClick={() => handleSelect(opt.value)}
                  className="w-full flex items-center justify-between gap-3 text-left border border-slate-200 rounded-xl px-5 py-4 text-slate-700 font-medium text-sm hover:border-primary-400 hover:bg-primary-50 hover:text-primary-700 transition-all duration-150 min-h-[52px] group"
                >
                  {opt.label}
                  <ChevronRight size={16} className="text-slate-300 group-hover:text-primary-500 flex-shrink-0 transition-colors" />
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
