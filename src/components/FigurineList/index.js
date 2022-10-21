import PropTypes from 'prop-types';

function FigurineList({figurines}) {
  return (
    <div className='flex flex-wrap w-2/3'>
      {
        figurines.map((figurine) => (
          <div
            key={figurine.id}
            className="flex flex-col items-center justify-center border-dashed border-4 border-red-300 rounded-lg m-4 p-4"
            >
            <img
              src={figurine.image}
              alt={figurine.name}
              className="h-40 w-32"
            />
            <h2 className="text-xs mt-4 w-12 mr-10">
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