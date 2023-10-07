import React from "react";

export default function InnerLeftSide({ children }) {
  return (
    <>
      <div className="w-[37.3rem] min-h-screen g-cyan-200 border-r">
        {children}
      </div>
    </>
  );
}
