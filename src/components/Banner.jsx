import React from "react";

const Banner = () => {
  return (
    <header
      className="h-[500px] text-white flex flex-col justify-end p-8 bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://image.tmdb.org/t/p/original/8UlWHLMpgZm9bx6QYh0NFoq67TZ.jpg')",
      }}
    >
      <h1 className="text-4xl font-bold mb-2">Featured Movie</h1>
      <p className="max-w-xl">
        This is a featured movie description. Keep it short and catchy!
      </p>
      <div className="mt-4">
        <button className="bg-white text-black px-4 py-2 mr-2">Play</button>
        <button className="bg-gray-700 px-4 py-2">My List</button>
      </div>
    </header>
  );
};

export default Banner;
