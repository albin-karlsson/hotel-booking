import React from "react";
import { Link } from "react-router-dom";

function HotelCard({ name, location, id }) {
  return (
    <Link to={`/hotels/${id}`}>
      <div
        style={{ flexDirection: "column", justifyContent: "center" }}
        className="hotel-item flex-container"
      >
        <h3>{name}</h3>
        <em>{location}</em>
      </div>
    </Link>
  );
}

export default HotelCard;
