import React from "react";
import Link from "next/link";
import {
  BoxTickIcon,
  CartIcon,
  CoinIcon,
  DownTrendIcon,
  GreenGraph,
  RedGraph,
  RotateBox,
  UpTrendIcon,
} from "./Icons";

const Analytics = () => {
  return (
    <div className="w-full h-full">
      {/* cards  */}
      <div className="grid grid-cols-2 gap-4 h-full">
        {/* card one  */}
        <div className="col-span-2 md:col-span-1 flex flex-col items-start justify-between gap-2.5 bg-[#fff] dark:bg-[#181818] dark:border-[#27272A] border-[#EDF2F7] border-[1px] rounded-[0.875rem] p-4">
          {/* top  icons */}
          <div className="w-full flex items-center justify-between">
            <div className="w-10 h-10 flex items-center justify-center border-[#E6E6E6] dark:border-[#27272A] border-[0.714px] rounded-full">
              <div className="inline-block">
                <Link href={"/"}>
                  <BoxTickIcon className={"!w-6 h-6"} />
                </Link>
              </div>
            </div>
            <div className="inline-block">
              <Link href={"/"}>
                <GreenGraph className={"!w-6 h-6"} />
              </Link>
            </div>
          </div>
          {/* total order  */}
          <div className="w-full flex flex-col items-start">
            <p className="text-base md:text-lg font-[500] text-[#898989] dark:text-white/75">
              Total Order
            </p>
            <p className="text-xl md:text-2xl font-[600] text-[#3A3F51] dark:text-white">
              350
            </p>
          </div>
          {/* trend  */}
          <div className="w-full flex items-start justify-between">
            <div className="flex items-center justify-center gap-1 py-1 px-2 rounded-[62.5rem] bg-[#34CAA51F]">
              <div className="inline-block">
                <UpTrendIcon className={"!w-[0.5625rem] h-[0.3125rem]"} />
              </div>
              <p className="text-xs font-[500] text-[#34CAA5]">23,5%</p>
            </div>
            <div>
              <p className="text-sm font-[400] text-[#606060] dark:text-white/75">
                vs. previous month
              </p>
            </div>
          </div>
        </div>
        {/* card two  */}
        <div className="col-span-2 md:col-span-1 flex flex-col items-start  justify-between  gap-2.5 bg-[#fff] dark:bg-[#181818] dark:border-[#27272A] border-[#EDF2F7] border-[1px] rounded-[0.875rem] p-4">
          {/* top  icons */}
          <div className="w-full flex items-center justify-between">
            <div className="w-10 h-10 flex items-center justify-center border-[#E6E6E6] dark:border-[#27272A] border-[0.714px] rounded-full">
              <div className="inline-block">
                <Link href={"/"}>
                  <RotateBox className={"!w-6 h-6"} />
                </Link>
              </div>
            </div>
            <div className="inline-block">
              <Link href={"/"}>
                <RedGraph className={"!w-6 h-6"} />
              </Link>
            </div>
          </div>
          {/* total order  */}
          <div className="w-full flex flex-col items-start">
            <p className="text-base md:text-lg font-[500] text-[#898989] dark:text-white/75">
              Total Refund
            </p>
            <p className="text-xl md:text-2xl font-[600] text-[#3A3F51] dark:text-white">
              270
            </p>
          </div>
          {/* trend  */}
          <div className="w-full flex items-start justify-between">
            <div className="flex items-center justify-center gap-1 py-1 px-2 rounded-[62.5rem] bg-[#ED544E1F]">
              <div className="inline-block">
                <DownTrendIcon className={"!w-[0.5625rem] h-[0.3125rem]"} />
              </div>
              <p className="text-xs font-[500] text-[#ED544E]">23,5%</p>
            </div>
            <div>
              <p className="text-sm font-[400] text-[#606060] dark:text-white/75">
                vs. previous month
              </p>
            </div>
          </div>
        </div>
        {/* card three  */}
        <div className="col-span-2 md:col-span-1 flex flex-col items-start  justify-between  gap-2.5 bg-[#fff] dark:bg-[#181818] dark:border-[#27272A] border-[#EDF2F7] border-[1px] rounded-[0.875rem] p-4">
          {/* top  icons */}
          <div className="w-full flex items-center justify-between">
            <div className="w-10 h-10 flex items-center justify-center border-[#E6E6E6] dark:border-[#27272A] border-[0.714px] rounded-full">
              <div className="inline-block">
                <Link href={"/"}>
                  <CartIcon className={"!w-6 h-6"} />
                </Link>
              </div>
            </div>
            <div className="inline-block">
              <Link href={"/"}>
                <RedGraph className={"!w-6 h-6"} />
              </Link>
            </div>
          </div>
          {/* total order  */}
          <div className="w-full flex flex-col items-start">
            <p className="text-base md:text-lg  font-[500] text-[#898989] dark:text-white/75">
              Average Sales
            </p>
            <p className="text-xl md:text-2xl font-[600] text-[#3A3F51] dark:text-white">
              1567
            </p>
          </div>
          {/* trend  */}
          <div className="w-full flex items-start justify-between">
            <div className="flex items-center justify-center gap-1 py-1 px-2 rounded-[62.5rem] bg-[#ED544E1F]">
              <div className="inline-block">
                <DownTrendIcon className={"!w-[0.5625rem] h-[0.3125rem]"} />
              </div>
              <p className="text-xs font-[500] text-[#ED544E]">23,5%</p>
            </div>
            <div>
              <p className="text-sm font-[400] text-[#606060] dark:text-white/75">
                vs. previous month
              </p>
            </div>
          </div>
        </div>
        {/* card four  */}
        <div className="col-span-2 md:col-span-1 flex flex-col items-start  justify-between  gap-2.5 bg-[#fff] dark:bg-[#181818] dark:border-[#27272A] border-[#EDF2F7] border-[1px] rounded-[0.875rem] p-4">
          {/* top  icons */}
          <div className="w-full flex items-center justify-between">
            <div className="w-10 h-10 flex items-center justify-center border-[#E6E6E6] dark:border-[#27272A] border-[0.714px] rounded-full">
              <div className="inline-block">
                <Link href={"/"}>
                  <CoinIcon className={"!w-6 h-6"} />
                </Link>
              </div>
            </div>
            <div className="inline-block">
              <Link href={"/"}>
                <GreenGraph className={"!w-6 h-6"} />
              </Link>
            </div>
          </div>
          {/* total order  */}
          <div className="w-full flex flex-col items-start">
            <p className="text-base md:text-lg font-[500] text-[#898989] dark:text-white/75">
              Total Income
            </p>
            <p className="text-xl md:text-2xl font-[600] text-[#3A3F51] dark:text-white">
              $350.000
            </p>
          </div>
          {/* trend  */}
          <div className="w-full flex items-start justify-between">
            <div className="flex items-center justify-center gap-1 py-1 px-2 rounded-[62.5rem] bg-[#34CAA51F]">
              <div className="inline-block">
                <UpTrendIcon className={"!w-[0.5625rem] h-[0.3125rem]"} />
              </div>
              <p className="text-xs font-[500] text-[#34CAA5]">23,5%</p>
            </div>
            <div>
              <p className="text-sm font-[400] text-[#606060] dark:text-white/75">
                vs. previous month
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
