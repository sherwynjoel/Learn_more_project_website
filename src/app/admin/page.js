'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  Lock, LogOut, Plus, Trash2, BookOpen, FolderOpen,
  Download, Eye, AlertTriangle, CheckCircle2, X,
} from 'lucide-react';
import { adminAuth, blogStore, projectStore } from '@/lib/adminStore';

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
  const [form, setForm] = useState(emptyBlog);
  const [showForm, setShowForm] = useState(false);
  const [saved, setSaved] = useState(false);

  useEffect(() => { setPosts(blogStore.getAll()); }, []);

  const handleAdd = (e) => {
    e.preventDefault();
    blogStore.add(form);
    setPosts(blogStore.getAll());
    setForm(emptyBlog);
    setShowForm(false);
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  const handleDelete = (id) => {
    if (!confirm('Delete this blog post?')) return;
    blogStore.delete(id);
    setPosts(blogStore.getAll());
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-xl font-black text-slate-900">Blog Posts</h2>
          <p className="text-slate-400 text-sm mt-0.5">{posts.length} admin-added post{posts.length !== 1 ? 's' : ''}</p>
        </div>
        <button
          onClick={() => setShowForm(!showForm)}
          className="flex items-center gap-2 bg-primary-700 hover:bg-primary-800 text-white font-semibold text-sm px-4 py-2.5 rounded-xl transition-colors"
        >
          <Plus size={16} /> Add Blog Post
        </button>
      </div>

      {saved && (
        <div className="flex items-center gap-2 bg-green-50 border border-green-200 text-green-700 text-sm font-medium px-4 py-3 rounded-xl mb-5">
          <CheckCircle2 size={16} /> Blog post added successfully!
        </div>
      )}

      {showForm && (
        <form onSubmit={handleAdd} className="bg-slate-50 border border-slate-200 rounded-2xl p-6 mb-6 space-y-4">
          <h3 className="font-bold text-slate-900 text-base mb-2">New Blog Post</h3>
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
              Save Post
            </button>
            <button type="button" onClick={() => setShowForm(false)} className="border border-slate-200 text-slate-600 hover:bg-slate-100 font-semibold text-sm px-5 py-2.5 rounded-xl transition-colors">
              Cancel
            </button>
          </div>
        </form>
      )}

      {posts.length === 0 ? (
        <div className="text-center py-16 text-slate-400">
          <BookOpen size={40} className="mx-auto mb-3 opacity-30" />
          <p className="font-medium">No blog posts added yet.</p>
          <p className="text-sm mt-1">Click "Add Blog Post" to get started.</p>
        </div>
      ) : (
        <div className="space-y-3">
          {posts.map(post => (
            <div key={post.id} className="flex items-start justify-between gap-4 bg-white border border-slate-100 rounded-2xl px-5 py-4">
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs font-semibold text-primary-700 bg-primary-50 px-2 py-0.5 rounded-full">{post.category}</span>
                  <span className="text-xs text-slate-400">{post.readTime}</span>
                </div>
                <p className="font-bold text-slate-900 text-sm leading-snug">{post.title}</p>
                <p className="text-slate-500 text-xs mt-1 line-clamp-2">{post.excerpt}</p>
              </div>
              <div className="flex items-center gap-2 flex-shrink-0">
                <a href={`/blog/view?id=${post.id}`} target="_blank" rel="noreferrer"
                  className="p-2 text-slate-400 hover:text-primary-700 hover:bg-primary-50 rounded-lg transition-colors">
                  <Eye size={16} />
                </a>
                <button onClick={() => handleDelete(post.id)}
                  className="p-2 text-slate-400 hover:text-rose-600 hover:bg-rose-50 rounded-lg transition-colors">
                  <Trash2 size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

/* ─── Projects Tab ─── */
function ProjectsTab() {
  const [projects, setProjects] = useState([]);
  const [form, setForm] = useState(emptyProject);
  const [showForm, setShowForm] = useState(false);
  const [saved, setSaved] = useState(false);

  useEffect(() => { setProjects(projectStore.getAll()); }, []);

  const handleAdd = (e) => {
    e.preventDefault();
    projectStore.add(form);
    setProjects(projectStore.getAll());
    setForm(emptyProject);
    setShowForm(false);
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  const handleDelete = (id) => {
    if (!confirm('Delete this project?')) return;
    projectStore.delete(id);
    setProjects(projectStore.getAll());
  };

  const difficultyColor = { Easy: 'text-green-700 bg-green-50', Medium: 'text-amber-700 bg-amber-50', Hard: 'text-rose-700 bg-rose-50' };

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-xl font-black text-slate-900">Projects</h2>
          <p className="text-slate-400 text-sm mt-0.5">{projects.length} admin-added project{projects.length !== 1 ? 's' : ''}</p>
        </div>
        <button
          onClick={() => setShowForm(!showForm)}
          className="flex items-center gap-2 bg-primary-700 hover:bg-primary-800 text-white font-semibold text-sm px-4 py-2.5 rounded-xl transition-colors"
        >
          <Plus size={16} /> Add Project
        </button>
      </div>

      {saved && (
        <div className="flex items-center gap-2 bg-green-50 border border-green-200 text-green-700 text-sm font-medium px-4 py-3 rounded-xl mb-5">
          <CheckCircle2 size={16} /> Project added successfully!
        </div>
      )}

      {showForm && (
        <form onSubmit={handleAdd} className="bg-slate-50 border border-slate-200 rounded-2xl p-6 mb-6 space-y-4">
          <h3 className="font-bold text-slate-900 text-base mb-2">New Project</h3>
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
              Save Project
            </button>
            <button type="button" onClick={() => setShowForm(false)} className="border border-slate-200 text-slate-600 hover:bg-slate-100 font-semibold text-sm px-5 py-2.5 rounded-xl transition-colors">
              Cancel
            </button>
          </div>
        </form>
      )}

      {projects.length === 0 ? (
        <div className="text-center py-16 text-slate-400">
          <FolderOpen size={40} className="mx-auto mb-3 opacity-30" />
          <p className="font-medium">No projects added yet.</p>
          <p className="text-sm mt-1">Click "Add Project" to get started.</p>
        </div>
      ) : (
        <div className="space-y-3">
          {projects.map(proj => (
            <div key={proj.id} className="flex items-start justify-between gap-4 bg-white border border-slate-100 rounded-2xl px-5 py-4">
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1 flex-wrap">
                  <span className="text-xs font-semibold text-primary-700 bg-primary-50 px-2 py-0.5 rounded-full">{proj.domain}</span>
                  <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${difficultyColor[proj.difficulty] || 'text-slate-600 bg-slate-100'}`}>{proj.difficulty}</span>
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
              <button onClick={() => handleDelete(proj.id)}
                className="p-2 text-slate-400 hover:text-rose-600 hover:bg-rose-50 rounded-lg transition-colors flex-shrink-0">
                <Trash2 size={16} />
              </button>
            </div>
          ))}
        </div>
      )}
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
