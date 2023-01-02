export interface Dish {
	title: string;
	image: string;
	price: string;
}

export interface DishApi extends Dish{
	id: string;
}

export interface Order {
	[key:string]: number,
}