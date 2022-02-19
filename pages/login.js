import Head from "next/head";
import axios from "axios";
import { useEffect } from "react";
import { useRouter } from "next/router";

export default function login() {
  const router = useRouter();

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("token"));
    token && router.push("/");
  }, [router]);

  const handleLogin = () => {
    var myHeaders = new Headers();
    myHeaders.append(
      "Authorization",
      "Basic " +
        new Buffer(
          "3379b41787bf4903b57dbbf703f48016" +
            ":" +
            "718ede135a544ad781004897bf6d0e64"
        ).toString("base64")
    );

    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

    var urlencoded = new URLSearchParams();
    urlencoded.append("grant_type", "client_credentials");

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: urlencoded,
      redirect: "follow",
    };

    fetch("https://accounts.spotify.com/api/token", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        localStorage.setItem("token", JSON.stringify(result));
        router.push("/");
      })
      .catch((error) => console.log("error", error));
  };

  return (
    <>
      <Head>
        <title>login</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="grid h-screen place-items-center">
        <div className="p-5 flex flex-col items-center gap-5">
          <img
            className="animate-pulse max-w-xs w-full px-5 object-contain"
            src="/spotify-logo.png"
            alt=""
          />
          <button
            className="py-2 active:ring-2 ring-green-500 max-w-fit px-10 rounded-full bg-[#66D36E]"
            onClick={handleLogin}
          >
            Login
          </button>
        </div>
      </div>
    </>
  );
}
