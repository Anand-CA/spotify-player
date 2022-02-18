import axios from "axios";
import React, { useEffect } from "react";
import { getNewReleases } from "../../redux/actions/albums";
import { useDispatch, useSelector } from "react-redux";
import Image from "next/image";
import Link from "next/link";

function Section() {
  const dispatch = useDispatch();
  const newReleases = useSelector((state) => state.albums.newReleases);

  useEffect(() => {
    dispatch(getNewReleases());
  }, [dispatch]);

  return (
    <div>
      <h2 className="mb-3 text-2xl">New releases</h2>

      {/* grid */}
      <div className="grid grid-flow-col xl:auto-cols-[15%] md:auto-cols-[31%] gap-4 overflow-auto scrollbar-hide">
        {newReleases.map((a) => (
          <Link key={a.id} passHref href={`/album/${a.id}`}>
            <div className="p-3 bg-white/10 rounded-lg">
              <img className="w-full mb-3" src={a.images[0]?.url} alt="" />

              {/* <Image
              layout="responsive"
              src={a.images[0]?.url}
              alt="Picture of the author"
              width={500}
              height={500}
            /> */}
              <h3 className="mb-1">{a?.name}</h3>
              <p className="text-sm opacity-60">
                {a.artists.map((artist) => artist.name).join(", ")}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Section;
