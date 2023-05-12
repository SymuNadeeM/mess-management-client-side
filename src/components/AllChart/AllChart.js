import React, { useState } from "react";
import AmountChart from "./AmountChart";
import BazarListChart from "./BazarListChart";
import DueTab from "./DueTab";
import MealChart from "./MealChart";
import OthercostChart from "./OthercostChart";

const AllChart = () => {
  const [tabs, setTabs] = useState({ name: "mealchart" });

  return (
    <>
      <div className="px-[40px] my-[50px]">
        <div className="my-[40px] flex flex-col items-center justify-center">
          <h2 className=" text-xl md:text-3xl  font-Robbi font-bold text-gray-800">
            {" "}
            All Chart{" "}
          </h2>

          <div className="flex  items-center">
            <div className=" bg-green2 w-[95px] md:w-[185px] h-[1px] p-[1px]"></div>
            <div className="bg-green2  rounded-full w-[6px] h-[6px] p-[2px]"></div>
          </div>
        </div>

        <div className="border p-[30px] rounded-2xl">
          <div className=" mb-4">
            <ul className="flex flex-wrap mb-[10px] text-sm font-medium text-center gap-3 md:gap-0">
              <li
                className="mr-4"
                onClick={() => setTabs({ name: "mealchart" })}
              >
                <button
                  className={
                    tabs.name === "mealchart"
                      ? "inline-block text-base md:text-xl border rounded-full px-3 py-2  shadow-lg opacity-100 hover:text-gray-700 text-[#3BB77E]  border-[#75eeb6] duration-200 "
                      : "inline-block border text-lg font-abc border-pink-700 rounded-full px-3 py-2 text-gray-700 hover:text-[#3BB77E] duration-200"
                  }
                >
                  <i class="fa-solid fa-drumstick-bite  p-1 text-food rounded-full mr-1"></i>
                  Meal Chart
                </button>
              </li>
              <li
                className="mr-4"
                onClick={() => setTabs({ name: "bazarlistChart" })}
              >
                <button
                  className={
                    tabs.name === "bazarlistChart"
                      ? "inline-block text-base md:text-xl border rounded-full px-3 py-2  shadow-lg opacity-100 hover:text-gray-700 text-[#3BB77E]  border-[#75eeb6] duration-200 "
                      : "inline-block border text-lg font-abc border-pink-700 rounded-full px-3 py-2 text-gray-700 hover:text-[#3BB77E] duration-200"
                  }
                >
                  <i class="fa-solid fa-radiation  p-1 text-food rounded-full mr-1 "></i>
                  Bazar List
                </button>
              </li>
              <li
                className="mr-4"
                onClick={() => setTabs({ name: "othercostchart" })}
              >
                <button
                  className={
                    tabs.name === "othercostchart"
                      ? "inline-block text-base md:text-xl border rounded-full px-3 py-2  shadow-lg opacity-100 hover:text-gray-700 text-[#3BB77E]  border-[#75eeb6] duration-200 "
                      : "inline-block border text-lg font-abc border-pink-700 rounded-full px-3 py-2 text-gray-700 hover:text-[#3BB77E] duration-200"
                  }
                >
                  <i class="fa-solid fa-circle-dollar-to-slot  p-1 text-food rounded-full mr-1"></i>
                  Other Cost
                </button>
              </li>
              <li className="mr-2" onClick={() => setTabs({ name: "amount" })}>
                <button
                  className={
                    tabs.name === "amount"
                      ? "inline-block text-base md:text-xl border rounded-full px-3 py-2  shadow-lg opacity-100 hover:text-gray-700 text-[#3BB77E]  border-[#75eeb6] duration-200 "
                      : "inline-block border text-lg font-abc border-pink-700 rounded-full px-3 py-2 text-gray-700 hover:text-[#3BB77E] duration-200"
                  }
                >
                  <i class="fa-solid fa-sack-dollar   p-1 text-food rounded-full mr-1"></i>
                  Amount
                </button>
              </li>
              <li className="mr-2" onClick={() => setTabs({ name: "dueTab" })}>
                <button
                  className={
                    tabs.name === "dueTab"
                      ? "inline-block text-base md:text-xl border rounded-full px-3 py-2  shadow-lg opacity-100 hover:text-gray-700 text-[#3BB77E]  border-[#75eeb6] duration-200 "
                      : "inline-block border text-lg font-abc border-pink-700 rounded-full px-3 py-2 text-gray-700 hover:text-[#3BB77E] duration-200"
                  }
                >
                  <i class="fa-regular fa-credit-card p-1 text-food rounded-full mr-1"></i>
                  DueTab
                </button>
              </li>
            </ul>
          </div>

          {/* Discription */}
          <div>
            {tabs.name === "mealchart" && <MealChart />}
            {tabs.name === "bazarlistChart" && <BazarListChart />}
            {tabs.name === "othercostchart" && <OthercostChart />}
            {tabs.name === "amount" && <AmountChart />}
            {tabs.name === "dueTab" && <DueTab />}
          </div>
        </div>
      </div>
    </>
  );
};

export default AllChart;
