import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import DailyMealCountServices from "../services/DailyMealCountServices";

const useDailyMeal = () => {

  // const {id} = useAsync(DailyMealCountServices.singleDeleteDailyMealCount)

  //delete
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
      const res = await DailyMealCountServices.singleCreateDailyMealCount(data)
      alert(res.message);
      setValue("member", "");
      setValue("mealCount", "");
      
    } catch (error) {
       console.log(error);
    }
  };





  return {submitForm,errors,handleSubmit,register,handleDelete}
   
};

export default useDailyMeal;