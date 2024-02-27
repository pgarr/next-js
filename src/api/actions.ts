"use server";

import { cookies } from "next/headers";
import { revalidateTag } from "next/cache";
import {
	addProductToCart,
	changeQuantity,
	createCart,
	getCart,
	removeProductFromCart,
} from "@/api/cart";

export const removeProductFromCartAction = async (cartId: string, productId: string) => {
	await removeProductFromCart(cartId, productId);
	revalidateTag("cart");
};

export const changeQuantityAction = async (cartId: string, productId: string, quantity: number) => {
	await changeQuantity(cartId, productId, quantity);
	revalidateTag("cart");
};

export const addProductToCartAction = async (productId: string, quantity: number) => {
	const cartId = cookies().get("cartId")?.value;
	if (cartId) {
		const cart = await getCart(cartId);
		if (cart) {
			const updatedCart = addProductToCart(cart.id, productId, quantity);
			revalidateTag("cart");
			return updatedCart;
		}
	}
	const newCart = await createCart(productId, quantity);
	revalidateTag("cart");
	cookies().set("cartId", newCart.id);
	return newCart;
};
