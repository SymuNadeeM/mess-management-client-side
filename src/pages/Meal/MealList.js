import React from "react";
import { Link } from "react-router-dom";
import useAsync from "../../hook/useAsync";
import useDailyMeal from "../../hook/useDailyMeal";
import DailyMealCountServices from "../../services/DailyMealCountServices";

const MealList = () => {
  const { data, error, loading } = useAsync(
    DailyMealCountServices.getAllDailyMealCount
  );

  const { handleDelete } = useDailyMeal();

  return (
    <>
      <div className="mt-[30px]   px-[30px] my-[30px] mx-[20px] md:p-[10px]">
        <div className="mb-4 flex items-center justify-between">
          <div className="flex items-center my-4 gap-2">
            <i className="fa-solid fa-pepper-hot text-2xl text-green "></i>
            <h1 className=" text-[#40513B] dark:text-dark_blue2 text-2xl font-abc">
              All Member Meal List
            </h1>
          </div>
          <div className="flex items-center gap-2  text-white font-abc text-sm  bg-green2 px-3 py-2 rounded hover:bg-btnbg  duration-200 ">
            <i className="fa-solid fa-plus"></i>
            <Link to="/add-meal">Add Meal</Link>
          </div>
        </div>
        <table className="min-w-full border-collapse block md:table">
          <thead className="block md:table-header-group">
            <tr className=" bg-[#faf7f7] dark:bg-darkHead font-archivo  text-text2 dark:text-white    block md:table-row absolute -top-full md:top-auto -left-full md:left-auto shadow-md text-sm  md:relative ">
              <th className=" p-2 text-left block md:table-cell">Name</th>

              <th className=" p-2 text-left block md:table-cell">Meal</th>
            </tr>
          </thead>
          <tbody className=" mt-2 block md:table-row-group shadow-md">
            {loading
              ? "loading.."
              : data?.data?.map((items) => (
                  <tr
                    className=" bg-white dark:bg-darkHover dark:text-white font-archivo border border-spacing-2  border-btnbg md:border-none block md:table-row"
                    key={items._id}
                  >
                    <td className=" flex  py-2 px-4 md:px-2 text-left  md:table-cell">
                      <span className="inline-block w-1/3 md:hidden  font-bold">
                        Name:
                      </span>
                      <td>{items?.member?.name} </td>
                    </td>
                    <td className=" flex  py-2 px-4 md:px-2 text-left  md:table-cell">
                      <span className="inline-block w-1/3 md:hidden  font-bold">
                        Meal:
                      </span>
                      <td>{items.mealCount}</td>
                    </td>
                  </tr>
                ))}
            <tr className=" bg-[#FFECEC] dark:bg-darkBottom dark:text-white  font-archivo">
              <td className="md:p-2">Total Meal:</td>
              <td className="md:p-2">{data.mealCount}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default MealList;
