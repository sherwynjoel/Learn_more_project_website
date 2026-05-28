'use client';

import { useEffect, useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, Clock, Tag } from 'lucide-react';
import { blogStore } from '@/lib/adminStore';

function BlogViewContent() {
  const searchParams = useSearchParams();
  const id = searchParams.get('id');
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (id) {
      const found = blogStore.getAll().find(p => p.id === id);
      setPost(found || null);
    }
    setLoading(false);
  }, [id]);

  if (loading) return null;

  if (!post) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center px-4">
        <div className="text-center">
          <p className="text-slate-400 text-lg font-medium mb-4">Post not found.</p>
          <Link href="/blog" className="text-primary-700 font-semibold hover:underline">← Back to Blog</Link>
        </div>
      </div>
    );
  }

  const dateStr = new Date(post.createdAt).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' });

  return (
    <div className="min-h-screen bg-slate-50">
      <section className="bg-gradient-to-br from-primary-950 to-primary-800 py-14">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <Link href="/blog" className="inline-flex items-center gap-1.5 text-primary-300 hover:text-white text-sm font-medium transition-colors mb-6">
            <ArrowLeft size={14} /> Back to Blog
          </Link>
          <div className="flex items-center gap-3 mb-4">
            <span className="bg-white/10 text-primary-200 text-xs font-semibold px-3 py-1 rounded-full border border-white/10">
              {post.category}
            </span>
          </div>
          <h1 className="text-3xl md:text-4xl font-black text-white leading-tight mb-4">{post.title}</h1>
          <div className="flex items-center gap-4 text-primary-300 text-sm">
            <span className="flex items-center gap-1.5"><Clock size={13} />{post.readTime}</span>
            <span className="flex items-center gap-1.5"><Tag size={13} />{dateStr}</span>
          </div>
        </div>
      </section>

      <section className="py-12 bg-slate-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="bg-white rounded-3xl border border-slate-100 p-6 sm:p-10">
            {post.excerpt && (
              <p className="text-slate-600 text-base leading-relaxed border-l-4 border-primary-400 pl-4 mb-8 italic">
                {post.excerpt}
              </p>
            )}
            <div className="prose-content text-slate-700 text-sm leading-relaxed whitespace-pre-line space-y-4">
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
    </div>
  );
}

export default function BlogViewPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-slate-50" />}>
      <BlogViewContent />
    </Suspense>
  );
}
