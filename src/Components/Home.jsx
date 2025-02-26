import Card from "./Card";
import Navigation from "./Navigation";
import { useState, useEffect, useRef } from "react";
import { useSpring, motion } from "framer-motion";

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

  const [loading, setLoading] = useState(false);
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
    console.log(mousePos);
  };

  const apiKey = import.meta.env.VITE_API_KEY;
  const baseUrl = import.meta.env.VITE_BASE_URL;
  const abortControllerRef = useRef(null);

  useEffect(() => {
    const getMovies = async () => {
      abortControllerRef.current != null && abortControllerRef.current.abort();
      abortControllerRef.current = new AbortController();
      setLoading(true);
      const url = `${baseUrl}/${group}?Page=${page}&Language=en-US&Adult=true`;
      const options = {
        method: "GET",
        headers: {
          "x-rapidapi-key": apiKey,
          "x-rapidapi-host": "tvshow.p.rapidapi.com",
        },
        signal:
          abortControllerRef.current != null &&
          abortControllerRef.current.signal,
      };

      try {
        const response = await fetch(url, options);
        const result = await response.json();
        setMovies(result);
        console.log(result);
      } catch (error) {
        console.error(error);
        if (error.name === "AbortError") {
          console.log("Aborted");
          return;
        }
      } finally {
        setLoading(false);
      }
    };

    getMovies();
  }, [page, group]);

  return (
    <>
      <Navigation page={page} setPage={setPage} setGroup={setGroup} />
      {loading ? (
        <div className="h-screen w-screen flex justify-center items-center bg-[#240000]">
          <h1 className="text-white text-4xl uppercase">Loading....</h1>
        </div>
      ) : (
        <div
          className="flex justify-center items-center"
          style={{ width: wrapperWidth }}
          ref={cardRef}
          onMouseMove={(e) => getMousePositions(e, cardRef.current)}
        >
          <div className="flex flex-wrap">
            {movies.map((movie, index) => [
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: loading ? 0 : 1 }}
                transition={{ duration: 0.05 }}
                key={index}
              >
                <Card movie={movie} cardWidth={cardWidth} />
              </motion.div>,
            ])}
          </div>
        </div>
      )}
    </>
  );
};

export default Home;
