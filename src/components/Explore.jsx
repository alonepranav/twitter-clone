import React from "react";
import InnerRightSide from "./InnerRightSide";
import InnerLeftSide from "./InnerLeftSide";
import { BiSearch } from "react-icons/bi";
import { LuSettings } from "react-icons/lu";
import { MdClose } from "react-icons/md";
import ToFollowSection from "./ToFollowSection";
import useTitle from "../hooks/UseTitleHook";
import HomePostComponent from "./HomePostComponent";

export default function Explore() {
  useTitle("Explore");

  return (
    <>
      <div className="w-full  h-full flex">
        <InnerLeftSide>
          {
            <>
              <div className="bg-[rgba(255,255,255,.9)] backdrop-blur-xl sticky top-0">
                <div className="flex items-center gap-3 pt-2">
                  <div className="rounded-full ml-5 p-2 border px-5 flex gap-3 items-center bg-slate-100 relative w-full">
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
                          parent.classList.replace(
                            "bg-slate-100",
                            "onblurClass"
                          );
                        else {
                          parent.classList.replace(
                            "onblurClass",
                            "bg-slate-100"
                          );
                        }
                      }}
                      onBlur={(e) => {
                        const parent = e.target.parentElement;
                        if (parent.classList.contains("bg-slate-100"))
                          parent.classList.replace(
                            "bg-slate-100",
                            "onblurClass"
                          );
                        else {
                          parent.classList.replace(
                            "onblurClass",
                            "bg-slate-100"
                          );
                        }
                      }}
                    />
                  </div>
                  <p className="rounded-full hover:bg-slate-200 p-2 mr-3">
                    <LuSettings className="text-xl" />
                  </p>
                </div>

                <div className="mt-1.5">
                  <div className="flex justify-evenly border-b">
                    <div className="relative font-semibold hover:bg-[rgba(0,0,0,0.1)] py-3 w-full flex justify-center items-center transition-all">
                      For you
                      <div className="absolute h-1 w-16 bg-blue-500 bottom-0 rounded"></div>
                    </div>

                    <p className="hover:bg-[rgba(0,0,0,0.1)] py-3 w-full flex justify-center items-center transition-all">
                      Trending
                    </p>
                    <p className="hover:bg-[rgba(0,0,0,0.1)] py-3 w-full flex justify-center items-center transition-all">
                      News
                    </p>
                    <p className="hover:bg-[rgba(0,0,0,0.1)] py-3 w-full flex justify-center items-center transition-all">
                      Sports
                    </p>
                    <p className="hover:bg-[rgba(0,0,0,0.1)] py-3 w-full flex justify-center items-center transition-all">
                      Entertainment
                    </p>
                  </div>
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

              <ToFollowSection />
            </>
          }
        </InnerRightSide>
      </div>
    </>
  );
}
