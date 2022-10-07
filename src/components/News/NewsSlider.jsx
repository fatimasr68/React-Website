import React from "react";
import newsData from "./newsData";
import { NewsItem } from "../index";
import { Row, Col } from "react-bootstrap";

import { MultiItemCarousel } from "../index";
import { SwiperSlide } from "swiper/react";

const NewsSlider = () => {
  const swiperItems = newsData.map((item) => {
    return (
      <SwiperSlide key={item._id}>
        <NewsItem news={item} />
      </SwiperSlide>
    );
  });

  return (
    <>
      <MultiItemCarousel
        swiperItems={swiperItems}
        slidesPerView={2}
        slidesPerGroup={2}
        navigation={false}
        grid={{ rows: 1 }}
        className={"navigation-false"}
      />
    </>
  );
};

export default NewsSlider;
