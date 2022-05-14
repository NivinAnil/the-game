import { useRouter } from "next/router";
import React from "react";
import ScoreCard from "../../components/ScoreCard";

const EndGame = () => {
  const router = useRouter();
  const {
    query: { score, name, rating, imgUrl },
  } = router;

  return (
    <div
      className='gameover'
      style={{
        background: "url(" + imgUrl + ") no-repeat center /cover",
      }}
    >
      <div>
        <h3>Game Over</h3>
        <ScoreCard rating={rating} score={score} gameName={name} />
      </div>
    </div>
  );
};

export default EndGame;
