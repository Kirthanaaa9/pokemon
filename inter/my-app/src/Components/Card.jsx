// src/components/Card.js
import React from 'react';

// Card component to display individual data item
const Card = ({ name, url }) => {
  return (
    <div className="border rounded-lg p-4 m-4 text-center shadow-lg transform transition-transform hover:scale-105">
      {/* Display the name of the item */}
      <h2 className="text-xl font-semibold">{name}</h2>
      {/* Display the URL of the item */}
      <p className="text-gray-600">{url}</p>
    </div>
  );
};

export default Card;
