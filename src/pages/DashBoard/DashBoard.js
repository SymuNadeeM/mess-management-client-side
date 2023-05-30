import React from "react";
import AmountList from "../../componet/AmountList";
import BazarList from "../../componet/BazarList";
import MealList from "../../componet/MealList";
import OtherCostlist from "../../componet/OtherCostlist";
import Summary from "../../componet/Summary";

const DashBoard = () => {
  return (
    <>
      <h1 className=" text-[#40513B] text-2xl font-Robbi">Dashboard</h1>
      <Summary />
      <AmountList />
      <BazarList />
      <MealList />
      <OtherCostlist />
    </>
  );
};

export default DashBoard;
