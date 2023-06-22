import React from "react";

function PortCont() {
  return (
    <>
      <div className="port__cont container gmarket5">
        <div className="port__card">
          <div className="cont1">
            <img src="/assets/images/portfolio/cover1.png" alt="멤버" />
            <h2>Youtube api</h2>
            <p>Youtube 데이터를 화면에 뿌려줍니다</p>
            <p>tag & 검색기능을 구현해놓았습니다</p>
          </div>
          <div className="cont2">
            <img src="/assets/images/portfolio/cover3.png" alt="멤버" />
            <h2>Unsplash api</h2>
            <p>Unsplash 데이터를 화면에 뿌려줍니다</p>
            <p>검색기능 & 슬라이드를 구현해놓았습니다</p>
          </div>
          <div className="cont3">
            <img src="/assets/images/portfolio/cover2.png" alt="멤버" />
            <h2>The movie db api</h2>
            <p>The movie db 데이터를 화면에 뿌려줍니다</p>
            <p>tag & 검색기능을 구현해놓았습니다</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default PortCont;
