import Link from 'next/link';
import { ArrowLeft, Clock, MessageCircle, CheckCircle2, X, ChevronRight } from 'lucide-react';

export const metadata = {
  title: 'Embedded Systems vs IoT: Which Final Year Project to Pick? | LearnMore Coimbatore',
  description:
    'Embedded Systems vs IoT for final year project — a straight comparison of hardware cost, viva complexity, placement value, and timeline. Pick the right domain for your branch. By LearnMore Projects, Coimbatore.',
  keywords:
    'embedded systems vs IoT final year project, which domain to choose final year project, embedded systems project vs IoT project, IoT vs embedded comparison, final year project domain selection, best domain for BE final year project, ECE final year project choice',
};

const comparison = [
  {
    aspect: 'Hardware Cost',
    embedded: '₹3,000 – ₹8,000',
    iot: '₹4,000 – ₹10,000',
    winner: 'embedded',
    note: 'IoT adds WiFi/4G module + cloud subscription costs.',
  },
  {
    aspect: 'Software Complexity',
    embedded: 'Firmware in C/C++, no OS needed',
    iot: 'Firmware + backend + dashboard + cloud API',
    winner: 'embedded',
    note: 'IoT requires more layers — harder to debug end-to-end.',
  },
  {
    aspect: 'Demo Impact',
    embedded: 'Physical hardware acting on sensors',
    iot: 'Live dashboard showing real-time sensor data from cloud',
    winner: 'iot',
    note: 'A live IoT dashboard is visually impressive during viva.',
  },
  {
    aspect: 'Viva Depth',
    embedded: 'Deep hardware questions — ISRs, timing, protocols',
    iot: 'Wide questions — hardware + protocols + cloud + security',
    winner: 'embedded',
    note: 'Embedded vivas are harder but more predictable. IoT has more surface area to be questioned on.',
  },
  {
    aspect: 'IEEE Publishability',
    embedded: 'Strong if novel algorithm or hardware design',
    iot: 'Very strong — IoT is a hot IEEE topic category',
    winner: 'iot',
    note: 'IoT + AI combinations have the highest IEEE acceptance rates right now.',
  },
  {
    aspect: 'Placement Value',
    embedded: 'High for automotive, defence, medical device roles',
    iot: 'High for IT, startup, smart manufacturing roles',
    winner: 'tie',
    note: 'Depends on your target industry.',
  },
  {
    aspect: 'Delivery Time',
    embedded: '20–25 days for a working prototype',
    iot: '25–35 days for full end-to-end system',
    winner: 'embedded',
    note: 'IoT integration (cloud, mobile, security) adds time.',
  },
  {
    aspect: 'Uniqueness Potential',
    embedded: 'Moderate — many similar projects exist',
    iot: 'High — AI/cloud integration makes each project unique',
    winner: 'iot',
    note: 'Adding ML to IoT immediately differentiates your project.',
  },
];

const whoPicks = [
  {
    profile: 'Pick Embedded Systems if...',
    points: [
      'You enjoy low-level programming (C, assembly, registers)',
      'Your college evaluator is from an electronics background',
      'Your budget is tight (under ₹5,000)',
      'Your deadline is under 20 days',
      'You want to target automotive, medical device, or defence jobs',
    ],
    border: 'border-primary-200',
    bg: 'bg-primary-50',
    label: 'Embedded',
    labelColor: 'bg-primary-700 text-white',
  },
  {
    profile: 'Pick IoT if...',
    points: [
      'You want a project with a live, impressive demo',
      'You are comfortable (or willing to learn) Python and basic web tools',
      'You want to publish in IEEE Xplore',
      'You are targeting software, startup, or product-company jobs',
      'You want the option to add AI/ML for extra viva value',
    ],
    border: 'border-teal-200',
    bg: 'bg-teal-50',
    label: 'IoT',
    labelColor: 'bg-teal-700 text-white',
  },
];

export default function BlogPost3() {
  return (
    <>
      {/* Header */}
      <section className="bg-gradient-to-br from-primary-950 to-primary-800 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/blog" className="inline-flex items-center gap-2 text-primary-300 hover:text-white text-sm font-medium mb-6 transition-colors">
            <ArrowLeft size={15} /> Back to Blog
          </Link>
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <span className="bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full">Comparison</span>
            <span className="text-primary-300 text-sm flex items-center gap-1"><Clock size={13} /> 5 min read</span>
            <span className="text-primary-300 text-sm">March 2025</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-black text-white mb-4 leading-tight">
            Embedded Systems vs IoT: Which Domain Should You Pick?
          </h1>
          <p className="text-primary-200 text-lg leading-relaxed">
            A straight comparison of hardware cost, viva depth, IEEE publishability, and placement value — so you make the right choice before you commit.
          </p>
        </div>
      </section>

      <section className="py-14 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl border border-slate-100 p-6 sm:p-10">

            <p className="text-slate-600 text-base leading-relaxed mb-10">
              This question comes up in almost every free consultation we do. The short answer: <strong>both are strong choices</strong>. The right one depends on your budget, deadline, target job, and how comfortable you are with the hardware. Here is the full breakdown.
            </p>

            {/* Comparison table */}
            <h2 className="font-black text-slate-900 text-xl mb-5">Head-to-Head Comparison</h2>
            <div className="overflow-x-auto mb-10">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-slate-200">
                    <th className="text-left py-3 pr-4 text-slate-400 font-semibold text-xs uppercase tracking-wider w-32">Aspect</th>
                    <th className="text-left py-3 pr-4 text-primary-700 font-bold">Embedded Systems</th>
                    <th className="text-left py-3 pr-4 text-teal-700 font-bold">IoT</th>
                    <th className="text-left py-3 text-slate-400 font-semibold text-xs uppercase tracking-wider">Winner</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-50">
                  {comparison.map((row) => (
                    <tr key={row.aspect} className="hover:bg-slate-50 transition-colors">
                      <td className="py-4 pr-4 font-semibold text-slate-700">{row.aspect}</td>
                      <td className="py-4 pr-4 text-slate-600">{row.embedded}</td>
                      <td className="py-4 pr-4 text-slate-600">{row.iot}</td>
                      <td className="py-4">
                        {row.winner === 'embedded' && <span className="bg-primary-100 text-primary-700 text-xs font-bold px-2.5 py-1 rounded-full">Embedded</span>}
                        {row.winner === 'iot' && <span className="bg-teal-100 text-teal-700 text-xs font-bold px-2.5 py-1 rounded-full">IoT</span>}
                        {row.winner === 'tie' && <span className="bg-slate-100 text-slate-600 text-xs font-bold px-2.5 py-1 rounded-full">Tie</span>}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Who should pick what */}
            <h2 className="font-black text-slate-900 text-xl mb-5">Decision Framework</h2>
            <div className="grid sm:grid-cols-2 gap-5 mb-10">
              {whoPicks.map((item) => (
                <div key={item.profile} className={`${item.bg} border ${item.border} rounded-2xl p-5`}>
                  <span className={`inline-block text-xs font-bold px-3 py-1 rounded-full mb-3 ${item.labelColor}`}>
                    {item.label}
                  </span>
                  <h3 className="font-black text-slate-900 text-base mb-3">{item.profile}</h3>
                  <ul className="space-y-2.5">
                    {item.points.map((pt, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <CheckCircle2 size={14} className="text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-slate-600 text-sm">{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="bg-slate-50 border border-slate-100 rounded-2xl p-6 mb-10">
              <h3 className="font-bold text-slate-900 text-base mb-3">The Best of Both Worlds: IoT + Embedded</h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                Most of our high-scoring projects combine both: an STM32 or ESP32 handling real-time sensor data (Embedded), feeding a cloud dashboard with ML analysis (IoT). This hybrid approach maximizes viva depth, IEEE publishability, and placement value. It is what we recommend to most B.E. ECE students with a 30-day timeline and a ₹8,000–₹12,000 budget.
              </p>
            </div>

            <div className="bg-primary-700 rounded-2xl p-6 text-center">
              <h3 className="text-white font-black text-xl mb-2">Not Sure Which to Pick?</h3>
              <p className="text-primary-200 text-sm mb-5">
                Tell us your branch, deadline, and budget — we will recommend the best topic and domain for your specific situation in 30 minutes.
              </p>
              <a
                href="https://wa.me/917550191838?text=Hi%2C%20I%20need%20help%20choosing%20between%20Embedded%20and%20IoT%20for%20my%20final%20year%20project"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white text-primary-700 font-bold text-sm px-6 py-3 rounded-xl hover:bg-primary-50 transition-colors min-h-[44px]"
              >
                <MessageCircle size={16} /> Get a Free Recommendation
              </a>
            </div>

          </div>

          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-between">
            <Link href="/blog" className="inline-flex items-center gap-2 text-primary-700 font-semibold text-sm hover:underline">
              <ArrowLeft size={15} /> Back to Blog
            </Link>
            <Link href="/projects" className="inline-flex items-center gap-2 text-primary-700 font-semibold text-sm hover:underline">
              Browse All Projects <ChevronRight size={15} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
