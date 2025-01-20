import React from 'react';
import { motion } from 'motion/react';
import { IconLeft } from './IconLeft';
import { IconRight } from './IconRight';
import { SmallIconLeft } from './SmallIconLeft';
import { blogData } from './data';
import { Diamond } from '../Menu/Diamond';
import { Link } from 'react-router-dom';

const containerVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      delay: 2,
      duration: 1,
      ease: "easeInOut",
      when: "beforeChildren",
      staggerChildren: 1, 
      delayChildren: 1
    }
  },
}

const childVariants = {
  hidden: {
    opacity: 0,
    y: -50
  },
  visible: {
    opacity: 1, 
    y: 0,
    transition: {
      duration: 1,
      ease: "easeInOut",

    }
  }
}

export const Blog = () => {
  return (
    <div
      className="max-w-[100vw] w-[1920px] p-[24px] grid grid-cols-12 grid-rows-12 gap-x-[16px]
    bg-neutral-900 z-[1] max-sm:p-[10px] max-md:p-[15px]"
    >
      <motion.section
      initial={{opacity: 0, x: -50}}
      animate={{opacity: 1, x: 0}}
      transition={{duration: 1, delay: 0.5, ease: "easeInOut"}}
        className="bg-[url('https://res.cloudinary.com/dmrr92p4s/image/upload/v1737296853/qitchen/blog/gx4kl6doe9y6ogcygwut.png')]
      col-span-6 bg-cover h-[1032px] relative rounded-[20px] text-white bg-no-repeat
      max-2xl:bg-top max-3xl:col-span-12 max-3xl:row-span-1 max-2xl:bg-top max-md:h-[600px] max-xl:row-span-3 max-md:row-span-2
      "
      >
        <div
          className="
          h-[534px] w-[100%] absolute bottom-0 bg-gradient-to-b from-[rgba(0,0,0,0)] to-[rgba(0,0,0,1)] z-[20]
          max-3xl:h-[100px]
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
            BLOG
          </h1>
        </div>
      </motion.section>
      <section className='col-span-6 max-3xl:col-span-12 max-3xl:row-span-6 max-xl:row-span-8 max-md:row-span-10
      py-[80px] px-[96px] max-lg:px-[20px] border-2 border-solid border-primary-200'>
        <div className='flex flex-col gap-y-[80px]'>
          <motion.h1 
            initial={{opacity: 0, x: -50}}
            animate={{opacity: 1, x: 0}}
            transition={{duration: 1, delay: 2, ease: "easeInOut"}}          
          className='text-[40px] text-primary-300 font-serif flex justify-center items-center text-center gap-x-[16px]
          max-[544px]:text-[30px] max-[452px]:text-[24px]
          '>
            <IconLeft />Behind the Scenes<br /> & Latest News<IconRight />
          </motion.h1>
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          className='flex flex-col gap-y-[48px]'>
            {
              blogData.map(({id, img, title, text, date, desti}) => {
                return (
                  <Link to={desti}>
                    <motion.div
                      variants={childVariants}
                      key={id}
                      className="flex max-5xl:flex-col max-3xl:flex-row max-xl:flex-col"
                    >
                      <img
                        className="flex-none w-[280px] h-[210px]"
                        src={img}
                        alt={title}
                      />
                      <div className="grow pt-[26px] pl-[48px] max-5xl:pl-0 max-3xl:pl-[48px] max-xl:pl-0">
                        <div className="flex flex-col gap-y-[8px]">
                          <div className="flex items-center gap-x-[16px]">
                            <SmallIconLeft />
                            <p className="text-[12px] font-serifTwo text-primary-300">
                              {date}
                            </p>
                          </div>
                          <h3
                            className="text-[24px] leading-[120%] text-primary-300 font-serif uppercase
                        max-sm:text-center
                        "
                          >
                            {title}
                          </h3>
                          <p className="font-light text-[16px] text-primary-150 max-sm:text-center">
                            {text}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  </Link>
                );
              })
            }
          </motion.div>
        </div>
        <motion.footer
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 9, ease: "easeInOut" }}
          className="h-[100px]
          flex justify-center items-center gap-[16px] *:font-serifTwo
        *:font-light *:text-[12px] *:text-primary-300"
        >
          <p>By Pawel Gola</p>
          <Diamond />
          <p>Licensing</p>
          <Diamond />
          <p>Styleguide</p>
        </motion.footer>
      </section>
    </div>
  );
};