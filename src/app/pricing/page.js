import Link from 'next/link';
import { CheckCircle2, X, MessageCircle, ArrowRight, Clock, Package, Award, Shield } from 'lucide-react';

export const metadata = {
  title: 'Pricing | LearnMore Projects — Final Year Project Packages',
  description: 'Transparent pricing for final year projects in Coimbatore. Basic, Standard, and Premium IEEE project packages starting from ₹4,999.',
};

const tiers = [
  {
    name: 'Basic',
    subtitle: 'Code & Report',
    price: '4,999',
    badge: null,
    color: 'border-slate-200',
    headerBg: 'bg-slate-50',
    btnClass: 'bg-slate-800 hover:bg-slate-900 text-white',
    includes: [
      'Complete source code (commented)',
      'Circuit / block diagram',
      'Basic project report (20–30 pages)',
      'PowerPoint presentation',
      '1 month WhatsApp support',
    ],
    excludes: [
      'Hardware components',
      'PCB / working prototype',
      'IEEE base paper',
      'Viva Q&A preparation',
      'Publication guidance',
    ],
    ideal: 'Students who already have hardware or need software only.',
  },
  {
    name: 'Standard',
    subtitle: 'Full Project Kit',
    price: '9,999',
    badge: 'Most Popular',
    color: 'border-primary-500 ring-2 ring-primary-200',
    headerBg: 'bg-primary-700',
    headerText: 'text-white',
    btnClass: 'bg-primary-700 hover:bg-primary-800 text-white shadow-lg shadow-primary-700/30',
    includes: [
      'Everything in Basic',
      'Hardware components kit',
      'Working prototype / PCB',
      'IEEE base paper sourced & explained',
      'Full project report (40–60 pages)',
      'Synopsys & viva Q&A (30+ questions)',
      '3 months WhatsApp support',
      'Live demo session',
    ],
    excludes: [
      'IEEE Xplore publication',
      'Patent filing guidance',
    ],
    ideal: 'Most final year students — complete project with hardware, code, and full documentation.',
  },
  {
    name: 'Premium',
    subtitle: 'IEEE Research Grade',
    price: '16,999',
    badge: 'Best Results',
    color: 'border-slate-800',
    headerBg: 'bg-slate-900',
    headerText: 'text-white',
    btnClass: 'bg-slate-900 hover:bg-slate-950 text-white',
    includes: [
      'Everything in Standard',
      'Novel IEEE paper + publication guidance',
      'SCOPUS / Springer indexing support',
      'Patent filing guidance',
      'Advanced hardware with custom PCB',
      'Conference paper preparation',
      '6 months WhatsApp support',
      'Placement & internship referral',
      'Priority support (2-hour response)',
    ],
    excludes: [],
    ideal: 'M.E. / M.Tech / Ph.D students, SIH participants, and ambitious undergrads targeting placements.',
  },
];

const timeline = [
  { day: 'Day 1–2',   title: 'Free Consultation',      desc: 'We understand your branch, year, and institution requirements. Topic shortlisted.' },
  { day: 'Day 3–5',   title: 'Topic Finalized',         desc: 'IEEE base paper sourced, project scope confirmed, payment done.' },
  { day: 'Day 6–12',  title: 'Design & Hardware',       desc: 'Circuit design reviewed, hardware procured, development starts.' },
  { day: 'Day 13–22', title: 'Build & Code',            desc: 'Hardware assembled, firmware / software written, integration tested.' },
  { day: 'Day 23–27', title: 'Testing & Docs',          desc: 'Full system tested, report written, PPT made, viva Q&A prepared.' },
  { day: 'Day 28–30', title: 'Handover',                desc: 'Working prototype + all documents delivered. Viva walkthrough session done.' },
];

const faqs = [
  { q: 'Can I pay in instalments?',              a: 'Yes — 50% at the time of topic finalization and 50% on delivery. We also accept UPI, bank transfer, and cash.' },
  { q: 'What if I fail my viva?',                a: 'We support you through re-viva at no extra cost. Our viva Q&A preparation covers every likely question.' },
  { q: 'Is this available for all colleges?',   a: 'Yes. We serve students from all Anna University affiliated colleges, IITs, NITs, and private engineering colleges across Tamil Nadu.' },
  { q: 'How long does delivery take?',          a: 'Standard delivery is 25–30 days. If your submission is urgent, contact us — we have done emergency projects in 10–15 days.' },
];

export default function PricingPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-gradient-to-br from-primary-950 to-primary-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-primary-300 font-semibold text-sm uppercase tracking-wider mb-3">Transparent Pricing</p>
          <h1 className="text-4xl md:text-5xl font-black text-white mb-4">Simple, Honest Packages</h1>
          <p className="text-primary-200 text-lg max-w-2xl mx-auto leading-relaxed">
            No hidden charges. No surprises. Pick the package that fits your needs — or WhatsApp us for a custom quote.
          </p>
        </div>
      </section>

      {/* Pricing tiers */}
      <section className="py-14 md:py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
            {tiers.map((tier) => (
              <div key={tier.name} className={`relative bg-white rounded-3xl border ${tier.color} overflow-hidden flex flex-col`}>
                {tier.badge && (
                  <div className="absolute top-4 right-4 z-10 bg-primary-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow">
                    {tier.badge}
                  </div>
                )}

                {/* Header */}
                <div className={`${tier.headerBg} p-6 pb-8`}>
                  <p className={`font-black text-2xl ${tier.headerText ?? 'text-slate-900'}`}>{tier.name}</p>
                  <p className={`text-sm font-medium mt-0.5 ${tier.headerText ? 'text-white/70' : 'text-slate-500'}`}>{tier.subtitle}</p>
                  <div className="mt-5 flex items-end gap-1">
                    <span className={`text-xs font-semibold ${tier.headerText ? 'text-white/70' : 'text-slate-400'}`}>Starting from</span>
                  </div>
                  <div className="flex items-baseline gap-1 mt-1">
                    <span className={`text-4xl font-black ${tier.headerText ?? 'text-slate-900'}`}>₹{tier.price}</span>
                  </div>
                  <p className={`text-xs mt-2 ${tier.headerText ? 'text-white/60' : 'text-slate-400'}`}>Final price depends on hardware complexity</p>
                </div>

                {/* Body */}
                <div className="p-6 flex flex-col flex-1">
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4">What's included</p>
                  <ul className="space-y-2.5 mb-6 flex-1">
                    {tier.includes.map((item) => (
                      <li key={item} className="flex items-start gap-2.5">
                        <CheckCircle2 size={15} className="text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-slate-700 text-sm">{item}</span>
                      </li>
                    ))}
                    {tier.excludes.map((item) => (
                      <li key={item} className="flex items-start gap-2.5 opacity-40">
                        <X size={15} className="text-slate-400 mt-0.5 flex-shrink-0" />
                        <span className="text-slate-500 text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>

                  {tier.ideal && (
                    <div className="bg-slate-50 rounded-xl p-3 mb-5 border border-slate-100">
                      <p className="text-xs text-slate-500 leading-relaxed"><span className="font-semibold text-slate-700">Ideal for:</span> {tier.ideal}</p>
                    </div>
                  )}

                  <a
                    href={`https://wa.me/917550191838?text=Hi%2C%20I%27m%20interested%20in%20the%20${encodeURIComponent(tier.name)}%20package%20at%20LearnMore%20Projects`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full flex items-center justify-center gap-2 font-bold text-sm px-5 py-3.5 rounded-xl transition-all duration-200 min-h-[48px] ${tier.btnClass}`}
                  >
                    <MessageCircle size={16} />
                    Get {tier.name} Package
                  </a>
                </div>
              </div>
            ))}
          </div>

          <p className="text-center text-slate-400 text-sm mt-8">
            Not sure which to pick?{' '}
            <a href="https://wa.me/917550191838?text=Hi%2C%20I%20need%20help%20choosing%20a%20package%20at%20LearnMore%20Projects" target="_blank" rel="noopener noreferrer" className="text-primary-700 font-semibold hover:underline">
              WhatsApp us and we'll recommend the right one for you.
            </a>
          </p>
        </div>
      </section>

      {/* Delivery timeline */}
      <section className="py-14 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="section-label">Timeline</span>
            <h2 className="section-title">From Enquiry to Submission in 30 Days</h2>
            <p className="section-subtitle mx-auto text-center">
              Rushing to submit? Even urgent projects delivered in 10–15 days. Here's exactly what happens and when.
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-[72px] sm:left-[88px] top-5 bottom-5 w-0.5 bg-gradient-to-b from-primary-600 via-primary-400 to-primary-200 hidden sm:block" />
            <div className="space-y-5">
              {timeline.map((step, i) => (
                <div key={step.day} className="flex items-start gap-4 sm:gap-6">
                  <div className="flex-shrink-0 w-16 sm:w-20 text-right">
                    <span className="text-xs font-bold text-primary-600 leading-tight block">{step.day}</span>
                  </div>
                  <div className="relative flex-shrink-0 hidden sm:block">
                    <div className="w-4 h-4 rounded-full bg-primary-600 border-4 border-white shadow mt-0.5" />
                  </div>
                  <div className="bg-slate-50 border border-slate-100 rounded-2xl px-5 py-4 flex-1">
                    <p className="font-bold text-slate-900 text-sm mb-1">{step.title}</p>
                    <p className="text-slate-500 text-sm leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What's always included */}
      <section className="py-14 bg-slate-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title text-center mb-10">Every Package Includes</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { icon: Clock,   title: 'Fast Delivery',       desc: 'Standard 30-day delivery. Rush delivery available on request.' },
              { icon: Shield,  title: 'Viva Support',        desc: 'We prepare you for every question your evaluator might ask.' },
              { icon: Package, title: 'Everything Packaged', desc: 'Code, report, PPT, circuit diagrams — all in one delivery.' },
              { icon: Award,   title: 'Quality Guarantee',   desc: 'If your viva is rejected, we support re-preparation at no cost.' },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-2xl border border-slate-100 p-6 text-center">
                <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <item.icon size={20} className="text-primary-700" />
                </div>
                <h3 className="font-bold text-slate-900 text-sm mb-2">{item.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing FAQs */}
      <section className="py-14 md:py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title text-center mb-10">Pricing Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <div key={faq.q} className="bg-slate-50 border border-slate-100 rounded-2xl p-6">
                <p className="font-bold text-slate-900 text-sm mb-2">{faq.q}</p>
                <p className="text-slate-500 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/faq" className="btn-outline text-sm">
              See all FAQs <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary-700">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-black text-white mb-4">Still Have Questions?</h2>
          <p className="text-primary-100 text-lg mb-8">WhatsApp us — we'll reply within 30 minutes and help you pick the right package.</p>
          <a
            href="https://wa.me/917550191838?text=Hi%2C%20I%20want%20to%20know%20more%20about%20your%20pricing%20at%20LearnMore%20Projects"
            target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-primary-700 font-bold text-base px-8 py-4 rounded-2xl hover:bg-primary-50 transition-colors min-h-[52px]"
          >
            <MessageCircle size={18} /> WhatsApp for Custom Quote
          </a>
        </div>
      </section>
    </>
  );
}
