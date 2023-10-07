import React from "react";

export default function NotificationsVerified() {
  return (
    <>
      <div>
        <div>
          <img src="/verified.png" alt="" />
        </div>
        <div className="px-32">
          <h6 className="text-3xl font-bold">
            Nothing to see here —
            <br />
            yet
          </h6>
          <p className="mt-2 text-slate-500 leading-[1.3rem]">
            Likes, mentions, reposts, and a whole lot more — when it comes from
            a verified account, you’ll find it here. {" "}
            <span className="font-semibold underline underline-offset-2 text-black">
              Learn more
            </span>
          </p>
        </div>
      </div>
    </>
  );
}
