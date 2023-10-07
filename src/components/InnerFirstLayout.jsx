import React from "react";
import { Outlet } from "react-router-dom";

export default function InnerFirstLayout() {
  return (
    <>
      <div className="pl-64 min-h-screen">
        <Outlet />
      </div>
    </>
  );
}
