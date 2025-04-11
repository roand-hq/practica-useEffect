import React, { useEffect, useState } from "react";
import RickAndMortyCard from "../Components/cardRickMorty"

const Morty = () => {
    const [characters, setCharacters] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchCharacters = async () => {
            try {
                const response = await fetch("https://rickandmortyapi.com/api/character");
                const data = await response.json();
                setCharacters(data.results);
            } catch (error) {
                console.error("Error al obtener los personajes:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchCharacters();
    }, []);

    return (
        <div className="p-6 bg-gray-100 min-h-screen">
            <h1 className="text-3xl font-bold mb-6 text-center text-green-700">Personajes de Rick y Morty</h1>
            {loading ? (
                <p className="text-center text-gray-700">Cargando personajes...</p>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {characters.map((character) => (
                        <RickAndMortyCard key={character.id} character={character} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default Morty;
