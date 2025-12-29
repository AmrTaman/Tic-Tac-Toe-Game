import { useState } from "react";
import Player from "./components/player.jsx";
import Gameboard from "./components/Gameboard.jsx";
import Log from "./components/Log.jsx";
import Gameover from "./components/Gameover.jsx";
import { WINNING_COMBINATIONS } from "../winning-combinations.js";

const initialgrid = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

function App() {
  const [playerStats, setPLayerStats] = useState([]);
  const [playerName, setPlayerName] = useState({
    X: 'player 1',
    O: 'player 2',
  })

  let playerSymbol = "X";
  if (playerStats.length > 0 && playerStats[0].playerSymbol === "X") {
    playerSymbol = "O";
  }

  let grid = initialgrid.map((innerArray) => [...innerArray]);
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

  function rematch(){
    setPLayerStats([])
  }

function handlePLayerName(playername, symbol){
  console.log(playername)
  setPlayerName((info) => ({
    ...info,
    [symbol]: playername
  }))
}


  let winner;
  let draw = playerStats.length === 9
  for (let combination of WINNING_COMBINATIONS) {
    const firstCombination = grid[combination[0].row][combination[0].column];
    const secondCombination = grid[combination[1].row][combination[1].column];
    const thirdCombination = grid[combination[2].row][combination[2].column];
  
    if (
      firstCombination &&
      firstCombination === secondCombination &&
      firstCombination === thirdCombination
    ) {
      winner = playerName[firstCombination];
    }
  }

  return (
    <>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player name= {playerName.X} symbol="X" activity={playerSymbol === "X"} playersInfo={handlePLayerName}/>
          <Player name= {playerName.O} symbol="O" activity={playerSymbol === "O"} playersInfo={handlePLayerName}/>
        </ol>
        {(winner || draw) && <Gameover winner={winner} rematch = {rematch} />}
        <Gameboard playerTurnSwitch={handlePlayerSymbol} grid={grid} />
      </div>
      <Log playerTurns={playerStats} />
    </>
  );
}

export default App;
