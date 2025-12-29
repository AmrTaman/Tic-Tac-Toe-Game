import { useState } from "react";
import Player from "./components/player.jsx";
import Gameboard from "./components/Gameboard.jsx";
import Log from "./components/Log.jsx";
import { WINNING_COMBINATIONS } from "../winning-combinations.js";

const initialgrid = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

function App() {
  const [playerStats, setPLayerStats] = useState([]);

  let playerSymbol = "X";
  if (playerStats.length > 0 && playerStats[0].playerSymbol === "X") {
    playerSymbol = "O";
  }

  let grid = initialgrid;
  if (playerStats.length > 0) {
    for (let turn of playerStats) {
      const { square, playerSymbol } = turn;
      const [row, col] = square;
      grid[row][col] = playerSymbol;
    }
  }

  function handlePlayerSymbol(rowIndex, colIndex) {
    setPLayerStats((prevStat) => {
      const newStat = {
        square: [rowIndex, colIndex],
        playerSymbol: playerSymbol,
      };
      return [newStat, ...prevStat];
    });
  }

  let winner;
  for (let combination of WINNING_COMBINATIONS) {
    const firstCombination = grid[combination[0].row][combination[0].column];
    const secondCombination = grid[combination[1].row][combination[1].column];
    const thirdCombination = grid[combination[2].row][combination[2].column];
  
    if (
      firstCombination &&
      firstCombination === secondCombination &&
      firstCombination === thirdCombination
    ) {
      winner = firstCombination;
    }
  }

  return (
    <>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player name="player1" symbol="X" activity={playerSymbol === "X"} />
          <Player name="player2" symbol="O" activity={playerSymbol === "O"} />
        </ol>
        {winner && <p>{winner} Won!</p>}
        <Gameboard playerTurnSwitch={handlePlayerSymbol} grid={grid} />
      </div>
      <Log playerTurns={playerStats} />
    </>
  );
}

export default App;
