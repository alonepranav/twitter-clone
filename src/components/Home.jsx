import React, { useEffect } from "react";
import InnerRightSide from "./InnerRightSide";
import InnerLeftSide from "./InnerLeftSide";
import { BiSearch, BiSmile } from "react-icons/bi";
import { GrLocation, GrSchedulePlay } from "react-icons/gr";
import { AiOutlineAlignLeft } from "react-icons/ai";
import { MdClose, MdOutlineGifBox } from "react-icons/md";
import { GoFileMedia } from "react-icons/go";
import ToFollowSection from "./ToFollowSection";
import SubscribeToPremium from "./SubscribeToPremium";
import WhatHappeningSection from "./WhatHappeningSection";
import HomePostComponent from "./HomePostComponent";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  useEffect(() => {
    const login = localStorage.getItem("twitter");

    if (login === null) {
      navigate("/login");
    }
  }, []);

  return (
    <>
      <div className="w-full  h-full flex">
        <InnerLeftSide>
          {
            <>
              <div className="bg-[rgba(255,255,255,.3)] backdrop-blur-xl sticky top-0">
                <p className="p-4 text-xl tracking-wide font-bold">Home</p>

                <div className="mt-">
                  <div className="flex justify-evenly border-b">
                    <div className="relative font-semibold hover:bg-[rgba(0,0,0,0.1)] py-3 w-full flex justify-center items-center transition-all">
                      For you
                      <div className="absolute h-1 w-16 bg-blue-500 bottom-0 rounded"></div>
                    </div>

                    <p className="hover:bg-[rgba(0,0,0,0.1)] py-3 w-full flex justify-center items-center transition-all">
                      Following
                    </p>
                  </div>
                </div>
              </div>
              <div className="px-4 pt-4 pb-3">
                <div className="flex gap-5 items-center text-xl text-stone-600">
                  <img src="profile.jpg" className="h-11 rounded-full" alt="" />
                  <p>What is happening?!</p>
                </div>

                <div className="flex justify-between items-center mt-2 pl-14">
                  <div className="flex gap-1 text-lg text-sky-500">
                    <p className="p-2 hover:bg-sky-100 rounded-full">
                      <GoFileMedia className="" />
                    </p>
                    <p className="p-2 hover:bg-sky-100 rounded-full">
                      <MdOutlineGifBox className="" />
                    </p>
                    <p className="p-2 hover:bg-sky-100 rounded-full">
                      <AiOutlineAlignLeft className="" />
                    </p>
                    <p className="p-2 hover:bg-sky-100 rounded-full">
                      <BiSmile className="" />
                    </p>
                    <p className="p-2 hover:bg-sky-100 rounded-full">
                      <GrSchedulePlay className="" />
                    </p>
                    <p className="p-2 hover:bg-sky-100 rounded-full">
                      <GrLocation className="" />
                    </p>
                  </div>

                  <button className="px-4 py-1.5 bg-blue-300 text-white font-semibold rounded-full">
                    Post
                  </button>
                </div>
              </div>
              <hr />
              <HomePostComponent />
            </>
          }
        </InnerLeftSide>
        <InnerRightSide>
          {
            <>
              <div className="sticky top-0 left-0 py-2 bg-white">
                <div className="rounded-full ml-5 p-2 border px-5 flex gap-3 items-center bg-slate-100 w-[21.5rem] relative">
                  <BiSearch className="text-2xl mt-1" />
                  <p
                    onClick={(e) =>
                      (e.target.parentElement.nextElementSibling.value = "")
                    }
                    className="p-1 mt-0.5 bg-sky-600 rounded-full absolute top-2 right-5 hidden"
                  >
                    <MdClose className="text-lg text-white" />
                  </p>
                  <input
                    type="text"
                    placeholder="Search"
                    className="w-full border-none outline-none placeholder:text-slate-600 bg-transparent"
                    onChange={(e) => {
                      const parent = e.target.previousElementSibling;

                      if (e.target.value)
                        parent.classList.replace("hidden", "block");
                      else {
                        parent.classList.replace("block", "hidden");
                      }
                    }}
                    onFocus={(e) => {
                      const parent = e.target.parentElement;
                      if (parent.classList.contains("bg-slate-100"))
                        parent.classList.replace("bg-slate-100", "onblurClass");
                      else {
                        parent.classList.replace("onblurClass", "bg-slate-100");
                      }
                    }}
                    onBlur={(e) => {
                      const parent = e.target.parentElement;
                      if (parent.classList.contains("bg-slate-100"))
                        parent.classList.replace("bg-slate-100", "onblurClass");
                      else {
                        parent.classList.replace("onblurClass", "bg-slate-100");
                      }
                    }}
                  />
                </div>
              </div>

              <SubscribeToPremium />
              <WhatHappeningSection />
              <ToFollowSection />
            </>
          }
        </InnerRightSide>
      </div>
    </>
  );
}
