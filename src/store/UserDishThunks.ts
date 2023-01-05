import {createAsyncThunk} from "@reduxjs/toolkit";
import {CustomerInfo, Order} from "../types";
import axiosApi from "../axios-api"

interface  OrderProps {
	dishes: Order;
	customer: CustomerInfo;
}

export const MakeOrder = createAsyncThunk<void, OrderProps>(
	'order/make',
	async (arg) => {
		await axiosApi.post('Delivery/orders.json', arg);
	})