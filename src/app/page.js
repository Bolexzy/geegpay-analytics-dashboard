import Image from "next/image";
import Header from "./components/Header";
import BarChart from "./components/BarChart";
import Analytics from "./components/Analytics";
import Orders from "./components/Orders";
import Platform from "./components/Platform";
import Link from "next/link";
import { CalendarIcon, NotificationIcon, SearchIcon } from "./components/Icons";
import DatePicker from "./components/DatePicker";

export default function Home() {
  return (
    <main className="w-full h-max ">
      <Header />
      <div className="w-full my-7 flex items-start px-5 md:hidden flex-col">
        {/*  calendar and notification */}
        <div className="w-max flex items-center lg:gap-5 gap-2 px-1 py-3">
          {/* calendar  */}
          <div className="flex py-3 px-1 items-center gap-2">
            <DatePicker />
          </div>
          <div
            className="tooltip tooltip-bottom tooltip-info"
            data-tip="You have no new notifications"
          >
            <div className="w-10 h-10 rounded-[1.6875rem] flex items-center justify-center p-[0.6875rem] border-[#DADDDD] dark:border-gray-700 border-[0.769px]">
              <Link href="/">
                <NotificationIcon className="h-5 w-5 text-[#0D062D] dark:text-[#fafafa] " />
              </Link>
            </div>
          </div>
        </div>
        {/* search input  */}
        <div className="w-max flex relative items-center">
          <input
            type="text"
            placeholder="Search..."
            className="input text-[#A3A3A3] text-base
               input-bordered w-full max-w-xs pl-12 h-12 items-center gap-x-2 rounded-3xl border-[1px] border-[#DADDDD] dark:border-gray-700 bg-[#fff] dark:bg-[#151618] dark:text-[#fafafa]"
          />

          <div className="inline-block ">
            <Link href="/">
              <SearchIcon
                className={
                  "absolute left-4 top-1/2 transform -translate-y-1/2 h-5 !w-5 text-gray-500"
                }
              />
            </Link>
          </div>
        </div>
      </div>
      <div className="w-full p-4 grid xl:grid-rows-3 grid-flow-row auto-rows-auto xl:grid-flow-col gap-5 h-max">
        {/* <div className="col-span-1 lg:col-span-3 grid grid-rows-2 gap-4 h-full overflow-hidden "> */}
        <div className="lg:col-span-2 order-1 xl:order-1 xl:col-span-2 row-start-1  w-full h-full ">
          <BarChart />
        </div>
        <div className="xl:row-span-2 lg:col-span-2 xl:order-1 order-3 xl:col-span-2 border-[1px] border-[#EDF2F7] dark:border-[#27272A] bg-[#fff] dark:bg-[#181818] rounded-[0.875rem] h-max overflow-hidden">
          <Orders />
        </div>
        {/* </div> */}
        {/* <div className="col-span-1 lg:col-span-2 grid grid-rows-2 gap-4 h-full "> */}
        <div className="xl:col-span-1 lg:col-span-2 w-full xl:h-full xl:order-1 order-2 h-max">
          <Analytics />
        </div>
        <div className="xl:row-span-2 xl:col-span-1 lg:col-span-2 order-4 xl:order-1  border-[1px] border-[#EDF2F7] dark:border-[#27272A] dark:bg-[#181818]  bg-[#fff] rounded-[0.875rem] h-max overflow-hidden ">
          <Platform />
        </div>
        {/* </div> */}
      </div>
    </main>
  );
}
