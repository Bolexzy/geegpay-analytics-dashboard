"use client";
import React, { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import Link from "next/link";
import { ArrowDownIcon } from "./Icons";
import useThemeSwitcher from "./hooks/useThemeSwitcher";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const BarChart = () => {
  const [short, setShort] = useState("Weekly");

  // chart by react chart js
  const [chartData, setChartData] = useState({
    datasets: [],
  });

  const [chartOptions, setChartOptions] = useState({});

  // handle short for chart
  const handleShorts = (value) => {
    setShort(value);
  };

  useEffect(() => {
    setChartData({
      labels: [
        "Jan",
        "Feb",
        "Mar",
        "April",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
      datasets: [
        {
          label: "Sales $",
          data: [
            "14.000",
            "25.000",
            "8.300",
            "33.500",
            "16.900",
            "45.000",
            "16.900",
            "27.300",
            "38.000",
            "10.600",
            "35.600",
            "31.500",
          ],
          borderColor: "rgb(53, 162, 235)",
          backgroundColor: "#34CAA51A",
          borderRadius: { topLeft: 100, topRight: 100 },
          barThickness: 30,
          hoverBackgroundColor: "rgba(52, 202, 165)",
        },
      ],
    });
    setChartOptions({
      plugins: {
        legend: {
          display: false,
          position: "top",
        },
        tooltip: {
          yAlign: "bottom",
          callbacks: {
            title: () => "", // removes the title
            label: (context) => `$ ${Number(context.parsed.y).toFixed(3)}`, // only displays the y data
            labelColor: () => ({
              borderColor: "transparent",
              backgroundColor: "transparent",
            }), // removes the box color
          },
          displayColors: false, // removes the color box
        },
        title: {
          display: false,
          text: "Daily Revenue",
        },
      },
      maintainAspectRatio: false,
      responsive: true,
      scales: {
        x: {
          border: {
            dash: [5, 5],
            display: true,
          },
          grid: {
            display: false, // this will remove the vertical grid lines
            color: "#EAEAEA",
            drawOnChartArea: false,
          },
        },
        y: {
          ticks: {
            callback: function (value, index, values) {
              return `${Number(value).toFixed(3)}`; // formats the y-axis values to 3 decimal places
            },
          },
          border: {
            dash: [5, 5],
            display: false,
          },
          grid: {
            display: true,
          },
        },
      },
    });
  }, []);
  return (
    <div className="w-full h-full lg:h-full  flex flex-col gap-4 items-center p-5 border-[1px] rounded-[0.875rem]  border-[#EDF2F7] dark:border-[#27272A] bg-white dark:bg-[#181818]">
      <div className="w-full flex items-center justify-between">
        <div>
          <p className="text-base md:text-lg text-[#26282C] dark:text-[#fafafa] font-[600]">
            Sales Trends
          </p>
        </div>
        <div className="flex items-center justify-center gap-2.5">
          <p className="text-xs md:text-sm text-[#3A3F51] font-[500] dark:text-[#fafafa]">
            Short by :{" "}
          </p>
          <details className="dropdown dropdown-end ">
            <summary className="btn bg-transparent border-none shadow-none hover:bg-transparent !p-0 group">
              <div className="flex items-center justify-center rounded-[1.25rem] bg-[#fff] dark:bg-[#181818] border-[1px] border-[#E1DFDF] py-1.5 px-3 gap-2.5">
                <p className="text-xs font-[400] text-[#3A3F51] dark:text-[#fafafa]">
                  {short}
                </p>
                <div className="flex">
                  <Link href="/">
                    <ArrowDownIcon
                      className={
                        "!w-5 h-5 group-active:rotate-180 transition-all duration-300 ease-in-out"
                      }
                    />
                  </Link>
                </div>
              </div>
            </summary>
            <ul className="p-2 shadow menu dropdown-content z-[1] bg-white dark:bg-[#252525] rounded-box w-52">
              <li onClick={() => handleShorts("Daily")}>
                <a>Daily</a>
              </li>
              <li onClick={() => handleShorts("Weekly")}>
                <a>Weekly</a>
              </li>
              <li onClick={() => handleShorts("Monthly")}>
                <a>Monthly</a>
              </li>
            </ul>
          </details>
        </div>
      </div>
      <div className="!w-full xl:h-[18rem] h-max">
        <Bar data={chartData} options={chartOptions} />
      </div>
    </div>
  );
};

export default BarChart;
