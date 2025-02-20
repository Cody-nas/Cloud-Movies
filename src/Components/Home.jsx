import Card from "./Card";
import { useState, useEffect } from "react";

const Home = () => {
  const [cardWidth, setCardWidth] = useState(500);
  const cardInRow = 5;
  const [wrapperWidth, setWrapperWidth] = useState(cardWidth * cardInRow);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      const url =
        "https://tvshow.p.rapidapi.com/Movie/NowPlaying?Page=1&Language=en-US&Adult=true";
      const options = {
        method: "GET",
        headers: {
          "x-rapidapi-key":
            "b07ef8727dmsh5124d1928e620c4p15e753jsn176e1783c5eb",
          "x-rapidapi-host": "tvshow.p.rapidapi.com",
        },
      };

      try {
        const response = await fetch(url, options);
        const result = await response.json();
        setMovies(result);
        console.log(result);
      } catch (error) {
        console.error(error);
      }
    };

    getMovies();
  }, []);

  return (
    <div
      className="flex justify-center items-center"
      style={{ width: wrapperWidth }}
    >
      <div className="flex flex-wrap">
        {movies.map((movie, index) => [
          <div>
            <Card cardWidth={cardWidth} />
          </div>,
        ])}
      </div>
    </div>
  );
};

export default Home;
