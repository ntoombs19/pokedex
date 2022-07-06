import {useQuery} from '@apollo/client'
import operations from './queries/allPokemon.gql'
import {useMemo} from "react";

export default function usePokemon() {
    const { getAllPokemonQuery } = operations;
    const {
        error,
        loading,
        data,
    } = useQuery(getAllPokemonQuery, {
        notifyOnNetworkStatusChange: true,
        fetchPolicy: 'cache-and-network',
        variables: {
            limit: 10,
            filter: true,
        }
    });

    return {
        loading,
        data,
        error,
    }
}
