import React from 'react';
import { SymbolLeft } from '../Menu/SymbolLeft';
import { SymbolRight } from "../Menu/SymbolRight";
import { Footer } from '../Menu/Footer';
import { motion } from 'motion/react';
import { Form } from './Form';
export const BookATable = () => {
  return (
    <div
      className="max-w-[100vw] w-[1920px] max-2xl:h-[2000px] p-[24px] flex max-2xl:flex-col gap-x-[16px]
    bg-neutral-900 z-[1] max-md:h-[1500px] max-sm:p-[10px] max-md:p-[15px]"
    >
      <motion.section
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.5, ease: "easeInOut" }}
        className="bg-[url('https://res.cloudinary.com/dmrr92p4s/image/upload/v1737145682/qitchen/book-a-table/xv3vr8qcpb3asze8r0zj.png')]
      max-2xl:h-[1032px] relative basis-1/2 bg-no-repeat max-2xl:bg-cover
      "
      >
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
            Book
            <br />A Table
          </h1>
        </div>
      </motion.section>
      <motion.section
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1, ease: "easeInOut" }}
        className="px-[96px] py-[80px] basis-1/2 max-[700px]:px-[30px] max-[585px]:px-[10px]"
      >
        <div className="w-full max-h-[554px] mb-[337px] max-md:mb-[200px]">
          <div className="flex justify-center items-center gap-[16px] w-full font-serif text-[40px] max-[585px]:text-[30px]
          text-primary-300 h-[48px]">
            <SymbolLeft />
            <h1>RESERVATION</h1>
            <SymbolRight />
          </div>
          <p className="text-[18px] font-serifTwo mt-[16px] text-primary-300 text-center max-[585px]:text-[14px]
            text-pretty
          ">
            Secure your spot at Qitchen, where exceptional sushi and a <br className='max-[420px]:hidden'/>
            remarkable dining experience await.
          </p>
          <Form
            whileHover={{
              scale: 1.05,
              transition: {
                duration: 0.5,
                delay: 0.5,
                ease: "easeInOut",
              },
            }}
            whileTap={{
              rotate: ["-5deg", "5deg"],
              transition: {
                duration: 0.5,
                ease: "easeInOut",
              },
            }}
          />
        </div>
        <Footer />
      </motion.section>
    </div>
  );
};
