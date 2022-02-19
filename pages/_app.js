import "../styles/globals.css";
import { Provider } from "react-redux";
import { useStore } from "../redux/store";
import Player from "../common/Player";
import Sidebar from "../common/Sidebar";
import Head from "next/head";
import { useRouter } from "next/router";

function MyApp({ Component, pageProps }) {
  const store = useStore(pageProps.initialReduxState);
  const router = useRouter();

  return (
    <>
      <Head>
        <link rel="icon" href="/spotify-logo.png" />
      </Head>

      <Provider store={store}>
        {router.pathname === "/login" ? (
          <Component {...pageProps} />
        ) : (
          <div className="page">
            <Sidebar />
            <Component {...pageProps} />
            <Player />
          </div>
        )}
      </Provider>
    </>
  );
}

export default MyApp;
