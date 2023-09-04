import { configureStore } from '@reduxjs/toolkit';
import {todoReducer} from "./todoAction";


export const store = configureStore({
    reducer: {
        todo: todoReducer
    },
});