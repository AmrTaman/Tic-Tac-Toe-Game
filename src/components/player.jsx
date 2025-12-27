import { useState } from "react";



export default function Player({name, symbol}){
    const [PlayerName, setPlayerName] = useState(name);
    const [isEditing, setIsEditing] = useState(false);
    
    function handleIsEditing(){
        setIsEditing((editing) => !editing);
    }

    function handlePLayerName(event){
        setPlayerName(event.target.value);
    }

    return(
        <li className="player">
            <span >
               {isEditing ? <input type="text" value={PlayerName} onChange={handlePLayerName} required/>:<span className="player-name">{PlayerName}</span>} 
              <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleIsEditing}>{isEditing ? "save" : "edit"}</button>
        </li>
    );
}