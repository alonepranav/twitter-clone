import React from "react";
import InnerRightSide from "./InnerRightSide";
import InnerLeftSide from "./InnerLeftSide";
import { BiPlus, BiSearch } from "react-icons/bi";
import { LuArrowLeft } from "react-icons/lu";
import ToFollowSection from "./ToFollowSection";
import WhatHappeningSection from "./WhatHappeningSection";
import { MdClose } from "react-icons/md";

import useTitle from "../hooks/UseTitleHook";

export default function Lists() {
  useTitle("List created by @PranavShilavane");

  const PeopleContainer = ({ i }) => {
    return (
      <div className="flex justify-between items-center p-4 hover:bg-slate-100 w-full">
        <div className="flex gap-3">
          <img src={`/box/${i}.png`} className="h-12 w-12" alt="" />
          <div className="text-slate-500">
            <p>
              <span className="font-bold text-black">Pune</span>. 56 members{" "}
            </p>
            <p className="flex gap-1 items-center">
              <img src="/people-over.png" className="h-5" alt="" />
              <span>15.5K followers including @PranavShilavane</span>
            </p>
          </div>
        </div>
        <div className="bg-black text-2xl rounded-full h-8 w-8 flex justify-center items-center text-white">
          <BiPlus />
        </div>
      </div>
    );
  };

  return (
    <>
      <div className="w-full  h-full flex">
        <InnerLeftSide>
          {
            <>
              <div className="p-4 bg-[rgba(255,255,255,.3)] backdrop-blur-xl flex gap-8 items-center sticky top-0">
                <LuArrowLeft className="mt-1 text-xl" />
                <p className="text-xl tracking-wide font-bold">
                  Suggested Lists
                </p>
              </div>

              <div className="p-4">
                <div className="mt-2">
                  <img src="/list.png" alt="List Image" />
                </div>
                <div className="px-2 mt-5">
                  <p className="text-2xl font-bold">Choose your Lists</p>
                  <p className="text-stone-600 text-sm mt-2">
                    When you follow a List, you'll be able to quickly keep up
                    with the experts on what you care about most.
                  </p>
                </div>
              </div>
              <br />
              <hr />
              <h6 className="my-3 mt-5 text-xl font-bold px-4">
                Discover new Lists
              </h6>
              <div className="">
                {[1, 2, 3, 4, 5, 6, 7].map((a, i) => (
                  <PeopleContainer key={i} i={i} />
                ))}
                {[1, 2, 3, 4, 5, 6, 7].map((a, i) => (
                  <PeopleContainer key={i} i={i} />
                ))}
                {[1, 2, 3, 4, 5, 6, 7].map((a, i) => (
                  <PeopleContainer key={i} i={i} />
                ))}
              </div>

              <div className="mt-2">
                <img src="/list-plus.png" alt="List Image" />
              </div>
              <div className="px-4 mt-5">
                <p className="text-2xl font-bold">Choose your own Lists</p>
                <p className="text-stone-600 text-sm mt-2">
                  You can create your own Lists by adding the people who are
                  already talking about what you want to keep up with most.
                </p>
                <button className="bg-black text-white py-2 px-5 text-lg rounded-full mt-7">
                  Get Started
                </button>
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
              </div>
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

              <WhatHappeningSection />
              <ToFollowSection />
            </>
          }
        </InnerRightSide>
      </div>
    </>
  );
}
