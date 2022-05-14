import Card from "../components/GameCard";
import getRandomGameData from "../api/RandomGameData";
import { useState } from "react";
import { useEffect } from "react";
import { useRouter } from "next/router";
import Button from "../components/Button";

export default function Home() {
  const router = useRouter();
  const [lGameData, setLGameData] = useState({});
  const [rGameData, setRGameData] = useState({});
  const [score, setScore] = useState(0);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    getRandomGameData().then((data) => {
      setLGameData(data);
    });

    getRandomGameData().then((data) => {
      setRGameData(data);
    });
    setScore(0);
  }, []);

  const toScore = () => {
    router.push(
      {
        pathname: "/end-game",
        query: {
          score: score,
          name: rGameData.name,
          rating: rGameData.rating,
          imgUrl: rGameData.imgUrl,
        },
      },
      "end-game"
    );
  };

  const checkIfHigher = () => {
    if (Number(lGameData.rating) < Number(rGameData.rating)) {
      setScore(score + 1);
      setLoading(true);
      getRandomGameData().then((data) => {
        setLGameData(rGameData);
        setRGameData(data);
        setLoading(false);
      });
    } else {
      // console.log("wrong Answer");
      toScore();
    }
  };
  const checkIfLower = () => {
    if (Number(lGameData.rating) > Number(rGameData.rating)) {
      setScore(score + 1);
      setLoading(true);
      getRandomGameData().then((data) => {
        setLGameData(rGameData);
        setRGameData(data);
        setLoading(false);
      });
    } else {
      // console.log("wrong Answer");
      toScore();
    }
  };

  return (
    <>
      <div className='grid-container'>
        <span className='vs-center'>
          <h3>VS</h3>
        </span>
        <div className='container'>
          <div
            className='container-item'
            style={{
              background:
                "url(" + lGameData.imgUrl + ") no-repeat center /cover",
            }}
          >
            <div>
              <Card
                img={lGameData.imgUrl}
                title={lGameData.name}
                rating={lGameData.rating}
                releaseDate={lGameData.released}
                platforms={lGameData.platforms}
              />
              <div className='rowg-link'>
                powered by{" "}
                <span>
                  <a
                    target={"_blank"}
                    rel='noreferrer'
                    href='https://rawg.io/'
                    className='rawg-a'
                  >
                    RAWG
                  </a>
                </span>
              </div>
            </div>
          </div>
          <div className='score-board'>score :{score}</div>
          <div
            className='container-item'
            style={{
              background:
                "url(" + rGameData.imgUrl + ") no-repeat center /cover",
            }}
          >
            <div>
              <Card
                //  rating={rGameData.rating}
                img={rGameData.background_image}
                title={rGameData.name}
                releaseDate={rGameData.released}
                platforms={rGameData.platforms}
              />

              {rGameData.name && (
                <div className='containers btns'>
                  {!loading && <Button onClick={checkIfHigher}>Higher</Button>}
                  {!loading && (
                    <Button
                      onClick={checkIfLower}
                      styles={{ background: "#f72a3b" }}
                    >
                      Lower
                    </Button>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
