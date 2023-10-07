import React from "react";
import { Outlet } from "react-router-dom";

export default function InnerSecondLayout() {
  return (
    <>
      <div className="ml-[16rem] border-r">
        <Outlet />
      </div>
    </>
  );
}
