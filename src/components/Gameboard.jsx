

export default function Gameboard({ playerTurnSwitch, grid }) {


  return (
    <ol id="game-board">
      {grid.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((col, colIndex) => (
              <li key={colIndex}>
                <button onClick={() => playerTurnSwitch(rowIndex, colIndex)} disabled={grid[rowIndex][colIndex]}>
                  {grid[rowIndex][colIndex]}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
