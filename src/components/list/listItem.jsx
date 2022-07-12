import {
    Card,
    CardContent,
    CardHeader,
    CardMedia,
    Chip,
    Grid,
} from '@mui/material';
import styles from './listItem.module.scss';
import { useTheme } from '@mui/material/styles';
import useDetails from '../../hooks/useDetails';

const ListItem = ({ pokemon }) => {
    const {
        id,
        name,
        pokemon_v2_pokemontypes: types,
        base_experience,
        pokemon_v2_pokemonstats: stats,
    } = pokemon;

    const { handleOpen } = useDetails();
    const theme = useTheme();

    return (
        <Grid item xs={12} sm={6} md={4} lg={3}>
            <Card className={styles.card} onClick={(event) => handleOpen(event, id)} onKeyUp={(event) => handleOpen(event, id)} tabIndex={0} aria-label={`Pokémon: ${name}`}
                  aria-keyshortcuts='Enter Space'>
                <CardHeader
                    className={styles.header}
                    title={name}
                    style={{ background: theme.palette.background.cardHeader }}
                ></CardHeader>
                {/* Next.js Image component does not optimize SVG's by default */}
                <CardMedia
                    className={styles.media}
                    component="img"
                    height={'200px'}
                    alt={name}
                    image={`https://unpkg.com/pokeapi-sprites@2.0.4/sprites/pokemon/other/dream-world/${id}.svg`}
                />
                <CardContent className={styles.content}>
                    {types.map(({ pokemon_v2_type }, index) => (
                        <Chip
                            key={index}
                            className={styles.chip}
                            label={pokemon_v2_type.name}
                            color={pokemon_v2_type.name}
                        />
                    ))}
                    <Chip
                        className={styles.chip}
                        label={`Exp: ${base_experience}`}
                    />
                    <Chip
                        className={styles.chip}
                        label={`HP: ${stats[0].base_stat}`}
                    />
                </CardContent>
            </Card>
        </Grid>
    );
};

export default ListItem;
