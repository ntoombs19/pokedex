import useList from '../../hooks/useList';
import Pokemon from './listItem';
import PokemonLoading from './listItemLoading';
import { Alert, Grid } from '@mui/material';
import styles from './list.module.scss';

const List = () => {
    const { pokemonData, pokemonLoading, pokemonError } = useList();

    if (pokemonError) {
        console.error(pokemonError);
        return <Alert severity="error">{pokemonError.message}</Alert>;
    }

    const pokemonList = pokemonData?.pokemon_v2_pokemon.map(
        (pokemon, index) => <Pokemon key={index} pokemon={pokemon} />,
    );

    if (!pokemonLoading && !pokemonList?.length)
        return <Alert severity="info">No Pokémon found</Alert>;

    return (
        <Grid className={styles.grid} container spacing={'20px'}>
            {pokemonLoading && !pokemonList?.length
                ? Array.from(Array(12)).map((_, i) => <PokemonLoading key={i} />)
                : pokemonList}
        </Grid>
    );
};

export default List;
