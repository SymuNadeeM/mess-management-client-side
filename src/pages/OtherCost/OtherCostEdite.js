
import React from "react";
import { useParams } from "react-router-dom";
import useAsync from "../../hook/useAsync";
import useOtherCost from "../../hook/useOtherCost";
import MemberServices from "../../services/MemberServices";



const OtherCostEdite = () => {

  const { id } = useParams();
 const {handleSubmit,submitForm,register,errors} = useOtherCost(id)
 const {data,error,loading}=useAsync(MemberServices.getAllMember)

  return (
    <>
      <div className="mt-[30px]  px-[30px] md:px-0">
        <div className="flex items-center my-4 gap-2">
          <i className="fa-solid fa-sack-dollar text-2xl text-green"></i>
          <h1 className=" text-[#40513B] text-2xl font-abc">Add Other Cost</h1>
        </div>
        <div className="flex items-center justify-center">
          <div className="w-full md:w-1/2 ">
            <form
              onSubmit={handleSubmit(submitForm)}
              className="bg-[#95BDFF] p-4 rounded-md"
            >
              <div className="  flex flex-col items-center justify-center space-y-2">
                <div className="w-full md:w-3/4 flex flex-col  space-y-1">
                  <label
                    htmlFor="meal"
                    className="font-jose text-lg text-white"
                  >
                    Date
                  </label>

                  <input
                    type="date"
                    name="date"
                    className=" px-4 py-2 outline-none rounded "
                    {...register("date")}
                    placeholder="date"
                  />
                  <p className=" text-[#FF0303]"> {errors.date?.message} </p>
                </div>
                <div className="w-full md:w-3/4 flex flex-col  space-y-1">
                  <label
                    htmlFor="costName"
                    className="font-jose text-lg text-white"
                  >
                    Cost Name
                  </label>
                  <textarea
                    type="text"
                    name="costName"
                    className=" px-4 py-2 outline-none rounded "
                    {...register("costName")}
                    placeholder="other Cost details"
                    cols="30"
                    rows="6"
                  ></textarea>

                  <p className=" text-[#FF0303]">
                    {errors.costName?.message}{" "}
                  </p>
                </div>
                <div className="w-full md:w-3/4 flex flex-col  space-y-1">
                  <label
                    htmlFor="costPrice"
                    className="font-jose text-lg text-white"
                  >
                    Cost Amount
                  </label>

                  <input
                    type="number"
                    name="costPrice"
                    className=" px-4 py-2 outline-none rounded "
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
                    className="font-jose text-lg text-white"
                  >
                    Name
                  </label>

                  <select
                    className="px-4 py-2 outline-none rounded"
                    {...register("member", {
                      required: false,
                    })}
                  >
                    { loading ? "Loading" :
                    data?.data?.map((item, i) => (
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

export default OtherCostEdite;
