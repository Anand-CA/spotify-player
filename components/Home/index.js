import axios from "../../utils/axios";
import React, { useEffect } from "react";
import Head from "./Head";
import Section from "./Section";
import FeaturedPlaylists from "./FeaturedPlaylists";

function Home() {
  return (
    <div className="overflow-y-auto scrollbar-hide">
      <Head />

      <div className="py-3 mt-8 px-5 space-y-4 sm:space-y-8">
        <Section />
        <FeaturedPlaylists />
      </div>
    </div>
  );
}

export default Home;
