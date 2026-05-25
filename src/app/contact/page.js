'use client';

import { useState } from 'react';
import { Phone, Mail, MapPin, MessageCircle, Clock, CheckCircle2 } from 'lucide-react';

const domains = [
  'Embedded Systems', 'IoT Projects', 'AI / Machine Learning',
  'Robotics', 'Bio-Medical', 'Power Electronics', 'Mechanical', 'Software Development', 'Other',
];

const programs = [
  'Final Year Project', 'Internship', 'Certified Course', 'R&D / Institutional', 'Other',
];

export default function ContactPage() {
  const [form, setForm] = useState({
    name: '', email: '', phone: '', college: '', branch: '',
    domain: '', program: 'Final Year Project', message: '',
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const e = {};
    if (!form.name.trim())    e.name    = 'Name is required';
    if (!form.phone.trim())   e.phone   = 'Phone number is required';
    else if (!/^[\d\s\+\-]{7,15}$/.test(form.phone)) e.phone = 'Enter a valid phone number';
    if (!form.college.trim()) e.college = 'College name is required';
    if (!form.branch.trim())  e.branch  = 'Branch / degree is required';
    return e;
  };

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    if (errors[e.target.name]) setErrors((prev) => ({ ...prev, [e.target.name]: '' }));
  };

  const handleWhatsApp = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    const text = encodeURIComponent(
      `Hi LearnMore Projects!\n\nName: ${form.name}\nPhone: ${form.phone}\nCollege: ${form.college}\nBranch: ${form.branch}\nDomain Interest: ${form.domain || 'Not specified'}\nProgram: ${form.program}\n\nMessage: ${form.message || 'I want to enquire about your services.'}`
    );
    window.open(`https://wa.me/917550191838?text=${text}`, '_blank');
    setSubmitted(true);
  };

  const Field = ({ label, error, required, children }) => (
    <div>
      <label className="block text-sm font-semibold text-slate-700 mb-1.5">
        {label} {required && <span className="text-rose-500">*</span>}
      </label>
      {children}
      {error && <p className="mt-1 text-xs text-rose-500 font-medium">{error}</p>}
    </div>
  );

  const inputCls = (name) =>
    `w-full border rounded-xl px-4 py-3 text-sm text-slate-700 placeholder-slate-400 focus:outline-none focus:ring-2 transition-all min-h-[48px] ${
      errors[name]
        ? 'border-rose-300 focus:ring-rose-200 bg-rose-50'
        : 'border-slate-200 focus:ring-primary-200 focus:border-primary-400'
    }`;

  return (
    <>
      {/* Header */}
      <section className="bg-gradient-to-br from-primary-950 to-primary-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-primary-300 font-semibold text-sm uppercase tracking-wider mb-3">Get In Touch</p>
          <h1 className="text-4xl md:text-5xl font-black text-white mb-4">Contact Us</h1>
          <p className="text-primary-200 text-lg max-w-xl mx-auto">
            Fill in the form and we'll open WhatsApp with all your details — response within 30 minutes.
          </p>
        </div>
      </section>

      <section className="py-12 sm:py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8 lg:gap-10">

            {/* Sidebar */}
            <div className="space-y-5">
              <div className="bg-white rounded-2xl border border-slate-100 p-6">
                <h2 className="font-bold text-slate-900 text-base mb-5">Contact Information</h2>
                <div className="space-y-4">
                  <a href="tel:+917550191838" className="flex items-start gap-3 group min-h-[44px]">
                    <div className="w-10 h-10 bg-primary-50 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-primary-100 transition-colors">
                      <Phone size={16} className="text-primary-700" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-400 font-medium mb-0.5">Phone / WhatsApp</p>
                      <p className="text-slate-700 font-semibold text-sm">+91 75501 91838</p>
                    </div>
                  </a>
                  <a href="mailto:info@learnmoreprojects.in" className="flex items-start gap-3 group min-h-[44px]">
                    <div className="w-10 h-10 bg-primary-50 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-primary-100 transition-colors">
                      <Mail size={16} className="text-primary-700" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-400 font-medium mb-0.5">Email</p>
                      <p className="text-slate-700 font-semibold text-sm break-all">info@learnmoreprojects.in</p>
                    </div>
                  </a>
                  <div className="flex items-start gap-3 min-h-[44px]">
                    <div className="w-10 h-10 bg-primary-50 rounded-xl flex items-center justify-center flex-shrink-0">
                      <MapPin size={16} className="text-primary-700" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-400 font-medium mb-0.5">Address</p>
                      <p className="text-slate-700 font-semibold text-sm">
                        202, Nehru St, Peranaidu Layout,<br />Ram Nagar, Coimbatore,<br />Tamil Nadu 641009
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 min-h-[44px]">
                    <div className="w-10 h-10 bg-primary-50 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Clock size={16} className="text-primary-700" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-400 font-medium mb-0.5">Working Hours</p>
                      <p className="text-slate-700 font-semibold text-sm">Mon – Sat: 9 AM – 7 PM</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick WhatsApp */}
              <a
                href="https://wa.me/917550191838?text=Hi%2C%20I%20want%20to%20enquire%20about%20final%20year%20projects%20at%20LearnMore%20Projects"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white font-semibold px-5 py-4 rounded-2xl transition-colors w-full justify-center min-h-[52px]"
              >
                <MessageCircle size={20} />
                Chat on WhatsApp Now
              </a>

              <div className="bg-primary-50 border border-primary-100 rounded-2xl p-5">
                <p className="text-primary-700 font-bold text-sm mb-2">Quick Response</p>
                <p className="text-slate-600 text-sm leading-relaxed">
                  We respond to all WhatsApp enquiries within 30 minutes during working hours.
                </p>
              </div>

              {/* Google Maps */}
              <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-sm">
                <iframe
                  title="LearnMore Projects Location"
                  src="https://maps.google.com/maps?q=202+Nehru+St,+Peranaidu+Layout,+Ram+Nagar,+Coimbatore,+Tamil+Nadu+641009,+India&t=&z=16&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="200"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
                <a
                  href="https://maps.google.com/?q=202+Nehru+St+Peranaidu+Layout+Ram+Nagar+Coimbatore+641009"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-white py-3 text-primary-700 font-semibold text-sm hover:bg-primary-50 transition-colors min-h-[44px]"
                >
                  <MapPin size={14} /> Open in Google Maps
                </a>
              </div>
            </div>

            {/* Enquiry form */}
            <div className="lg:col-span-2">
              {submitted ? (
                <div className="bg-white rounded-3xl border border-green-100 p-12 text-center h-full flex flex-col items-center justify-center">
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 size={40} className="text-green-600" />
                  </div>
                  <h3 className="text-2xl font-black text-slate-900 mb-3">WhatsApp Opened!</h3>
                  <p className="text-slate-500 text-base max-w-md leading-relaxed mb-6">
                    Your details have been pre-filled in WhatsApp. Just hit send and we'll get back to you within 30 minutes.
                  </p>
                  <button onClick={() => setSubmitted(false)} className="btn-outline text-sm min-h-[44px]">
                    Submit Another Enquiry
                  </button>
                </div>
              ) : (
                <div className="bg-white rounded-3xl border border-slate-100 p-6 sm:p-8">
                  <h2 className="font-black text-slate-900 text-xl mb-1">Project Enquiry Form</h2>
                  <p className="text-slate-400 text-sm mb-7">Fields marked <span className="text-rose-500 font-semibold">*</span> are required.</p>

                  <form onSubmit={handleWhatsApp} className="space-y-5" noValidate>
                    <div className="grid sm:grid-cols-2 gap-5">
                      <Field label="Full Name" error={errors.name} required>
                        <input type="text" name="name" value={form.name} onChange={handleChange}
                          placeholder="Your full name" className={inputCls('name')} />
                      </Field>
                      <Field label="Phone Number" error={errors.phone} required>
                        <input type="tel" name="phone" value={form.phone} onChange={handleChange}
                          placeholder="+91 75501 91838" className={inputCls('phone')} />
                        <p className="mt-1 text-xs text-slate-400">Format: +91 XXXXX XXXXX</p>
                      </Field>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-5">
                      <Field label="College Name" error={errors.college} required>
                        <input type="text" name="college" value={form.college} onChange={handleChange}
                          placeholder="Your college name" className={inputCls('college')} />
                      </Field>
                      <Field label="Branch / Degree" error={errors.branch} required>
                        <input type="text" name="branch" value={form.branch} onChange={handleChange}
                          placeholder="e.g., B.E. ECE, B.Tech IT" className={inputCls('branch')} />
                      </Field>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-5">
                      <Field label="Domain of Interest" error={errors.domain}>
                        <select name="domain" value={form.domain} onChange={handleChange}
                          className={`${inputCls('domain')} bg-white`}>
                          <option value="">Select domain...</option>
                          {domains.map((d) => <option key={d} value={d}>{d}</option>)}
                        </select>
                      </Field>
                      <Field label="Program" error={errors.program}>
                        <select name="program" value={form.program} onChange={handleChange}
                          className={`${inputCls('program')} bg-white`}>
                          {programs.map((p) => <option key={p} value={p}>{p}</option>)}
                        </select>
                      </Field>
                    </div>

                    <Field label="Email Address" error={errors.email}>
                      <input type="email" name="email" value={form.email} onChange={handleChange}
                        placeholder="your@email.com" className={inputCls('email')} />
                    </Field>

                    <Field label="Message (optional)" error={errors.message}>
                      <textarea name="message" value={form.message} onChange={handleChange} rows={4}
                        maxLength={500}
                        placeholder="Any specific requirements or questions..."
                        className={`${inputCls('message')} resize-none`} />
                      <p className="mt-1 text-xs text-slate-400 text-right">{form.message.length}/500</p>
                    </Field>

                    <button type="submit" className="w-full btn-primary text-base py-4 justify-center min-h-[52px]">
                      <MessageCircle size={20} />
                      Send via WhatsApp
                    </button>

                    <p className="text-center text-xs text-slate-400">
                      This opens WhatsApp with your details pre-filled. No data is stored on our servers.
                    </p>
                  </form>
                </div>
              )}
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
