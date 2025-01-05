"use client";

import "./page.css";
import { Player, Turn } from "@/data";
import PlayerComponent from "@/component/PlayerComponent";
import Log from "@/component/Log";
import { useState } from "react";
import GameBoard from "@/component/GameBoard";

export default function Home() {
  const [players, setPlayers] = useState([
    new Player("player 1", "X"),
    new Player("player 2", "O"),
  ]);

  const [turns, setTurns] = useState<Turn[]>([]);
  const [boardSize, setBoardSize] = useState(3);

  // boardSize x boardSize array of nulls
  const gameBoard: (number | null)[][] = Array.from({ length: boardSize }, () =>
    Array.from({ length: boardSize }, () => null)
  );
  turns.forEach((turn, turnNum) => {
    gameBoard[turn.row][turn.col] = turnNum % players.length;
  });

  const playTurn = (row: number, col: number) => {
    setTurns((prevTurns) => [...prevTurns, { row, col }]);
  };

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
        <div>
          {/* Board Size Changer */}
          <label htmlFor="board-size">Board Size: </label>
          <input
            type="number"
            value={boardSize}
            onChange={(e) => setBoardSize(Number(e.target.value))}
            min={3}
            max={10}
          />
        </div>
        <ol id="players" className="highlight-player">
          {players.map((player, playerIndex) => (
            <li
              key={playerIndex}
              className={
                turns.length % players.length === playerIndex
                  ? "active"
                  : undefined
              }
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
            playTurn={playTurn}
          />
        </ol>
      </div>
      <ol id="log">
        <Log turns={turns} players={players} />
      </ol>
    </main>
  );
}
