import useAsync from "../../hook/useAsync";
import useBazarList from "../../hook/useBazarList";
import MemberServices from "../../services/MemberServices";

const AddMealCost = () => {
  const { submitForm, register, handleSubmit, errors } = useBazarList();
  const { data, error, loading } = useAsync(MemberServices.getAllMember);

  return (
    <>
      <div className="mt-[30px]  px-[30px] md:px-0">
        <div className="flex items-center my-4 gap-2">
          <i className="fa-solid fa-sack-dollar text-2xl text-green"></i>
          <h1 className=" text-[#40513B] text-2xl font-abc">Add Bazar List</h1>
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
                    htmlFor="itemDescription"
                    className="font-jose text-lg text-white"
                  >
                    Item Name
                  </label>
                  <textarea
                    type="text"
                    name="itemDescription"
                    className=" px-4 py-2 outline-none rounded "
                    {...register("itemDescription")}
                    placeholder="itemDescription"
                    cols="30"
                    rows="6"
                  ></textarea>

                  <p className=" text-[#FF0303]">
                    {errors.itemDescription?.message}{" "}
                  </p>
                </div>
                <div className="w-full md:w-3/4 flex flex-col  space-y-1">
                  <label
                    htmlFor="itemAmount"
                    className="font-jose text-lg text-white"
                  >
                    item Amount
                  </label>

                  <input
                    type="number"
                    name="itemAmount"
                    className=" px-4 py-2 outline-none rounded "
                    {...register("itemAmount")}
                    placeholder="item Amount"
                  />
                  <p className=" text-[#FF0303]">
                    {" "}
                    {errors.itemAmount?.message}{" "}
                  </p>
                </div>

                <div className="w-full md:w-3/4 flex flex-col  space-y-1">
                  <label
                    htmlFor="amount"
                    className="font-jose text-lg text-white"
                  >
                    Who did the Bazar?
                  </label>

                  <select
                    className="px-4 py-2 outline-none rounded"
                    {...register("member", {
                      required: false,
                    })}
                  >
                    {loading
                      ? "loading... "
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

export default AddMealCost;
