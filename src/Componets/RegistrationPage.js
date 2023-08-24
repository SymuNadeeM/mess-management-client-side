/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import img1 from "../../src/assets/dia.jpg";
import { Link } from "react-router-dom";
import useLoginRegisterSubmit from "../hook/useLoginRegisterSubmit";

const RegistrationPage = () => {
  const { onSubmitRegister, handleSubmit, register, errors, handleConfirmPasswordChange, passwordsMatch } = useLoginRegisterSubmit();

  return (
    <>
      <section className="h-screen">
        <div className="h-full bg-slate-300">
          {/* <!-- Left column container with background--> */}
          <div className=" grid md:grid-cols-2 gap-3 justify-center items-center">
            <div className=" flex items-center justify-center">
              <img src={img1} className=" h-screen object-cover object-center" alt="Sampleimage" />
            </div>

            <div className="w-full lg:w-3/4 py-16 px-12">
              <div className=" bg-white py-4 px-4 rounded-md">
                <h2 className="text-3xl font-abc  mb-4">Register</h2>
                <p className="mb-4">Create your account. It’s free and only take a minute</p>
                <form onSubmit={handleSubmit(onSubmitRegister)} action="#" className=" w-full">
                  <div className="grid w-full grid-cols-2 gap-5">
                    <div>
                      {errors.firstName?.type === "required" && (
                        <p className="text-red-500 mb-3" role="alert">
                          First Name is required
                        </p>
                      )}
                      <input
                        name="firstName"
                        {...register("firstName", { required: true })}
                        type="text"
                        placeholder="First Name"
                        className="border border-gray-400 py-1 px-2 w-full"
                      />
                    </div>{" "}
                    <div>
                      {errors.surName?.type === "required" && (
                        <p className="text-red-500 mb-3" role="alert">
                          SurName is required
                        </p>
                      )}
                      <input
                        name="surName"
                        {...register("surName", { required: true })}
                        type="text"
                        placeholder="Surname"
                        className="border border-gray-400 py-1 px-2 w-full"
                      />
                    </div>
                  </div>
                  <div className="mt-5">
                    {errors.email?.type === "required" && (
                      <p className="text-red-500 mb-3" role="alert">
                        Email is required
                      </p>
                    )}
                    <input
                      name="email"
                      {...register("email", { required: true })}
                      type="text"
                      placeholder="Email"
                      className="border border-gray-400 py-1 px-2 w-full"
                    />
                  </div>
                  <div className="mt-5">
                    {errors.password?.type === "required" && (
                      <p className="text-red-500 mb-3" role="alert">
                        Password is required
                      </p>
                    )}
                    <input
                      name="password"
                      {...register("password", { required: true })}
                      type="password"
                      placeholder="Password"
                      className="border border-gray-400 py-1 px-2 w-full"
                    />
                  </div>
                  <div className="mt-5">
                    <input
                      name="confirmPassword"
                      type="password"
                      placeholder="Confirm Password"
                      className={`border ${passwordsMatch ? "border-gray-400" : "border-red-500"} py-1 px-2 w-full`}
                      onChange={handleConfirmPasswordChange}
                    />
                    {!passwordsMatch && (
                      <p className="text-red-500 mt-1" role="alert">
                        Passwords do not match
                      </p>
                    )}
                  </div>
                  <div className="mt-5">
                    <input type="checkbox" className="border border-gray-400 mr-2 mt-1" />
                    <span>
                      I accept the{" "}
                      <a href="#" className="text-purple-500 font-semibold">
                        Terms of Use
                      </a>{" "}
                      &{" "}
                      <a href="#" className="text-purple-500 font-semibold">
                        Privacy Policy
                      </a>
                    </span>
                  </div>
                  <div className="mt-5">
                    <button type="submit" className="w-full bg-purple-500 py-3 text-center text-white cursor-pointer">
                      Register Now
                    </button>
                  </div>
                </form>
                <div className="mt-5 text-center lg:text-left">
                  Already have an account ?{" "}
                  <Link className="text-dsecondaryText hover:text-blue-400 cursor-pointer " to="/login">
                    SignIn
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default RegistrationPage;
