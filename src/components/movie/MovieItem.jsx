import React from "react";

const MovieItem = ({ movie }) => {
  return (
    <li>
      <a href={`https://www.themoviedb.org/movie/${movie.id}`}>
        <img
          src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
          alt={movie.title}
        />
        <em>
          <span className="title">{movie.title}</span>
          <span className="star">{movie.vote_average}</span>
        </em>
      </a>
    </li>
  );
};

export default MovieItem;
