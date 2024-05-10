'use client';

import Footer from '../components/Footer';
import Hero from '../components/Hero';
import InfoSection from '../components/InfoSection';
import MotionBounceIn from '../components/MotionBounceIn';

export default function Home() {
  return (
    <main className="font-lexend relative ">
      <MotionBounceIn>
        <Hero />
      </MotionBounceIn>

      <MotionBounceIn>
        <InfoSection />
      </MotionBounceIn>

      <MotionBounceIn>
        <Footer />
      </MotionBounceIn>
    </main>
  );
}
