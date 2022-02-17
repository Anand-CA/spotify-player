import Image from "next/image";
import React from "react";

function Player() {
  return (
    <footer className="bg-[#282828] grid grid-cols-3 col-span-2 p-3">
      {/* grid item */}
      <div className="flex self-center gap-5 items-center">
        <Image
          height={50}
          width={50}
          layout="fixed"
          src="https://i.scdn.co/image/ab67616d00001e02ff9ca10b55ce82ae553c8228"
          alt=""
        />

        <div className="">
          <h3 className="font-semibold ">One step Beyond</h3>
          <p className="opacity-60 text-sm">Madness</p>
        </div>

        <svg
          className="h-5"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            opacity="0.5"
            d="M7.6335 4.12072L8 4.51564L8.3665 4.12072L8.91212 3.53278C10.1564 2.19195 12.2047 2.15185 13.4966 3.44081C14.7985 4.7398 14.8392 6.89535 13.5853 8.24649L8.3665 13.87C8.16866 14.0832 7.83134 14.0832 7.6335 13.87L2.4147 8.24649C1.16081 6.89536 1.20146 4.7398 2.50339 3.44081C3.79527 2.15185 5.84356 2.19195 7.08788 3.53278L7.6335 4.12072Z"
            stroke="white"
            strokeLinecap="round"
          />
        </svg>

        <svg
          className="h-5"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            opacity="0.5"
            d="M1.35002 3.25V11.8H14.65V3.25H1.35002ZM1.35002 2.3H14.65C14.902 2.3 15.1436 2.40009 15.3218 2.57825C15.4999 2.75641 15.6 2.99804 15.6 3.25V12.75C15.6 13.002 15.4999 13.2436 15.3218 13.4218C15.1436 13.5999 14.902 13.7 14.65 13.7H1.35002C1.09807 13.7 0.856433 13.5999 0.678273 13.4218C0.500113 13.2436 0.400024 13.002 0.400024 12.75V3.25C0.400024 2.99804 0.500113 2.75641 0.678273 2.57825C0.856433 2.40009 1.09807 2.3 1.35002 2.3Z"
            fill="white"
          />
          <path
            opacity="0.5"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M9.90002 8H13.7V10.85H9.90002V8Z"
            fill="white"
          />
        </svg>
      </div>

      {/* grid item */}
      <div className="flex flex-col items-center gap-3">
        {/* controls */}
        <div className="flex items-center gap-6">
          <svg
            width="14"
            height="13"
            viewBox="0 0 14 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g opacity="0.6">
              <path
                d="M2.15179 6.5L12.8483 12.675L12.8483 0.324998L2.15179 6.5Z"
                fill="white"
              />
              <rect
                x="2"
                y="12"
                width="2"
                height="11"
                transform="rotate(180 2 12)"
                fill="white"
              />
            </g>
          </svg>

          <svg
            width="36"
            height="36"
            viewBox="0 0 36 36"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g opacity="0.7">
              <circle cx="18" cy="18" r="17.5" stroke="white" />
              <path
                d="M24.8482 18.5L14.1517 12.325V24.675L24.8482 18.5Z"
                fill="white"
              />
            </g>
          </svg>

          <svg
            width="14"
            height="13"
            viewBox="0 0 14 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g opacity="0.6">
              <path
                d="M11.8482 6.5L1.15173 0.325001V12.675L11.8482 6.5Z"
                fill="white"
              />
              <rect x="12" y="1" width="2" height="11" fill="white" />
            </g>
          </svg>
        </div>

        {/* progress bar */}
        <div className="flex w-full items-center gap-4 text-xs">
          <span className="opacity-60">00:00</span>
          <div className="bg-white/20 h-1.5 rounded-full  grow"></div>
          <span className="opacity-60">02:15</span>
        </div>
      </div>
    </footer>
  );
}

export default Player;
