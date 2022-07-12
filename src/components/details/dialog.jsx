import { Alert, Dialog as MuiDialog, Snackbar } from '@mui/material';
import useDetails from '../../hooks/useDetails';
import Title from './title';
import Content from './content';
import ContentLoading from './contentLoading';
import styles from './details.module.scss';

const Dialog = () => {
    const { open, handleClose, pokemonError, pokemonLoading, pokemonData } =
        useDetails();

    const pokemon = pokemonData?.pokemon_v2_pokemon[0] || {};
    const { id, name } = pokemon || {};

    if (pokemonError) {
        console.error(pokemonError);
        return (
            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                <Alert severity="error">
                    The selected Pokémon data could not be retrieved.
                </Alert>
            </Snackbar>
        );
    }

    return (
        <MuiDialog
            onClose={handleClose}
            aria-labelledby="customized-dialog-title"
            open={open}
        >
            {!pokemonLoading && id ? (
                <>
                    <Title onClose={handleClose}>
                        {name}{' '}
                        <span className={styles.number}>
                            #{String(id).padStart(3, '0')}
                        </span>
                    </Title>
                    <Content pokemon={pokemon} />
                </>
            ) : (
                <>
                    <Title onClose={handleClose}>Loading...</Title>
                    <ContentLoading />
                </>
            )}
        </MuiDialog>
    );
};

export default Dialog;
