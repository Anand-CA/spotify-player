import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";

function Head() {
  const router = useRouter();

  return (
    <div className="px-5 py-2 flex backdrop-blur-lg items-center sticky top-0 justify-between">
      {/* left */}
      <div className="flex items-center gap-3">
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          onClick={() => router.back()}
        >
          <circle cx="16" cy="16" r="16" fill="#030303" />
          <path
            opacity="0.7"
            d="M19.1728 23.6L10.2734 16L19.1728 8.40002L19.7266 9.04756L11.5855 16L19.7266 22.9525"
            fill="white"
          />
        </svg>

        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="16" cy="16" r="16" fill="#030303" />
          <path
            opacity="0.7"
            d="M12.8272 23.6L12.2734 22.9525L20.4145 16L12.2734 9.04756L12.8272 8.40002L21.7266 16"
            fill="white"
          />
        </svg>
      </div>

      {/* avatar div */}
      <div className="bg-white/10 flex items-center gap-2 rounded-full py-1 px-1.5">
        <Image
          height={33}
          width={33}
          className="rounded-full"
          layout="fixed"
          src="/avatar.jfif"
          alt="avatar"
        />
        <p className="opacity-60 mr-2">Arthur Guillermin Ha</p>
      </div>
    </div>
  );
}

export default Head;
