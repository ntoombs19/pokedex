import { Grid, Typography } from '@mui/material';
import Image from 'next/image';
import useGeneration from '../../hooks/useGeneration';
import styles from './generation.module.scss';

const Generation = ({ number, generations, gap }) => {
    const { handleClick } = useGeneration();

    return (
        <Grid item xs={12} sm={6} md={4} onClick={(event) => handleClick(event, number)}
              onKeyUp={(event) => handleClick(event, number)} className={styles.item} tabIndex={0}
              style={{ maxWidth: `calc((100% * 1/${generations}) - ((${gap} * (${generations} - 1)) / ${generations}))` }}
              aria-label={`Generation ${number}`} aria-keyshortcuts='Enter Space'>
            <Image
                src={`/images/gen${number}.png`}
                width={600}
                height={300}
                alt={`Generation ${number}`}
            />
            <Typography variant="h5" component="h5" align={'center'}>
                Generation {number}
            </Typography>
        </Grid>
    );
};

export default Generation;
