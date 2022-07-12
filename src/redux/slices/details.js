import { createSlice } from '@reduxjs/toolkit';

const initialState = { open: false, id: 0 };

const detailsSlice = createSlice({
    name: 'details',
    initialState,
    reducers: {
        setOpen(state, action) {
            state.open = action.payload;
        },
        setId(state, action) {
            state.id = action.payload;
        },
    },
});

export const { setOpen, setId } = detailsSlice.actions;
export default detailsSlice.reducer;
