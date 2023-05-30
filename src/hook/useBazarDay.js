import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import BazarScheduleServices from "../services/BazarScheduleServices";

const useBazarDay = (id) => {
  let navigate = useNavigate();
  const schema = yup.object().shape({
    member: yup.string().required("User name should be required please"),
    date: yup.string().required("bazardate should be required please"),
  });
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const submitForm = async (data) => {
    console.log(data);

    try {
      if (id) {
        const res = await BazarScheduleServices.singleUpdateBazarSchedule(
          id,
          data
        );
        alert(res.message);
        navigate("/bazar-day-list");
      } else {
        const res = await BazarScheduleServices.singleCreateBazarSchedule(data);
        alert(res.message);
        setValue("member", "");
        setValue("date", "");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (id) {
      (async () => {
        const res = await BazarScheduleServices.getSingleBazarSchedule(id);
        console.log(res.data);
        setValue("member", res?.data?.member);
        setValue("date", res?.data?.date);
      })();
    }
  }, [id, setValue]);

  //Delete items
  const handleDelete = async (id) => {
    console.log(id);
    try {
      if (window.confirm("are you sure?")) {
        const res = await BazarScheduleServices.singleDeleteBazarSchedule(id);
        alert(res.message);
        window.location.reload();
      }
    } catch (error) {
      console.log(error);
    }
  };

  //

  const searchSchedule = async (date) => {
    const res = await BazarScheduleServices.searchBazarSchedule(date);
    console.log(res);
  };

  return {
    handleSubmit,
    submitForm,
    register,
    handleDelete,
    searchSchedule,
    errors,
  };
};

export default useBazarDay;
