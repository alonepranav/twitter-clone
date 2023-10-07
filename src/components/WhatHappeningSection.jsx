import React from "react";
import { BiDotsHorizontal } from "react-icons/bi";

export default function WhatHappeningSection() {
  const Box = () => {
    return (
      <div className="flex justify-between py-3 items-center px-4 hover:bg-sky-100 w-full">
        <div className="flex gap-3">
          <div className="text-slate-500">
            <p className="text-xs text-stone-800">Trending in India</p>
            <p className="font-bold text-black text-lg">#StarPranav</p>
            <p className="text-xs text-stone-800">1 Million Posts</p>
          </div>
        </div>
        <button className="hover:bg-stone-200 text-black font-bold rounded-full px-2 py-2 text-sm">
          <BiDotsHorizontal />
        </button>
      </div>
    );
  };

  return (
    <>
      <div className="w-[21.5rem] h-fit overflow-hidden bg-stone-100 ml-5 mt-3 rounded-2xl">
        <div>
          <p className="text-xl font-bold px-4 py-4">What's happening</p>
        </div>

        <div>
          <Box />
          <Box />
          <Box />
          <Box />
          <Box />
        </div>
        <p className="px-4 py-3 text-sky-600">See more</p>
      </div>
    </>
  );
}
