import React, { useState, useEffect } from "react";
import data from "../data/data";
import Movie from "./movie";

const Test = (props) => {
  const [filteredContent, setFilteredContent] = useState(data);
  const [header, setHeader] = useState("Recommended for you");
  const [filterdBySearch, setFilteredBySearch] = useState(data);

  useEffect(() => {
    const filterd = filteredContent.filter((el) => {
      //if no input the return the original
      if (props.inputText === "") {
        return el;
      }
      //return the item which contains the user input
      else {
        const result = el.title.toLowerCase().includes(props.inputText);
        return result
      }
    });
    setFilteredBySearch(filterd);
    console.log(filterd);

    if (props.inputText !== "") {
     setHeader("Found "+filterd.length+" result for "+ props.input)
    }
    
  }, [props.inputText,filteredContent]);

  useEffect(() => {
     
    // content rendering logic
    if (props.contentType.home === true) {
      setFilteredContent(data);
    }
    if (props.contentType.movies === true) {
      const result = data.filter((movie) => movie.category === "Movie");
      setFilteredContent(result);
    }
    if (props.contentType.tvSeries === true) {
      const result = data.filter((movie) => movie.category === "TV Series");
      setFilteredContent(result);
    }
    if (props.contentType.bookmarks === true) {
      const result = data.filter((movie) => movie.isBookmarked === true);
      setFilteredContent(result);
    }
    // header logic 
    if (props.contentType.home === true && props.inputText.length === 0) {
      setHeader("Recommended for you");
    }
    if (props.contentType.movies === true && props.inputText.length === 0) {
      setHeader("Movies");
    }
    if (props.contentType.tvSeries === true && props.inputText.length === 0) {
      setHeader("TV Series");
    }
    if (props.contentType.bookmarks === true && props.inputText.length === 0) {
      setHeader("Bookmarked Movies");
    }
    
   
  }, [props.contentType,props.inputText]);

  // console.log("nav bar press",filteredContent)
  console.log("latest movies list",filterdBySearch)

  return (
    <div>
      <div>
        <p className="text-[20px] text-white font-thin ml-[16px] mt-6 mb-4">
          {header}
        </p>
        <div className="flex flex-wrap  ">
          {filterdBySearch.map((movie) => (
            <Movie
              key={movie.title}
              image={movie.thumbnail.regular.small}
              year={movie.year}
              category={movie.category}
              rating={movie.rating}
              isBookmarked={movie.isBookmarked}
              title={movie.title}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Test;
