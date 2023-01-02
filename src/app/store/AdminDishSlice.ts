import {createSlice} from "@reduxjs/toolkit";
import {DishApi, Order} from "../../types";
import {RootState} from "./store";
import {getDishes} from "./AdminDishThunks";

interface State {
	dishes: DishApi[],
	orders: Order[],
}

const initialState: State = {
	dishes: [],
	orders: [],
}

const AdminDishesSlice = createSlice(
	{
		name: 'dishes',
		initialState,
		reducers: {},
		extraReducers: (builder) => {
			builder.addCase(getDishes.fulfilled, (state, action) => {
				state.dishes = action.payload;
			})
		}
	}
)

export const AdminDishesReducer = AdminDishesSlice.reducer;
export const AdminSelectDishes = (state: RootState) => state.dishes;