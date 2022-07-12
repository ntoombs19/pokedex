import { gql } from '@apollo/client';

export const QUERY_POKEMON = gql`
    query allPokemon(
        $limit: Int
        $offset: Int
        $where: pokemon_v2_pokemon_bool_exp
    ) {
        pokemon_v2_pokemon(
            limit: $limit
            offset: $offset
            distinct_on: id
            order_by: { id: asc }
            where: $where
        ) {
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

export const QUERY_POKEMON_COUNT = gql`
    query allPokemonCount($where: pokemon_v2_pokemon_bool_exp) {
        pokemon_v2_pokemon(distinct_on: id, where: $where) {
            id
        }
    }
`;

export const QUERY_SINGLE_POKEMON = gql`
    query singlePokemon($where: pokemon_v2_pokemon_bool_exp) {
        pokemon_v2_pokemon(where: $where) {
            id
            pokemon_v2_pokemontypes {
                pokemon_v2_type {
                    name
                }
            }
            name
            base_experience
            height
            weight
            pokemon_v2_pokemonstats {
                pokemon_v2_stat {
                    name
                }
                base_stat
            }
            pokemon_v2_pokemonabilities {
                pokemon_v2_ability {
                    name
                }
                is_hidden
            }
        }
    }
`;

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    getPokemonQuery: QUERY_POKEMON,
    getPokemonCountQuery: QUERY_POKEMON_COUNT,
    getSinglePokemonQuery: QUERY_SINGLE_POKEMON,
};
