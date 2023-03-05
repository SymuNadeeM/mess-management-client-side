import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";

import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import * as yup from "yup";

const schema = yup.object().shape({
  date: yup.string().required("Date should be required please"),
  otherCostdetails: yup
    .string()
    .required("otherCostdetails should be required please"),
  otherCostAmount: yup
    .string()
    .required("otherCostAmount should be required please"),
});

const OtherCostEdite = () => {
  let navigate = useNavigate();
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  useEffect(() => {
    axios
      .get(`http://localhost:4000/otherCost/${id}`)
      .then((res) => {
        setIsLoading(false);
        setValue("date", res.data.date);
        setValue("otherCostdetails", res.data.otherCostdetails);
        setValue("otherCostAmount", res.data.otherCostAmount);
      })
      .catch((err) => {
        setIsLoading(false);
        setError(err.message);
      });
  }, [id, setValue]);

  const submitForm = (data) => {
    axios.put(`http://localhost:4000/otherCost/${id}`, data).then((res) => {
      navigate("/other-cost-list");
      alert("Other cost edited successfully!");
    });
    console.log(data);
  };
  if (isLoading) {
    return <div>Loading..</div>;
  }
  if (error != null) {
    return <div>{error}</div>;
  }

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
                    htmlFor="otherCostdetails"
                    className="font-jose text-lg text-white"
                  >
                    other Cost details
                  </label>
                  <textarea
                    type="text"
                    name="otherCostdetails"
                    className=" px-4 py-2 outline-none rounded "
                    {...register("otherCostdetails")}
                    placeholder="other Cost details"
                    cols="30"
                    rows="6"
                  ></textarea>

                  <p className=" text-[#FF0303]">
                    {errors.otherCostdetails?.message}{" "}
                  </p>
                </div>
                <div className="w-full md:w-3/4 flex flex-col  space-y-1">
                  <label
                    htmlFor="otherCostAmount"
                    className="font-jose text-lg text-white"
                  >
                    Cost Amount
                  </label>

                  <input
                    type="number"
                    name="otherCostAmount"
                    className=" px-4 py-2 outline-none rounded "
                    {...register("otherCostAmount")}
                    placeholder="Amount"
                  />
                  <p className=" text-[#FF0303]">
                    {" "}
                    {errors.otherCostAmount?.message}{" "}
                  </p>
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
