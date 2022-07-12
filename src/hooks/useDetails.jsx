import { useDispatch, useSelector } from 'react-redux';
import { setOpen, setId } from '../redux/slices';
import { useLazyQuery } from '@apollo/client';
import operations from './queries/pokemon.gql';
import { useEffect } from 'react';

const useDetails = () => {
    const dispatch = useDispatch();
    const { getSinglePokemonQuery } = operations;

    const { open, id } = useSelector((state) => state.details);

    const handleOpen = (event, id) => {
        if (event.code && event.key !== 'Enter' && event.code !== 'Space')
            return;

        dispatch(setOpen(true));
        dispatch(setId(id));
    };
    const handleClose = () => {
        dispatch(setOpen(false));
    };

    const [
        getSinglePokemon,
        { error: pokemonError, loading: pokemonLoading, data: pokemonData },
    ] = useLazyQuery(getSinglePokemonQuery, {
        notifyOnNetworkStatusChange: true,
        fetchPolicy: 'cache-and-network',
    });

    useEffect(() => {
        getSinglePokemon({
            variables: {
                where: {
                    id: {
                        _eq: id,
                    },
                },
            },
        });
    }, [id, getSinglePokemon]);

    return {
        open,
        handleOpen,
        handleClose,
        pokemonError,
        pokemonLoading,
        pokemonData,
    };
};

export default useDetails;
