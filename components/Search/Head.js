import Image from "next/image";
import React from "react";

function Head({ query, setQuery }) {
  return (
    <div className="px-5 py-2 flex backdrop-blur-lg items-center sticky top-0 gap-3">
      {/* left */}
      <div className="flex items-center gap-3 flex-1">
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

        {/* search bar */}
        <div className="bg-white flex ml-1 items-center gap-2 p-2 rounded-full w-full max-w-xs">
          <svg
            className="h-5"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M29.3008 28.1934L37.4721 37.782L36.0548 39L27.8613 29.4114C25.0416 31.552 21.8675 32.6223 18.3391 32.6223C16.1984 32.6223 14.1501 32.2052 12.194 31.3711C10.238 30.537 8.55498 29.4151 7.14505 28.0052C5.73512 26.5953 4.61314 24.9123 3.7791 22.9562C2.94506 21.0001 2.52801 18.9518 2.52795 16.8111C2.5279 14.6705 2.94494 12.6222 3.7791 10.6661C4.61326 8.70995 5.73524 7.02696 7.14505 5.61709C8.55486 4.20723 10.2378 3.08524 12.194 2.25115C14.1502 1.41705 16.1985 1 18.3391 1C20.4797 1 22.528 1.41705 24.4842 2.25115C26.4403 3.08524 28.1233 4.20723 29.5331 5.61709C30.943 7.02696 32.0649 8.70995 32.8991 10.6661C33.7333 12.6222 34.1503 14.6705 34.1502 16.8111C34.1502 19.0108 33.7221 21.0924 32.8659 23.0559C32.0096 25.0194 30.8212 26.7319 29.3006 28.1934L29.3008 28.1934ZM18.3393 30.7621C20.8637 30.7621 23.1963 30.1383 25.3369 28.8908C27.4776 27.6433 29.1717 25.9492 30.4191 23.8086C31.6666 21.668 32.2903 19.3355 32.2904 16.811C32.2905 14.2865 31.6667 11.9539 30.4191 9.8133C29.1716 7.67269 27.4775 5.97866 25.3369 4.7312C23.1964 3.48375 20.8638 2.86002 18.3393 2.86002C15.8147 2.86002 13.4822 3.48375 11.3416 4.7312C9.20105 5.97866 7.50702 7.67269 6.25951 9.8133C5.01199 11.9539 4.38827 14.2865 4.38832 16.811C4.38838 19.3355 5.01211 21.668 6.25951 23.8086C7.5069 25.9492 9.20094 27.6433 11.3416 28.8908C13.4823 30.1383 15.8148 30.7621 18.3393 30.7621Z"
              fill="black"
            />
          </svg>

          <input
            type="text"
            className="text-black outline-none flex-1"
            placeholder="Artists, songs, or albums"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
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
