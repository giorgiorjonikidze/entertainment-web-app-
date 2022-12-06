import React from "react";
import movieLogo from "./../assets/logo.svg";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom"

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

const navigate =  useNavigate()

  const submitHandler = () => {
    navigate("/user")
  };
  return (
    <div className="w-screen flex flex-col items-center box-border pb-[170px]">
      <img className="w-[32px] mt-[48px] mb-[58px]" src={movieLogo} />
      <div className="w-[327px]  bg-blue rounded-[10px] box-border p-[24px]">
        <p className="text-white text-[32px] font-outfit font-light">Login</p>
        <form
          onSubmit={handleSubmit(submitHandler)}
          className="mt-[25px] relative"
        >
          <div className="relative">
            <input
              {...register("email", { required: true })}
              className={
                "bg-blue placeholder:opacity-50   border-b-[1px] mb-[10px] text-white box-border p-[16px] w-full outline-none caret-red " +
                (!errors.email ? "border-b-grey" : "border-[#FC4747]")
              }
              placeholder="Email address"
              type="text"
            />
            {errors.email && <span className="text-red text-[13px] absolute top-[20px] right-[17px]">
              Can’t be empty
            </span>}
          </div>
          <div className="relative">
            <input
              {...register("password", { required: true })}
              className={
                "bg-blue placeholder:opacity-50  border-b-[1px] text-white box-border p-[16px] w-full outline-none caret-red " +
                (!errors.password ? "border-b-grey" : "border-[#FC4747]")
              }
              placeholder="Password"
              type="Password"
            />
            {errors.password && <span className="text-red text-[13px] absolute top-[20px] right-[17px]">
              Can’t be empty
            </span>}
          </div>
          <button
            type="submit"
            className="text-white text-[15px] font-thin h-[48px] bg-red w-full rounded-[6px] mt-[40px] hover:bg-white hover:text-[#000000]"
          >
            Login to your account
          </button>
        </form>
        <div className="flex text-[15px] font-thin	mx-auto justify-center mt-[24px] mb-[8px]">
          <p className="text-white ">Don’t have an account?</p>
          <Link to="/signup" className="text-red ml-[9px]">Sign Up</Link>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
