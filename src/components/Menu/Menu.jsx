import React, { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { Maki } from './Maki';
import { Uramaki } from './Uramaki';
import { SpecialRolls } from './SpecialRolls';
import { Footer } from './Footer';
import { MdVisibility } from 'react-icons/md';

const containerVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: { 
      duration: 0.5,
      when:"beforeChildren",
      staggerChildren: 1,
      delayChildren: 1, 
    },
  }
}

const childVariants = {
  hidden: { opacity: 0, y: -50 },
  visible: { opacity: 1, y: 0, transition: { duration: 1 } },
}

export const Menu = () => {

  const [filter, setFilter] = useState('all');
  
  return (
    <div
      className="max-w-[100vw] w-[1920px] h-auto p-[24px] grid grid-cols-12 grid-rows-12 gap-x-[16px]
    bg-neutral-900 z-[1] max-sm:p-[10px] max-md:p-[15px]"
    >
      <motion.section
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.5, ease: "easeInOut" }}
        className="col-span-6 bg-cover h-[1032px] max-2xl:h-[800px] relative rounded-[20px]
      bg-[url('https://res.cloudinary.com/dmrr92p4s/image/upload/v1737089133/qitchen/menu/somjhkdrvaqb7llckiyk.png')]
      text-white max-2xl:col-span-12 max-2xl:bg-top max-md:h-[600px]
      
      "
      >
        <div
          className="
          h-[534px] w-[100%] absolute bottom-0 bg-gradient-to-b from-[rgba(0,0,0,0)] to-[rgba(0,0,0,1)] z-[20]
          max-2xl:h-[100px]
        "
        >
          <h1
            className="
              max-w-[800px] max-h-[280px] font-serif text-[140px] text-primary-300
              leading-[100%] absolute bottom-[52px] left-[77px] max-2xl:text-[70px] max-xl:w-[300px]
              max-xl:bottom-[50px] max-lg:text-[70px] max-lg:left-[30px] max-[700px]:left-[30px] max-lg:left-[20px]
              max-md:text-[45px] max-md:bottom-[80px]
            "
          >
            MENU
          </h1>
        </div>
      </motion.section>
      <motion.section
        className="pt-[32px] px-[96px] h-auto col-span-6 max-2xl:col-span-12 max-4xl:px-[30px] max-[1000px]:px-[10px] max-2xl:row-start-2
        max-2xl:row-end-13 overflow-y-hidden
        "
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          variants={childVariants}
          className="*:text-[12px] *:font-serifTwo *:px-[12px] *:py-[8px] *:border-solid *:border-2 *:border-primary-200
        text-primary-300 flex gap-[4px] justify-center *:text-[10px]
        "
        >
          <motion.button
            whileHover={{
              scale: 1.1,
              duration: 0.5,
              ease: "easeInOut",
            }}
            whileTap={{
              rotate: "-12deg",
            }}
            onClick={() => setFilter("all")}
          >
            ALL
          </motion.button>
          <motion.button
            whileHover={{
              scale: 1.1,
              duration: 0.5,
              ease: "easeInOut",
            }}
            whileTap={{
              rotate: "-12deg",
            }}
            onClick={() => setFilter("maki")}
          >
            MAKI
          </motion.button>
          <motion.button
            whileHover={{
              scale: 1.1,
              duration: 0.5,
              ease: "easeInOut",
            }}
            whileTap={{
              rotate: "-12deg",
            }}
            onClick={() => setFilter("uramaki")}
          >
            URAMAKI
          </motion.button>
          <motion.button
            whileHover={{
              scale: 1.1,
              duration: 0.5,
              ease: "easeInOut",
            }}
            whileTap={{
              rotate: "-12deg",
            }}
            onClick={() => setFilter("specialrolls")}
          >
            SPECIAL ROLLS
          </motion.button>
        </motion.div>
        {filter === "all" && (
          <>
            <Maki variants={childVariants} />
            <Uramaki variants={childVariants} />
            <SpecialRolls variants={childVariants} />
          </>
        )}
        {filter === "maki" && <Maki variants={childVariants} />}
        {filter === "uramaki" && <Uramaki variants={childVariants} />}
        {filter === "specialrolls" && <SpecialRolls variants={childVariants} />}
        <Footer />
      </motion.section>
    </div>
  );
};
