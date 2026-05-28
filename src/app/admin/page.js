'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  Lock, LogOut, Plus, Trash2, BookOpen, FolderOpen,
  Download, Eye, AlertTriangle, CheckCircle2, X, Pencil,
} from 'lucide-react';
import { adminAuth, blogStore, projectStore, hiddenStore } from '@/lib/adminStore';

const HARDCODED_BLOGS = [
  { slug: 'top-final-year-projects-ece-2025', category: 'Project Ideas', title: 'Top 20 Final Year Projects for ECE Students in 2025', readTime: '8 min read', date: 'May 2025' },
  { slug: 'how-to-clear-final-year-viva', category: 'Viva Prep', title: 'How to Clear Your Final Year Viva Without Panicking', readTime: '6 min read', date: 'April 2025' },
  { slug: 'embedded-vs-iot-final-year-project', category: 'Comparison', title: 'Embedded Systems vs IoT: Which Domain Should You Pick?', readTime: '5 min read', date: 'March 2025' },
];

const HARDCODED_PROJECTS = [
  { domain: 'Embedded Systems', count: '500+', sample: 'Smart Home Automation, RFID Attendance, Wearable Fall Detection, CAN Bus Vehicle Diagnostics...' },
  { domain: 'IoT Projects', count: '400+', sample: 'Smart Precision Agriculture, Industrial Machine Monitoring, GPS Vehicle Tracking...' },
  { domain: 'AI / Machine Learning', count: '350+', sample: 'Edge AI Defect Detection, Driver Drowsiness Detection, Crop Disease Prediction...' },
  { domain: 'Bio-Medical', count: '250+', sample: 'ECG Monitoring, Portable SpO2 Monitor, Seizure Detection, Smart Pill Dispenser...' },
  { domain: 'Power Electronics', count: '200+', sample: 'Solar MPPT Controller, Grid-Tied Inverter, EV Battery BMS...' },
  { domain: 'Robotics', count: '200+', sample: 'Autonomous Navigation, Swarm Robotics, Robotic Arm, Fire-Fighting Robot...' },
  { domain: 'Software Development', count: '300+', sample: 'AI Chatbot, Blockchain Land Registry, Face Recognition Attendance...' },
  { domain: 'Mechanical', count: '150+', sample: 'Wearable Exoskeleton, Hydroponic System, Active Suspension...' },
];

const BLOG_CATEGORIES = ['Project Ideas', 'Viva Prep', 'Comparison', 'Career', 'IoT', 'AI / ML', 'Embedded'];
const DOMAINS = ['Embedded Systems', 'IoT Projects', 'AI / Machine Learning', 'Bio-Medical', 'Power Electronics', 'Robotics', 'Software Development', 'Mechanical'];
const DIFFICULTIES = ['Easy', 'Medium', 'Hard'];

const emptyBlog = { title: '', category: 'Project Ideas', excerpt: '', content: '', readTime: '5 min read' };
const emptyProject = { title: '', domain: 'Embedded Systems', description: '', tech: '', difficulty: 'Medium', duration: '25–30 days' };

/* ─── Login Screen ─── */
function LoginScreen({ onLogin }) {
  const [pw, setPw] = useState('');
  const [error, setError] = useState('');

  const submit = (e) => {
    e.preventDefault();
    if (!adminAuth.login(pw)) setError('Incorrect password. Try again.');
    else onLogin();
  };

  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center px-4">
      <div className="w-full max-w-sm">
        <div className="flex justify-center mb-8">
          <Image src="/logo.png" alt="LearnMore Projects" width={160} height={54} className="h-12 w-auto brightness-200" />
        </div>
        <div className="bg-white rounded-3xl p-8 shadow-2xl">
          <div className="w-12 h-12 bg-primary-100 rounded-2xl flex items-center justify-center mb-5">
            <Lock size={22} className="text-primary-700" />
          </div>
          <h1 className="text-2xl font-black text-slate-900 mb-1">Admin Login</h1>
          <p className="text-slate-400 text-sm mb-7">Enter your password to access the dashboard.</p>
          <form onSubmit={submit} className="space-y-4">
            <input
              type="password"
              value={pw}
              onChange={(e) => { setPw(e.target.value); setError(''); }}
              placeholder="Password"
              className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-primary-200 focus:border-primary-400"
              autoFocus
            />
            {error && (
              <p className="text-rose-500 text-xs font-medium flex items-center gap-1"><X size={13} />{error}</p>
            )}
            <button type="submit" className="w-full bg-primary-700 hover:bg-primary-800 text-white font-bold py-3 rounded-xl transition-colors">
              Sign In
            </button>
          </form>
        </div>
        <p className="text-center text-slate-600 text-xs mt-6">
          <Link href="/" className="hover:text-white transition-colors">← Back to website</Link>
        </p>
      </div>
    </div>
  );
}

/* ─── Blog Tab ─── */
function BlogTab() {
  const [posts, setPosts] = useState([]);
  const [hiddenBlogs, setHiddenBlogs] = useState([]);
  const [form, setForm] = useState(emptyBlog);
  const [editingId, setEditingId] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [saved, setSaved] = useState('');

  useEffect(() => {
    setPosts(blogStore.getAll());
    setHiddenBlogs(hiddenStore.getHiddenBlogs());
  }, []);

  const openAdd = () => { setForm(emptyBlog); setEditingId(null); setShowForm(true); };
  const openEdit = (post) => { setForm({ title: post.title, category: post.category, excerpt: post.excerpt, content: post.content, readTime: post.readTime }); setEditingId(post.id); setShowForm(true); };
  const closeForm = () => { setShowForm(false); setEditingId(null); setForm(emptyBlog); };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingId) {
      blogStore.update({ id: editingId, ...form });
      setSaved('updated');
    } else {
      blogStore.add(form);
      setSaved('added');
    }
    setPosts(blogStore.getAll());
    closeForm();
    setTimeout(() => setSaved(''), 3000);
  };

  const handleDelete = (id) => {
    if (!confirm('Delete this blog post?')) return;
    blogStore.delete(id);
    setPosts(blogStore.getAll());
  };

  const handleBuiltinEdit = (post) => {
    setForm({ title: post.title, category: post.category, excerpt: '', content: '', readTime: post.readTime });
    setEditingId(null);
    setShowForm(true);
  };

  const handleBuiltinDelete = (slug) => {
    if (!confirm('Hide this built-in article from the blog page?')) return;
    hiddenStore.hideBuiltinBlog(slug);
    setHiddenBlogs(hiddenStore.getHiddenBlogs());
  };

  const handleBuiltinRestore = (slug) => {
    hiddenStore.showBuiltinBlog(slug);
    setHiddenBlogs(hiddenStore.getHiddenBlogs());
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-xl font-black text-slate-900">Blog Posts</h2>
          <p className="text-slate-400 text-sm mt-0.5">{posts.length} admin-added post{posts.length !== 1 ? 's' : ''}</p>
        </div>
        <button onClick={openAdd}
          className="flex items-center gap-2 bg-primary-700 hover:bg-primary-800 text-white font-semibold text-sm px-4 py-2.5 rounded-xl transition-colors">
          <Plus size={16} /> Add Blog Post
        </button>
      </div>

      {saved && (
        <div className="flex items-center gap-2 bg-green-50 border border-green-200 text-green-700 text-sm font-medium px-4 py-3 rounded-xl mb-5">
          <CheckCircle2 size={16} /> Blog post {saved} successfully!
        </div>
      )}

      {showForm && (
        <form onSubmit={handleSubmit} className="bg-slate-50 border border-slate-200 rounded-2xl p-6 mb-6 space-y-4">
          <h3 className="font-bold text-slate-900 text-base">{editingId ? 'Edit Blog Post' : 'New Blog Post'}</h3>
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-600 mb-1.5">Title *</label>
              <input required value={form.title} onChange={e => setForm(f => ({ ...f, title: e.target.value }))}
                placeholder="Blog post title" className="w-full border border-slate-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary-200" />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-600 mb-1.5">Category *</label>
              <select value={form.category} onChange={e => setForm(f => ({ ...f, category: e.target.value }))}
                className="w-full border border-slate-200 rounded-xl px-3 py-2.5 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-primary-200">
                {BLOG_CATEGORIES.map(c => <option key={c}>{c}</option>)}
              </select>
            </div>
          </div>
          <div>
            <label className="block text-xs font-semibold text-slate-600 mb-1.5">Short Excerpt * <span className="font-normal text-slate-400">(shown on listing page)</span></label>
            <textarea required value={form.excerpt} onChange={e => setForm(f => ({ ...f, excerpt: e.target.value }))}
              rows={2} placeholder="Brief summary of the article..."
              className="w-full border border-slate-200 rounded-xl px-3 py-2.5 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-primary-200" />
          </div>
          <div>
            <label className="block text-xs font-semibold text-slate-600 mb-1.5">Full Content * <span className="font-normal text-slate-400">(full article body)</span></label>
            <textarea required value={form.content} onChange={e => setForm(f => ({ ...f, content: e.target.value }))}
              rows={8} placeholder="Write the full article content here. Use blank lines to separate paragraphs."
              className="w-full border border-slate-200 rounded-xl px-3 py-2.5 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-primary-200" />
          </div>
          <div>
            <label className="block text-xs font-semibold text-slate-600 mb-1.5">Read Time</label>
            <input value={form.readTime} onChange={e => setForm(f => ({ ...f, readTime: e.target.value }))}
              placeholder="5 min read" className="w-full border border-slate-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary-200" />
          </div>
          <div className="flex gap-3 pt-1">
            <button type="submit" className="bg-primary-700 hover:bg-primary-800 text-white font-semibold text-sm px-5 py-2.5 rounded-xl transition-colors">
              {editingId ? 'Update Post' : 'Save Post'}
            </button>
            <button type="button" onClick={closeForm} className="border border-slate-200 text-slate-600 hover:bg-slate-100 font-semibold text-sm px-5 py-2.5 rounded-xl transition-colors">
              Cancel
            </button>
          </div>
        </form>
      )}

      {/* Admin-added posts */}
      {posts.length > 0 && (
        <div className="space-y-3 mb-8">
          {posts.map(post => (
            <div key={post.id} className="flex items-start justify-between gap-4 bg-white border border-primary-100 rounded-2xl px-5 py-4">
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1 flex-wrap">
                  <span className="text-xs font-semibold text-primary-700 bg-primary-50 px-2 py-0.5 rounded-full">{post.category}</span>
                  <span className="text-xs font-semibold text-green-700 bg-green-50 px-2 py-0.5 rounded-full">Admin Added</span>
                  <span className="text-xs text-slate-400">{post.readTime}</span>
                </div>
                <p className="font-bold text-slate-900 text-sm leading-snug">{post.title}</p>
                <p className="text-slate-500 text-xs mt-1 line-clamp-2">{post.excerpt}</p>
              </div>
              <div className="flex items-center gap-1 flex-shrink-0">
                <a href={`/blog/view?id=${post.id}`} target="_blank" rel="noreferrer"
                  className="p-2 text-slate-400 hover:text-primary-700 hover:bg-primary-50 rounded-lg transition-colors" title="View">
                  <Eye size={15} />
                </a>
                <button onClick={() => openEdit(post)}
                  className="p-2 text-slate-400 hover:text-amber-600 hover:bg-amber-50 rounded-lg transition-colors" title="Edit">
                  <Pencil size={15} />
                </button>
                <button onClick={() => handleDelete(post.id)}
                  className="p-2 text-slate-400 hover:text-rose-600 hover:bg-rose-50 rounded-lg transition-colors" title="Delete">
                  <Trash2 size={15} />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Built-in posts */}
      <div>
        <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">Built-in Articles</p>
        <div className="space-y-3">
          {HARDCODED_BLOGS.map(post => {
            const isHidden = hiddenBlogs.includes(post.slug);
            return (
              <div key={post.slug} className={`flex items-start justify-between gap-4 rounded-2xl px-5 py-4 border ${isHidden ? 'bg-rose-50 border-rose-100 opacity-60' : 'bg-slate-50 border-slate-200'}`}>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1 flex-wrap">
                    <span className="text-xs font-semibold text-slate-600 bg-slate-200 px-2 py-0.5 rounded-full">{post.category}</span>
                    <span className="text-xs text-slate-400">{post.readTime}</span>
                    <span className="text-xs text-slate-400">{post.date}</span>
                    {isHidden && <span className="text-xs font-semibold text-rose-600 bg-rose-100 px-2 py-0.5 rounded-full">Hidden</span>}
                  </div>
                  <p className="font-bold text-slate-700 text-sm leading-snug">{post.title}</p>
                </div>
                <div className="flex items-center gap-1 flex-shrink-0">
                  {!isHidden && (
                    <a href={`/blog/${post.slug}`} target="_blank" rel="noreferrer"
                      className="p-2 text-slate-400 hover:text-primary-700 hover:bg-primary-50 rounded-lg transition-colors" title="View">
                      <Eye size={15} />
                    </a>
                  )}
                  <button onClick={() => handleBuiltinEdit(post)}
                    className="p-2 text-slate-400 hover:text-amber-600 hover:bg-amber-50 rounded-lg transition-colors" title="Edit (create new version)">
                    <Pencil size={15} />
                  </button>
                  {isHidden ? (
                    <button onClick={() => handleBuiltinRestore(post.slug)}
                      className="p-2 text-slate-400 hover:text-green-600 hover:bg-green-50 rounded-lg transition-colors text-xs font-semibold" title="Restore">
                      Restore
                    </button>
                  ) : (
                    <button onClick={() => handleBuiltinDelete(post.slug)}
                      className="p-2 text-slate-400 hover:text-rose-600 hover:bg-rose-50 rounded-lg transition-colors" title="Hide from blog">
                      <Trash2 size={15} />
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

/* ─── Projects Tab ─── */
function ProjectsTab() {
  const [projects, setProjects] = useState([]);
  const [hiddenProjects, setHiddenProjects] = useState([]);
  const [form, setForm] = useState(emptyProject);
  const [editingId, setEditingId] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [saved, setSaved] = useState('');

  useEffect(() => {
    setProjects(projectStore.getAll());
    setHiddenProjects(hiddenStore.getHiddenProjects());
  }, []);

  const difficultyColor = { Easy: 'text-green-700 bg-green-50', Medium: 'text-amber-700 bg-amber-50', Hard: 'text-rose-700 bg-rose-50' };

  const openAdd = () => { setForm(emptyProject); setEditingId(null); setShowForm(true); };
  const openEdit = (proj) => { setForm({ title: proj.title, domain: proj.domain, description: proj.description, tech: proj.tech, difficulty: proj.difficulty, duration: proj.duration }); setEditingId(proj.id); setShowForm(true); };
  const closeForm = () => { setShowForm(false); setEditingId(null); setForm(emptyProject); };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingId) {
      projectStore.update({ id: editingId, ...form });
      setSaved('updated');
    } else {
      projectStore.add(form);
      setSaved('added');
    }
    setProjects(projectStore.getAll());
    closeForm();
    setTimeout(() => setSaved(''), 3000);
  };

  const handleDelete = (id) => {
    if (!confirm('Delete this project?')) return;
    projectStore.delete(id);
    setProjects(projectStore.getAll());
  };

  const handleBuiltinProjectEdit = (d) => {
    setForm({ title: '', domain: d.domain, description: '', tech: '', difficulty: 'Medium', duration: '25–30 days' });
    setEditingId(null);
    setShowForm(true);
  };

  const handleBuiltinProjectDelete = (domain) => {
    if (!confirm('Hide this built-in domain from the projects page?')) return;
    hiddenStore.hideBuiltinProject(domain);
    setHiddenProjects(hiddenStore.getHiddenProjects());
  };

  const handleBuiltinProjectRestore = (domain) => {
    hiddenStore.showBuiltinProject(domain);
    setHiddenProjects(hiddenStore.getHiddenProjects());
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-xl font-black text-slate-900">Projects</h2>
          <p className="text-slate-400 text-sm mt-0.5">{projects.length} admin-added project{projects.length !== 1 ? 's' : ''}</p>
        </div>
        <button onClick={openAdd}
          className="flex items-center gap-2 bg-primary-700 hover:bg-primary-800 text-white font-semibold text-sm px-4 py-2.5 rounded-xl transition-colors">
          <Plus size={16} /> Add Project
        </button>
      </div>

      {saved && (
        <div className="flex items-center gap-2 bg-green-50 border border-green-200 text-green-700 text-sm font-medium px-4 py-3 rounded-xl mb-5">
          <CheckCircle2 size={16} /> Project {saved} successfully!
        </div>
      )}

      {showForm && (
        <form onSubmit={handleSubmit} className="bg-slate-50 border border-slate-200 rounded-2xl p-6 mb-6 space-y-4">
          <h3 className="font-bold text-slate-900 text-base">{editingId ? 'Edit Project' : 'New Project'}</h3>
          <div>
            <label className="block text-xs font-semibold text-slate-600 mb-1.5">Project Title *</label>
            <input required value={form.title} onChange={e => setForm(f => ({ ...f, title: e.target.value }))}
              placeholder="e.g., Smart Irrigation System using IoT" className="w-full border border-slate-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary-200" />
          </div>
          <div className="grid sm:grid-cols-3 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-600 mb-1.5">Domain *</label>
              <select value={form.domain} onChange={e => setForm(f => ({ ...f, domain: e.target.value }))}
                className="w-full border border-slate-200 rounded-xl px-3 py-2.5 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-primary-200">
                {DOMAINS.map(d => <option key={d}>{d}</option>)}
              </select>
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-600 mb-1.5">Difficulty</label>
              <select value={form.difficulty} onChange={e => setForm(f => ({ ...f, difficulty: e.target.value }))}
                className="w-full border border-slate-200 rounded-xl px-3 py-2.5 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-primary-200">
                {DIFFICULTIES.map(d => <option key={d}>{d}</option>)}
              </select>
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-600 mb-1.5">Duration</label>
              <input value={form.duration} onChange={e => setForm(f => ({ ...f, duration: e.target.value }))}
                placeholder="25–30 days" className="w-full border border-slate-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary-200" />
            </div>
          </div>
          <div>
            <label className="block text-xs font-semibold text-slate-600 mb-1.5">Description *</label>
            <textarea required value={form.description} onChange={e => setForm(f => ({ ...f, description: e.target.value }))}
              rows={3} placeholder="What does this project do? What problem does it solve?"
              className="w-full border border-slate-200 rounded-xl px-3 py-2.5 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-primary-200" />
          </div>
          <div>
            <label className="block text-xs font-semibold text-slate-600 mb-1.5">Technologies <span className="font-normal text-slate-400">(comma separated)</span></label>
            <input value={form.tech} onChange={e => setForm(f => ({ ...f, tech: e.target.value }))}
              placeholder="Arduino, ESP32, Python, MQTT" className="w-full border border-slate-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary-200" />
          </div>
          <div className="flex gap-3 pt-1">
            <button type="submit" className="bg-primary-700 hover:bg-primary-800 text-white font-semibold text-sm px-5 py-2.5 rounded-xl transition-colors">
              {editingId ? 'Update Project' : 'Save Project'}
            </button>
            <button type="button" onClick={closeForm} className="border border-slate-200 text-slate-600 hover:bg-slate-100 font-semibold text-sm px-5 py-2.5 rounded-xl transition-colors">
              Cancel
            </button>
          </div>
        </form>
      )}

      {/* Admin-added projects */}
      {projects.length > 0 && (
        <div className="space-y-3 mb-8">
          {projects.map(proj => (
            <div key={proj.id} className="flex items-start justify-between gap-4 bg-white border border-primary-100 rounded-2xl px-5 py-4">
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1 flex-wrap">
                  <span className="text-xs font-semibold text-primary-700 bg-primary-50 px-2 py-0.5 rounded-full">{proj.domain}</span>
                  <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${difficultyColor[proj.difficulty] || 'text-slate-600 bg-slate-100'}`}>{proj.difficulty}</span>
                  <span className="text-xs font-semibold text-green-700 bg-green-50 px-2 py-0.5 rounded-full">Admin Added</span>
                  {proj.duration && <span className="text-xs text-slate-400">{proj.duration}</span>}
                </div>
                <p className="font-bold text-slate-900 text-sm leading-snug">{proj.title}</p>
                {proj.description && <p className="text-slate-500 text-xs mt-1 line-clamp-2">{proj.description}</p>}
                {proj.tech && (
                  <div className="flex flex-wrap gap-1 mt-2">
                    {proj.tech.split(',').map(t => t.trim()).filter(Boolean).map(t => (
                      <span key={t} className="text-xs bg-slate-100 text-slate-600 px-2 py-0.5 rounded-full">{t}</span>
                    ))}
                  </div>
                )}
              </div>
              <div className="flex items-center gap-1 flex-shrink-0">
                <button onClick={() => openEdit(proj)}
                  className="p-2 text-slate-400 hover:text-amber-600 hover:bg-amber-50 rounded-lg transition-colors" title="Edit">
                  <Pencil size={15} />
                </button>
                <button onClick={() => handleDelete(proj.id)}
                  className="p-2 text-slate-400 hover:text-rose-600 hover:bg-rose-50 rounded-lg transition-colors" title="Delete">
                  <Trash2 size={15} />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Built-in domains */}
      <div>
        <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">Built-in Domains</p>
        <div className="space-y-3">
          {HARDCODED_PROJECTS.map(d => {
            const isHidden = hiddenProjects.includes(d.domain);
            return (
              <div key={d.domain} className={`flex items-start justify-between gap-4 rounded-2xl px-5 py-4 border ${isHidden ? 'bg-rose-50 border-rose-100 opacity-60' : 'bg-slate-50 border-slate-200'}`}>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1 flex-wrap">
                    <span className="text-xs font-semibold text-slate-600 bg-slate-200 px-2 py-0.5 rounded-full">{d.domain}</span>
                    <span className="text-xs text-slate-400">{d.count} topics</span>
                    {isHidden && <span className="text-xs font-semibold text-rose-600 bg-rose-100 px-2 py-0.5 rounded-full">Hidden</span>}
                  </div>
                  <p className="text-slate-500 text-xs leading-relaxed">{d.sample}</p>
                </div>
                <div className="flex items-center gap-1 flex-shrink-0">
                  <button onClick={() => handleBuiltinProjectEdit(d)}
                    className="p-2 text-slate-400 hover:text-amber-600 hover:bg-amber-50 rounded-lg transition-colors" title="Add project to this domain">
                    <Pencil size={15} />
                  </button>
                  {isHidden ? (
                    <button onClick={() => handleBuiltinProjectRestore(d.domain)}
                      className="p-2 text-slate-400 hover:text-green-600 hover:bg-green-50 rounded-lg transition-colors text-xs font-semibold" title="Restore">
                      Restore
                    </button>
                  ) : (
                    <button onClick={() => handleBuiltinProjectDelete(d.domain)}
                      className="p-2 text-slate-400 hover:text-rose-600 hover:bg-rose-50 rounded-lg transition-colors" title="Hide from projects page">
                      <Trash2 size={15} />
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

/* ─── Main Admin Panel ─── */
export default function AdminPage() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [tab, setTab] = useState('blog');

  useEffect(() => {
    setLoggedIn(adminAuth.isLoggedIn());
  }, []);

  const handleExport = () => {
    const data = {
      blogs: blogStore.getAll(),
      projects: projectStore.getAll(),
      exportedAt: new Date().toISOString(),
    };
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'learnmore-content.json';
    a.click();
    URL.revokeObjectURL(url);
  };

  if (!loggedIn) return <LoginScreen onLogin={() => setLoggedIn(true)} />;

  const blogs = blogStore.getAll();
  const projects = projectStore.getAll();

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Admin Navbar */}
      <header className="bg-white border-b border-slate-100 sticky top-0 z-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 flex items-center justify-between h-14">
          <div className="flex items-center gap-3">
            <Image src="/logo.png" alt="LearnMore" width={120} height={40} className="h-8 w-auto" />
            <span className="text-xs font-bold text-primary-700 bg-primary-50 px-2 py-0.5 rounded-full border border-primary-100">Admin</span>
          </div>
          <div className="flex items-center gap-2">
            <button onClick={handleExport}
              className="flex items-center gap-1.5 text-slate-600 hover:text-primary-700 border border-slate-200 hover:border-primary-300 text-xs font-semibold px-3 py-1.5 rounded-lg transition-colors">
              <Download size={13} /> Export JSON
            </button>
            <Link href="/" target="_blank"
              className="flex items-center gap-1.5 text-slate-600 hover:text-primary-700 text-xs font-semibold px-3 py-1.5 rounded-lg transition-colors">
              <Eye size={13} /> View Site
            </Link>
            <button onClick={() => { adminAuth.logout(); setLoggedIn(false); }}
              className="flex items-center gap-1.5 text-rose-600 hover:bg-rose-50 text-xs font-semibold px-3 py-1.5 rounded-lg transition-colors">
              <LogOut size={13} /> Logout
            </button>
          </div>
        </div>
      </header>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8">
        {/* Warning banner */}
        <div className="flex items-start gap-3 bg-amber-50 border border-amber-200 rounded-2xl px-5 py-4 mb-6">
          <AlertTriangle size={18} className="text-amber-600 flex-shrink-0 mt-0.5" />
          <div>
            <p className="text-amber-800 font-semibold text-sm">Content is stored in this browser only</p>
            <p className="text-amber-700 text-xs mt-0.5">
              Visitors on other devices won't see your additions. Use <strong>Export JSON</strong> to share the data so it can be permanently added to the website code.
            </p>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="bg-white rounded-2xl border border-slate-100 px-6 py-5">
            <p className="text-3xl font-black text-primary-700">{blogs.length}</p>
            <p className="text-slate-500 text-sm font-medium mt-1">Blog Posts Added</p>
          </div>
          <div className="bg-white rounded-2xl border border-slate-100 px-6 py-5">
            <p className="text-3xl font-black text-primary-700">{projects.length}</p>
            <p className="text-slate-500 text-sm font-medium mt-1">Projects Added</p>
          </div>
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-3xl border border-slate-100 overflow-hidden">
          <div className="flex border-b border-slate-100">
            {[
              { key: 'blog', label: 'Blog Posts', icon: BookOpen },
              { key: 'projects', label: 'Projects', icon: FolderOpen },
            ].map(({ key, label, icon: Icon }) => (
              <button
                key={key}
                onClick={() => setTab(key)}
                className={`flex items-center gap-2 px-6 py-4 text-sm font-semibold border-b-2 transition-colors ${
                  tab === key
                    ? 'border-primary-700 text-primary-700'
                    : 'border-transparent text-slate-500 hover:text-slate-700'
                }`}
              >
                <Icon size={16} />
                {label}
              </button>
            ))}
          </div>
          <div className="p-6">
            {tab === 'blog' ? <BlogTab /> : <ProjectsTab />}
          </div>
        </div>
      </div>
    </div>
  );
}
