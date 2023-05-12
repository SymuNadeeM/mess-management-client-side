import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className=" px-[20px] mx-auto bg-[#393646]">
        <div className=" grid grid-cols-2 md:grid-cols-3 gap-4 text-white p-[20px] md:p-[50px] ">
          <div className=" space-y-5">
            <div className=" space-y-2">
              <h1 className=" font-jose  text-3xl font-bold">Sun Hostel</h1>
              <div className=" bg-white w-[95px] md:w-[185px] h-[1px] p-[1px]"></div>
            </div>

            <p className=" font-abc text-sm">44/22 North Dhanmondi, Dhaka</p>
          </div>
          <div className="space-y-3">
            <h4 className=" font-jose  text-xl ">Stairs</h4>
            <div className="flex flex-col gap-2 font-Robbi text-sm">
              <Link to="#" className=" hover:text-[#B0A4A4] duration-200">
                Schedule
              </Link>
              <Link to="#" className=" hover:text-[#B0A4A4] duration-200">
                Chart
              </Link>
              <Link to="#" className=" hover:text-[#B0A4A4] duration-200">
                Member Information
              </Link>
              <Link to="#" className=" hover:text-[#B0A4A4] duration-200">
                About Us
              </Link>
              <Link to="#" className=" hover:text-[#B0A4A4] duration-200">
                Contact
              </Link>
            </div>
          </div>

          <div className=" space-y-12">
            <div>
              <input
                type="text"
                className=" text-black p-[2px] px-4 w-full  md:w-3/4 outline-none"
                placeholder="Email Address"
              />
              <div>
                <button className=" bg-green2 px-4 md:px-6 w-2/4 md:w-3/12 mt-3 py-[2px] font-abc">
                  Send
                </button>
              </div>
            </div>

            <div className=" flex  gap-2 ">
              <div className="w-[40px] h-[40px] bg-[#EEEEEE] dark:bg-black3 flex items-center justify-center rounded-md text-[#538dd7] hover:dark:bg-btnbg hover:bg-btnbg duration-200 hover:text-[#fff]">
                <Link to="#">
                  <i class="fa-brands fa-facebook-f"></i>
                </Link>
              </div>
              <div className="w-[40px] h-[40px] bg-[#EEEEEE] flex items-center justify-center rounded-md text-[#00acee] dark:bg-black3 hover:dark:bg-btnbg hover:bg-btnbg duration-200 hover:text-[#fff]">
                <Link to="#">
                  <i class="fa-brands fa-twitter"></i>
                </Link>
              </div>
              <div className="w-[40px] h-[40px] bg-[#EEEEEE] dark:bg-black3 hover:dark:bg-btnbg flex items-center justify-center rounded-md text-[#C13584] hover:bg-btnbg duration-200 hover:text-[#fff]">
                <Link to="#">
                  <i class="fa-brands fa-instagram"></i>
                </Link>
              </div>
              <div className="w-[40px] h-[40px] bg-[#EEEEEE] dark:bg-black3 hover:dark:bg-btnbg flex items-center justify-center rounded-md text-[#0072b1] hover:bg-btnbg duration-200 hover:text-[#fff]">
                <Link to="#">
                  <i class="fa-brands fa-linkedin-in"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
