import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import * as yup from "yup";

const schema = yup.object().shape({
  userId: yup.string().required("User name should be required please"),
  date: yup.string().required("Date should be required please"),
  bzdetails: yup.string().required("bzdetails should be required please"),
  bzcost: yup.string().required("bzcost should be required please"),
});

const MealcostEdite = () => {
  let navigate = useNavigate();
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [isLoading2, setIsLoading2] = useState(true);
  const [error, setError] = useState(null);
  const [error2, seterror2] = useState(null);
  const [data, setdata] = useState([]);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  useEffect(() => {
    const getdata = async () => {
      await axios
        .get("http://localhost:4000/newmember")
        .then((res) => {
          setdata(res.data);
          setIsLoading2(false);
        })
        .catch((err) => {
          seterror2(err);
          setIsLoading2(false);
        });
    };

    getdata();
  }, []);

  useEffect(() => {
    axios
      .get(`http://localhost:4000/mealCost/${id}`)
      .then((res) => {
        setIsLoading(false);
        setValue("userId", res.data.userId);
        setValue("date", res.data.date);
        setValue("bzdetails", res.data.bzdetails);
        setValue("bzcost", res.data.bzcost);
      })
      .catch((err) => {
        setIsLoading(false);
        setError(err.message);
      });
  }, [id, setValue]);

  const submitForm = async (data) => {
    try {
      const res = await axios.get(
        `http://localhost:4000/newmember?id=${data.userId}`
      );
      const getsubdata = {
        ...data,
        user: res.data[0],
      };
      console.log(getsubdata);
      axios
        .put(`http://localhost:4000/mealCost/${id}`, getsubdata)
        .then((res) => {
          console.log(res.data);
          navigate("/meal-cost-list");
          alert("Meal cost Edite successfully");
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (error) {}
  };

  if (isLoading2) {
    return <div>Loading..</div>;
  }
  if (error2 != null) {
    return <div>{error2}</div>;
  }

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
                    htmlFor="bzdetails"
                    className="font-jose text-lg text-white"
                  >
                    Bazar Details
                  </label>
                  <textarea
                    type="text"
                    name="bzdetails"
                    className=" px-4 py-2 outline-none rounded "
                    {...register("bzdetails")}
                    placeholder="Bazar details"
                    cols="30"
                    rows="6"
                  ></textarea>

                  <p className=" text-[#FF0303]">
                    {errors.bzdetails?.message}{" "}
                  </p>
                </div>
                <div className="w-full md:w-3/4 flex flex-col  space-y-1">
                  <label
                    htmlFor="bzcost"
                    className="font-jose text-lg text-white"
                  >
                    Bazar Cost
                  </label>

                  <input
                    type="number"
                    name="bzcost"
                    className=" px-4 py-2 outline-none rounded "
                    {...register("bzcost")}
                    placeholder="Amount"
                  />
                  <p className=" text-[#FF0303]"> {errors.bzcost?.message} </p>
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
                    {...register("userId", {
                      required: false,
                    })}
                  >
                    {data.map((item, i) => (
                      <option key={i + 1} value={item.id}>
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

export default MealcostEdite;
