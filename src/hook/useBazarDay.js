import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import BazarScheduleServices from "../services/BazarScheduleServices";

const useBazarDay = () => {

  const schema = yup.object().shape({
    member: yup.string().required("User name should be required please"),
    countOfBazar: yup.string().required("bazardate should be required please"),
    dayName: yup.string().required("bazardate should be required please"),
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
      //  if(id){
      //   const res = await DailyMealCountServices.singleUpdateDailyMealCount(id,data)
      //   alert(res.message)
      //   navigate("/meal-list")
      //  }else{
        const res = await BazarScheduleServices.singleCreateBazarSchedule(data)
        alert(res.message);
        setValue("member", "");
        setValue("countOfBazar", "");
        setValue("dayName", "");
       }   
      
     catch (error) {
       console.log(error);
    }
  };

  // useEffect(()=>{
  //   if(id){
  //     (async ()=>{
  //       const res = await DailyMealCountServices.getSingleDailyMealCount(id)
  //       console.log(res.data);
  //       setValue("member", res?.data?.member);
  //       setValue("mealCount", res?.data?.mealCount);
  //       setValue("date", res?.data?.date);
  //     })();
  //   }
  //   },[id,setValue])


//Delete items
//   const handleDelete = async (id) => {
//     console.log(id);
//  try {
//   if (window.confirm("are you sure?")){
//   const res = await DailyMealCountServices.singleDeleteDailyMealCount(id)
//   alert(res.message)
//   window.location.reload();
//  }
//  } catch (error) {
//   console.log(error);
//  }

//   };

  return {handleSubmit,submitForm,register,errors}
};

export default useBazarDay;