import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";

const schema = yup.object().shape({
  userId: yup.string().required("User name should be required please"),
  bazardate: yup.string().required("bazardate should be required please"),
});

const AddBazarDay = () => {
  const [data, setdata] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, seterror] = useState(null);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const submitForm = (sdata) => {
    axios
      .post("http://localhost:4000/Bazarday", sdata)
      .then((res) => {
        alert("Added bazar days successfully!");
        setValue("userId", "");
        setValue("bazardate", "");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    const getdata = async () => {
      await axios
        .get("http://localhost:4000/newmember")
        .then((res) => {
          setdata(res.data);
          setLoading(false);
        })
        .catch((err) => {
          seterror(err);
          setLoading(false);
        });
    };

    getdata();
  }, []);

  if (loading) {
    return <div>Loading....</div>;
  }
  if (error != null) {
    return <div>{error}</div>;
  }
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
                    Name
                  </label>

                  <select
                    className="px-4 py-2 outline-none rounded"
                    {...register("userId", {
                      required: false,
                    })}
                  >
                    {data?.map((item, i) => (
                      <option key={i + 1} value={item.id}>
                        {item.name}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="w-full md:w-3/4 flex flex-col  space-y-1">
                  <label
                    htmlFor="bazardate"
                    className="font-jose text-lg text-white"
                  >
                    Date
                  </label>

                  <select {...register("bazardate")}>
                    <option value="one">1</option>
                    <option value="one">2</option>
                    <option value="one">3</option>
                    <option value="one">4</option>
                    <option value="one">5</option>
                    <option value="one">6</option>
                    <option value="one">7</option>
                    <option value="one">8</option>
                    <option value="one">9</option>
                    <option value="one">10</option>
                    <option value="one">11</option>
                    <option value="one">12</option>
                    <option value="one">13</option>
                    <option value="one">14</option>
                    <option value="one">15</option>
                    <option value="one">16</option>
                    <option value="one">17</option>
                    <option value="one">18</option>
                    <option value="one">19</option>
                    <option value="one">20</option>
                    <option value="one">21</option>
                    <option value="one">22</option>
                    <option value="one">23</option>
                    <option value="one">24</option>
                    <option value="one">25</option>
                    <option value="one">26</option>
                    <option value="one">27</option>
                    <option value="one">28</option>
                    <option value="one">29</option>
                    <option value="one">30</option>
                    <option value="one">31</option>
                  </select>
                  <p className=" text-[#FF0303]">
                    {" "}
                    {errors.bazardate?.message}{" "}
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

export default AddBazarDay;
