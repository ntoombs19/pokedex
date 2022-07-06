import usePokemon from "../hooks/usePokemon";
import {useEffect} from "react";
import Pokemon from "./pokemon";

const PokemonList = () => {
    const {
        data,
        loading,
        error,
    } = usePokemon();

    useEffect(() => {
        console.log('Data: ', data);
    }, [data]);
    useEffect(() => {
        console.log('Loading: ', loading);
    }, [loading]);
    useEffect(() => {
        console.log('Error: ', error);
    }, [error]);

    if (loading && !data?.allPokemon) {
        return <h1>Loading...</h1>
    }

    const pokemonList = data?.allPokemon.map((pokemon) => {
        return ( <Pokemon pokemon={pokemon} />)
    })

    return (
        <ul>
            {pokemonList}
        </ul>
    )
};

export default PokemonList;
