import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from 'react-hook-form';
import * as yup from "yup";
import MemberServices from '../services/MemberServices';
import useAsync from "./useAsync";

const useMember = () => {
 
  const {id}=useAsync(MemberServices.singleDeleteMember)


  const schema = yup.object().shape({
    name: yup.string().required("Full Name should be required please"),
    phone: yup.number().positive().integer().required(),
    email: yup.string().required("Email should be required please"),
    password: yup.string().required("password should be required please"),
  
  });


  //Delete Single Items
  const handleDelete = async (id) => {
    try {
      if (window.confirm("are you sure?")) {
        const res = await MemberServices.singleDeleteMember(id)       
        alert(res.message)
        window.location.reload();
      }
    } catch (error) {
      console.log(error);
    }  
  };


  //Add member 
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
      const res = await MemberServices.singleCreateMember(data);
      alert(res.message);
      setValue("name", "");
      setValue("phone", "");
      setValue("email", "");
      setValue("password", "");
    } catch (error) {
      console.log(error);
    }
  };


  // Edite Single Members



  
  return {register, handleSubmit, handleDelete, submitForm, errors}
};

export default useMember;