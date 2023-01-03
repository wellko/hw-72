import {createAsyncThunk} from "@reduxjs/toolkit";
import {Order} from "../../types";
import axiosApi from "../../axios-api";

export const MakeOrder = createAsyncThunk<void, Order>(
	'order/make',
	async (arg) => {
		await axiosApi.post('Delivery/orders.json', arg);
	})