const SB_URL = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const SB_ANON = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

function client(key) {
  const h = {
    'Content-Type': 'application/json',
    'apikey': key,
    'Authorization': `Bearer ${key}`,
    'Prefer': 'return=representation',
  };
  return {
    from: (table) => ({
      select: async () => {
        if (!SB_URL) return { data: [], error: null };
        const res = await fetch(`${SB_URL}/rest/v1/${table}?select=*&order=created_at.desc`, { headers: h, cache: 'no-store' });
        if (!res.ok) return { data: [], error: await res.text() };
        return { data: await res.json(), error: null };
      },
      insert: async (record) => {
        const res = await fetch(`${SB_URL}/rest/v1/${table}`, { method: 'POST', headers: h, body: JSON.stringify(record) });
        if (!res.ok) return { data: null, error: await res.text() };
        const data = await res.json();
        return { data: Array.isArray(data) ? data[0] : data, error: null };
      },
      update: async (id, record) => {
        const res = await fetch(`${SB_URL}/rest/v1/${table}?id=eq.${id}`, { method: 'PATCH', headers: h, body: JSON.stringify(record) });
        if (!res.ok) return { data: null, error: await res.text() };
        const data = await res.json();
        return { data: Array.isArray(data) ? data[0] : data, error: null };
      },
      delete: async (id) => {
        const res = await fetch(`${SB_URL}/rest/v1/${table}?id=eq.${id}`, { method: 'DELETE', headers: h });
        return { error: res.ok ? null : await res.text() };
      },
    }),
  };
}

export const supabase = client(SB_ANON);

export function supabaseService() {
  return client(process.env.SUPABASE_SERVICE_ROLE_KEY || '');
}
