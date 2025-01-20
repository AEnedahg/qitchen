import React from 'react';
import { special} from './data';
import { SymbolLeft } from './SymbolLeft';
import { SymbolRight } from './SymbolRight';
import { motion } from "motion/react";

export const SpecialRolls = ({variants}) => {
  return (
    <motion.div className="mt-[96px]" variants={variants}>
      <header
        className="*:font-serif *:text-[32px] *:text-primary-300 max-md:*:text-[20px] mb-[48px] flex justify-center gap-x-[16px] items-center
          "
      >
        <SymbolLeft />
        <h2>SPECIAL ROLLS</h2>
        <SymbolRight />
      </header>
      {special.map(({ id, name, text, img, price, icon }) => {
        return (
          <div
            key={id}
            className="grid grid-cols-12 items-center gap-[24px] mb-[32px]"
          >
            <img src={img} alt={name} className="col-span-3" />
            <div className="col-span-9 flex flex-col">
              <div className="flex justify-between">
                <div className="flex gap-x-[16px] items-center">
                  <h3 className="text-[22px] font-serif text-primary-300 max-md:text-[14px]">
                    {name}
                  </h3>
                  <img src={icon} alt={name} className="w-[12px] h-[12px]" />
                </div>
                <h3 className="text-[22px] font-serif text-primary-300 max-md:text-[14px]">
                  {price}
                </h3>
              </div>
              <p className="text-primary-150 font-serifTwo text-[14px] max-md:text-[12px]">
                {text}
              </p>
            </div>
          </div>
        );
      })}
    </motion.div>
  );
}