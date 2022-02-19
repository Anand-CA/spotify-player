import axios from "../../utils/axios";
import React, { useEffect } from "react";
import { useRouter } from "next/router";
import Head from "./Head";
import Banner from "./Banner";
import Controls from "./Controls";
import Songs from "./Songs";
import { getAlbum, resetAlbum } from "../../redux/actions/albums";
import { useDispatch, useSelector } from "react-redux";

function Album() {
  const router = useRouter();
  const dispatch = useDispatch();
  const album = useSelector((state) => state.albums.album);

  const id = router?.query?.id;

  useEffect(() => {
    dispatch(getAlbum(id));

    return () => {
      dispatch(resetAlbum());
    };
  }, [dispatch, id]);

  return (
    <div
      //   style={{
      //     background: `url(${album.images[0].url}) no-repeat center / cover`,
      //   }}
      className="overflow-y-auto scrollbar-hide"
    >
      <Head />
      <Banner />
      {/* <Controls /> */}
      <Songs />
    </div>
  );
}

export default Album;
