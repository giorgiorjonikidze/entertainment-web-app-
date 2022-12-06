import React, { useRef, useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import iconNavBookmark from "./../assets/icon-bookmark-empty.svg";
import iconNavMovies from "./../assets/icon-category-movie.svg";

import data from "./../data/data";
import TrendingMovie from "./trendingMovie";

const Slider = () => {
  return (
    <>
      <p className="text-[20px] text-white mb-[16px] ml-4">Trending</p>

      <Splide
        options={{
          drag: true,
          perPage: "max",
          pagination: false,
          arrows: false,
          rewind: false,
          gap: "1rem",
        }}
      >
        {data.map((movie) => (
          <SplideSlide>
            <TrendingMovie
              key={movie.title}
              image={movie.thumbnail.trending?.small}
              year={movie.year}
              category={movie.category}
              rating={movie.rating}
              isBookmarked={movie.isBookmarked}
              title={movie.title}
            />
          </SplideSlide>
        ))}
      </Splide>
    </>
  );
};

export default Slider;
