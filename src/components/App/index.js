import { useState } from 'react';

import figurines from '../../data/characters-full'
import games from '../../data/games'

import Header from '../Header';
import GameList from '../GameList';
import FigurineList from '../FigurineList';

function App() {
  const [selectedGame, setSelectedGame] = useState('Super Mario')
  const [searchInput, setSearchInput] = useState('')

  const handleGameChange = (event) => {
    setSearchInput(event.target.value);
  };

  const handleSelectGame =(name) => {
    setSelectedGame(name);
  };

  const searchedGame = games.filter((game) => game.toLocaleLowerCase().includes(searchInput.toLocaleLowerCase()));
  
  const searchedFigurine = figurines.filter((figurine) => figurine.game === selectedGame)

  return (
    <div className="App">
      <Header
        onSearchChange={handleGameChange}
        game={searchInput}
       />
       <div className="flex flex-row justify-around p-4 font-press-start">
        <GameList
          gameList={searchedGame}
          onSelectGame={handleSelectGame}
        />
        <FigurineList
          figurines={searchedFigurine}
        />
       </div>
    </div>
  );
}

export default App;
