import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import RoomCard from "./RoomCard";

function Hotel() {
  const { hotelId } = useParams();
  const [hotel, setHotel] = useState({});

  useEffect(() => {
    fetch(`http://localhost:7000/hotels/${hotelId}`)
      .then((res) => res.json())
      .then((data) => setHotel(data));
  }, [hotelId]);

  async function bookRoom(roomId) {
    // Find the room object from the id sent to the function
    const room = hotel.rooms.find((r) => r.id === roomId);
    // Set the room booked property to true
    room.booked = true;

    await fetch(`http://localhost:7000/hotels/${hotelId}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(hotel),
    });
    await fetch(`http://localhost:7000/hotels/${hotelId}`)
      .then((res) => res.json())
      .then((data) => setHotel(data));
  }

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
              <RoomCard
                key={r.id}
                type={r.type}
                price={r.price}
                booked={r.booked}
                id={r.id}
                bookRoom={bookRoom}
              />
            ))
          : ""}
      </div>
    </div>
  );
}

export default Hotel;
