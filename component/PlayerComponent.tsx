"use client";

import Player from "@/data/Player";
import { useState } from "react";

interface PlayerProps {
  setName: (name: string) => void;
  player: Player;
}

const PlayerComponent: React.FC<PlayerProps> = ({ setName, player }) => {
  const { name, symbol } = player;
  const [isEditing, setIsEditing] = useState(false);

  const nameComponent = isEditing ? (
    <input
      type="text"
      required
      value={name}
      onChange={(e) => {
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

export default PlayerComponent;
