import { type ProductResponse } from "@/api/types";
import { type Product } from "@/types";

export const getProductsList = async (): Promise<Product[]> => {
	const response = await fetch("https://naszsklep-api.vercel.app/api/products?take=20");
	const productsResponse = JSON.parse(await response.text()) as ProductResponse[];

	return productsResponse.map((product) => ({
		id: product.id,
		image: { src: product.image, alt: product.title },
		name: product.title,
		category: product.category,
		price: product.price,
		description: product.description,
	}));
};

export const getProduct = async (id: string) => {
	const response = await fetch(`https://naszsklep-api.vercel.app/api/products/${id}`);
	const productResponse = JSON.parse(await response.text()) as ProductResponse;

	return {
		id: productResponse.id,
		image: { src: productResponse.image, alt: productResponse.title },
		name: productResponse.title,
		category: productResponse.category,
		price: productResponse.price,
		description: productResponse.description,
	};
};
