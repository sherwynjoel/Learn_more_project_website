'use client';

const KEYS = { auth: 'lmp_auth', blogs: 'lmp_blogs', projects: 'lmp_projects' };
export const ADMIN_PASS = 'LearnMore@2025';

function read(key) {
  if (typeof window === 'undefined') return [];
  try { return JSON.parse(localStorage.getItem(key) || '[]'); } catch { return []; }
}
function write(key, data) {
  if (typeof window !== 'undefined') localStorage.setItem(key, JSON.stringify(data));
}

export const adminAuth = {
  isLoggedIn: () => typeof window !== 'undefined' && localStorage.getItem(KEYS.auth) === '1',
  login: (pw) => { if (pw === ADMIN_PASS) { localStorage.setItem(KEYS.auth, '1'); return true; } return false; },
  logout: () => { if (typeof window !== 'undefined') localStorage.removeItem(KEYS.auth); },
};

export const blogStore = {
  getAll: () => read(KEYS.blogs),
  add: (post) => write(KEYS.blogs, [{ ...post, id: Date.now().toString(), createdAt: new Date().toISOString() }, ...read(KEYS.blogs)]),
  update: (post) => write(KEYS.blogs, read(KEYS.blogs).map(p => p.id === post.id ? { ...p, ...post } : p)),
  delete: (id) => write(KEYS.blogs, read(KEYS.blogs).filter(p => p.id !== id)),
};

export const projectStore = {
  getAll: () => read(KEYS.projects),
  add: (proj) => write(KEYS.projects, [{ ...proj, id: Date.now().toString(), createdAt: new Date().toISOString() }, ...read(KEYS.projects)]),
  update: (proj) => write(KEYS.projects, read(KEYS.projects).map(p => p.id === proj.id ? { ...p, ...proj } : p)),
  delete: (id) => write(KEYS.projects, read(KEYS.projects).filter(p => p.id !== id)),
};
