import React from "react";

import iconBookmarkEmpty from "./../assets/icon-bookmark-empty.svg";
import iconBookmarkfull from "./../assets/icon-bookmark-full.svg";
import iconNavMovies from "./../assets/icon-category-movie.svg";

const Movie = ({ image, year, category, rating, isBookmarked, title }) => {
  return (
    <div className="inline-block relative my-[8px] ml-[16px]">
      <img
        className="w-[164px] h-[110px] object-cover rounded-[8px]"
        src={process.env.PUBLIC_URL + image}
      />
      <div className="h-[32px] w-[32px] rounded-full bg-blue bg-opacity-50 flex items-center justify-center absolute top-[8px] right-[8px]">
        {isBookmarked ? (
          <img src={iconBookmarkEmpty} />
        ) : (
          <img src={iconBookmarkfull} />
        )}
      </div>
      <div className="mt-[8px]">
        <div className="text-[12px] font-thin text-white flex items-center opacity-75">
          <span>{year} </span>
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

export default Movie;
