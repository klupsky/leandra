'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import headline from '../../public/headline.svg';
import map from '../../public/map.svg';

export default function Map() {
  return (
    <div class="flex-1 pb-5 lg:pb-10 relative w-full lg:w-1/2 bg-white flex flex-col items-center justify-between">
      <motion.div
        whileTap={{
          y: -10,
          transition: {
            type: 'spring',
            stiffness: 200,
            bounce: 0.8,
          },
        }}
        whileHover={{
          y: -10,
          transition: {
            type: 'spring',
            stiffness: 200,
            bounce: 0.8,
          },
        }}
        index={1}
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -50 }}
        viewport={{ once: true }}
        transition={{
          type: 'spring',
          stiffness: 100,
          bounce: 0.8,
          delay: 0,
        }}
      >
        <Image
          src={headline}
          alt="Find us in MQ Wien"
          className="py-5 lg:py-10"
        />
      </motion.div>
      <div className="flex-1 flex justify-center items-center w-full ">
        <Image src={map} alt="Leandra Map" className="w-full" />
      </div>
    </div>
  );
}
