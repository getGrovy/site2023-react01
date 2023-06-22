import React, { useState } from "react";

const youtubeTag = [
  { name: "react" },
  { name: "vue.js" },
  { name: "next.js" },
  { name: "node.js" },
  { name: "music" },
];

const YoutubeTag = ({ onSearch }) => {
  const [activeTag, setActiveTag] = useState(""); // 초기 선택된 태그 (빈 문자열로 설정)

  function btnClick(e) {
    const selectedTag = e.target.innerText;
    setActiveTag(selectedTag); // 선택된 태그 업데이트
    onSearch(selectedTag);
  }

  return (
    <div className="youtube__tag gmarket5">
      <ul>
        {youtubeTag.map((tag, index) => (
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

export default YoutubeTag;
