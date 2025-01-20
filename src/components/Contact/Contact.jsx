import React from 'react';
import { IconLeft } from '../About/IconLeft';
import { IconRight } from '../About/IconRight';
import { openingHours } from './data';
import { images } from './data';
import { motion } from 'motion/react';
import { ArrowSvg } from '../Hero/icons/ArrowSvg';
import { FaceSvg } from '../Hero/icons/FaceSvg';
import { InstaSvg } from '../Hero/icons/InstaSvg';
import { TwitterSvg } from '../Hero/icons/TwitterSvg';
import { Diamond } from '../Menu/Diamond';

const containerVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 1,
      delay: 0.5,
      ease: "easeInOut",
      when: "beforeChildren",
      staggerChildren: 1,
      delayChildren: 1,
    },
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
    },
  },
};
export const Contact = () => {
  return (
    <div
      className="max-w-[100vw] w-[1920px] p-[24px] grid grid-cols-12 grid-rows-12 gap-x-[16px]
    bg-neutral-900 z-[1] max-sm:p-[10px] max-md:p-[15px]"
    >
      <motion.section
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.5, ease: "easeInOut" }}
        className="bg-[url('https://res.cloudinary.com/dmrr92p4s/image/upload/v1737276529/qitchen/contact/lbkv3wrziwe6wcjt2suv.png')]
      col-span-6 bg-cover h-[1032px] relative rounded-[20px] text-white bg-no-repeat
      max-2xl:bg-top max-3xl:col-span-12 max-3xl:row-span-6 max-2xl:bg-top max-md:h-[600px] max-xl:row-span-3 max-md:row-span-2
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
            CONTACT
          </h1>
        </div>
      </motion.section>
      <section
        className="col-span-6 grid grid-cols-12 grid-rows-12 *:border-2 *:border-solid *:border-primary-200
      *:rounded-[16px] gap-[16px] max-3xl:col-span-12 max-3xl:row-span-6 max-xl:*:col-span-12
      max-xl:row-span-9
      "
      >
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1, ease: "easeInOut" }}
          className="col-span-6 row-span-5 max-xl:row-span-2 py-[54px] px-[48px] max-5xl:py-[30px] max-5xl:px-[20px]
        "
        >
          <h1 className="font-serif text-primary-300 text-[24px] flex justify-center items-center gap-x-[16px] mb-[84px] max-md:text-[18px]">
            <IconLeft />
            OPENING HOURS
            <IconRight />
          </h1>
          <div className="flex gap-y-[16px] flex-col">
            {openingHours.map(({ id, day, time }) => {
              return (
                <div
                  key={id}
                  className="flex items-center gap-x-[16px] *:text-[16px] *:text-primary-300 *:font-light"
                >
                  <p className="flex-none">{day}</p>
                  <div className="h-[1px] mt-[14px] bg-primary-200 grow"></div>
                  <p className="col-span-3 flex-none">{time}</p>
                </div>
              );
            })}
          </div>
        </motion.div>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="col-span-6 row-span-5 max-xl:row-span-5 grid grid-rows-12 grid-cols-12 gap-[16px]"
        >
          {images.map(({ id, img }) => {
            return (
              <motion.div
                variants={childVariants}
                key={id}
                className="col-span-6 row-span-6 max-xl:col-span-12 max-xl:row-span-3"
                style={{
                  backgroundImage: `url('${img}')`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  borderRadius: "16px",
                }}
              ></motion.div>
            );
          })}
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 6, ease: "easeInOut" }}
          className="bg-[url('https://res.cloudinary.com/dmrr92p4s/image/upload/v1737281350/qitchen/contact/k8z83qrextbgwvzuxcpn.png')]
          col-span-6 row-span-5 relative rounded-[16px] bg-no-repeat bg-cover max-xl:row-span-2
        "
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
              href="https://maps.google.com/"
              className="
                    text-primary-300 text-[16px] font-serif
                  "
            >
              SHOW ROUTE
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
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 7, ease: "easeInOut" }}
          className="col-span-6 row-span-5 py-[54px] px-[48px] max-5xl:py-[30px] max-5xl:px-[20px] max-xl:row-span-2"
        >
          <h1
            className="font-serif text-primary-300 text-[24px] flex justify-center items-center gap-x-[16px] mb-[84px] max-xl:mb-[30px]
          max-md:text-[18px]
          "
          >
            <IconLeft />
            GET IN TOUCH
            <IconRight />
          </h1>
          <div className="mt-[132px] *:text-[16px] *:text-primary-300 *:flex *:justify-between flex flex-col gap-[24px]">
            <div>
              <p>ADDRESS</p>
              <p className="text-right">
                23 Greenfield Avenue,
                <br /> Prague 120 00
              </p>
            </div>
            <div>
              <p>PHONE</p>
              <p>+49 1234 567890</p>
            </div>
            <div>
              <p>EMAIL</p>
              <p>email@example.com</p>
            </div>
            <div>
              <p>FOLLOW</p>
              <div className="flex gap-[12px]">
                <FaceSvg />
                <TwitterSvg />
                <InstaSvg />
              </div>
            </div>
          </div>
        </motion.div>
        <motion.footer
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 8, ease: "easeInOut" }}
          className="col-span-12 row-span-1 max-xl:h-[100px] max-sm:!border-0 flex justify-center items-center gap-[16px] *:font-serifTwo
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
