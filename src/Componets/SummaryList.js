import React from "react";
import useAsync from "../hook/useAsync";
import DashboardServices from "../services/DashboardServices";

const SummaryList = () => {
  const { data, error, loading } = useAsync(DashboardServices.summary);
  console.log("data ===>", data);

  const paidAmountWithMealRate = data?.paidAmount?.map((item) => {
    return {
      ...item,
      oneMealCost: data?.oneMealCost,
      extraCostPerPerson: data?.extraCostPerPerson,
    };
  });

  const mergedArray = [paidAmountWithMealRate, data?.dailyMealCount]?.reduce(
    (result, array) => {
      array?.forEach((obj) => {
        const existingObj = result.find(
          (item) => item?.member?._id === obj._id
        );
        if (existingObj) {
          Object.assign(existingObj, obj);
        } else {
          result.push(obj);
        }
      });
      return result;
    },
    []
  );

  console.log("mergedArray", mergedArray);

  return (
    <div className="mt-[30px]   px-[30px] my-[30px] mx-[20px] md:p-[10px]">
      <div className="mt-[50px] mb-2">
        <div className="flex items-center my-4 gap-2">
          <i className="fa-solid fa-sack-dollar text-green2 dark:text-white text-2xl"></i>
          <h1 className=" text-[#40513B] dark:text-dark_blue2 text-2xl font-abc">
            All Member summary List
          </h1>
        </div>
      </div>
      <div>
        <table className="min-w-full border-collapse block  md:table">
          <thead className="block md:table-header-group">
            <tr className="bg-[#faf7f7] dark:bg-darkHead font-archivo  text-text2 dark:text-white    block md:table-row absolute -top-full md:top-auto -left-full md:left-auto shadow-md text-sm  md:relative">
              <th className="pp-2 text-left block md:table-cell">Name</th>

              <th className="p-2 text-left block md:table-cell">Meal Rate</th>
              <th className="p-2 text-left block md:table-cell">Total meal</th>
              <th className="p-2 text-left block md:table-cell">MealCost</th>
              <th className="p-2 text-left block md:table-cell">Extra Cost</th>
              <th className="p-2 text-left block md:table-cell">Total Cost</th>
              <th className="p-2 text-left block md:table-cell">Deposit</th>
              <th className="p-2 text-left block md:table-cell">
                Will Get/Due
              </th>
            </tr>
          </thead>
          <tbody className=" mt-2 block md:table-row-group shadow-md">
            {loading
              ? "loading.."
              : mergedArray?.map((item) => {
                  const otherCost = item?.extraCostPerPerson;
                  const mealcost = item?.mealCount * item?.oneMealCost;
                  const totalCost = otherCost + mealcost;
                  const willGet = item?.amount - totalCost;
                  return (
                    <tr
                      key={item._id}
                      className=" bg-white dark:bg-darkHover font-archivo border dark:text-white border-spacing-2  border-btnbg md:border-none block md:table-row"
                    >
                      <td className=" flex  py-2 px-4 md:px-2 text-left  md:table-cell">
                        <span className="inline-block w-1/3 md:hidden  font-bold">
                          Name :
                        </span>
                        <td className="text-left">{item?.member?.name}</td>
                      </td>
                      <td className=" flex  py-2 px-4 md:px-2 text-left  md:table-cell">
                        <span className="inline-block w-1/3 md:hidden  font-bold">
                          Meal Rate :
                        </span>
                        <td>{parseFloat(item?.oneMealCost).toFixed(2)}</td>
                      </td>
                      <td className=" flex  py-2 px-4 md:px-2 text-left  md:table-cell">
                        <span className="inline-block w-1/3 md:hidden  font-bold">
                          Total meal:
                        </span>
                        <td>{item?.mealCount}</td>
                      </td>
                      <td className=" flex  py-2 px-4 md:px-2 text-left  md:table-cell">
                        <span className="inline-block w-1/3 md:hidden  font-bold">
                          MealCost:
                        </span>
                        <td>{parseFloat(mealcost).toFixed(2)}</td>
                      </td>
                      <td className=" flex  py-2 px-4 md:px-2 text-left  md:table-cell">
                        <span className="inline-block w-1/3 md:hidden  font-bold">
                          Extra Cost:
                        </span>
                        <td>{parseFloat(otherCost).toFixed(2)}</td>
                      </td>
                      <td className=" flex  py-2 px-4 md:px-2 text-left  md:table-cell">
                        <span className="inline-block w-1/3 md:hidden  font-bold">
                          Total Cost:
                        </span>
                        <td>{parseFloat(totalCost).toFixed(2)}</td>
                      </td>
                      <td className=" flex  py-2 px-4 md:px-2 text-left  md:table-cell">
                        <span className="inline-block w-1/3 md:hidden  font-bold">
                          Deposit:
                        </span>
                        <td>{item?.amount}</td>
                      </td>

                      <td className=" flex  py-2 px-4 md:px-2 text-left  md:table-cell">
                        <span className="inline-block w-1/3 md:hidden  font-bold">
                          Will Get/Due:
                        </span>
                        <td>{parseFloat(willGet).toFixed(2)}</td>
                      </td>
                    </tr>
                  );
                })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SummaryList;
