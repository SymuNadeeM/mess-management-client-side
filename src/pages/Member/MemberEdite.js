import React from "react";
import { useParams } from "react-router-dom";
import useMember from "../../hook/useMember";

const MemberEdite = () => {
  const { id } = useParams();

  const { register, handleSubmit, submitForm, errors } = useMember(id);

  return (
    <>
      <div className="m-[40px]  px-[30px] md:px-0">
        <div className="flex items-center my-4 gap-2">
          <i className="fa-solid fa-user-plus text-2xl text-green dark:text-white"></i>
          <h1 className=" text-[#40513B] dark:text-dark_blue1 text-2xl font-abc">
            Edite Member Information
          </h1>
        </div>
        <div className="flex items-center justify-center mt-[30px]">
          <div className="w-full md:w-1/2 ">
            <form
              onSubmit={handleSubmit(submitForm)}
              className="bg-[#95BDFF] dark:bg-darkHover p-4 "
            >
              <div className=" flex flex-col items-center justify-center space-y-2">
                <div className=" w-full md:w-3/4 flex flex-col  space-y-1">
                  <label
                    htmlFor="name"
                    className="font-jose text-lg text-white dark:text-dark_blue1"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    className="px-4 py-2 outline-none "
                    {...register("name")}
                    placeholder="Name..."
                  />
                  <p className=" text-[#FF0303]"> {errors.name?.message} </p>
                </div>

                <div className=" w-full md:w-3/4 flex flex-col  space-y-1">
                  <label
                    htmlFor="email"
                    className=" font-jose text-lg text-white dark:text-dark_blue1"
                  >
                    E-mail
                  </label>
                  <input
                    type="email"
                    name="email"
                    className="px-4 py-2 outline-none "
                    {...register("email")}
                    placeholder="Email"
                  />
                  <p className=" text-[#FF0303]"> {errors.email?.message} </p>
                </div>
                <div className=" w-full md:w-3/4 flex flex-col  space-y-1">
                  <label
                    htmlFor="phone"
                    className=" font-jose text-lg text-white dark:text-dark_blue1"
                  >
                    Phone
                  </label>
                  <input
                    type="phone"
                    name="phone"
                    className="px-4 py-2 outline-none "
                    {...register("phone")}
                    placeholder="Phone"
                  />
                  <p className=" text-[#FF0303]"> {errors.phone?.message} </p>
                </div>

                <div className="w-full md:w-3/4 flex flex-col  space-y-1">
                  <label
                    htmlFor="permanentaddress"
                    className=" font-jose text-lg text-white dark:text-dark_blue1"
                  >
                    permanent address
                  </label>
                  <input
                    type="permanentaddress"
                    name="permanentaddress"
                    className=" px-4 py-2 outline-none  "
                    {...register("permanentaddress")}
                    placeholder="permanent address"
                  />
                  <p className=" text-[#FF0303]">
                    {" "}
                    {errors.permanentaddress?.message}{" "}
                  </p>
                </div>
                <div className="w-full md:w-3/4 flex flex-col  space-y-1">
                  <label
                    htmlFor="bloodgroup"
                    className=" font-jose text-lg text-white dark:text-dark_blue1"
                  >
                    blood group
                  </label>
                  <input
                    type="bloodgroup"
                    name="bloodgroup"
                    className=" px-4 py-2 outline-none  "
                    {...register("bloodgroup")}
                    placeholder="blood group"
                  />
                  <p className=" text-[#FF0303]">
                    {errors.bloodgroup?.message}
                  </p>
                </div>
                <div>
                  <div
                    className="my-3 flex
                  items-center justify-center w-[150px] text-white font-abc text-sm  bg-green2 p-2 rounded hover:bg-btnbg  duration-200"
                  >
                    <input type="submit" id="submit" className=" " />
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default MemberEdite;
