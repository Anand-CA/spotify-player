import Link from "next/link";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { getNewReleases } from "../../redux/actions/albums";

function Section() {
  const dispatch = useDispatch();
  const newReleases = useSelector((state) => state.albums.newReleases);

  useEffect(() => {
    dispatch(getNewReleases());
  }, [dispatch]);

  return (
    <div>
      <h2 className="mb-3 text-2xl">New releases</h2>

      <Swiper
        spaceBetween={20}
        slidesPerView={6}
        breakpoints={{
          1726: {
            slidesPerView: 6,
            spaceBetween: 20,
          },
          1358: {
            slidesPerView: 5,
            spaceBetween: 20,
          },

          1000: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
          320: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
        }}
      >
        {newReleases.map((a) => (
          <SwiperSlide className="z-10" key={a.id}>
            <Link passHref href={`/album/${a.id}`}>
              <div className="p-3 bg-white/10 rounded-lg">
                <img className="z-10 w-full mb-3" src={a.images[0]?.url} alt="" />
                <h3 className="mb-1">{a?.name}</h3>
                <p className="text-sm opacity-60">
                  {a.artists.map((artist) => artist.name).join(", ")}
                </p>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Section;
