import { configureStore } from '@reduxjs/toolkit';
import {newsReducer} from "./newsAction";


export const store = configureStore({
    reducer: {
        todo: newsReducer
    },
});