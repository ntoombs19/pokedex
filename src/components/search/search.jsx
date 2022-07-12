import useList from "../hooks/useList";
import Pokemon from "./listItem";
import PokemonLoading from "./listLoading";
import {Alert, Grid, Pagination, TextField} from "@mui/material";

const pokemonList = () => {
    const {
        data,
        loading,
        error,
        page,
        handleChange
    } = usePokemonSearch();

    return (
        <>
            <TextField id="outlined-basic" label="Outlined" variant="outlined" />
        </>
    )
};

export default pokemonList;
