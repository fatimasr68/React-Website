import React from "react";
import teachersData from "./teachersData";
import {TeacherItem} from "../index"

import {MultiItemCarousel} from "../index";
import { SwiperSlide } from "swiper/react";

const TeachersSlider = () => {
  const swiperItems = teachersData.map((item) => {
    return (
      <SwiperSlide key={item._id}>
        <TeacherItem teacher={item} />
      </SwiperSlide>
    );
  });

  // render
  return (
    <>
      <MultiItemCarousel
        swiperItems={swiperItems}
        slidesPerView={3}
        slidesPerGroup={3}
        loop={false}
      />
    </>
  );
};

export default TeachersSlider;
