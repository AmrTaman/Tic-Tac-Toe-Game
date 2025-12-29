
export default function Log({playerTurns}){
   
    return(
        <ol id="log">
            {playerTurns.map(turn => <li key={`${turn.square[0]} ${turn.square[1]}`}>{turn.square[0]},{turn.square[1]} {turn.playerSymbol}</li>)}
        </ol>
    )
}