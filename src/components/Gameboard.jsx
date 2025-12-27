import { useState } from "react";

const grid = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
]


export default function Gameboard({playerTurnSwitch, currentPlayer}){
    const [GameBoard, setPlayerClick] = useState(grid);
    
    function handlePLayerClick(rowIndex, colIndex){
        
        setPlayerClick(previousGrid => {
            const newGrid = previousGrid.map(innerGrid => [...innerGrid])
            newGrid[rowIndex][colIndex] = currentPlayer
            return newGrid
            
        });

        playerTurnSwitch();
    }

    return (
        <ol id="game-board">
            {grid.map((row, rowIndex) => <li key={rowIndex}>
                <ol>
                    {row.map((col, colIndex) => 
                    <li key={colIndex}>
                        <button onClick={() => handlePLayerClick(rowIndex, colIndex)}>{GameBoard[rowIndex][colIndex]}</button>
                    </li>)}
                </ol>
            </li>)}
        </ol>
    );
}