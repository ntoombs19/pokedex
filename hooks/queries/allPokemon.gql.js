import { gql } from '@apollo/client';

export const ALL_POKEMON_QUERY = gql`
    query allPokemon ($limit: Int, $filter: Boolean) {
        allPokemon (limit: $limit, filter: $filter) {
            id
            name
        }
    }
`;

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    getAllPokemonQuery: ALL_POKEMON_QUERY,
};
