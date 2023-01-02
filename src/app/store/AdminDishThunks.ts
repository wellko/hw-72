import {createAsyncThunk} from "@reduxjs/toolkit";
import {Dish, DishApi} from "../../types";
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

