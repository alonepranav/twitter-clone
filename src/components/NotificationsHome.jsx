import React from "react";

export default function NotificationsHome() {
  const LoginComponent = () => {
    return (
      <>
        <div className="flex gap-3 hover:bg-slate-100 items-center p-3 text-base">
          <div className="h-11 w-11 rounded-full mt-3">
            <img src="x.png" className="" alt="" />
          </div>
          <p className="pr-9">
            There was a login to your account @PranavShilavane from a new device
            on Oct 03, 2023. Review it now.
          </p>
        </div>
      </>
    );
  };

  return (
    <div className="w-full">
      <LoginComponent />
      <LoginComponent />
      <LoginComponent />
      <LoginComponent />
      <LoginComponent />
      <LoginComponent />
      <LoginComponent />
      <LoginComponent />
      <LoginComponent />
      <LoginComponent />
    </div>
  );
}
