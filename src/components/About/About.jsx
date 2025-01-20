import React from 'react';
import { motion } from 'motion/react';
import { awards } from './data';
import { IconLeft } from './IconLeft';
import { IconRight } from './IconRight';
import { Diamond } from '../Menu/Diamond';

const containerVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      ease: "easeInOut",
      duration: 1,
      delay: 0.5,
      when: 'beforeChildren',
      delayChildren: 1,
      staggerChildren: 1,
    }
  }
}
const childVariants = {
  hidden: {
    opacity: 0,
    y: -50,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
    }
  }
}
export const About = () => {
    return (
      <div
        className="max-w-[100vw] w-[1920px] h-[1080px] p-[24px]
        bg-neutral-900 z-[1] max-md:h-[1500px] max-sm:p-[10px] max-md:p-[15px]
        "
      >
        <section className="grid grid-cols-12 grid-rows-12 bg-neutral-900 gap-x-[16px]">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: "easeInOut" }}
            className="bg-[url('https://res.cloudinary.com/dmrr92p4s/image/upload/v1737150119/qitchen/about/t9ib3xbwgfrztony8etb.png')]
         col-span-6 row-span-12 relative bg-no-repeat max-[1324px]:bg-top max-2xl:col-span-12 max-2xl:row-span-2 max-lg:h-[600px]
         max-lg:row-span-1
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
                leading-[100%] absolute bottom-[52px] left-[77px] max-xl:text-[70px] max-xl:w-[300px]
                max-xl:bottom-[50px] max-lg:text-[70px] max-lg:left-[30px] max-[700px]:left-[30px] max-lg:left-[20px]
                max-md:text-[45px] max-md:bottom-[80px]
            "
              >
                ABOUT
              </h1>
            </div>
          </motion.div>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="col-span-6 row-span-3 grid grid-cols-12 grid-rows-12 gap-[16px] *:border-primary-200 *:border-2 *:border-solid *:rounded-[16px]
          max-2xl:col-span-12 max-2xl:row-span-7 max-lg:row-span-9
          "
          >
            <motion.div
              variants={childVariants}
              className="*:text-primary-300 p-[48px] flex flex-col gap-y-[118px] col-span-6
                row-span-2 max-[1324px]:p-[20px] max-lg:gap-y-[50px] max-lg:col-span-12 max-lg:row-span-1
            "
            >
              <h1 className="text-[32px] font-serif max-lg:text-[24px]">
                SUSHI ARTISTRY
                <br />
                REDEFINED
              </h1>
              <p className="text-[16px] font-serifTwo max-lg:text-[12px]">
                Where culinary craftsmanship meets modern
                <br className="max-[1728px]:hidden" />
                elegance. Indulge in the finest sushi, expertly curated to
                elevate your dining experience.
              </p>
            </motion.div>
            <motion.div
              variants={childVariants}
              className="bg-[url('https://res.cloudinary.com/dmrr92p4s/image/upload/v1737150123/qitchen/about/bsbfkyyhzdincwhuuadf.png')]
                col-span-6 bg-cover row-span-2 bg-no-repeat max-lg:col-span-12 max-lg:row-span-1
            "
            ></motion.div>
            {awards.map(({ id, title, text, img }) => {
              return (
                <motion.div
                  variants={childVariants}
                  key={id}
                  className=" col-span-4 row-span-1 flex flex-col items-center justify-center max-lg:col-span-12"
                >
                  <img src={img} alt={title} />
                  <h4 class="font-serif text-[24px] text-primary-300 mt-[9px] max-lg:text-[18px]">
                    {title}
                  </h4>
                  <p className="font-serifTwo text-[12px] text-primary-150 max-lg:text-[8px]">
                    {text}
                  </p>
                </motion.div>
              );
            })}
            <motion.div
              variants={childVariants}
              className="bg-[url('https://res.cloudinary.com/dmrr92p4s/image/upload/v1737150119/qitchen/about/guertkiym0rifx7ocznb.png')]
                bg-cover bg-no-repeat col-span-6 row-span-2 max-lg:col-span-12 max-lg:row-span-1 max-lg:h-[250px]"
            ></motion.div>
            <motion.div
              variants={childVariants}
              className="col-span-6 row-span-2 *:text-primary-300 p-[48px] flex flex-col items-start
            gap-y-[107px] max-[1324px]:p-[20px] max-lg:gap-y-[50px] max-lg:col-span-12 max-lg:row-span-1"
            >
              <h1 className="text-primary-300 flex gap-x-[16px] font-serif text-[24px] justify-center max-lg:text-[18px]">
                <IconLeft />
                OUR STORY
                <IconRight />
              </h1>
              <p className="text-[16px] font-serifTwo max-lg:text-[12px]">
                Founded with a passion for culinary excellence, Qitchen's
                journey began in the heart of Prague. Over years, it evolved
                into a haven for sushi enthusiasts, celebrated for its artful
                mastery and devotion to redefining gastronomy.
              </p>
            </motion.div>
            <motion.footer
              variants={childVariants}
              className="col-span-12 h-[100px] max-xl:h-[100px] max-sm:!border-0 flex justify-center items-center gap-[16px] *:font-serifTwo
            *:font-light *:text-[12px] *:text-primary-300"
            >
              <p>By Pawel Gola</p>
              <Diamond />
              <p>Licensing</p>
              <Diamond />
              <p>Styleguide</p>
            </motion.footer>
          </motion.div>
        </section>
      </div>
    );
}