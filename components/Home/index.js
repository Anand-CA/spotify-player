import React from "react";
import Head from "./Head";
import Section from "./Section";

function Home() {
  return (
    <div className="overflow-y-auto scrollbar-hide">
      <Head />

      <div className="px-5 pb-4 space-y-8">
        <Section />
        <Section />
        <Section />
        <Section />
      </div>
    </div>
  );
}

export default Home;
