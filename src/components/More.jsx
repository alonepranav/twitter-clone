import React, { useEffect, useMemo, useState } from "react";
import { BiBookmark, BiHelpCircle } from "react-icons/bi";
import { GoMention } from "react-icons/go";
import { PiMoneyBold } from "react-icons/pi";
import { Link } from "react-router-dom";
import { FiSettings } from "react-icons/fi";
import { IoIosArrowDown } from "react-icons/io";
import { BsPencilSquare } from "react-icons/bs";
import { SiSimpleanalytics } from "react-icons/si";
import { LuArrowUpRightSquare } from "react-icons/lu";
import { TbCookieMan } from "react-icons/tb";

export default function More({ more, setMore }) {
  useEffect(() => {
    const x = (e) => {
      if (e.key === "Escape") {
        setMore(false);
        window.removeEventListener("keydown", x);
      }
    };

    if (more) {
      window.addEventListener("keydown", x);
    } else {
      window.removeEventListener("keydown", x);
    }
  }, [more]);

  return (
    <>
      <div
        className="absolute top-[-600%] left-[-5%] bg-white max-h-[34rem] h-fit w-80 rounded-2xl overflow-y-scroll"
        style={{
          boxShadow: "0 0 20px rgba(0,0,0,0.2)",
        }}
      >
        <ul>
          <Link
            to={"/"}
            className="flex justify-start items-center gap-6 font-bold py-4 px-5 w-full hover:bg-slate-100"
          >
            <BiBookmark />
            <p>Bookmarks</p>
          </Link>
          <Link
            to={"/"}
            className="flex justify-start items-center gap-6 font-bold py-4 px-5 w-full hover:bg-slate-100"
          >
            <GoMention />
            <p>Connect</p>
          </Link>
          <Link
            to={"/"}
            className="flex justify-start items-center gap-6 font-bold py-4 px-5 w-full hover:bg-slate-100"
          >
            <PiMoneyBold />
            <p>Monetization</p>
          </Link>
        </ul>

        <hr className="mx-4" />

        <ul className="">
          <div
            className="w-full"
            onClick={(e) => {
              const svg = e.currentTarget.querySelector(".icon");
              const content = e.currentTarget.querySelector(".content");
              svg.classList.toggle("up");
              content.classList.toggle("display-toggle");
            }}
          >
            <div className="flex justify-between items-center hover:bg-slate-100 cursor-pointer w-full px-4 py-3">
              <p className="text-[1rem] font-semibold">Creator Studio</p>
              <IoIosArrowDown className="icon transition-all" />
            </div>

            <div className="content display-toggle">
              <div className="flex justify-start items-center hover:bg-slate-100 cursor-pointer w-full px-4 py-3 gap-2">
                <SiSimpleanalytics className="icon transition-all" />
                <p className="text-[1rem] font-semibold">Analytics</p>
              </div>
            </div>
          </div>

          <div
            className="w-full"
            onClick={(e) => {
              const svg = e.currentTarget.querySelector(".icon");
              const content = e.currentTarget.querySelector(".content");
              svg.classList.toggle("up");
              content.classList.toggle("display-toggle");
            }}
          >
            <div className="flex justify-between items-center hover:bg-slate-100 cursor-pointer w-full px-4 py-3">
              <p className="text-[1rem] font-semibold">Professional Tools</p>
              <IoIosArrowDown className="icon transition-all" />
            </div>

            <div className="content display-toggle">
              <div className="flex justify-start items-center hover:bg-slate-100 cursor-pointer w-full px-4 py-3 gap-2">
                <LuArrowUpRightSquare className="icon transition-all" />
                <p className="text-[1rem] font-semibold">Ads</p>
              </div>
            </div>
          </div>

          <div
            className="w-full"
            onClick={(e) => {
              const svg = e.currentTarget.querySelector(".icon");
              const content = e.currentTarget.querySelector(".content");
              svg.classList.toggle("up");
              content.classList.toggle("display-toggle");
            }}
          >
            <div className="flex justify-between items-center hover:bg-slate-100 cursor-pointer w-full px-4 py-3">
              <p className="text-[1rem] font-semibold">Setting and Support</p>
              <IoIosArrowDown className="icon transition-all" />
            </div>

            <div className="content display-toggle">
              <div className="flex justify-start items-center hover:bg-slate-100 cursor-pointer w-full px-4 py-3 gap-2">
                <FiSettings className="icon transition-all" />
                <p className="text-[1rem] font-semibold">Setting and Privacy</p>
              </div>

              <div className="flex justify-start items-center hover:bg-slate-100 cursor-pointer w-full px-4 py-3 gap-2">
                <BiHelpCircle className="icon transition-all" />
                <p className="text-[1rem] font-semibold">Help Center</p>
              </div>

              <div className="flex justify-start items-center hover:bg-slate-100 cursor-pointer w-full px-4 py-3 gap-2">
                <BsPencilSquare className="icon transition-all" />
                <p className="text-[1rem] font-semibold">Display</p>
              </div>

              <div className="flex justify-start items-center hover:bg-slate-100 cursor-pointer w-full px-4 py-3 gap-2">
                <TbCookieMan className="icon transition-all" />
                <p className="text-[1rem] font-semibold">Keyboard shortcuts</p>
              </div>
            </div>
          </div>
        </ul>
      </div>
    </>
  );
}
