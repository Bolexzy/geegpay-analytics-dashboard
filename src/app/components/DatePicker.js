"use client";
import React, { useState } from "react";
import Calendar from "react-calendar";
import { CalendarIcon } from "./Icons";

const DatePicker = () => {
  const [date, setDate] = useState(new Date());

  const onChange = (date) => {
    setDate(date);
  };

  return (
    <>
      <div className="inline-block">
        <details className="dropdown">
          <summary className="btn bg-transparent border-none shadow-none hover:bg-transparent !p-0">
            <CalendarIcon className="h-5 !w-5 text-black dark:text-white" />
          </summary>

          <div className="p-2 shadow menu items-center dropdown-content z-[1] bg-white dark:bg-[#252525] text-green-700 rounded-box w-72">
            <Calendar onChange={onChange} value={date} />
          </div>
        </details>
      </div>
      <p className="text-[#26282C] dark:text-[#fafafa] text-sm text-center text-nowrap">
        {date.toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
      </p>
    </>
  );
};

export default DatePicker;
