import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    pageNumber: 1,
    pageSize: 12,
    pageCount: 1,
};

const paginationSlice = createSlice({
    name: 'pagination',
    initialState,
    reducers: {
        setPageNumber(state, action) {
            state.pageNumber = action.payload;
        },
        setPageSize(state, action) {
            state.pageSize = action.payload;
        },
        setPageCount(state, action) {
            state.pageCount = action.payload;
        },
    },
});

export const { setPageNumber, setPageSize, setPageCount } =
    paginationSlice.actions;
export default paginationSlice.reducer;
