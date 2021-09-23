import React from 'react';

import Rate from '../rate';

import './searchCar.css';


const SearchCar = ({ setNameSearch, ratingSearch, setRatingSearch }) => {
  return (
    <div>
      <div className="search-container">
        <input
          type="text"
          placeholder="Type car name to search"
          onChange={(e) => setNameSearch(e.target.value)}
        />
        <div className="rating-search">
          <Rate rating={ratingSearch} setRatingSearch={setRatingSearch} />
        </div> 
      </div>
    </div>
  );
};

export default SearchCar;