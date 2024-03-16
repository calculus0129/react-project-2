import PlayerInfo from './components/PlayerInfo.jsx';
import GameBoard from './components/GameBoard.jsx';

function App() {
  return <main>
    <div id="game-container">
      {/* PLAYERS */}
      <ol id="players">
        <PlayerInfo initialName="Player 1" symbol="X" />
        <PlayerInfo initialName="Player 2" symbol="O" />
      </ol>

      {/* GAME BOARD */}
      <GameBoard></GameBoard>
    </div>

    {/* LOG */}
  </main>;
}

export default App
