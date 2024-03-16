import PlayerInfo from './components/PlayerInfo.jsx';

function App() {
  return <main>
    <div id="game-container">
      {/* PLAYERS */}
      <ol id="players">
        <PlayerInfo name="Player 1" symbol="X" />
        <PlayerInfo name="Player 2" symbol="O" />
      </ol>

      {/* GAME BOARD */}
    </div>

    {/* LOG */}
  </main>;
}

export default App
