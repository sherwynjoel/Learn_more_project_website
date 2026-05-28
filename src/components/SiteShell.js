'use client';

import { usePathname } from 'next/navigation';
import SiteHeader from './SiteHeader';
import Footer from './Footer';
import FloatCTA from './FloatCTA';
import BackToTop from './BackToTop';
import Breadcrumbs from './Breadcrumbs';
import PageTransition from './PageTransition';

export default function SiteShell({ children }) {
  const pathname = usePathname();
  const isAdmin = pathname.startsWith('/admin');

  if (isAdmin) {
    return <>{children}</>;
  }

  return (
    <>
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
    </>
  );
}
