import React from 'react';

import CarCard from './CarsCard/CarCard';

const CarsList = ({ carsList, nameSearch, ratingSearch }) => {
  return (
    <div
      className="cars-list"
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        flexWrap: 'wrap',
      }}
    >
      {carsList
        .filter(
          (el) =>
            el.name.toLowerCase().includes(nameSearch.toLowerCase().trim()) &&
            el.rating >= ratingSearch
        )
        .map((el) => (
          <CarCard key={el.id} car={el} />
        ))}
    </div>
  );
};

export default CarsList;