import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Hotel() {
  const { hotelId } = useParams();
  const [hotel, setHotel] = useState({});

  useEffect(() => {
    fetch(`http://localhost:7000/hotels/${hotelId}`)
      .then((res) => res.json())
      .then((data) => setHotel(data));
  }, [hotelId]);

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>{hotel.name}</h1>
      <img
        src={hotel.image}
        alt=""
      />
      <h3 style={{ color: "black", textAlign: "center" }}>{hotel.location}</h3>
      <div className="rooms-container">
        {hotel.rooms
          ? hotel.rooms.map((r) => (
              <div className="flex-container room-item">
                <h3>{r.type}</h3>
                <h4 style={{ color: "black" }}>$ {r.price}</h4>
              </div>
            ))
          : ""}
      </div>
    </div>
  );
}

export default Hotel;
