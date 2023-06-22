import React from "react";

const YoutubeImg = ({ youtube }) => {
  return (
    <li>
      <a href={`https://www.youtube.com/watch?v=${youtube.id.videoId}`}>
        <img
          src={youtube.snippet.thumbnails.medium.url}
          alt={youtube.snippet.title}
        />
      </a>
    </li>
  );
};

const YoutubeCont = ({ youtubes }) => {
  return (
    <div className="youtube__cont container">
      <ul>
        {youtubes.map((youtube, index) => (
          <YoutubeImg key={index} youtube={youtube} />
        ))}
      </ul>
    </div>
  );
};

export default YoutubeCont;
