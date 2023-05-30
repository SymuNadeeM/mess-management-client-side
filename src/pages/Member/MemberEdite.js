import React from "react";
import { useParams } from "react-router-dom";
import useMember from "../../hook/useMember";

const MemberEdite = () => {
  const { id } = useParams();

  const { register, handleSubmit, submitForm, errors } = useMember(id);

  return (
    <>
      <div className="m-[30px]  px-[30px] md:px-0">
        <div className="flex items-center my-4 gap-2">
          <i className="fa-solid fa-user-plus text-2xl text-green"></i>
          <h1 className=" text-[#40513B] text-2xl font-abc">Add New Member</h1>
        </div>
        <div className="p-5 md:p-10  bg-[#95BDFF] rounded-md">
          <form onSubmit={handleSubmit(submitForm)}>
            <div className=" space-y-4 ">
              <div className=" space-y-3">
                <div className=" flex flex-col space-y-1">
                  <label htmlFor="name" className=" font-jose">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    className="w-full md:w-2/5 px-4 py-2 outline-none rounded"
                    {...register("name")}
                    placeholder="Name..."
                  />
                  <p className=" text-[#FF0303]"> {errors.name?.message} </p>
                </div>
                {/* <div className="flex flex-col space-y-1">
                  <label htmlFor="age" className=" font-jose">
                    Age
                  </label>
                  <input
                    type="text"
                    name="age"
                    className="w-full md:w-2/5 px-4 py-2 outline-none rounded"
                    {...register("age")}
                    placeholder="Age"
                  />
                  <p className=" text-[#FF0303]"> {errors.age?.message} </p>
                </div> */}
                <div className=" flex flex-col space-y-1">
                  <label htmlFor="email" className=" font-jose">
                    E-mail
                  </label>
                  <input
                    type="email"
                    name="email"
                    className="w-full md:w-2/5 px-4 py-2 outline-none rounded"
                    {...register("email")}
                    placeholder="Email"
                  />
                  <p className=" text-[#FF0303]"> {errors.email?.message} </p>
                </div>
                <div className=" flex flex-col space-y-1">
                  <label htmlFor="phone" className=" font-jose">
                    Phone
                  </label>
                  <input
                    type="phone"
                    name="phone"
                    className="w-full md:w-2/5 px-4 py-2 outline-none rounded"
                    {...register("phone")}
                    placeholder="Phone"
                  />
                  <p className=" text-[#FF0303]"> {errors.phone?.message} </p>
                </div>
                {/* <div className=" flex flex-col space-y-1">
                  <label htmlFor="password" className=" font-jose">
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    className="w-full md:w-2/5 px-4 py-2 outline-none rounded"
                    {...register("password")}
                    placeholder="password"
                  />
                  <p className=" text-[#FF0303]">{errors.password?.message}</p>
                </div> */}
                {/* <div className=" flex flex-col space-y-1">
                  <label htmlFor="address" className=" font-jose">
                    Address
                  </label>
                  <textarea
                    type="text"
                    name="address"
                    className="w-full md:w-2/5 px-4 py-2 outline-none rounded"
                    {...register("address")}
                    placeholder="address"
                    cols="30"
                    rows="5"
                  ></textarea>
                  <p className=" text-[#FF0303]"> {errors.address?.message} </p>
                </div> */}
                <div className="w-full md:w-3/4 flex flex-col  space-y-1">
                  <label htmlFor="permanentaddress" className=" font-jose">
                    permanent address
                  </label>
                  <input
                    type="permanentaddress"
                    name="permanentaddress"
                    className=" px-4 py-2 outline-none rounded "
                    {...register("permanentaddress")}
                    placeholder="permanent address"
                  />
                  <p className=" text-[#FF0303]">
                    {" "}
                    {errors.permanentaddress?.message}{" "}
                  </p>
                </div>
                <div className="w-full md:w-3/4 flex flex-col  space-y-1">
                  <label htmlFor="bloodgroup" className=" font-jose">
                    blood group
                  </label>
                  <input
                    type="bloodgroup"
                    name="bloodgroup"
                    className=" px-4 py-2 outline-none rounded "
                    {...register("bloodgroup")}
                    placeholder="blood group"
                  />
                  <p className=" text-[#FF0303]">
                    {" "}
                    {errors.bloodgroup?.message}{" "}
                  </p>
                </div>
              </div>

              <div
                className="flex
                 items-center justify-center w-[150px] text-white font-abc text-sm  bg-green2 p-2 rounded hover:bg-btnbg  duration-200 "
              >
                <input type="submit" id="submit" className=" " />
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default MemberEdite;
