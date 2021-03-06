import Head from 'next/head';
import List from '../src/components/list/list';
import Pagination from '../src/components/pagination/pagination';
import { Container, Grid } from '@mui/material';
import Header from '../src/components/header/header';
import GenerationsGrid from '../src/components/generations/generationsGrid';
import Dialog from '../src/components/details/dialog';
import styles from '../src/styles/home.module.scss';

export default function Home() {
    return (
        <>
            <Head>
                <title>Pokédex</title>
                <meta
                    name="description"
                    content="A searchable list of all Pokémon including complete Dialog."
                />
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <Header/>
            <Container maxWidth="xl">
                <GenerationsGrid/>
            </Container>
            <Container className={styles.mainContent} maxWidth="xl">
                <Grid className={styles.mainGrid} container spacing={'20px'}>
                    <Grid className={styles.sidebar} sx={{ background: (theme) => theme.palette.background.cardHeader }} item xs={12} sm={6} md={4} lg={3}>
                        <h4 style={{ padding: '20px' }}>More filter options to be added here.</h4>
                    </Grid>
                    <Grid item xs={12} sm={6} md={8} lg={9}>
                        <List/>
                    </Grid>
                </Grid>
                <Pagination/>
            </Container>
            <Dialog/>
        </>
    );
}
