'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Clock, ArrowRight, Sparkles } from 'lucide-react';

export default function BlogListClient({ hardcodedPosts }) {
  const [adminPosts, setAdminPosts] = useState([]);
  const [builtinOverrides, setBuiltinOverrides] = useState([]);

  useEffect(() => {
    const base = process.env.NODE_ENV === 'development' ? '/api/content' : '/api.php';
    fetch(`${base}?type=blogs`).then(r => r.ok ? r.json() : []).then(d => setAdminPosts(Array.isArray(d) ? d : [])).catch(() => {});
    fetch(`${base}?type=builtinblogs`).then(r => r.ok ? r.json() : []).then(d => setBuiltinOverrides(Array.isArray(d) ? d : [])).catch(() => {});
  }, []);

  const overrideMap = Object.fromEntries(builtinOverrides.map(o => [o.id, o]));

  const effectiveBuiltin = hardcodedPosts
    .filter(p => !overrideMap[p.slug]?.hidden)
    .map(p => {
      const ov = overrideMap[p.slug];
      if (!ov) return p;
      return {
        ...p,
        title:    ov.title    || p.title,
        category: ov.category || p.category,
        readTime: ov.readTime || p.readTime,
        date:     ov.date     || p.date,
        excerpt:  ov.excerpt  || p.excerpt,
      };
    });

  return (
    <section className="py-14 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Admin-added posts */}
        {adminPosts.length > 0 && (
          <div className="mb-10">
            <div className="flex items-center gap-2 mb-5">
              <Sparkles size={16} className="text-primary-700" />
              <h2 className="font-black text-slate-900 text-base">Latest Articles</h2>
              <span className="text-xs font-bold text-primary-700 bg-primary-100 px-2 py-0.5 rounded-full">New</span>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {adminPosts.map(post => (
                <article key={post.id} className="bg-white rounded-3xl border border-primary-100 p-6 flex flex-col hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-bold px-3 py-1 rounded-full bg-primary-100 text-primary-700">{post.category}</span>
                    {post.readTime && <span className="flex items-center gap-1 text-slate-400 text-xs"><Clock size={11} />{post.readTime}</span>}
                  </div>
                  <h2 className="font-black text-slate-900 text-base leading-snug mb-3 flex-1">{post.title}</h2>
                  {post.excerpt && <p className="text-slate-500 text-sm leading-relaxed mb-5">{post.excerpt}</p>}
                  <div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-100">
                    <span className="text-slate-400 text-xs">{new Date(post.createdAt).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}</span>
                    {post.content && (
                      <Link href={`/blog/view?id=${post.id}`} className="inline-flex items-center gap-1.5 text-primary-700 font-semibold text-xs hover:gap-2.5 transition-all">
                        Read <ArrowRight size={12} />
                      </Link>
                    )}
                  </div>
                </article>
              ))}
            </div>
          </div>
        )}

        {/* Built-in posts (with overrides applied) */}
        {effectiveBuiltin.length > 0 && (
          <div className={adminPosts.length > 0 ? 'border-t border-slate-200 pt-10' : ''}>
            {adminPosts.length > 0 && <h2 className="font-black text-slate-900 text-base mb-5">More Articles</h2>}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {effectiveBuiltin.map(post => (
                <article key={post.slug} className="bg-white rounded-3xl border border-slate-100 p-6 flex flex-col hover:shadow-lg hover:shadow-slate-200/60 transition-all duration-300 hover:-translate-y-0.5">
                  <div className="flex items-center justify-between mb-4">
                    <span className={`text-xs font-bold px-3 py-1 rounded-full ${post.categoryColor}`}>{post.category}</span>
                    <span className="flex items-center gap-1 text-slate-400 text-xs"><Clock size={11} />{post.readTime}</span>
                  </div>
                  <h2 className="font-black text-slate-900 text-base leading-snug mb-3 flex-1">{post.title}</h2>
                  <p className="text-slate-500 text-sm leading-relaxed mb-5">{post.excerpt}</p>
                  <div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-100">
                    <span className="text-slate-400 text-xs">{post.date}</span>
                    <Link href={`/blog/${post.slug}`} className="inline-flex items-center gap-1.5 text-primary-700 font-semibold text-xs hover:gap-2.5 transition-all">
                      Read article <ArrowRight size={12} />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
