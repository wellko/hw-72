import {createSlice} from "@reduxjs/toolkit";
import {DishApi, Order} from "../../types";
import {RootState} from "./store";
import {completeOrder, deleteDish, getDishes, getOneDish, getOrders, newDish} from "./AdminDishThunks";

interface State {
	dishes: DishApi[],
	orders: Order[],
	status: {
		loadingDishes: boolean;
		posting: boolean;
		deleting: boolean;
		loadingOrders: boolean;
	}
	edited: DishApi,
}

const initialState: State = {
	dishes: [],
	orders: [],
	status: {
		loadingDishes: false,
		posting: false,
		deleting: false,
		loadingOrders: false,
	},
	edited: {
		title: '',
		price: '',
		image: '',
		id: '',
	},
}

const AdminDishesSlice = createSlice(
	{
		name: 'dishes',
		initialState,
		reducers: {
		},
		extraReducers: (builder) => {
			builder.addCase(getDishes.pending, (state) => {
				state.status.loadingDishes = true;
			})
			builder.addCase(getDishes.fulfilled, (state, action) => {
				state.dishes = action.payload;
				state.status.loadingDishes = false;
			})
			builder.addCase(getDishes.rejected, (state) => {
				state.status.loadingDishes = false;
			})
			builder.addCase(newDish.pending, (state) => {
				state.status.posting = true;
			})
			builder.addCase(newDish.fulfilled, (state) => {
				state.status.posting = false;
			})
			builder.addCase(newDish.rejected, (state) => {
				state.status.posting = false;
			})
			builder.addCase(deleteDish.pending, (state) => {
				state.status.deleting = true;
			})
			builder.addCase(deleteDish.fulfilled, (state) => {
				state.status.deleting = false;
			})
			builder.addCase(deleteDish.rejected, (state) => {
				state.status.deleting = false;
			})
			builder.addCase(getOrders.pending, (state) => {
					state.status.loadingOrders = true;
			})
			builder.addCase(getOrders.fulfilled, (state, action) => {
				state.status.loadingOrders = false;
				state.orders = action.payload;
			})
			builder.addCase(getOrders.rejected, (state) => {
				state.status.loadingOrders = false;
			})
			builder.addCase(completeOrder.pending, (state) => {
				state.status.deleting = true;
			})
			builder.addCase(completeOrder.fulfilled, (state) => {
				state.status.deleting = false;
			})
			builder.addCase(completeOrder.rejected, (state) => {
				state.status.deleting = false;
			})
			builder.addCase(getOneDish.pending, (state) => {
				state.status.loadingDishes = true;
			})
			builder.addCase(getOneDish.fulfilled, (state, action) => {
				state.edited = action.payload;
				state.status.loadingDishes = false;
			})
			builder.addCase(getOneDish.rejected, (state) => {
				state.status.loadingDishes = false;
			})
		}
	}
)

export const AdminDishesReducer = AdminDishesSlice.reducer;
export const AdminSelectDishes = (state: RootState) => state.dishes;