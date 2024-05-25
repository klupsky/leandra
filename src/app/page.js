'use client';

import Marquee from '@/components/Marquee';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import InfoSection from '../components/InfoSection';
import InfoSectionTwo from '../components/InfoSectionTwo';

export default function Home() {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const wrapperRef = useRef(null);

  return (
    <main ref={ref} className="font-lexend relative ">
      <motion.div
        ref={wrapperRef}
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -50 }}
        viewport={{ once: true }}
        transition={{
          type: 'spring',
          stiffness: 100,
          bounce: 0.8,
        }}
      >
        <Hero />
        <motion.div
          ref={wrapperRef}
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          viewport={{ once: true }}
          transition={{
            type: 'spring',
            stiffness: 100,
            bounce: 0.8,
          }}
        >
          <Marquee />
        </motion.div>
      </motion.div>
      <motion.div
        ref={wrapperRef}
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -50 }}
        viewport={{ once: true }}
        transition={{
          type: 'spring',
          stiffness: 100,
          bounce: 0.8,
        }}
      >
        <motion.div
          ref={wrapperRef}
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          viewport={{ once: true }}
          transition={{
            type: 'spring',
            stiffness: 100,
            bounce: 0.8,
          }}
        >
          <InfoSection wrapperRef={wrapperRef} />
        </motion.div>
        <motion.div
          ref={wrapperRef}
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          viewport={{ once: true }}
          transition={{
            type: 'spring',
            stiffness: 100,
            bounce: 0.8,
          }}
        >
          <InfoSectionTwo wrapperRef={wrapperRef} />
        </motion.div>
      </motion.div>

      <motion.div
        ref={wrapperRef}
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -50 }}
        viewport={{ once: true }}
        transition={{
          type: 'spring',
          stiffness: 100,
          bounce: 0.8,
        }}
      >
        <Footer />
      </motion.div>
    </main>
  );
}
