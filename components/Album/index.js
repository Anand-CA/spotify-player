import axios from "../../utils/axios";
import React, { useEffect } from "react";
import { useRouter } from "next/router";

function Album() {
  const router = useRouter();

  const id = router?.query?.id;

  useEffect(() => {
    axios
      .get(`/albums/${id}`)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return <div>Album</div>;
}

export default Album;
