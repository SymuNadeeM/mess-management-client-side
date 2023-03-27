import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import OthersCostServices from "../services/OthersCostServices";

const useOtherCost = () => {

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
 

  return {submitForm, register,handleSubmit,errors}
};

export default useOtherCost;