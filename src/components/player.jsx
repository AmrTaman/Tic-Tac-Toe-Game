import { useState } from "react";

export default function Player({ name, symbol, activity, playersInfo }) {
  const [PlayerName, setPlayerName] = useState(name);
  const [isEditing, setIsEditing] = useState(false);

  function handleIsEditing() {
    setIsEditing((editing) => !editing);
    if(isEditing){
        playersInfo(PlayerName, symbol);
    }
  }

  function handlePLayerName(event) {
    setPlayerName(event.target.value);
  }

  return (
    <li className={`player${activity ? " active" : ""}`}>
      <span>
        {isEditing ? (
          <input
            type="text"
            value={PlayerName}
            onChange={handlePLayerName}
            required
          />
        ) : (
          <span className="player-name">{PlayerName}</span>
        )}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleIsEditing}>{isEditing ? "save" : "edit"}</button>
    </li>
  );
}
