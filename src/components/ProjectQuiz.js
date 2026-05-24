'use client';

import { useState } from 'react';
import { MessageCircle, ChevronRight, RotateCcw, CheckCircle2, Sparkles } from 'lucide-react';

const steps = [
  {
    id: 'branch',
    question: 'What is your branch?',
    options: [
      { label: 'ECE / EEE', value: 'ece' },
      { label: 'CSE / IT', value: 'cse' },
      { label: 'Mechanical / Mechatronics', value: 'mech' },
      { label: 'Bio-Medical Engineering', value: 'bme' },
    ],
  },
  {
    id: 'timeline',
    question: 'How much time do you have?',
    options: [
      { label: 'Emergency — under 15 days', value: 'urgent' },
      { label: '15–30 days', value: 'standard' },
      { label: '30+ days', value: 'relaxed' },
      { label: 'Not sure yet', value: 'unknown' },
    ],
  },
  {
    id: 'budget',
    question: 'What is your approximate budget?',
    options: [
      { label: 'Under ₹5,000', value: 'low' },
      { label: '₹5,000 – ₹10,000', value: 'mid' },
      { label: '₹10,000 – ₹17,000', value: 'high' },
      { label: 'Flexible — best quality', value: 'premium' },
    ],
  },
  {
    id: 'goal',
    question: 'What is your primary goal?',
    options: [
      { label: 'Pass my viva and submit', value: 'submit' },
      { label: 'Score high marks', value: 'score' },
      { label: 'Publish IEEE paper', value: 'publish' },
      { label: 'Get placed at a company', value: 'placement' },
    ],
  },
];

function getRecommendation(answers) {
  const { branch, timeline, budget, goal } = answers;

  if (branch === 'bme') {
    return {
      domain: 'Bio-Medical Engineering',
      topic: 'Non-Invasive Patient Monitoring System',
      package: budget === 'low' ? 'Basic' : budget === 'premium' ? 'Premium' : 'Standard',
      reason: 'Bio-Medical projects are our specialty and the rarest in Coimbatore — they consistently score the highest marks in vivas and have strong patent potential.',
      domainSlug: 'bio-medical',
    };
  }

  if (branch === 'mech') {
    return {
      domain: 'Mechanical / Mechatronics',
      topic: 'Automated Conveyor System with PLC',
      package: budget === 'premium' ? 'Premium' : 'Standard',
      reason: 'Mechatronics projects combining electronics and mechanical design win Best Project awards at most technical symposiums.',
      domainSlug: 'mechanical',
    };
  }

  if (branch === 'cse') {
    if (goal === 'publish' || goal === 'placement') {
      return {
        domain: 'AI / Machine Learning',
        topic: 'AI-Powered Smart Application with ML Backend',
        package: budget === 'premium' ? 'Premium' : budget === 'high' ? 'Standard' : 'Basic',
        reason: 'AI/ML is the #1 skill companies are hiring for right now. An ML-backed project on your resume immediately differentiates you.',
        domainSlug: 'ai-ml',
      };
    }
    return {
      domain: 'Software Development',
      topic: 'Full-Stack Application with Real-World Use Case',
      package: budget === 'low' ? 'Basic' : 'Standard',
      reason: 'A deployed, portfolio-ready full-stack project is the most effective way to demonstrate software skills to recruiters.',
      domainSlug: 'software-development',
    };
  }

  // ECE / EEE
  if (goal === 'publish' || goal === 'placement') {
    return {
      domain: 'Embedded AI',
      topic: 'Edge AI System on Raspberry Pi',
      package: budget === 'premium' ? 'Premium' : 'Standard',
      reason: 'Edge AI combines embedded hardware and ML — the most sought-after combination for ECE placements at companies like Bosch, ISRO, and Qualcomm.',
      domainSlug: 'ai-ml',
    };
  }

  if (timeline === 'urgent') {
    return {
      domain: 'IoT Projects',
      topic: 'Smart Monitoring System with Cloud Dashboard',
      package: budget === 'low' ? 'Basic' : 'Standard',
      reason: 'IoT projects can be delivered in 10–15 days for urgent deadlines. A live cloud dashboard makes an immediate impression in demos.',
      domainSlug: 'iot-projects',
    };
  }

  return {
    domain: 'Embedded Systems',
    topic: 'Sensor-Based Automated Control System',
    package: budget === 'low' ? 'Basic' : budget === 'premium' ? 'Premium' : 'Standard',
    reason: 'Embedded Systems projects have the deepest hardware foundation — perfect for ECE students targeting core engineering roles.',
    domainSlug: 'embedded-systems',
  };
}

export default function ProjectQuiz() {
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState({});
  const [result, setResult] = useState(null);

  const handleSelect = (value) => {
    const step = steps[current];
    const newAnswers = { ...answers, [step.id]: value };
    setAnswers(newAnswers);

    if (current < steps.length - 1) {
      setCurrent(current + 1);
    } else {
      setResult(getRecommendation(newAnswers));
    }
  };

  const reset = () => {
    setCurrent(0);
    setAnswers({});
    setResult(null);
  };

  const packageColor = {
    Basic: 'bg-slate-100 text-slate-700',
    Standard: 'bg-primary-100 text-primary-700',
    Premium: 'bg-amber-100 text-amber-700',
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
          <p className="text-primary-200 text-xs">4 quick questions — get your personalized domain match</p>
        </div>
      </div>

      <div className="p-6 sm:p-8">
        {result ? (
          /* Result */
          <div className="animate-page-in">
            <div className="flex items-center gap-2 mb-5">
              <CheckCircle2 size={20} className="text-green-500" />
              <p className="font-bold text-slate-900 text-base">Your Personalized Recommendation</p>
            </div>

            <div className="bg-primary-50 border border-primary-100 rounded-2xl p-5 mb-5">
              <div className="flex items-start justify-between gap-3 mb-3">
                <span className="text-xs font-bold bg-primary-700 text-white px-3 py-1 rounded-full">{result.domain}</span>
                <span className={`text-xs font-bold px-3 py-1 rounded-full ${packageColor[result.package]}`}>
                  {result.package} Package
                </span>
              </div>
              <h3 className="font-black text-slate-900 text-lg mb-2">{result.topic}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{result.reason}</p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 mb-5">
              <a
                href={`https://wa.me/917550191838?text=Hi%2C%20I%20took%20the%20project%20quiz%20and%20got%20${encodeURIComponent(result.domain)}%20—%20${encodeURIComponent(result.topic)}%20(${result.package}%20Package).%20Can%20we%20discuss%3F`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 bg-primary-700 hover:bg-primary-800 text-white font-bold text-sm px-5 py-3 rounded-xl transition-colors min-h-[44px]"
              >
                <MessageCircle size={15} />
                Discuss This Recommendation
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
          /* Questions */
          <div className="animate-page-in">
            {/* Progress */}
            <div className="flex gap-1.5 mb-6">
              {steps.map((_, i) => (
                <div
                  key={i}
                  className={`h-1.5 flex-1 rounded-full transition-all duration-300 ${i <= current ? 'bg-primary-600' : 'bg-slate-100'}`}
                />
              ))}
            </div>

            <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
              Question {current + 1} of {steps.length}
            </p>
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
