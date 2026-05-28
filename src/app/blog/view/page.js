'use client';

import { useEffect, useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, Clock, CalendarDays } from 'lucide-react';

const REPO = 'sherwynjoel/Learn_more_project_website';

function BlogViewContent() {
  const searchParams = useSearchParams();
  const id = searchParams.get('id');
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) { setLoading(false); return; }
    fetch(`https://raw.githubusercontent.com/${REPO}/main/data/blogs.json`, { cache: 'no-store' })
      .then(r => r.json())
      .then(posts => {
        setPost(posts.find(p => p.id === id) || null);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [id]);

  if (loading) return <div className="py-32 text-center text-slate-400 text-sm">Loading...</div>;

  if (!post) {
    return (
      <section className="py-24 bg-slate-50 text-center">
        <p className="text-slate-400 text-lg font-medium mb-4">Post not found.</p>
        <Link href="/blog" className="text-primary-700 font-semibold hover:underline">← Back to Blog</Link>
      </section>
    );
  }

  const dateStr = new Date(post.createdAt).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' });

  return (
    <>
      <section className="bg-gradient-to-br from-primary-950 to-primary-800 py-14">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <Link href="/blog" className="inline-flex items-center gap-1.5 text-primary-300 hover:text-white text-sm font-medium transition-colors mb-6">
            <ArrowLeft size={14} /> Back to Blog
          </Link>
          <span className="inline-block bg-white/10 text-primary-200 text-xs font-semibold px-3 py-1 rounded-full border border-white/10 mb-4">
            {post.category}
          </span>
          <h1 className="text-3xl md:text-4xl font-black text-white leading-tight mb-4">{post.title}</h1>
          <div className="flex flex-wrap items-center gap-4 text-primary-300 text-sm">
            {(post.read_time || post.readTime) && (
              <span className="flex items-center gap-1.5"><Clock size={13} />{post.read_time || post.readTime}</span>
            )}
            <span className="flex items-center gap-1.5"><CalendarDays size={13} />{dateStr}</span>
          </div>
        </div>
      </section>

      <section className="py-12 bg-slate-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="bg-white rounded-3xl border border-slate-100 p-6 sm:p-10">
            {post.excerpt && (
              <p className="text-slate-600 text-base leading-relaxed border-l-4 border-primary-400 pl-5 mb-8 italic">
                {post.excerpt}
              </p>
            )}
            <div className="text-slate-700 text-sm leading-relaxed whitespace-pre-line">
              {post.content}
            </div>
          </div>
          <div className="mt-8">
            <Link href="/blog" className="inline-flex items-center gap-2 text-primary-700 font-semibold text-sm hover:underline">
              <ArrowLeft size={14} /> Back to all articles
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default function BlogViewPage() {
  return (
    <Suspense fallback={<div className="py-32 text-center text-slate-400 text-sm">Loading...</div>}>
      <BlogViewContent />
    </Suspense>
  );
}
