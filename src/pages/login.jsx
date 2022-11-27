import React from "react";
import movieLogo from "./../assets/logo.svg";

const LoginPage = () => {
  return (
    <div className="w-screen flex flex-col items-center box-border pb-[170px]">
      <img className="w-[32px] mt-[48px] mb-[58px]" src={movieLogo} />
      <div className="w-[327px]  bg-blue rounded-[10px] box-border p-[24px]">
        <p className="text-white text-[32px] font-outfit font-light">Login</p>
        <form className="mt-[25px]">
          <input
            className="bg-blue placeholder:opacity-50  border-b-grey border-b-[1px] mb-[10px] text-white box-border p-[16px] w-full outline-none caret-red"
            placeholder="Email address"
            type="text"
          />
          <input
            className="bg-blue placeholder:opacity-50 border-b-grey border-b-[1px] text-white box-border p-[16px] w-full outline-none caret-red"
            placeholder="Password"
            type="text"
          />
        </form>
        <button className="text-white text-[15px] font-thin h-[48px] bg-red w-full rounded-[6px] mt-[40px]">Login to your account</button>
        <div className="flex text-[15px] font-thin	mx-auto justify-center mt-[24px] mb-[8px]">
            <p className="text-white ">Don’t have an account?</p>
            <button className="text-red ml-[9px]">Sign Up</button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
