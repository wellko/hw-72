import {createAsyncThunk} from "@reduxjs/toolkit";
import {Dish, DishApi, Order} from "../../types";
import axiosApi from "../../axios-api";

export const newDish = createAsyncThunk<void, Dish>(
	'dishes/addNew',
	async (arg) => {
		await axiosApi.post('Delivery/Dishes.json', arg);
	}
)

export const getDishes = createAsyncThunk<DishApi[]>(
	'dishes/get',
	async () => {
		const response = await axiosApi.get('Delivery/Dishes.json');
		return Object.keys(response.data).map(key => {
			return {...response.data[key], id: key}
		})
	}
)

export const deleteDish = createAsyncThunk<void , string>(
	'dishes/delete',
	async (arg) => {
		await axiosApi.delete('Delivery/Dishes/' + arg + '.json');
	}
)

export const getOrders = createAsyncThunk<Order[]>(
	'dishes/orders',
	async () => {
		const response = await axiosApi.get('Delivery/orders.json');
		return Object.keys(response.data).map(key => {
			return {...response.data[key], id: key}
		})
	}
)

export const completeOrder = createAsyncThunk<void, string>(
	'dishes/complete',
	async (arg) => {
		await  axiosApi.delete('Delivery/orders/' + arg + '.json')
	}
)

export const getOneDish = createAsyncThunk<DishApi, string>(
	'dishes/One',
	async (arg) => {
		const response = await axiosApi.get('Delivery/Dishes/' + arg + '.json');
		return response.data
		})

