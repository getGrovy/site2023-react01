import React, { useState } from "react";

const movieTag = [
  {
    name: "Now Showing",
    endpoint: "movie/now_playing",
  },
  { name: "MOVE_popular", endpoint: "movie/popular" },
  { name: "MOVE_new", endpoint: "movie/upcoming" },
  { name: "TV_popular", endpoint: "tv/popular" },
  { name: "TV_new", endpoint: "tv/latest" },
];

const MovieTag = ({ onSearch }) => {
  const [activeTag, setActiveTag] = useState(movieTag[0].name); // 초기 선택된 태그

  function btnClick(e) {
    const selectedTag = movieTag.find((tag) => tag.name === e.target.innerText);
    if (selectedTag) {
      setActiveTag(selectedTag.name); // 선택된 태그 업데이트
      onSearch(selectedTag.endpoint);
    }
  }

  return (
    <div className="movie__tag gmarket5">
      <ul>
        {movieTag.map((tag, index) => (
          <li key={index}>
            <button
              onClick={btnClick}
              className={tag.name === activeTag ? "active" : ""}
            >
              {tag.name}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieTag;
