import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import BazarListServices from '../services/BazarListServices';

const useBazarList = () => {
  const schema = yup.object().shape({
    member: yup.string().required("User name should be required please"),
    date: yup.string().required("Date should be required please"),
    itemName: yup.string().required("bzdetails should be required please"),
    itemQuantity: yup.string().required("bzcost should be required please"),
    unit: yup.string().required("bzcost should be required please"),
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
      const res = await BazarListServices.singleCreateBazarList(data)
      alert(res.message);
      setValue("member", "");
      setValue("date", "");
      setValue("unit", "");
      setValue("itemName", "");
      setValue("itemQuantity", "");
      setValue("itemAmount", "");
      
    } catch (error) {}
  };

  return {submitForm ,register, handleSubmit,errors}
};

export default useBazarList;