import React from "react";

export default function Not_Found() {
  return (
    <>
      <div className="h-screen w-full">
        <div className="text-center pt-24">
          <p className="text-slate-500">
            Hmm...this page doesn't exist. Try searching for something else.
          </p>
          <br />
          <button className="mt-1 p-1.5 px-4 bg-sky-500 text-white rounded-full font-semibold">
            Search
          </button>
        </div>
      </div>
    </>
  );
}
