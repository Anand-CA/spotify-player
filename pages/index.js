import Head from "next/head";
import Player from "../common/Player";
import Sidebar from "../common/Sidebar";
import Home from "../components/Home";

export default function home() {
  return (
    <div className="page">
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Sidebar />
      <Home />
      <Player />
    </div>
  );
}
