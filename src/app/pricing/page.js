import Link from 'next/link';
import { MessageCircle, ArrowRight, Clock, Package, Award, Shield } from 'lucide-react';

export const metadata = {
  title: 'Pricing | LearnMore Projects — Final Year Project Packages',
  description: 'Transparent pricing for final year projects in Coimbatore. WhatsApp us for a custom project quote tailored to your branch, budget, and deadline.',
};


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
          <h1 className="text-4xl md:text-5xl font-black text-white mb-4">Simple, Honest Pricing</h1>
          <p className="text-primary-200 text-lg max-w-2xl mx-auto leading-relaxed">
            No hidden charges. No surprises. Pricing depends on your domain, hardware complexity, and timeline — WhatsApp us for a free custom quote in minutes.
          </p>
          <a
            href="https://wa.me/917550191838?text=Hi%2C%20I%20want%20to%20know%20the%20pricing%20for%20my%20final%20year%20project%20at%20LearnMore%20Projects"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 bg-white text-primary-700 font-bold text-sm px-6 py-3 rounded-xl hover:bg-primary-50 transition-colors min-h-[44px]"
          >
            <MessageCircle size={16} /> Get a Free Quote on WhatsApp
          </a>
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
