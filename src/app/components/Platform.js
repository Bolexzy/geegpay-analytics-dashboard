import React from "react";

const Platform = () => {
  return (
    <div className="flex py-4 px-5 items-start flex-col gap-5 h-full">
      <div className="flex items-center justify-between self-stretch">
        <h3 className="font-[600] text-[#26282C] dark:text-[#fafafa] text-base md:text-lg">
          Top Platform
        </h3>
        <p className="font-[500] text-[#34CAA5] text-base md:text-lg text-center">
          See All
        </p>
      </div>

      <div className="w-full flex flex-col gap-5 items-start">
        {/* platform one  */}
        <div className="w-full flex flex-col items-start self-stretch gap-4">
          <h3 className="font-[600] text-base md:text-lg text-[#22242C] dark:text-white/75">
            Book Bazaar
          </h3>
          <progress
            className="progress progress-primary bg-[#F5F5F5] dark:bg-[#27272A] w-full h-[0.65rem] md:h-[0.75rem] rounded-xl"
            value="53"
            max="100"
          ></progress>
          <div className="w-full flex justify-between items-center">
            <p className="text-base md:text-lg text-[#525252] font-[400] dark:text-white/75">
              {" "}
              $2,500,000
            </p>
            <p className="text-base md:text-lg text-[#525252] font-[400] dark:text-white/75">
              {" "}
              +15%
            </p>
          </div>
        </div>

        {/* platform two  */}
        <div className="w-full flex flex-col items-start self-stretch gap-4">
          <h3 className="font-[600] text-base md:text-lg text-[#22242C] dark:text-white/75">
            Artisan Aisle
          </h3>
          <progress
            className="progress progress-secondary bg-[#F5F5F5] dark:bg-[#27272A] w-full h-[0.65rem] md:h-[0.75rem] rounded-xl"
            value="45"
            max="100"
          ></progress>
          <div className="w-full flex justify-between items-center">
            <p className="text-base md:text-lg text-[#525252] font-[400] dark:text-white/75">
              {" "}
              $1,800,000
            </p>
            <p className="text-base md:text-lg text-[#525252] font-[400] dark:text-white/75">
              {" "}
              +10%
            </p>
          </div>
        </div>

        {/* platform three  */}
        <div className="w-full flex flex-col items-start self-stretch gap-4">
          <h3 className="font-[600] text-base md:text-lg text-[#22242C] dark:text-white/75">
            Toy Troop
          </h3>
          <progress
            className="progress progress-warning bg-[#F5F5F5] dark:bg-[#27272A] w-full h-[0.65rem] md:h-[0.75rem] rounded-xl"
            value="27"
            max="100"
          ></progress>
          <div className="w-full flex justify-between items-center">
            <p className="text-base md:text-lg text-[#525252] font-[400] dark:text-white/75">
              {" "}
              $1,200,000
            </p>
            <p className="text-base md:text-lg text-[#525252] font-[400] dark:text-white/75">
              {" "}
              +8%
            </p>
          </div>
        </div>

        {/* platform four  */}
        <div className="w-full flex flex-col items-start self-stretch gap-4">
          <h3 className="font-[600] text-base md:text-lg text-[#22242C] dark:text-white/75">
            XStore
          </h3>
          <progress
            className="progress progress-error bg-[#F5F5F5] dark:bg-[#27272A] w-full h-[0.65rem] md:h-[0.75rem] rounded-xl"
            value="27"
            max="100"
          ></progress>
          <div className="w-full flex justify-between items-center">
            <p className="text-base md:text-lg text-[#525252] font-[400] dark:text-white/75">
              {" "}
              $600,000
            </p>
            <p className="text-base md:text-lg text-[#525252] font-[400] dark:text-white/75">
              {" "}
              +5%
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Platform;
