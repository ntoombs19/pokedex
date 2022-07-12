import useList from "../hooks/useList";
import Pokemon from "./listItem";
import PokemonLoading from "./listLoading";
import {Alert, Grid, Pagination} from "@mui/material";

const list = () => {
    const {
        pokemonData,
        pokemonLoading,
        pokemonError,
        page,
        handleChange
    } = useList();

    if (error) {
        return <Alert severity="error">{error.message}</Alert>
    }

    const pokemonList = pokemonData?.pokemon_v2_pokemon.map((pokemon) => {
        return ( <Pokemon key={pokemon.id} loading={loading} pokemon={pokemon} />)
    })

    return (
        <>
            <Grid container spacing={'20px'}>
                {loading || !pokemonList.length ? Array.from(Array(12)).map((_, i) => {
                    return (<PokemonLoading key={i} />);
                }) : pokemonList}
            </Grid>
            <Pagination count={13} size="large" page={page} onChange={handleChange} />
        </>
    )
};

export default list;
