import React, { useEffect, useState } from "react";
import Contents from "../layout/Contents";
import MovieSlider from "../movie/MovieSlider";
// import MovieSearch from "../movie/MovieSearch";
import MovieTag from "../movie/MovieTag";
import MovieCont from "../movie/MovieCont";
import ContTitle from "../layout/ContTitle";

const MoviePage = () => {
  const [movies, setMovies] = useState([]);

  const search = async (query) => {
    const endpoint = query;
    const apiKey = "3db0ef208fc69d8508e6827ad1312b12";
    const url = `https://api.themoviedb.org/3/${endpoint}?api_key=${apiKey}`;
    console.log(url);
    await fetch(url)
      .then((response) => response.json())
      .then((result) => setMovies(result.results))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=3db0ef208fc69d8508e6827ad1312b12"
    )
      .then((response) => response.json())
      .then((result) => setMovies(result.results))
      .catch((error) => console.log("error", error));
  }, []);

  return (
    <Contents>
      <ContTitle title="movie" />
      <MovieSlider movies={movies} />
      {/* <MovieSearch onSearch={search} /> */}
      <MovieTag onSearch={search} />
      <MovieCont movies={movies} />
    </Contents>
  );
};

export default MoviePage;
