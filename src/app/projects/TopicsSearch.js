'use client';

import { useState, useMemo } from 'react';
import { Search, ChevronRight } from 'lucide-react';

const DOMAINS = [
  'All',
  'Embedded Systems',
  'IoT Projects',
  'AI / Machine Learning',
  'Robotics',
  'Bio-Medical Engineering',
  'Power Electronics',
];

const domainColor = {
  'Embedded Systems':      'bg-blue-50 text-blue-700 border-blue-200',
  'IoT Projects':          'bg-teal-50 text-teal-700 border-teal-200',
  'AI / Machine Learning': 'bg-purple-50 text-purple-700 border-purple-200',
  'Robotics':              'bg-orange-50 text-orange-700 border-orange-200',
  'Bio-Medical Engineering':'bg-rose-50 text-rose-700 border-rose-200',
  'Power Electronics':     'bg-yellow-50 text-yellow-700 border-yellow-200',
};

const PAGE_SIZE = 30;

export default function TopicsSearch({ topics }) {
  const [query, setQuery] = useState('');
  const [domain, setDomain] = useState('All');
  const [page, setPage] = useState(1);

  const filtered = useMemo(() => {
    const q = query.toLowerCase();
    return topics.filter(t =>
      (domain === 'All' || t.domain === domain) &&
      (!q || t.title.toLowerCase().includes(q))
    );
  }, [query, domain, topics]);

  const paginated = filtered.slice(0, page * PAGE_SIZE);
  const hasMore = paginated.length < filtered.length;

  const reset = (newDomain) => { setDomain(newDomain); setPage(1); };
  const onSearch = (e) => { setQuery(e.target.value); setPage(1); };

  return (
    <section className="py-14 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-black text-slate-900 mb-2">Browse All Project Topics</h2>
          <p className="text-slate-500 text-sm">{topics.length} project titles available — search by keyword or filter by domain</p>
        </div>

        {/* Search */}
        <div className="relative max-w-xl mx-auto mb-6">
          <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
          <input
            type="text"
            value={query}
            onChange={onSearch}
            placeholder="Search project titles…"
            className="w-full pl-10 pr-4 py-3 rounded-2xl border border-slate-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 shadow-sm"
          />
        </div>

        {/* Domain filter */}
        <div className="flex flex-wrap gap-2 justify-center mb-8">
          {DOMAINS.map(d => (
            <button
              key={d}
              onClick={() => reset(d)}
              className={`px-4 py-2 rounded-xl text-xs font-bold border transition-all ${
                domain === d
                  ? 'bg-primary-700 text-white border-primary-700 shadow-md'
                  : 'bg-white text-slate-600 border-slate-200 hover:border-slate-300'
              }`}
            >
              {d}
            </button>
          ))}
        </div>

        {/* Results count */}
        <p className="text-slate-400 text-xs mb-4 text-center">{filtered.length} topics found</p>

        {/* Grid */}
        {filtered.length === 0 ? (
          <div className="text-center py-12 text-slate-400 text-sm">No topics found for "{query}"</div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {paginated.map((t, i) => (
              <div key={i} className="bg-white rounded-2xl border border-slate-100 p-4 flex gap-3 hover:shadow-md hover:border-slate-200 transition-all">
                <ChevronRight size={14} className="text-primary-500 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-slate-800 text-sm font-semibold leading-snug">{t.title}</p>
                  <span className={`inline-block mt-2 text-xs font-semibold px-2 py-0.5 rounded-full border ${domainColor[t.domain] || 'bg-slate-100 text-slate-600 border-slate-200'}`}>
                    {t.domain}
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Load more */}
        {hasMore && (
          <div className="text-center mt-8">
            <button
              onClick={() => setPage(p => p + 1)}
              className="bg-white border border-slate-200 hover:border-primary-300 hover:text-primary-700 text-slate-600 font-semibold text-sm px-6 py-3 rounded-xl transition-colors"
            >
              Show more ({filtered.length - paginated.length} remaining)
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
