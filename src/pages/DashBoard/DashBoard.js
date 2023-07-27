import React from "react";

import DashBordSummary from "../../Componets/DashBordSummary";

const DashBoard = () => {
  return (
    <>
      <h1 className="my-[40px] ml-[20px] text-[#40513B] dark:text-dark_blue1 text-2xl font-Robbi">
        Dashboard
      </h1>
      <DashBordSummary />
    </>
  );
};

export default DashBoard;
