import React, { useRef } from "react";
import movieLogo from "./../assets/logo.svg";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

const SighinPage = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const password = useRef({});
  password.current = watch("password", "");
  const navigate = useNavigate()

  console.log(errors.passwordRepeat?.type)
  

  const onSubmit = async () => {
    console.log("form submited")
    navigate("/login")
  };

  return (
    <div className="w-screen flex flex-col items-center box-border pb-[170px]">
      <img className="w-[32px] mt-[48px] mb-[58px]" src={movieLogo} />
      <div className="w-[327px]  bg-blue rounded-[10px] box-border p-[24px]">
        <p className="text-white text-[32px] font-outfit font-light">Sign Up</p>
        <form onSubmit={(e) => e.preventDefault()} className="mt-[25px]">
          <div className="relative">
            <input
              {...register("email", { required: true })}
              className={
                "bg-blue placeholder:opacity-50   border-b-[1px] mb-[10px] text-white box-border p-[16px] w-full outline-none caret-red " +
                (errors.email ? "border-b-red" : "border-b-grey")
              }
              placeholder="Email address"
              type="text"
            />
            {errors.email && (
              <p className="text-red text-[13px] absolute top-[20px] right-[17px]">
                Can’t be empty
              </p>
            )}
          </div>
          <div className="relative">
            <input
              {...register("password", {
                required: true,
              })}
              className={
                "bg-blue placeholder:opacity-50  mb-[10px] border-b-[1px] text-white box-border p-[16px] w-full outline-none caret-red " +
                (errors.password ? "border-b-red" : "border-b-grey")
              }
              placeholder="Password"
              type="Password"
            />
            {errors.password && (
              <p className="text-red text-[13px] absolute top-[20px] right-[17px]">
                Can’t be empty
              </p>
            )}
          </div>
          <div className="relative">
            <input
              {...register("passwordRepeat", {required: true,
                validate: (value) =>
                  value === password.current || "The password does not mutch",
              })}
              className={
                "bg-blue placeholder:opacity-50 border-b-[1px] text-white box-border p-[16px] w-full outline-none caret-red " +
                (errors.passwordRepeat ? "border-b-red" : "border-b-grey")
              }
              placeholder="repeat Password"
              type="Password"
            />
            {errors.passwordRepeat?.type === "required" && (
              <p className="text-red text-[13px] absolute top-[20px] right-[17px]">
                Can’t be empty
              </p>
            )}
          {errors.passwordRepeat && <p className="text-[13px] text-red mt-[8px] absolute">{errors.passwordRepeat.message}</p>}
          </div>
          <button
            onClick={handleSubmit(onSubmit)}
            // type="submit"
            className="text-white text-[15px] font-thin  h-[48px] bg-red w-full rounded-[6px] mt-[40px]"
          >
            Create an account
          </button>
        </form>
        <div className="flex text-[15px] font-thin	mx-auto justify-center mt-[24px] mb-[8px] ">
          <p className="text-white ">Alread have an account?</p>
          <Link to="/login" className="text-red ml-[9px]">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SighinPage;
