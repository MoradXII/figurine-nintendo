import PropTypes from 'prop-types';

function GameList({gameList, onSelectGame}) {
  return (
    <ul className="w-1/3 overflow-y-auto h-80">
      {
        gameList.map((game) => (
        <li
          key={game}
          onClick={() => {
            onSelectGame(game);
            console.log(game);
          }}
          className="text-xs mt-2 cursor-pointer hover:bg-red-200"
        >
          {game}
        </li>

        ))
      }
    </ul>
  );
}

GameList.propTypes = {
  gameList: PropTypes.array.isRequired,
  onSelectGame: PropTypes.func.isRequired,
}

export default GameList;