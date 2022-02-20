import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPlaylist, resetPlaylist } from "../../redux/actions/playlists";
import Banner from "./Banner";
import Head from "./Head";
import Songs from "./Songs";

function Playlist() {
  const dispatch = useDispatch();
  const router = useRouter();
  const playlist = useSelector((state) => state.playlists.playlist);
  const id = router?.query?.id;

  useEffect(() => {
    id && dispatch(getPlaylist(id));

    return () => {
      dispatch(resetPlaylist());
    };
  }, [dispatch, id]);

  return (
    <div className="overflow-y-auto scrollbar-hide">
      <Head />
      <Banner playlist={playlist} />
      <Songs playlist={playlist} />

      <img
        className="fixed opacity-50 top-0 left-0 -z-10 object-cover bottom-0 w-full h-full right-0"
        src={playlist?.images[0]?.url}
        alt=""
      />
    </div>
  );
}

export default Playlist;
