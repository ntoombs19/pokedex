import { Grid } from '@mui/material';
import Generation from './generation';
import styles from './generation.module.scss';

const NUMBER_OF_GENERATIONS = 3;
const GAP_WIDTH = '20px';

const GenerationsGrid = () => (
    <Grid className={styles.grid} container spacing={{ gap: GAP_WIDTH }}>
        {[...Array(NUMBER_OF_GENERATIONS)].map((value, index) => <Generation generations={NUMBER_OF_GENERATIONS} gap={GAP_WIDTH} key={index} number={index + 1} />)}
    </Grid>
);

export default GenerationsGrid;
