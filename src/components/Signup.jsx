import React, { useEffect, useState } from "react";
import { CgClose } from "react-icons/cg";
import { useNavigate } from "react-router-dom";

export default function Signup({ signup, setSignup }) {
  useEffect(() => {
    const x = (e) => {
      if (e.key === "Escape") {
        setSignup(false);
        window.removeEventListener("keydown", x);
      }
    };

    if (signup) {
      window.addEventListener("keydown", x);
    } else {
      window.removeEventListener("keydown", x);
    }
  }, [signup]);

  const [back, setBack] = useState(false);
  const navigate = useNavigate();

  const event = () => {
    localStorage.setItem("twitter", JSON.stringify(true));
    navigate("/");
  };

  return (
    <>
      <div className="h-screen w-screen z-50 absolute top-0 left-0 flex justify-center items-center bg-[rgba(0,0,0,0.4)]">
        <div className="bg-white py-3 rounded-2xl w-[600px] h-[650px]">
          <div className="flex justify-start items-center px-4">
            <div className="flex gap-10 items-center">
              <p
                className="p-2  hover:bg-slate-200 rounded-full"
                onClick={() => setSignup(false)}
              >
                <CgClose className="text-xl" />
              </p>
            </div>
            <div className="w-full flex justify-center items-center">
              <img src="/x.png" className="h-7 w-7" alt="" />
            </div>
          </div>
          {back ? (
            <>
              <div className="flex justify-center">
                <div>
                  <br />
                  <p className="text-3xl font-bold">Join today.</p>

                  <button
                    onClick={event}
                    className="border border-slate-300 p-2 mt-8 w-80 text-sm font-semibold rounded-full flex justify-center items-center gap-3"
                  >
                    <img src="/google.webp" className="h-5 w-5" alt="" />
                    <p>Sign up with Google</p>
                  </button>

                  <button
                    onClick={event}
                    className="border mt-6 border-slate-300 p-2 w-80 text-sm font-semibold rounded-full flex justify-center items-center gap-3"
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
                    className="mt-3 bg-black p-2 w-80 text-white font-bold text-sm rounded-full flex justify-center items-center gap-3"
                  >
                    Create account
                  </button>

                  <p className="text-xs mt-2">
                    By signing up, you agree to the
                    <span className="text-sky-500">
                      {" "}
                      Terms of Service
                    </span> and{" "}
                    <span className="text-sky-500">
                      Privacy
                      <br />
                      Policy,
                    </span>{" "}
                    including <span className="text-sky-500">Cookie use.</span>
                  </p>
                  <br />
                  <br />
                  <p className="text-slate-500">
                    Have an account already?
                    <span
                      className="text-sky-500 cursor-pointer underline"
                      onClick={() => setSignup(false)}
                    >
                      {" "}
                      Log in
                    </span>
                  </p>
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="flex justify-center w-full">
                <div>
                  <br />
                  <h5 className="text-3xl font-bold">Sign in to X</h5>
                  <br />
                  <button
                    onClick={event}
                    className="border mt-3 border-slate-300 p-2  w-80 text-sm font-semibold rounded-full flex justify-center items-center gap-3"
                  >
                    <img src="/google.webp" className="h-5 w-5" alt="" />
                    <p>Sign up with Google</p>
                  </button>

                  <button
                    onClick={event}
                    className="border mt-6 border-slate-300 p-2 w-80 text-sm font-semibold rounded-full flex justify-center items-center gap-3"
                  >
                    <img src="/apple.png" className="h-5 w-5" alt="" />
                    <p>Sign up with Apple</p>
                  </button>

                  <div className="flex gap-2 items-center mt-2">
                    <div className="border h-0 border-slate-200 w-36"></div>
                    or
                    <div className="border h-0 border-slate-200 w-36"></div>
                  </div>
                  <input
                    type="text"
                    className="py-4 border-2 border-slate-200 w-full mt-2 px-3 placeholder:text-slate-500 placeholder:text-lg"
                    placeholder="Phone, email or username"
                  />

                  <button
                    onClick={event}
                    className="mt-7 bg-black p-2 w-80 text-white font-bold text-sm rounded-full flex justify-center items-center gap-3"
                  >
                    Next
                  </button>

                  <button
                    onClick={event}
                    className="mt-7 hover:bg-slate-300 p-2 w-80 border border-slate-300 text-black font-bold text-sm rounded-full flex justify-center items-center gap-3"
                  >
                    Forgot password?
                  </button>

                  <br />
                  <br />
                  <p className="text-slate-600 text-center w-full">
                    Don't have an account?
                    <span
                      className="text-sky-500 cursor-pointer"
                      onClick={() => setBack(true)}
                    >
                      {" "}
                      Sign up
                    </span>
                  </p>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}
