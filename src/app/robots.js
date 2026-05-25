export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/_next/'],
      },
    ],
    sitemap: 'https://learnmoreprojects.in/sitemap.xml',
    host: 'https://learnmoreprojects.in',
  };
}
