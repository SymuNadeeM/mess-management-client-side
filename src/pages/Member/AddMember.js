import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";

const schema = yup.object().shape({
  name: yup.string().required("Full Name should be required please"),
  age: yup.number().positive().integer().required(),
  email: yup.string().required("Email should be required please"),
  password: yup.string().required("password should be required please"),
  address: yup.string().required("address should be required please"),
});

const AddMember = () => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const submitForm = (data) => {
    axios
      .post("http://localhost:4000/newmember", data)
      .then((res) => {
        alert("player create successfully!");
        setValue("name", "");
        setValue("age", "");
        setValue("email", "");
        setValue("password", "");
        setValue("address", "");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <div className="m-[30px]  px-[30px] md:px-0">
        <div className="flex items-center my-4 gap-2">
          <i class="fa-solid fa-user-plus text-2xl text-green"></i>
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
                <div className="flex flex-col space-y-1">
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
                </div>
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
                </div>
                <div className=" flex flex-col space-y-1">
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

export default AddMember;
