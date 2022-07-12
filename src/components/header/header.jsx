import {Box, Container, Typography} from "@mui/material";
import Image from "next/image";
import Search from "../search/search";
import {useTheme} from "@mui/material/styles";
import styles from "./header.module.css"

const Header = () => {
    const theme = useTheme();
    return (
        <Container maxWidth={false} disableGutters={true} style={{background: theme.palette.pokeball_red.main}}>
            <Container maxWidth="xl" className={styles.header}>
                <Box className={styles.logo}>
                    <Image width={128} height={127} src={'/logo.png'} alt={'Pokédex Logo'}/>
                </Box>
                <Box className={styles.right}>
                    <Search/>
                    <Typography variant="h3" component="h1" sx={{color: theme.palette.pokeball_red.contrastText}}>Pokédex</Typography>
                </Box>
            </Container>
        </Container>
    );
}

export default Header;
