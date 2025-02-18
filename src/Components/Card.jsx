import React from "react";

const Card = () => {
  return (
    <div>
      <h1>The Godfather</h1>
      <div>
        <span>Genres:</span>
        <span>Crime Drama</span>
      </div>
      <span>
        Original Language: <span>EN</span>
      </span>
      <span>
        Release Date: <span>1972-03-04</span>
      </span>
      <p>
        <span>Summary:</span>
        <span>Summary text</span>
      </p>
      <img src="./god.jpeg" alt="movie image" />
    </div>
  );
};

export default Card;
