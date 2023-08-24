import React from "react";
import img1 from "../../src/assets/dia.jpg";

const RegistrationPage = () => {
  return (
    <>
      <section className="h-screen">
        <div className="h-full bg-slate-300">
          {/* <!-- Left column container with background--> */}
          <div className=" grid md:grid-cols-2 gap-3 justify-center items-center">
            <div className=" flex items-center justify-center">
              <img src={img1} className=" h-screen" alt="Sampleimage" />
            </div>

            <div className="w-full lg:w-3/4 py-16 px-12">
              <div className=" bg-white py-4 px-4 rounded-md">
                <h2 className="text-3xl font-abc  mb-4">Register</h2>
                <p className="mb-4">
                  Create your account. It’s free and only take a minute
                </p>
                <form action="#" className=" w-full">
                  <div className="grid w-full grid-cols-2 gap-5">
                    <input
                      type="text"
                      placeholder="Firstname"
                      className="border border-gray-400 py-1 px-2"
                    />
                    <input
                      type="text"
                      placeholder="Surname"
                      className="border border-gray-400 py-1 px-2"
                    />
                  </div>
                  <div className="mt-5">
                    <input
                      type="text"
                      placeholder="Email"
                      className="border border-gray-400 py-1 px-2 w-full"
                    />
                  </div>
                  <div className="mt-5">
                    <input
                      type="password"
                      placeholder="Password"
                      className="border border-gray-400 py-1 px-2 w-full"
                    />
                  </div>
                  <div className="mt-5">
                    <input
                      type="password"
                      placeholder="Confirm Password"
                      className="border border-gray-400 py-1 px-2 w-full"
                    />
                  </div>
                  <div className="mt-5">
                    <input type="checkbox" className="border border-gray-400" />
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
                    <button className="w-full bg-purple-500 py-3 text-center text-white">
                      Register Now
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default RegistrationPage;
