import React from "react";

const Navigation = () => {
  return (
    <div>
      <div>
        <span>left arrow</span>
        <p>1</p>
        <span>right arrow</span>
      </div>
      <select>
        <option value="TopRated">Top Rated</option>
        <option value="Popular">Popular</option>
        <option value="Upcoming">Upcoming</option>
        <option value="Discover">Discover</option>
      </select>
    </div>
  );
};

export default Navigation;
