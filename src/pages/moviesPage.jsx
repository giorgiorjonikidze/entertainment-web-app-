import React, { Fragment } from "react";
import SearchBar from "../components/searchBar";
import NavBar from "./../components/navBar";
import Slider from "./../components/slider";
import Movies from "./../components/movies";
import { useState } from "react";
import Test from './../components/test';

const MoviesPage = (props) => {
  const [contentTypeHandler, setContentType] = useState(true);
  const [searchInput, setSearchInput] = useState("")
  const navChangerHandler = (data) => {
    setContentType(data);
  };

  const searchHandler = (data) => {
    console.log("searched", data.search)
    setSearchInput(data.search)
  }

  return (
    <Fragment>
      <NavBar 
      navChanger={navChangerHandler}  
      />
      <SearchBar onSearch={searchHandler} />
      {/* <Slider /> */}

       <Test contentType={contentTypeHandler} inputText={searchInput}  />
    </Fragment>
  );
};

export default MoviesPage;
