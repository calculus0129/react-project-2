export default function Log({ turns }) {

    return <ol id='log'>
        {
            (turns.length>0) ? [<li className="highlighted">{turns[0].playerSymbol} selected {turns[0].square.row}, {turns[0].square.col}</li>,
            ...turns.slice(1).map(({ square: { row, col }, playerSymbol }) =>
                <li key={`${row} ${col}`}> {playerSymbol} selected {row}, {col}</li>)]
            :undefined
        }
        {/* {
            {turns.length>0} && <>
                <li className="highlighted">{turns[0].square.row} {turns[0].square.col} {turns[0].playerSymbol}</li>
                
            </>
        } */}
    </ol>;
}