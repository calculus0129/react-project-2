const initialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
];

export default function GameBoard() {
    return <ol id="game-board">
        {/* this is fine as we will not swap the elements of the arrays. */}
        {initialGameBoard.map((row, rowIndex) => <li key={rowIndex}>
            <ol>
                {row.map((playerSymbol, colIndex) =>
                    <li key={colIndex}>
                        <button>
                            {playerSymbol}
                        </button>
                    </li>)}
            </ol>
        </li>)}
    </ol>;
}