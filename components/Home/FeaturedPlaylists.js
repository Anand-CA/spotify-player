import axios from "../../utils/axios";
import React, { useEffect } from "react";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
import {
  getFeaturedPlaylists,
  resetFeaturedPlaylists,
} from "../../redux/actions/playlists";
import { useDispatch, useSelector } from "react-redux";

function FeaturedPlaylists() {
  const [playlists, setPlaylists] = React.useState([]);
  const dispatch = useDispatch();
  const featuredPlaylists = useSelector(
    (state) => state.playlists.featuredPlaylists
  );
  const featuredPlaylistLoading = useSelector(
    (state) => state.playlists.featuredPlaylistLoading
  );

  useEffect(() => {
    dispatch(getFeaturedPlaylists());

    return () => {
      dispatch(resetFeaturedPlaylists());
    };
  }, [dispatch]);

  return (
    <div>
      {featuredPlaylistLoading ? (
        <div className="bg-white/10 rounded-xl animate-pulse w-36 mb-3 h-5"></div>
      ) : (
        <h2 className="mb-3 text-2xl">Featured Playlists</h2>
      )}

      <Swiper
        spaceBetween={20}
        slidesPerView={6}
        slidesPerGroup={4}
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
        {featuredPlaylistLoading
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
          : featuredPlaylists.map((a) => (
              <SwiperSlide>
                <Link key={a.id} passHref href={`/playlist/${a.id}`}>
                  <div className="p-3 select-none bg-white/5 hover:bg-white/10 rounded-lg">
                    <img
                      className="z-10 w-full mb-3"
                      src={a.images[0]?.url}
                      alt=""
                    />
                    <h3 className="mb-1">{a?.name}</h3>
                    <p className="text-sm opacity-60">{a?.description}</p>
                  </div>
                </Link>
              </SwiperSlide>
            ))}
      </Swiper>
    </div>
  );
}

export default FeaturedPlaylists;
