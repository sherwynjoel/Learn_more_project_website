import Link from 'next/link';
import { ArrowRight, Clock, BookOpen, MessageCircle } from 'lucide-react';

export const metadata = {
  title: 'Blog & Resources | LearnMore Projects — Final Year Project Guides',
  description:
    'Free guides, tips, and project ideas for engineering students. Learn how to pick a final year project, clear your viva, and get placed.',
};

const posts = [
  {
    slug: 'top-final-year-projects-ece-2025',
    category: 'Project Ideas',
    categoryColor: 'bg-primary-100 text-primary-700',
    title: 'Top 20 Final Year Projects for ECE Students in 2025',
    excerpt:
      'A curated list of high-scoring, implementable project ideas across Embedded AI, IoT, Bio-Medical, and Communication — with difficulty ratings and IEEE paper references for each.',
    readTime: '8 min read',
    date: 'May 2025',
    featured: true,
  },
  {
    slug: 'how-to-clear-final-year-viva',
    category: 'Viva Prep',
    categoryColor: 'bg-green-100 text-green-700',
    title: 'How to Clear Your Final Year Viva Without Panicking',
    excerpt:
      'The 30 questions every evaluator asks and how to answer them confidently — even if you did not build the project yourself. Tested by 7,000+ students who passed their vivas.',
    readTime: '6 min read',
    date: 'April 2025',
    featured: true,
  },
  {
    slug: 'embedded-vs-iot-final-year-project',
    category: 'Comparison',
    categoryColor: 'bg-orange-100 text-orange-700',
    title: 'Embedded Systems vs IoT: Which Domain Should You Pick for Your Final Year?',
    excerpt:
      'A straight comparison of scope, hardware cost, viva complexity, and placement value — so you can make an informed choice before committing to a topic.',
    readTime: '5 min read',
    date: 'March 2025',
    featured: true,
  },
];

const topics = [
  'Project Ideas', 'Viva Preparation', 'IEEE Paper Writing',
  'Hardware Tutorials', 'Domain Comparisons', 'Placement Tips',
];

export default function BlogPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-gradient-to-br from-primary-950 to-primary-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-primary-300 font-semibold text-sm uppercase tracking-wider mb-3">Free Knowledge</p>
          <h1 className="text-4xl md:text-5xl font-black text-white mb-4">Blog & Resources</h1>
          <p className="text-primary-200 text-lg max-w-2xl mx-auto leading-relaxed">
            Practical guides written by engineers — not marketers. No fluff, no paywalls.
          </p>
        </div>
      </section>

      {/* Topic pills */}
      <section className="bg-white border-b border-slate-100 py-5 sticky top-16 z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-none">
            {topics.map((topic) => (
              <span
                key={topic}
                className="flex-shrink-0 bg-slate-100 text-slate-600 text-xs font-semibold px-4 py-2 rounded-full border border-slate-200 cursor-default hover:bg-primary-50 hover:text-primary-700 hover:border-primary-200 transition-colors"
              >
                {topic}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Posts */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            {posts.map((post, i) => (
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

      {/* CTA — newsletter / WhatsApp */}
      <section className="py-16 bg-primary-700">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-black text-white mb-4">Got a Specific Question?</h2>
          <p className="text-primary-100 text-lg mb-8">
            WhatsApp us — we answer topic selection, IEEE paper queries, and deadline questions for free.
          </p>
          <a
            href="https://wa.me/917550191838?text=Hi%2C%20I%20have%20a%20question%20about%20my%20final%20year%20project"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-primary-700 font-bold text-base px-8 py-4 rounded-2xl hover:bg-primary-50 transition-colors min-h-[52px]"
          >
            <MessageCircle size={18} />
            Ask on WhatsApp — Free
          </a>
        </div>
      </section>
    </>
  );
}
