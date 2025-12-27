import { useState } from "react"
import Player from "./components/player.jsx"
import Gameboard from "./components/Gameboard.jsx"


function App() {
  const [playerSymbol, setPlayerSymbol] = useState("X");

  function handlePlayerSymbol(){
    setPlayerSymbol(prevPlayer => prevPlayer === 'X' ? "O" : "X");
  }

  return (
    <>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player name="player1" symbol="X" activity={playerSymbol==='X'}/>
          <Player name="player2" symbol="O" activity={playerSymbol==="O"}/>
        </ol>
        <Gameboard playerTurnSwitch={handlePlayerSymbol} currentPlayer={playerSymbol}/>
      </div>
        lOGS
    
    </>
  )
}

export default App
