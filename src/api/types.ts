export interface Rating {
	rate: number;
	count: number;
}

export type ProductResponse = {
	id: string;
	title: string;
	price: number;
	description: string;
	category: string;
	rating: Rating;
	image: string;
	longDescription: string;
};
