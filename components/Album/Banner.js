import React from "react";
import { useSelector } from "react-redux";

function Banner() {
  const album = useSelector((state) => state.albums.album);

  return (
    <div className="py-32 px-5 relative flex items-end gap-6">
      {/* <img src={album.images[1]?.url} alt="" /> */}
      {/* content */}
      <div className="">
        <p className="uppercase text-xs mb-3">Album</p>
        <h1 className="text-6xl font-black mb-1">{album?.name}</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, veniam.
        </p>
      </div>

      {/* fade */}
      <div
        style={{
          background:
            "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, hsl(0, 0%, 0%) 180%)",
        }}
        className="absolute top-0 left-0 bottom-0 right-0"
      />
    </div>
  );
}

export default Banner;