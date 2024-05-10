'use client';
import { motion } from 'framer-motion';
import { useRef } from 'react';

export default function MotionBounceIn({ children, index = 1, viewport }) {
  const wrapperRef = useRef(null);

  return (
    <motion.div
      index={index}
      ref={wrapperRef}
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{
        type: 'spring',
        stiffness: 100,
        bounce: 0.8,
        delay: `0.${index}`,
      }}
      viewport={viewport}
    >
      {children}
    </motion.div>
  );
}
