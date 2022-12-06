import React from "react";
import iconSearch from "./../assets/icon-search.svg";
import { useForm } from "react-hook-form";

const SearchBar = (props) => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log("in Search", data);
    props.onSearch(data)
  };
  return (
    <div className="flex my-6 mx-4">
      <img className="h-[24px] w-[24px] mr-4" src={iconSearch} alt="" />
      <form onSubmit={handleSubmit(onSubmit)} action="">
        <input
          {...register("search")}
          className="bg-[#10141E] w-full text-white font-thin outline-none caret-red"
          placeholder="Search for movies or TV series"
          type="text"
        />
      </form>
    </div>
  );
};

export default SearchBar;
