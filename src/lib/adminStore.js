'use client';

const PASS = 'LearnMore@2025';
export const ADMIN_PASS = PASS;

const apiHeaders = {
  'Content-Type': 'application/json',
  'Authorization': `Bearer ${PASS}`,
};

// ── Auth (still localStorage) ─────────────────────────────────────
const AUTH_KEY = 'lmp_auth';
export const adminAuth = {
  isLoggedIn: () => typeof window !== 'undefined' && localStorage.getItem(AUTH_KEY) === '1',
  login: (pw) => { if (pw === PASS) { localStorage.setItem(AUTH_KEY, '1'); return true; } return false; },
  logout: () => { if (typeof window !== 'undefined') localStorage.removeItem(AUTH_KEY); },
};

// ── Blog store (Supabase via API routes) ─────────────────────────
export const blogStore = {
  getAll: async () => {
    try {
      const res = await fetch('/api/admin/blogs', { headers: apiHeaders });
      return res.ok ? res.json() : [];
    } catch { return []; }
  },
  add: async (post) => {
    const res = await fetch('/api/admin/blogs', { method: 'POST', headers: apiHeaders, body: JSON.stringify(post) });
    return res.ok;
  },
  update: async ({ id, ...rest }) => {
    const res = await fetch(`/api/admin/blogs/${id}`, { method: 'PUT', headers: apiHeaders, body: JSON.stringify(rest) });
    return res.ok;
  },
  delete: async (id) => {
    const res = await fetch(`/api/admin/blogs/${id}`, { method: 'DELETE', headers: apiHeaders });
    return res.ok;
  },
};

// ── Project store (Supabase via API routes) ───────────────────────
export const projectStore = {
  getAll: async () => {
    try {
      const res = await fetch('/api/admin/projects', { headers: apiHeaders });
      return res.ok ? res.json() : [];
    } catch { return []; }
  },
  add: async (proj) => {
    const res = await fetch('/api/admin/projects', { method: 'POST', headers: apiHeaders, body: JSON.stringify(proj) });
    return res.ok;
  },
  update: async ({ id, ...rest }) => {
    const res = await fetch(`/api/admin/projects/${id}`, { method: 'PUT', headers: apiHeaders, body: JSON.stringify(rest) });
    return res.ok;
  },
  delete: async (id) => {
    const res = await fetch(`/api/admin/projects/${id}`, { method: 'DELETE', headers: apiHeaders });
    return res.ok;
  },
};

// ── Hidden built-ins (localStorage, admin-only) ───────────────────
const HIDDEN = { blogs: 'lmp_hidden_blogs', projects: 'lmp_hidden_projects' };

function readLocal(key) {
  if (typeof window === 'undefined') return [];
  try { return JSON.parse(localStorage.getItem(key) || '[]'); } catch { return []; }
}
function writeLocal(key, data) {
  if (typeof window !== 'undefined') localStorage.setItem(key, JSON.stringify(data));
}

export const hiddenStore = {
  getHiddenBlogs: () => readLocal(HIDDEN.blogs),
  hideBuiltinBlog: (slug) => { const h = readLocal(HIDDEN.blogs); if (!h.includes(slug)) writeLocal(HIDDEN.blogs, [...h, slug]); },
  showBuiltinBlog: (slug) => writeLocal(HIDDEN.blogs, readLocal(HIDDEN.blogs).filter(s => s !== slug)),
  getHiddenProjects: () => readLocal(HIDDEN.projects),
  hideBuiltinProject: (d) => { const h = readLocal(HIDDEN.projects); if (!h.includes(d)) writeLocal(HIDDEN.projects, [...h, d]); },
  showBuiltinProject: (d) => writeLocal(HIDDEN.projects, readLocal(HIDDEN.projects).filter(x => x !== d)),
};
