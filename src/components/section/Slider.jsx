import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper";
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";

const Slider = (props) => {
  return (
    <section id="sliderSection" className={props.attr}>
      <div className="slider__inner">
        <h2 className="blind">배너 슬라이드</h2>
        <div className="slider__img">
          <Swiper
            loop={true}
            autoplay={{
              delay: 5000,
              disableOnInteraction: true,
            }}
            pagination={{ clickable: true }}
            navigation={true}
            modules={[Autoplay, Navigation, Pagination]}
          >
            <SwiperSlide>
              <div className="slider s1 container">
                <div className="text">
                  <h3>
                    New
                    <br />
                    portfolio
                  </h3>
                  <p>
                    재능은! 노력 끝에서 발견된다.
                    <br />
                    어떤 일이라도 노력하고 즐기면 그 결과는 빛을 바란다고
                    생각합니다.
                  </p>
                  <a href="#" className="more button-red">
                    더 알아보기
                  </a>
                </div>
                <div className="img" aria-label="hidden">
                  <img
                    src="./assets/images/slider/sliderIcon1.png"
                    alt="이미지1"
                  />
                  <img
                    src="./assets/images/slider/sliderIcon2.png"
                    alt="이미지2"
                  />
                  <img
                    src="./assets/images/slider/sliderIcon3.png"
                    alt="이미지3"
                  />
                </div>
                <div className="circle" aria-label="hidden">
                  <span className="circle c1"></span>
                  <span className="circle c2"></span>
                  <span className="circle c3"></span>
                  <span className="circle c4"></span>
                  <span className="circle c5"></span>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="slider s1 container">
                <div className="text">
                  <h3>
                    New
                    <br />
                    portfolio
                  </h3>
                  <p>
                    재능은! 노력 끝에서 발견된다.
                    <br />
                    어떤 일이라도 노력하고 즐기면 그 결과는 빛을 바란다고
                    생각합니다.
                  </p>
                  <a href="#" className="more button-red">
                    더 알아보기
                  </a>
                </div>
                <div className="img" aria-label="hidden">
                  <img
                    src="./assets/images/slider/sliderIcon1.png"
                    alt="이미지1"
                  />
                  <img
                    src="./assets/images/slider/sliderIcon2.png"
                    alt="이미지2"
                  />
                  <img
                    src="./assets/images/slider/sliderIcon3.png"
                    alt="이미지3"
                  />
                </div>
                <div className="circle" aria-label="hidden">
                  <span className="circle c1"></span>
                  <span className="circle c2"></span>
                  <span className="circle c3"></span>
                  <span className="circle c4"></span>
                  <span className="circle c5"></span>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="slider s1 container">
                <div className="text">
                  <h3>
                    New
                    <br />
                    portfolio
                  </h3>
                  <p>
                    재능은! 노력 끝에서 발견된다.
                    <br />
                    어떤 일이라도 노력하고 즐기면 그 결과는 빛을 바란다고
                    생각합니다.
                  </p>
                  <a href="#" className="more button-red">
                    더 알아보기
                  </a>
                </div>
                <div className="img" aria-label="hidden">
                  <img
                    src="./assets/images/slider/sliderIcon1.png"
                    alt="이미지1"
                  />
                  <img
                    src="./assets/images/slider/sliderIcon2.png"
                    alt="이미지2"
                  />
                  <img
                    src="./assets/images/slider/sliderIcon3.png"
                    alt="이미지3"
                  />
                </div>
                <div className="circle" aria-label="hidden">
                  <span className="circle c1"></span>
                  <span className="circle c2"></span>
                  <span className="circle c3"></span>
                  <span className="circle c4"></span>
                  <span className="circle c5"></span>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Slider;
