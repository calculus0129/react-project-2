const GameOver: React.FC<{ winner?: string; handleRematch: () => void }> = ({
  winner,
  handleRematch,
}) => {
  return (
    <>
      <h2>Game Over!</h2>
      {winner ? <p>{winner} won!</p> : <p>It's a draw!</p>}
      <button onClick={handleRematch}>Rematch!</button>
    </>
  );
};
export default GameOver;
