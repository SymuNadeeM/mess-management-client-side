import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import user from "../Images/formal2.png";

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
  return (
    <>
      <div className="hidden md:flex  justify-between items-center ">
        <div className="">
          <Link
            to="/"
            className="ml-6 flex items-center gap-1  font-archivo2 text-lg font-bold "
          >
            <i className="fa-solid fa-plate-wheat text-2xl  text-[#E55807]"></i>
            <h3 className="text-[#025464] dark:text-white"> SUN HOSTEL</h3>
          </Link>
        </div>

        <div className=" flex items-center justify-center gap-4">
          <div
            className="w-[35px] h-[35px] bg-[#fff] text-darkHover border flex items-center justify-center rounded-full"
            onClick={handleSwitch}
          >
            <i class="fa-regular fa-moon  text-balck text-lg dark:text-[#FFAE42]"></i>
          </div>
          <div>
            <img
              src={user}
              className="w-[35px] h-[35px] border rounded-full"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default LargeNavbar;
