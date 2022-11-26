import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

function Sidebar() {
  const active = false;
  const router = useRouter();

  return (
    <aside className="bg-[#030303] py-5 hidden lg:block overflow-y-auto scrollbar-hide">
      <svg
        className="h-12 ml-8 mb-6"
        viewBox="0 0 177 53"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1.24878 26.6559C1.24878 40.9971 13.1112 52.8441 27.471 52.8441C41.8308 52.8441 53.6932 40.9971 53.6932 26.6559C53.6932 12.3147 41.8308 0.623535 27.471 0.623535C13.1112 0.623535 1.24878 12.3147 1.24878 26.6559ZM37.1483 38.8147C31.061 35.0735 23.2567 34.1382 14.2038 36.1647C12.0186 36.4765 11.7065 33.3588 13.5795 33.0471C23.5689 30.7088 31.9975 31.8 38.8652 36.0088C40.5821 37.1 38.8652 39.75 37.1483 38.8147ZM39.8017 31.8C32.7779 27.4353 22.008 26.1882 13.7356 28.6824C11.0821 29.4618 10.1456 25.4088 12.643 24.7853C22.1641 21.9794 33.8705 23.3824 41.9869 28.3706C44.1721 29.7735 41.9869 33.2029 39.8017 31.8ZM12.4869 20.7324C9.83344 21.6677 8.1165 17.1471 11.0821 16.0559C20.2911 13.25 35.8996 13.7177 45.5768 19.4853C48.2303 20.8882 45.7329 25.2529 42.9234 23.6941C34.4948 18.7059 20.4472 18.2382 12.4869 20.7324ZM71.643 34.9177C68.9895 34.9177 66.4922 33.9824 64.307 31.8C64.1509 31.8 64.1509 31.9559 64.1509 31.9559L61.6535 34.9177C61.4975 35.0735 61.4975 35.2294 61.6535 35.3853C64.4631 37.8794 67.8969 39.1265 71.643 39.1265C76.9498 39.1265 80.2276 36.1647 80.2276 31.8C80.2276 28.0588 77.8864 26.0324 72.4234 24.6294C67.8969 23.5382 67.1165 22.7588 67.1165 21.2C67.1165 19.6412 68.6774 18.7059 70.7065 18.7059C72.7356 18.7059 74.6086 19.4853 76.7938 21.0441C76.7938 21.0441 76.9498 21.2 77.1059 21.2C77.262 21.2 77.262 21.0441 77.262 21.0441L79.4472 17.9265C79.6033 17.7706 79.6033 17.7706 79.4472 17.6147C76.9498 15.5882 73.9842 14.4971 70.7065 14.4971C65.8678 14.4971 62.434 17.4588 62.434 21.6677C62.434 26.1882 65.5557 27.5912 70.5504 28.8382C74.9207 29.7735 75.5451 30.7088 75.5451 32.2677C75.5451 33.9824 73.9842 34.9177 71.643 34.9177ZM86.471 22.9147V20.8882C86.471 20.7324 86.3149 20.5765 86.1588 20.5765H82.1006C81.9446 20.5765 81.7885 20.7324 81.7885 20.8882V43.8029C81.7885 43.9588 81.9446 44.1147 82.1006 44.1147H86.1588C86.3149 44.1147 86.471 43.9588 86.471 43.8029V36.6324C88.0319 38.3471 89.7488 39.1265 92.0901 39.1265C96.3043 39.1265 100.519 35.8529 100.519 29.6177C100.519 23.3824 96.3043 20.2647 92.0901 20.2647C89.7488 20.2647 88.0319 21.0441 86.471 22.9147ZM91.1535 35.0735C88.344 35.0735 86.3149 32.7353 86.3149 29.6177C86.3149 26.5 88.344 24.3177 91.1535 24.3177C93.9631 24.3177 95.8361 26.5 95.8361 29.6177C95.8361 32.7353 93.9631 35.0735 91.1535 35.0735ZM101.767 29.7735C101.767 35.0735 105.982 39.1265 111.445 39.1265C116.908 39.1265 121.122 34.9177 121.122 29.6177C121.122 24.3177 117.064 20.2647 111.601 20.2647C106.138 20.2647 101.767 24.4735 101.767 29.7735ZM106.45 29.6177C106.45 26.5 108.479 24.3177 111.445 24.3177C114.41 24.3177 116.595 26.6559 116.595 29.7735C116.595 32.8912 114.566 35.0735 111.601 35.0735C108.635 35.0735 106.45 32.7353 106.45 29.6177ZM128.302 20.5765V16.0559C128.302 15.9 128.302 15.7441 128.146 15.7441H124.087C123.931 15.7441 123.775 15.9 123.775 16.0559V20.5765H121.746C121.59 20.5765 121.434 20.7324 121.434 20.8882V24.3177C121.434 24.4735 121.59 24.6294 121.746 24.6294H123.775V33.6706C123.775 37.2559 125.492 39.1265 129.082 39.1265C130.487 39.1265 131.892 38.8147 132.984 38.1912C133.14 38.1912 133.14 38.0353 133.14 37.8794V34.6059C133.14 34.45 133.14 34.2941 132.984 34.2941H132.672C131.892 34.7618 130.955 34.9177 130.175 34.9177C128.926 34.9177 128.302 34.2941 128.302 33.0471V24.6294H132.984C133.14 24.6294 133.296 24.4735 133.296 24.3177V20.8882C133.296 20.7324 133.14 20.5765 132.984 20.5765H128.302ZM148.437 20.1088C148.437 18.3941 149.061 17.7706 150.466 17.7706C151.246 17.7706 152.027 17.7706 152.807 18.0824H152.963C152.963 18.0824 153.119 17.9265 153.119 17.7706V14.4971C153.119 14.3412 153.119 14.1853 152.963 14.1853C152.183 13.8735 151.09 13.7177 149.529 13.7177C145.783 13.7177 143.91 15.9 143.91 19.7971V20.5765H141.881C141.725 20.5765 141.569 20.7324 141.569 20.8882V24.3177C141.569 24.4735 141.725 24.6294 141.881 24.6294H143.91V38.5029C143.91 38.6588 144.066 38.8147 144.222 38.8147H148.281C148.437 38.8147 148.437 38.6588 148.437 38.5029V24.6294H152.339L158.114 38.5029C157.49 39.9059 156.865 40.2177 155.929 40.2177C155.148 40.2177 154.368 40.0618 153.587 39.5941H153.431L153.275 39.75L151.87 42.7118C151.87 42.8677 151.87 43.1794 152.027 43.1794C153.431 43.9588 154.68 44.2706 156.241 44.2706C159.206 44.2706 160.923 42.8677 162.328 39.1265L169.352 21.0441V20.7324C169.352 20.5765 169.196 20.5765 169.04 20.5765H164.826C164.669 20.5765 164.669 20.7324 164.669 20.8882L160.299 33.0471L155.617 20.8882C155.617 20.7324 155.46 20.5765 155.304 20.5765H148.437V20.1088ZM135.482 20.5765C135.326 20.5765 135.169 20.7324 135.169 20.8882V38.5029C135.169 38.6588 135.326 38.8147 135.482 38.8147H139.54C139.696 38.8147 139.696 38.6588 139.696 38.5029V20.8882C139.696 20.7324 139.696 20.5765 139.54 20.5765H135.482ZM134.545 15.4324C134.545 16.9912 135.95 18.3941 137.511 18.3941C139.072 18.3941 140.32 16.9912 140.32 15.4324C140.32 13.8735 139.072 12.6265 137.511 12.6265C135.95 12.6265 134.545 13.8735 134.545 15.4324ZM172.786 26.1882C174.347 26.1882 175.751 24.9412 175.751 23.3824C175.751 21.8235 174.347 20.5765 172.786 20.5765C171.225 20.5765 169.976 21.8235 169.976 23.3824C169.976 24.9412 171.225 26.1882 172.786 26.1882ZM172.786 20.8882C174.191 20.8882 175.439 21.9794 175.439 23.3824C175.439 24.7853 174.191 25.8765 172.786 25.8765C171.381 25.8765 170.288 24.7853 170.288 23.3824C170.288 21.9794 171.381 20.8882 172.786 20.8882ZM173.41 23.6941C173.878 23.5382 174.191 23.2265 174.191 22.7588C174.191 22.1353 173.566 21.8235 172.942 21.8235H171.693V24.7853H172.318V23.85H172.942L173.566 24.7853H174.347L173.41 23.6941ZM172.942 22.2912C173.254 22.2912 173.566 22.4471 173.566 22.7588C173.566 23.0706 173.254 23.2265 172.942 23.2265H172.318V22.2912H172.942Z"
          fill="white"
        />
      </svg>

      {/* navlinks */}
      <Link passHref href="/">
        <div
          className={`nav-item ${
            router.pathname === "/" ? "opacity-100" : "opacity-60"
          } `}
        >
          {router.pathname === "/" ? (
            <svg
              className="h-5"
              viewBox="0 0 16 16"
              fill=""
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.8318 15.6H9.51817V10.2H6.48176V15.6H1.16809V4.37625L7.99997 0.400024L14.8318 4.34913V15.6Z"
                fill=""
              />
            </svg>
          ) : (
            <svg
              className="h-5"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20.0001 3.20756L4.74937 12.5555V37.108H14.4121V23.8632H25.6724V37.108H35.2507V12.488L20.0001 3.20756ZM20.0001 1L37.0449 11.0396V39H23.8783V25.7552H16.2063V39H2.9552V11.1297L20.0001 1Z"
                fill="white"
              />
            </svg>
          )}
          <span>Home</span>

          {/* active bar */}
          {router.pathname === "/" && (
            <div className="absolute left-0 top-0 bottom-0 bg-[#66D36E] w-2" />
          )}
        </div>
      </Link>

      <Link passHref href="/search">
        <div
          className={`nav-item ${
            router.pathname === "/search" ? "opacity-100" : "opacity-60"
          } `}
        >
          {router.pathname == "/search" ? (
            <svg
              className="h-5"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M29.44 27.1181L37.5502 36.6236L34.7596 39L26.6712 29.5164C24.0551 31.2605 21.17 32.1325 18.016 32.1325C15.9085 32.1325 13.8918 31.7219 11.9661 30.9008C10.0403 30.0796 8.38338 28.975 6.99529 27.5869C5.6072 26.1989 4.5026 24.542 3.68148 22.6162C2.86035 20.6904 2.44976 18.6737 2.44971 16.5663C2.44965 14.4588 2.86024 12.4422 3.68148 10.5164C4.50271 8.59054 5.60732 6.93362 6.99529 5.54558C8.38327 4.15755 10.0402 3.05295 11.9661 2.23177C13.8919 1.41059 15.9086 1 18.016 1C20.1234 1 22.14 1.41059 24.0659 2.23177C25.9917 3.05295 27.6487 4.15755 29.0366 5.54558C30.4246 6.93362 31.5292 8.59054 32.3505 10.5164C33.1717 12.4422 33.5823 14.4588 33.5822 16.5663C33.5822 17.9034 33.4151 19.2115 33.0808 20.4905C32.7465 21.7695 32.2705 22.9613 31.6528 24.066C31.0351 25.1706 30.2975 26.188 29.4399 27.1181H29.44ZM18.0161 28.4697C19.6293 28.4697 21.17 28.1536 22.638 27.5213C24.1059 26.8891 25.3704 26.0425 26.4314 24.9815C27.4923 23.9205 28.339 22.6561 28.9712 21.1881C29.6035 19.7201 29.9196 18.1795 29.9196 16.5662C29.9196 14.9529 29.6035 13.4123 28.9712 11.9443C28.339 10.4763 27.4923 9.21179 26.4314 8.15076C25.3704 7.08974 24.1059 6.24312 22.638 5.61091C21.17 4.9787 19.6293 4.6626 18.0161 4.6626C16.4028 4.6626 14.8621 4.9787 13.3942 5.61091C11.9262 6.24312 10.6617 7.08977 9.60064 8.15085C8.53962 9.21193 7.693 10.4764 7.06079 11.9443C6.42858 13.4121 6.11248 14.9528 6.11248 16.5662C6.11248 18.1796 6.42858 19.7202 7.06079 21.1881C7.693 22.6559 8.53965 23.9204 9.60073 24.9815C10.6618 26.0426 11.9263 26.8892 13.3942 27.5213C14.862 28.1535 16.4027 28.4696 18.0161 28.4697Z"
                fill="white"
              />
            </svg>
          ) : (
            <svg
              className="h-5"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                opacity="0.6"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M11.7202 11.2774L14.9888 15.1128L14.4219 15.6L11.1444 11.7646C10.0165 12.6208 8.74692 13.0489 7.33557 13.0489C6.4793 13.0489 5.65995 12.8821 4.87753 12.5485C4.09511 12.2148 3.42192 11.766 2.85795 11.2021C2.29398 10.6382 1.84518 9.96496 1.51157 9.18251C1.17795 8.40007 1.01113 7.58073 1.01111 6.72448C1.01109 5.86824 1.1779 5.04889 1.51157 4.26645C1.84523 3.48401 2.29402 2.81081 2.85795 2.24686C3.42187 1.68292 4.09507 1.23412 4.87753 0.900483C5.66 0.566844 6.47934 0.400024 7.33557 0.400024C8.19179 0.400024 9.01113 0.566844 9.7936 0.900483C10.5761 1.23412 11.2493 1.68292 11.8132 2.24686C12.3771 2.81081 12.8259 3.48401 13.1596 4.26645C13.4932 5.04889 13.66 5.86824 13.66 6.72448C13.66 7.60435 13.4888 8.43698 13.1463 9.22238C12.8038 10.0078 12.3284 10.6928 11.7202 11.2774L11.7202 11.2774ZM7.33564 12.3049C8.34541 12.3049 9.27843 12.0554 10.1347 11.5564C10.991 11.0573 11.6686 10.3797 12.1676 9.52348C12.6666 8.66723 12.9161 7.73421 12.9161 6.72441C12.9161 5.71461 12.6666 4.78159 12.1676 3.92535C11.6685 3.0691 10.9909 2.39149 10.1347 1.89251C9.27848 1.39352 8.34546 1.14403 7.33564 1.14403C6.32581 1.14403 5.39279 1.39352 4.53657 1.89251C3.68035 2.39149 3.00273 3.0691 2.50373 3.92535C2.00472 4.78159 1.75523 5.71461 1.75526 6.72441C1.75528 7.73421 2.00477 8.66723 2.50373 9.52348C3.00269 10.3797 3.6803 11.0573 4.53657 11.5564C5.39284 12.0554 6.32586 12.3049 7.33564 12.3049Z"
                fill="white"
              />
            </svg>
          )}
          <span>Search</span>

          {/* active bar */}
          {router.pathname === "/search" && (
            <div className="absolute left-0 top-0 bottom-0 bg-[#66D36E] w-2" />
          )}
        </div>
      </Link>

      <div
        className={`nav-item ${
          router.pathname === "/library" ? "opacity-100" : "opacity-60"
        } `}
      >
        <svg
          className="h-5"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            opacity="0.6"
            d="M9.17679 0.659882L15.6 15.0852L14.8548 15.4186L8.43153 0.993306L9.17679 0.659882ZM0.400024 15.4088V0.581421H1.22379V15.4088H0.400024ZM5.34249 15.4088V0.581421H6.16626V15.4088H5.34249Z"
            fill="white"
          />
        </svg>

        <span>Library</span>

        {/* active bar */}
        {router.pathname === "/library" && (
          <div className="absolute left-0 top-0 bottom-0 bg-[#66D36E] w-2" />
        )}
      </div>

      {/* playlist */}
      <div className="ml-8 mt-14 space-y-3">
        <h3 className="text-sm tracking-widest opacity-60	uppercase">
          playlists
        </h3>
        <div className="flex items-center gap-4 py-1">
          <svg
            className="h-8"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="32" height="32" fill="#A4A4A4" />
            <path
              d="M10 14.9682V16.9809H14.9103V22H17.0635V16.9809H22V14.9682H17.0635V10H14.9103V14.9682H10Z"
              fill="#030303"
            />
          </svg>
          <span className="cursor-pointer select-none opacity-60">
            Create a playlist
          </span>
        </div>
        {/* lists */}
        <p className="cursor-pointer select-none opacity-60">
          Rock Save the Queen
        </p>{" "}
      </div>
    </aside>
  );
}

export default Sidebar;
