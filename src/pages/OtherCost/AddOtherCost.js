import React from "react";
import useAsync from "../../hook/useAsync";
import useOtherCost from "../../hook/useOtherCost";
import MemberServices from "../../services/MemberServices";
import { Link } from "react-router-dom";

const AddOtherCost = () => {
  const { submitForm, register, handleSubmit, errors } = useOtherCost();
  const { data, error, loading } = useAsync(MemberServices.getAllMember);

  return (
    <>
      <div className="m-[40px]  px-[30px] md:px-0">
        <div className="flex items-center my-4 gap-2">
          <i className="fa-solid fa-sack-dollar text-2xl text-green dark:text-white"></i>
          <h1 className=" text-[#40513B] dark:text-dark_blue1 text-2xl font-abc">
            Add Other Cost
          </h1>
        </div>
        <div className="mt-2 dark:text-green">
          <i className="fa-solid fa-arrow-left text-sm "></i>
          <Link to="/other-cost-list" className="ml-1 text-sm font-Robbi">
            Back To OtherCostList
          </Link>
        </div>
        <div className="flex items-center justify-center mt-[30px]">
          <div className="w-full md:w-1/2 ">
            <form
              onSubmit={handleSubmit(submitForm)}
              className="bg-[#95BDFF] dark:bg-darkHover p-4"
            >
              <div className="  flex flex-col items-center justify-center space-y-2">
                <div className="w-full md:w-3/4 flex flex-col  space-y-1">
                  <label
                    htmlFor="meal"
                    className="font-jose text-lg text-white dark:text-dark_blue2"
                  >
                    Date
                  </label>

                  <input
                    type="date"
                    name="date"
                    className=" px-4 py-2 outline-none  "
                    {...register("date")}
                    placeholder="date"
                  />
                  <p className=" text-[#FF0303]"> {errors.date?.message} </p>
                </div>
                <div className="w-full md:w-3/4 flex flex-col  space-y-1">
                  <label
                    htmlFor="costName"
                    className="font-jose text-lg text-white dark:text-dark_blue2"
                  >
                    cost Name
                  </label>
                  <textarea
                    type="text"
                    name="costName"
                    className=" px-4 py-2 outline-none  "
                    {...register("costName")}
                    placeholder="cost Name"
                    cols="30"
                    rows="6"
                  ></textarea>

                  <p className=" text-[#FF0303]">{errors.costName?.message} </p>
                </div>
                <div className="w-full md:w-3/4 flex flex-col  space-y-1">
                  <label
                    htmlFor="costPrice"
                    className="font-jose text-lg text-white dark:text-dark_blue2"
                  >
                    cost Price
                  </label>

                  <input
                    type="number"
                    name="costPrice"
                    className=" px-4 py-2 outline-none  "
                    {...register("costPrice")}
                    placeholder="Amount"
                  />
                  <p className=" text-[#FF0303]">
                    {" "}
                    {errors.costPrice?.message}{" "}
                  </p>
                </div>
                <div className="w-full md:w-3/4 flex flex-col  space-y-1">
                  <label
                    htmlFor="amount"
                    className="font-jose text-lg text-white dark:text-dark_blue2"
                  >
                    Name
                  </label>

                  <select
                    className="px-4 py-2 outline-none "
                    {...register("member", {
                      required: false,
                    })}
                  >
                    {loading
                      ? "Loading"
                      : data?.data?.map((item, i) => (
                          <option key={i + 1} value={item._id}>
                            {item.name}
                          </option>
                        ))}
                  </select>
                </div>

                <div>
                  <button
                    className="my-3 flex
                 items-center justify-center w-[150px] text-white font-abc text-sm  bg-green2 p-2 rounded hover:bg-btnbg  duration-200 "
                    type="submit"
                  >
                    submit
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddOtherCost;
