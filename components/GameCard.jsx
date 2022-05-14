import Image from "next/image";
import React from "react";
import { Badge } from "./Badge";

const Card = ({ title, releaseDate, platforms, rating }) => {
  if (title)
    return (
      <div className='card container'>
        <div className='card-body'>
          <h2>{title}</h2>
          <p>Released: {releaseDate}</p>

          <div className='platforms'>
            {platforms?.map(({ platform }) => (
              <div key={platform?.slug} className='badge'>
                <Badge name={platform?.name} />
              </div>
            ))}
          </div>
          {rating && (
            <div className='rating'>
              <span> {rating}</span>
            </div>
          )}
        </div>
      </div>
    );
};

export default Card;
