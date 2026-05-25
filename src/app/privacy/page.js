import Link from 'next/link';

export const metadata = {
  title: 'Privacy Policy | LearnMore Projects',
  description: 'Privacy Policy for LearnMore Projects — how we collect, use, and protect your information.',
};

const sections = [
  {
    title: '1. Information We Collect',
    body: `When you contact us through WhatsApp, our contact form, or phone, we collect the following information you voluntarily provide:

• Full name
• Phone number / WhatsApp number
• Email address (optional)
• College name and branch
• Project requirements and messages

We do not collect payment card details. Payments are processed directly via UPI apps (GPay, PhonePe, Paytm) or bank transfer — we have no access to your banking credentials.`,
  },
  {
    title: '2. How We Use Your Information',
    body: `We use the information you provide solely to:

• Respond to your project or course enquiries
• Send you project proposals, quotes, and updates related to your order
• Coordinate project delivery and support
• Send occasional updates about new courses or offers (you may opt out at any time)

We do not sell, rent, or share your personal information with any third party for marketing purposes.`,
  },
  {
    title: '3. WhatsApp Communication',
    body: `Our primary communication channel is WhatsApp (+91 75501 91838). When you initiate contact via WhatsApp, your messages are subject to WhatsApp's own Privacy Policy. We retain WhatsApp conversations for project coordination and support purposes.

You may request deletion of your conversation data by messaging us directly on WhatsApp or emailing info@learnmoreprojects.in.`,
  },
  {
    title: '4. Data Storage and Security',
    body: `Your contact information is stored securely and accessed only by LearnMore Projects staff involved in your project. We take reasonable technical and organisational measures to protect your data against unauthorised access, loss, or misuse.

This website does not use cookies for tracking or advertising. Basic server logs may record IP addresses for security purposes.`,
  },
  {
    title: '5. Third-Party Services',
    body: `This website uses the following third-party services:

• Google Maps (for location display on our Contact page) — subject to Google's Privacy Policy
• Google Fonts (Inter typeface, loaded via Google's CDN)
• WhatsApp (for customer communication) — subject to Meta's Privacy Policy

We do not use Google Analytics, Facebook Pixel, or any advertising trackers on this website.`,
  },
  {
    title: '6. Your Rights',
    body: `You have the right to:

• Request access to the personal data we hold about you
• Request correction of inaccurate data
• Request deletion of your data (subject to any ongoing contractual obligations)
• Withdraw consent for marketing communications at any time

To exercise any of these rights, contact us at info@learnmoreprojects.in or WhatsApp +91 75501 91838.`,
  },
  {
    title: '7. Children\'s Privacy',
    body: `Our services are intended for college students (typically 18 years and older). We do not knowingly collect personal information from individuals under the age of 16. If you believe a minor has shared information with us, please contact us and we will delete it promptly.`,
  },
  {
    title: '8. Changes to This Policy',
    body: `We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated "Last revised" date. Continued use of our services after changes constitutes acceptance of the revised policy.`,
  },
  {
    title: '9. Contact Us',
    body: `For any privacy-related questions or requests:

LearnMore Projects
202, Nehru St, Peranaidu Layout, Ram Nagar
Coimbatore, Tamil Nadu 641009

Email: info@learnmoreprojects.in
WhatsApp: +91 75501 91838
Working hours: Mon–Sat, 9 AM – 7 PM`,
  },
];

export default function PrivacyPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-primary-950 to-primary-800 py-14">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-primary-300 font-semibold text-sm uppercase tracking-wider mb-3">Legal</p>
          <h1 className="text-4xl font-black text-white mb-3">Privacy Policy</h1>
          <p className="text-primary-200 text-sm">Last revised: May 2025</p>
        </div>
      </section>

      <section className="py-14 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl border border-slate-100 p-6 sm:p-10">
            <p className="text-slate-600 text-base leading-relaxed mb-10">
              LearnMore Projects ("we", "us", "our") is committed to protecting your privacy. This policy explains what information we collect when you use our website or contact us, how we use it, and your rights regarding that information.
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
            <Link href="/terms" className="inline-flex items-center gap-2 text-primary-700 font-semibold text-sm hover:underline">
              View Terms & Conditions
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
