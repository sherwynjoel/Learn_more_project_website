'use client';

const PASS = 'LearnMore@2025';
export const ADMIN_PASS = PASS;
const AUTH_KEY = 'lmp_auth';

export const adminAuth = {
  isLoggedIn: () => typeof window !== 'undefined' && localStorage.getItem(AUTH_KEY) === '1',
  login: (pw) => { if (pw === PASS) { localStorage.setItem(AUTH_KEY, '1'); return true; } return false; },
  logout: () => { if (typeof window !== 'undefined') localStorage.removeItem(AUTH_KEY); },
};

const authHeaders = { 'Content-Type': 'application/json', 'Authorization': `Bearer ${PASS}` };

// In development use the Next.js API route; in production use the PHP file on Hostinger.
const BASE = process.env.NODE_ENV === 'development' ? '/api/content' : '/api.php';

function apiUrl(type, id = '') {
  return `${BASE}?type=${type}${id ? '&id=' + encodeURIComponent(id) : ''}`;
}

async function safeJson(res) {
  try { return await res.json(); } catch { return null; }
}

async function getAll(type) {
  try {
    const r = await fetch(apiUrl(type));
    if (!r.ok) return [];
    const d = await safeJson(r);
    return Array.isArray(d) ? d : [];
  } catch { return []; }
}

async function write(type, method, id = '', body = null) {
  try {
    const r = await fetch(apiUrl(type, id), {
      method,
      headers: authHeaders,
      body: body ? JSON.stringify(body) : undefined,
    });
    return r.ok;
  } catch { return false; }
}

export const blogStore = {
  getAll:  ()              => getAll('blogs'),
  add:     (post)          => write('blogs', 'POST', '', post),
  update:  ({id, ...rest}) => write('blogs', 'PUT', id, rest),
  delete:  (id)            => write('blogs', 'DELETE', id),
};

export const projectStore = {
  getAll:  ()              => getAll('projects'),
  add:     (proj)          => write('projects', 'POST', '', proj),
  update:  ({id, ...rest}) => write('projects', 'PUT', id, rest),
  delete:  (id)            => write('projects', 'DELETE', id),
};

export const builtinBlogStore = {
  getAll:  () => getAll('builtinblogs'),
  save:    async (data) => {
    await write('builtinblogs', 'DELETE', data.id);
    return write('builtinblogs', 'POST', '', data);
  },
  restore: (id) => write('builtinblogs', 'DELETE', id),
};

export const domainOverrideStore = {
  getAll:  () => getAll('domains'),
  save:    async (data) => {
    await write('domains', 'DELETE', data.id);
    return write('domains', 'POST', '', data);
  },
  restore: (id) => write('domains', 'DELETE', id),
};
