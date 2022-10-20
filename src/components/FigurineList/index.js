import PropTypes from 'prop-types';

function FigurineList({figurines}) {
  return (
    <div className='flex flex-wrap w-3/4 overflow-y-auto h-80'>
      {
        figurines.map((figurine) => (
          <div
            key={figurine.id}
            className="flex flex-col items-center border-dashed border-4 border-red-300 m-4 p-4 w-1/3"
            >
            <img
              src={figurine.image}
              alt={figurine.name}
              className="h-40 w-32"
            />
            <h2 className="text-center mt-4">
              {figurine.name}
            </h2>
          </div>
        ))
      }

    </div>

  );
}

FigurineList.propTypes ={
  figurines : PropTypes.array.isRequired,
}

export default FigurineList;