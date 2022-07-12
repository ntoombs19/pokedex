import {Grid, Typography} from "@mui/material";
import Image from "next/image";

const Generations = () => {
    return (
        <Grid container spacing={'20px'}>
            <Grid item xs={12} sm={6} md={4}>
                <Image src={'/images/gen1.png'} width={600} height={300} alt={'Generation 1'}/>
                <Typography variant="h5" component="h5">Generation 1</Typography>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
                <Image src={'/images/gen2.png'} width={600} height={300} alt={'Generation 2'}/>
                <Typography variant="h5" component="h5">Generation 2</Typography>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
                <Image src={'/images/gen3.png'} width={600} height={300} alt={'Generation 3'}/>
                <Typography variant="h5" component="h5">Generation 3</Typography>
            </Grid>
        </Grid>
    )
};

export default Generations;
