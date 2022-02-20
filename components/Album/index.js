import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAlbum, resetAlbum } from "../../redux/actions/albums";
import Banner from "./Banner";
import Head from "./Head";
import Songs from "./Songs";

function Album() {
  const router = useRouter();
  const dispatch = useDispatch();
  const id = router?.query?.id;
  const album = useSelector((state) => state.albums.album);

  useEffect(() => {
    id && dispatch(getAlbum(id));

    return () => {
      dispatch(resetAlbum());
    };
  }, [dispatch, id]);

  return (
    <div className="relative overflow-y-auto scrollbar-hide">
      <Head />
      <Banner album={album} />
      {/* <Controls /> */}
      <Songs album={album} />

      {/* bg image */}
      <div className="fixed -z-10 top-0 bottom-0 right-0 left-0">
        <img
          className="h-full opacity-50 w-full object-cover"
          src={album?.images[0]?.url}
          alt=""
        />
      </div>
    </div>
  );
}

export default Album;
