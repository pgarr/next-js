import { type ProductResponse } from "@/api/types";
import { type Product } from "@/types";

const mapProductResponseToProduct = (productResponse: ProductResponse): Product => ({
	id: productResponse.id,
	image: { src: productResponse.image, alt: productResponse.title },
	name: productResponse.title,
	category: productResponse.category,
	price: productResponse.price,
	description: productResponse.description,
});

export const getProductsList = async (): Promise<Product[]> => {
	const response = await fetch("https://naszsklep-api.vercel.app/api/products?take=20");
	const productsResponse = JSON.parse(await response.text()) as ProductResponse[];
	return productsResponse.map(mapProductResponseToProduct);
};

export const getProductsListCount = async (): Promise<number> => {
	const response = await fetch("https://naszsklep-api.vercel.app/api/products?take=9999999");
	const productsResponse = JSON.parse(await response.text()) as ProductResponse[];
	return productsResponse.length;
};

export const getProductsListPaginated = async (
	page: number,
	take: number = 20,
): Promise<Product[]> => {
	const response = await fetch(
		`https://naszsklep-api.vercel.app/api/products?take=${take}&offset=${(page - 1) * take}`,
	);
	const productsResponse = JSON.parse(await response.text()) as ProductResponse[];
	return productsResponse.map(mapProductResponseToProduct);
};

export const getProduct = async (id: string) => {
	const response = await fetch(`https://naszsklep-api.vercel.app/api/products/${id}`);
	const productResponse = JSON.parse(await response.text()) as ProductResponse;
	return mapProductResponseToProduct(productResponse);
};
