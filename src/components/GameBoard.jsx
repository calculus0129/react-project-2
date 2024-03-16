// import { useState } from 'react';
export default function GameBoard({ onSelectSquare, gameBoard }) {

    // const [gameBoard, setGameBoard] = useState(initialGameBoard);

    // function onBoardClick(rowIdx, colIdx) {
    //     if (gameBoard[rowIdx][colIdx] === null) {
    //         setGameBoard((prevGameBoard) => {
    //             const nextGameBoard = [...prevGameBoard.map(innerArray => [...innerArray])];
    //             nextGameBoard[rowIdx][colIdx] = activePlayerSymbol;
    //             return nextGameBoard;
    //         });

    //         onSelectSquare();
    //     }
    // }

    return <ol id="game-board">
        {/* this is fine as we will not swap the elements of the arrays. */}
        {gameBoard.map((row, rowIndex) => <li key={rowIndex}>
            <ol>
                {row.map((playerSymbol, colIndex) =>
                    <li key={colIndex}>
                        <button
                            onClick={() => onSelectSquare(rowIndex, colIndex)}
                            disabled={playerSymbol !== null}>
                            {playerSymbol}
                        </button>
                    </li>)}
            </ol>
        </li>)}
    </ol>;
}