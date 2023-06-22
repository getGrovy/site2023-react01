import React from "react";

function IntroItem() {
  return (
    <>
      <div className="desc">
        <h2>Hello getgrovy's portpolio</h2>
        <p>프론트 개발자를 꿈꾸며 하루하루 공부하고있는 getgrovy입니다.</p>
        <p>REACT로 사이트를 원페이지사이트를 만들었어요</p>
        <p>YOUTUBE API, UNSPLASH API, THEMOVEDB API를 사용하여 만들었습니다.</p>
        <p>상단의 탭을 눌러보세요 ! </p>
      </div>
      <div className="img">
        <figure className="intro__header">
          <img src="/assets/images/intro/intro.png" alt="포트폴리오" />
        </figure>
      </div>
    </>
  );
}

export default IntroItem;
