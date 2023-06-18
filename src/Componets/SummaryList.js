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
    <div>
      <div className="mt-[50px] mb-2">
        <div className="flex items-center my-4 gap-2">
          <i className="fa-solid fa-sack-dollar text-green2 text-2xl"></i>
          <h1 className=" text-[#40513B] text-2xl font-abc">
            All Member summary List
          </h1>
        </div>
      </div>
      <div>
        <table className="table-auto text-center w-full md:w-3/4 border">
          <thead className=" border">
            <tr className="bg-[#faf7f7] font-archivo  text-text2 shadow text-sm">
              <th className="p-2  border">Name</th>

              <th className="p-2 border">Meal Rate</th>
              <th className="p-2 border">Total meal</th>
              <th className="p-2 border">MealCost</th>
              <th className="p-2 border">Extra Cost</th>
              <th className="p-2 border">Total Cost</th>
              <th className="p-2 border">Deposit</th>
              <th className="p-2 border">Will Get/Due</th>
            </tr>
          </thead>
          <tbody className="bg-white">
            {loading
              ? "loading.."
              : mergedArray?.map((item) => {
                  const otherCost = item?.extraCostPerPerson;
                  const mealcost = item?.mealCount * item?.oneMealCost;
                  const totalCost = otherCost + mealcost;
                  const willGet = item?.amount - totalCost;
                  return (
                    <tr key={item._id} className="border">
                      <td className="text-left">{item?.member?.name}</td>

                      <td>{parseFloat(item?.oneMealCost).toFixed(2)}</td>
                      <td>{item?.mealCount}</td>
                      <td>{parseFloat(mealcost).toFixed(2)}</td>
                      <td>{parseFloat(otherCost).toFixed(2)}</td>
                      <td>{parseFloat(totalCost).toFixed(2)}</td>
                      <td>{item?.amount}</td>
                      <td>{parseFloat(willGet).toFixed(2)}</td>
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
