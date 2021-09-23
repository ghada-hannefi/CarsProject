import React from 'react';
import {Link }from'react-router-dom'
import Rate from '../rate';

import './CarCard.css';

const CarCard = ({
  car: { id,name, date, rating, image, price, description }
}) => {
  return (
    <div className="card">
      <div className="card_left">
        <img src={image} alt="car" />
      </div>
      <div className="card_right">
        <h1>{name}</h1>
        <div className="card_right__details">
          <ul>
            <li>{date}</li>
            <li>||</li>
            <li>{price}</li>
          </ul>
        </div>
        <div className="card_right__rating">
          <Rate rating={rating} />
        </div>
        <div className="card_right__review">
          <p>{description}</p>
          <Link to={`/${id}`}>Detail</Link>
        </div>
      </div>
    </div>
  );
};

export default CarCard;