import React from "react";
import InnerRightSide from "./InnerRightSide";
import InnerLeftSide from "./InnerLeftSide";
import { LuArrowLeft } from "react-icons/lu";
import { TbUsersPlus } from "react-icons/tb";
import ToFollowSection from "./ToFollowSection";
import WhatHappeningSection from "./WhatHappeningSection";
import { BiSearch } from "react-icons/bi";
import useTitle from "../hooks/UseTitleHook";

export default function Communities() {
  useTitle("Communities");

  const PeopleContainer = ({ i }) => {
    return (
      <div className="flex justify-between items-center px-4 py-2 hover:bg-slate-100 w-full">
        <div className="flex gap-3">
          <img src={`/communities/${i}.png`} className="h-24 w-24" alt="" />
          <div className="text-slate-500">
            <span className="font-bold text-black">Cooking</span>
            <p className="flex gap-1 items-center">
              <span className="font-bold text-black">123.45k</span>
              <span>Members</span>
            </p>
            <img src="/many-peoples.png" className="h-10 mt-2" alt="" />
          </div>
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
              <div className="p-4 bg-[rgba(255,255,255,.3)] backdrop-blur-xl sticky top-0 flex justify-between items-center">
                <div className="flex gap-8 items-center">
                  <LuArrowLeft className="mt-1 text-xl" />
                  <p className="text-xl tracking-wide font-bold">Communities</p>
                </div>
                <div className="flex gap-5">
                  <p className="p-2 hover:bg-sky-100 rounded-full">
                    <BiSearch />
                  </p>
                  <p className="p-2 hover:bg-sky-100 rounded-full">
                    <TbUsersPlus />
                  </p>
                </div>
              </div>
              <h6 className="my-3 mt-1 text-xl font-bold px-4">
                Discover new Communities
              </h6>
              <div className="mt-10">
                {[0, 1, 2, 3, 4, 5].map((a, i) => (
                  <PeopleContainer key={i} i={a} />
                ))}
                {[3, 4, 5, 2, 0, 1].map((a, i) => (
                  <PeopleContainer key={i} i={a} />
                ))}
                {[1, 0, 4, 3, 2, 5].map((a, i) => (
                  <PeopleContainer key={i} i={a} />
                ))}
              </div>
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
            </>
          }
        </InnerLeftSide>
        <InnerRightSide>
          {
            <>
              <WhatHappeningSection />
              <ToFollowSection />
            </>
          }
        </InnerRightSide>
      </div>
    </>
  );
}
