import React, { useState } from "react";
import Signup from "./Signup";
import { createPortal } from "react-dom";
import { useNavigate } from "react-router-dom";
import useTitle from "../hooks/UseTitleHook";

export default function Login() {
  useTitle("Login");

  const [signup, setSignup] = useState(false);

  const navigate = useNavigate();

  const event = () => {
    localStorage.setItem("twitter", JSON.stringify(true));
    navigate("/");
  };

  return (
    <>
      {!signup ||
        createPortal(
          <div className="h-screen flex justify-center items-center w-screen fixed top-0 left-0 bg-[rgba(0,0,0,0.4)]">
            <div>
              <Signup {...{ signup, setSignup }} />
            </div>
          </div>,

          document.getElementById("signup")
        )}

      <div className="flex items-center justify-between gap-40 h-screen w-full">
        <div className="flex justify-center items-center h-full">
          <img src="x.png" className="h-80 w-80 ml-32" alt="" />
        </div>

        <div className="h-full pl-26">
          <br />
          <br />
          <br />
          <br />
          <h4 className="text-7xl font-bold">Happening now</h4>
          <br />
          <br />
          <p className="text-3xl font-bold">Join today.</p>
          <br />
          <button
            className="border border-slate-300 p-2  w-80 text-sm font-semibold rounded-full flex justify-center items-center gap-3"
            onClick={event}
          >
            <img src="/google.webp" className="h-5 w-5" alt="" />
            <p>Sign up with Google</p>
          </button>

          <button
            className="border mt-3 border-slate-300 p-2 w-80 text-sm font-semibold rounded-full flex justify-center items-center gap-3"
            onClick={event}
          >
            <img src="/apple.png" className="h-5 w-5" alt="" />
            <p>Sign up with Apple</p>
          </button>

          <div className="flex gap-2 items-center mt-2">
            <div className="border h-0 border-slate-200 w-36"></div>
            or
            <div className="border h-0 border-slate-200 w-36"></div>
          </div>

          <button
            onClick={event}
            className="mt-3 bg-sky-500 p-2.5 w-80 text-white font-bold text-sm rounded-full flex justify-center items-center gap-3"
          >
            Create account
          </button>

          <p className="text-xs mt-1">
            By signing up, you agree to the
            <span className="text-sky-500">Terms of Service</span>
            and
            <span className="text-sky-500">
              Privacy
              <br />
              Policy,
            </span>
            including
            <span className="text-sky-500">Cookie use.</span>
            Use.
          </p>
          <br />
          <br />
          <br />
          <p className="font-semibold text-xl">Already have an account?</p>
          <button
            onClick={() => setSignup(true)}
            className="mt-3 border border-sky-500 p-2.5 w-80 text-sky-500 font-semibold text-sm rounded-full flex justify-center items-center gap-3"
          >
            Sign in
          </button>
        </div>
      </div>
    </>
  );
}
