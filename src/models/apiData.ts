import { User } from "./user";

export interface ApiData {
	data: User[],
	page: number,
	per_page: number
	support?: {
		url: string,
		text: string,
	},
	total: number,
	total_pages: number,
}