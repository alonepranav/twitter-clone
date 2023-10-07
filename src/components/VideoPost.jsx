import React, { useEffect, useRef } from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { BiDotsHorizontal, BiRepost } from "react-icons/bi";
import { BsDot } from "react-icons/bs";
import { FiUpload } from "react-icons/fi";
import { GoVerified } from "react-icons/go";
import { HiDotsHorizontal, HiDotsVertical } from "react-icons/hi";
import { MdVerified, MdVerifiedUser } from "react-icons/md";
import { TbBrandGoogleAnalytics, TbMessageCircle } from "react-icons/tb";

export default function VideoPost({ tweet, path, play, post, i, setPost }) {
  const vref = useRef();

  useEffect(() => {
    if (play === true) vref.current.play();
    else vref.current.pause();
  }, [post]);

  const playVideo = () => {
    const t = [...post];

    const r = t.map((u, k) => {
      if (u.type === "video") {
        if (k === i) {
          return { ...u, play: true };
        } else {
          return { ...u, play: false };
        }
      } else return { ...u };
    });

    setPost([...r]);
  };

  return (
    <>
      <div className="p-4 flex gap-2 hover:bg-stone-100">
        <img src="/profile.jpg" className="h-12 rounded-full" alt="" />
        <div>
          <div className="text-slate-500 flex justify-between items-center ">
            <p>
              <span className="font-bold text-black">
                Pranav Shilavane{" "}
                <MdVerified className="text-sky-500 text-xl inline-block" />{" "}
              </span>
              @PranavShilavane . 3h
            </p>
            <p className="rounded-full hover:bg-sky-200 p-2">
              <HiDotsHorizontal />
            </p>
          </div>
          <p className="text-sm mt-1">{tweet}</p>

          {play === true ? (
            <video
              controls
              onPlay={() => playVideo()}
              ref={vref}
              loop
              className="rounded-2xl h-[500px] w-full mt-3"
            >
              <source src={path} type="video/mp4" />
            </video>
          ) : (
            <video
              controls
              onPlay={() => playVideo()}
              ref={vref}
              loop
              className="rounded-2xl h-[500px] w-full mt-3"
            >
              <source src={path} type="video/mp4" />
            </video>
          )}

          {/* <img
            src="/profile.jpg"
            al
            className="rounded-2xl h-[500px] w-full mt-3"
          /> */}

          <div className="flex justify-start pl-0 pt-5">
            <p className="p-2 hover:text-sky-400 flex justify-start items-center gap-1 mr-5">
              <p className="p-2 hover:bg-sky-200 rounded-full">
                <TbMessageCircle className="" />
              </p>
              <p>173</p>
            </p>
            <p className="p-2 hover:text-emerald-500 rounded-full flex justify-start items-center gap-2 mr-9">
              <p className="p-2 hover:bg-green-200 rounded-full">
                <BiRepost className="" />
              </p>
              <p>10k</p>
            </p>
            <p className="p-2 hover:text-rose-500 rounded-full flex justify-start items-center gap-2 mr-5">
              <p className="p-2 hover:bg-rose-200 rounded-full">
                <AiOutlineHeart className="" />
              </p>
              <p>100k</p>
            </p>
            <p className="p-2 hover:text-sky-400 rounded-full flex justify-start items-center gap-2 mr-5">
              <p className="p-2 hover:bg-sky-200 rounded-full">
                <TbBrandGoogleAnalytics className="" />
              </p>
              <p>111M</p>
            </p>
            <p className="p-1 px-4 hover:bg-slate-200 rounded-full flex justify-start items-center gap-2">
              <FiUpload className="text-sm" />
            </p>
          </div>
        </div>
      </div>
      <hr />
    </>
  );
}
