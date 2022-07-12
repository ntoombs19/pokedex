import useSearch from '../../hooks/useSearch';
import { TextField } from '@mui/material';
import { useTheme } from '@mui/material/styles';

const Search = () => {
    const { debouncedHandleChange } = useSearch();

    const theme = useTheme();

    return (
        <TextField
            sx={{ bgcolor: theme.palette.background.default }}
            id="outlined-basic"
            label="Search"
            variant="filled"
            onChange={debouncedHandleChange}
        />
    );
};

export default Search;
