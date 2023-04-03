import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import DailyMealCountServices from "../services/DailyMealCountServices";

const useDailyMeal = (id) => {
 
  let navigate = useNavigate()


  //add meal
  const schema = yup.object().shape({
    member: yup.string().required("User name should be required please"),
    mealCount: yup.string().required("Meal should be required please"),
    date: yup.string().required("Date should be required please"),
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
       if(id){
        const res = await DailyMealCountServices.singleUpdateDailyMealCount(id,data)
        alert(res.message)
        navigate("/meal-list")
       }else{
        const res = await DailyMealCountServices.singleCreateDailyMealCount(data)
        alert(res.message);
        setValue("member", "");
        setValue("mealCount", "");
        setValue("date", "");
       }   
      
    } catch (error) {
       console.log(error);
    }
  };


  useEffect(()=>{
    if(id){
      (async ()=>{
        const res = await DailyMealCountServices.getSingleDailyMealCount(id)
        console.log(res.data);
        setValue("member", res?.data?.member);
        setValue("mealCount", res?.data?.mealCount);
        setValue("date", res?.data?.date);
      })();
    }
    },[id,setValue])


//Delete items
  const handleDelete = async (id) => {
    console.log(id);
 try {
  if (window.confirm("are you sure?")){
  const res = await DailyMealCountServices.singleDeleteDailyMealCount(id)
  alert(res.message)
  window.location.reload();
 }
 } catch (error) {
  console.log(error);
 }

  };


  return {submitForm,errors,handleSubmit,register,handleDelete}
   
};

export default useDailyMeal;