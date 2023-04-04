import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import OthersCostServices from "../services/OthersCostServices";

const useOtherCost = (id) => {

  let navigate = useNavigate();

  const schema = yup.object().shape({
  date: yup.string().required("Date should be required please"),
  member: yup
      .string()
      .required("should be required please"),
  costName: yup
      .string()
      .required("should be required please"),
  costPrice: yup
      .string()
      .required("should be required please"),
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
    try {
      if (id) {
        const res = await OthersCostServices.singleUpdateOthersCost(id,data)
        alert(res.message)
        navigate("/other-cost-list")
      }else{   
      const res = await OthersCostServices.singleCreateOthersCost(data)
      alert(res.message);
          setValue("date", "");
          setValue("member", "");
          setValue("costName", "");
          setValue("costPrice", "");
        }
    } catch (error) {
      console.log(error);
    }
  };
 
  useEffect(()=>{
    if (id) {
      (async()=>{
         const res = await OthersCostServices.getSingleOthersCost(id)
         console.log(res.data);
         setValue("date", res?.data?.date);
          setValue("member", res?.data?.member);
          setValue("costName", res?.data?.costName);
          setValue("costPrice", res?.data?.costPrice);
      })();
    }
  },[id, setValue])
  


  //Delete Single iteam
  const handleDelete = async (id) => {
    try {
      if (window.confirm("are you sure?")) {
      const res = await OthersCostServices.singleDeleteOthersCost(id)
      alert(res.message)
      window.location.reload();
      }
    } catch (error) {
      console.log(error);
    } 
    }
  

  return {submitForm, register,handleSubmit,errors, handleDelete}
};

export default useOtherCost;