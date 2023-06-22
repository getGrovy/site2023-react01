import React from "react";

const Youtube = (props) => {
  return (
    <section id="youtubeSection" className={props.attr}>
      <div className="youtube__inner container">
        <div className="youtube__text">
          <h3>코딩 유튜버 추천</h3>
          <p>
            더 다양한 강의는 유튜브를 통해 제공하고 있습니다. <br />
            구독과 좋아요! 부탁드립니다.
          </p>
          <a href="#" className="button-red">
            자세히 보기
          </a>
        </div>
        <div className="youtube__item">
          <div>
            <img src="/assets/images/youtube/youtube01.jpg" alt="유투브" />
          </div>
          <div>
            <img src="/assets/images/youtube/youtube02.jpg" alt="유투브" />
          </div>
          <div>
            <img src="/assets/images/youtube/youtube03.jpg" alt="유투브" />
          </div>
          <div>
            <img src="/assets/images/youtube/youtube04.jpg" alt="유투브" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Youtube;
