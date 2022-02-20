import axios from "../../utils/axios";
import React, { useEffect } from "react";
import Head from "./Head";
import Section from "./Section";
import { useDispatch, useSelector } from "react-redux";

import { getNewReleases, resetNewReleases } from "../../redux/actions/albums";
import {
  getFeaturedPlaylists,
  resetFeaturedPlaylists,
} from "../../redux/actions/playlists";
import { FeaturedPlaylists, NewReleases } from "./sectionData";

function Home() {
  const dispatch = useDispatch();

  const newReleases = useSelector((state) => state.albums.newReleases);
  const newReleaseLoading = useSelector(
    (state) => state.albums.newReleaseLoading
  );
  const featuredPlaylists = useSelector(
    (state) => state.playlists.featuredPlaylists
  );
  const featuredPlaylistLoading = useSelector(
    (state) => state.playlists.featuredPlaylistLoading
  );

  useEffect(() => {
    dispatch(getNewReleases());
    dispatch(getFeaturedPlaylists());

    return () => {
      dispatch(resetNewReleases());
      dispatch(resetFeaturedPlaylists());
    };
  }, [dispatch]);

  return (
    <div className="overflow-y-auto scrollbar-hide">
      <Head />

      <div className="py-3 mt-8 px-5 space-y-4 sm:space-y-8">
        <Section
          title="New releases"
          data={NewReleases(newReleases)}
          loading={newReleaseLoading}
        />
        <Section
          title="Featured playlists"
          data={FeaturedPlaylists(featuredPlaylists)}
          loading={featuredPlaylistLoading}
        />
      </div>
    </div>
  );
}

export default Home;
