import React, { useState } from "react";
import { createPortal } from "react-dom";
import { LuSettings } from "react-icons/lu";
import { TbMessagePlus } from "react-icons/tb";
import MessageBox from "./MessageBox";
import useTitle from "../hooks/UseTitleHook";

export default function Messages() {
  const [message, setMessage] = useState(false);

  useTitle("Messages");

  return (
    <>
      {!message ||
        createPortal(
          <MessageBox {...{ message, setMessage }} />,
          document.getElementById("message")
        )}

      <div className="flex">
        <div className="w-[24.4rem] border-r">
          <div className="bg-[rgba(255,255,255,.3)] backdrop-blur-xl flex justify-between">
            <div className="p-4  flex gap-8 items-center sticky top-0">
              <p className="text-xl tracking-wide font-bold">Messages</p>
            </div>
            <div className="flex gap-4 items-center pr-4">
              <LuSettings className="mt-1 text-xl" />
              <TbMessagePlus className="mt-1 text-xl" />
            </div>
          </div>

          <div className="">
            <div className="px-10 mt-0">
              <br />
              <h6 className="text-3xl font-bold">
                Welcome to your
                <br />
                inbox!
              </h6>
              <p className="mt-2 text-sm  text-slate-500 leading-[1.3rem]">
                Drop a line, share posts and more with private conversations
                between you and others on X.
              </p>
              <br />
              <button
                className="bg-blue-500 text-white font-bold py-3.5 px-10 rounded-full"
                onClick={() => setMessage(true)}
              >
                Write a message
              </button>
            </div>
          </div>
        </div>
        <div className="w-[35rem]">
          <div className="flex justify-center items-center h-screen">
            <div className="px-20 mt-0">
              <br />
              <h6 className="text-3xl font-bold">Select a message</h6>
              <p className="mt-2 text-sm  text-slate-500 leading-[1.3rem]">
                Choose from your existing conversations, start a
                <br />
                new one, or just keep swimming.
              </p>
              <br />
              <button
                className="bg-sky-500 text-white font-bold py-3.5 px-10 rounded-full"
                onClick={() => setMessage(true)}
              >
                New message
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
