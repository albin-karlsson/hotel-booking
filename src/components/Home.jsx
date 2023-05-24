import React, { useEffect, useState } from "react";
import SearchBar from "./SearchBar";
import HotelCard from "./HotelCard";

function Home() {
  const [allHotels, setAllHotels] = useState([]);
  const [filteredHotels, setFilteredHotels] = useState([]);

  useEffect(() => {
    fetch("http://localhost:7000/hotels")
      .then((res) => res.json())
      .then((data) => {
        setAllHotels(data);
        setFilteredHotels(data);
      });
  }, []);

  function filterHotels(searchWord) {
    const tempHotels = [...allHotels].filter((h) => {
      if (h.name.toLowerCase().includes(searchWord.toLowerCase())) {
        return true;
      }
    });

    setFilteredHotels(tempHotels);
  }

  return (
    <div>
      <SearchBar filterHotels={filterHotels} />
      <div className="hotels-container">
        {filteredHotels.map((h) => (
          <HotelCard
            name={h.name}
            location={h.location}
            id={h.id}
          />
        ))}
      </div>
    </div>
  );
}

export default Home;
