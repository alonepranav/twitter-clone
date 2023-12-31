import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import CommonLayout from "./components/CommonLayout";
import Home from "./components/Home";
import Explore from "./components/Explore";
import Not_Found from "./components/404";
import InnerFirstLayout from "./components/InnerFirstLayout";
import Lists from "./components/Lists";
import Profile from "./components/Profile";
import Communities from "./components/Communities";
import Notifications from "./components/Notifications";
import NotificationsHome from "./components/NotificationsHome";
import NotificationsMentions from "./components/NotificationsMentions";
import NotificationsVerified from "./components/NotificationsVerified";
import InnerSecondLayout from "./components/InnerSecondLayout";
import Messages from "./components/Messages";
import Login from "./components/Login";
import Signup from "./components/Signup";
import { useEffect, useState } from "react";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1100);

    localStorage.clear();
  }, []);

  return (
    <>
      {loading ? (
        <>
          <div className="h-screen w-screen flex justify-center items-center fixed top-0 left-0">
            <img src="/x.png" className="h-16 w-16" />
          </div>
        </>
      ) : (
        <div className="min-h-screen w-screen px-[9.2rem]">
          <BrowserRouter>
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />

              <Route path="/" element={<CommonLayout />}>
                <Route element={<InnerFirstLayout />}>
                  <Route path="/" element={<Home />} />
                  <Route path="/explore" element={<Explore />} />
                  <Route path="/communities" element={<Communities />} />
                  <Route path="/notifications/*" element={<Notifications />}>
                    <Route index element={<NotificationsHome />} />
                    <Route
                      path="verified"
                      element={<NotificationsVerified />}
                    />
                    <Route
                      path="mentions"
                      element={<NotificationsMentions />}
                    />
                  </Route>
                  <Route path="/lists" element={<Lists />} />
                  <Route path="/profile" element={<Profile />} />
                  <Route path="*" element={<Not_Found />} />
                </Route>

                <Route element={<InnerSecondLayout />}>
                  <Route path="/messages" element={<Messages />} />
                </Route>
              </Route>
            </Routes>
          </BrowserRouter>
        </div>
      )}
    </>
  );
}

export default App;
