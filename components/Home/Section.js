import React from "react";

function Section() {
  return (
    <div>
      <h2 className="mb-3 text-2xl">Trending now</h2>

      {/* grid */}
      <div className="grid grid-flow-col auto-cols-[25%] gap-4">
        {/* grid item */}
        <div className="p-3 bg-white/10 rounded-lg">
          <img
            className="w-full mb-3"
            src="https://i.scdn.co/image/ab67616d00001e02ff9ca10b55ce82ae553c8228"
            alt=""
          />
          <h3 className="mb-1">Pushpa - The Rise</h3>
          <p className="text-sm opacity-60">Devi Sri Prasad</p>
        </div>

        {/* grid item */}
        <div className="p-3 bg-white/10 rounded-lg">
          <img
            className="w-full mb-3"
            src="https://i.scdn.co/image/ab67616d00001e02ff9ca10b55ce82ae553c8228"
            alt=""
          />
          <h3 className="mb-1">Pushpa - The Rise</h3>
          <p className="text-sm opacity-60">Devi Sri Prasad</p>
        </div>

        {/* grid item */}
        <div className="p-3 bg-white/10 rounded-lg">
          <img
            className="w-full mb-3"
            src="https://i.scdn.co/image/ab67616d00001e02ff9ca10b55ce82ae553c8228"
            alt=""
          />
          <h3 className="mb-1">Pushpa - The Rise</h3>
          <p className="text-sm opacity-60">Devi Sri Prasad</p>
        </div>
      </div>
    </div>
  );
}

export default Section;
