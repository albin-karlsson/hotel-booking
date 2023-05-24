import React from "react";

function SearchBar({ filterHotels }) {
  return (
    <div className="flex-container justify-center">
      <input
        onInput={(e) => {
          filterHotels(e.target.value);
        }}
        className="searchbar"
        type="text"
      />
    </div>
  );
}

export default SearchBar;
