export const WIN_COMBOS = [
    ...[0,1,2].map(i=>
        [0,1,2].map(j=>
            ({row:i, col:j})
        )
    ),
    ...[0,1,2].map(i=>
        [0,1,2].map(j=>
            ({row:j, col:i})
        )
    ),
    [0,1,2].map(i=>({row:i,col:i})),
    [0,1,2].map(i=>({row:2-i,col:i})),

];