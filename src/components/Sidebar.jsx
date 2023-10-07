import React, { useState } from "react";
import { Link, NavLink, useLocation, useSearchParams } from "react-router-dom";
import {
  RiFileListFill,
  RiFileListLine,
  RiHome7Fill,
  RiHome7Line,
  RiNotification4Line,
  RiTwitterXLine,
} from "react-icons/ri";
import { FaSearch } from "react-icons/fa";
import { BiSearch } from "react-icons/bi";
import { RiNotificationFill } from "react-icons/ri";
import { HiOutlineMail, HiMail } from "react-icons/hi";
import { CgMoreO } from "react-icons/cg";
import { FiMoreHorizontal } from "react-icons/fi";
import Premium from "./Premium";
import More from "./More";
import UserPost from "./UserPost";
import { createPortal } from "react-dom";

export default function Sidebar() {
  const [more, setMore] = useState(false);

  const l = useLocation();

  const [tab, setTab] = useSearchParams();

  const navLinkStyle = ({ isActive }) => {
    if (isActive)
      return {
        fontWeight: 700,
      };
    else
      return {
        fontWeight: 500,
      };
  };

  return (
    <>
      <div className="fixed top-0 h-screen w-64 border-r border-slate-300 bg-white flex justify-between flex-col items-start">
        {/* ----------------------------- The PREMIUM Tab --------------------------  */}
        <>
          {tab.get("tab") === "premium"
            ? createPortal(
                <Premium {...{ tab, setTab }} />,
                document.getElementById("premium")
              )
            : ""}
        </>
        {/* ----------------------------- The PREMIUM Tab --------------------------  */}
        {/* ----------------------------- The User POST Tab --------------------------  */}
        <>
          {tab.get("tab") === "user-post"
            ? createPortal(
                <UserPost {...{ tab, setTab }} />,
                document.getElementById("userpost")
              )
            : ""}
        </>
        {/* ----------------------------- The User POST Tab --------------------------  */}

        <div className="w-full pr-8">
          <Link
            to={"/"}
            className="overflow-hidden mt-0.5 hover:bg-stone-200 px-3 py-3.5 rounded-full inline-block"
          >
            <img src="/x.png" alt="Twitter Logo" className="h-6" />
          </Link>

          <div className="mt-1">
            <ul className="flex flex-col justify-center text-xl">
              <NavLink
                to={"/"}
                className={`w-fit flex justify-start items-center gap-5 py-[.64rem] pl-3 pr-7 transition-all rounded-full hover:bg-stone-200`}
                style={navLinkStyle}
              >
                <div>
                  {l.pathname === "/" ? (
                    <RiHome7Fill className="text-2xl" />
                  ) : (
                    <RiHome7Line className="text-2xl" />
                  )}
                </div>
                <p>Home</p>
              </NavLink>
              <NavLink
                to={"/explore"}
                className={`w-fit flex justify-start items-center gap-5 py-[.64rem] pl-3 pr-7 transition-all rounded-full hover:bg-stone-200`}
                style={navLinkStyle}
              >
                <div>
                  {l.pathname === "/explore" ? (
                    <FaSearch className="text-2xl" />
                  ) : (
                    <BiSearch className="text-2xl" />
                  )}
                </div>
                <p>Explore</p>
              </NavLink>
              <NavLink
                to={"/notifications"}
                className={`w-fit flex justify-start items-center gap-5 py-[.64rem] pl-3 pr-7 transition-all rounded-full hover:bg-stone-200  ${""}`}
                style={
                  l.pathname.includes("notifications")
                    ? {
                        fontWeight: "700",
                      }
                    : {
                        fontWeight: "500",
                      }
                }
              >
                <div>
                  {l.pathname === "/notifications" ||
                  l.pathname === "/notifications/verified" ||
                  l.pathname === "/notifications/mentions" ? (
                    <RiNotificationFill className="text-2xl" />
                  ) : (
                    <RiNotification4Line className="text-2xl" />
                  )}
                </div>
                <p>Notifications</p>
              </NavLink>
              <NavLink
                to={"/messages"}
                className={`w-fit flex justify-start items-center gap-5 py-[.64rem] pl-3 pr-7 transition-all rounded-full hover:bg-stone-200`}
                style={navLinkStyle}
              >
                <div>
                  {l.pathname === "/messages" ? (
                    <HiMail className="text-2xl" />
                  ) : (
                    <HiOutlineMail className="text-2xl" />
                  )}
                </div>
                <p>Messages</p>
              </NavLink>
              <NavLink
                to={"/lists"}
                className={`w-fit flex justify-start items-center gap-5 py-[.64rem] pl-3 pr-7 transition-all rounded-full hover:bg-stone-200`}
                style={navLinkStyle}
              >
                <div>
                  {l.pathname === "/lists" ? (
                    <RiFileListFill className="text-2xl" />
                  ) : (
                    <RiFileListLine className="text-2xl" />
                  )}
                </div>
                <p>List</p>
              </NavLink>
              <NavLink
                to={"/communities"}
                className={`w-fit flex justify-start items-center gap-5 py-[.64rem] pl-3 pr-7 transition-all rounded-full hover:bg-stone-200`}
                style={navLinkStyle}
              >
                <div>
                  {l.pathname === "/communities" ? (
                    <i className="bi bi-people-fill text-2xl"></i>
                  ) : (
                    <i className="bi bi-people  text-2xl"></i>
                  )}
                </div>
                <p>Communities</p>
              </NavLink>

              <NavLink
                to={"?tab=premium"}
                className={`w-fit flex justify-start items-center gap-5 py-[.64rem] pl-3 pr-7 transition-all rounded-full hover:bg-stone-200`}
              >
                <div>
                  <RiTwitterXLine className="text-2xl" />
                </div>
                <p>Premium</p>
              </NavLink>
              <NavLink
                to={"/profile"}
                className={`w-fit flex justify-start items-center gap-5 py-[.64rem] pl-3 pr-7 transition-all rounded-full hover:bg-stone-200`}
                style={navLinkStyle}
              >
                <div>
                  {l.pathname === "/profile" ? (
                    <i className="bi bi-person-fill text-2xl"></i>
                  ) : (
                    <i className="bi bi-person text-2xl"></i>
                  )}
                </div>
                <p>Profile</p>
              </NavLink>
              <div
                // to={"/more"}
                className={`w-fit flex justify-start items-center gap-5 py-[.64rem] pl-3 pr-7 transition-all rounded-full hover:bg-stone-200 cursor-pointer relative`}
                onClick={() => setMore(true)}
              >
                {!more || <More {...{ more, setMore }} />}

                <div>
                  <CgMoreO className="text-2xl" />
                </div>
                <p>More</p>
              </div>

              <NavLink
                to={"?tab=user-post"}
                className={`w-full py-[.64rem]`}
                style={navLinkStyle}
              >
                <button className="text-lg text-white font-bold text-center w-full mt-1 bg-sky-500 rounded-full py-[.7rem] shadow-lg">
                  Post
                </button>
              </NavLink>
            </ul>
          </div>
        </div>

        <div className="w-full pr-3">
          <div className="flex justify-between items-center my-3 py-3 rounded-full pl-3 mr-2 pr-2 hover:bg-gray-200 w-full">
            <div className="flex gap-3">
              <div className="h-10 w-10 rounded-full overflow-hidden">
                <img
                  src="/profile.jpg"
                  className="object-contain h-full w-full"
                  alt="X image"
                />
              </div>
              <div>
                <p className="text-sm font-semibold">Star Pranav</p>
                <p className="text-sm text-slate-600">@pranavshilavane</p>
              </div>
            </div>
            <div>
              <FiMoreHorizontal className="text-2xl mr-2" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
