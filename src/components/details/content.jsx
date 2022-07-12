import {
    Chip,
    DialogContent,
    Table,
    TableBody,
    TableCell,
    TableRow,
} from '@mui/material';
import styles from './details.module.scss';
import convert from 'convert-units';

const Content = ({ pokemon }) => {
    const {
        id,
        name,
        base_experience,
        height,
        weight,
        pokemon_v2_pokemonstats: stats,
        pokemon_v2_pokemonabilities: abilities,
        pokemon_v2_pokemontypes: types,
    } = pokemon || {};

    const imperialHeight = `${Math.floor(
        convert(height / 10)
            .from('m')
            .to('ft'),
    )}'${Math.round(
        convert(height / 10)
            .from('m')
            .to('in') % 12,
    )}"`;
    const imperialWeight = `${convert(weight / 10)
        .from('kg')
        .to('lb')
        .toFixed(1)}lb`;

    if (pokemon !== undefined) {
        return (
            <DialogContent dividers className={styles.content}>
                {/* Next.js Image component does not optimize SVG's by default */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                    alt={name}
                    src={`https://unpkg.com/pokeapi-sprites@2.0.4/sprites/pokemon/other/dream-world/${id}.svg`}
                />
                <Table>
                    <TableBody>
                        <TableRow>
                            <TableCell variant="head">Type</TableCell>
                            <TableCell>
                                {types.map(({ pokemon_v2_type }, index) => (
                                    <Chip
                                        key={index}
                                        className={styles.chip}
                                        label={pokemon_v2_type.name}
                                        color={pokemon_v2_type.name}
                                    />
                                ))}
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell variant="head">Base Exp.</TableCell>
                            <TableCell>{base_experience}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell variant="head">HP</TableCell>
                            <TableCell>{stats[0].base_stat}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell variant="head">Height</TableCell>
                            <TableCell>
                                {height / 10}m ({imperialHeight})
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell variant="head">Weight</TableCell>
                            <TableCell>
                                {weight / 10}kg ({imperialWeight})
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell variant="head">Abilities</TableCell>
                            <TableCell>
                                <ol className={styles.abilities}>
                                    {abilities.map(
                                        (
                                            {
                                                is_hidden,
                                                pokemon_v2_ability: ability,
                                            },
                                            index,
                                        ) => (
                                                <li key={index}>
                                                    {ability.name}
                                                    {is_hidden
                                                        ? ' - (hidden)'
                                                        : null}
                                                </li>
                                            ),
                                    )}
                                </ol>
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </DialogContent>
        );
    }
};

export default Content;
