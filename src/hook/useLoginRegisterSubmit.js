import Cookies from "js-cookie";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { notifySuccess } from "../Componets/ToastifyMessage";
import UserServices from "../services/UserServices";
import { useState } from "react";

const useLoginRegisterSubmit = () => {
  const [passwordsMatch, setPasswordsMatch] = useState(true);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const watchPassword = watch("password", ""); // Watching the 'password' input

  const handleConfirmPasswordChange = (event) => {
    const confirmedPassword = event.target.value;
    setPasswordsMatch(watchPassword === confirmedPassword);
  };

  // on submit register
  const onSubmitRegister = async (data) => {
    const userData = {
      firstName: data.firstName,
      surName: data.surName,
      email: data.email,
      password: data.password,
    };

    if (!passwordsMatch) {
      return;
    }

    UserServices.userSignUp(userData)
      .then((res) => {
        console.log(res.data);
        notifySuccess("Register Successfully");
        return navigate("/");
      })
      .catch((err) => console.log(err.message));
  };

  // on submit login
  const onSubmitLogin = async (data) => {
    try {
      const res = await UserServices.userSignIn(data);

      const expire = new Date(new Date().getTime() + 30 * 24 * 60 * 60 * 1000);

      if (res) {
        localStorage.setItem("userInfo", JSON.stringify(res), {
          expires: expire,
          sameSite: "none",
          secure: true,
        });
        Cookies.set("userInfo", JSON.stringify(res), {
          expires: expire,
          sameSite: "none",
          secure: true,
        });
        notifySuccess("Login Successfully");
        return navigate("/");
      } else {
        console.log("There is no Company associated with this account.");
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return {
    errors,
    register,
    handleSubmit,
    onSubmitLogin,
    onSubmitRegister,
    passwordsMatch,
    handleConfirmPasswordChange,
  };
};

export default useLoginRegisterSubmit;
