import React from 'react';
import { heroSub } from './data';
import { ArrowSvg } from './icons/ArrowSvg';
import { FaceSvg } from './icons/FaceSvg';
import { InstaSvg } from './icons/InstaSvg';
import { TwitterSvg } from './icons/TwitterSvg';
import { motion } from 'motion/react';

const sectionVariants = {
  hidden: {
    opacity: 0,
    x: -50,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 2,
      delay: 0.5,
      delayChilden: 0.5,
      staggerChildren: 0.5,
      when: "beforeChildren",
    },
  },
};

const sectionMainChildVariants = {
  hidden: {
    x: -50,
    opacity: 0,
  }, 
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.5
    }
  }
}


1
export const Home = ({ children }) => {
  return (
    <div
      className="
    max-w-[100vw] w-[1920px] h-[1080px] p-[24px]
    bg-neutral-900 z-[1] max-md:h-[1500px] max-sm:p-[10px] max-md:p-[15px] overflow-x-hidden
    "
    >
      <motion.section
        variants={sectionVariants}
        initial="hidden"
        animate="visible"
        className="
          w-full grid grid-cols-12 grid-rows-3 z-[2]
          h-full gap-x-[16px] bg-neutral-900 max-xl:grid-rows-5
        "
      >
        <motion.div
          variants={sectionMainChildVariants}
          initial="hidden"
          animate="visible"
          className="
            box-border
            col-span-9 row-span-3 relative z-[1] rounded-[20px]
            bg-[url('https://res.cloudinary.com/dmrr92p4s/image/upload/v1736798086/qitchen/hero/ptbe60nymzbjct1e4k6e.png')]
            max-2xl:col-span-12 max-2xl:row-span-2 max-xl:bg-cover max-xl:bg-top max-xl:bg-no-repeat
          "
        >
          {children}
          <div
            className="
            h-[534px] w-[100%] absolute bottom-0 bg-gradient-to-b from-[rgba(0,0,0,0)] to-[rgba(0,0,0,1)] z-[20]
            max-xl:h-[100px]
          "
          >
            <h1
              className="
                max-w-[800px] max-h-[280px] font-serif text-[140px] text-primary-300
                leading-[100%] absolute bottom-[52px] left-[77px] max-xl:text-[70px] max-xl:w-[300px]
                max-xl:bottom-[50px] max-lg:text-[70px] max-lg:left-[30px] max-[700px]:left-[30px] max-lg:left-[20px]
                max-md:text-[45px] max-md:bottom-[80px]
              "
            >
              Sushi<br />Sensation
            </h1>
            <footer
              className="absolute bottom-[16px] right-[16px] flex h-auto w-[124px] justify-between
              max-xl:bottom-[100px] max-xl:right-[50px] max-lg:bottom-[60px] max-[560px]:flex-col max-[560px]:right-[-55px]
            "
            >
              <InstaSvg />
              <FaceSvg />
              <TwitterSvg />
            </footer>
          </div>
        </motion.div>
        {heroSub.map(({ id, img, link, desti }) => {
          return (
            <motion.div
              key={id}
              initial={{
                opacity: 0,
                y: -50,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 1.5,
                delay: 0.5,
              }}
              className="col-span-3 max-2xl:col-span-4 max-xl:col-span-6 max-md:col-span-12 row-span-[344px] bg-neutral-900 pb-[15px]
              "
            >
              <div
                className="
                  w-full h-full rounded-[14px] relative
                "
                style={{
                  backgroundImage: `url(${img})`,
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                }}
              >
                <motion.div
                  whileHover={{
                    scale: 1.2,
                    transition: {
                      duration: 0.5,
                    },
                  }}
                  className="
                  bg-neutral-900 w-auto h-[44px] rounded-tl-[30px] rounded-br-[14px] pt-[12px] pl-[24px] flex justify-end items-center gap-[12px]
                  absolute bottom-0 right-0
                "
                >
                  <svg
                    className="
                    absolute left-[-23px] bottom-0
                "
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M24 24V0C24 13.2548 13.2548 24 0 24H24Z"
                      fill="#0A0B0A"
                    />
                  </svg>
                  <a
                    href={desti}
                    className="
                    text-primary-300 text-[16px] font-serif
                  "
                  >
                    {link}
                  </a>
                  <ArrowSvg />
                  <svg
                    className="
                    absolute top-[-24px] right-0
                "
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M24 24V0C24 13.2548 13.2548 24 0 24H24Z"
                      fill="#0A0B0A"
                    />
                  </svg>
                </motion.div>
              </div>
            </motion.div>
          );
        })}
        ;
      </motion.section>
    </div>
  );
}