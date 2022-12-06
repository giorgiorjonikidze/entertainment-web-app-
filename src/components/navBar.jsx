import React, { useState, useEffect } from "react";
import movieLogo from "./../assets/logo.svg";
import iconNavBookmark from "./../assets/icon-nav-bookmark.svg";
import iconNavHome from "./../assets/icon-nav-home.svg";
import iconNavMovies from "./../assets/icon-nav-movies.svg";
import iconNavSeries from "./../assets/icon-nav-tv-series.svg";
import avatar from "./../assets/image-avatar.png";

import iconNavBookmarkWhite from "./../assets/icon-nav-bookmark-white.svg";
import iconNavHomeWhite from "./../assets/icon-nav-home-white.svg";
import iconNavMoviesWhite from "./../assets/icon-nav-movies-white.svg";
import iconNavSeriesWhite from "./../assets/icon-nav-tv-series-white.svg";

const NavBar = (props) => {
  const [activeNavIcon, setActiveNavIcon] = useState({
    home: true,
    movies: false,
    tvSeries: false,
    bookmarks: false,
  });
  const navChange = (e) => {
    // props.navChanger(e.target.id);
    if (e.target.id === "home") {
      setActiveNavIcon({
        home: true,
        movies: false,
        tvSeries: false,
        bookmarks: false,
      });
      // props.navChanger("home")
    }
    if (e.target.id === "Movie") {
      setActiveNavIcon({
        home: false,
        movies: true,
        tvSeries: false,
        bookmarks: false,
      });
      // props.navChanger( "Movie")
    }
    if (e.target.id === "TV Series") {
      setActiveNavIcon({
        home: false,
        movies: false,
        tvSeries: true,
        bookmarks: false,
      });
      // props.navChanger("TV Series")
    }
    if (e.target.id === "bookmarks") {
      setActiveNavIcon({
        home: false,
        movies: false,
        tvSeries: false,
        bookmarks: true,
      });
      // props.navChanger("bookmarks")
    }
  };
  useEffect(() => {
    props.navChanger(activeNavIcon);
  }, [activeNavIcon]);

  return (
    <div className="flex justify-between h-[56px] bg-blue box-border px-[16px] items-center">
      <img className="w-[25px] h-[20px]" src={movieLogo} alt="" />
      <div className="flex h-[16px] w-[140px] justify-between">
        <button onClick={navChange} className="w-4 h-4">
          <img
            className="w-4 h-4 "
            src={activeNavIcon.home ? iconNavHomeWhite : iconNavHome}
            id="home"
          />
        </button>

        <button onClick={navChange} className="w-4 h-4">
          <img
            className="w-4 h-4"
            src={activeNavIcon.movies ? iconNavMoviesWhite : iconNavMovies}
            id="Movie"
          />
        </button>

        <button onClick={navChange} className="w-4 h-4">
          <img
            className=" w-4 h-4"
            src={activeNavIcon.tvSeries ? iconNavSeriesWhite : iconNavSeries}
            id="TV Series"
          />
        </button>

        <button onClick={navChange} className="w-4 h-4">
          <img
            className="w-4 h-4"
            src={
              activeNavIcon.bookmarks ? iconNavBookmarkWhite : iconNavBookmark
            }
            id="bookmarks"
          />
        </button>
      </div>
      <img
        className="w-[24px] h-[24px] border-[1px] border-white rounded-full"
        src={avatar}
        alt=""
      />
    </div>
  );
};

export default NavBar;
