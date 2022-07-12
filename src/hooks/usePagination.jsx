import { useLazyQuery, useQuery } from '@apollo/client';
import operations from './queries/pokemon.gql';
import { useCallback, useEffect, useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setPageNumber, setPageCount } from '../redux/slices';

// The id of each generation's last Pokémon
const GENERATIONS = [0, 151, 251, 386];

export default function useList() {
    const dispatch = useDispatch();
    const { getPokemonCountQuery } = operations;

    const { pageNumber, pageSize, pageCount } = useSelector(
        (state) => state.pagination,
    );
    const { currentGeneration } = useSelector((state) => state.generation);
    const { searchQuery } = useSelector((state) => state.search);

    const [
        getPokemonCount,
        { error: countError, loading: countLoading, data: countData },
    ] = useLazyQuery(getPokemonCountQuery, {
        notifyOnNetworkStatusChange: true,
        fetchPolicy: 'cache-and-network',
    });

    useEffect(() => {
        getPokemonCount({
            variables: {
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
    }, [getPokemonCount, searchQuery, currentGeneration]);

    useEffect(() => {
        const pokemonCount = countData?.pokemon_v2_pokemon?.length;
        if (pokemonCount > 0) {
            dispatch(setPageCount(Math.ceil(pokemonCount / pageSize)));
        }
    }, [countData, dispatch, pageSize]);

    const handleChange = useCallback(
        (event, value) => {
            dispatch(setPageNumber(value));
        },
        [dispatch],
    );

    return {
        pageNumber,
        pageCount,
        handleChange,
    };
}
