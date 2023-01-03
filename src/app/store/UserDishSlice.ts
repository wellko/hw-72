import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {Order} from "../../types";
import {RootState} from "./store";

interface State {
	order: Order
}

const initialState: State = {
	order: {},
}

const UserDishesSlice = createSlice(
	{
		name: 'UserDishes',
		initialState,
		reducers: {
			addDish: (state, {payload: dish}: PayloadAction<string>) => {
				if (state.order[dish] !== undefined){
					state.order[dish]++;
				}else {
					state.order[dish] = 1;
				}
			},
			RemoveDish: (state, {payload: dish}: PayloadAction<string>) => {
				if (state.order[dish] >= 1) {
					state.order[dish]--;
				}
			}
		},
		extraReducers: (builder) => {
		}
	}
)

export const UserDishesReducer = UserDishesSlice.reducer;
export const UserSelectDishes = (state: RootState) => state.order;
export const {addDish, RemoveDish} = UserDishesSlice.actions;