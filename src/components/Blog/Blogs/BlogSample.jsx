import React from 'react';
import {IconLeft} from '../../About/IconLeft';
import { IconRight } from "../../About/IconRight";
import { Diamond } from '../../Menu/Diamond';
export const BlogSample = ({blogData: {id, img, date, title, subTitleOne, subTextOne, subTitleTwo, subTextTwo, subTitleThree, subTextThree}}) => {
  return (
    <div
      key={id}
      className="max-w-[100vw] w-[1920px] grid grid-cols-12 grid-rows-12 p-[24px] gap-x-[16px]
    bg-neutral-900 z-[1] max-sm:p-[10px] max-md:p-[15px]"
    >
      <section
        style={{ backgroundImage: `url(${img})` }}
        className="h-[1032px] bg-no-repeat bg-contain rounded-[16px] col-span-6 row-span-6 max-3xl:col-span-12 max-3xl:row-span-3
        max-3xl:bg-cover max-3xl:bg-top max-2xl:row-span-2 max-xl:row-span-2 max-lg:row-span-1 max-sm:h-[500px]
      
        "
      ></section>
      <section
        className="col-span-6 flex flex-col py-[80px] px-[96px] rounded-[16px]
        gap-y-[80px] max-3xl:col-span-12 max-3xl:row-span-4 max-sm:row-span-9 max-lg:py-[40px] px-[40px] max-lg:row-span-2
      "
      >
        <div className="flex flex-col gap-y-[16px]">
          <div className="flex gap-x-[16px] justify-center items-center">
            <IconLeft />
            <p className="text-primary-300 text-[12px] font-serifTwo">{date}</p>
            <IconRight />
          </div>
          <h1 className="text-[64px] max-lg:text-[40px] text-primary-300 font-serif leading-[110%] text-center">
            {title}
          </h1>
        </div>
        <div className="flex flex-col gap-y-[48px]">
          <div className="flex flex-col gap-y-[16px]">
            <h3 className="text-[32px] text-primary-300 font-serif leading-[100%]">
              {subTitleOne}
            </h3>
            <p className="text-[16px] font-serifTwo leading-[180%] font-light text-primary-150 text-justify">
              {subTextOne}
            </p>
          </div>
          <div className="flex flex-col gap-y-[16px]">
            <h3 className="text-[32px] text-primary-300 font-serif leading-[100%]">
              {subTitleTwo}
            </h3>
            <p className="text-[16px] font-serifTwo leading-[180%] font-light text-primary-150 text-justify">
              {subTextTwo}
            </p>
          </div>
          <div className="flex flex-col gap-y-[16px]">
            <h3 className="text-[32px] text-primary-300 font-serif leading-[100%]">
              {subTitleThree}
            </h3>
            <p className="text-[16px] font-serifTwo leading-[180%] font-light text-primary-150 text-justify">
              {subTextThree}
            </p>
          </div>
        </div>
        <div
          className="*:text-primary-300 *:text-[14px] *:font-light *:font-serifTwo h-[61px] flex justify-center items-center
        gap-x-[16px] mt-[80px] max-sm:gap-x-[8px]
        "
        >
          <p>By Pawel Gola</p>
          <Diamond />
          <p>Licensing</p>
          <Diamond />
          <p>Styleguide</p>
        </div>
      </section>
    </div>
  );
}