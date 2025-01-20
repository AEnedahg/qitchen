import React from 'react';
import { motion } from 'motion/react';

export const Form = ({whileHover, whileTap}) => {
  return (
    <form
      className="mt-[80px] max-md:mt-[40px] *:appearance-none *:h-[61px] *:px-[24px] *:py-[16px] *:placeholder:text-primary-300
            *:caret-primary-300 *:text-primary-300 *:bg-neutral-800 *:border-primary-200 *:border-2 *:outline-none *:border-solid 
            grid grid-cols-12 grid-rows-5 gap-y-[16px]"
      action=""
      method="post"
    >
      <input
        className="col-span-12 "
        type="text"
        name="name"
        placeholder="Name"
      />
      <input
        className="col-span-12"
        type="tel"
        name="tel"
        placeholder="Phone Number"
      />
      <input
        className="col-span-12"
        type="email"
        name="email"
        placeholder="Email"
      />
      <input
        className="col-span-4 max-[585px]:col-span-12"
        type="text"
        name="number"
        placeholder="Guests"
      />
      <input
        className="col-span-4 max-[585px]:col-span-12"
        type="text"
        name="date"
        placeholder="Date"
      />
      <input
        className="col-span-4 max-[585px]:col-span-12"
        type="text"
        name="time"
        placeholder="Time"
      />
      <motion.a
        whileHover={whileHover}
        whileTap={whileTap}
        href="mailto:aenedah61@gmail.com"
        className="col-span-12 !bg-primary-300 *:outline-none *:text-neutral-900
              *:text-[12px] text-center
            "
      >
        <button type="submit">RESERVE</button>
      </motion.a>
    </form>
  );
}