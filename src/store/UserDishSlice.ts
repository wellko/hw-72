import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import { Order} from "../types";
import {RootState} from "../app/store";
import {MakeOrder} from "./UserDishThunks";

interface State {
	order: Order;
	makingOrder: boolean;
	modal: boolean;
	formFilled: boolean;
}

const initialState: State = {
	order: {},
	makingOrder: false,
	modal: false,
	formFilled: false
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
			},
			DeleteDish: (state, {payload:dish}:PayloadAction<string> )=>{
				delete state.order[dish];
			},
			closeModal: (state) => {
				state.modal = false;
			},
			openModal: (state) => {
				state.modal = true;
			},
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
export const {addDish, RemoveDish, closeModal, openModal, DeleteDish} = UserDishesSlice.actions;