import React, { useEffect, useRef } from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { BiRepost } from "react-icons/bi";
import { FiUpload } from "react-icons/fi";
import { HiDotsHorizontal } from "react-icons/hi";
import { MdVerified } from "react-icons/md";
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
            <div>
              <span className="font-bold text-black">
                Pranav Shilavane{" "}
                <MdVerified className="text-sky-500 text-xl inline-block" />{" "}
              </span>
              @PranavShilavane . 3h
            </div>
            <div className="rounded-full hover:bg-sky-200 p-2">
              <HiDotsHorizontal />
            </div>
          </div>
          <div className="text-sm mt-1">{tweet}</div>

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
          
          <div className="flex justify-start pl-0 pt-5">
            <div className="p-2 hover:text-sky-400 flex justify-start items-center gap-1 mr-5">
              <div className="p-2 hover:bg-sky-200 rounded-full">
                <TbMessageCircle className="" />
              </div>
              <div>173</div>
            </div>
            <div className="p-2 hover:text-emerald-500 rounded-full flex justify-start items-center gap-2 mr-9">
              <div className="p-2 hover:bg-green-200 rounded-full">
                <BiRepost className="" />
              </div>
              <div>10k</div>
            </div>
            <div className="p-2 hover:text-rose-500 rounded-full flex justify-start items-center gap-2 mr-5">
              <div className="p-2 hover:bg-rose-200 rounded-full">
                <AiOutlineHeart className="" />
              </div>
              <div>100k</div>
            </div>
            <div className="p-2 hover:text-sky-400 rounded-full flex justify-start items-center gap-2 mr-5">
              <div className="p-2 hover:bg-sky-200 rounded-full">
                <TbBrandGoogleAnalytics className="" />
              </div>
              <div>111M</div>
            </div>
            <div className="p-1 px-4 hover:bg-slate-200 rounded-full flex justify-start items-center gap-2">
              <FiUpload className="text-sm" />
            </div>
          </div>
        </div>
      </div>
      <hr />
    </>
  );
}
