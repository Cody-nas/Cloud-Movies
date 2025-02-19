import React from "react";

const Card = ({ cardWidth }) => {
  return (
    <div
      style={{ width: cardWidth }}
      className="h-[650px] relative flex justify-center items-center shrink-0 p-2 bg-gray-800 group"
    >
      <div className="w-[97%] h-[97%] mx-auto text-white absolute rounded-lg bg-black/50 flex flex-col justify-center gap-y-2 p-10 cursor-pointer ">
        <h1 className="text-4xl">The Godfather</h1>
        <div className="flex gap-x-2 items-center ">
          <span className="text-lg">Genres:</span>
          <span className="font-semibold text-red-800">Crime Drama</span>
        </div>
        <span className="flex gap-x-2">
          Original Language: <span className="mr-2 uppercase"> EN</span>
        </span>
        <span className="flex gap-x-2 ">
          Release Date: <span className="mr-2 text-yellow-400">1972-03-04</span>
        </span>
        <p className="flex flex-col gap-y-1">
          <span className="text-red-500">Summary:</span>
          <span className="first-letter:pl-2"> Summary text</span>
        </p>
      </div>
      <img
        src="./god.png"
        alt="movie image"
        className=" absolute w-[97%] h-[97%] object-cover rounded-xl opacity-50 group-hover:opacity-100 transition-opacity duration-500"
      />
    </div>
  );
};

export default Card;
