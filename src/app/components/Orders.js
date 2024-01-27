"use client";
import Link from "next/link";
import React from "react";
import { DownloadIcon } from "./Icons";

const Orders = () => {
  return (
    <div className="flex flex-col gap-5 items-center p-5 h-auto">
      {/* title  */}
      <div className="w-full flex items-center justify-between">
        <h3
          className="text-base md:text-lg  text-[#26282C] dark:text-[#fafafa]  font-[600]"
          style={{ fontFamily: "Plus Jakarta Sans" }}
        >
          Last Orders
        </h3>
        <h3
          className="text-base md:text-lg  text-[#34CAA5] font-[500]"
          style={{ fontFamily: "Plus Jakarta Sans" }}
        >
          See All
        </h3>
      </div>
      {/* header  */}
      <div className="w-full flex items-center justify-between">
        <div className="overflow-x-auto w-full">
          <table className="table w-full">
            {/* head */}
            <thead>
              <tr className="border-[#EDF2F6] dark:border-[#27272A] hover:bg-[#F5F5F5] dark:hover:bg-[#262626]">
                <th
                  className="text-[#9CA4AB] text-sm md:text-base font-[500] p-4"
                  style={{ fontFamily: "Plus Jakarta Sans" }}
                >
                  Name
                </th>
                <th
                  className="text-[#9CA4AB] text-sm md:text-base font-[500] p-4"
                  style={{ fontFamily: "Plus Jakarta Sans" }}
                >
                  Date
                </th>
                <th
                  className="text-[#9CA4AB] text-sm md:text-base font-[500] p-4"
                  style={{ fontFamily: "Plus Jakarta Sans" }}
                >
                  Amount
                </th>
                <th
                  className="text-[#9CA4AB] text-sm md:text-base font-[500] p-4"
                  style={{ fontFamily: "Plus Jakarta Sans" }}
                >
                  Status
                </th>
                <th
                  className="text-[#9CA4AB] text-sm md:text-base font-[500] p-4"
                  style={{ fontFamily: "Plus Jakarta Sans" }}
                >
                  Invoice
                </th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              <tr className="border-[#EDF2F6] dark:border-[#27272A] hover:bg-[#F5F5F5] dark:hover:bg-[#262626]">
                {/* image profile */}
                <td className="p-4">
                  <div className="flex items-center gap-2.5">
                    {/* image  */}
                    <div className="avatar">
                      <div className="mask mask-squircle w-8 h-8">
                        <img
                          src="/assets/marcus.png"
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>

                    <div
                      className="text-nowrap text-[#3A3F51] dark:text-white/75 text-sm md:text-base font-[500]"
                      style={{ fontFamily: "Plus Jakarta Sans" }}
                    >
                      Marcus Bergson
                    </div>
                  </div>
                </td>
                <td className="p-4">
                  {/* date cell  */}
                  <span
                    className="text-nowrap font-[400] text-sm md:text-base text-[#737373] dark:text-white/75"
                    style={{ fontFamily: "Plus Jakarta Sans" }}
                  >
                    Nov 15, 2023
                  </span>
                </td>
                <td className="p-4">
                  <span
                    className="text-nowrap font-[500] text-sm md:text-base text-[#0D062D ] dark:text-white/75"
                    style={{ fontFamily: "Plus Jakarta Sans" }}
                  >
                    $80,000
                  </span>
                </td>
                <td className="p-4">
                  <span
                    className="text-[#34CAA5] text-nowrap font-[400] text-sm md:text-base"
                    style={{ fontFamily: "Plus Jakarta Sans" }}
                  >
                    Paid
                  </span>
                </td>
                <td className="p-4">
                  <div className="flex items-center gap-1.5">
                    <div className="inline-block">
                      <Link href="/">
                        <DownloadIcon className="!w-4 h-4 text-[#292D32] dark:text-white" />
                      </Link>
                    </div>
                    <span className="text-[#0D062D] dark:text-white/75 text-nowrap font-[400] text-sm">
                      <button
                        className=""
                        onClick={() =>
                          document.getElementById("my_modal_1").showModal()
                        }
                        style={{ fontFamily: "Plus Jakarta Sans" }}
                      >
                        View
                      </button>
                      <dialog id="my_modal_1" className="modal ">
                        <div className="modal-box dark:border-[#27272A] bg-white dark:bg-[#181818] border-[#EDF2F7] p-5 border-[1px] rounded-[0.875rem]">
                          <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                              ✕
                            </button>
                          </form>
                          <h3 className="font-bold text-lg">Invoice</h3>
                          <div className="py-4 flex items-center justify-between">
                            <p className="">Marcus Bergson</p>
                            <p className=""> Nov 15, 2023</p>
                          </div>
                          <hr className="py-2"></hr>
                          <div className="py-4 flex items-center justify-between">
                            <p className="">Payment</p>
                            <p className="">$80,000</p>
                          </div>
                          <hr className="py-2"></hr>
                          <div className="py-4 flex items-center justify-between">
                            <span className="text-[#34CAA5] text-nowrap font-[400] text-sm md:text-base">
                              Paid
                            </span>
                            <Link
                              href={"/"}
                              className="flex gap-2 items-center text-[#1f5b2d]"
                            >
                              <DownloadIcon className="!w-4 h-4 text-[#292D32] dark:text-white" />
                              Download
                            </Link>
                          </div>
                        </div>
                      </dialog>
                    </span>
                  </div>
                </td>
              </tr>
              {/* row 2 */}
              <tr className="border-[#EDF2F6] dark:border-[#27272A] hover:bg-[#F5F5F5] dark:hover:bg-[#262626] ">
                {/* image profile */}
                <td className="p-4">
                  <div className="flex items-center gap-2.5">
                    {/* image  */}
                    <div className="avatar">
                      <div className="mask mask-squircle w-8 h-8">
                        <img
                          src="/assets/jaydon.png"
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>

                    <div
                      className="text-nowrap text-[#3A3F51] dark:text-white/75 text-sm md:text-base font-[500]"
                      style={{ fontFamily: "Plus Jakarta Sans" }}
                    >
                      Jaydon Vaccaro
                    </div>
                  </div>
                </td>
                <td className="p-4">
                  {/* date cell  */}
                  <span
                    className="text-nowrap font-[400] text-sm md:text-base text-[#737373] dark:text-white/75"
                    style={{ fontFamily: "Plus Jakarta Sans" }}
                  >
                    Nov 15, 2023
                  </span>
                </td>
                <td className="p-4">
                  <span
                    className="text-nowrap font-[500] text-sm md:text-base text-[#0D062D] dark:text-white/75"
                    style={{ fontFamily: "Plus Jakarta Sans" }}
                  >
                    $150,000
                  </span>
                </td>
                <td className="p-4">
                  <span
                    className="text-[#ED544E] text-nowrap font-[400] text-sm md:text-base"
                    style={{ fontFamily: "Plus Jakarta Sans" }}
                  >
                    Refund
                  </span>
                </td>
                <td className="p-4">
                  <div className="flex items-center gap-1.5">
                    <div className="inline-block">
                      <Link href="">
                        <DownloadIcon className="!w-4 h-4 text-[#292D32] dark:text-white" />
                      </Link>
                    </div>
                    <span className="text-[#0D062D] dark:text-white/75 text-nowrap font-[400] text-sm">
                      <button
                        className=""
                        onClick={() =>
                          document.getElementById("my_modal_2").showModal()
                        }
                        style={{ fontFamily: "Plus Jakarta Sans" }}
                      >
                        View
                      </button>
                      <dialog id="my_modal_2" className="modal ">
                        <div className="modal-box dark:border-[#27272A] bg-white dark:bg-[#181818] border-[#EDF2F7] p-5 border-[1px] rounded-[0.875rem]">
                          <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                              ✕
                            </button>
                          </form>
                          <h3 className="font-bold text-lg">Invoice</h3>
                          <div className="py-4 flex items-center justify-between">
                            <p className="">Jaydon Vaccaro</p>
                            <p className=""> Nov 15, 2023</p>
                          </div>
                          <hr className="py-2"></hr>
                          <div className="py-4 flex items-center justify-between">
                            <p className="">Payment</p>
                            <p className="">$150,000</p>
                          </div>
                          <hr className="py-2"></hr>

                          <div className="py-4 flex items-center justify-between">
                            <span className="text-[#ED544E] text-nowrap font-[400] text-sm md:text-base">
                              Refund
                            </span>
                            <Link
                              href={"/"}
                              className="flex gap-2 items-center text-[#1f5b2d]"
                            >
                              <DownloadIcon className="!w-4 h-4 text-[#292D32] dark:text-white" />
                              Download
                            </Link>
                          </div>
                        </div>
                      </dialog>
                    </span>
                  </div>
                </td>
              </tr>

              {/* row 3 */}
              <tr className="border-[#EDF2F6] dark:border-[#27272A] hover:bg-[#F5F5F5] dark:hover:bg-[#262626] ">
                {/* image profile */}
                <td className="p-4">
                  <div className="flex items-center gap-2.5">
                    {/* image  */}
                    <div className="avatar">
                      <div className="mask mask-squircle w-8 h-8">
                        <img
                          src="/assets/corey.png"
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>

                    <div
                      className="text-nowrap text-[#3A3F51] dark:text-white/75 text-sm md:text-base font-[500]"
                      style={{ fontFamily: "Plus Jakarta Sans" }}
                    >
                      Corey Schleifer
                    </div>
                  </div>
                </td>
                <td>
                  {/* date cell  */}
                  <span
                    className="text-nowrap font-[400] text-sm md:text-base text-[#737373] dark:text-white/75"
                    style={{ fontFamily: "Plus Jakarta Sans" }}
                  >
                    Nov 14, 2023
                  </span>
                </td>
                <td className="p-4">
                  <span
                    className="text-nowrap font-[500] text-sm md:text-base text-[#0D062D] dark:text-white/75"
                    style={{ fontFamily: "Plus Jakarta Sans" }}
                  >
                    $87,000
                  </span>
                </td>
                <td className="p-4">
                  <span
                    className="text-[#34CAA5] text-nowrap font-[400] text-sm md:text-base"
                    style={{ fontFamily: "Plus Jakarta Sans" }}
                  >
                    Paid
                  </span>
                </td>
                <td className="p-4">
                  <div className="flex items-center gap-1.5">
                    <div className="inline-block">
                      <Link href="">
                        <DownloadIcon className="!w-4 h-4 text-[#292D32] dark:text-white" />
                      </Link>
                    </div>
                    <span className="text-[#0D062D] dark:text-white/75 text-nowrap font-[400] text-sm">
                      <button
                        className=""
                        onClick={() =>
                          document.getElementById("my_modal_3").showModal()
                        }
                        style={{ fontFamily: "Plus Jakarta Sans" }}
                      >
                        View
                      </button>
                      <dialog id="my_modal_3" className="modal ">
                        <div className="modal-box dark:border-[#27272A] bg-white dark:bg-[#181818] border-[#EDF2F7] p-5 border-[1px] rounded-[0.875rem]">
                          <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                              ✕
                            </button>
                          </form>
                          <h3 className="font-bold text-lg">Invoice</h3>
                          <div className="py-4 flex items-center justify-between">
                            <p className="">Corey Schleifer</p>
                            <p className=""> Nov 14, 2023</p>
                          </div>
                          <hr className="py-2"></hr>
                          <div className="py-4 flex items-center justify-between">
                            <p className="">Payment</p>
                            <p className="">$87,000</p>
                          </div>
                          <hr className="py-2"></hr>
                          <div className="py-4 flex items-center justify-between">
                            <span className="text-[#34CAA5] text-nowrap font-[400] text-sm md:text-base">
                              Paid
                            </span>
                            <Link
                              href={"/"}
                              className="flex gap-2 items-center text-[#1f5b2d]"
                            >
                              <DownloadIcon className="!w-4 h-4 text-[#292D32] dark:text-white" />
                              Download
                            </Link>
                          </div>
                        </div>
                      </dialog>
                    </span>
                  </div>
                </td>
              </tr>

              {/* row 4 */}
              <tr className="border-[#EDF2F6] dark:border-[#27272A] hover:bg-[#F5F5F5] dark:hover:bg-[#262626]">
                {/* image profile */}
                <td className="p-4">
                  <div className="flex items-center gap-2.5">
                    {/* image  */}
                    <div className="avatar">
                      <div className="mask mask-squircle w-8 h-8">
                        <img
                          src="/assets/marcus.png"
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>

                    <div
                      className="text-nowrap text-[#3A3F51] dark:text-white/75 text-sm md:text-base font-[500]"
                      style={{ fontFamily: "Plus Jakarta Sans" }}
                    >
                      Cooper Press
                    </div>
                  </div>
                </td>
                <td className="p-4">
                  {/* date cell  */}
                  <span
                    className="text-nowrap font-[400] text-sm md:text-base text-[#737373] dark:text-white/75"
                    style={{ fontFamily: "Plus Jakarta Sans" }}
                  >
                    Nov 14, 2023
                  </span>
                </td>
                <td className="p-4">
                  <span
                    className="text-nowrap font-[500] text-sm md:text-base text-[#0D062D] dark:text-white/75"
                    style={{ fontFamily: "Plus Jakarta Sans" }}
                  >
                    $100,000
                  </span>
                </td>
                <td className="p-4">
                  <span
                    className="text-[#ED544E] text-nowrap font-[400] text-sm md:text-base"
                    style={{ fontFamily: "Plus Jakarta Sans" }}
                  >
                    Refund
                  </span>
                </td>
                <td className="p-4">
                  <div className="flex items-center gap-1.5">
                    <div className="inline-block">
                      <Link href="">
                        <DownloadIcon className="!w-4 h-4 text-[#292D32] dark:text-white" />
                      </Link>
                    </div>
                    <span className="text-[#0D062D] dark:text-white/75 text-nowrap font-[400] text-sm">
                      <button
                        className=""
                        onClick={() =>
                          document.getElementById("my_modal_4").showModal()
                        }
                        style={{ fontFamily: "Plus Jakarta Sans" }}
                      >
                        View
                      </button>
                      <dialog id="my_modal_4" className="modal ">
                        <div className="modal-box dark:border-[#27272A] bg-white dark:bg-[#181818] border-[#EDF2F7] p-5 border-[1px] rounded-[0.875rem]">
                          <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                              ✕
                            </button>
                          </form>
                          <h3 className="font-bold text-lg">Invoice</h3>
                          <div className="py-4 flex items-center justify-between">
                            <p className="">Cooper Press</p>
                            <p className=""> Nov 14, 2023</p>
                          </div>
                          <hr className="py-2"></hr>
                          <div className="py-4 flex items-center justify-between">
                            <p className="">Payment</p>
                            <p className="">$100,000</p>
                          </div>
                          <hr className="py-2"></hr>
                          <div className="py-4 flex items-center justify-between">
                            <span className="text-[#ED544E] text-nowrap font-[400] text-sm md:text-base">
                              Refund
                            </span>
                            <Link
                              href={"/"}
                              className="flex gap-2 items-center text-[#1f5b2d]"
                            >
                              <DownloadIcon className="!w-4 h-4 text-[#292D32] dark:text-white" />
                              Download
                            </Link>
                          </div>
                        </div>
                      </dialog>
                    </span>
                  </div>
                </td>
              </tr>

              {/* row 5 */}
              <tr className="border-[#EDF2F6] dark:border-[#27272A] hover:bg-[#F5F5F5] dark:hover:bg-[#262626]">
                {/* image profile */}
                <td className="p-4">
                  <div className="flex items-center gap-2.5">
                    {/* image  */}
                    <div className="avatar">
                      <div className="mask mask-squircle w-8 h-8">
                        <img
                          src="/assets/philip.png"
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>

                    <div className="text-nowrap text-[#3A3F51] dark:text-white/75 text-sm md:text-base font-[500]">
                      Phillip Lubin
                    </div>
                  </div>
                </td>
                <td className="p-4">
                  {/* date cell  */}
                  <span className="text-nowrap font-[400] text-sm md:text-base text-[#737373] dark:text-white/75">
                    Nov 13, 2023
                  </span>
                </td>
                <td className="p-4">
                  <span className="text-nowrap font-[500] text-sm md:text-base text-[#0D062D] dark:text-white/75">
                    $78,000
                  </span>
                </td>
                <td className="p-4">
                  <span className="text-[#34CAA5] text-nowrap font-[400] text-sm md:text-base">
                    Paid
                  </span>
                </td>
                <td className="p-4">
                  <div className="flex items-center gap-1.5">
                    <div className="inline-block">
                      <Link href="">
                        <DownloadIcon className="!w-4 h-4 text-[#292D32] dark:text-white" />
                      </Link>
                    </div>
                    <span className="text-[#0D062D] dark:text-white/75 text-nowrap font-[400] text-sm">
                      {/* You can open the modal using document.getElementById('ID').showModal() method */}
                      <button
                        className=""
                        onClick={() =>
                          document.getElementById("my_modal_5").showModal()
                        }
                      >
                        View
                      </button>
                      <dialog id="my_modal_5" className="modal ">
                        <div className="modal-box dark:border-[#27272A] bg-white dark:bg-[#181818] border-[#EDF2F7] p-5 border-[1px] rounded-[0.875rem]">
                          <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                              ✕
                            </button>
                          </form>
                          <h3 className="font-bold text-lg">Invoice</h3>
                          <div className="py-4 flex items-center justify-between">
                            <p className="">Phillip Lubin</p>
                            <p className=""> Nov 13, 2023</p>
                          </div>
                          <hr className="py-2"></hr>
                          <div className="py-4 flex items-center justify-between">
                            <p className="">Payment</p>
                            <p className="">$78,000</p>
                          </div>
                          <hr className="py-2"></hr>
                          <div className="py-4 flex items-center justify-between">
                            <span className="text-[#34CAA5] text-nowrap font-[400] text-sm md:text-base">
                              Paid
                            </span>
                            <Link
                              href={"/"}
                              className="flex gap-2 items-center text-[#1f5b2d]"
                            >
                              <DownloadIcon className="!w-4 h-4 text-[#292D32] dark:text-white" />
                              Download
                            </Link>
                          </div>
                        </div>
                      </dialog>
                    </span>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Orders;
