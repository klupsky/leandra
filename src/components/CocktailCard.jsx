import { motion } from 'framer-motion';
import Image from 'next/image';

export default function CocktailCard({ cocktailImage, cocktailName, index }) {
  return (
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
      index={index}
      initial={{ opacity: 0, y: -50 }}
      whileInView={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      viewport={{ once: true }}
      transition={{
        type: 'spring',
        stiffness: 100,
        bounce: 0.8,
        delay: `0.${index}`,
      }}
    >
      <div className="flex flex-col bg-blue w-fit">
        <div className="flex bg-blue">
          <div className="border-2 border-blue bg-white w-50 h-50">
            <Image src={cocktailImage} alt={cocktailName} />
          </div>
          <div className="w-2 h-2 bg-green"></div>
        </div>
        <div className="w-2 h-2 bg-green"></div>
      </div>
    </motion.div>
  );
}
