import Link from 'next/link';

export const metadata = {
  title: 'Terms & Conditions | LearnMore Projects',
  description: 'Terms and Conditions for LearnMore Projects — project delivery, payments, refunds, and support.',
};

const sections = [
  {
    title: '1. Services',
    body: `LearnMore Projects provides final year engineering project development, training courses, and internship programmes for engineering students. By engaging our services, you agree to these terms.

Services include but are not limited to: project topic selection, IEEE base paper sourcing, hardware procurement, firmware/software development, documentation (report, synopsis, PPT), and viva preparation support.`,
  },
  {
    title: '2. Payment Terms',
    body: `Payment is structured as follows:

• 50% advance at the time of topic finalization
• 50% balance on project delivery (before handover of files and hardware)

We accept UPI (GPay, PhonePe, Paytm), bank transfer, and cash. No additional charges apply for UPI payments. All prices quoted are inclusive of applicable taxes unless stated otherwise.

Prices quoted are valid for 7 days from the date of quotation. Hardware price fluctuations beyond this period may result in revised quotes.`,
  },
  {
    title: '3. Delivery',
    body: `Standard delivery timeline is 25–30 days from the date of topic finalization and advance payment receipt. Rush delivery (10–15 days) is available for select projects subject to feasibility assessment.

Delivery timelines are estimates and may be affected by hardware supply delays, college specification changes, or force majeure events. We will notify you promptly if a delay is anticipated.

For students outside Coimbatore, hardware is delivered via courier. Shipping charges, if any, will be communicated in advance.`,
  },
  {
    title: '4. Project Uniqueness',
    body: `We track project topics assigned to colleges and batches. We will not assign the same project implementation to two students from the same college and academic batch.

However, we cannot guarantee uniqueness across all engineering institutions in India. Similar base topics may exist at other institutions not in our database.`,
  },
  {
    title: '5. Support and Revisions',
    body: `Post-delivery support is included as follows:

• Basic Package: 1 month WhatsApp support
• Standard Package: 3 months WhatsApp support
• Premium Package: 6 months priority support (2-hour response)

Support covers: bug fixes, minor modifications, viva preparation questions, and re-explanation of project components. Major scope changes after delivery are subject to additional charges, communicated transparently before work begins.

If your viva is rejected due to project quality issues (not academic or attendance-related reasons), we provide re-preparation support at no additional cost during your support period.`,
  },
  {
    title: '6. Intellectual Property',
    body: `Upon full payment, you receive a non-exclusive licence to use the delivered project for your academic submission. The base IEEE methodology remains the property of its original authors.

Custom hardware designs and novel software written specifically for your project are yours to use. We retain the right to list your project domain (not your name or personal details) in our portfolio for marketing purposes, unless you request otherwise in writing.`,
  },
  {
    title: '7. Refunds',
    body: `Refund requests are handled as follows:

• Before topic finalization: Full refund of any advance paid
• After topic finalization but before development starts: 75% refund of advance
• After development has begun: No refund, but we will complete the project to the agreed specification

Refunds are not applicable for dissatisfaction arising from academic rejection unrelated to the quality of our deliverables (e.g., attendance issues, college rule changes, examiner preferences unrelated to project quality).

All refund requests must be submitted in writing to info@learnmoreprojects.in within 7 days of the triggering event.`,
  },
  {
    title: '8. Student Responsibilities',
    body: `You are responsible for:

• Providing accurate college and submission requirements at the start
• Informing us promptly of any changes to submission guidelines
• Attending scheduled sessions and responding to our communication
• Handling your own academic integrity obligations with your institution

We provide engineering and documentation support. Academic decisions, submissions, and compliance with your institution's rules remain your responsibility.`,
  },
  {
    title: '9. Limitation of Liability',
    body: `Our liability in any dispute is limited to the amount paid by you for the specific project or service in question. We are not liable for:

• Academic outcomes (marks, grades, pass/fail results)
• Third-party hardware failures after the support period
• Losses arising from changes in college submission requirements after project delivery
• Indirect or consequential losses of any kind`,
  },
  {
    title: '10. Governing Law',
    body: `These Terms are governed by the laws of India. Any disputes arising from these Terms shall be subject to the exclusive jurisdiction of the courts in Coimbatore, Tamil Nadu.`,
  },
  {
    title: '11. Contact',
    body: `For any questions about these Terms, contact us at:

LearnMore Projects
202, Nehru St, Peranaidu Layout, Ram Nagar
Coimbatore, Tamil Nadu 641009

Email: info@learnmoreprojects.in
WhatsApp: +91 75501 91838`,
  },
];

export default function TermsPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-primary-950 to-primary-800 py-14">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-primary-300 font-semibold text-sm uppercase tracking-wider mb-3">Legal</p>
          <h1 className="text-4xl font-black text-white mb-3">Terms & Conditions</h1>
          <p className="text-primary-200 text-sm">Last revised: May 2025</p>
        </div>
      </section>

      <section className="py-14 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl border border-slate-100 p-6 sm:p-10">
            <p className="text-slate-600 text-base leading-relaxed mb-10">
              Please read these Terms and Conditions carefully before engaging with LearnMore Projects. By using our services, you agree to be bound by these terms.
            </p>

            <div className="space-y-10">
              {sections.map((sec) => (
                <div key={sec.title}>
                  <h2 className="font-black text-slate-900 text-lg mb-3">{sec.title}</h2>
                  <div className="text-slate-600 text-sm leading-relaxed whitespace-pre-line">{sec.body}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <Link href="/contact" className="inline-flex items-center gap-2 text-primary-700 font-semibold text-sm hover:underline">
              Contact Us with Questions
            </Link>
            <Link href="/privacy" className="inline-flex items-center gap-2 text-primary-700 font-semibold text-sm hover:underline">
              View Privacy Policy
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
