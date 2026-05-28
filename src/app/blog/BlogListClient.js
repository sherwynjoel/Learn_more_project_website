'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowRight, Clock, BookOpen, Sparkles } from 'lucide-react';
import { blogStore } from '@/lib/adminStore';

export default function BlogListClient({ hardcodedPosts }) {
  const [adminPosts, setAdminPosts] = useState([]);

  useEffect(() => {
    setAdminPosts(blogStore.getAll());
  }, []);

  const categoryColor = (cat) => {
    const map = {
      'Project Ideas': 'bg-primary-100 text-primary-700',
      'Viva Prep': 'bg-green-100 text-green-700',
      'Comparison': 'bg-orange-100 text-orange-700',
      'Career': 'bg-blue-100 text-blue-700',
      'IoT': 'bg-teal-100 text-teal-700',
      'AI / ML': 'bg-purple-100 text-purple-700',
      'Embedded': 'bg-indigo-100 text-indigo-700',
    };
    return map[cat] || 'bg-slate-100 text-slate-700';
  };

  return (
    <section className="py-16 bg-slate-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-6">
          {/* Admin-added posts first */}
          {adminPosts.map((post) => (
            <a
              key={post.id}
              href={`/blog/view?id=${post.id}`}
              className="group block bg-white rounded-2xl border border-primary-100 p-6 sm:p-8 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300"
            >
              <div className="flex items-start gap-4 sm:gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center">
                  <BookOpen size={20} className="text-primary-700" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-2 mb-3">
                    <span className={`text-xs font-bold px-3 py-1 rounded-full ${categoryColor(post.category)}`}>
                      {post.category}
                    </span>
                    <span className="text-xs font-semibold text-primary-600 bg-primary-50 px-2 py-0.5 rounded-full flex items-center gap-1">
                      <Sparkles size={10} /> New
                    </span>
                    {post.readTime && (
                      <span className="text-xs text-slate-400 flex items-center gap-1">
                        <Clock size={11} /> {post.readTime}
                      </span>
                    )}
                  </div>
                  <h2 className="font-black text-slate-900 text-lg leading-snug mb-2 group-hover:text-primary-700 transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-slate-500 text-sm leading-relaxed mb-4">{post.excerpt}</p>
                  <span className="inline-flex items-center gap-1.5 text-primary-700 font-semibold text-sm group-hover:gap-2.5 transition-all">
                    Read article <ArrowRight size={14} />
                  </span>
                </div>
              </div>
            </a>
          ))}

          {/* Hardcoded posts */}
          {hardcodedPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group block bg-white rounded-2xl border border-slate-100 p-6 sm:p-8 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300"
            >
              <div className="flex items-start gap-4 sm:gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center">
                  <BookOpen size={20} className="text-primary-700" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-2 mb-3">
                    <span className={`text-xs font-bold px-3 py-1 rounded-full ${post.categoryColor}`}>
                      {post.category}
                    </span>
                    <span className="text-xs text-slate-400 flex items-center gap-1">
                      <Clock size={11} /> {post.readTime}
                    </span>
                    <span className="text-xs text-slate-400">{post.date}</span>
                  </div>
                  <h2 className="font-black text-slate-900 text-lg leading-snug mb-2 group-hover:text-primary-700 transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-slate-500 text-sm leading-relaxed mb-4">{post.excerpt}</p>
                  <span className="inline-flex items-center gap-1.5 text-primary-700 font-semibold text-sm group-hover:gap-2.5 transition-all">
                    Read article <ArrowRight size={14} />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
