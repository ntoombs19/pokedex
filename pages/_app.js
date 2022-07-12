import '../src/styles/globals.css';
import {
    ApolloClient,
    InMemoryCache,
    ApolloProvider,
    HttpLink,
    from,
} from '@apollo/client';
import { onError } from '@apollo/client/link/error';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Provider as AppProvider } from 'react-redux';
import { StyledEngineProvider } from '@mui/material/styles';
import { store } from '../src/redux/store';

const errorLink = onError(({ graphQLErrors, networkErrors }) => {
    if (graphQLErrors) {
        graphQLErrors.forEach((error) => {
            console.error(error);
        });
    }
});
const link = from([
    errorLink,
    new HttpLink({ uri: process.env.NEXT_PUBLIC_POKEDEX_API_ENDPOINT }),
]);
const client = new ApolloClient({
    link,
    cache: new InMemoryCache(),
});

const theme = createTheme({
    palette: {
        background: {
            cardHeader: '#EEEEEE',
        },
        pokeball_red: {
            main: '#CC0000',
            contrastText: '#FFFFFF',
        },
        cerulean_blue: {
            main: '#3B4CCA',
            contrastText: '#FFFFFF',
        },
        golden_yellow: {
            main: '#FFDE00',
            contrastText: '#000000',
        },
        gold_foil: {
            main: '#B3A125',
            contrastText: '#000000',
        },
        normal: {
            main: '#A8A77A',
            contrastText: '#000000',
        },
        fire: {
            main: '#EE8130',
            contrastText: '#000000',
        },
        water: {
            main: '#6390F0',
            contrastText: '#000000',
        },
        electric: {
            main: '#F7D02C',
            contrastText: '#000000',
        },
        grass: {
            main: '#7AC74C',
            contrastText: '#000000',
        },
        ice: {
            main: '#96D9D6',
            contrastText: '#000000',
        },
        fighting: {
            main: '#C22E28',
            contrastText: '#FFFFFF',
        },
        poison: {
            main: '#A33EA1',
            contrastText: '#FFFFFF',
        },
        ground: {
            main: '#E2BF65',
            contrastText: '#000000',
        },
        flying: {
            main: '#A98FF3',
            contrastText: '#000000',
        },
        psychic: {
            main: '#F95587',
            contrastText: '#000000',
        },
        bug: {
            main: '#A6B91A',
            contrastText: '#000000',
        },
        rock: {
            main: '#B6A136',
            contrastText: '#000000',
        },
        ghost: {
            main: '#735797',
            contrastText: '#FFFFFF',
        },
        dragon: {
            main: '#6F35FC',
            contrastText: '#FFFFFF',
        },
        dark: {
            main: '#705746',
            contrastText: '#FFFFFF',
        },
        steel: {
            main: '#B7B7CE',
            contrastText: '#000000',
        },
        fairy: {
            main: '#D685AD',
            contrastText: '#000000',
        },
    },
});

function MyApp({ Component, pageProps }) {
    return (
        <ApolloProvider client={client}>
            <StyledEngineProvider injectFirst>
                <ThemeProvider theme={theme}>
                    <AppProvider store={store}>
                        <Component {...pageProps} />
                    </AppProvider>
                </ThemeProvider>
            </StyledEngineProvider>
        </ApolloProvider>
    );
}

export default MyApp;
