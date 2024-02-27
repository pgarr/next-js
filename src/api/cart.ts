import { executeGraphql } from "@/api/executeGraphql";
import {
	CartAddItemDocument,
	CartChangeItemQuantityDocument,
	CartCreateDocument,
	CartGetByIdDocument,
	CartRemoveItemDocument,
	ProductGetByIdDocument,
} from "@/gql/graphql";

export const getCart = async (id: string) => {
	if (id) {
		const { cart } = await executeGraphql({
			query: CartGetByIdDocument,
			variables: {
				id,
			},
			next: {
				tags: ["cart"],
			},
		});
		if (cart) {
			return cart;
		}
	}
};

export const createCart = async (productId: string, quantity: number) => {
	const { cartFindOrCreate: newCart } = await executeGraphql({
		query: CartCreateDocument,
		variables: {
			productId,
			quantity,
		},
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

	const { product } = await executeGraphql({
		query: ProductGetByIdDocument,
		variables: {
			id: productId,
		},
	});
	if (!product) {
		throw new Error(`Product with id ${productId} not found`);
	}

	await executeGraphql({
		query: CartAddItemDocument,
		variables: {
			cartId,
			productId,
			quantity,
		},
	});

	return cart;
};

export const changeQuantity = async (cartId: string, productId: string, quantity: number) => {
	const cart = await getCart(cartId);
	if (!cart) {
		throw new Error(`Cart with id ${cartId} not found`);
	}

	const { product } = await executeGraphql({
		query: ProductGetByIdDocument,
		variables: {
			id: productId,
		},
	});
	if (!product) {
		throw new Error(`Product with id ${productId} not found`);
	}

	await executeGraphql({
		query: CartChangeItemQuantityDocument,
		variables: {
			cartId,
			productId,
			quantity,
		},
	});

	return cart;
};

export const removeProductFromCart = async (cartId: string, productId: string) => {
	const cart = await getCart(cartId);
	if (!cart) {
		throw new Error(`Cart with id ${cartId} not found`);
	}

	const { product } = await executeGraphql({
		query: ProductGetByIdDocument,
		variables: {
			id: productId,
		},
	});
	if (!product) {
		throw new Error(`Product with id ${productId} not found`);
	}

	await executeGraphql({
		query: CartRemoveItemDocument,
		variables: {
			cartId,
			productId,
		},
	});

	return cart;
};
