import { createSlice } from '@reduxjs/toolkit';

const initialState = { currentGeneration: 1 };

const generationSlice = createSlice({
    name: 'generation',
    initialState,
    reducers: {
        setGeneration(state, action) {
            state.currentGeneration = action.payload;
        },
    },
});

export const { setGeneration } = generationSlice.actions;
export default generationSlice.reducer;
