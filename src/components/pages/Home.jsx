import React from "react";
import Contents from "../layout/Contents";

import Slider from "../section/Slider";
import Intro from "../section/Intro";
import Portfolio from "../section/Portfolio";
import Youtube from "../section/Youtube";
import Unsplash from "../section/Unsplash";
import Movie from "../section/Movie";

const Home = () => {
  return (
    <>
      <Contents>
        <Slider attr="slider__wrap gmarket5" />
        <Intro attr="intro__wrap section gmarket5 bg-blue" />
        <Portfolio attr="port__wrap section gmarket5 center" />
        <Youtube attr="youtube__wrap gmarket5 section bg-blue" />
        <Unsplash attr="unsplash__wrap gmarket5 section" />
        <Movie attr="movie__wrap gmarket5 section bg-blue" />
      </Contents>
    </>
  );
};

export default Home;
