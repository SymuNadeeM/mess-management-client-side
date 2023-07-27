import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import user from "../Images/formal2.png";

const SmallNavbar = () => {
  const [theme, setTheme] = useState("");
  const [nav, setNav] = useState(true);

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

  const handleClick = () => {
    setNav(!nav);
  };
  return (
    <>
      <div className="flex justify-between items-center md:hidden ">
        <div onClick={handleClick} className="block ">
          <i className="fa-solid fa-bars  text-2xl "></i>
        </div>
        <div className="">
          <Link
            to="/home"
            className="ml-6 flex items-center gap-1  font-archivo2 text-lg font-bold "
          >
            <i className="fa-solid fa-plate-wheat text-2xl  text-[#E55807]"></i>
            <h3 className="text-[#025464] dark:text-white"> SUN HOSTEL</h3>
          </Link>
        </div>
        <div className=" flex items-center justify-between gap-3">
          <div
            className="w-[35px] h-[35px] bg-[#fff] text-darkHover flex items-center border justify-center rounded-full"
            onClick={handleSwitch}
          >
            <i class="fa-regular fa-moon  text-balck text-lg dark:text-[#FFAE42]"></i>
          </div>
          <div>
            <img
              src={user}
              className="w-[35px] h-[35px] rounded-full border"
              alt=""
            />
          </div>
        </div>
        {/* bar description */}

        <div
          className={
            !nav
              ? "fixed left-0 top-0 w-[55%] h-full  ease-in-out duration-500 bg-[#0C134F] md:hidden"
              : "fixed left-[-100%] duration-200"
          }
        >
          <div className="p-5 ">
            <div className="flex items-center justify-between">
              <div className=" flex items-center gap-[4px] md:gap-2">
                <i className="fa-solid fa-plate-wheat text-2xl  text-[#E55807]"></i>
                <h3 className="text-[#025464] font-archivo2 text-lg font-bold">
                  SUN HOSTEL
                </h3>
              </div>
              <div onClick={handleClick}>
                <i className="fa-regular fa-circle-xmark text-green hover:text-red-600 duration-150 text-xl"></i>
              </div>
            </div>
            <hr className="mt-2" />

            <div className=" mt-8 space-y-4">
              <div className=" flex  items-center  text-bold font-semibold  duration-150">
                <i className="fa-solid fa-house-chimney text-gray-700 "></i>
                <Link
                  className="px-3 text-bold text-white hover:text-gray-400 duration-150 "
                  to="dashboard"
                >
                  Dashboard
                </Link>
              </div>
              <div
                className="flex   items-center text-bold font-semibold 
               duration-150"
              >
                <i className="fa-solid fa-user-plus text-gray-700"></i>
                <Link
                  to="members-list"
                  className="px-3  text-bold text-white hover:text-gray-400 duration-150"
                >
                  Members List
                </Link>
              </div>
              <div
                className="flex  items-center text-bold font-semibold 
               duration-150"
              >
                <i className="fa-solid fa-sack-dollar text-gray-700"></i>
                <Link
                  className="px-3 text-bold text-white hover:text-gray-400 duration-150 "
                  to="money-list"
                >
                  Amount
                </Link>
              </div>
              <div
                className="flex  items-center text-bold font-semibold 
               duration-150"
              >
                <i className="fa-solid fa-fish text-gray-700"></i>
                <Link
                  className="px-3 text-white hover:text-gray-400 duration-150  text-bold "
                  to="meal-list"
                >
                  Meal
                </Link>
              </div>
              <div
                className="flex  items-center text-bold font-semibold 
               duration-150"
              >
                <i className="fa-regular fa-calendar text-gray-700"></i>
                <Link
                  className="px-3 text-white hover:text-gray-400 duration-150  text-bold"
                  to="bazar-day-list"
                >
                  Add Bazar Day
                </Link>
              </div>
              <div
                className="flex  items-center text-bold font-semibold 
               duration-150"
              >
                <i className="fa-solid fa-clipboard-list text-gray-700"></i>

                <Link
                  className="px-3 text-white hover:text-gray-400 duration-150  text-bold"
                  to="meal-cost-list"
                >
                  Bazar List
                </Link>
              </div>
              <div
                className="flex  items-center text-bold font-semibold 
               duration-150"
              >
                <i className="fa-solid fa-file-invoice-dollar text-[#ECF8F9]"></i>
                <Link
                  className="px-3 text-white hover:text-gray-400 duration-150  text-bold"
                  to="other-cost-list"
                >
                  Other Cost
                </Link>
              </div>
              <div
                className="flex  items-center text-bold font-semibold 
               duration-150"
              >
                <i className="fa-solid fa-square-poll-vertical text-gray-700"></i>

                <Link
                  className="px-3 text-white hover:text-gray-400 duration-150  text-bold"
                  to="summary"
                >
                  Summary
                </Link>
              </div>

              <div className="py-6 ">
                <button
                  className="align-bottom inline-flex items-center justify-center cursor-pointer leading-5 transition-colors duration-200 font-medium focus:outline-none px-4 py-2 rounded-lg text-sm  hover:text-black  bg-btnbg hover:bg-green text-white focus:shadow-outline-purple"
                  type="button"
                >
                  {" "}
                  <Link to="/add-member">
                    {" "}
                    Create account
                    <span className="ml-2" aria-hidden="true">
                      +
                    </span>
                  </Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SmallNavbar;
