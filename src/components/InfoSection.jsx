'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import cocktail1 from '../../public/cocktail_1.svg';
import cocktail2 from '../../public/cocktail_2.svg';
import cocktail3 from '../../public/cocktail_3.svg';
import cocktail4 from '../../public/cocktail_4.svg';
import headline from '../../public/headline.svg';
import map from '../../public/map.svg';
import CocktailCard from './CocktailCard';

export default function InfoSection() {
  return (
    <>
      <div className="flex flex-col lg:flex-row">
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

        <div class="flex-1 p-5 lg:p-10 relative w-full lg:w-1/2 bg-green flex flex-col items-center justify-center gap-5 lg:gap-10">
          <div class="flex flex-col gap-5 lg:gap-10 w-fit">
            <div class="flex w-fit items-center justify-center gap-5 lg:gap-10">
              <CocktailCard
                index={1}
                cocktailImage={cocktail1}
                cocktailName="Cocktail 1"
              />
              <CocktailCard
                index={2}
                cocktailImage={cocktail2}
                cocktailName="Cocktail 2"
              />
            </div>
            <div class="flex w-full items-center justify-center gap-5 lg:gap-10">
              <CocktailCard
                index={3}
                cocktailImage={cocktail3}
                cocktailName="Cocktail 3"
              />
              <CocktailCard
                index={4}
                cocktailImage={cocktail4}
                cocktailName="Cocktail 4"
              />
            </div>
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
            >
              <a href="../../leandra_menu.pdf">
                <div className="flex flex-col bg-blue w-full lg:hover:cursor-pointer">
                  <div className="flex bg-blue">
                    <div className="border-2 border-blue bg-white p-10 w-full flex items-center text-center justify-center">
                      <h3 class="text-blue uppercase flex flex-col text-xl text-center tracking-[.4em]">
                        Drinks Menu
                      </h3>
                    </div>
                    <div className="w-2 h-2 bg-green"></div>
                  </div>
                  <div className="w-2 h-2 bg-green"></div>
                </div>
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
}
