import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import user from "../Images/formal2.png";
import Cookies from "js-cookie";
import { notifySuccess } from "./ToastifyMessage";

const LargeNavbar = () => {
  const [theme, setTheme] = useState("");

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const handleLogout = () => {
    Cookies.remove("userInfo");
    localStorage.removeItem("userInfo");
    notifySuccess("Logout Successfully");
    return window.location.assign("/login");
  };

  return (
    <>
      <div className="hidden md:flex  justify-between items-center ">
        <div className="">
          <Link to="/" className="ml-6 flex items-center gap-1  font-archivo2 text-lg font-bold ">
            <i className="fa-solid fa-plate-wheat text-2xl  text-[#E55807]"></i>
            <h3 className="text-[#025464] dark:text-white"> SUN HOSTEL</h3>
          </Link>
        </div>

        <div className=" flex items-center justify-center gap-4">
          <div className="w-[35px] h-[35px] bg-[#fff] text-darkHover border flex items-center justify-center rounded-full" onClick={handleSwitch}>
            <i class="fa-regular fa-moon  text-balck text-lg dark:text-[#FFAE42]"></i>
          </div>
          <div>
            <img src={user} className="w-[35px] h-[35px] border rounded-full" alt="" />
          </div>{" "}
          <div>
            <button
              className="align-bottom inline-flex items-center justify-center cursor-pointer leading-5 transition-colors duration-200 font-medium focus:outline-none px-4 py-2 rounded-lg text-sm  hover:text-black  bg-btnbg hover:bg-red-500 text-white focus:shadow-outline-purple"
              type="button"
              onClick={handleLogout}
            >
              Logout
              <span className="ml-2" aria-hidden="true">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-4 h-5 inline-block"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9"
                  />
                </svg>
              </span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default LargeNavbar;
