import { motion } from 'framer-motion';
import Image from 'next/image';
import logo from '../../public/logo.svg';
import pattern from '../../public/pattern.svg';

export default function Hero() {
  return (
    <div class="h-screen w-full relative">
      <div className="absolute inset-0 z-0 bg-red ">
        <Image
          src={pattern}
          alt="Leandra Pattern"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="relative p-5 lg:p-10 flex min-h-screen flex-col gap-y-5 items-center text-blue justify-center">
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
          <Image src={logo} alt="Leandra Logo" />
        </motion.div>
        <div className="uppercase flex flex-col text-xl text-center tracking-[.4em]">
          <h1>X</h1>
          <h1>Café</h1>
          <h1>Leopold</h1>
        </div>
      </div>
    </div>
  );
}
