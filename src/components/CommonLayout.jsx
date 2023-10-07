import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

export default function CommonLayout() {
  return (
    <div className="w-full">
      <div>
        <Sidebar />
      </div>
      <div className="min-h-screen">
        <Outlet />
      </div>
    </div>
  );
}
