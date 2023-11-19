// Card.js

import React from 'react';

const CardItems = ({ imageUrl, name, description,  }) => {

  

  return (
    <div className="max-w-sm rounded overflow-hidden bg-gray-200 shadow-lg ">
      <img className="w-full" src={imageUrl} alt={name} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{name}</div>
        <p className="text-gray-700 text-base">{description}</p>
      </div>
      <div className="px-6 py-4">
        <button
         onClick={() => alert(`Added ${name} to Cart`)} 
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default CardItems;
 