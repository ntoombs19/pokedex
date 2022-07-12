import { Grid, Typography } from '@mui/material';
import Image from 'next/image';
import useGeneration from '../../hooks/useGeneration';

const Generation = ({ number }) => {
    const { handleClick } = useGeneration();

    return (
        <Grid item xs={12} sm={6} md={4} onClick={() => handleClick(number)}>
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
