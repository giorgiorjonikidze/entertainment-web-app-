import React, { Fragment } from "react";
import data from "./../data/data";
import iconBookmarkEmpty from "./../assets/icon-bookmark-empty.svg";
import iconBookmarkfull from "./../assets/icon-bookmark-full.svg";
import iconNavMovies from "./../assets/icon-category-movie.svg";

const TrendingMovie = ({image,year,category, rating, isBookmarked,title}) => {
  return (
    <div className="relative">
      <img
        className="h-[140px] w-[240px] rounded-[8px] l-[16px]"
        src={process.env.PUBLIC_URL + image}
        alt=""
      />
      <div className="h-[32px] w-[32px] rounded-full bg-blue bg-opacity-50 flex items-center justify-center absolute top-[8px] left-[200px]">
        {isBookmarked ? <img src={iconBookmarkEmpty} /> : <img src={iconBookmarkfull} />}
      </div>
      <div className="absolute top-[86px] left-[16px]">
        <div className="text-[12px] font-thin text-white flex items-center opacity-75">
          <span>{year}</span>
          <div className="h-[3px] w-[3px] bg-white rounded-full mx-[8px]"></div>
          <img className="w-[12px] h-[12px]" src={iconNavMovies} alt="" />
          <p className="ml-[6px]">{category}</p>
          <div className="h-[3px] w-[3px] bg-white rounded-full mx-[8px]"></div>
          <p>{rating}</p>
        </div>
        <p className="text-[15px] text-white">{title}</p>
      </div>
    </div>
  );
};

export default TrendingMovie;
