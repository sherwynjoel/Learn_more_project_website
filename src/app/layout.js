import { Inter } from 'next/font/google';
import './globals.css';
import SiteHeader from '@/components/SiteHeader';
import Footer from '@/components/Footer';
import FloatCTA from '@/components/FloatCTA';
import BackToTop from '@/components/BackToTop';
import CursorGlow from '@/components/CursorGlow';
import Breadcrumbs from '@/components/Breadcrumbs';
import PageTransition from '@/components/PageTransition';

const inter = Inter({ subsets: ['latin'], display: 'swap' });

export const metadata = {
  title: 'LearnMore Projects | Final Year Project & R&D Center in Coimbatore',
  description:
    "LearnMore Projects is Coimbatore's leading final year project and R&D center specializing in Embedded Systems, IoT, AI/ML, Robotics, Bio-Medical, Power Electronics, and Mechanical projects. IEEE-standard projects with complete hardware, code, and documentation support.",
  keywords:
    'final year projects coimbatore, embedded systems projects, IoT projects, AI ML projects, robotics projects, bio-medical projects, project center coimbatore, IEEE projects coimbatore, final year project center, LearnMore Projects',
  metadataBase: new URL('https://learnmoreprojects.in'),
  alternates: { canonical: '/' },
  openGraph: {
    title: 'LearnMore Projects | Final Year Project & R&D Center',
    description:
      "Coimbatore's premier R&D center for final year engineering projects — Embedded, IoT, AI/ML, Robotics, Bio-Medical and beyond.",
    type: 'website',
    url: 'https://learnmoreprojects.in',
    siteName: 'LearnMore Projects',
  },
};

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'LearnMore Projects',
  description: "Coimbatore's leading final year project & R&D center. IEEE-standard projects with complete hardware, code, and documentation.",
  url: 'https://learnmoreprojects.in',
  telephone: '+917550191838',
  email: 'info@learnmoreprojects.in',
  priceRange: '₹₹',
  image: 'https://learnmoreprojects.in/logo.png',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '202, Nehru St, Peranaidu Layout, Ram Nagar',
    addressLocality: 'Coimbatore',
    addressRegion: 'Tamil Nadu',
    postalCode: '641009',
    addressCountry: 'IN',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 11.0087,
    longitude: 76.9740,
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '09:00',
      closes: '19:00',
    },
  ],
  hasMap: 'https://maps.app.goo.gl/Gcp69fQ9ky6sZv4M9',
  sameAs: [
    'https://www.instagram.com/learnmore_projects?igsh=MTlkOXlxM3c0ZHU5Zg==',
    'https://youtube.com/@learnmoreprojects?si=H_E_ybTFd4vkhvT0',
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body className={inter.className}>
        <CursorGlow />
        <SiteHeader />
        <Breadcrumbs />
        <main style={{ paddingTop: 'var(--header-h, 4rem)' }} className="pb-20 md:pb-0">
          <PageTransition>
            {children}
          </PageTransition>
        </main>
        <Footer />
        <FloatCTA />
        <BackToTop />
      </body>
    </html>
  );
}
