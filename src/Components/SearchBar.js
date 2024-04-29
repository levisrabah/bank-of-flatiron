

import React from 'react';

const SearchSection = ({ searchTerm, handleChange, handleSearch }) => {
  return (
    <div className="search-section">
      <input
        type="text"
        className="search-input"
        placeholder="Search Recent Transactions"
        value={searchTerm}
        onChange={handleChange}
      />
      <button className="search-button" onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchSection;
