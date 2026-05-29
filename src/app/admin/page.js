'use client';

import { useState, useEffect } from 'react';
import { adminAuth, blogStore, projectStore, builtinBlogStore, domainOverrideStore } from '@/lib/adminStore';
import {
  LogOut, Plus, Pencil, Trash2, LayoutDashboard,
  BookOpen, FolderKanban, Loader2, CheckCircle2, XCircle, RotateCcw,
} from 'lucide-react';

// ── Built-in blogs (editable via PHP overrides) ───────────────────────────────

const BUILTIN_BLOGS = [
  {
    id: 'top-final-year-projects-ece-2025',
    title: 'Top 20 Final Year Projects for ECE Students in 2025',
    category: 'Project Ideas', readTime: '8 min read', date: 'May 2025',
    excerpt: 'A curated list of high-scoring, implementable project ideas across Embedded AI, IoT, Bio-Medical, and Communication — with difficulty ratings and IEEE paper references for each.',
    content: '',
  },
  {
    id: 'how-to-clear-final-year-viva',
    title: 'How to Clear Your Final Year Viva Without Panicking',
    category: 'Viva Prep', readTime: '6 min read', date: 'April 2025',
    excerpt: 'The 30 questions every evaluator asks and how to answer them confidently — even if you did not build the project yourself. Tested by 7,000+ students who passed their vivas.',
    content: '',
  },
  {
    id: 'embedded-vs-iot-final-year-project',
    title: 'Embedded Systems vs IoT: Which Domain Should You Pick for Your Final Year?',
    category: 'Comparison', readTime: '5 min read', date: 'March 2025',
    excerpt: 'A straight comparison of scope, hardware cost, viva complexity, and placement value — so you can make an informed choice before committing to a topic.',
    content: '',
  },
];

// ── Built-in domains (editable via PHP overrides) ────────────────────────────

const BUILTIN_DOMAINS = [
  {
    id: 'Embedded Systems', count: '500+',
    desc: 'Design and develop microcontroller-based systems with real hardware, firmware, and sensor integration. Covers bare-metal programming through RTOS-based designs.',
    platforms: 'Arduino UNO/MEGA, ARM Cortex M3/M4, PIC Microcontrollers, ATMEL AVR, STM32, ESP32/ESP8266, Raspberry Pi, BeagleBone',
    sampleTopics: 'Smart Home Automation with Voice Control\nWearable Fall Detection System for Elderly\nRFID-Based Attendance Management System\nAutomated Plant Watering Using Soil Sensors\nCAN Bus Vehicle Diagnostics System\nReal-Time Object Tracking with Servo Motors',
  },
  {
    id: 'IoT Projects', count: '400+',
    desc: 'Build internet-connected devices that collect, transmit, and act on real-world data. From smart home to industrial IoT deployments.',
    platforms: 'ESP32, Raspberry Pi, Arduino IoT Cloud, AWS IoT Core, Azure IoT Hub, MQTT Protocol, Node-RED, ThingSpeak',
    sampleTopics: 'Smart Precision Agriculture with ML Predictions\nIndustrial Machine Health Monitoring\nSmart Grid Energy Management System\nGPS-Based Vehicle Tracking with Geofencing\nAir Quality Monitoring Dashboard\nIoT-Based Cold Chain Logistics Tracker',
  },
  {
    id: 'AI / Machine Learning', count: '350+',
    desc: 'Develop intelligent systems using machine learning, deep learning, and computer vision. Includes edge AI deployments on embedded hardware.',
    platforms: 'Python, TensorFlow, PyTorch, OpenCV, Scikit-learn, Keras, Raspberry Pi (Edge AI), Google Colab',
    sampleTopics: 'Edge AI Defect Detection on Production Lines\nDriver Drowsiness Detection using CNN\nNLP-Based Resume Screening System\nFacial Recognition Attendance System\nCrop Disease Prediction using Deep Learning\nSentiment Analysis of Social Media Data',
  },
  {
    id: 'Robotics', count: '200+',
    desc: 'Design and build autonomous and semi-autonomous robotic systems — from industrial arms to mobile robots and drone platforms.',
    platforms: 'Arduino, Raspberry Pi, ROS, L298N Motor Driver, Servo Motors, 3D Printed Chassis, Ultrasonic Sensors, Vision Systems',
    sampleTopics: 'Autonomous Line-Following Robot with PID\nRobotic Arm for Pick-and-Place (5-DOF)\nSwarm Robotics Communication System\nObstacle-Avoidance Differential Drive Robot\nSnake Robot for Search and Rescue\nDrone-Based Parcel Delivery Prototype',
  },
  {
    id: 'Bio-Medical Engineering', count: '150+',
    desc: 'The only Coimbatore center with dedicated Bio-Medical expertise. Projects for BME, ECE, and CSE students targeting the healthcare sector.',
    platforms: 'STM32, Arduino, Raspberry Pi, AD8232 (ECG), MAX30100 (SpO2), BLE 5.0, NIR Sensors, MATLAB',
    sampleTopics: 'Non-Invasive Blood Glucose Monitor (NIR)\nPortable 12-Lead ECG with Arrhythmia Detection\nSmart Prosthetic Hand with EMG Control\nFall Detection Alert for ICU Patients\nWearable SpO2 & Heart Rate Monitor\nAI-Powered Retinal Disease Screening',
  },
  {
    id: 'Power Electronics', count: '250+',
    desc: 'Simulate and implement energy conversion circuits, motor drives, renewable energy systems, and smart grid components.',
    platforms: 'MATLAB Simulink, PSIM, TI LaunchPad, IGBT/MOSFET Drivers, Solar Panels, DC-DC Converters, Motor Drives, PLC',
    sampleTopics: 'MPPT Solar Charge Controller Design\nEV Battery Management System (BMS)\nBidirectional DC-DC Converter for Microgrids\nVariable Frequency Drive for Induction Motor\nSmart Street Lighting with Dimming Control\nWireless Power Transfer System (WPT)',
  },
  {
    id: 'Mechanical Projects', count: '180+',
    desc: 'Full design-to-fabrication pipeline using CAD tools. Projects include structural analysis, prototyping, and manufacturing.',
    platforms: 'SolidWorks, CATIA V5, AutoCAD, ANSYS, PRO-E, CNC Machining, 3D Printing, Fabrication Lab',
    sampleTopics: 'Design & Analysis of Composite Leaf Spring\nRegenerative Braking System for Two-Wheelers\nAutomated Guided Vehicle (AGV) Design\nExoskeleton Arm for Rehabilitation\nSolar-Powered Water Desalination Unit\nHydraulic Scissor Lift Mechanism',
  },
  {
    id: 'Software Development', count: '300+',
    desc: 'Web, mobile, and cloud applications. Data science pipelines, cybersecurity tools, and enterprise software projects.',
    platforms: 'Python (Django/Flask), React / Next.js, Node.js, Java Spring Boot, Android (Kotlin), Flutter, MySQL / MongoDB, Firebase',
    sampleTopics: 'Blockchain-Based Academic Certificate Verification\nAI Chatbot for Hospital Patient Intake\nReal-Time Collaborative Code Editor\nE-Learning Platform with Progress Tracking\nSmart Traffic Management with Computer Vision\nMental Health Monitoring Mobile App',
  },
];

const BLOG_CATEGORIES = ['Project Ideas', 'Viva Prep', 'IEEE Paper Writing', 'Hardware Tutorials', 'Comparison', 'Placement Tips'];
const PROJECT_DOMAINS = BUILTIN_DOMAINS.map(d => d.id);

const emptyBlog    = { title: '', category: '', excerpt: '', content: '', readTime: '' };
const emptyProject = { title: '', domain: '', difficulty: '', duration: '', tech: '', description: '' };

// ── Toast ─────────────────────────────────────────────────────────────────────

function Toast({ msg, ok }) {
  if (!msg) return null;
  return (
    <div className={`fixed bottom-6 right-6 z-50 flex items-center gap-2 px-4 py-3 rounded-2xl shadow-xl text-sm font-semibold text-white ${ok ? 'bg-green-600' : 'bg-red-500'}`}>
      {ok ? <CheckCircle2 size={16} /> : <XCircle size={16} />} {msg}
    </div>
  );
}

// ── Login ─────────────────────────────────────────────────────────────────────

function LoginScreen({ onLogin }) {
  const [pw, setPw] = useState('');
  const [err, setErr] = useState('');
  const submit = (e) => { e.preventDefault(); if (adminAuth.login(pw)) onLogin(); else setErr('Wrong password.'); };
  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center p-4">
      <div className="w-full max-w-sm bg-white rounded-3xl shadow-2xl p-8">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-14 h-14 bg-primary-100 rounded-2xl mb-4">
            <LayoutDashboard size={24} className="text-primary-700" />
          </div>
          <h1 className="text-2xl font-black text-slate-900">Admin Panel</h1>
          <p className="text-slate-500 text-sm mt-1">LearnMore Projects</p>
        </div>
        <form onSubmit={submit} className="space-y-4">
          <div>
            <label className="block text-xs font-bold text-slate-600 mb-1.5">Password</label>
            <input type="password" value={pw} onChange={e => { setPw(e.target.value); setErr(''); }} placeholder="Enter admin password"
              className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500" autoFocus />
            {err && <p className="text-red-500 text-xs mt-1.5">{err}</p>}
          </div>
          <button type="submit" className="w-full bg-primary-700 hover:bg-primary-800 text-white font-bold py-3 rounded-xl transition-colors">Login</button>
        </form>
      </div>
    </div>
  );
}

// ── Built-in Blog Edit Form ───────────────────────────────────────────────────

function BuiltinBlogEditForm({ blog, override, onSave, onCancel, saving }) {
  const [form, setForm] = useState({
    title:    override?.title    ?? blog.title,
    category: override?.category ?? blog.category,
    readTime: override?.readTime ?? blog.readTime,
    date:     override?.date     ?? blog.date,
    excerpt:  override?.excerpt  ?? blog.excerpt,
    content:  override?.content  ?? blog.content,
  });
  const field = k => e => setForm(f => ({ ...f, [k]: e.target.value }));

  return (
    <div className="border-2 border-primary-200 rounded-2xl p-5 bg-primary-50 space-y-4 mt-2">
      <p className="font-black text-slate-900 text-sm">Editing built-in post</p>
      <div className="grid sm:grid-cols-2 gap-4">
        <div><label className="block text-xs font-bold text-slate-600 mb-1">Title</label>
          <input value={form.title} onChange={field('title')} className="w-full border border-slate-200 bg-white rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500" /></div>
        <div><label className="block text-xs font-bold text-slate-600 mb-1">Category</label>
          <input value={form.category} onChange={field('category')} list="blog-cats-builtin" className="w-full border border-slate-200 bg-white rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500" />
          <datalist id="blog-cats-builtin">{BLOG_CATEGORIES.map(c => <option key={c} value={c} />)}</datalist></div>
      </div>
      <div className="grid sm:grid-cols-2 gap-4">
        <div><label className="block text-xs font-bold text-slate-600 mb-1">Read Time</label>
          <input value={form.readTime} onChange={field('readTime')} placeholder="e.g. 5 min read" className="w-full border border-slate-200 bg-white rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500" /></div>
        <div><label className="block text-xs font-bold text-slate-600 mb-1">Date</label>
          <input value={form.date} onChange={field('date')} placeholder="e.g. June 2025" className="w-full border border-slate-200 bg-white rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500" /></div>
      </div>
      <div><label className="block text-xs font-bold text-slate-600 mb-1">Short Summary (shown on cards)</label>
        <textarea value={form.excerpt} onChange={field('excerpt')} rows={3} className="w-full border border-slate-200 bg-white rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 resize-none" /></div>
      <div><label className="block text-xs font-bold text-slate-600 mb-1">Full Content</label>
        <textarea value={form.content} onChange={field('content')} rows={5} placeholder="Full article text..." className="w-full border border-slate-200 bg-white rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 resize-y" /></div>
      <div className="flex gap-3">
        <button onClick={() => onSave({ id: blog.id, ...form })} disabled={saving} className="inline-flex items-center gap-2 bg-primary-700 hover:bg-primary-800 disabled:opacity-60 text-white font-bold px-5 py-2 rounded-xl text-sm transition-colors">
          {saving ? <Loader2 size={13} className="animate-spin" /> : null} Save Changes
        </button>
        <button onClick={onCancel} className="text-slate-500 font-semibold text-sm px-4 py-2 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 transition-colors">Cancel</button>
      </div>
    </div>
  );
}

// ── Blog Tab ──────────────────────────────────────────────────────────────────

function BlogTab({ toast }) {
  const [posts, setPosts] = useState([]);
  const [builtinOverrides, setBuiltinOverrides] = useState([]);
  const [form, setForm] = useState(emptyBlog);
  const [editId, setEditId] = useState(null);
  const [editingBuiltin, setEditingBuiltin] = useState(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [builtinSaving, setBuiltinSaving] = useState(false);

  const loadAll = async () => {
    setLoading(true);
    const [p, b] = await Promise.all([blogStore.getAll(), builtinBlogStore.getAll()]);
    setPosts(p); setBuiltinOverrides(b); setLoading(false);
  };
  useEffect(() => { loadAll(); }, []);

  const overrideMap = Object.fromEntries(builtinOverrides.map(o => [o.id, o]));
  const field = k => e => setForm(f => ({ ...f, [k]: e.target.value }));

  const submit = async (e) => {
    e.preventDefault();
    if (!form.title || !form.category) return toast('Title and category are required.', false);
    setSaving(true);
    const ok = editId ? await blogStore.update({ id: editId, ...form }) : await blogStore.add(form);
    setSaving(false);
    if (ok) { toast(editId ? 'Blog updated!' : 'Blog published!', true); setForm(emptyBlog); setEditId(null); loadAll(); }
    else toast('Error — check your connection.', false);
  };

  const startEdit = p => {
    setForm({ title: p.title, category: p.category, excerpt: p.excerpt || '', content: p.content || '', readTime: p.readTime || '' });
    setEditId(p.id); window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  const del = async id => {
    if (!confirm('Delete this post?')) return;
    if (await blogStore.delete(id)) { toast('Deleted.', true); loadAll(); } else toast('Error.', false);
  };

  const saveBuiltin = async (data) => {
    setBuiltinSaving(true);
    const ok = await builtinBlogStore.save(data);
    setBuiltinSaving(false);
    if (ok) { toast('Blog updated!', true); setEditingBuiltin(null); loadAll(); }
    else toast('Error saving.', false);
  };

  const hideBuiltin = async (id) => {
    if (!confirm('Hide this blog post from the site?')) return;
    setBuiltinSaving(true);
    const ok = await builtinBlogStore.save({ id, hidden: true });
    setBuiltinSaving(false);
    if (ok) { toast('Post hidden.', true); loadAll(); } else toast('Error.', false);
  };

  const restoreBuiltin = async (id) => {
    setBuiltinSaving(true);
    const ok = await builtinBlogStore.restore(id);
    setBuiltinSaving(false);
    if (ok) { toast('Post restored.', true); loadAll(); } else toast('Error.', false);
  };

  return (
    <div className="space-y-8">
      {/* Add / Edit form */}
      <div className="bg-white rounded-3xl border border-slate-100 p-6">
        <h2 className="font-black text-slate-900 text-lg mb-5">{editId ? 'Edit Blog Post' : 'Add New Blog Post'}</h2>
        <form onSubmit={submit} className="space-y-4">
          <div className="grid sm:grid-cols-2 gap-4">
            <div><label className="block text-xs font-bold text-slate-600 mb-1.5">Title *</label>
              <input value={form.title} onChange={field('title')} placeholder="Blog post title" className="w-full border border-slate-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500" /></div>
            <div><label className="block text-xs font-bold text-slate-600 mb-1.5">Category *</label>
              <input value={form.category} onChange={field('category')} list="blog-cats" placeholder="e.g. Project Ideas" className="w-full border border-slate-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500" />
              <datalist id="blog-cats">{BLOG_CATEGORIES.map(c => <option key={c} value={c} />)}</datalist></div>
          </div>
          <div><label className="block text-xs font-bold text-slate-600 mb-1.5">Read Time</label>
            <input value={form.readTime} onChange={field('readTime')} placeholder="e.g. 5 min read" className="w-full border border-slate-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500" /></div>
          <div><label className="block text-xs font-bold text-slate-600 mb-1.5">Short Summary</label>
            <textarea value={form.excerpt} onChange={field('excerpt')} placeholder="2-3 sentence summary" rows={2} className="w-full border border-slate-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 resize-none" /></div>
          <div><label className="block text-xs font-bold text-slate-600 mb-1.5">Full Content</label>
            <textarea value={form.content} onChange={field('content')} placeholder="Full article content..." rows={6} className="w-full border border-slate-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 resize-y" /></div>
          <div className="flex gap-3">
            <button type="submit" disabled={saving} className="inline-flex items-center gap-2 bg-primary-700 hover:bg-primary-800 disabled:opacity-60 text-white font-bold px-5 py-2.5 rounded-xl text-sm transition-colors">
              {saving ? <Loader2 size={14} className="animate-spin" /> : <Plus size={14} />}{saving ? 'Saving…' : editId ? 'Update Post' : 'Publish Post'}
            </button>
            {editId && <button type="button" onClick={() => { setForm(emptyBlog); setEditId(null); }} className="text-slate-500 font-semibold text-sm px-4 py-2.5 rounded-xl border border-slate-200 hover:bg-slate-50 transition-colors">Cancel</button>}
          </div>
        </form>
      </div>

      {/* Admin-added posts */}
      <div className="bg-white rounded-3xl border border-slate-100 p-6">
        <div className="flex items-center justify-between mb-5">
          <h2 className="font-black text-slate-900 text-lg">Added Blog Posts <span className="text-slate-400 font-normal text-sm">({posts.length} added)</span></h2>
          {loading && <Loader2 size={16} className="animate-spin text-slate-400" />}
        </div>
        {!loading && posts.length === 0 && <p className="text-slate-400 text-sm py-4 text-center">No admin-added blogs yet. Add one above.</p>}
        <div className="space-y-3">
          {posts.map(p => (
            <div key={p.id} className="flex items-center gap-3 p-4 bg-slate-50 rounded-2xl">
              <div className="flex-1 min-w-0"><p className="font-bold text-slate-900 text-sm truncate">{p.title}</p><p className="text-slate-500 text-xs mt-0.5">{p.category} · {new Date(p.createdAt).toLocaleDateString('en-IN')}</p></div>
              <button onClick={() => startEdit(p)} className="p-2 text-slate-400 hover:text-primary-700 hover:bg-primary-50 rounded-lg transition-colors"><Pencil size={15} /></button>
              <button onClick={() => del(p.id)} className="p-2 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"><Trash2 size={15} /></button>
            </div>
          ))}
        </div>
      </div>

      {/* Built-in blog posts — now editable */}
      <div className="bg-white rounded-3xl border border-slate-100 p-6">
        <div className="mb-5">
          <h2 className="font-black text-slate-900 text-lg">Built-in Blog Posts</h2>
          <p className="text-xs text-slate-400 mt-1">Edit the title, summary, content, or hide any built-in post from the site.</p>
        </div>
        <div className="space-y-3">
          {BUILTIN_BLOGS.map(blog => {
            const ov = overrideMap[blog.id];
            const isHidden = ov?.hidden === true;
            const isEditing = editingBuiltin === blog.id;
            const isCustomized = ov && !isHidden;

            return (
              <div key={blog.id}>
                <div className={`flex items-center gap-3 p-4 rounded-2xl ${isHidden ? 'bg-red-50 border border-red-100' : 'bg-slate-50'}`}>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 flex-wrap">
                      <p className={`font-bold text-sm truncate ${isHidden ? 'text-slate-400 line-through' : 'text-slate-900'}`}>
                        {ov?.title ?? blog.title}
                      </p>
                      {isCustomized && <span className="text-xs font-semibold bg-primary-100 text-primary-700 px-2 py-0.5 rounded-full flex-shrink-0">Edited</span>}
                      {isHidden && <span className="text-xs font-semibold bg-red-100 text-red-600 px-2 py-0.5 rounded-full flex-shrink-0">Hidden</span>}
                    </div>
                    <p className="text-slate-400 text-xs mt-0.5">{ov?.category ?? blog.category} · {ov?.date ?? blog.date}</p>
                  </div>
                  {isHidden ? (
                    <button onClick={() => restoreBuiltin(blog.id)} disabled={builtinSaving} className="inline-flex items-center gap-1.5 px-3 py-1.5 text-green-600 hover:bg-green-50 rounded-lg transition-colors text-xs font-semibold">
                      <RotateCcw size={13} /> Restore
                    </button>
                  ) : (
                    <>
                      <button onClick={() => setEditingBuiltin(isEditing ? null : blog.id)} className="p-2 text-slate-400 hover:text-primary-700 hover:bg-primary-50 rounded-lg transition-colors"><Pencil size={15} /></button>
                      <button onClick={() => hideBuiltin(blog.id)} disabled={builtinSaving} className="p-2 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"><Trash2 size={15} /></button>
                    </>
                  )}
                </div>
                {isEditing && (
                  <BuiltinBlogEditForm blog={blog} override={ov} onSave={saveBuiltin} onCancel={() => setEditingBuiltin(null)} saving={builtinSaving} />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

// ── Domain Edit Form ──────────────────────────────────────────────────────────

function DomainEditForm({ domain, override, onSave, onCancel, saving }) {
  const [form, setForm] = useState({
    count:        override?.count        ?? domain.count,
    desc:         override?.desc         ?? domain.desc,
    platforms:    override?.platforms    ?? domain.platforms,
    sampleTopics: override?.sampleTopics ?? domain.sampleTopics,
  });
  const field = k => e => setForm(f => ({ ...f, [k]: e.target.value }));

  return (
    <div className="border-2 border-primary-200 rounded-2xl p-5 bg-primary-50 space-y-4">
      <p className="font-black text-slate-900 text-sm">Editing: {domain.id}</p>
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-bold text-slate-600 mb-1">Project Count</label>
          <input value={form.count} onChange={field('count')} placeholder="e.g. 600+" className="w-full border border-slate-200 bg-white rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500" />
        </div>
      </div>
      <div>
        <label className="block text-xs font-bold text-slate-600 mb-1">Description</label>
        <textarea value={form.desc} onChange={field('desc')} rows={3} className="w-full border border-slate-200 bg-white rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 resize-none" />
      </div>
      <div>
        <label className="block text-xs font-bold text-slate-600 mb-1">Platforms / Tools <span className="font-normal text-slate-400">(comma-separated)</span></label>
        <textarea value={form.platforms} onChange={field('platforms')} rows={2} className="w-full border border-slate-200 bg-white rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 resize-none" />
      </div>
      <div>
        <label className="block text-xs font-bold text-slate-600 mb-1">Sample Topics <span className="font-normal text-slate-400">(one per line, up to 6)</span></label>
        <textarea value={form.sampleTopics} onChange={field('sampleTopics')} rows={5} className="w-full border border-slate-200 bg-white rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 resize-none font-mono" />
      </div>
      <div className="flex gap-3">
        <button onClick={() => onSave({ id: domain.id, ...form })} disabled={saving} className="inline-flex items-center gap-2 bg-primary-700 hover:bg-primary-800 disabled:opacity-60 text-white font-bold px-5 py-2 rounded-xl text-sm transition-colors">
          {saving ? <Loader2 size={13} className="animate-spin" /> : null} Save Changes
        </button>
        <button onClick={onCancel} className="text-slate-500 font-semibold text-sm px-4 py-2 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 transition-colors">Cancel</button>
      </div>
    </div>
  );
}

// ── Projects Tab ──────────────────────────────────────────────────────────────

function ProjectsTab({ toast }) {
  const [projects, setProjects] = useState([]);
  const [overrides, setOverrides] = useState([]);
  const [form, setForm] = useState(emptyProject);
  const [editId, setEditId] = useState(null);
  const [editingDomain, setEditingDomain] = useState(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [domainSaving, setDomainSaving] = useState(false);

  const loadAll = async () => {
    setLoading(true);
    const [p, o] = await Promise.all([projectStore.getAll(), domainOverrideStore.getAll()]);
    setProjects(p); setOverrides(o); setLoading(false);
  };
  useEffect(() => { loadAll(); }, []);

  const overrideMap = Object.fromEntries(overrides.map(o => [o.id, o]));
  const field = k => e => setForm(f => ({ ...f, [k]: e.target.value }));

  const submit = async (e) => {
    e.preventDefault();
    if (!form.title || !form.domain) return toast('Title and domain are required.', false);
    setSaving(true);
    const ok = editId ? await projectStore.update({ id: editId, ...form }) : await projectStore.add(form);
    setSaving(false);
    if (ok) { toast(editId ? 'Project updated!' : 'Project added!', true); setForm(emptyProject); setEditId(null); loadAll(); }
    else toast('Error — check your connection.', false);
  };

  const startEdit = p => { setForm({ title: p.title, domain: p.domain, difficulty: p.difficulty || '', duration: p.duration || '', tech: p.tech || '', description: p.description || '' }); setEditId(p.id); window.scrollTo({ top: 0, behavior: 'smooth' }); };
  const del = async id => { if (!confirm('Delete this project?')) return; if (await projectStore.delete(id)) { toast('Deleted.', true); loadAll(); } else toast('Error.', false); };

  const saveDomain = async (data) => {
    setDomainSaving(true);
    const ok = await domainOverrideStore.save(data);
    setDomainSaving(false);
    if (ok) { toast(`${data.id} updated!`, true); setEditingDomain(null); loadAll(); }
    else toast('Error saving domain.', false);
  };

  const hideDomain = async (id) => {
    if (!confirm(`Hide "${id}" from the projects page?`)) return;
    setDomainSaving(true);
    const ok = await domainOverrideStore.save({ id, hidden: true });
    setDomainSaving(false);
    if (ok) { toast(`${id} hidden.`, true); loadAll(); }
    else toast('Error.', false);
  };

  const restoreDomain = async (id) => {
    setDomainSaving(true);
    const ok = await domainOverrideStore.restore(id);
    setDomainSaving(false);
    if (ok) { toast(`${id} restored.`, true); loadAll(); }
    else toast('Error.', false);
  };

  return (
    <div className="space-y-8">
      {/* Add / Edit project topic form */}
      <div className="bg-white rounded-3xl border border-slate-100 p-6">
        <h2 className="font-black text-slate-900 text-lg mb-5">{editId ? 'Edit Project Topic' : 'Add New Project Topic'}</h2>
        <form onSubmit={submit} className="space-y-4">
          <div className="grid sm:grid-cols-2 gap-4">
            <div><label className="block text-xs font-bold text-slate-600 mb-1.5">Project Title *</label>
              <input value={form.title} onChange={field('title')} placeholder="e.g. Smart Water Quality Monitor" className="w-full border border-slate-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500" /></div>
            <div><label className="block text-xs font-bold text-slate-600 mb-1.5">Domain *</label>
              <input value={form.domain} onChange={field('domain')} list="proj-domains" placeholder="e.g. IoT Projects" className="w-full border border-slate-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500" />
              <datalist id="proj-domains">{PROJECT_DOMAINS.map(d => <option key={d} value={d} />)}</datalist></div>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            <div><label className="block text-xs font-bold text-slate-600 mb-1.5">Difficulty</label>
              <select value={form.difficulty} onChange={field('difficulty')} className="w-full border border-slate-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500">
                <option value="">Select difficulty</option><option>Easy</option><option>Medium</option><option>Hard</option>
              </select></div>
            <div><label className="block text-xs font-bold text-slate-600 mb-1.5">Duration</label>
              <input value={form.duration} onChange={field('duration')} placeholder="e.g. 4–6 weeks" className="w-full border border-slate-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500" /></div>
          </div>
          <div><label className="block text-xs font-bold text-slate-600 mb-1.5">Technologies (comma-separated)</label>
            <input value={form.tech} onChange={field('tech')} placeholder="e.g. Arduino, ESP32, MQTT" className="w-full border border-slate-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500" /></div>
          <div><label className="block text-xs font-bold text-slate-600 mb-1.5">Description</label>
            <textarea value={form.description} onChange={field('description')} placeholder="Brief project description..." rows={3} className="w-full border border-slate-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 resize-none" /></div>
          <div className="flex gap-3">
            <button type="submit" disabled={saving} className="inline-flex items-center gap-2 bg-primary-700 hover:bg-primary-800 disabled:opacity-60 text-white font-bold px-5 py-2.5 rounded-xl text-sm transition-colors">
              {saving ? <Loader2 size={14} className="animate-spin" /> : <Plus size={14} />}{saving ? 'Saving…' : editId ? 'Update Project' : 'Add Project'}
            </button>
            {editId && <button type="button" onClick={() => { setForm(emptyProject); setEditId(null); }} className="text-slate-500 font-semibold text-sm px-4 py-2.5 rounded-xl border border-slate-200 hover:bg-slate-50 transition-colors">Cancel</button>}
          </div>
        </form>
      </div>

      {/* Admin-added project topics */}
      <div className="bg-white rounded-3xl border border-slate-100 p-6">
        <div className="flex items-center justify-between mb-5">
          <h2 className="font-black text-slate-900 text-lg">Added Project Topics <span className="text-slate-400 font-normal text-sm">({projects.length} added)</span></h2>
          {loading && <Loader2 size={16} className="animate-spin text-slate-400" />}
        </div>
        {!loading && projects.length === 0 && <p className="text-slate-400 text-sm py-4 text-center">No admin-added project topics yet.</p>}
        <div className="space-y-3">
          {projects.map(p => (
            <div key={p.id} className="flex items-center gap-3 p-4 bg-slate-50 rounded-2xl">
              <div className="flex-1 min-w-0"><p className="font-bold text-slate-900 text-sm truncate">{p.title}</p><p className="text-slate-500 text-xs mt-0.5">{p.domain}{p.difficulty ? ` · ${p.difficulty}` : ''}</p></div>
              <button onClick={() => startEdit(p)} className="p-2 text-slate-400 hover:text-primary-700 hover:bg-primary-50 rounded-lg transition-colors"><Pencil size={15} /></button>
              <button onClick={() => del(p.id)} className="p-2 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"><Trash2 size={15} /></button>
            </div>
          ))}
        </div>
      </div>

      {/* Built-in domain management */}
      <div className="bg-white rounded-3xl border border-slate-100 p-6">
        <div className="mb-5">
          <h2 className="font-black text-slate-900 text-lg">Built-in Project Domains</h2>
          <p className="text-xs text-slate-400 mt-1">Edit content, update project counts, or hide domains from the projects page.</p>
        </div>
        <div className="space-y-3">
          {BUILTIN_DOMAINS.map(domain => {
            const ov = overrideMap[domain.id];
            const isHidden = ov?.hidden === true;
            const isEditing = editingDomain === domain.id;
            const isCustomized = ov && !isHidden;

            return (
              <div key={domain.id}>
                <div className={`flex items-center gap-3 p-4 rounded-2xl ${isHidden ? 'bg-red-50 border border-red-100' : 'bg-slate-50'}`}>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 flex-wrap">
                      <p className={`font-bold text-sm ${isHidden ? 'text-slate-400 line-through' : 'text-slate-900'}`}>{domain.id}</p>
                      {isCustomized && <span className="text-xs font-semibold bg-primary-100 text-primary-700 px-2 py-0.5 rounded-full">Edited</span>}
                      {isHidden && <span className="text-xs font-semibold bg-red-100 text-red-600 px-2 py-0.5 rounded-full">Hidden</span>}
                    </div>
                    <p className="text-slate-400 text-xs mt-0.5">{ov?.count ?? domain.count} topics</p>
                  </div>
                  {isHidden ? (
                    <button onClick={() => restoreDomain(domain.id)} disabled={domainSaving} className="inline-flex items-center gap-1.5 p-2 text-green-600 hover:bg-green-50 rounded-lg transition-colors text-xs font-semibold">
                      <RotateCcw size={14} /> Restore
                    </button>
                  ) : (
                    <>
                      <button onClick={() => setEditingDomain(isEditing ? null : domain.id)} className="p-2 text-slate-400 hover:text-primary-700 hover:bg-primary-50 rounded-lg transition-colors"><Pencil size={15} /></button>
                      <button onClick={() => hideDomain(domain.id)} disabled={domainSaving} className="p-2 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"><Trash2 size={15} /></button>
                    </>
                  )}
                </div>

                {isEditing && (
                  <div className="mt-2 ml-0">
                    <DomainEditForm
                      domain={domain}
                      override={ov}
                      onSave={saveDomain}
                      onCancel={() => setEditingDomain(null)}
                      saving={domainSaving}
                    />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

// ── Main Page ─────────────────────────────────────────────────────────────────

export default function AdminPage() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [tab, setTab] = useState('blogs');
  const [toastMsg, setToastMsg] = useState('');
  const [toastOk, setToastOk] = useState(true);

  useEffect(() => { setLoggedIn(adminAuth.isLoggedIn()); }, []);

  const toast = (msg, ok) => { setToastMsg(msg); setToastOk(ok); setTimeout(() => setToastMsg(''), 3500); };
  const logout = () => { adminAuth.logout(); setLoggedIn(false); };

  if (!loggedIn) return <LoginScreen onLogin={() => setLoggedIn(true)} />;

  const isLocalhost = typeof window !== 'undefined' && window.location.hostname === 'localhost';

  return (
    <div className="min-h-screen bg-slate-50">
      <Toast msg={toastMsg} ok={toastOk} />
      {isLocalhost && (
        <div className="bg-amber-50 border-b border-amber-200 px-4 py-2.5 text-center text-xs text-amber-800 font-semibold">
          ⚠ Running locally — add/edit/delete requires the PHP API on Hostinger. Upload the site to test live changes.
        </div>
      )}

      <header className="bg-white border-b border-slate-200 sticky top-0 z-30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-primary-100 rounded-xl flex items-center justify-center">
              <LayoutDashboard size={16} className="text-primary-700" />
            </div>
            <div>
              <p className="font-black text-slate-900 text-sm leading-none">LearnMore Admin</p>
              <p className="text-slate-400 text-xs mt-0.5">Content Manager</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <a href="/" target="_blank" rel="noopener noreferrer" className="text-xs font-semibold text-primary-700 hover:underline hidden sm:block">View Site →</a>
            <button onClick={logout} className="inline-flex items-center gap-1.5 text-slate-500 hover:text-red-600 text-xs font-semibold px-3 py-2 rounded-lg hover:bg-red-50 transition-colors">
              <LogOut size={13} /> Logout
            </button>
          </div>
        </div>
      </header>

      <div className="bg-white border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="flex gap-1">
            {[{ key: 'blogs', label: 'Blogs', icon: BookOpen }, { key: 'projects', label: 'Projects', icon: FolderKanban }].map(({ key, label, icon: Icon }) => (
              <button key={key} onClick={() => setTab(key)}
                className={`inline-flex items-center gap-2 px-5 py-3.5 text-sm font-bold border-b-2 transition-colors ${tab === key ? 'border-primary-700 text-primary-700' : 'border-transparent text-slate-500 hover:text-slate-700'}`}>
                <Icon size={15} /> {label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8">
        {tab === 'blogs'    && <BlogTab toast={toast} />}
        {tab === 'projects' && <ProjectsTab toast={toast} />}
      </div>
    </div>
  );
}
