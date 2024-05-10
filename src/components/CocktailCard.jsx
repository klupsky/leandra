import { motion } from 'framer-motion';
import Image from 'next/image';

export default function CocktailCard({ cocktailImage, cocktailName }) {
  return (
    <motion.div
      whileHover={{
        y: -10,
        transition: {
          type: 'spring',
          stiffness: 200,
          bounce: 0.8,
        },
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
