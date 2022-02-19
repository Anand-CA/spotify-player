import axios from "../../utils/axios";
import React, { useEffect, useState } from "react";
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
  // const album = useSelector((state) => state.albums.album);
  const [album, setAlbum] = useState(null);
  const [id, setId] = useState(router.query.id);

  useEffect(() => {
    if (id) {
      axios.get(`/albums/${id}`).then((res) => {
        setAlbum(res.data);
      });
    }

    return () => {
      setAlbum(null);
    };
  }, [id]);

  console.log(album);

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
