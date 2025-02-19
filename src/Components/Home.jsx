import Card from "./Card";
import { useState } from "react";

const Home = () => {
  const [cardWidth, setCardWidth] = useState(500);
  const cardInRow = 5;
  const [wrapperWidth, setWrapperWidth] = useState(cardWidth * cardInRow);
  return (
    <div
      className="flex justify-center items-center"
      style={{ width: wrapperWidth }}
    >
      <div className="flex flex-wrap">
        <div>
          <Card cardWidth={cardWidth} />
        </div>
      </div>
    </div>
  );
};

export default Home;
