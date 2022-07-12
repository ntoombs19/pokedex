import { configureStore } from '@reduxjs/toolkit';
import generationReducer from './slices/generation';
import paginationReducer from './slices/pagination';
import searchReducer from './slices/search';
import detailsReducer from './slices/details';

export const store = configureStore({
    reducer: {
        generation: generationReducer,
        pagination: paginationReducer,
        search: searchReducer,
        details: detailsReducer,
    },
});

export default store;
