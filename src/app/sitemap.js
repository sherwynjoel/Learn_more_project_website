const BASE = 'https://learnmoreprojects.in';

const staticRoutes = [
  { url: BASE,                    priority: 1.0,  changeFrequency: 'weekly' },
  { url: `${BASE}/projects`,      priority: 0.9,  changeFrequency: 'weekly' },
  { url: `${BASE}/portfolio`,     priority: 0.8,  changeFrequency: 'monthly' },
  { url: `${BASE}/pricing`,       priority: 0.9,  changeFrequency: 'monthly' },
  { url: `${BASE}/training`,      priority: 0.8,  changeFrequency: 'monthly' },
  { url: `${BASE}/faq`,           priority: 0.8,  changeFrequency: 'monthly' },
  { url: `${BASE}/blog`,          priority: 0.8,  changeFrequency: 'weekly'  },
  { url: `${BASE}/about`,         priority: 0.7,  changeFrequency: 'monthly' },
  { url: `${BASE}/contact`,       priority: 0.9,  changeFrequency: 'monthly' },
  { url: `${BASE}/privacy`,       priority: 0.3,  changeFrequency: 'yearly'  },
  { url: `${BASE}/terms`,         priority: 0.3,  changeFrequency: 'yearly'  },
];

const blogSlugs = [
  'top-final-year-projects-ece-2025',
  'how-to-clear-final-year-viva',
  'embedded-vs-iot-final-year-project',
];

const domainSlugs = [
  'embedded-systems', 'iot-projects', 'ai-ml',
  'bio-medical', 'power-electronics', 'robotics',
  'software-development', 'mechanical',
];

export default function sitemap() {
  const now = new Date();
  return [
    ...staticRoutes.map((r) => ({ ...r, lastModified: now })),
    ...blogSlugs.map((slug) => ({
      url: `${BASE}/blog/${slug}`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.7,
    })),
    ...domainSlugs.map((slug) => ({
      url: `${BASE}/domains/${slug}`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
    })),
  ];
}
