import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    pageNumber: 1,
    pageSize: 12,
    pageCount: 1,
}

const pageSlice = createSlice({
    name: 'pagination',
    initialState,
    reducers: {
        setPageNumber(state, action) {
            state.value = action.payload;
        },
        setPageSize(state, action) {
            state.value = action.payload;
        },
        setPageCount(state, action) {
            state.value = action.payload;
        },
    },
})

export const { setPageNumber, setPageSize, setPageCount } = pageSlice.actions
export default pageSlice.reducer
