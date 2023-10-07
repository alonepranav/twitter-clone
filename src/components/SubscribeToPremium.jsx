import React from "react";
import { useSearchParams } from "react-router-dom";

export default function SubscribeToPremium() {
  const [tab, setTab] = useSearchParams();
  return (
    <>
      <div className="w-[21.5rem] bg-stone-100 mx-5  mt-3 p-4 rounded-2xl">
        <p className="text-xl font-bold">Subscribe to Premium</p>
        <p className="font-semibold mt-2">
          Subscribe to unlock new features and if eligible, receive a share of
          ads revenue.
        </p>
        <br />
        <button
          className="bg-black text-white text-sm  font-bold rounded-full px-4 py-2"
          onClick={() => setTab({ tab: "premium" })}
        >
          Subscribe
        </button>
      </div>
    </>
  );
}
