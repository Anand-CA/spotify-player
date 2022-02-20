import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";

export const FeaturedPlaylists = (featuredPlaylists) => {
  return featuredPlaylists.map((a) => (
    <SwiperSlide key={a.id}>
      <Link passHref href={`/playlist/${a.id}`}>
        <div className="p-3 select-none bg-white/5 hover:bg-white/10 rounded-lg">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className="z-10 w-full mb-3" src={a.images[0]?.url} alt="" />
          <h3 className="mb-1 text-sm sm:text-base">{a?.name}</h3>
          <p className="text-xs sm:text-sm opacity-60">{a?.description}</p>
        </div>
      </Link>
    </SwiperSlide>
  ));
};

export const NewReleases = (newReleases) => {
  return newReleases.map((a) => (
    <SwiperSlide className="z-10" key={a.id}>
      <Link passHref href={`/album/${a.id}`}>
        <div className="p-3 bg-white/5 hover:bg-white/10 rounded-lg">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className="z-10 w-full mb-3" src={a.images[0]?.url} alt="" />
          <h3 className="mb-1 text-sm sm:text-base">{a?.name}</h3>
          <p className="text-xs sm:text-sm opacity-60">
            {a.artists.map((artist) => artist.name).join(", ")}
          </p>
        </div>
      </Link>
    </SwiperSlide>
  ));
};
