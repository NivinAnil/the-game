import React from "react";
import Button from "../components/Button";
import { useRouter } from "next/router";
const ScoreCard = ({ score, gameName, rating }) => {
  const router = useRouter();
  const retry = () => {
    router.push({ pathname: "/" });
  };

  return (
    <center>
      <div className='card container'>
        <div className='card-body'>
          <h2>Result</h2>
          <p>`Name : ${gameName}`</p>
          <p>Rating : {rating}</p>
          <p>Score : {score}</p>

          <Button onClick={retry} styles={{ background: "#46cc3f" }}>
            Retry
          </Button>
        </div>
      </div>
    </center>
  );
};

export default ScoreCard;
