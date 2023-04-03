import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import PaidAmountServices from '../services/PaidAmountServices';
const usePaidAmount = (id) => {
  let navigate = useNavigate();
  //add Amount
  const schema = yup.object().shape({
    member: yup.string().required("User name should be required please"),
    amount: yup.string().required("amount should be required please"),
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
      if(id){
        const res = await PaidAmountServices.singleUpdatePaidAmount(id,data)
        alert(res.message)
        navigate("/money-list")
      }else{
     const res = await PaidAmountServices.singleCreatePaidAmount(data)
     alert(res.message);
     setValue("amount", "");
     setValue("member", "");
      }
   } catch (error) {
    console.log(error);
   }
  };
  

  useEffect(()=>{
  if(id){
    (async ()=>{
      const res = await PaidAmountServices.getSinglePaidAmount(id);
      console.log(res.data);
      setValue("amount", res?.data?.amount);
     setValue("member", res?.data?.member);
    })();
  }
  },[id,setValue])


  // Delete single items
  const handleDelete = async (id) => {
    try {
        if (window.confirm("are you sure?")) {
       const res = await PaidAmountServices.singleDeletePaidAmount(id)
       alert(res.message)
      window.location.reload();
    }
    } catch (error) {
      console.log(error);
    }
  };


  return {register,handleSubmit,submitForm,errors,handleDelete}
};

export default usePaidAmount;