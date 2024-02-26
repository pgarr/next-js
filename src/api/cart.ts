import { executeGraphql } from "@/api/executeGraphql";
import {
	CartAddItemDocument,
	CartCreateDocument,
	CartGetByIdDocument,
	ProductGetByIdDocument,
} from "@/gql/graphql";

export const getCart = async (id: string) => {
	if (id) {
		const { cart } = await executeGraphql(CartGetByIdDocument, {
			id,
		});
		if (cart) {
			return cart;
		}
	}
};

export const createCart = async (productId: string, quantity: number) => {
	const { cartFindOrCreate: newCart } = await executeGraphql(CartCreateDocument, {
		productId,
		quantity,
	});
	if (!newCart) {
		throw new Error("Failed to create cart");
	}

	return newCart;
};

export const addProductToCart = async (cartId: string, productId: string, quantity: number) => {
	const cart = await getCart(cartId);
	if (!cart) {
		throw new Error(`Cart with id ${cartId} not found`);
	}

	const { product } = await executeGraphql(ProductGetByIdDocument, {
		id: productId,
	});
	if (!product) {
		throw new Error(`Product with id ${productId} not found`);
	}

	if (cart) {
		await executeGraphql(CartAddItemDocument, {
			cartId,
			productId,
			quantity,
		});
	}

	return cart;
};
