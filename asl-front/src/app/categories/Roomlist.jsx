import React, { useState, useEffect, useRef } from "react";

export const RoomList = (props) => {
  const { categoryOption } = props;

  return (
    <div className="room-list-display">
      <h3>Choose a room</h3>
      {categoryOption === "" && (
        <>
          <button type="button" className="Targaryen">Aemon</button>
          <button type="button" className="Targaryen">Rhaegar</button>
          <button type="button" className="Targaryen">Daenerys</button>
          <button type="button" className="Lannister">Tyrion</button>
          <button type="button" className="Lannister">Jaime</button>
          <button type="button" className="Lannister">Cersei</button>
          <button type="button" className="Stark">Jon</button>
          <button type="button" className="Stark">Robb</button>
          <button type="button" className="Stark">Sansa</button>
          <button type="button" className="Baratheon">Robert</button>
          <button type="button" className="Baratheon">Stannis</button>
          <button type="button" className="Baratheon">Renly</button>
          <button type="button" className="Tyrell">Margaery</button>
          <button type="button" className="Tyrell">Loras</button>
          <button type="button" className="Tyrell">Olenna</button>
        </>
      )}
      {categoryOption === "Targaryen" && (
        <>
          <button type="button" className="Targaryen">Aemon</button>
          <button type="button" className="Targaryen">Rhaegar</button>
          <button type="button" className="Targaryen">Daenerys</button>
        </>
      )}
      {categoryOption === "Lannister" && (
        <>
          <button type="button" className="Lannister">Tyrion</button>
          <button type="button" className="Lannister">Jaime</button>
          <button type="button" className="Lannister">Cersei</button>
        </>
      )}
      {categoryOption === "Stark" && (
        <>
          <button type="button" className="Stark">Jon</button>
          <button type="button" className="Stark">Robb</button>
          <button type="button" className="Stark">Sansa</button>
        </>
      )}
      {categoryOption === "Baratheon" && (
        <>
          <button type="button" className="Baratheon">Robert</button>
          <button type="button" className="Baratheon">Stannis</button>
          <button type="button" className="Baratheon">Renly</button>
        </>
      )}
      {categoryOption === "Tyrell" && (
        <>
          <button type="button" className="Tyrell">Margaery</button>
          <button type="button" className="Tyrell">Loras</button>
          <button type="button" className="Tyrell">Olenna</button>
        </>
      )}
    </div>
  )
};
