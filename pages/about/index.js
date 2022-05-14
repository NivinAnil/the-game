import React from "react";
import Header from "../../components/Header";

const About = () => {
  return (
    <div className='about'>
      <h1>About</h1>
      <p className='about-msg'>
        This is my personal project inspired by the {"'The Higher Lower Game'"}{" "}
        website. In this game you have to guess if the right game’s rating is
        higher or lower to the left game’s rating. The game rating have two
        desimal places. If you are correct the right game data moves to left and
        new game data will appear in right place and so you score 1 point. The
        game data are acquired by using{" "}
        <span>
          <a
            target={"_blank"}
            rel='noreferrer'
            href='https://rawg.io/'
            className='rawg-a'
          >
            RAWG
          </a>
        </span>{" "}
        api.
      </p>
    </div>
  );
};

export default About;
