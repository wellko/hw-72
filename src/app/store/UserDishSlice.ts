import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {Order} from "../../types";
import {RootState} from "./store";
import {MakeOrder} from "./UserDishThunks";

interface State {
	order: Order;
	makingOrder: boolean;
}

const initialState: State = {
	order: {},
	makingOrder: false,
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
				if (state.order[dish] === 1) {
					delete state.order[dish];
				}else {
					state.order[dish]--;
				}
			}
		},
		extraReducers: (builder) => {
			builder.addCase(MakeOrder.pending, (state) => {
				state.makingOrder = true;
			})
			builder.addCase(MakeOrder.fulfilled, (state) => {
				state.makingOrder = false;
				state.order = {};
			})
			builder.addCase(MakeOrder.rejected, (state) => {
				state.makingOrder = false;
			})
		}
	}
)

export const UserDishesReducer = UserDishesSlice.reducer;
export const UserSelectDishes = (state: RootState) => state.order;
export const {addDish, RemoveDish} = UserDishesSlice.actions;