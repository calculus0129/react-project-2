import { useState } from 'react';

export default function PlayerInfo({ initialName, symbol, isActive}) {
  const [isEditing, setIsEditing] = useState(false);
  const [playerName, setPlayerName] = useState(initialName);

  function handleEditClick() {
    setIsEditing((editing) => !editing); // Schedules a state update based on the latest available state value.
  }

  function handleNameChange(hitEvent) {
    console.log(hitEvent); // This gives interesting result!
    setPlayerName(hitEvent.target.value);
  }

  const editablePlayerName = isEditing
    ? <input type="text" name="" id="" required value={playerName} onChange={handleNameChange}/>
    : <span className="player-name">{playerName}</span>;
  const editBtn = <button onClick={handleEditClick}>{isEditing ? 'Save' : 'Edit'}</button>;
  return <li className={isActive ? 'active' : undefined}>
    <span className="player">
      {editablePlayerName}
      <span className="player-symbol">{symbol}</span>
    </span>
    {editBtn}
  </li>;
}