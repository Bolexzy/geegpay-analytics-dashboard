"use client";
import Link from "next/link";
import React, { useState } from "react";
import {
  ArrowLeftIcon,
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
} from "./Icons";
import useThemeSwitcher from "./hooks/useThemeSwitcher";

const Sidebar = ({ children }) => {
  const [mode, setMode] = useThemeSwitcher();
  // active side menu
  const [menuActive, setMenuActive] = useState("");

  const handleClick = () => {
    setMode(mode === "light" ? "dark" : "light");
  };

  return (
    <div className="flex">
      {/* Sidebar */}
      <div className="fixed inset-0 hidden md:flex flex-col h-full py-5 gap-2.5  bg-[#F7F8FA] dark:bg-black border-r-[1px] border-[#EBECF2] dark:border-gray-700 w-20 items-center">
        {/* container for menus */}
        <div className="h-full flex flex-col items-center  justify-between gap-12  overflow-auto bg-[#F7F8FA] dark:bg-black w-full">
          {/* main menu box */}
          <div className="flex flex-col items-center gap-y-5 self-stretch ">
            {/* logo box  */}
            <div className="inline-block mb-2">
              <Link href="/">
                <LogoIcon className="w-10 h-10" />
              </Link>
            </div>

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
                          } w-4 h-4`}
                        />
                      </Link>
                    </div>
                  </div>
                  <div className="inline-block">
                    <Link href="/" onClick={() => handleClick()}>
                      <MoonIcon
                        className={`${
                          mode === "dark" ? "flex" : "hidden"
                        } w-7.5 h-7.5`}
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
      <main className="w-full md:ml-20 bg-[#F7F8FA] dark:bg-black">
        {children}
      </main>
    </div>
  );
};

export default Sidebar;
