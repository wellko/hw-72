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
	customer?: CustomerInfo;
}

export interface CustomerInfo {
	address? : string;
	name? : string;
	phone? : string;
}