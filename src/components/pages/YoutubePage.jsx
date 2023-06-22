import React, { useEffect, useState } from "react";
import Contents from "../layout/Contents";
// import YoutubeSlider from "../youtube/YoutubeSlider";
import YoutubeSearch from "../youtube/YoutubeSearch";
import YoutubeTag from "../youtube/YoutubeTag";
import YoutubeCont from "../youtube/YoutubeCont";
import ContTitle from "../layout/ContTitle";

const YoutubePage = () => {
  const [youtube, setYoutube] = useState([]);

  const search = async (query) => {
    await fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=28&q=${query}&key=AIzaSyBmD-yNiyzU1muLrsF_Gg7FKf5HgyXfxlo`
    )
      .then((response) => response.json())
      .then((result) => setYoutube(result.items))
      .catch((error) => console.log(error));
    console.log(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=28&q=${query}&key=AIzaSyBmD-yNiyzU1muLrsF_Gg7FKf5HgyXfxlo`
    );
  };

  useEffect(() => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(
      "https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=28&q=프로그래머&key=AIzaSyBmD-yNiyzU1muLrsF_Gg7FKf5HgyXfxlo",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => setYoutube(result.items))
      .catch((error) => console.log("error", error));
  }, []);

  return (
    <Contents>
      <ContTitle title="youtube" />
      {/* <YoutubeSlider /> */}
      <YoutubeSearch onSearch={search} />
      <YoutubeTag onSearch={search} />
      <YoutubeCont youtubes={youtube} />
    </Contents>
  );
};

export default YoutubePage;
