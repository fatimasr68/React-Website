import React from "react";
import "./MultiItemCarousel.css";
import { Swiper } from "swiper/react";
import { Pagination, Navigation, Grid } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const MultiItemCarousel = ({
  swiperItems,
  slidesPerView = 3,
  slidesPerGroup = 1,
  spaceBetween = 20,
  navigation = true,
  loop = true,
  className = "",
  pagination = {
    clickable: true,
  },
  grid = { rows: 1 },
}) => {
  const swiperParams = {
    observer: true,
    loopFillGroupWithBlank: true,
    watchSlidesProgress: true,
    grabCursor: true,
    autoplay: { delay: 1000 },

    breakpoints: {
      300: {
        slidesPerView: 1,
        slidesPerGroup: 1
      },
      640: {
        slidesPerView: 1,
        slidesPerGroup: 1
      },
      768: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 20,
      },
      1024: {
        // slidesPerView: 3,
        spaceBetween: 20,
      },
    },

    className: "customSwiper",
    // modules: [Pagination, Navigation],
    modules: [Grid, Pagination, Navigation],
  };

  return (
    <>
      <Swiper
        {...swiperParams}
        slidesPerView={slidesPerView}
        slidesPerGroup={slidesPerGroup}
        spaceBetween={spaceBetween}
        navigation={navigation}
        loop={loop}
        pagination={pagination}
        grid={grid}
        className={className}
      >
        {swiperItems}
      </Swiper>
    </>
  );
};

export default MultiItemCarousel;
