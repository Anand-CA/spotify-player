import React from "react";
import { Lazy } from "swiper";
import "swiper/css";
import "swiper/css/lazy";

import { Swiper, SwiperSlide } from "swiper/react";

function Section({ title, data, loading }) {
  return (
    <div>
      {loading ? (
        <div className="bg-white/10 rounded-xl animate-pulse w-36 mb-3 h-5"></div>
      ) : (
        <h2 className="mb-3 text-lg sm:text-2xl">{title}</h2>
      )}

      <Swiper
        spaceBetween={20}
        slidesPerView={6}
        lazy={true}
        modules={[Lazy]}
        breakpoints={{
          1726: {
            slidesPerView: 6,
            spaceBetween: 20,
            slidesPerGroup: 6,
          },
          1358: {
            slidesPerView: 5,
            slidesPerGroup: 5,
            spaceBetween: 20,
          },
          1210: {
            slidesPerView: 4,
            slidesPerGroup: 4,
            spaceBetween: 20,
          },
          746: {
            slidesPerView: 3,
            slidesPerGroup: 3,
            spaceBetween: 20,
          },
          320: {
            slidesPerView: 2,
            slidesPerGroup: 2,
            spaceBetween: 10,
          },
        }}
      >
        {loading
          ? Array(6)
              .fill()
              .map((_, i) => (
                <SwiperSlide key={i}>
                  <div className="bg-white/10 rounded-lg p-3 space-y-3">
                    <div className="animate-pulse h-44 bg-white/10" />
                    <div className="h-4 w-20 rounded-xl bg-white/10" />
                    <div className="h-3 w-16 rounded-xl bg-white/10" />
                  </div>
                </SwiperSlide>
              ))
          : data}
      </Swiper>
    </div>
  );
}

export default Section;
