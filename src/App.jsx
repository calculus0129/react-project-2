import { useState } from 'react';

import PlayerInfo from './components/PlayerInfo.jsx';
import GameBoard from './components/GameBoard.jsx';
import Log from './components/Log.jsx';
import { WIN_COMBOS } from './winning-combinations.js';
import GameOver from './components/GameOver.jsx';

const PLAYERS = {
  X: 'Player 1',
  O: 'Player 2',
};

const INITIAL_GAME_BOARD = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

function deriveGameBoard(gameTurns) {
  let gameBoard = [...INITIAL_GAME_BOARD.map(innerArray => [...innerArray])];

  for (const turn of gameTurns) {
    const { square: { row, col }, playerSymbol } = turn;
    gameBoard[row][col] = playerSymbol;
  }
  return gameBoard;
}

function deriveWinner(gameBoard, players) {
  let wonPlayer;
  for (const combo of WIN_COMBOS) {
    const view_arr = [0, 1, 2].map(i => gameBoard[combo[i].row][combo[i].col]);
    if (!wonPlayer && view_arr[0] && view_arr[0] === view_arr[1] && view_arr[1] === view_arr[2])
      wonPlayer = players[view_arr[0]];
  }

  return wonPlayer;
}

function deriveActivePlayer(gameTurns) {
  return (gameTurns.length > 0 && gameTurns[0].playerSymbol === 'X') ? 'O' : 'X';
}

function App() {
  const [players, setPlayers] = useState({...PLAYERS});
  const [gameTurns, setGameTurns] = useState([]);
  const activePlayer = deriveActivePlayer(gameTurns);

  const gameBoard = deriveGameBoard(gameTurns);
  let wonPlayer = deriveWinner(gameBoard, players); // null? or undefined?
  
  // deriving a draw
  if (!wonPlayer && gameTurns.length === 3 * 3) {
    wonPlayer = null; // this means that the game is a draw
  }

  function handleSelectSquare(rowIdx, colIdx) {
    // setActivePlayer((curActivePlayer) => curActivePlayer === 'X' ? 'O' : 'X');
    if (wonPlayer === undefined) {
      setGameTurns(prevTurns => {
        const updatedTurns = [{
          square: {
            row: rowIdx,
            col: colIdx,
          },
          playerSymbol: deriveActivePlayer(prevTurns),
        }, ...prevTurns];

        return updatedTurns;

      });
    }
  }

  function handleRestart() {
    setGameTurns([]);
  }

  function handlePlayerNameChange(symbol, newName) {
    setPlayers(prevPlayers => ({ ...prevPlayers, [symbol]: newName }));
  }

  return <main>
    <div id="game-container">
      {/* PLAYERS */}
      <ol id="players" className='highlight-player'>
        <PlayerInfo initialName="Player 1" symbol="X" isActive={activePlayer === 'X'} onChangeName={handlePlayerNameChange} />
        <PlayerInfo initialName="Player 2" symbol="O" isActive={activePlayer === 'O'} onChangeName={handlePlayerNameChange} />
      </ol>

      {wonPlayer !== undefined && <GameOver winner={wonPlayer} onRestart={handleRestart}></GameOver>}

      {/* GAME BOARD */}
      <GameBoard
        onSelectSquare={handleSelectSquare}
        gameBoard={gameBoard}
      ></GameBoard>
    </div>

    {/* LOG */}
    <Log turns={gameTurns} />
  </main>;
}

export default App
