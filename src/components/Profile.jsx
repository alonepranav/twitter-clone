import React, { useEffect, useState } from "react";
import InnerRightSide from "./InnerRightSide";
import InnerLeftSide from "./InnerLeftSide";
import { BiCalendar, BiLink, BiRepost } from "react-icons/bi";
import { LuArrowLeft } from "react-icons/lu";
import { BsThreeDots } from "react-icons/bs";
import { CgClose } from "react-icons/cg";
import { GoLocation } from "react-icons/go";
import { TbBrandGoogleAnalytics, TbMessageCircle } from "react-icons/tb";
import { AiOutlineHeart } from "react-icons/ai";
import { FiUpload } from "react-icons/fi";
import ToFollowSection from "./ToFollowSection";
import WhatHappeningSection from "./WhatHappeningSection";
import useTitle from "../hooks/UseTitleHook";

export default function Profile() {
  useTitle("Pranav Shilavane (@PranavShilavane)");

  const PeopleContainer = () => {
    return (
      <div className="py-3 hover:bg-sky-50">
        <div className="flex justify-between items-center px-4 hover:bg-slate-100 w-full">
          <div className="flex gap-3">
            <img
              src={`/profile.jpg`}
              className="h-10 w-10 rounded-full mt-1"
              alt=""
            />
            <div className="text-slate-500">
              <p>
                <span className="font-bold text-black">Pranav Shilavane</span>{" "}
                @PranavShilavane 5 Sep
              </p>
              <p className="">
                <span>
                  Hey, Hello this is Pranav, and this is tweet by me...🙂👻😎😋
                </span>
              </p>
            </div>
          </div>
          <div className="text-2xl rounded-full h-8 w-8 flex justify-center items-center text-gray-400">
            <BsThreeDots />
          </div>
        </div>
        <div className="flex pl-16 justify-between pr-6 pt-1">
          <p className="p-2 hover:bg-slate-200 rounded-full">
            <TbMessageCircle className="" />
          </p>
          <p className="p-2 hover:bg-slate-200 rounded-full">
            <BiRepost className="" />
          </p>
          <p className="p-2 hover:bg-slate-200 rounded-full">
            <AiOutlineHeart className="" />
          </p>
          <p className="p-2 hover:bg-slate-200 rounded-full">
            <TbBrandGoogleAnalytics className="" />
          </p>
          <p className="p-2 hover:bg-slate-200 rounded-full">
            <FiUpload className="" />
          </p>
        </div>
      </div>
    );
  };

  const [popup, setPopup] = useState(0);

  useEffect(() => {
    const x = (e) => {
      if (e.key === "Escape") {
        setPopup(0);
        window.removeEventListener("keydown", x);
      }
    };

    if (popup) {
      window.addEventListener("keydown", x);
    } else {
      window.removeEventListener("keydown", x);
    }
  }, [popup]);

  return (
    <>
      <div className="w-full h-full flex">
        <InnerLeftSide>
          {
            <>
              {/*========================== Popup Container============================*/}
              {!popup || (
                <div className="h-screen w-screen absolute top-0 left-0 bg-[rgba(0,0,0,0.9)]  z-10">
                  <CgClose
                    onClick={() => setPopup(false)}
                    className="absolute z-20 top-5 left-5 text-3xl text-white"
                  />

                  <div className="flex justify-center items-center h-full">
                    {popup === 1 ? (
                      <div>
                        <img src="/bg1.jpeg" className="h-full w-full" alt="" />
                      </div>
                    ) : (
                      <img
                        src="/profile.jpg"
                        className="rounded-full h-96 w-96"
                        alt=""
                      />
                    )}
                  </div>
                </div>
              )}
              {/*========================== Popup Container============================*/}
              <div className="px-4 bg-[rgba(255,255,255,.3)] backdrop-blur-xl flex gap-8 items-center sticky top-0 z-30">
                <LuArrowLeft className="text-xl" />
                <p className="text-xl mt-2 tracking-wide font-bold flex flex-col gap-0">
                  <span className="">Pranav Shilavane</span>
                  <span className="text-xs font-normal">17 Posts</span>
                </p>
              </div>
              <div className="relative mt-1">
                <div>
                  <img src="/bg1.jpeg" alt="" onClick={() => setPopup(1)} />
                  <img
                    src="/profile.jpg"
                    className="absolute top-[8rem] left-3 rounded-full border-4 border-white h-36 w-36"
                    alt=""
                    onClick={() => setPopup(2)}
                  />
                </div>
              </div>
              <div className="flex justify-end mt-3 pr-3">
                <div className="flex gap-3">
                  <div className="p-2 border-2 border-slate-200 rounded-full">
                    <BsThreeDots />
                  </div>
                  <button className="bg-black text-white font-semibold px-4 py-1.5 rounded-full">
                    Follow
                  </button>
                </div>
              </div>
              <div className="mt-9 px-4">
                <p className="text-xl font-bold">Pranav Shilavane</p>
                <p className="text-slate-500">@PranavShilavane</p>
              </div>

              <p className="px-4 mt-2">
                Programmer 💻
                <br />
                Give me your ideas I'll turn it into a code 😁
              </p>

              <p className="px-4 mt-1 text-slate-600">
                <GoLocation className="inline-block" />
                &nbsp; Pune, India &nbsp; &nbsp;
                <BiLink className="inline-block" />
                <span className="text-sky-500">
                  &nbsp; github.com/PranavShilavane &nbsp; &nbsp;
                </span>
                <BiCalendar className="inline-block" />
                &nbsp; Joined May 2022
              </p>
              <p className="text-slate-700 px-4 mt-3 text-sm">
                <span className="font-bold">2</span> Following &nbsp; &nbsp;
                &nbsp;
                <span className="font-bold">1</span> Followers&nbsp;
              </p>

              <div className="mt-7">
                <div className="flex justify-evenly border-b">
                  <div className="relative font-semibold hover:bg-slate-200 py-3 w-full flex justify-center items-center transition-all">
                    Posts
                    <div className="absolute h-1 w-16 bg-blue-500 bottom-0 rounded"></div>
                  </div>
                  <p className="hover:bg-slate-200 py-3 w-full flex justify-center items-center transition-all">
                    Replies
                  </p>
                  <p className="hover:bg-slate-200 py-3 w-full flex justify-center items-center transition-all">
                    Media
                  </p>
                  <p className="hover:bg-slate-200 py-3 w-full flex justify-center items-center transition-all">
                    Likes
                  </p>
                </div>
              </div>

              <div className="mt-5">
                <PeopleContainer />
                <PeopleContainer />
                <PeopleContainer />
                <PeopleContainer />
                <PeopleContainer />
                <PeopleContainer />
              </div>
            </>
          }
        </InnerLeftSide>
        <InnerRightSide>
          {
            <>
              <ToFollowSection />
              <WhatHappeningSection />
            </>
          }
        </InnerRightSide>
      </div>
    </>
  );
}
