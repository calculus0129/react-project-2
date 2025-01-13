"use client";

import "./page.css";
import { Player, Turn } from "@/data";
import PlayerComponent from "@/component/PlayerComponent";
import Log from "@/component/Log";
import { useState } from "react";
import GameBoard from "@/component/GameBoard";
import GameOver from "@/component/GameOver";

export default function Home() {
  const [players, setPlayers] = useState([
    new Player("player 1", "X"),
    new Player("player 2", "O"),
  ]);

  const [turns, setTurns] = useState<Turn[]>([]);
  const [boardSize, setBoardSize] = useState(3);
  const WIN_COMBOS = deriveWinCombos(boardSize);

  // boardSize x boardSize array of nulls
  const gameBoard: (number | null)[][] = deriveGameBoard(
    players,
    boardSize,
    turns,
  );
  turns.forEach((turn, turnNum) => {
    gameBoard[turn.row][turn.col] = turnNum % players.length;
  });

  const winner = deriveWinner(gameBoard, WIN_COMBOS, turns, boardSize);
  // deriveWinner(gameBoard, WIN_COMBOS);

  const playTurn = (row: number, col: number) => {
    if (winner === null) {
      setTurns((prevTurns) => [...prevTurns, { row, col }]);
    }
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
            onChange={(e) =>
              winner === null ? setBoardSize(Number(e.target.value)) : null
            }
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
        {winner !== null && (
          <div id="game-over">
            <GameOver
              winner={players[winner]?.name ?? undefined}
              handleRematch={() => setTurns([])}
            />
          </div>
        )}
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

function deriveWinCombos(boardSize: number) {
  const boardArray = [...Array(boardSize)];
  return [
    ...boardArray.map((_, i) => boardArray.map((_, j) => ({ row: i, col: j }))),
    ...boardArray.map((_, i) => boardArray.map((_, j) => ({ row: j, col: i }))),
    boardArray.map((_, i) => ({ row: i, col: i })),
    boardArray.map((_, i) => ({ row: boardSize - 1 - i, col: i })),
  ];
}

function deriveGameBoard(players: Player[], boardSize: number, turns: Turn[]) {
  // initial board
  const gameBoard: (number | null)[][] = Array.from({ length: boardSize }, () =>
    Array.from({ length: boardSize }, () => null),
  );
  // apply turns
  turns.forEach((turn, turnNum) => {
    gameBoard[turn.row][turn.col] = turnNum % players.length;
  });
  return gameBoard;
}

const deriveWinner = (
  gameBoard: (number | null)[][],
  WIN_COMBOS: { row: number; col: number }[][],
  turns: Turn[],
  boardSize: number,
): number | null => {
  let winner = null;
  for (const combo of WIN_COMBOS) {
    const player = gameBoard[combo[0].row][combo[0].col];
    if (player === null) continue;
    if (combo.every(({ row, col }) => gameBoard[row][col] === player)) {
      winner = player;
    }
  }
  if (winner === null && turns.length === boardSize * boardSize) {
    winner = -1; // draw
  }
  return winner;
};
