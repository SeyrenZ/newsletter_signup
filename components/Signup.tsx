"use client";
import { ListIcon } from "@/public";
import Image from "next/image";
import React, { useState } from "react";
import { SuccessIcon } from "@/public";

const Signup = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [displayedValue, setDisplayedValue] = useState("");

  const handleButtonClick = () => {
    window.location.reload();
  };

  const handleInputChange = (e: any) => {
    setInputValue(e.target.value);
  };

  const handleOnSubmit = () => {
    setFormSubmitted(!formSubmitted);
    setDisplayedValue(inputValue);
  };

  return (
    <>
      {formSubmitted ? (
        <div className="w-auto h-auto bg-white rounded-[50px] p-16 flex flex-col justify-start gap-y-10">
          <SuccessIcon />
          {/* description */}
          <div className="flex flex-col justify-start gap-y-7">
            <div className="text-6xl font-extrabold text-[#242742]">
              Thanks for <br />
              subscribing!
            </div>
            <div className="text-lg text-[#36384e]">
              A confirmation email has been sent to
              <br />{" "}
              <span className="text-[#242742] font-bold">
                {displayedValue}
              </span>{" "}
              Please open it and click
              <br /> the button inside to confirm your subscription
            </div>
          </div>
          {/* Dismiss button */}
          <div>
            <button
              onClick={handleButtonClick}
              className="w-full h-16 rounded-lg bg-[#242742] focus:bg-gradient-to-r from-[#f6536b] to-[#ff6644] focus:shadow-lg focus:shadow-[#ff6644] text-white font-medium"
            >
              Dismiss message
            </button>
          </div>
        </div>
      ) : (
        <div className="w-auto h-auto p-8 sm:p-0 sm:pb-10 bg-white rounded-[50px] sm:rounded-lg flex sm:flex-col items-center gap-x-16 sm:gap-y-10">
          {/* form */}
          <Image
            className="lg:hidden sm:h-[475px]"
            src="/illustration-sign-up-desktop.png"
            width={400}
            height={600}
            alt="image"
          ></Image>
          <form
            className="flex flex-col max-w-[450px] justify-start  ml-10 sm:ml-0 gap-y-12"
            onSubmit={handleOnSubmit}
          >
            {/* description */}
            <div className="flex flex-col justify-start gap-y-7 sm:gap-y-5">
              <div className="text-6xl sm:text-5xl font-bold text-[#242742]">
                Stay updated!
              </div>
              <div className=" text-lg sm:text-[17px] font-semibold text-[#36384e]">
                Join 60.000+ product managers receiving <br /> monthly updates
                on:
              </div>
              <div className="flex flex-col gap-y-3">
                {[
                  "Product discovery and building what matters",
                  "Measuring to ensure updates are success",
                  "And much more!",
                ].map((value) => {
                  return (
                    <div
                      key={value}
                      className="flex items-center gap-x-4 sm:gap-x-3"
                    >
                      <ListIcon className="h-6" />
                      <div className="text-lg sm:text-[16px] text-[#242742] font-semibold">
                        {value}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            {/* input section */}
            <div>
              <div className="flex flex-col gap-y-2">
                <label className="text-md font-bold text-[#242742]">
                  Email Address
                </label>
                <input
                  type="email"
                  onChange={handleInputChange}
                  className="w-[400px] sm:w-[360px] h-16 p-5 border-2 focus:outline-[#9294a0] rounded-xl"
                  placeholder="email@company.com"
                  required
                />
                <button
                  type="submit"
                  className="w-[400px] sm:w-[360px] h-14 mt-4 rounded-lg bg-[#242742] text-white font-medium focus:bg-gradient-to-r from-[#f6536b] to-[#ff6644] focus:shadow-lg focus:shadow-[#ff6644]"
                >
                  Subscribe to monthly newsletter
                </button>
              </div>
            </div>
          </form>
          {/* hero image */}
          <Image
            className="sm:hidden md:hidden"
            src="/illustration-sign-up-desktop.png"
            width={400}
            height={600}
            alt="image"
          ></Image>
        </div>
      )}
    </>
  );
};

export default Signup;
