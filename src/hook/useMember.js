import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect } from "react";
import { useForm } from 'react-hook-form';
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import MemberServices from '../services/MemberServices';

const useMember = (id) => {
  let navigate = useNavigate();

  const schema = yup.object().shape({
    name: yup.string().required("Full Name should be required please"),
    phone: yup.number().positive().integer().required(),
    email: yup.string().required("Email should be required please"),
    // password: yup.string().required(id ? false :"password should be required please"),  
  });

  //Add member 
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  // handle form submit
  const submitForm = async (data) => {
    console.log("data ===>",data);
    try {
      if (id) {
        const res = await MemberServices.singleUpdateMember(id,data);
        alert(res.message);
        navigate("/members-list");
      } else {
        const res = await MemberServices.singleCreateMember(data);
        alert(res.message);
        setValue("name", "");
        setValue("phone", "");
        setValue("email", "");
        setValue("password", "");
      }
      
    } catch (error) {
      console.log(error);
    }
  };

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

  useEffect(() => {
    if (id) {
      (async () => {
        const res = await MemberServices.getSingleMember(id);
        console.log("res",res.data);
        setValue("name", res?.data?.name);
        setValue("phone", res?.data?.phone);
        setValue("email", res?.data?.email);
      })();
    }
  },[id,setValue]) 
  
  return {register, handleSubmit, handleDelete, submitForm, errors}
};

export default useMember;