import React from "react";

const Summary = () => {
  return (
    <div className="mt-4  grid grid-cols-2 md:grid-cols-4  lg:grid-cols-5 gap-3">
      <div className=" bg-[#025464] rounded-md border flex flex-col justify-center items-center p-4">
        <i class="fa-solid fa-sack-dollar text-green2 text-xl"></i>
        <h3 className=" text-lg font-abc text-white">Mess Balance</h3>
        <h1 className=" text-xl font-Robbi text-white">
          1500 <span className=" text-sm text-yellow-300">Tk</span>
        </h1>
      </div>

      <div className=" bg-[#9A208C] rounded-md border flex flex-col justify-center items-center p-4">
        <i class="fa-solid fa-money-bill-transfer text-green2"></i>
        <h3 className=" text-lg font-abc text-white">Total Deposite</h3>
        <h1 className=" text-xl font-Robbi text-white">
          3500 <span className=" text-sm text-yellow-300">Tk</span>
        </h1>
      </div>
      <div className=" bg-[#0E8388] rounded-md border flex flex-col justify-center items-center p-4">
        <i class="fa-solid fa-yin-yang text-green2 text-xl"></i>
        <h3 className=" text-lg font-abc text-white">Total Meal Cost</h3>
        <h1 className=" text-xl font-Robbi text-white">
          1500 <span className=" text-sm text-yellow-300">Tk</span>
        </h1>
      </div>
      <div className=" bg-[#4F200D] rounded-md border flex flex-col justify-center items-center p-4">
        <i class="fa-solid fa-bowl-rice text-green2 text-xl"></i>
        <h3 className=" text-lg font-abc text-white">Total Meal</h3>
        <h1 className=" text-xl font-Robbi text-white">150</h1>
      </div>
      <div className=" bg-[#263A29] rounded-md border flex flex-col justify-center items-center p-4">
        <i class="fa-solid fa-money-bill-1-wave text-green2 text-xl"></i>
        <h3 className=" text-lg font-abc text-white"> Total Other Cost</h3>
        <h1 className=" text-xl font-Robbi text-white">
          1500 <span className=" text-sm text-yellow-300">Tk</span>
        </h1>
      </div>
    </div>
  );
};

export default Summary;
