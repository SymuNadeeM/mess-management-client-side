import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import BazarListServices from "../services/BazarListServices";

const useBazarList = (id) => {
  let navigate = useNavigate();

  const schema = yup.object().shape({
    member: yup.string().required("User name should be required please"),
    date: yup.string().required("Date should be required please"),
    itemDescription: yup
      .string()
      .required("bzdetails should be required please"),
    itemAmount: yup.string().required("bzcost should be required please"),
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
        const res = await BazarListServices.singleUpdateBazarListt(id, data);
        alert(res.message);
        navigate("/meal-cost-list");
      } else {
        const res = await BazarListServices.singleCreateBazarList(data);
        alert(res.message);
        setValue("member", "");
        setValue("date", "");
        setValue("itemDescription", "");
        setValue("itemAmount", "");
      }
    } catch (error) {}
  };

  useEffect(() => {
    if (id) {
      (async () => {
        const res = await BazarListServices.getSingleBazarList(id);
        console.log(res.data);
        setValue("member", res?.data?.member);
        setValue("date", res?.data?.date);
        setValue("itemDescription", res?.data?.itemDescription);
        setValue("itemAmount", res?.data?.itemAmount);
      })();
    }
  }, [id, setValue]);

  //delete single items
  const handleDelete = async (id) => {
    try {
      if (window.confirm("are you sure?")) {
        const res = await BazarListServices.singleDeleteBazarList(id);
        alert(res.message);
        window.location.reload();
      }
    } catch (error) {
      console.log(error);
    }
  };

  //search bazarschedule:

  return { submitForm, register, handleSubmit, errors, handleDelete };
};

export default useBazarList;
