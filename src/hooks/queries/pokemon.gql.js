import {gql} from '@apollo/client';

export const ALL_POKEMON_QUERY = gql`
    query allPokemon ($limit: Int!, $offset: Int!) {
        pokemon_v2_pokemon(limit: $limit, offset: $offset, distinct_on: id, order_by: {id: asc}, where: {id: {_lt: 152}}) {
            name
            id
            pokemon_v2_pokemontypes {
                pokemon_v2_type {
                    name
                }
            }
            base_experience
            pokemon_v2_pokemonstats(limit: 1) {
                base_stat
            }
        }
    }
`;

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    getAllPokemonQuery: ALL_POKEMON_QUERY,
};
