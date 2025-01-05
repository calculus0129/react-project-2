import Player from "@/data/Player";

interface GameBoardProps {
  players: Player[];
  gameBoard: (number | null)[][];
  setGameBoard: (
    closure: (board: (number | null)[][]) => (number | null)[][]
  ) => void;
  curPlayer: number;
  updatePlayer: () => void;
}

const GameBoard: React.FC<GameBoardProps> = ({
  players,
  gameBoard,
  setGameBoard,
  curPlayer,
  updatePlayer,
}) => {
  const handleSelectSquare = (row: number, col: number) => () => {
    // Change the Board
    setGameBoard((prevBoard) => {
      const newBoard = structuredClone(prevBoard);
      newBoard[row][col] = curPlayer;
      console.log(newBoard);
      return newBoard;
    });
    // Change turn of Players
    updatePlayer();
  };
  return (
    <>
      {gameBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((col, colIndex) => (
              <li key={colIndex}>
                <button
                  onClick={handleSelectSquare(rowIndex, colIndex)}
                  disabled={col !== null}
                >
                  {col !== null ? players[col].symbol : ""}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </>
  );
};

export default GameBoard;
