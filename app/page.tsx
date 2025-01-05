import "./page.css";
import Player from "@/component/Player";

export default function Home() {
  return (
    <main>
      <div id="game-container">
        <ol id="players">
          <li>
            <Player defaultName="Player 1" symbol="X" />
          </li>
          <li>
            <Player defaultName="Player 2" symbol="O" />
          </li>
        </ol>
        GAME BOARD
      </div>
      LOG
    </main>
  );
}
