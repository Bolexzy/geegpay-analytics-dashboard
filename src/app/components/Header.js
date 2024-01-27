"use client";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import {
  ArrowDownIcon,
  CalendarIcon,
  NotificationIcon,
  SearchIcon,
  ArrowRightIcon,
  BoxIcon,
  CategoryIcon,
  DiscountIcon,
  InfoIcon,
  LogoIcon,
  MoonIcon,
  SettingIcon,
  SunIcon,
  UptrendIcon,
  UserIcon,
  ArrowLeftIcon,
} from "./Icons";
import useThemeSwitcher from "./hooks/useThemeSwitcher";
import DatePicker from "./DatePicker";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to track whether the menu is open
  const [divHeight, setDivHeight] = useState(0);

  const divRef = useRef(null);

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen); // Toggle the menu open state when the menu icon is clicked
  };

  useEffect(() => {
    setDivHeight(divRef.current.offsetHeight);
    console.log(divHeight);
  }, [divHeight]);

  const [mode, setMode] = useThemeSwitcher();
  // active side menu
  const [menuActive, setMenuActive] = useState("");

  const handleClick = () => {
    setMode(mode === "light" ? "dark" : "light");
  };

  return (
    <div className="w-full sticky top-0  flex flex-col items-center  z-50">
      {/* small screen > */}
      <header
        className="w-full md:hidden flex p-[1.125rem] items-center justify-around gap-x-[1.125rem] bg-[#fafafa] dark:bg-black"
        ref={divRef}
      >
        {/* header container  */}
        <div className="w-full flex items-center justify-between">
          {/* dashboard and search  */}
          <div className="w-full flex gap-10  items-center">
            {/* logo box  */}
            <div className="inline-block">
              <button onClick={() => handleMenuClick()}>
                <LogoIcon
                  className={`!w-10 h-10 ${
                    isMenuOpen ? "rotate-90" : ""
                  } hover:scale-105 active:scale-95 transition-all duration-300 ease-in-out`}
                />
              </button>
            </div>

            <div className="flex w-max gap-4 items-center justify-center mx-auto">
              <h2
                className="text-xl font-[600]"
                style={{ fontFamily: "Plus Jakarta Sans" }}
              >
                Dashboard
              </h2>
            </div>
            {/* search input  */}
          </div>
          {/* calendar and date and profile  */}
          <div className="w-max flex items-center gap-5 ">
            {/* profile and login  */}

            <details className="dropdown dropdown-end">
              <summary className="btn bg-transparent border-none shadow-none hover:bg-transparent !p-0 group">
                <div className="w-max flex py-1 px-2 items-center gap-2.5 rounded-[1.75rem] border-[1px] border-[#DADDDD] dark:border-gray-700">
                  <div className="flex items-center gap-2">
                    {/* profile image  */}
                    <div className="w-[2rem] h-[2rem]">
                      <div
                        className="rounded-[1.1875rem] w-full h-full"
                        style={{
                          backgroundImage: "url('/assets/profile.png')",
                          backgroundRepeat: "no-repeat",
                          backgroundSize: "cover",
                          backgroundPosition: "center",
                        }}
                      ></div>
                    </div>
                  </div>
                  <div className="inline-block">
                    <Link href="/">
                      <ArrowDownIcon className="h-5 !w-5 text-[#0D062D] dark:text-[#fafafa]  group-active:rotate-180 transition-all duration-300 ease-in-out" />
                    </Link>
                  </div>
                </div>
              </summary>
              <ul className="p-2 shadow menu dropdown-content z-[1] bg-white dark:bg-[#252525] rounded-box w-52">
                <li>
                  <a>profile</a>
                </li>
                <li>
                  <a>Team</a>
                </li>
                <li>
                  <a>Log Out?</a>
                </li>
                <li>
                  <p className="text-left font-[400] text-[#26282C] dark:text-[#fafafa]">
                    Justin Bergson{" "}
                    <span className="text-right font-[400] text-[#787486] flex">
                      Justin@gmail.com
                    </span>
                  </p>
                </li>
              </ul>
            </details>
          </div>
        </div>

        {/* sidebar  */}
        <div
          className={`fixed top-0 ${
            isMenuOpen ? "left-0" : "-left-20"
          } w-20 !mt-[${divHeight}px] h-full bg-white dark:bg-black z-50 transition-all duration-700 ease-in-out`}
          style={{ marginTop: `${divHeight}px` }}
        >
          {/* Side menu content goes here */}
          <div className="flex flex-col min-h-screen h-full py-5 gap-2.5 bg-[#F7F8FA] dark:bg-black border-r-[1px] border-[#EBECF2] dark:border-gray-700 w-full items-center">
            {/* container for menus */}
            <div className="h-full w-full flex flex-col items-center overflow-x-hidden overflow-y-auto gap-16 bg-[#F7F8FA] dark:bg-black">
              {/* main menu box */}
              <div className="flex flex-col items-center gap-y-5 self-stretch">
                <div className="flex  flex-col items-center gap-y-4 self-stretch ">
                  <div className="flex mb-4 w-full items-center justify-center relative">
                    <Link
                      href="/"
                      className=""
                      onClick={() => setMenuActive("category")}
                    >
                      <CategoryIcon
                        className={`!w-6 h-6 hover:text-[#0D062D] ${
                          menuActive === "category"
                            ? "text-[#0D062D] dark:text-[#fafafa]"
                            : "text-[#B2ABAB]"
                        } dark:hover:text-[#fafafa]`}
                      />
                    </Link>
                    {/* active cursor */}
                    <div
                      className={`${
                        menuActive === "category" ? "flex" : "hidden"
                      } w-[0.1875rem] h-[1.3125rem] bg-[#0D062D] dark:bg-[#fafafa] absolute right-0 rounded-l-xl`}
                    ></div>
                  </div>
                  <div className="flex mb-4 w-full items-center justify-center relative">
                    <Link href="/" onClick={() => setMenuActive("uptrend")}>
                      <UptrendIcon
                        className={`!w-6 h-6 hover:text-[#0D062D] ${
                          menuActive === "uptrend"
                            ? "text-[#0D062D] dark:text-[#fafafa]"
                            : "text-[#B2ABAB]"
                        } dark:hover:text-[#fafafa]`}
                      />
                    </Link>
                    {/* active cursor */}
                    <div
                      className={`${
                        menuActive === "uptrend" ? "flex" : "hidden"
                      } w-[0.1875rem] h-[1.3125rem] bg-[#0D062D] dark:bg-[#fafafa] absolute right-0 rounded-l-xl`}
                    ></div>
                  </div>
                  <div className="flex mb-3 w-full items-center justify-center relative">
                    <Link href="/" onClick={() => setMenuActive("user")}>
                      <UserIcon
                        className={`!w-6 h-6 hover:text-[#0D062D] ${
                          menuActive === "user"
                            ? "text-[#0D062D] dark:text-[#fafafa]"
                            : "text-[#B2ABAB]"
                        } dark:hover:text-[#fafafa]`}
                      />
                    </Link>
                    {/* active cursor */}
                    <div
                      className={`${
                        menuActive === "user" ? "flex" : "hidden"
                      } w-[0.1875rem] h-[1.3125rem] bg-[#0D062D] dark:bg-[#fafafa] absolute right-0 rounded-l-xl`}
                    ></div>
                  </div>
                  <div className="flex mb-3 w-full items-center justify-center relative">
                    <Link href="/" onClick={() => setMenuActive("box")}>
                      <BoxIcon
                        className={`!w-6 h-6 hover:text-[#0D062D] ${
                          menuActive === "box"
                            ? "text-[#0D062D] dark:text-[#fafafa]"
                            : "text-[#B2ABAB]"
                        } dark:hover:text-[#fafafa]`}
                      />
                    </Link>
                    {/* active cursor */}
                    <div
                      className={`${
                        menuActive === "box" ? "flex" : "hidden"
                      } w-[0.1875rem] h-[1.3125rem] bg-[#0D062D] dark:bg-[#fafafa] absolute right-0 rounded-l-xl`}
                    ></div>
                  </div>
                  <div className="flex mb-3 w-full items-center justify-center relative">
                    <Link href="/" onClick={() => setMenuActive("discount")}>
                      <DiscountIcon
                        className={`!w-6 h-6 hover:text-[#0D062D] ${
                          menuActive === "discount"
                            ? "text-[#0D062D] dark:text-[#fafafa]"
                            : "text-[#B2ABAB]"
                        } dark:hover:text-[#fafafa]`}
                      />
                    </Link>
                    {/* active cursor */}
                    <div
                      className={`${
                        menuActive === "discount" ? "flex" : "hidden"
                      } w-[0.1875rem] h-[1.3125rem] bg-[#0D062D] dark:bg-[#fafafa] absolute right-0 rounded-l-xl`}
                    ></div>
                  </div>
                  <div className="flex mb-3 w-full items-center justify-center relative">
                    <Link href="/" onClick={() => setMenuActive("info")}>
                      <InfoIcon
                        className={`!w-6 h-6 hover:text-[#0D062D] ${
                          menuActive === "info"
                            ? "text-[#0D062D] dark:text-[#fafafa]"
                            : "text-[#B2ABAB]"
                        } dark:hover:text-[#fafafa]`}
                      />
                    </Link>
                    {/* active cursor */}
                    <div
                      className={`${
                        menuActive === "info" ? "flex" : "hidden"
                      } w-[0.1875rem] h-[1.3125rem] bg-[#0D062D] dark:bg-[#fafafa] absolute right-0 rounded-l-xl`}
                    ></div>
                  </div>

                  {/* thame container  */}
                  <div className="px-2.5">
                    {/* thame  */}
                    <div className="flex flex-col items-center p-2 gap-y-4 bg-[#fff] dark:bg-[#181818] rounded-[6.25rem]">
                      {/* sun icon  */}
                      <div className="w-7.5 flex flex-col justify-center items-center p-[0.45rem] rounded-[5.875rem] bg-[#34CAA5]">
                        <div className="inline-block">
                          <Link href="/" onClick={() => handleClick()}>
                            <SunIcon
                              className={`${
                                mode === "dark" ? "hidden" : "flex"
                              } !w-3 sm:!w-4 h-4`}
                            />
                          </Link>
                        </div>
                      </div>
                      <div className="inline-block">
                        <Link href="/" onClick={() => handleClick()}>
                          <MoonIcon
                            className={`${
                              mode === "dark" ? "flex" : "hidden"
                            } !w-6 sm:!w-7.5 h-7.5`}
                          />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* other menu box  */}
              <div className="flex flex-col items-center gap-y-4 w-full">
                <div className="flex mb-3 w-full items-center justify-center relative">
                  <Link href="/" onClick={() => setMenuActive("right")}>
                    <ArrowRightIcon
                      className={`!w-6 h-6 hover:text-[#0D062D] ${
                        menuActive === "right"
                          ? "text-[#0D062D] dark:text-[#fafafa]"
                          : "text-[#B2ABAB]"
                      } dark:hover:text-[#fafafa]`}
                    />
                  </Link>
                  {/* active cursor */}
                  <div
                    className={`${
                      menuActive === "right" ? "flex" : "hidden"
                    } w-[0.1875rem] h-[1.3125rem] bg-[#0D062D] dark:bg-[#fafafa] absolute right-0 rounded-l-xl`}
                  ></div>
                </div>
                <div className="flex mb-3 w-full items-center justify-center relative">
                  <Link href="/" onClick={() => setMenuActive("setting")}>
                    <SettingIcon
                      className={`!w-6 h-6 hover:text-[#0D062D] ${
                        menuActive === "setting"
                          ? "text-[#0D062D] dark:text-[#fafafa]"
                          : "text-[#B2ABAB]"
                      } dark:hover:text-[#fafafa]`}
                    />
                  </Link>
                  {/* active cursor */}
                  <div
                    className={`${
                      menuActive === "setting" ? "flex" : "hidden"
                    } w-[0.1875rem] h-[1.3125rem] bg-[#0D062D] dark:bg-[#fafafa] absolute right-0 rounded-l-xl`}
                  ></div>
                </div>
                <div className="flex mb-3 w-full items-center justify-center relative">
                  <Link href="/" onClick={() => setMenuActive("left")}>
                    <ArrowLeftIcon
                      className={`!w-6 h-6 hover:text-[#0D062D] ${
                        menuActive === "left"
                          ? "text-[#0D062D] dark:text-[#fafafa]"
                          : "text-[#B2ABAB]"
                      } dark:hover:text-[#fafafa]`}
                    />
                  </Link>
                  {/* active cursor */}
                  <div
                    className={`${
                      menuActive === "left" ? "flex" : "hidden"
                    } w-[0.1875rem] h-[1.3125rem] bg-[#0D062D] dark:bg-[#fafafa] absolute right-0 rounded-l-xl`}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* medium screen > */}
      <header className="w-full hidden md:flex p-[1.125rem] items-center justify-around  gap-x-[1.125rem] bg-[#fafafa] dark:bg-black">
        {/* header container  */}
        <div className="w-full flex items-center justify-between ">
          {/* dashboard and search  */}
          <div className="w-full flex justify-between gap-10 items-center ">
            <div className="flex w-max">
              <h2
                className="text-xl font-[600]"
                style={{ fontFamily: "Plus Jakarta Sans" }}
              >
                Dashboard
              </h2>
            </div>
            {/* search input  */}
            {/* small screen  */}
            <div className="hidden sm:flex lg:hidden">
              <Link href="/">
                <SearchIcon className={"h-5 !w-5 text-gray-500"} />
              </Link>
            </div>
            {/* large screen */}
            <div className="xl:w-[22rem] w-max lg:flex relative items-center hidden">
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
          {/* calendar and date and profile  */}
          <div className="w-max flex items-center gap-5">
            {/*  calendar and notification */}
            <div className="w-max flex items-center lg:gap-5 gap-2 py-3 px-4">
              {/* calendar  */}
              <div className="flex items-center gap-2">
                <DatePicker />
              </div>
              <div
                className="tooltip tooltip-bottom tooltip-info"
                data-tip="You have no new notifications"
              >
                <div className="w-10 h-10 rounded-[1.6875rem] flex items-center justify-center p-[0.6875rem] border-[#DADDDD] dark:border-gray-700 border-[0.769px]">
                  <Link href="/">
                    <NotificationIcon className="h-5 !w-5 text-[#0D062D] dark:text-[#fafafa] " />
                  </Link>
                </div>
              </div>
            </div>
            {/* profile and login  */}

            <details className="dropdown">
              <summary className="btn bg-transparent border-none shadow-none hover:bg-transparent !p-0 group">
                <div className="w-max flex py-1.5 px-2 items-center gap-2.5 rounded-[1.75rem] border-[1px] border-[#DADDDD] dark:border-gray-700">
                  <div className="flex items-center gap-2">
                    {/* profile image  */}
                    <div className="w-[2.375rem] h-[2.375rem]">
                      <div
                        className="rounded-[1.1875rem] w-full h-full"
                        style={{
                          backgroundImage: "url('/assets/profile.png')",
                          backgroundRepeat: "no-repeat",
                          backgroundSize: "cover",
                          backgroundPosition: "center",
                        }}
                      ></div>
                    </div>
                    {/* profile name  */}
                    <div className="flex flex-col items-end gap-1">
                      <p className="text-right font-[400] text-[#26282C] dark:text-[#fafafa]">
                        Justin Bergson
                      </p>
                      <p className="text-right font-[400] text-[#787486] ">
                        Justin@gmail.com
                      </p>
                    </div>
                  </div>
                  <div className="inline-block">
                    <Link href="/">
                      <ArrowDownIcon className="h-5 !w-5 text-[#0D062D] dark:text-[#fafafa]  group-active:rotate-180 transition-all duration-300 ease-in-out" />
                    </Link>
                  </div>
                </div>
              </summary>
              <ul className="p-2 shadow menu dropdown-content z-[1] bg-white dark:bg-[#252525] rounded-box w-52">
                <li>
                  <a>profile</a>
                </li>
                <li>
                  <a>Team</a>
                </li>
                <li>
                  <a>Log Out?</a>
                </li>
              </ul>
            </details>
          </div>
        </div>
      </header>
      <hr className="w-full border-[#E5EAEF] dark:border-gray-700"></hr>
    </div>
  );
};

export default Header;
