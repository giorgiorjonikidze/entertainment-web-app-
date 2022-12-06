import React, { useState } from "react";
import data from "../data/data";
import Movie from "./movie";



const MoviesT = () => {
 const [cont, setCont] = useState('')
    setCont("gela")
  return (
    <div>
      <p className="text-[20px] text-white font-thin ml-[16px] mt-6 mb-4">
        Recommended for you
      </p>
      <div className="flex flex-wrap  ">
        {data.map((movie) => (
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
      {console.log("movies")}
    </div>
  );
};

export default MoviesT;
