import React from "react";
import { useParams } from "react-router-dom";
import useAsync from "../../hook/useAsync";
import usePaidAmount from "../../hook/usePaidAmount";
import MemberServices from "../../services/MemberServices";


const MoneyEdite = () => {
   
  const {id} = useParams()

  const {register,handleSubmit,submitForm,errors} = usePaidAmount(id)
  const {data,error,loading}=useAsync(MemberServices.getAllMember)


  return (
    <>
      <div className="mt-[30px]  px-[30px] md:px-0">
        <div className="flex items-center my-4 gap-2">
          <i className="fa-solid fa-sack-dollar text-2xl text-green"></i>
          <h1 className=" text-[#40513B] text-2xl font-abc">Add Money</h1>
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
                    htmlFor="amount"
                    className="font-jose text-lg text-white"
                  >
                    Amount
                  </label>

                  <input
                    type="number"
                    name="amount"
                    className=" px-4 py-2 outline-none rounded "
                    {...register("amount")}
                    placeholder="amount"
                  />
                  <p className=" text-[#FF0303]"> {errors.amount?.message} </p>
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
                    { loading ? "loading":
                    data?.data?.map((item, i) => (
                      <option key={i + 1} value={item._id}>
                        {item?.name}
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

export default MoneyEdite;
