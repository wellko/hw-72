export interface Dish {
	title: string;
	image: string;
	price: string;
}

export interface DishApi extends Dish{
	id: string;
}

export interface Order {
	[key:string]: number;
	id?: string;
}

export interface CustomerInfo {
	address : string;
	name : string;
	phone : string;
}

export interface Orders {
	dishes: Order;
	customer: CustomerInfo;
	id? : string;
}