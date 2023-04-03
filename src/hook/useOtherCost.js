import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import OthersCostServices from "../services/OthersCostServices";

const useOtherCost = () => {

  // const {id}=useAsync(OthersCostServices.singleDeleteOthersCost)

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
      const res = await OthersCostServices.singleCreateOthersCost(data)
      alert(res.message);
          setValue("date", "");
          setValue("member", "");
          setValue("costName", "");
          setValue("costPrice", "");
    } catch (error) {
      console.log(error);
    }
  };
 

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