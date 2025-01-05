"use client";

import "./page.css";
import Player from "@/data/Player";
import PlayerComponent from "@/component/PlayerComponent";
import Log from "@/component/Log";
import { useState } from "react";
import GameBoard from "@/component/GameBoard";

export default function Home() {
  const [players, setPlayers] = useState([
    new Player("player 1", "X"),
    new Player("player 2", "O"),
  ]);

  const [gameBoard, setGameBoard] = useState<(number | null)[][]>([
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ]);

  const [curPlayer, setCurPlayer] = useState(0);

  const setPlayerName = (index: number) => (name: string) => {
    setPlayers((prevPlayers) => {
      const newPlayers = [...prevPlayers];
      newPlayers[index].name = name;
      return newPlayers;
    });
  };

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          {players.map((player, playerIndex) => (
            <li
              key={playerIndex}
              className={curPlayer === playerIndex ? "active" : ""}
            >
              <PlayerComponent
                player={player}
                setName={setPlayerName(playerIndex)}
              />
            </li>
          ))}
        </ol>
        <ol id="game-board">
          <GameBoard
            players={players}
            gameBoard={gameBoard}
            setGameBoard={setGameBoard}
            curPlayer={curPlayer}
            updatePlayer={() => {
              setCurPlayer((prevPlayer) => (prevPlayer + 1) % players.length);
            }}
          />
        </ol>
      </div>
      <ol id="log">
        <Log />
      </ol>
    </main>
  );
}
