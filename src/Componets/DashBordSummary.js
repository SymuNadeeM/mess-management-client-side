import React from "react";
import DashboardServices from "../services/DashboardServices";
import imgfle from "../../src/assets/img_mountains.jpg";
import useAsync from "../hook/useAsync";
import { Link } from "react-router-dom";

const DashBordSummary = () => {
  const { data, error, loading } = useAsync(DashboardServices.dashboard);
  console.log("data ===>", data);

  const totalMassBalance =
    data?.totalAmount - (data?.totalBazarCost + data?.totalOthersCost);

  const totalMealRate = data?.totalBazarCost / data?.totalMealCount;

  return (
    <div>
      {/* <div className="">
        <Link to="/login">Login 0</Link>
      </div> */}

      <div className="mt-5 grid  md:grid-cols-5    gap-5 ">
        <div className=" grid col-span-2 gap-5 md:gap-2">
          <div className=" w-full h-[205px]  ">
            <div className="  w-full h-[205px] flex items-center justify-center  relative  ">
              <img src={imgfle} className=" w-full h-[205px]   rounded-md" />
              <div className="p-3   absolute top-10 flex  gap-2 ">
                <div>
                  <p className=" font-Robbi text-sm text-white">
                    After Calculates All Costs And Deposits
                  </p>
                  <h3 className="  font-abc text-4xl text-white font-bold">
                    MESS BLANCE
                  </h3>
                </div>
                <div>
                  <h1 className="ml-8 mt-3 text-6xl font-jose text-[#fff]">
                    {totalMassBalance}
                    <strong className=" text-sm">Tk</strong>
                  </h1>
                </div>
              </div>
            </div>
          </div>
          <div className="p-5 border flex items-center justify-center bg-white shadow-md rounded-md gap-4  ">
            <div className=" bg-[#1B9C85] flex items-start rounded-full p-2">
              <i className="fa-regular fa-circle-check flex items-center justify-center text-white w-[32px] h-[32px]"></i>
            </div>

            <div>
              <p className=" font-Robbi text-xs text-gray-500">Right Now</p>
              <h3 className=" font-abc text-xl text-gray-800 font-bold">
                Total MealRate
              </h3>
            </div>

            <h1 className="ml-8 mt-3 text-3xl font-jose text-[#E55807]">
              {parseFloat(totalMealRate).toFixed(2)}
              <span className=" text-sm text-[#F79327]"> Tk</span>
            </h1>
          </div>
        </div>
        <div className=" grid col-span-3 ">
          <div className=" grid md:grid-cols-2 gap-4">
            <div className="p-5 border bg-white shadow-md rounded-md">
              <div className=" flex  items-center flex-col-2   gap-5">
                <div className=" bg-[#4942E4] flex items-start rounded-full p-2">
                  <i className="fa-solid fa-money-bill-transfer flex items-center justify-center text-white w-[32px] h-[32px]"></i>
                </div>
                <div className="">
                  <p className=" font-Robbi text-sm text-gray-500">Our Mess</p>
                  <h3 className=" font-abc text-xl text-gray-800 font-bold">
                    Total Deposite
                  </h3>
                </div>
              </div>
              <div className=" flex  items-center flex-col-2 gap-5">
                <div></div>
                <h1 className="ml-8 mt-3 text-3xl font-jose text-[#E55807]">
                  {data.totalAmount}
                  <span className=" text-sm text-[#F79327]"> Tk</span>
                </h1>
              </div>
              <div className=" flex items-end  justify-end">
                <Link to="/summary" className=" text-sm text-blue-600">
                  View More →
                </Link>
              </div>
            </div>
            <div className="p-5 border bg-white shadow-md rounded-md">
              <div className=" flex  items-center flex-col-2   gap-5">
                <div className=" bg-[#116D6E] flex items-start rounded-full p-2">
                  <i className="fa-solid fa-yin-yang flex items-center justify-center text-white w-[32px] h-[32px]"></i>
                </div>
                <div className="">
                  <p className=" font-Robbi text-sm text-gray-500">Till now</p>
                  <h3 className=" font-abc text-xl text-gray-800 font-bold">
                    Total Bazar Cost
                  </h3>
                </div>
              </div>
              <div className=" flex  items-center flex-col-2 gap-5">
                <div></div>
                <h1 className="ml-8 mt-3 text-3xl font-jose text-[#E55807]">
                  {data.totalBazarCost}
                  <span className=" text-sm text-[#F79327]"> Tk</span>
                </h1>
              </div>
              <div className=" flex items-end  justify-end">
                <Link to="/summary" className=" text-sm text-blue-600">
                  View More →
                </Link>
              </div>
            </div>
            <div className="p-5 border bg-white shadow-md rounded-md">
              <div className=" flex  items-center flex-col-2   gap-5">
                <div className=" bg-[#B799FF] flex items-start rounded-full p-2">
                  <i className="fa-brands fa-digital-ocean flex items-center justify-center text-white w-[32px] h-[32px]"></i>
                </div>
                <div className="">
                  <p className=" font-Robbi text-sm text-gray-500">Till now</p>
                  <h3 className=" font-abc text-xl text-gray-800 font-bold">
                    Total Meal
                  </h3>
                </div>
              </div>
              <div className=" flex  items-center flex-col-2 gap-5">
                <div></div>
                <h1 className="ml-8 mt-3 text-3xl font-jose text-[#E55807]">
                  {data.totalMealCount}
                  {/* <span className=" text-sm text-[#F79327]"> Tk</span> */}
                </h1>
              </div>
              <div className=" flex items-end  justify-end">
                <Link to="/summary" className=" text-sm text-blue-600">
                  View More →
                </Link>
              </div>
            </div>
            <div className="p-5 border bg-white shadow-md rounded-md">
              <div className=" flex  items-center flex-col-2   gap-5">
                <div className=" bg-[#E57C23] flex items-start rounded-full p-2">
                  <i className="fa-solid fa-money-bill-1-wave flex items-center justify-center text-white w-[32px] h-[32px]"></i>
                </div>
                <div className="">
                  <p className=" font-Robbi text-sm text-gray-500">
                    Out Of Food
                  </p>
                  <h3 className=" font-abc text-xl text-gray-800 font-bold">
                    Total Other Cost
                  </h3>
                </div>
              </div>
              <div className=" flex  items-center flex-col-2 gap-5">
                <div></div>
                <h1 className="ml-8 mt-3 text-3xl font-jose text-[#E55807]">
                  {data.totalOthersCost}
                  <span className=" text-sm text-[#F79327]"> Tk</span>
                </h1>
              </div>
              <div className=" flex items-end  justify-end">
                <Link to="/summary" className=" text-sm text-blue-600">
                  View More →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="mt-4  grid grid-cols-2 md:grid-cols-4  lg:grid-cols-5 gap-3">
        <div className=" bg-[#025464] rounded-md border flex flex-col justify-center items-center p-4">
          <i className="fa-solid fa-sack-dollar text-green2 text-xl"></i>
          <h3 className=" text-lg font-abc text-white">Mess Balance</h3>
          <h1 className=" text-xl font-Robbi text-white">
            {totalMassBalance}
            <span className=" text-sm text-yellow-300">Tk</span>
          </h1>
        </div>
        <div className=" bg-[#025464] rounded-md border flex flex-col justify-center items-center p-4">
          <i className="fa-solid fa-sack-dollar text-green2 text-xl"></i>
          <h3 className=" text-lg font-abc text-white">Total Meal Rate</h3>
          <h1 className=" text-xl font-Robbi text-white">
            {parseFloat(totalMealRate).toFixed(2)}
            <span className=" text-sm text-yellow-300">Tk</span>
          </h1>
        </div>

        <div className=" bg-[#9A208C] rounded-md border flex flex-col justify-center items-center p-4">
          <i className="fa-solid fa-money-bill-transfer text-green2"></i>
          <h3 className=" text-lg font-abc text-white">Total Deposite</h3>
          <h1 className=" text-xl font-Robbi text-white">
            {data.totalAmount}{" "}
            <span className=" text-sm text-yellow-300">Tk</span>
          </h1>
        </div>
        <div className=" bg-[#0E8388] rounded-md border flex flex-col justify-center items-center p-4">
          <i className="fa-solid fa-yin-yang text-green2 text-xl"></i>
          <h3 className=" text-lg font-abc text-white">Total Bazar Cost</h3>
          <h1 className=" text-xl font-Robbi text-white">
            {data.totalBazarCost}{" "}
            <span className=" text-sm text-yellow-300">Tk</span>
          </h1>
        </div>
        <div className=" bg-[#4F200D] rounded-md border flex flex-col justify-center items-center p-4">
          <i className="fa-slid fa-bowl-rice text-green2 text-xl"></i>
          <h3 className=" text-lg font-abc text-white">Total Meal</h3>
          <h1 className=" text-xl font-Robbi text-white">
            {data.totalMealCount}
          </h1>
        </div>
        <div className=" bg-[#263A29] rounded-md border flex flex-col justify-center items-center p-4">
          <i className="fa-solid fa-money-bill-1-wave text-green2 text-xl"></i>
          <h3 className=" text-lg font-abc text-white"> Total Other Cost</h3>
          <h1 className=" text-xl font-Robbi text-white">
            {data.totalOthersCost}
            <span className=" text-sm text-yellow-300">Tk</span>
          </h1>
        </div>
      </div> */}
    </div>
  );
};

export default DashBordSummary;
