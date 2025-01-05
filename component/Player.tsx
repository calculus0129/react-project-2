"use client";

import { useState } from "react";

const Player: React.FC<{ defaultName: string; symbol: string }> = ({
  defaultName,
  symbol,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState(defaultName);
  const nameComponent = isEditing ? (
    <input
      type="text"
      required
      value={name}
      onChange={(e) => {
        // console.log(e.target.value);
        setName(e.target.value);
      }}
    />
  ) : (
    <span className="player-name">{name}</span>
  );

  return (
    <>
      <span className="player">
        {nameComponent}
        <span className="player-symbol">{symbol}</span>
        <button
          onClick={() => {
            setIsEditing((prevEditing) => !prevEditing);
          }}
        >
          {isEditing ? "Save" : "Edit"}
        </button>
      </span>
    </>
  );
};

export default Player;
