import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import SwiperCore, { Autoplay, EffectCoverflow } from "swiper";

SwiperCore.use([Autoplay]);

const UnsplashImg = ({ undata }) => {
  return (
    <a href={`https://unsplash.com/photos/${undata.id}`}>
      <img src={undata.urls.full} alt={undata.alt_description} />
    </a>
    // console.log(undata)
  );
};

const UnsplashSlider = ({ unsplashImg }) => {
  return (
    <div className="unsplash__slider container">
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"5"}
        initialSlide="3"
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        // pagination={true}
        modules={[EffectCoverflow, Autoplay]}
        // modules={[EffectCoverflow, Pagination, Autoplay]}
        className="mySwiper"
      >
        {unsplashImg.map((unsplashImg, index) => (
          <SwiperSlide key={index}>
            <UnsplashImg key={index} undata={unsplashImg} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default UnsplashSlider;
