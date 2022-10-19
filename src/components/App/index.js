import { useState } from 'react';

import figurines from '../../data/characters-full'
import games from '../../data/games'

import Header from '../Header';

function App() {
  const [selectedGame, setSelectedGame] = useState('')

  const handleGameChange = (event) => {
    setSelectedGame(event.target.value);
  };

  return (
    <div className="App">
      <Header
        onSearchChange={handleGameChange}
        game={selectedGame}
       />
    </div>
  );
}

export default App;
