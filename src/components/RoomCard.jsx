import React from "react";

function RoomCard({ type, price, booked, id, bookRoom }) {
  if (!booked)
    return (
      <div
        onClick={() => {
          bookRoom(id);
        }}
        className="flex-container room-item"
      >
        <h3>{type}</h3>
        <h4 style={{ color: "black" }}>$ {price}</h4>
      </div>
    );

  return (
    <div className="flex-container room-item booked-room">
      <h3>{type}</h3>
      <h4 style={{ color: "black" }}>Fully booked</h4>
    </div>
  );
}

export default RoomCard;
