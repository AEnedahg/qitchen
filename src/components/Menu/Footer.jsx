import React from 'react';
import {Diamond} from './Diamond';

export const Footer = () => {
  return (
    <div className='*:text-primary-300 *:text-[14px] *:font-light *:font-serifTwo h-[61px] flex justify-center items-center
    gap-x-[16px] mt-[80px] max-sm:gap-x-[8px]
    '>
      <p>By Pawel Gola</p>
      <Diamond />
      <p>Licensing</p>
      <Diamond />
      <p>Styleguide</p>
    </div>
  )
}