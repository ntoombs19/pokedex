import { Grid } from '@mui/material';
import Generation from './generation';
import styles from './generation.module.scss';

const GenerationsGrid = () => (
    <Grid className={styles.grid} container spacing={'20px'}>
        <Generation number={1} />
        <Generation number={2} />
        <Generation number={3} />
    </Grid>
);

export default GenerationsGrid;
