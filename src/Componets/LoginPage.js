import React from "react";
import img1 from "../../src/assets/dia.jpg";
import { Link } from "react-router-dom";
import useLoginRegisterSubmit from "../hook/useLoginRegisterSubmit";

const LoginPage = () => {
  const { onSubmitLogin, handleSubmit, register, errors } = useLoginRegisterSubmit();
  return (
    <>
      <div>
        <section className="h-screen">
          <div className="h-full bg-slate-300">
            {/* <!-- Left column container with background--> */}
            <div className=" grid md:grid-cols-2 gap-8 justify-center items-center">
              <div className=" flex items-center justify-center">
                <img src={img1} className=" h-screen object-cover object-center" alt="Sampleimage" />
              </div>

              <div className=" px-[30px] md:px-1 w-full md:w-2/3">
                <div className=" bg-white py-4 px-4 rounded-md">
                  <form onSubmit={handleSubmit(onSubmitLogin)}>
                    {/* <!-- Email input --> */}
                    {errors.email?.type === "required" && (
                      <p className="text-red-500 mb-3" role="alert">
                        Email is required
                      </p>
                    )}
                    <div className="relative mb-6">
                      <input
                        type="text"
                        className="peer border-b block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 "
                        id="email"
                        placeholder="Email address"
                        name="email"
                        {...register("email", { required: true })}
                      />
                    </div>

                    {/* <!-- Password input --> */}
                    {errors.password?.type === "required" && (
                      <p className="text-red-500 mb-3" role="alert">
                        Password is required
                      </p>
                    )}
                    <div className="relative mb-6">
                      <input
                        type="password"
                        className="peer border-b block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 "
                        id="password"
                        placeholder="Password"
                        name="password"
                        {...register("password", { required: true })}
                      />
                    </div>

                    {/* <!-- Login button --> */}
                    <div className="text-center lg:text-left">
                      <button
                        type="submit"
                        className="inline-block rounded bg-primary px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal  text-gray-900 hover:text-white bg-white hover:bg-gray-400   font-Robbi shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out "
                        data-te-ripple-init
                        data-te-ripple-color="light"
                      >
                        Login
                      </button>
                    </div>
                  </form>
                  <div className="mt-5 text-center lg:text-left">
                    Create a new account ?{" "}
                    <Link className="text-dsecondaryText hover:text-blue-400 cursor-pointer " to="/regpage">
                      SignUp
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default LoginPage;
