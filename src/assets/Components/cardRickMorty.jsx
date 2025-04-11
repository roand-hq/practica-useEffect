import React from "react";

// Componente que muestra una card individual de personaje
const RickAndMortyCard = ({ character }) => {
    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white border border-gray-200 m-4">
            <img
                className="h-64 object-cover mx-auto"
                src={character.image}
                alt={character.name}
            />
            <div className="px-6 py-4">
                <h2 className="font-bold text-xl mb-2 text-gray-800">{character.name}</h2>
                <p className="text-gray-600 text-sm mb-4">{character.status} - {character.species}</p>
                <div className="text-gray-700 text-sm">
                    <p><span className="font-semibold">Gender:</span> {character.gender}</p>
                    <p><span className="font-semibold">Origin:</span> {character.origin.name}</p>
                    <p><span className="font-semibold">Location:</span> {character.location.name}</p>
                </div>
            </div>
        </div>
    );
};

export default RickAndMortyCard;
