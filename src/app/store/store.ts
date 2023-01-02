import {configureStore} from "@reduxjs/toolkit";
import {AdminDishesReducer} from "./AdminDishSlice";
import {UserDishesReducer} from "./UserDishSlice";


export const store = configureStore({
	reducer: {
		dishes:AdminDishesReducer,
		order: UserDishesReducer,
	}
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;