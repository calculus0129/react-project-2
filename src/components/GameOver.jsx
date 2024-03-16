export default function GameOver({winner, onRestart}) {
    return <div id = 'game-over'>
        <h2>Game Over!</h2>
        {winner?<p>{winner} won!</p>:<p>It's a Draw!</p>}
        {/* {<p>{winner ? `${winner} won!` : "It's a draw!"}</p>}
        {<p>{{winner} ? `${winner} won!` : "It's a draw!"}</p>} */}
        {/* $apos; in HTML means the single quote */}
        <p>
            <button onClick={onRestart}>Rematch!</button>
        </p>
    </div>
}