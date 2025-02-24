import Card from "./Card";
import Navigation from "./Navigation";
import { useState, useEffect, useRef } from "react";

const Home = () => {
  const [cardWidth, setCardWidth] = useState(500);
  const cardInRow = 3;
  const [wrapperWidth, setWrapperWidth] = useState(cardWidth * cardInRow);
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [group, setGroup] = useState("Popular");
  const [mousePos, setMousePos] = useState({
    left: 0,
    top: 0,
    width: 0,
    height: 0,
  });
  const cardRef = useRef(null);

  const getMousePositions = (e, referenceElement) => {
    const positions = {
      x: e.clientX,
      y: e.clientY,
    };
    const offset = {
      left: positions.x,
      top: positions.y,
      width: referenceElement.clientWidth,
      height: referenceElement.clientHeight,
    };

    setMousePos(offset);
  };

  const apiKey = import.meta.env.VITE_API_KEY;
  const baseUrl = import.meta.env.VITE_BASE_URL;

  useEffect(() => {
    const getMovies = async () => {
      const url = `${baseUrl}/${group}?Page=${page}&Language=en-US&Adult=true`;
      const options = {
        method: "GET",
        headers: {
          "x-rapidapi-key": apiKey,
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
  }, [page, group]);

  return (
    <>
      <Navigation page={page} setPage={setPage} setGroup={setGroup} />
      <div
        className="flex justify-center items-center"
        style={{ width: wrapperWidth }}
        ref={cardRef}
        onMouseMove={(e) => getMousePositions(e, cardRef.current)}
      >
        <div className="flex flex-wrap">
          {movies.map((movie, index) => [
            <div key={index}>
              <Card movie={movie} cardWidth={cardWidth} />
            </div>,
          ])}
        </div>
      </div>
    </>
  );
};

export default Home;
