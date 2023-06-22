import React from "react";

const Portfolio = (props) => {
  return (
    <section id="portSection" className={props.attr}>
      <h3>포트폴리오 소개</h3>
      <p>웹디자이너, 웹 퍼블리셔, 프론트앤드 포트폴리오입니다</p>
      <div className="port__inner container">
        <div className="port__btn">
          <ul>
            <li className="active">
              <a href="#">21기</a>
            </li>
            <li>
              <a href="#">22기</a>
            </li>
            <li>
              <a href="#">23기</a>
            </li>
            <li>
              <a href="#">24기</a>
            </li>
          </ul>
        </div>
        <div className="port__cont">
          <div className="port">
            <figure className="port__header">
              <img
                src="./assets/images/portfolio/portfolio01.jpg"
                alt="포트폴리오"
              />
            </figure>
            <div className="port__body">
              <div className="pic">
                <img
                  src="./assets/images/portfolio/portfolioIcon01.png"
                  alt="멤버"
                />
              </div>
              <div className="title">
                <h4>김현정 포트폴리오</h4>
                <span>프론트앤드 개발자 포트폴리오</span>
              </div>
            </div>
          </div>
          <div className="port">
            <figure className="port__header">
              <img
                src="./assets/images/portfolio/portfolio02.jpg"
                alt="포트폴리오"
              />
            </figure>
            <div className="port__body">
              <div className="pic">
                <img
                  src="./assets/images/portfolio/portfolioIcon02.png"
                  alt="멤버"
                />
              </div>
              <div className="title">
                <h4>김현정 포트폴리오</h4>
                <span>프론트앤드 개발자 포트폴리오</span>
              </div>
            </div>
          </div>
          <div className="port">
            <figure className="port__header">
              <img
                src="./assets/images/portfolio/portfolio03.jpg"
                alt="포트폴리오"
              />
            </figure>
            <div className="port__body">
              <div className="pic">
                <img
                  src="./assets/images/portfolio/portfolioIcon03.png"
                  alt="멤버"
                />
              </div>
              <div className="title">
                <h4>김현정 포트폴리오</h4>
                <span>프론트앤드 개발자 포트폴리오</span>
              </div>
            </div>
          </div>
          <div className="port">
            <figure className="port__header">
              <img
                src="./assets/images/portfolio/portfolio04.jpg"
                alt="포트폴리오"
              />
            </figure>
            <div className="port__body">
              <div className="pic">
                <img
                  src="./assets/images/portfolio/portfolioIcon04.png"
                  alt="멤버"
                />
              </div>
              <div className="title">
                <h4>김현정 포트폴리오</h4>
                <span>프론트앤드 개발자 포트폴리오</span>
              </div>
            </div>
          </div>
          <div className="port">
            <figure className="port__header">
              <img
                src="./assets/images/portfolio/portfolio05.jpg"
                alt="포트폴리오"
              />
            </figure>
            <div className="port__body">
              <div className="pic">
                <img
                  src="./assets/images/portfolio/portfolioIcon05.png"
                  alt="멤버"
                />
              </div>
              <div className="title">
                <h4>김현정 포트폴리오</h4>
                <span>프론트앤드 개발자 포트폴리오</span>
              </div>
            </div>
          </div>
          <div className="port">
            <figure className="port__header">
              <img
                src="./assets/images/portfolio/portfolio06.jpg"
                alt="포트폴리오"
              />
            </figure>
            <div className="port__body">
              <div className="pic">
                <img src="./assets/images/member/memberIcon06.png" alt="멤버" />
              </div>
              <div className="title">
                <h4>김현정 포트폴리오</h4>
                <span>프론트앤드 개발자 포트폴리오</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
