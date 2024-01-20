import { SuccessIcon } from "@/public";
import React from "react";

const Success = () => {
  return (
    <>
      <div className=" w-auto h-auto sm:h-[100vh] bg-white rounded-[50px] sm:rounded-none p-16 sm:p-5 flex flex-col justify-start sm:justify-center gap-y-10">
        <SuccessIcon />
        {/* description */}
        <div className="flex flex-col justify-start gap-y-7">
          <div className="text-6xl sm:text-5xl font-extrabold text-[#242742]">
            Thanks for <br />
            subscribing!
          </div>
          <div className="text-lg text-[#36384e]">
            A confirmation email has been sent to
            <br />{" "}
            <span className="text-[#242742] font-bold">
              lmao@loremcompany.com.
            </span>{" "}
            Please open it and click
            <br className="sm:hidden" /> the button inside to confirm your
            subscription
          </div>
        </div>
        {/* Dismiss button */}
        <div className="flex sm:justify-end">
          <button className="w-full h-16 rounded-lg bg-[#242742] focus:bg-gradient-to-r from-[#f6536b] to-[#ff6644] focus:shadow-lg focus:shadow-[#ff6644] text-white font-medium ">
            Dismiss message
          </button>
        </div>
      </div>
    </>
  );
};

export default Success;
