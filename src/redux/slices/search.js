import { createSlice } from '@reduxjs/toolkit';

const initialState = { searchQuery: '' };

const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        setSearch(state, action) {
            state.searchQuery = action.payload;
        },
    },
});

export const { setSearch } = searchSlice.actions;
export default searchSlice.reducer;
