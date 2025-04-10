import React from "react";

//el componente DragonBallCard recibe un objeto character como prop y lo desestructura para obtener sus propiedades
const DragonBallCard = ({ character }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white border border-gray-200 m-4">
      <img
        className="h-64 object-cover mx-auto"
        src={character.image}
        alt={character.name}
      ></img>
      <div className="px-6 py-4">
        <h2 className="font-bold text-xl mb-2 text-gray-800">{character.name}</h2>
      </div>
    </div>
  );
};
