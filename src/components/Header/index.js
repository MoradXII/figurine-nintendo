import PropTypes from 'prop-types';

function Header({onSearchChange, game}) {

  return (
<header className="flex flex-col items-center justify-center p-4 font-press-start">
  <h1 className="text-3xl">Figurine - Nintendo</h1>

  <input
    className="pb-4 mt-8 border-b border-red-500 focus:outline-none w-3/4 text-center"
    placeholder="Rechercher..."
    onChange={onSearchChange}
    value={game}
  />
</header>
  );
}

Header.propTypes = {
  onSearchChange: PropTypes.func.isRequired,
  game: PropTypes.string.isRequired,
}

export default Header;