import { Inter } from 'next/font/google';
import './globals.css';
import CursorGlow from '@/components/CursorGlow';
import SiteShell from '@/components/SiteShell';

const inter = Inter({ subsets: ['latin'], display: 'swap' });

export const metadata = {
  title: 'LearnMore Projects | Best Final Year Project Center in Coimbatore',
  description:
    "Best final year project center in Coimbatore (Ramnagar, Gandhipuram). IEEE-standard projects for BE, B.Tech, M.Tech, MCA students — Embedded Systems, IoT, AI/ML, Robotics, Bio-Medical, Power Electronics. Full hardware kit, source code, documentation, viva support. 7000+ students served.",
  keywords:
    'best final year project center coimbatore, final year projects coimbatore, project center gandhipuram, project center ramnagar coimbatore, IEEE projects coimbatore, embedded systems projects coimbatore, IoT projects coimbatore, AI ML projects coimbatore, machine learning projects coimbatore, robotics projects coimbatore, bio-medical projects coimbatore, power electronics projects coimbatore, mechanical projects coimbatore, software development projects coimbatore, final year project ideas 2025, BE final year project coimbatore, BTech final year projects coimbatore, MTech project coimbatore, ME project coimbatore, MCA project center coimbatore, BCA projects coimbatore, BSc final year project, viva preparation coimbatore, IEEE paper writing coimbatore, research paper publication students coimbatore, project with publication coimbatore, internship with project coimbatore, inplant training coimbatore, project training institute coimbatore, prototype development coimbatore, Arduino projects coimbatore, Raspberry Pi projects final year, Python projects BE students, MATLAB projects coimbatore, deep learning final year projects, computer vision projects, VLSI projects coimbatore, final year project cost coimbatore, real time projects coimbatore, hardware projects coimbatore, mini projects coimbatore, project guidance coimbatore, LearnMore Projects',
  metadataBase: new URL('https://learnmoreprojects.in'),
  alternates: { canonical: '/' },
  openGraph: {
    title: 'LearnMore Projects | Best Final Year Project Center in Coimbatore',
    description:
      "Coimbatore's best final year project center — IEEE-standard Embedded, IoT, AI/ML, Robotics, Bio-Medical projects. 7000+ students, full hardware kit + viva support.",
    type: 'website',
    url: 'https://learnmoreprojects.in',
    siteName: 'LearnMore Projects',
  },
};

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': ['LocalBusiness', 'EducationalOrganization'],
  name: 'LearnMore Projects',
  description: "Coimbatore's best final year project center. IEEE-standard projects with complete hardware, code, and documentation. Embedded Systems, IoT, AI/ML, Robotics, Bio-Medical, Power Electronics. Serving BE, B.Tech, M.Tech, MCA, BCA students.",
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
  areaServed: [
    { '@type': 'City', name: 'Coimbatore' },
    { '@type': 'City', name: 'Gandhipuram' },
    { '@type': 'City', name: 'Ramnagar' },
  ],
  knowsAbout: [
    'Embedded Systems Final Year Projects',
    'IoT Final Year Projects',
    'AI Machine Learning Projects',
    'Robotics Projects',
    'Bio-Medical Engineering Projects',
    'Power Electronics Projects',
    'Mechanical Engineering Projects',
    'Software Development Projects',
    'IEEE Paper Writing and Publication',
    'Final Year Project Guidance Coimbatore',
    'Viva Preparation for Engineering Students',
  ],
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
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
