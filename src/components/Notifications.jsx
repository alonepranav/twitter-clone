import React from "react";
import InnerRightSide from "./InnerRightSide";
import InnerLeftSide from "./InnerLeftSide";
import { BiPlus, BiSearch } from "react-icons/bi";
import { LuSettings } from "react-icons/lu";
import { Link, Outlet, useLocation } from "react-router-dom";
import ToFollowSection from "./ToFollowSection";
import WhatHappeningSection from "./WhatHappeningSection";
import { MdClose } from "react-icons/md";
import useTitle from "../hooks/UseTitleHook";

export default function Notifications() {
  useTitle("Notifications");
  
  const l = useLocation();

  return (
    <>
      <div className="w-full  h-full flex">
        <InnerLeftSide>
          {
            <>
              <div className="pt-3 bg-[rgba(255,255,255,.7)] backdrop-blur-xl sticky top-0">
                <div className="px-4 flex justify-between items-center">
                  <p className="text-xl tracking-wide font-bold">
                    Notifications
                  </p>
                  <LuSettings className="text-xl" />
                </div>

                <div className="mt-4">
                  <div className="flex justify-evenly border-b">
                    {[
                      { text: "All", path: "" },
                      { text: "Verified", path: "/verified" },
                      { text: "Mentions", path: "/mentions" },
                    ].map((a, i) => {
                      return (
                        <Link
                          to={"/notifications" + a.path}
                          key={i}
                          className="relative font-semibold hover:bg-slate-200 py-3 w-full flex justify-center items-center transition-all"
                        >
                          {a.text}
                          {l.pathname === "/notifications" + a.path ? (
                            <div className="absolute h-1 w-16 bg-blue-500 bottom-0 rounded"></div>
                          ) : (
                            <></>
                          )}
                        </Link>
                      );
                    })}
                  </div>
                </div>
                <div>
                  <Outlet />
                </div>
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
