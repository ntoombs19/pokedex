import { useLazyQuery } from '@apollo/client';
import operations from './queries/pokemon.gql';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';

// The id of each generation's last Pokémon
const GENERATIONS = [0, 151, 251, 386];

export default function useList() {
    const { getPokemonQuery } = operations;

    const { pageNumber, pageSize } = useSelector((state) => state.pagination);
    const { currentGeneration } = useSelector((state) => state.generation);
    const { searchQuery } = useSelector((state) => state.search);

    // The plural form of pokemon is also pokemon
    const [
        getPokemonList,
        { error: pokemonError, loading: pokemonLoading, data: pokemonData },
    ] = useLazyQuery(getPokemonQuery, {
        notifyOnNetworkStatusChange: true,
        fetchPolicy: 'cache-and-network',
    });

    useEffect(() => {
        getPokemonList({
            variables: {
                limit: pageSize,
                offset: (pageNumber - 1) * pageSize,
                where: {
                    name: {
                        _regex: searchQuery,
                    },
                    id: {
                        _gt: GENERATIONS[currentGeneration - 1],
                        _lte: GENERATIONS[currentGeneration],
                    },
                },
            },
        });
    }, [pageNumber, pageSize, searchQuery, currentGeneration, getPokemonList]);

    return {
        pokemonError,
        pokemonLoading,
        pokemonData,
    };
}
