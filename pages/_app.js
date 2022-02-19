import "../styles/globals.css";
import { Provider } from "react-redux";
import { useStore } from "../redux/store";
import Player from "../common/Player";
import Sidebar from "../common/Sidebar";

function MyApp({ Component, pageProps }) {
  const store = useStore(pageProps.initialReduxState);

  return (
    <Provider store={store}>
      <div className="page">
        <Sidebar />
        <Component {...pageProps} />
        <Player />
      </div>
    </Provider>
  );
}

export default MyApp;
