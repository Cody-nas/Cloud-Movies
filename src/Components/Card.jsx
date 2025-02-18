import React from "react";

const Card = () => {
  return (
    <div className="h-[650px] relative flex justify-center items-center shrink-0 p-2 bg-gray-800 group">
      <div className="w-[97%] h-[97%] mx-auto text-white absolute rounded-lg bg-black/50 flex flex-col justify-center gap-y-2 p-10 cursor-pointer ">
        <h1 className="text-4xl">The Godfather</h1>
        <div className="">
          <span>Genres:</span>
          <span>Crime Drama</span>
        </div>
        <span>
          Original Language: <span> EN</span>
        </span>
        <span>
          Release Date: <span>1972-03-04</span>
        </span>
        <p>
          <span>Summary:</span>
          <span> Summary text</span>
        </p>
      </div>
      <img src="./god.jpeg" alt="movie image" />
    </div>
  );
};

export default Card;
