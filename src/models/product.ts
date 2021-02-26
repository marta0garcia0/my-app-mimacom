export interface Product {
	id: string,
	imageUrl?: string,
	stock: number,
	productName: string,
	price: number,
	productDescription: string,
	favorite: number | string,
	[key: string]: any;
}
export interface ProductCart {
	id: string,
	imageUrl?: string,
	stock: number,
	productName: string,
	price: number,
	productDescription: string,
	favorite: number | string,
	[key: string]: any;
	quantity: number;
}
