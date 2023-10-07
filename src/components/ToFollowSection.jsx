import React from "react";

export default function ToFollowSection() {
  return (
    <>
      <div className="w-[21.5rem] h-72 bg-stone-100 ml-5 mt-3 rounded-2xl">
        <div>
          <p className="text-xl font-bold px-4 py-4">You might like</p>
        </div>
        <div className="flex justify-between py-3 items-center px-4 hover:bg-slate-100 w-full">
          <div className="flex gap-3">
            <img
              src={`/profile.jpg`}
              className="h-10 w-10 rounded-full mt-1"
              alt=""
            />
            <div className="text-slate-500">
              <p>
                <span className="font-bold text-black hover-underline">
                  Pranav Shilavane
                </span>
                <br />
                @PranavShilavane
              </p>
            </div>
          </div>
          <button className="bg-black text-white font-bold rounded-full px-4 py-1.5 text-sm">
            Follow
          </button>
        </div>
        <div className="flex justify-between py-3 items-center px-4 hover:bg-slate-100 w-full">
          <div className="flex gap-3">
            <img
              src={`/profile.jpg`}
              className="h-10 w-10 rounded-full mt-1"
              alt=""
            />
            <div className="text-slate-500">
              <p>
                <span className="font-bold text-black hover-underline">
                  Pranav Shilavane
                </span>
                <br />
                @PranavShilavane
              </p>
            </div>
          </div>
          <button className="bg-black text-white font-bold rounded-full px-4 py-1.5 text-sm">
            Follow
          </button>
        </div>
        <div className="flex justify-between py-3 items-center px-4 hover:bg-slate-100 w-full">
          <div className="flex gap-3">
            <img
              src={`/profile.jpg`}
              className="h-10 w-10 rounded-full mt-1"
              alt=""
            />
            <div className="text-slate-500">
              <p>
                <span className="font-bold text-black hover-underline">
                  Pranav Shilavane
                </span>
                <br />
                @PranavShilavane
              </p>
            </div>
          </div>
          <button className="bg-black text-white font-bold rounded-full px-4 py-1.5 text-sm">
            Follow
          </button>
        </div>
      </div>
    </>
  );
}
