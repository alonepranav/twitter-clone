import React, { useEffect, useState } from "react";
import { CgClose } from "react-icons/cg";
import { GoFileMedia } from "react-icons/go";
import { GrFormCheckmark, GrLocation, GrSchedulePlay } from "react-icons/gr";
import { IoIosArrowDown } from "react-icons/io";
import { RiEarthFill } from "react-icons/ri";
import { MdOutlineGifBox } from "react-icons/md";
import { AiOutlineAlignLeft } from "react-icons/ai";
import { BiSmile } from "react-icons/bi";

export default function UserPost({ tab, setTab }) {
  const [people, setPeople] = useState({ text: "Everyone", oc: false });

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
      <div className="h-screen w-screen fixed z-50 top-0 left-0 bg-[rgba(0,0,0,0.3)] flex justify-center items-start">
        <div className="bg-white mt-9 min-h-[18.6rem] h-fit w-[37.5rem] rounded-2xl p-4">
          <div className="flex justify-between items-center">
            <p className="p-2 hover:bg-slate-200 rounded-full">
              <CgClose
                className="text-lg cursor-pointer"
                onClick={() => setTab({})}
              />
            </p>
            <button className="text-sky-600 hover:hover:bg-sky-100 rounded-full px-5 py-1.5 font-semibold text-sm">
              Drafts
            </button>
          </div>

          <div className="flex gap-3 mt-5 w-full">
            <div className="h-9 w-9 rounded-full overflow-hidden">
              <img src="/x.png" alt="" />
            </div>

            <div className="w-full">
              <div className="border w-fit rounded-full px-3 py-1 text-sm relative">
                <div
                  className={`flex gap-1 justify-center items-center ${
                    people.text === "Everyone"
                      ? "text-sky-500"
                      : "text-green-600"
                  } font-semibold`}
                  onClick={() => setPeople({ ...people, oc: !people.oc })}
                >
                  <p>{people.text}</p>
                  <IoIosArrowDown className="mt-1" />
                </div>

                {!people.oc || (
                  <div
                    className="absolute overflow-hidden top-8 left-[-70%] h-[11.4rem] w-72 bg-white rounded-2xl"
                    style={{
                      boxShadow: "0 0 10px rgba(0,0,0,0.3)",
                    }}
                  >
                    <h6 className="text-xl px-4 pt-4 font-bold">
                      Choose audience
                    </h6>

                    <div
                      className="mt-3 flex justify-between items-center w-full py-2.5 px-4 hover:bg-slate-200"
                      onClick={() => {
                        setPeople({ text: "Everyone", oc: false });
                      }}
                    >
                      <div className="flex gap-4 justify-start items-center">
                        <p className="bg-sky-500 p-2.5 rounded-full text-white">
                          <RiEarthFill className="text-xl" />
                        </p>
                        <p className="font-semibold text-base">Everyone</p>
                      </div>
                      {people.text === "Everyone" ? (
                        <GrFormCheckmark className="text-sky-600 text-2xl" />
                      ) : (
                        ""
                      )}
                    </div>
                    <div
                      className="flex justify-between py-2.5
                      px-4 items-center hover:bg-slate-200"
                      onClick={() => {
                        setPeople({ text: "Circle", oc: false });
                      }}
                    >
                      <div className="flex gap-4 justify-start items-center">
                        <p className="bg-green-600 px-3 py-2.5 rounded-full text-white">
                          <i className="bi bi-person-heart"></i>
                        </p>
                        <div className="font-semibold text-base">
                          <p>Circle</p>
                          <p className="font-bold">
                            0
                            <span className="text-stone-500 font-normal">
                              {" "}
                              People{" "}
                            </span>
                            <span className="underline underline-offset-4 font-bold">
                              Edit
                            </span>
                          </p>
                        </div>
                      </div>
                      {people.text === "Circle" ? (
                        <GrFormCheckmark className="text-sky-600 text-2xl" />
                      ) : (
                        <></>
                      )}
                    </div>
                  </div>
                )}
              </div>
              <div className="pr-3">
                <textarea
                  placeholder="What is happening?!"
                  className="w-full ml-1 mt-2 outline-none border-none placeholder:text-xl placeholder:text-slate-500 max-h-[61vh] overflow-y-scroll"
                  rows={4}
                  onInput={(e) => {
                    const n = e.target.value.split("\n").length;
                    e.target.rows = n >= 4 ? n : 4;
                  }}
                ></textarea>
              </div>
            </div>
          </div>
          <button className="mb-3 text-sky-500 font-semibold flex items-center gap-1">
            <RiEarthFill />
            <p>Everyone can reply</p>
          </button>

          <hr />
          <div className="flex justify-between items-center mt-2">
            <div className="flex gap-1">
              <p className="p-2 hover:bg-sky-100 rounded-full text-sky-700">
                <GoFileMedia className="" />
              </p>
              <p className="p-2 hover:bg-sky-100 rounded-full text-sky-700">
                <MdOutlineGifBox className="" />
              </p>
              <p className="p-2 hover:bg-sky-100 rounded-full text-sky-700">
                <AiOutlineAlignLeft className="" />
              </p>
              <p className="p-2 hover:bg-sky-100 rounded-full text-sky-700">
                <BiSmile className="" />
              </p>
              <p className="p-2 hover:bg-sky-100 rounded-full text-sky-700">
                <GrSchedulePlay className="" />
              </p>
              <p className="p-2 hover:bg-sky-100 rounded-full text-sky-700">
                <GrLocation className="" />
              </p>
            </div>

            <button className="px-4 py-1.5 bg-sky-500 text-white font-semibold rounded-full">
              Post
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
