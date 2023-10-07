import React, { useEffect } from "react";
import { GrClose } from "react-icons/gr";

export default function Premium({ tab, setTab }) {
  useEffect(() => {
    const x = (e) => {
      if (e.key === "Escape") {
        setTab({});
        window.removeEventListener("keydown", x);
      }
    };

    if (tab.get("tab")) {
      window.addEventListener("keydown", x);
    } else {
      window.removeEventListener("keydown", x);
    }
  }, [tab]);

  return (
    <>
      <div className="h-screen w-screen fixed z-50 top-0 left-0 bg-[rgba(0,0,0,0.3)] cursor-auto flex justify-center items-center">
        <div className="bg-white rounded-2xl h-[33.6rem] w-[37.5rem]">
          <div
            className="m-2 p-2.5 hover:bg-slate-200 inline-block rounded-full cursor-pointer"
            onClick={() => setTab({})}
          >
            <GrClose className="text-lg" />
          </div>

          <div className="text-center mt-8">
            <p className="text-[2rem] font-bold">Who are you?</p>
            <p className="mt-4">Choose the right subscription for you:</p>
          </div>

          <div className="flex justify-center items-center gap-6 mt-8 text-sm text-gray-600">
            <div
              className="p-4 h-28 w-56 rounded-xl hover:bg-sky-50"
              style={{
                boxShadow: "0 5px 20px rgba(0,0,0,0.1)",
              }}
            >
              <p>Premium</p>
              <p className="text-base font-bold text-black">
                I am an individual
              </p>
              <p>For individuals and creators</p>
            </div>
            <div
              className="p-4 h-28 w-56 rounded-xl hover:bg-sky-50"
              style={{
                boxShadow: "0 5px 20px rgba(0,0,0,0.1)",
              }}
            >
              <p>Verified Organizations</p>
              <p className="text-base font-bold text-black">
                I am an organization
              </p>
              <p>For businesses, government agencies, and non-profits</p>
            </div>
          </div>
          <div className="mt-8 text-center w-full px-16">
            <button className="text-center w-full rounded-full py-3 font-bold text-lg bg-black text-white">
              Subscribe
            </button>
            <p className="mt-8 font-normal">
              Learn more about <span className="text-sky-500">Premium </span>
              and
              <span className="text-sky-500"> Verified Organization</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
