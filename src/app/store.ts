import {configureStore} from "@reduxjs/toolkit";
import {AdminDishesReducer} from "../store/AdminDishSlice";
import {UserDishesReducer} from "../store/UserDishSlice";


export const store = configureStore({
    reducer: {
        dishes: AdminDishesReducer,
        order: UserDishesReducer,
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;