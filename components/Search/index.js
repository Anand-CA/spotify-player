import axios from "../../utils/axios";
import React, { useEffect, useState } from "react";
import Head from "./Head";
import { useDispatch, useSelector } from "react-redux";
import TrackCard from "./TrackCard";

function Search() {
  const [categories, setCategories] = useState([]);
  const [query, setQuery] = useState("");
  const [queryResult, setQueryResult] = useState({
    artists: [],
    tracks: [],
    albums: [],
  });

  useEffect(() => {
    axios
      .get(`/browse/categories`)
      .then((res) => {
        console.log(res.data.categories.items);
        setCategories(res.data.categories.items);
      })
      .catch((err) => {
        console.log(err.response.data);
      });

    return () => {};
  }, []);

  useEffect(() => {
    if (query) {
      axios
        .get(`/search?q=${query}&type=track,album,artist`)
        .then((res) => {
          console.log(res.data);
          setQueryResult({
            ...queryResult,
            artists: res.data.artists.items,
            tracks: res.data.tracks.items,
            albums: res.data.albums.items,
          });
        })
        .catch((err) => {
          console.log(err.response.data);
        });
    }

    return () => {};
  }, [query]);

  return (
    <div className="overflow-y-auto scrollbar-hide">
      <Head query={query} setQuery={setQuery} />

      {query != "" ? (
        <div>
          {queryResult.tracks.map((t) => (
            <TrackCard t={t} />
          ))}
        </div>
      ) : (
        <div className="grid mt-10 py-5 px-5 grid-cols-5 gap-5">
          {categories.map((c) => (
            <div>
              <img
                className="w-full object-cover"
                src={c.icons[0].url}
                alt=""
              />
            </div>
          ))}
        </div>
      )}

      {/* categories grid */}

      {/* query result */}
    </div>
  );
}

export default Search;
