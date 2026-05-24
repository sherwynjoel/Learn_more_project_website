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
  openGraph: {
    title: 'LearnMore Projects | Final Year Project & R&D Center',
    description:
      "Coimbatore's premier R&D center for final year engineering projects — Embedded, IoT, AI/ML, Robotics, Bio-Medical and beyond.",
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
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
