import Player from "@/data/Player";

interface GameBoardProps {
  players: Player[];
  gameBoard: (number | null)[][];
  playTurn: (row: number, col: number) => void;
}

const GameBoard: React.FC<GameBoardProps> = ({
  players,
  gameBoard,
  playTurn,
}) => {
  const handleSelectSquare = (row: number, col: number) => () => {
    console.log(row, col);
    // Play Turn
    playTurn(row, col);
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
