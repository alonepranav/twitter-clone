import React, { useEffect } from "react";
import { BiSearch } from "react-icons/bi";
import { CgClose } from "react-icons/cg";
import { PiUserSquare, PiUsersThreeBold } from "react-icons/pi";

export default function MessageBox({ message, setMessage }) {
  useEffect(() => {
    const x = (e) => {
      if (e.key === "Escape") {
        setMessage(false);
        window.removeEventListener("keydown", x);
      }
    };

    if (message) {
      window.addEventListener("keydown", x);
    } else {
      window.removeEventListener("keydown", x);
    }
  }, [message]);

  return (
    <>
      <div className="h-screen w-screen z-50 absolute top-0 left-0 flex justify-center items-center bg-[rgba(0,0,0,0.4)]">
        <div className="bg-white py-3 rounded-2xl w-[600px] h-[650px]">
          <div className="flex justify-between items-center px-4">
            <div className="flex gap-10 items-center">
              <p
                className="p-2  hover:bg-slate-200 rounded-full"
                onClick={() => setMessage(false)}
              >
                <CgClose className="text-xl" />
              </p>
              <p className="text-xl font-bold">New message</p>
            </div>
            <button className="bg-[rgba(0,0,0,0.5)] rounded-full px-4 font-semibold py-1 text-white ">
              Next
            </button>
          </div>

          <div className="flex gap-4 mt-5 mb-3 items-center px-4">
            <BiSearch className="text-xl text-sky-500 ml-1" />
            <input
              autoFocus
              type="text"
              placeholder="Search people"
              className="outline-none placeholder:text-stone-600"
            />
          </div>
          <hr />
          <div className="flex gap-3 py-3 px-4 items-center text-sky-500 font-bold">
            <p className="p-2 border b-slate-300 rounded-full">
              <PiUsersThreeBold className="text-2xl" />
            </p>
            <p>Create a group</p>
          </div>
          <hr />
        </div>
      </div>
    </>
  );
}
