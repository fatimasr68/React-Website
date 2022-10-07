import React from "react";
import coursesData from "./coursesData";
import { CourseItem } from "../index";

import { MultiItemCarousel } from "../index";
import { SwiperSlide } from "swiper/react";

const CoursesSlider = () => {
  const swiperItems = coursesData.map((item) => {
    return (
      <SwiperSlide key={item._id}>
        <CourseItem course={item} />
      </SwiperSlide>
    );
  });

  return (
    <>
      <MultiItemCarousel
        swiperItems={swiperItems}
        pagination={false}
        slidesPerView={3}
        className={"pagination-false"}
      />
    </>
  );
};

export default CoursesSlider;
